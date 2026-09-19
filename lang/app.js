'use strict';

// ============ GLOBAL ERROR HANDLER ============
window.addEventListener('error',function(ev){
  try{
    var msg = ev.message || 'Unknown error';
    var src = ev.filename || '';
    var line = ev.lineno || '';
    var overlay = document.createElement('div');
    overlay.className = 'err-overlay';
    overlay.innerHTML = '<div><h2>خطای برنامه</h2><p style="margin:10px 0">لطفاً این متن را برای پشتیبانی بفرست:</p><pre>'+msg+'\n'+src+':'+line+'</pre><button onclick="localStorage.clear();location.reload()" style="margin-top:20px;padding:10px 24px;background:#fff;color:#d64550;border:none;border-radius:8px;font-weight:700;cursor:pointer">پاک کردن داده و رفرش</button></div>';
    document.body.appendChild(overlay);
  }catch(e){}
},true);

// ============ HELPERS ============
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function fa(n){return Number(n||0).toLocaleString('fa-IR')}
function ic(id){return '<svg class="ic"><use href="#i-'+id+'"/></svg>'}
var store={
  get:function(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
function toast(msg,ms){
  ms = ms || 3800;
  var t = document.createElement('div');t.className='toast';t.textContent=msg;
  document.body.appendChild(t);setTimeout(function(){t.remove()},ms);
}
function norm(s){return String(s||'').toLowerCase().replace(/[^a-z' ]/g,'').replace(/\s+/g,' ').trim()}
function lev(a,b){var m=a.length,n=b.length,d=[],i,j;for(i=0;i<=m;i++){d[i]=[i];for(j=1;j<=n;j++)d[i][j]=0}for(j=1;j<=n;j++)d[0][j]=j;for(i=1;i<=m;i++)for(j=1;j<=n;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[m][n]}
function sim(a,b){return 1-lev(a,b)/Math.max(a.length,b.length,1)}

// ============ STATE ============
var DEFAULT_SETTINGS={key:'',model:'gpt-4o-mini',rate:'slow',voice:'',hands:false,autoplay:true,showFa:true,proxy:'',syncCode:'',syncAuto:true,jobAnalyze:true,jobShowFa:true};
var settings = Object.assign({}, DEFAULT_SETTINGS, store.get('zy_settings',{}) || {});

var savedProg = store.get('zy_prog',{}) || {};
var prog = {
  xp: Number(savedProg.xp) || 0,
  streak: Number(savedProg.streak) || 0,
  last: String(savedProg.last || ''),
  done: (savedProg.done && typeof savedProg.done === 'object' && !Array.isArray(savedProg.done)) ? savedProg.done : {},
  program: (savedProg.program && typeof savedProg.program === 'object' && !Array.isArray(savedProg.program)) ? savedProg.program : {}
};
var lessonCache = store.get('zy_lessons',{}) || {};
if(typeof lessonCache !== 'object' || Array.isArray(lessonCache)) lessonCache = {};
var mistakes = store.get('zy_mistakes',[]) || [];
if(!Array.isArray(mistakes)) mistakes = [];
store.set('zy_prog', prog);

var view='program', pathLevel='A1', lessonCtx=null;
var curWeek=1;
var talk={started:false,level:'A1',topic:'',focus:'',unitId:null,history:[],turns:[],busy:false,count:0,report:null,reporting:false};
var job={view:'cats',catId:null,scenario:null,history:[],turns:[],busy:false,count:0,done:false,showHint:false};
var listening=false, rec=null;

function saveProg(){
  if(!prog.program || typeof prog.program !== 'object') prog.program = {};
  store.set('zy_prog', prog);
  updateStats();
  schedulePushToCloud();
}
function updateStats(){
  var xpEl = $('#xp'); if(xpEl) xpEl.textContent = fa(prog.xp);
  var stEl = $('#streak'); if(stEl) stEl.textContent = fa(prog.streak);
}
function award(n){
  prog.xp = (Number(prog.xp)||0) + n;
  var today = new Date().toDateString();
  var y = new Date(Date.now()-864e5).toDateString();
  if(prog.last !== today){
    prog.streak = (prog.last === y) ? (Number(prog.streak)||0)+1 : 1;
    prog.last = today;
  }
  saveProg();
}

// ============ SYNC ============
var syncKey=null, syncTimer=null, syncEnabled=false;
function updateSyncUI(){
  var badge=$('#syncBadge'); if(!badge) return;
  if(!settings.proxy || !settings.syncCode){badge.style.display='none';return}
  badge.style.display='flex';
  var dot=$('#syncDot'), label=$('#syncLabel');
  if(!dot||!label) return;
  dot.className='sync-dot '+(syncEnabled?'on':'off');
  label.textContent = syncEnabled?'متصل':'آفلاین';
}
function computeSyncKey(code){
  if(window.crypto && window.crypto.subtle){
    var data = new TextEncoder().encode('zabanyar-v1:'+code);
    return window.crypto.subtle.digest('SHA-256', data).then(function(hash){
      return Array.from(new Uint8Array(hash)).map(function(b){return b.toString(16).padStart(2,'0')}).join('').slice(0,32);
    });
  } else {
    var h=0, str='zabanyar-v1:'+code;
    for(var i=0;i<str.length;i++){h=((h<<5)-h+str.charCodeAt(i))|0}
    return Promise.resolve(Math.abs(h).toString(16).padStart(32,'0'));
  }
}
function initSync(){
  if(!settings.proxy || !settings.syncCode) return Promise.resolve(false);
  return computeSyncKey(settings.syncCode).then(function(k){
    syncKey=k; syncEnabled=true; updateSyncUI(); return true;
  }).catch(function(e){console.error('Sync init error:',e);return false});
}
function pushToCloud(){
  if(!syncEnabled || !syncKey) return Promise.resolve();
  var base = settings.proxy.replace(/\/+$/,'');
  var payload = {prog:prog, lessonCache:lessonCache, mistakes:mistakes, updatedAt:Date.now()};
  return fetch(base+'/sync/'+syncKey, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    .then(function(r){
      if(!r.ok) throw new Error('HTTP '+r.status);
      var dot=$('#syncDot'); if(dot) dot.className='sync-dot on';
    })
    .catch(function(e){console.error('Push error:',e);toast('خطا در ذخیره: '+e.message,5000)});
}
function pullFromCloud(silent){
  if(!syncEnabled || !syncKey) return Promise.resolve(false);
  var base = settings.proxy.replace(/\/+$/,'');
  return fetch(base+'/sync/'+syncKey).then(function(r){
    if(r.status===404){ return pushToCloud().then(function(){if(!silent)toast('پیشرفت محلی به ابر فرستاده شد ✅');return true}) }
    if(!r.ok) throw new Error('HTTP '+r.status);
    return r.json().then(function(d){
      if(d.prog){
        prog = Object.assign({xp:0,streak:0,last:'',done:{},program:{}}, d.prog);
        if(!prog.program || typeof prog.program !== 'object') prog.program={};
        if(!prog.done || typeof prog.done !== 'object') prog.done={};
        store.set('zy_prog', prog); updateStats();
      }
      if(d.lessonCache && typeof d.lessonCache === 'object'){lessonCache=d.lessonCache; store.set('zy_lessons',lessonCache)}
      if(Array.isArray(d.mistakes)){mistakes=d.mistakes; store.set('zy_mistakes',mistakes)}
      if(!silent) toast('پیشرفت از ابر بارگذاری شد ✅');
      render(); return true;
    });
  }).catch(function(e){console.error('Pull error:',e);if(!silent)toast('خطا: '+e.message,5000);return false});
}
function schedulePushToCloud(){
  if(!syncEnabled || !settings.syncAuto) return;
  clearTimeout(syncTimer);
  var dot=$('#syncDot'); if(dot) dot.className='sync-dot pending';
  syncTimer = setTimeout(pushToCloud, 1500);
}
function exportData(){
  var data={v:1,exportedAt:new Date().toISOString(),prog:prog,lessonCache:lessonCache,mistakes:mistakes};
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function importData(b64){
  var json = decodeURIComponent(escape(atob(b64.trim())));
  var data = JSON.parse(json);
  if(data.prog){prog=Object.assign({xp:0,streak:0,last:'',done:{},program:{}},data.prog);if(!prog.program)prog.program={};store.set('zy_prog',prog);updateStats()}
  if(data.lessonCache){lessonCache=data.lessonCache;store.set('zy_lessons',lessonCache)}
  if(data.mistakes){mistakes=data.mistakes;store.set('zy_mistakes',mistakes)}
  return true;
}

// ============ CURRICULUM ============
var LEVELS=[
 {id:'A1',name:'مقدماتی',units:[
  ['Greetings & Introductions','سلام و معرفی','Hello, I am…'],
  ['The verb "to be"','فعل to be','am/is/are'],
  ['Numbers, Age & Dates','اعداد و تاریخ','numbers, dates'],
  ['Family & People','خانواده','have/has'],
  ['Daily Routine','برنامه روزانه','present simple'],
  ['Food & Drink','غذا','ordering'],
  ['Places & Directions','مکان‌ها','there is/are'],
  ['Time & Days','ساعت','telling time'],
  ['Shopping & Prices','خرید','How much…?'],
  ['Likes & Dislikes','علایق','like/love/hate'],
  ['Can & Abilities','توانایی','can/can\'t'],
  ['What are you doing?','حال استمراری','present continuous']]},
 {id:'A2',name:'پایه',units:[
  ['Weekend Stories','آخر هفته','past simple'],
  ['Yesterday','دیروز','irregular past'],
  ['Future Plans','برنامه آینده','going to, will'],
  ['Travel & Transport','سفر','tickets'],
  ['Health & Body','سلامت','at the doctor'],
  ['Comparing Things','مقایسه','comparatives'],
  ['Hobbies & Free Time','سرگرمی','inviting'],
  ['Weather & Seasons','آب‌وهوا','weather'],
  ['Phone & Messages','تلفن','could/would'],
  ['Describing People','توصیف','adjectives'],
  ['Quantities','مقدار','some/any/much'],
  ['Hotels & Restaurants','هتل','booking']]},
 {id:'B1',name:'متوسط',units:[
  ['Life Experiences','تجربه‌ها','present perfect'],
  ['Present Perfect vs Past Simple','حال کامل','for/since'],
  ['Work & Career','کار','describing job'],
  ['If… will…','شرطی نوع اول','first conditional'],
  ['Opinions & Agreement','نظر دادن','I think'],
  ['Rules & Advice','قوانین','must, should'],
  ['Telling a Story','داستان','past continuous'],
  ['Technology & Social Media','فناوری','opinions'],
  ['Predictions & Plans','پیش‌بینی','future forms'],
  ['Relative Clauses','موصولی','who/which'],
  ['Job Interview Basics','مصاحبه','strengths'],
  ['Environment & Society','جامعه','problems']]},
 {id:'B2',name:'بالای متوسط',units:[
  ['Passive Voice','مجهول','passive'],
  ['Reported Speech','نقل قول','said that'],
  ['If I were…','شرطی نوع دوم','conditionals'],
  ['Debating & Persuading','بحث','arguing'],
  ['Business Meetings','جلسات','agenda'],
  ['Media & News','رسانه','summarising'],
  ['Phrasal Verbs','افعال عبارتی','phrasal verbs'],
  ['Wishes & Regrets','آرزو','I wish'],
  ['Cause & Effect','علت و معلول','linking'],
  ['Describing Trends','روند','increase'],
  ['Complaints & Diplomacy','شکایت','softening'],
  ['Culture & Travel','فرهنگ','narrative']]},
 {id:'C1',name:'پیشرفته',units:[
  ['Hedging & Nuance','ظرافت','it seems'],
  ['Formal Emails','ایمیل رسمی','register'],
  ['Negotiation','مذاکره','proposals'],
  ['Idioms & Collocations','اصطلاحات','natural chunks'],
  ['Inversion & Emphasis','وارونگی','cleft sentences'],
  ['Presentations','ارائه','structuring'],
  ['Academic Discussion','آکادمیک','abstract nouns'],
  ['Register & Humour','لحن','formal/informal'],
  ['Cross-cultural','بین‌فرهنگی','directness'],
  ['Storytelling','روایت','pacing']]},
 {id:'C2',name:'حرفه‌ای',units:[
  ['Advanced Interviews','مصاحبه پیشرفته','behavioural'],
  ['Leadership','رهبری','vision'],
  ['Rhetoric','بلاغت','framing'],
  ['Public Speaking','سخنرانی','delivery'],
  ['Technical Talks','ارائه تخصصی','explain complex'],
  ['Diplomatic Language','دیپلماتیک','tact'],
  ['Native-like Fluency','روانی بومی','fillers'],
  ['Critical Analysis','تحلیل','evidence'],
  ['Style & Register','سبک','adapting'],
  ['Mastery','تسلط','abstract topics']]}
];

var DEMO={title:'Greetings & Introductions',
intro_fa:'در این درس یاد می‌گیری سلام کنی، خودت را معرفی کنی و بگویی اهل کجایی.',
vocab:[
 {en:'Hello',say:'هِلو',fa:'سلام',ex:'Hello! I am Ali.',ex_fa:'سلام! من علی هستم.'},
 {en:'Goodbye',say:'گودبای',fa:'خداحافظ',ex:'Goodbye, see you tomorrow.',ex_fa:'خداحافظ.'},
 {en:'Name',say:'نِیم',fa:'اسم',ex:'My name is Sara.',ex_fa:'اسم من سارا است.'},
 {en:'From',say:'فِرام',fa:'از / اهل',ex:'I am from Iran.',ex_fa:'من اهل ایران هستم.'},
 {en:'Nice to meet you',say:'نایس تو میت یو',fa:'از آشنایی خوشحالم',ex:'Nice to meet you, Sam.',ex_fa:'خوشحالم.'},
 {en:'How are you?',say:'های آر یو',fa:'حالت چطور است؟',ex:'Hi Ali, how are you?',ex_fa:'سلام علی.'},
 {en:'Fine',say:'فاین',fa:'خوب',ex:'I am fine, thank you.',ex_fa:'خوبم، ممنون.'},
 {en:'Thank you',say:'تَنگ یو',fa:'ممنون',ex:'Thank you very much.',ex_fa:'خیلی ممنون.'},
 {en:'Please',say:'پلیز',fa:'لطفاً',ex:'Sit down, please.',ex_fa:'لطفاً بنشینید.'},
 {en:'Sorry',say:'سُری',fa:'ببخشید',ex:'Sorry, I am late.',ex_fa:'ببخشید.'}],
grammar:{title:'I am… / My name is…',
 explain_fa:'I am + اسم → «من … هستم»\nMy name is + اسم → «اسم من … است»',
 rules:['I am Ali. = I\'m Ali.','My name is Sara.','I am from Iran.'],
 examples:[{en:'Hi, I\'m Reza.',fa:'سلام، من رضا هستم.'}]},
dialogue:[
 {speaker:'A',en:'Hello! My name is Sam.',fa:'سلام! اسم من سم است.'},
 {speaker:'B',en:'Hi, Sam. I\'m Sara. Nice to meet you.',fa:'سلام سم.'}],
phrases:[{en:'What is your name?',fa:'اسم شما چیست؟'}],
quiz:[
 {q:'___ name is Sara.',options:['I','My','Me','Am'],answer:1,why_fa:'My name درست است.'},
 {q:'I ___ from Iran.',options:['is','are','am','be'],answer:2,why_fa:'با I فعل am می‌آید.'}],
speaking_goal:'خودت را معرفی کن.'};

// ============ JOB SCENARIOS ============
// level: easy (week 1-2), medium (3-4), hard (5-6), real (7-8)
var JOB_CATS=[
 {id:'it',name:'پشتیبانی IT',icon:'tool',desc:'حل مشکلات کارمندان'},
 {id:'rep',name:'گزارش به ایلدار',icon:'briefcase',desc:'به‌روزرسانی، موجودی، تأیید'},
 {id:'phone',name:'مکالمه تلفنی',icon:'phone',desc:'تماس با همکاران'},
 {id:'f2f',name:'حضوری',icon:'users',desc:'ملاقات حضوری'},
 {id:'biz',name:'وظایف کاری',icon:'file',desc:'فاکتور، موجودی، پیگیری'}
];

var JOB_SCENARIOS=[
 // === EASY SCENARIOS (week 1-2) ===
 {id:'e-hello',cat:'rep',level:'easy',title:'چک سریع',desc:'یه نگاه سریع از مدیر',
  role:'Manager',roleFa:'مدیر',
  opening:"Armin, any update?",
  hint:"جواب کوتاه بده. کلمه‌ی کلیدی: Yes / Working / Will send.",
  sample:"Yes, all good. I'll send the report by end of day."},
 {id:'e-ack',cat:'rep',level:'easy',title:'تأیید ساده',desc:'تأیید دریافت یه کار',
  role:'Manager',roleFa:'مدیر',
  opening:"Please take this and give it to Milad.",
  hint:"فقط تأیید کن: Understood. Will do. / Got it.",
  sample:"Understood. I'll take it to Milad."},
 {id:'e-count',cat:'rep',level:'easy',title:'چند تا داری؟',desc:'موجودی ساده',
  role:'Manager',roleFa:'مدیر',
  opening:"How many laptops do we have?",
  hint:"عدد + اسم. یا بگو دارم چک می‌کنم.",
  sample:"We have three."},
 {id:'e-where',cat:'rep',level:'easy',title:'کجاست؟',desc:'پیدا کردن یه نفر',
  role:'Manager',roleFa:'مدیر',
  opening:"Where is Ali?",
  hint:"بگو نمی‌دونم یا هست در...",
  sample:"I don't know. Let me check."},
 {id:'e-printer',cat:'it',level:'easy',title:'پرینتر روشن نمی‌شه',desc:'کاربر ساده',
  role:'User',roleFa:'کاربر',
  opening:"My printer is not working.",
  hint:"سؤال ساده بپرس: Is it on? Is there paper?",
  sample:"Is it turned on? Is there paper in the tray?"},
 {id:'e-internet',cat:'it',level:'easy',title:'اینترنت قطع شده',desc:'کاربر ساده',
  role:'User',roleFa:'کاربر',
  opening:"I have no internet.",
  hint:"بپرس Wi-Fi یا کابل؟ بعد بگو چک می‌کنم.",
  sample:"Are you on Wi-Fi or cable? Let me check."},

 // === MEDIUM SCENARIOS (week 3-4) ===
 {id:'m-printer',cat:'it',level:'medium',title:'پرینتر کار نمی‌کند',desc:'خطای دقیق',
  role:'User',roleFa:'کاربر',
  opening:"My printer isn't printing. There's a red light.",
  hint:"بپرس error message چیه. آفر remote بده.",
  sample:"Is there an error message? I'll remote in to check."},
 {id:'m-network',cat:'it',level:'medium',title:'اتصال به شبکه',desc:'مشکل شبکه',
  role:'User',roleFa:'کاربر',
  opening:"My laptop shows no network at all.",
  hint:"بپرس Wi-Fi یا کابل. ازش بخواه reconnect کنه.",
  sample:"Are you on Wi-Fi or cable? Could you disconnect and reconnect?"},
 {id:'m-office',cat:'it',level:'medium',title:'آفیس کرش می‌کند',desc:'مشکل نرم‌افزار',
  role:'User',roleFa:'کاربر',
  opening:"Word keeps crashing when I open a file.",
  hint:"بپرس کدوم فایل. safe mode رو امتحان کن.",
  sample:"Which file? Let's try opening in safe mode."},
 {id:'m-inventory',cat:'rep',level:'medium',title:'گزارش موجودی',desc:'موجودی کامل',
  role:'Manager',roleFa:'مدیر',
  opening:"How many spare HP laptops do we have in stock?",
  hint:"جواب کوتاه. اگه نداری، بگو چک می‌کنم.",
  sample:"We have three spare HP laptops. Let me confirm and send the list."},
 {id:'m-person',cat:'rep',level:'medium',title:'پیدا کردن افراد',desc:'پیگیری یه نفر',
  role:'Manager',roleFa:'مدیر',
  opening:"About Mr. Raei-Tabar. Do you know where he is?",
  hint:"جواب: نمی‌دونم ولی پیگیری می‌کنم.",
  sample:"I don't know yet. I'll check and let you know."},

 // === HARD SCENARIOS (week 5-6) ===
 {id:'h-daily',cat:'rep',level:'hard',title:'گزارش روزانه',desc:'به‌روزرسانی کامل',
  role:'Manager',roleFa:'مدیر',
  opening:"Hello Armin. Do you have a minute? I'd like a quick update for today.",
  hint:"ساختار: Yesterday I… Today I… Blockers:",
  sample:"Sure. Yesterday I finished the printer issue. Today I'm setting up two laptops. No blockers."},
 {id:'h-delay',cat:'rep',level:'hard',title:'توضیح تأخیر',desc:'کار دیر شده',
  role:'Manager',roleFa:'مدیر',
  opening:"Why is the laptop setup delayed? I expected it yesterday.",
  hint:"عذرخواهی + دلیل + ETA",
  sample:"Sorry for the delay. The new laptops arrived late. I'll have them ready by tomorrow noon."},
 {id:'h-phone-in',cat:'phone',level:'hard',title:'دریافت تماس',desc:'تماس از همکار',
  role:'Colleague',roleFa:'همکار',
  opening:"Hello? Armin? Can you hear me?",
  hint:"Yes I can hear you + How can I help?",
  sample:"Yes, I can hear you. How can I help?"},
 {id:'h-phone-mgr',cat:'phone',level:'hard',title:'تماس با ایلدار',desc:'مدیر زنگ می‌زند',
  role:'Manager',roleFa:'مدیر',
  opening:"Armin? Hello. I need a quick status on the tickets today.",
  hint:"گزارش کوتاه + سؤال اگه نیازه.",
  sample:"Hi Ildar. We have three open tickets. Two are in progress. Anything urgent?"},

 // === REAL SCENARIOS (week 7-8) ===
 {id:'r-meeting',cat:'f2f',level:'real',title:'جلسه‌ی حضوری',desc:'توضیح دقیق',
  role:'Manager',roleFa:'مدیر',
  opening:"Let's sit down. I want to discuss the printer issue from yesterday.",
  hint:"توضیح کامل: چی شد، چی کردی، نتیجه.",
  sample:"The printer had a paper jam. I cleared it and tested. Now it works fine."},
 {id:'r-invoice',cat:'biz',level:'real',title:'پیگیری اینویس',desc:'فاکتور',
  role:'Colleague',roleFa:'همکار',
  opening:"Hi Armin. Any news about invoice #1234?",
  hint:"چک می‌کنم یا تأیید وضعیت.",
  sample:"Let me check. It was submitted last week. I'll confirm and get back to you."},
 {id:'r-hall',cat:'f2f',level:'real',title:'راهرو',desc:'گپ کوتاه',
  role:'Manager',roleFa:'مدیر',
  opening:"Hello Armin, good morning. Do you have a minute?",
  hint:"Greet + yes + what do you need?",
  sample:"Good morning. Yes, of course. What do you need?"},
 {id:'r-balance',cat:'biz',level:'real',title:'موجودی حساب',desc:'چک موجودی',
  role:'Manager',roleFa:'مدیر',
  opening:"Can you check the current balance and let me know?",
  hint:"Acknowledge + check + report.",
  sample:"Sure. Let me check now and I'll send you the number."}
];

function scenariosByLevel(level){
  return JOB_SCENARIOS.filter(function(s){return s.level===level});
}

// ============ PROGRAM ============
var PROGRAM=[
 {week:1,title:'پایه‌سازی — فعل to be',goal:'یادگیری فعل to be و Present Simple',
  lessons:[{level:'A1',idx:1,note:'پایه‌ی همه‌چیز'},{level:'A1',idx:4,note:'برای گزارش روزانه'}],
  scenarios:[{id:'e-hello',note:'چک سریع'},{id:'e-ack',note:'تأیید ساده'}],
  schedule:['۱۵ دقیقه: یه درس','۱۰ دقیقه: ۲ سناریوی ساده','۵ دقیقه: تلفظ']},
 {week:2,title:'درخواست و گذشته',goal:'Can/Could و Past Simple',
  lessons:[{level:'A1',idx:10,note:'Can برای درخواست'},{level:'A2',idx:0,note:'Past Simple'}],
  scenarios:[{id:'e-printer',note:'پرینتر ساده'},{id:'e-count',note:'چند تا داری؟'}],
  schedule:['۱۵ دقیقه: یه درس','۱۰ دقیقه: ۲ سناریوی ساده','۵ دقیقه: تکرار']},
 {week:3,title:'آینده و قوانین',goal:'Future و Rules',
  lessons:[{level:'A2',idx:2,note:'Will/Going to'},{level:'B1',idx:5,note:'Should/Must'}],
  scenarios:[{id:'m-printer',note:'پشتیبانی پرینتر'},{id:'m-network',note:'شبکه'}],
  schedule:['۱۵ دقیقه: یه درس','۱۰ دقیقه: ۲ سناریو','۵ دقیقه: مرور']},
 {week:4,title:'حال کامل و نظر',goal:'Present Perfect و Opinions',
  lessons:[{level:'B1',idx:1,note:'Present Perfect'},{level:'B1',idx:4,note:'I think'}],
  scenarios:[{id:'m-inventory',note:'گزارش موجودی'},{id:'m-person',note:'پیدا کردن افراد'}],
  schedule:['۱۵ دقیقه: یه درس','۱۵ دقیقه: ۳ سناریو','۵ دقیقه: مکالمه']},
 {week:5,title:'شرطی و داستان',goal:'If…will و Telling a Story',
  lessons:[{level:'B1',idx:3,note:'First Conditional'},{level:'B1',idx:6,note:'Past Continuous'}],
  scenarios:[{id:'h-daily',note:'گزارش روزانه'},{id:'h-delay',note:'توضیح تأخیر'}],
  schedule:['۱۰ دقیقه: یه درس','۲۰ دقیقه: ۳ سناریو']},
 {week:6,title:'مکالمه تلفنی',goal:'آماده‌شدن برای تماس‌ها',
  lessons:[{level:'A2',idx:8,note:'Could/Would'}],
  scenarios:[{id:'h-phone-in',note:'دریافت تماس'},{id:'h-phone-mgr',note:'تماس با ایلدار'}],
  schedule:['۱۰ دقیقه: مرور','۲۰ دقیقه: ۳ سناریو','دست‌آزاد']},
 {week:7,title:'حضوری و پیگیری',goal:'ملاقات حضوری',
  lessons:[{level:'B1',idx:10,note:'مصاحبه'},{level:'B2',idx:4,note:'Meetings'}],
  scenarios:[{id:'r-hall',note:'راهرو'},{id:'r-meeting',note:'جلسه'},{id:'r-invoice',note:'پیگیری'}],
  schedule:['۱۰ دقیقه: مرور','۲۵ دقیقه: ۳ سناریو']},
 {week:8,title:'خودکارسازی',goal:'مرور همه‌چیز',
  lessons:[{level:'B2',idx:10,note:'Complaints'}],
  scenarios:[{id:'r-balance',note:'موجودی'},{id:'h-daily',note:'گزارش'},{id:'r-meeting',note:'حضوری'}],
  schedule:['۱۰ دقیقه: درس','۲۰ دقیقه: مرور']}
];

// ============ API ============
function callAI(system,messages,max){
  max = max || 1500;
  if(!settings.key) return Promise.reject(new Error('NOKEY'));
  var baseUrl = (settings.proxy && settings.proxy.trim()) ? settings.proxy.trim().replace(/\/+$/,'') : 'https://1xai.ir';
  var body = {model:settings.model, max_tokens:max, messages:[{role:'system',content:system}].concat(messages)};
  return fetch(baseUrl+'/v1/chat/completions',{
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization':'Bearer '+settings.key},
    body:JSON.stringify(body)
  }).then(function(r){
    if(!r.ok) return r.json().catch(function(){return{}}).then(function(d){
      var m = (d.error && d.error.message) || (d.error) || '';
      throw new Error(r.status + (m?' — '+m:''));
    });
    return r.json();
  }).then(function(d){
    return ((d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content)||'').trim();
  });
}
function parseJSON(t){
  t = t.replace(/```json|```/g,'');
  var a = t.indexOf('{'), b = t.lastIndexOf('}');
  if(a<0 || b<0) throw new Error('bad json');
  return JSON.parse(t.slice(a,b+1));
}
function errText(e){
  if(e.message==='NOKEY') return 'اول کلید API را در «تنظیمات» وارد کنید.';
  if(/Failed to fetch/i.test(e.message)) return 'اتصال برقرار نشد. آدرس پروکسی را در تنظیمات وارد کنید.';
  return 'خطا: '+e.message;
}

// ============ SPEECH ============
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
var voices = [];
function loadVoices(){
  if('speechSynthesis' in window){
    voices = speechSynthesis.getVoices().filter(function(v){return v.lang && v.lang.toLowerCase().indexOf('en')===0});
  }
}
if('speechSynthesis' in window){speechSynthesis.onvoiceschanged = loadVoices; loadVoices()}
function speak(text,onend,pitch){
  pitch = pitch || 1;
  if(!('speechSynthesis' in window)){onend&&onend();return}
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang='en-US'; u.pitch=pitch;
  var v = voices.filter(function(x){return x.name===settings.voice})[0] || voices.filter(function(x){return x.lang==='en-US'})[0] || voices[0];
  if(v) u.voice=v;
  u.rate = ({slow:0.72,normal:0.95,fast:1.15})[settings.rate] || 0.9;
  var fin=false;
  var end=function(){if(!fin){fin=true;onend&&onend()}};
  u.onend=end; u.onerror=end;
  speechSynthesis.speak(u);
}
function listen(opt){
  if(!SR){toast('این مرورگر تشخیص گفتار ندارد.');return null}
  if('speechSynthesis' in window) speechSynthesis.cancel();
  var r = new SR();
  r.lang='en-US'; r.interimResults=true; r.continuous=false; r.maxAlternatives=1;
  var text='', conf=null;
  r.onresult = function(e){
    var t='', c=null;
    for(var i=0;i<e.results.length;i++){t+=e.results[i][0].transcript+' ';c=e.results[i][0].confidence}
    text=t.trim(); conf=c;
    opt.interim && opt.interim(text);
  };
  r.onerror = function(e){
    if(e.error==='not-allowed') toast('دسترسی به میکروفون داده نشد.');
  };
  r.onend = function(){opt.done && opt.done(text,conf)};
  try{r.start()}catch(e){return null}
  return r;
}

// ============ ROUTER ============
function go(v){
  view = v;
  $$('.tab').forEach(function(t){
    t.setAttribute('aria-current', String(t.getAttribute('data-v') === (v==='lesson'?'path':v)));
  });
  render();
  window.scrollTo(0,0);
}
function render(){
  try{
    if(view==='program') return renderProgram();
    if(view==='path') return renderPath();
    if(view==='lesson') return renderLesson();
    if(view==='job') return renderJob();
    if(view==='talk') return renderTalk();
    if(view==='notes') return renderNotes();
    if(view==='settings') return renderSettings();
    renderProgram();
  }catch(e){
    console.error('Render error:', e);
    var m = $('#main');
    if(m) m.innerHTML = '<div class="card"><b>خطا در نمایش</b><p style="margin:10px 0;font-family:monospace;font-size:12px" dir="ltr">'+esc(e.message)+'</p><button class="btn brand" onclick="location.reload()" type="button">رفرش</button></div>';
  }
}

// ============ PROGRAM ============
function taskKey(type,id){return type+':'+id}
function isTaskDone(type,id){
  if(!prog.program || typeof prog.program !== 'object') return false;
  return !!prog.program[taskKey(type,id)];
}
function toggleTask(type,id){
  if(!prog.program || typeof prog.program !== 'object') prog.program = {};
  var k = taskKey(type,id);
  if(prog.program[k]) delete prog.program[k];
  else {prog.program[k]=Date.now(); award(3)}
  saveProg();
  renderProgram();
}
function weekProgress(w){
  var p = null;
  for(var i=0;i<PROGRAM.length;i++) if(PROGRAM[i].week===w){p=PROGRAM[i];break}
  if(!p) return 0;
  var total = p.lessons.length + p.scenarios.length;
  var done = 0;
  p.lessons.forEach(function(l){if(isTaskDone('les',l.level+':'+l.idx))done++});
  p.scenarios.forEach(function(s){if(isTaskDone('sc',s.id))done++});
  return total ? Math.round(done*100/total) : 0;
}
function isWeekDone(w){return weekProgress(w)===100}

function renderProgram(){
  var p = null;
  for(var i=0;i<PROGRAM.length;i++) if(PROGRAM[i].week===curWeek){p=PROGRAM[i];break}
  if(!p){curWeek=1;return renderProgram()}
  var h = '<h1>برنامه‌ی ۸ هفته‌ای من</h1><p class="sub">برنامه‌ی گام‌به‌گام ترکیبی از درس + سناریو.</p>';
  h += '<div class="week-nav">';
  PROGRAM.forEach(function(w){
    var done = isWeekDone(w.week) ? 'done' : '';
    h += '<button type="button" class="week-tab '+done+'" data-w="'+w.week+'" aria-pressed="'+(w.week===curWeek)+'"><b>هفته '+fa(w.week)+'</b><small>'+weekProgress(w.week)+'٪</small></button>';
  });
  h += '</div>';
  var pct = weekProgress(p.week);
  h += '<div class="week-head"><h2>هفته '+fa(p.week)+' — '+esc(p.title)+'</h2><p>🎯 '+esc(p.goal)+'</p><div class="prog-bar"><i style="width:'+pct+'%"></i></div><div style="font-size:.8rem;margin-top:4px;opacity:.9">'+fa(pct)+'٪ تکمیل</div></div>';
  h += '<div class="week-section"><h3>📚 درس‌ها</h3><div class="task-list" id="lessonList"></div></div>';
  h += '<div class="week-section"><h3>💼 سناریوهای شغلی</h3><div class="task-list" id="jobList"></div></div>';
  h += '<div class="week-section"><h3>⏱️ برنامه روزانه</h3><div class="schedule"><ul>';
  p.schedule.forEach(function(x){h+='<li>'+esc(x)+'</li>'});
  h += '</ul></div></div>';
  h += '<div class="row between" style="margin-top:20px"><button type="button" class="btn ghost" id="prevW"'+(curWeek>1?'':' disabled')+'>← قبلی</button><button type="button" class="btn prog" id="nextW"'+(curWeek<8?'':' disabled')+'>بعدی →</button></div>';
  $('#main').innerHTML = h;
  $$('.week-tab').forEach(function(b){b.onclick=function(){curWeek = +b.getAttribute('data-w'); renderProgram()}});
  var pw = $('#prevW'); if(pw) pw.onclick = function(){if(curWeek>1){curWeek--;renderProgram()}};
  var nw = $('#nextW'); if(nw) nw.onclick = function(){if(curWeek<8){curWeek++;renderProgram()}};
  var lessonList = $('#lessonList');
  if(lessonList){
    p.lessons.forEach(function(l){
      var lv = null;
      for(var i=0;i<LEVELS.length;i++) if(LEVELS[i].id===l.level){lv=LEVELS[i];break}
      if(!lv) return;
      var u = lv.units[l.idx]; if(!u) return;
      var done = isTaskDone('les', l.level+':'+l.idx);
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'task' + (done?' done':'');
      btn.innerHTML = '<div class="tick">'+(done?'✓':'')+'</div><div class="body"><div class="tt" dir="ltr">'+esc(u[0])+'</div><div class="td">'+esc(u[1])+' — '+esc(l.note)+'</div></div><span class="badge lv">'+l.level+'</span>';
      btn.addEventListener('click', function(ev){
        if(ev.target.closest('.tick')){ev.preventDefault();toggleTask('les', l.level+':'+l.idx);return}
        if(!prog.program || typeof prog.program !== 'object') prog.program = {};
        prog.program.lastFrom = 'program';
        saveProg();
        openLesson(l.level, l.idx);
      });
      lessonList.appendChild(btn);
    });
  }
  var jobList = $('#jobList');
  if(jobList){
    p.scenarios.forEach(function(sc){
      var s = null;
      for(var i=0;i<JOB_SCENARIOS.length;i++) if(JOB_SCENARIOS[i].id===sc.id){s=JOB_SCENARIOS[i];break}
      if(!s) return;
      var done = isTaskDone('sc', s.id);
      var lvlLabel = {easy:'ساده',medium:'متوسط',hard:'سخت',real:'واقعی'}[s.level] || '';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'task' + (done?' done':'');
      btn.innerHTML = '<div class="tick">'+(done?'✓':'')+'</div><div class="body"><div class="tt">'+esc(s.title)+' <span class="pill '+s.level+'" style="font-size:.7rem">'+lvlLabel+'</span></div><div class="td">'+esc(s.desc)+' — '+esc(sc.note)+'</div></div><span class="badge jb">'+esc(s.roleFa)+'</span>';
      btn.addEventListener('click', function(ev){
        if(ev.target.closest('.tick')){ev.preventDefault();toggleTask('sc', s.id);return}
        if(!prog.program || typeof prog.program !== 'object') prog.program = {};
        prog.program.lastFrom = 'program';
        saveProg();
        startJobScenario(s.id);
      });
      jobList.appendChild(btn);
    });
  }
}

// ============ PATH ============
function unitId(l,i){return l+'-'+i}
function renderPath(){
  var L = null;
  for(var i=0;i<LEVELS.length;i++) if(LEVELS[i].id===pathLevel){L=LEVELS[i];break}
  if(!L){pathLevel='A1';L=LEVELS[0]}
  var h = '';
  if(!settings.key) h += '<div class="banner"><div><b>برای درس‌های کامل، کلید API لازم است.</b></div><button type="button" class="btn brand" id="gset">تنظیمات</button></div>';
  h += '<h1>همه‌ی درس‌ها</h1><p class="sub">۶ سطح، ۶۰+ درس.</p>';
  h += '<div class="levels">';
  LEVELS.forEach(function(l){
    h += '<button type="button" class="lv" data-lv="'+l.id+'" aria-pressed="'+(l.id===pathLevel)+'"><b>'+l.id+'</b><small>'+l.name+'</small></button>';
  });
  h += '</div><div class="units">';
  L.units.forEach(function(u,i){
    var d = prog.done[unitId(L.id,i)] || {};
    var st = d.talk ? 'کامل' : (d.quiz!=null ? 'آزمون '+fa(d.quiz)+'٪' : '');
    h += '<button type="button" class="unit '+(d.talk?'done':'')+'" data-u="'+i+'"><span class="n">'+(d.talk?'✓':fa(i+1))+'</span><span><div class="t" dir="ltr">'+esc(u[0])+'</div><div class="f">'+esc(u[1])+'</div></span><span class="st">'+st+'</span></button>';
  });
  h += '</div>';
  $('#main').innerHTML = h;
  $$('.lv').forEach(function(b){b.onclick=function(){pathLevel=b.getAttribute('data-lv');renderPath()}});
  $$('.unit').forEach(function(b){b.onclick=function(){openLesson(pathLevel, +b.getAttribute('data-u'))}});
  var g = $('#gset'); if(g) g.onclick = function(){go('settings')};
}

// ============ LESSON ============
var LESSON_SYS = 'You are an expert EFL curriculum designer for Persian speakers. Create ONE lesson as strict JSON (no markdown).\nSchema: {"title":string,"intro_fa":string,"vocab":[{"en":string,"say":string,"fa":string,"ex":string,"ex_fa":string}],"grammar":{"title":string,"explain_fa":string,"rules":[string],"examples":[{"en":string,"fa":string}]},"dialogue":[{"speaker":"A"|"B","en":string,"fa":string}],"phrases":[{"en":string,"fa":string}],"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}],"speaking_goal":string}\nRules: exactly 10 vocab, "say" for A1-A2, grammar in Persian, dialogue 6-8 lines, 5 phrases, 6 quiz (0-based answer), all Persian explanations, valid JSON.';

function openLesson(level,idx){
  var L = null;
  for(var i=0;i<LEVELS.length;i++) if(LEVELS[i].id===level){L=LEVELS[i];break}
  if(!L) return;
  var unit = L.units[idx]; if(!unit) return;
  var id = unitId(level,idx);
  var cached = lessonCache[id];
  var hasLesson = (id==='A1-0') || !!cached;
  lessonCtx = {id:id, level:level, idx:idx, unit:unit, lesson:(id==='A1-0'?DEMO:(cached||null)), step:'learn', loading:!hasLesson, err:null, quizDone:false};
  go('lesson');
  if(!hasLesson) genLesson();
}
function genLesson(){
  var C = lessonCtx; if(!C) return;
  C.loading = true; C.err = null; render();
  callAI(LESSON_SYS, [{role:'user',content:'CEFR: '+C.level+'\nUnit: "'+C.unit[0]+'" ('+C.unit[1]+')\nFocus: '+C.unit[2]}], 5000)
    .then(function(raw){
      var j = parseJSON(raw);
      if(!j.vocab || !j.quiz) throw new Error('incomplete lesson');
      lessonCache[C.id] = j; store.set('zy_lessons', lessonCache); C.lesson = j;
      schedulePushToCloud();
      C.loading = false;
      if(view==='lesson' && lessonCtx===C) render();
    })
    .catch(function(e){
      C.err = errText(e);
      C.loading = false;
      if(view==='lesson' && lessonCtx===C) render();
    });
}
function renderLesson(){
  var C = lessonCtx; if(!C){go('path');return}
  var h = '<button type="button" class="link" id="back">← بازگشت</button><div class="lh"><span class="lvl">'+C.level+'</span><h1 class="en" dir="ltr">'+esc(C.unit[0])+'</h1><p class="sub">'+esc(C.unit[1])+'</p></div>';
  if(C.loading || (!C.lesson && !C.err)){
    h += '<div class="card"><b>در حال ساخت درس…</b><div class="skel"></div><div class="skel" style="width:80%"></div></div>';
  } else if(C.err){
    h += '<div class="card"><p>'+esc(C.err)+'</p><div class="row" style="margin-top:12px"><button type="button" class="btn brand" id="retry">تلاش دوباره</button></div></div>';
  } else {
    h += '<div class="steps">';
    [['learn','۱. آموزش'],['quiz','۲. آزمون'],['speak','۳. صحبت']].forEach(function(x){
      h += '<button type="button" class="stp" data-s="'+x[0]+'" aria-current="'+(C.step===x[0])+'">'+x[1]+'</button>';
    });
    h += '</div>';
    if(C.step==='learn') h += learnHTML(C.lesson);
    else if(C.step==='quiz') h += '<div class="card"><h2>آزمون کوتاه</h2><div id="quiz">'+quizHTML(C.lesson.quiz)+'</div></div>';
    else h += speakHTML(C.lesson);
  }
  $('#main').innerHTML = h;
  var back = $('#back'); if(back) back.onclick = function(){
    if(prog.program && prog.program.lastFrom==='program'){prog.program.lastFrom='';saveProg();go('program')}
    else go('path');
  };
  var rt = $('#retry'); if(rt) rt.onclick = genLesson;
  $$('.stp').forEach(function(b){b.onclick=function(){C.step=b.getAttribute('data-s');renderLesson();window.scrollTo(0,0)}});
  var nx = $('#nextQuiz'); if(nx) nx.onclick = function(){C.step='quiz';renderLesson();window.scrollTo(0,0)};
  var pd = $('#playDlg'); if(pd) pd.onclick = function(){var i=0,L=C.lesson.dialogue;var next=function(){if(i>=L.length)return;var l=L[i++];speak(l.en,next,l.speaker==='A'?1:1.25)};next()};
  var rg = $('#regen'); if(rg) rg.onclick = function(){delete lessonCache[C.id];store.set('zy_lessons',lessonCache);C.lesson=null;C.err=null;C.loading=true;genLesson()};
  var qz = $('#quiz'); if(qz) bindQuiz(qz, C.lesson.quiz, function(s,n){
    var pct = Math.round(100*s/n);
    var d = prog.done[C.id] = prog.done[C.id] || {};
    d.quiz = Math.max(d.quiz||0, pct); award(s*3);
    if(prog.program && prog.program.lastFrom==='program'){
      if(!prog.program) prog.program={};
      prog.program[taskKey('les', C.level+':'+C.idx)] = Date.now();
      saveProg();
    }
    $('.qres',qz).innerHTML = 'نتیجه: '+fa(s)+' از '+fa(n)+' — '+(pct>=70?'عالی!':'مرور کن.')+' <div class="row" style="margin-top:10px"><button type="button" class="btn brand" id="toSpeak">برو به صحبت</button></div>';
    $('#toSpeak').onclick = function(){C.step='speak';renderLesson();window.scrollTo(0,0)};
  });
  var st = $('#startTalk'); if(st) st.onclick = function(){startTalk({level:C.level,topic:C.unit[0],focus:C.unit[2],unitId:C.id})};
}
function learnHTML(L){
  var h = '<div class="stack"><div class="card"><p>'+esc(L.intro_fa)+'</p></div>';
  h += '<div class="card"><h2>لغت‌های کلیدی</h2><div class="vgrid">';
  (L.vocab||[]).forEach(function(v){
    h += '<div class="vc"><div class="row between"><span class="w" dir="ltr">'+esc(v.en)+'</span><span class="row"><button type="button" class="mini" data-say="'+esc(v.en)+'">'+ic('vol')+'</button><button type="button" class="mini" data-prac="'+esc(v.en)+'">'+ic('mic')+'</button></span></div>'+(v.say?'<div class="say">'+esc(v.say)+'</div>':'')+'<div>'+esc(v.fa)+'</div><div class="ex" dir="ltr">'+esc(v.ex)+'</div><div class="exfa">'+esc(v.ex_fa)+'</div><div class="pr"></div></div>';
  });
  h += '</div></div>';
  var g = L.grammar||{};
  h += '<div class="card"><h2>گرامر: <span dir="ltr" class="en">'+esc(g.title)+'</span></h2><p class="pre">'+esc(g.explain_fa)+'</p><ul class="rules" dir="ltr">';
  (g.rules||[]).forEach(function(r){h+='<li><span>'+esc(r)+'</span></li>'});
  h += '</ul></div>';
  h += '<div class="card"><h2>گفتگوی نمونه</h2><div class="dl">';
  (L.dialogue||[]).forEach(function(l){
    h += '<div class="dline '+(l.speaker==='B'?'b':'')+'"><button type="button" class="mini" data-say="'+esc(l.en)+'">'+ic('vol')+'</button><div class="bub"><div dir="ltr" class="en">'+esc(l.en)+'</div><div class="fa">'+esc(l.fa)+'</div></div></div>';
  });
  h += '</div></div>';
  h += '<div class="row between"><button type="button" class="btn brand" id="nextQuiz">برو به آزمون</button></div></div>';
  return h;
}
function speakHTML(L){
  return '<div class="card stack"><h2>هدف صحبت</h2><p>'+esc(L.speaking_goal||'')+'</p><div class="row"><button type="button" class="btn brand" id="startTalk">'+ic('mic')+' شروع مکالمه</button></div></div>';
}
function quizHTML(q){
  return q.map(function(x,i){
    return '<div class="q" data-i="'+i+'"><div class="qt en" dir="ltr">'+(i+1)+'. '+esc(x.q)+'</div><div class="opts">'+x.options.map(function(o,j){return '<button type="button" class="opt en" data-j="'+j+'" dir="ltr">'+esc(o)+'</button>'}).join('')+'</div><div class="why"></div></div>';
  }).join('')+'<div class="qres"></div>';
}
function bindQuiz(root, quiz, done){
  var answered=0, score=0;
  $$('.q',root).forEach(function(qe){
    var q = quiz[+qe.getAttribute('data-i')];
    $$('.opt',qe).forEach(function(b){
      b.onclick = function(){
        if(qe.classList.contains('done')) return;
        qe.classList.add('done');
        var ok = +b.getAttribute('data-j') === +q.answer;
        if(ok) score++;
        b.classList.add(ok?'ok':'bad');
        if(!ok){var c=$$('.opt',qe)[+q.answer]; if(c) c.classList.add('ok')}
        $('.why',qe).textContent = (ok?'درست! ':'نه دقیقاً. ')+(q.why_fa||'');
        if(++answered === quiz.length) done(score, quiz.length);
      };
    });
  });
}

// ============ JOB MODE ============
function jobSystemPrompt(){
  var sc = job.scenario; if(!sc) return '';
  var roleDesc = ({'User':'a non-technical office worker','Manager':'Ildar, a Russian IT manager (English is second language; brief and direct)','Colleague':'a friendly colleague'})[sc.role];
  var levelHint = {easy:'Armin is a beginner. Use VERY simple questions.',medium:'Armin is at A2. Moderate questions.',hard:'Armin is at B1. Natural questions.',real:'Armin is at B2+. Fully natural.'}[sc.level] || '';
  return 'You are role-playing as '+roleDesc+' in a workplace conversation with Armin, an Iranian IT support specialist.\n\nSCENARIO: '+sc.title+'\nCONTEXT: '+sc.opening+'\nYOUR ROLE: '+sc.role+'\nLEVEL: '+sc.level+' — '+levelHint+'\n\nRules:\n- Stay in character. SHORT lines (1-2 sentences).\n- Analyse Armin\'s LAST message.\nReturn ONLY valid JSON:\n{"reply":"your line","reply_fa":"Persian translation","analysis":{"score":0-10,"is_correct":true,"corrected":"natural version","mistakes":[{"type":"grammar|vocabulary|register|brevity","original":"...","fix":"...","explain_fa":"توضیح"}],"tip_fa":"نکته","brevity_note":"too long|too short|good"},"scenario_complete":false}';
}
function renderJob(){
  var el = $('#main');
  if(job.view==='cats'){
    var h = '<h1>حالت شغلی</h1><p class="sub">سناریوهای واقعی کار — از ساده تا پیشرفته.</p><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:16px">';
    JOB_CATS.forEach(function(c){
      var cnt = JOB_SCENARIOS.filter(function(s){return s.cat===c.id}).length;
      h += '<button type="button" class="card" data-cat="'+c.id+'" style="text-align:start;cursor:pointer;padding:16px"><div style="font-size:1.5rem;margin-bottom:6px">'+ic(c.icon)+'</div><div style="font-weight:700">'+esc(c.name)+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(c.desc)+'</div><div style="font-size:.78rem;color:var(--brand);margin-top:6px">'+fa(cnt)+' سناریو</div></button>';
    });
    h += '</div>';
    h += '<div class="card" style="margin-top:20px;text-align:center"><b>برنامه‌ی ۸ هفته‌ای</b><p class="sub" style="margin:8px 0">تمرین ساختاریافته با اولویت</p><button type="button" class="btn prog" id="toProg">'+ic('cal')+' برو به برنامه من</button></div>';
    el.innerHTML = h;
    $$('.card[data-cat]').forEach(function(b){b.onclick=function(){job.view='list';job.catId=b.getAttribute('data-cat');renderJob()}});
    var tp = $('#toProg'); if(tp) tp.onclick = function(){go('program')};
    return;
  }
  if(job.view==='list'){
    var cat = null;
    for(var i=0;i<JOB_CATS.length;i++) if(JOB_CATS[i].id===job.catId){cat=JOB_CATS[i];break}
    if(!cat){job.view='cats';return renderJob()}
    var list = JOB_SCENARIOS.filter(function(s){return s.cat===job.catId});
    var h = '<button type="button" class="link" id="jback">← بازگشت</button><h1>'+esc(cat.name)+'</h1><p class="sub">'+esc(cat.desc)+'</p>';
    // گروه‌بندی بر اساس سطح
    ['easy','medium','hard','real'].forEach(function(lvl){
      var group = list.filter(function(s){return s.level===lvl});
      if(!group.length) return;
      var lbl = {easy:'🟢 ساده',medium:'🟡 متوسط',hard:'🟠 سخت',real:'🔴 واقعی'}[lvl];
      h += '<h3 style="margin-top:16px">'+lbl+'</h3><div style="display:grid;gap:10px;margin-top:8px">';
      group.forEach(function(s){
        var done = prog.done['job-'+s.id];
        h += '<button type="button" class="card" data-sc="'+s.id+'" style="text-align:start;cursor:pointer;display:flex;gap:12px;align-items:center;padding:14px"><span style="display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:var(--job-soft);color:var(--job);flex:none">'+(done?'✓':'▶')+'</span><span style="flex:1"><div style="font-weight:600">'+esc(s.title)+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(s.desc)+'</div></span><span style="color:var(--muted)">›</span></button>';
      });
      h += '</div>';
    });
    el.innerHTML = h;
    var jb = $('#jback'); if(jb) jb.onclick = function(){job.view='cats';renderJob()};
    $$('.card[data-sc]').forEach(function(b){b.onclick=function(){startJobScenario(b.getAttribute('data-sc'))}});
    return;
  }
  renderJobPlay();
}
function startJobScenario(id){
  var sc = null;
  for(var i=0;i<JOB_SCENARIOS.length;i++) if(JOB_SCENARIOS[i].id===id){sc=JOB_SCENARIOS[i];break}
  if(!sc) return;
  job.scenario = sc;
  job.history = [];
  job.turns = [{role:'ai',text:sc.opening,fa:''}];
  job.busy = false; job.count = 0; job.done = false; job.view = 'play'; job.showHint = false;
  go('job');
  if(settings.autoplay) speak(sc.opening);
}
function renderJobPlay(){
  var sc = job.scenario; if(!sc){job.view='cats';return renderJob()}
  var lvlLabel = {easy:'ساده',medium:'متوسط',hard:'سخت',real:'واقعی'}[sc.level] || '';
  var h = '<button type="button" class="link" id="jback2">← بازگشت</button>';
  h += '<div class="thead"><div><span class="pill '+sc.level+'">'+lvlLabel+'</span> <span class="pill job">'+esc(sc.roleFa)+'</span> <b>'+esc(sc.title)+'</b><div class="sub" style="font-size:.85rem">'+esc(sc.desc)+'</div></div>';
  h += '<div class="row"><button type="button" class="btn ghost small" id="jHint">'+ic('light')+' راهنما</button><button type="button" class="btn ghost small" id="jSample">📝 نمونه</button><button type="button" class="btn ghost small" id="jRestart">🔄 دوباره</button></div></div>';
  h += '<div class="hint-box'+(job.showHint?' show':'')+'" id="hintBox"><div class="lbl">💡 راهنما</div>'+esc(sc.hint)+'</div>';
  h += '<div class="toggles" style="margin-bottom:12px"><label><input type="checkbox" id="j-auto" '+(settings.autoplay?'checked':'')+'> پخش صدا</label><label><input type="checkbox" id="j-analyze" '+(settings.jobAnalyze?'checked':'')+'> تحلیل</label><label><input type="checkbox" id="j-fa" '+(settings.jobShowFa?'checked':'')+'> ترجمه</label><label><input type="checkbox" id="j-hands" '+(settings.hands?'checked':'')+'> دست‌آزاد</label></div>';
  h += '<div class="chat" id="chat">'+job.turns.map(jobBubble).join('')+'</div>';
  h += '<div id="report"></div>';
  h += '<div class="composer"><div class="hint">به انگلیسی جواب بده.</div><div class="cbox"><button type="button" class="mic job-mic '+(listening?'rec':'')+'" id="mic">'+ic('mic')+'</button><input type="text" id="msg" dir="ltr" placeholder="Type your reply in English…" autocomplete="off"><button type="button" class="send" id="sendB">'+ic('send')+'</button></div></div>';
  $('#main').innerHTML = h;
  $('#jback2').onclick = function(){job.view='list';renderJob()};
  $('#jRestart').onclick = function(){startJobScenario(sc.id)};
  $('#jHint').onclick = function(){job.showHint = !job.showHint; var b = $('#hintBox'); if(b) b.className = 'hint-box'+(job.showHint?' show':'')};
  $('#jSample').onclick = function(){
    if(!sc.sample){toast('نمونه‌ای ثبت نشده.');return}
    // نمایش به عنوان پیام سیستمی
    job.turns.push({role:'sample', text:sc.sample});
    drawJobChat();
    toast('📝 این یه نمونه‌ی خوبه. حالا خودت یه بار امتحان کن!',5000);
  };
  $('#j-auto').onchange = function(e){settings.autoplay=e.target.checked;store.set('zy_settings',settings)};
  $('#j-analyze').onchange = function(e){settings.jobAnalyze=e.target.checked;store.set('zy_settings',settings);renderJobPlay()};
  $('#j-fa').onchange = function(e){settings.jobShowFa=e.target.checked;store.set('zy_settings',settings);renderJobPlay()};
  $('#j-hands').onchange = function(e){settings.hands=e.target.checked;store.set('zy_settings',settings)};
  $('#mic').onclick = toggleJobMic;
  $('#sendB').onclick = function(){sendJob($('#msg').value, null, false)};
  $('#msg').onkeydown = function(e){if(e.key==='Enter'){e.preventDefault();sendJob($('#msg').value,null,false)}};
  drawJobChat();
}
function jobBubble(t){
  if(t.role==='ai'){
    return '<div class="b job-ai"><div class="bt" dir="ltr">'+esc(t.text)+'</div>'+(settings.jobShowFa&&t.fa?'<div class="fa">'+esc(t.fa)+'</div>':'')+'<button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  }
  if(t.role==='sample'){
    return '<div class="b ai" style="background:var(--accent-soft);border-color:var(--accent)"><div style="font-size:.75rem;color:#8a6d00;font-weight:700;margin-bottom:4px">📝 نمونه‌ی جواب</div><div class="bt" dir="ltr">'+esc(t.text)+'</div><button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  }
  return '<div class="b job-me"><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>'+(t.err?'<div class="an">ارسال نشد.</div>':(settings.jobAnalyze?jobAnalysisHTML(t):''));
}
function jobAnalysisHTML(t){
  if(t.pending) return '<div class="an"><span class="dots"><i></i><i></i><i></i></span> در حال تحلیل…</div>';
  var a = t.an; if(!a) return '';
  var ms = a.mistakes||[];
  var h = '<div class="an"><div class="an-top">'+(a.is_correct&&!ms.length?'<span class="pill ok">عالی</span>':'<span class="pill warn">بهتر می‌شه</span>');
  if(a.score!=null) h += '<span class="sc">امتیاز <b>'+a.score+'</b>/10</span>';
  h += '</div>';
  if(a.corrected && a.corrected.trim() && norm(a.corrected)!==norm(t.text)){
    h += '<div class="fix"><span>✓</span><span dir="ltr">'+esc(a.corrected)+'</span></div>';
  }
  ms.forEach(function(m){
    h += '<div class="mk"><div dir="ltr"><s>'+esc(m.original)+'</s> → <b>'+esc(m.fix)+'</b></div><div>'+esc(m.explain_fa||'')+'</div></div>';
  });
  if(a.tip_fa) h += '<div class="tip">💡 '+esc(a.tip_fa)+'</div>';
  return h+'</div>';
}
function drawJobChat(){
  var c = $('#chat'); if(!c || view!=='job') return;
  c.innerHTML = job.turns.map(jobBubble).join('');
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}
function sendJob(text, conf, voice){
  text = (text||'').trim();
  if(!text || job.busy || job.done) return;
  var m = $('#msg'); if(m) m.value='';
  var ut = {role:'me', text:text, pending:true};
  job.turns.push(ut); job.count++;
  job.busy = true; drawJobChat();
  var history = job.turns.filter(function(t){return (t.role==='me'&&!t.pending)||t.role==='ai'}).map(function(t){return {role:t.role==='ai'?'assistant':'user', content:t.text}});
  history.push({role:'user', content:text});
  callAI('Follow the rules strictly. Return ONLY valid JSON.\n\n'+jobSystemPrompt(), history.slice(-12), 1400)
    .then(function(raw){
      var j; try{j = parseJSON(raw)}catch(e){j = {reply:raw, reply_fa:'', analysis:{is_correct:true, mistakes:[]}}}
      ut.pending = false;
      ut.an = j.analysis || {is_correct:true};
      saveJobMistakes(j.analysis);
      if(j.reply) job.turns.push({role:'ai', text:j.reply, fa:j.reply_fa||''});
      job.busy = false;
      if(j.scenario_complete){
        job.done = true;
        var d = prog.done['job-'+job.scenario.id] = prog.done['job-'+job.scenario.id] || {};
        d.done = true; d.count = job.count;
        award(job.count*2);
        if(prog.program && prog.program.lastFrom==='program'){
          if(!prog.program) prog.program={};
          prog.program[taskKey('sc', job.scenario.id)] = Date.now();
        }
        saveProg();
      } else { award(2) }
      drawJobChat();
      if(settings.autoplay && j.reply){
        speak(j.reply, function(){
          if(settings.hands && view==='job' && !job.busy && !job.done && !listening) toggleJobMic();
        });
      }
    })
    .catch(function(e){
      job.busy = false;
      ut.pending = false; ut.err = true;
      drawJobChat();
      toast(errText(e), 6000);
    });
}
function saveJobMistakes(analysis){
  if(!analysis) return;
  (analysis.mistakes||[]).forEach(function(m){
    if(!m.original || !m.fix) return;
    var exists = mistakes.some(function(x){return x.original===m.original && x.fix===m.fix});
    if(exists) return;
    mistakes.unshift({original:m.original, fix:m.fix, explain:m.explain_fa||'', type:m.type||'', level:'job', topic:job.scenario?job.scenario.title:'', date:new Date().toLocaleDateString('fa-IR')});
  });
  mistakes = mistakes.slice(0,300);
  store.set('zy_mistakes', mistakes);
  schedulePushToCloud();
}
function toggleJobMic(){
  if(view!=='job' || job.busy || job.done) return;
  var b = $('#mic');
  if(listening){rec && rec.stop(); return}
  rec = listen({
    interim: function(t){var m=$('#msg'); if(m) m.value=t},
    done: function(t,c){
      listening = false;
      var bb = $('#mic'); if(bb) bb.classList.remove('rec');
      if(t) sendJob(t, c, true);
    }
  });
  if(rec){listening = true; b && b.classList.add('rec')}
}

// ============ TALK ============
function talkSystem(){
  var style = ({A1:'Simple words, present simple, 1-2 sentences.',A2:'Simple clear sentences, 2-3 sentences.',B1:'Natural but clear, 2-3 sentences.',B2:'Natural with idioms, 2-4 sentences.',C1:'Sophisticated, 2-4 sentences.',C2:'Native-level.'})[talk.level];
  return 'You are "Sam", English tutor for a Persian speaker at CEFR '+talk.level+'.\nTopic: '+talk.topic+'.'+(talk.focus?' Target: '+talk.focus:'')+'\nReply: '+style+' React then ask exactly ONE question.\nAnalyse the learner\'s LAST message. All explanations in Persian. Max 2 mistakes for A1-A2, 4 otherwise.\nIf message is "[START]", greet and ask first question.\nReturn ONLY valid JSON: {"reply":string,"reply_fa":string,"corrected":string,"is_correct":boolean,"mistakes":[{"type":string,"original":string,"fix":string,"explain_fa":string}],"better_version":string,"scores":{"grammar":0-10,"vocabulary":0-10,"fluency":0-10}|null,"new_words":[{"en":string,"fa":string}],"tip_fa":string}';
}
function startTalk(o){
  talk = {started:true, level:o.level, topic:o.topic, focus:o.focus||'', unitId:o.unitId||null, history:[], turns:[], busy:false, count:0, report:null, reporting:false};
  go('talk');
  aiTurn('[START]', null);
}
function aiTurn(content, ut){
  talk.busy = true; drawChat();
  callAI(talkSystem(), talk.history.concat([{role:'user',content:content}]), 1400)
    .then(function(raw){
      var j; try{j=parseJSON(raw)}catch(e){j={reply:raw, reply_fa:'', mistakes:[], is_correct:true}}
      talk.history.push({role:'user',content:content},{role:'assistant',content:raw});
      talk.history = talk.history.slice(-16);
      if(ut){
        ut.pending = false; ut.an = j;
        saveMistakes(j);
        award(j.is_correct && !(j.mistakes||[]).length ? 4 : 2);
      }
      talk.turns.push({role:'ai', text:j.reply||'…', fa:j.reply_fa||''});
      talk.busy = false; drawChat();
      if(settings.autoplay) speak(j.reply, function(){
        if(settings.hands && view==='talk' && !talk.busy && !talk.report && !listening) toggleMic();
      });
    })
    .catch(function(e){
      talk.busy = false;
      if(ut){ut.pending=false; ut.err=true}
      drawChat();
      toast(errText(e), 6000);
    });
}
function saveMistakes(j){
  (j.mistakes||[]).forEach(function(m){
    if(!m.original || !m.fix) return;
    var exists = mistakes.some(function(x){return x.original===m.original && x.fix===m.fix});
    if(exists) return;
    mistakes.unshift({original:m.original, fix:m.fix, explain:m.explain_fa||'', type:m.type||'', level:talk.level, topic:talk.topic, date:new Date().toLocaleDateString('fa-IR')});
  });
  mistakes = mistakes.slice(0,300);
  store.set('zy_mistakes', mistakes);
  schedulePushToCloud();
}
function renderTalk(){
  var el = $('#main');
  if(!talk.started){
    var TOPICS=['Introduce yourself','Ordering at a café','My daily routine','Travel plans','My job','Movies and music','Technology in my life','A job interview','Health and lifestyle','Money and shopping'];
    var topic = TOPICS[0];
    var h = '<div class="tstart"><h1>مکالمه‌ی آزاد</h1><p class="sub">موضوع و سطح.</p><div class="card stack"><div class="field"><label>سطح</label><select id="fl">';
    LEVELS.forEach(function(l){h += '<option value="'+l.id+'">'+l.id+' — '+l.name+'</option>'});
    h += '</select></div><div class="field"><label>موضوع</label><div class="chips" id="chips">';
    TOPICS.forEach(function(t,i){h += '<button type="button" class="chip" data-t="'+esc(t)+'" aria-pressed="'+(i===0)+'">'+esc(t)+'</button>'});
    h += '</div><input type="text" id="ft" dir="ltr" placeholder="یا موضوع دلخواه…"></div><div class="row"><button type="button" class="btn brand" id="go">'+ic('mic')+' شروع</button></div></div></div>';
    el.innerHTML = h;
    $$('.chip').forEach(function(c){
      c.onclick = function(){
        $$('.chip').forEach(function(x){x.setAttribute('aria-pressed','false')});
        c.setAttribute('aria-pressed','true');
        topic = c.getAttribute('data-t');
        $('#ft').value = '';
      };
    });
    $('#go').onclick = function(){
      var cust = $('#ft').value.trim();
      startTalk({level:$('#fl').value, topic:cust||topic});
    };
    return;
  }
  el.innerHTML = '<div class="thead"><div><b class="en" dir="ltr">'+esc(talk.topic)+'</b><div class="sub">سطح '+talk.level+'</div></div><div class="row"><button type="button" class="btn ghost" id="newT">جدید</button><button type="button" class="btn brand" id="endT">پایان و گزارش</button></div></div><div class="chat" id="chat"></div><div id="report"></div><div class="composer"><div class="hint">انگلیسی صحبت کن.</div><div class="cbox"><button type="button" class="mic '+(listening?'rec':'')+'" id="mic">'+ic('mic')+'</button><input type="text" id="msg" dir="ltr" placeholder="Say or type…"><button type="button" class="send" id="sendB">'+ic('send')+'</button></div></div>';
  $('#newT').onclick = function(){if('speechSynthesis' in window) speechSynthesis.cancel(); rec && rec.stop(); talk.started=false; renderTalk()};
  $('#endT').onclick = endTalk;
  $('#mic').onclick = toggleMic;
  $('#sendB').onclick = function(){send($('#msg').value, null, false)};
  $('#msg').onkeydown = function(e){if(e.key==='Enter'){e.preventDefault();send($('#msg').value,null,false)}};
  drawChat();
  if(talk.report) drawReport();
}
function bubbleHTML(t){
  if(t.role==='ai'){
    return '<div class="b ai"><div class="bt" dir="ltr">'+esc(t.text)+'</div>'+(settings.showFa&&t.fa?'<div class="fa">'+esc(t.fa)+'</div>':'')+'<button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  }
  return '<div class="b me"><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>'+(t.err?'<div class="an">ارسال نشد.</div>':analysisHTML(t));
}
function analysisHTML(t){
  if(t.pending) return '<div class="an"><span class="dots"><i></i><i></i><i></i></span> در حال تحلیل…</div>';
  var a = t.an; if(!a) return '';
  var ms = a.mistakes||[];
  var h = '<div class="an"><div class="an-top">'+(a.is_correct&&!ms.length?'<span class="pill ok">درست بود</span>':'<span class="pill warn">بهتر می‌شه</span>');
  if(a.scores) h += [['grammar','گرامر'],['vocabulary','لغت'],['fluency','روانی']].map(function(x){return '<span class="sc">'+x[1]+' <b>'+(a.scores[x[0]]==null?'–':a.scores[x[0]])+'</b></span>'}).join('');
  h += '</div>';
  if(a.corrected && a.corrected.trim() && norm(a.corrected)!==norm(t.text)){
    h += '<div class="fix"><span>✓</span><span dir="ltr">'+esc(a.corrected)+'</span></div>';
  }
  ms.forEach(function(m){
    h += '<div class="mk"><div dir="ltr"><s>'+esc(m.original)+'</s> → <b>'+esc(m.fix)+'</b></div><div>'+esc(m.explain_fa||'')+'</div></div>';
  });
  if((a.new_words||[]).length){
    h += '<div class="nw">'+a.new_words.map(function(w){return '<span dir="ltr">'+esc(w.en)+' · '+esc(w.fa)+'</span>'}).join('')+'</div>';
  }
  if(a.tip_fa) h += '<div class="tip">'+esc(a.tip_fa)+'</div>';
  return h+'</div>';
}
function drawChat(){
  var c = $('#chat'); if(!c || view!=='talk') return;
  var hasPending = talk.turns.some(function(t){return t.pending});
  c.innerHTML = talk.turns.map(bubbleHTML).join('') + (talk.busy && !hasPending ? '<div class="b ai"><span class="dots"><i></i><i></i><i></i></span></div>' : '');
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}
function send(text, conf, voice){
  text = (text||'').trim(); if(!text || talk.busy) return;
  var m = $('#msg'); if(m) m.value='';
  var ut = {role:'me', text:text, pending:true};
  talk.turns.push(ut); talk.count++;
  var content = voice && conf!=null ? text+'\n[speech_confidence: '+Number(conf).toFixed(2)+']' : text;
  aiTurn(content, ut);
}
function toggleMic(){
  if(view!=='talk' || talk.busy) return;
  var b = $('#mic');
  if(listening){rec && rec.stop(); return}
  rec = listen({
    interim: function(t){var m=$('#msg'); if(m) m.value=t},
    done: function(t,c){
      listening = false;
      var bb = $('#mic'); if(bb) bb.classList.remove('rec');
      if(t) send(t, c, true);
    }
  });
  if(rec){listening = true; b && b.classList.add('rec')}
}
function endTalk(){
  if(talk.count<1){toast('اول چند جمله صحبت کن.');return}
  if(talk.reporting) return;
  if('speechSynthesis' in window) speechSynthesis.cancel();
  rec && rec.stop();
  talk.reporting = true;
  $('#report').innerHTML = '<div class="card"><b>در حال تهیه‌ی گزارش…</b><div class="skel"></div></div>';
  var tr = talk.turns.map(function(t){return t.role==='ai'?'Tutor: '+t.text:'Learner: '+t.text}).join('\n');
  callAI('Write a session report for a Persian learner (level '+talk.level+'). Return ONLY JSON: {"summary_fa":string,"level_estimate":string,"strengths_fa":[string],"weak_points_fa":[string],"next_steps_fa":[string],"vocab_to_review":[{"en":string,"fa":string}]}.', [{role:'user',content:tr}], 1200)
    .then(function(raw){
      talk.report = parseJSON(raw);
      award(20);
      if(talk.unitId){var d=prog.done[talk.unitId]=prog.done[talk.unitId]||{};d.talk=true;saveProg()}
      talk.reporting = false;
      drawReport();
    })
    .catch(function(e){talk.reporting=false;$('#report').innerHTML='';toast(errText(e),6000)});
}
function drawReport(){
  var r = talk.report, el = $('#report'); if(!r || !el) return;
  var li = function(a){return (a||[]).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')};
  el.innerHTML = '<div class="card"><h2>گزارش جلسه</h2><p>'+esc(r.summary_fa)+'</p><p><b>سطح:</b> <span dir="ltr">'+esc(r.level_estimate)+'</span></p><h2>نقاط قوت</h2><ul>'+li(r.strengths_fa)+'</ul><h2>نقاط ضعف</h2><ul>'+li(r.weak_points_fa)+'</ul><h2>قدم‌های بعدی</h2><ul>'+li(r.next_steps_fa)+'</ul><div class="row" style="margin-top:16px"><button type="button" class="btn brand" id="rNew">گفتگوی جدید</button></div></div>';
  $('#rNew').onclick = function(){talk.started=false;renderTalk()};
  el.scrollIntoView({behavior:'smooth'});
}

// ============ SMART NOTEBOOK ============
function detectPatterns(){
  var counts = {};
  var examples = {};
  mistakes.forEach(function(m){
    var key = (m.type || 'other').toLowerCase().trim();
    if(!key) key = 'other';
    counts[key] = (counts[key] || 0) + 1;
    if(!examples[key]) examples[key] = [];
    if(examples[key].length < 3) examples[key].push(m.original + ' → ' + m.fix);
  });
  var arr = [];
  Object.keys(counts).forEach(function(k){
    if(counts[k] >= 3) arr.push({type:k, count:counts[k], examples:examples[k]});
  });
  return arr.sort(function(a,b){return b.count-a.count});
}
function detectRecentPatterns(days){
  days = days || 7;
  var cutoff = Date.now() - days*864e5;
  var recent = mistakes.filter(function(m){
    // date در فرمت fa-IR هست، پس چک نمیشه. همه رو حساب می‌کنیم.
    return true;
  });
  return recent;
}

function renderNotes(){
  var h = '<div class="row between"><div><h1>دفترچه هوشمند</h1><p class="sub">اشتباهات + الگوها + پیشنهاد درس.</p></div></div>';
  // Pattern detection
  var patterns = detectPatterns();
  if(patterns.length){
    h += '<div class="card" style="margin-bottom:16px"><h2>⚠️ الگوهای تکرارشده</h2><p class="sub" style="margin-bottom:12px">این‌ها رو زیاد اشتباه می‌کنی. پیشنهاد می‌کنم تمرین کنی.</p>';
    patterns.forEach(function(p){
      h += '<div class="pattern-card"><div class="pt">'+esc(p.type)+' <span class="pill warn">'+fa(p.count)+' بار</span></div>';
      h += '<div class="pc">نمونه‌ها:</div>';
      p.examples.forEach(function(e){h += '<div class="pe">'+esc(e)+'</div>'});
      h += '<button type="button" class="btn small job" data-fix-pattern="'+esc(p.type)+'" style="margin-top:8px">📚 درس مرور بساز</button></div>';
    });
    h += '</div>';
  }
  // Actions
  h += '<div class="row" style="margin-bottom:16px">';
  h += '<button type="button" class="btn brand" id="drill" '+(mistakes.length?'':'disabled')+'>تمرین از اشتباهات</button>';
  h += '<button type="button" class="btn prog" id="reportBtn" '+(mistakes.length||prog.xp?'':'disabled')+'>'+ic('chart')+' گزارش پیشرفت</button>';
  h += '<button type="button" class="btn ghost" id="clr" '+(mistakes.length?'':'disabled')+'>پاک کردن</button>';
  h += '</div>';
  h += '<div id="drillBox"></div>';
  h += '<div id="reportBox"></div>';
  h += '<div class="nb" style="margin-top:16px">';
  if(mistakes.length){
    mistakes.forEach(function(m){
      h += '<div class="nbi"><div class="row between"><span dir="ltr"><s style="color:var(--bad)">'+esc(m.original)+'</s> → <b style="color:var(--ok)">'+esc(m.fix)+'</b></span><button type="button" class="mini" data-say="'+esc(m.fix)+'">'+ic('vol')+'</button></div><div>'+esc(m.explain)+'</div><div class="sub" style="font-size:.8rem">'+esc(m.type)+' · '+esc(m.level)+(m.topic?' · '+esc(m.topic):'')+' · '+esc(m.date)+'</div></div>';
    });
  } else {
    h += '<div class="card">هنوز اشتباهی ثبت نشده.</div>';
  }
  h += '</div>';
  $('#main').innerHTML = h;

  // Events
  var c = $('#clr'); if(c) c.onclick = function(){if(confirm('پاک شود؟')){mistakes=[];store.set('zy_mistakes',mistakes);schedulePushToCloud();renderNotes()}};
  var d = $('#drill'); if(d) d.onclick = function(){
    var box = $('#drillBox');
    box.innerHTML = '<div class="card"><b>در حال ساخت تمرین…</b><div class="skel"></div></div>';
    var src = mistakes.slice(0,15).map(function(m){return 'wrong: '+m.original+' | right: '+m.fix}).join('\n');
    callAI('Create 6 MC exercises practising these mistakes. Return ONLY JSON: {"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}]}.', [{role:'user',content:src}], 2500)
      .then(function(raw){
        var j = parseJSON(raw);
        box.innerHTML = '<div class="card"><h2>تمرین شخصی‌سازی‌شده</h2><div id="dq">'+quizHTML(j.quiz)+'</div></div>';
        bindQuiz($('#dq'), j.quiz, function(s,n){award(s*2);$('.qres',$('#dq')).textContent='نتیجه: '+fa(s)+' از '+fa(n)});
      })
      .catch(function(e){box.innerHTML='';toast(errText(e),6000)});
  };
  // Report
  var rb = $('#reportBtn'); if(rb) rb.onclick = buildReport;
  // Pattern lessons
  $$('[data-fix-pattern]').forEach(function(b){
    b.onclick = function(){buildLessonForPattern(b.getAttribute('data-fix-pattern'))};
  });
}

function buildReport(){
  var box = $('#reportBox');
  box.innerHTML = '<div class="card"><b>در حال ساخت گزارش…</b><div class="skel"></div></div>';
  // تحلیل ساده‌ی محلی
  var byType = {};
  mistakes.forEach(function(m){
    var k = m.type||'other';
    byType[k] = (byType[k]||0)+1;
  });
  var topTypes = Object.keys(byType).sort(function(a,b){return byType[b]-byType[a]}).slice(0,5).map(function(k){return {type:k, count:byType[k]}});
  var weeksDone = 0;
  for(var w=1;w<=8;w++) if(weekProgress(w)===100) weeksDone++;
  var report = {
    version: 1,
    generated_at: new Date().toISOString(),
    user: 'Armin',
    total_xp: prog.xp,
    streak: prog.streak,
    mistakes_count: mistakes.length,
    weeks_completed: weeksDone,
    current_week: curWeek,
    week_progress: (function(){var o={};for(var i=1;i<=8;i++)o['week_'+i]=weekProgress(i);return o})(),
    top_mistake_types: topTypes,
    recent_mistakes: mistakes.slice(0,20).map(function(m){
      return {type:m.type, original:m.original, fix:m.fix, level:m.level, topic:m.topic, date:m.date};
    }),
    lessons_created: Object.keys(lessonCache).length,
    lessons_list: Object.keys(lessonCache).map(function(k){
      var l = lessonCache[k];
      return {id:k, title:l.title||''};
    }),
    program_done: Object.keys(prog.program || {}).filter(function(k){
      return k.indexOf('les:')===0 || k.indexOf('sc:')===0;
    }).length,
    program_total: (function(){
      var total=0;
      PROGRAM.forEach(function(w){total += w.lessons.length + w.scenarios.length});
      return total;
    })()
  };
  var jsonStr = JSON.stringify(report, null, 2);
  box.innerHTML = '<div class="card"><h2>'+ic('chart')+' گزارش پیشرفت</h2><p class="sub" style="font-size:.88rem">این فایل رو دانلود کن یا کپی کن و به مربی/هوش مصنوعی بده تا درباره پیشرفتت صحبت کنید.</p><div class="row" style="margin:12px 0"><button type="button" class="btn brand" id="copyReport">📋 کپی JSON</button><button type="button" class="btn ghost" id="downloadReport">'+ic('download')+' دانلود فایل</button><button type="button" class="btn ghost" id="closeReport">بستن</button></div><textarea readonly style="min-height:240px;font-size:11px" dir="ltr">'+esc(jsonStr)+'</textarea></div>';
  $('#closeReport').onclick = function(){box.innerHTML=''};
  $('#copyReport').onclick = function(){
    var ta = box.querySelector('textarea'); ta.select();
    if(navigator.clipboard) navigator.clipboard.writeText(ta.value).then(function(){toast('کپی شد ✅')}).catch(function(){document.execCommand('copy');toast('کپی شد ✅')});
    else {document.execCommand('copy');toast('کپی شد ✅')}
  };
  $('#downloadReport').onclick = function(){
    var blob = new Blob([jsonStr], {type:'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'zabanyar-report-'+new Date().toISOString().split('T')[0]+'.json';
    document.body.appendChild(a);a.click();a.remove();
    URL.revokeObjectURL(url);
    toast('دانلود شد ✅');
  };
  box.scrollIntoView({behavior:'smooth'});
}

function buildLessonForPattern(type){
  var box = $('#drillBox');
  box.innerHTML = '<div class="card"><b>در حال ساخت درس مرور…</b><div class="skel"></div></div>';
  // جمع‌آوری نمونه‌های این الگو
  var relevant = mistakes.filter(function(m){return (m.type||'').toLowerCase() === type.toLowerCase()});
  var samples = relevant.slice(0,20).map(function(m){return 'wrong: '+m.original+' | right: '+m.fix}).join('\n');
  var sys = 'You are an EFL teacher for Persian speakers. Create a SHORT review lesson targeting one specific mistake pattern.\nReturn ONLY valid JSON:\n{"title":string,"intro_fa":string,"rule_fa":string,"examples":[{"wrong":string,"right":string,"why_fa":string}],"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}],"practice_sentence":string}';
  var usr = 'Mistake pattern: '+type+'\n\nExamples of the learner\'s mistakes:\n'+samples+'\n\nCreate a short focused lesson. Give rule in Persian, 4 examples with why_fa, exactly 5 quiz questions, and one practice sentence.';
  callAI(sys, [{role:'user',content:usr}], 2500)
    .then(function(raw){
      var j = parseJSON(raw);
      var h = '<div class="card"><h2>📚 درس مرور — '+esc(j.title||type)+'</h2>';
      h += '<p style="margin:10px 0">'+esc(j.intro_fa||'')+'</p>';
      if(j.rule_fa) h += '<div style="padding:12px;background:var(--brand-soft);border-radius:var(--r-sm);margin:10px 0"><b>قاعده:</b> '+esc(j.rule_fa)+'</div>';
      if(j.examples && j.examples.length){
        h += '<h3>نمونه‌ها</h3>';
        j.examples.forEach(function(ex){
          h += '<div class="ex-item"><div dir="ltr"><s style="color:var(--bad)">'+esc(ex.wrong)+'</s> → <b style="color:var(--ok)">'+esc(ex.right)+'</b></div><div class="sub">'+esc(ex.why_fa||'')+'</div></div>';
        });
      }
      if(j.quiz && j.quiz.length){
        h += '<h3 style="margin-top:14px">آزمون کوتاه</h3><div id="pq">'+quizHTML(j.quiz)+'</div>';
      }
      if(j.practice_sentence) h += '<div style="padding:12px;background:var(--accent-soft);border-radius:var(--r-sm);margin-top:12px"><b>✍️ تمرین:</b> این جمله رو با صدای بلند بگو: <span dir="ltr">'+esc(j.practice_sentence)+'</span></div>';
      h += '</div>';
      box.innerHTML = h;
      if(j.quiz) bindQuiz($('#pq'), j.quiz, function(s,n){award(s*3);$('.qres',$('#pq')).textContent='نتیجه: '+fa(s)+' از '+fa(n)});
      box.scrollIntoView({behavior:'smooth'});
    })
    .catch(function(e){box.innerHTML='';toast(errText(e),6000)});
}

// ============ SETTINGS ============
function renderSettings(){
  loadVoices();
  var syncActive = syncEnabled;
  var h = '<h1>تنظیمات</h1>';
  h += '<div class="card stack" style="margin-top:14px"><h3>هوش مصنوعی</h3>';
  h += '<div class="field"><label for="k">کلید API (1xai.ir)</label><input type="password" id="k" dir="ltr" placeholder="1xai-..." value="'+esc(settings.key)+'"></div>';
  h += '<div class="field"><label for="p">آدرس پروکسی</label><input type="text" id="p" dir="ltr" placeholder="https://cors-1xai.zarin-farm1.workers.dev" value="'+esc(settings.proxy||'')+'"></div>';
  h += '<div class="field"><label for="m">مدل</label><select id="m">';
  ['gpt-4o-mini','gpt-4.1-mini','gpt-3.5-turbo','deepseek-chat','claude-3-5-haiku','claude-sonnet-4-6','gemini-2.0-flash-lite','gemini-2.5-flash'].forEach(function(m){
    h += '<option value="'+m+'">'+m+'</option>';
  });
  h += '</select></div>';
  h += '<div class="field"><label for="r">سرعت صدا</label><select id="r"><option value="slow">آهسته</option><option value="normal">عادی</option><option value="fast">سریع</option></select></div>';
  h += '<div class="field"><label for="v">صدای معلم</label><select id="v"><option value="">پیش‌فرض</option>';
  voices.forEach(function(v){h += '<option value="'+esc(v.name)+'">'+esc(v.name)+' ('+esc(v.lang)+')</option>'});
  h += '</select></div>';
  h += '<div class="row"><button type="button" class="btn brand" id="sv">ذخیره</button><button type="button" class="btn ghost" id="ts">آزمایش</button></div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>☁️ همگام‌سازی</h3><div class="field"><label for="sc">کد همگام‌سازی</label><input type="password" id="sc" dir="ltr" placeholder="حداقل ۸ کاراکتر" value="'+esc(settings.syncCode||'')+'"></div><label style="display:flex;align-items:center;gap:8px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="sa" '+(settings.syncAuto?'checked':'')+' style="width:16px;height:16px"> ذخیره‌ی خودکار</label><div class="row"><button type="button" class="btn brand" id="scActivate">'+(syncActive?'به‌روزرسانی':'فعال‌سازی')+'</button><button type="button" class="btn ghost" id="scPull">دریافت</button><button type="button" class="btn ghost" id="scPush">ارسال</button></div><div class="sync-status"><span class="sync-dot '+(syncActive?'on':'off')+'"></span>'+(syncActive?'فعال':'غیرفعال')+'</div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>📤 صادرات / واردات</h3><div class="row"><button type="button" class="btn brand" id="exBtn">صادرات</button><button type="button" class="btn ghost" id="imBtn">واردات</button></div><div id="exBox" style="display:none"><textarea id="exText" readonly></textarea><button type="button" class="btn ghost" id="exCopy" style="margin-top:8px">کپی</button></div><div id="imBox" style="display:none"><textarea id="imText" placeholder="کد..."></textarea><button type="button" class="btn brand" id="imGo" style="margin-top:8px">وارد کردن</button></div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>🗑 پاک کردن داده‌ها</h3><button type="button" class="btn ghost" id="rs">پاک کردن پیشرفت</button></div>';
  $('#main').innerHTML = h;
  $('#m').value = settings.model; $('#r').value = settings.rate; $('#v').value = settings.voice;
  var save = function(){
    settings.key = $('#k').value.trim();
    settings.model = $('#m').value;
    settings.rate = $('#r').value;
    settings.voice = $('#v').value;
    settings.proxy = $('#p').value.trim();
    settings.syncCode = $('#sc').value.trim();
    settings.syncAuto = $('#sa').checked;
    store.set('zy_settings', settings);
  };
  $('#sv').onclick = function(){save(); toast('ذخیره شد.')};
  $('#ts').onclick = function(){
    save();
    callAI('Reply with: ok', [{role:'user',content:'ping'}], 20)
      .then(function(){toast('اتصال موفق ✅')})
      .catch(function(e){toast(errText(e),6000)});
  };
  $('#scActivate').onclick = function(){
    save();
    if(!settings.proxy || !settings.syncCode || settings.syncCode.length<8){toast('پروکسی و کد حداقل ۸ کاراکتر.');return}
    syncEnabled = false;
    initSync().then(function(ok){
      if(ok){ toast('بارگذاری...'); pullFromCloud(true).then(function(){ toast('فعال شد ✅'); renderSettings(); }); }
    });
  };
  $('#scPull').onclick = function(){save(); if(!syncEnabled) initSync().then(function(ok){if(ok)pullFromCloud().then(renderSettings)}); else pullFromCloud().then(renderSettings)};
  $('#scPush').onclick = function(){save(); if(!syncEnabled) initSync().then(function(ok){if(ok)pushToCloud().then(function(){toast('ارسال ✅')})}); else pushToCloud().then(function(){toast('ارسال ✅')})};
  $('#sa').onchange = function(){settings.syncAuto = $('#sa').checked; store.set('zy_settings', settings)};
  $('#exBtn').onclick = function(){try{$('#exText').value=exportData();$('#exBox').style.display='block';$('#imBox').style.display='none'}catch(e){toast('خطا')}};
  $('#imBtn').onclick = function(){$('#imBox').style.display='block';$('#exBox').style.display='none'};
  $('#exCopy').onclick = function(){
    var t = $('#exText'); t.select();
    if(navigator.clipboard) navigator.clipboard.writeText(t.value).then(function(){toast('کپی شد ✅')}).catch(function(){document.execCommand('copy');toast('کپی شد ✅')});
    else {document.execCommand('copy');toast('کپی شد ✅')}
  };
  $('#imGo').onclick = function(){
    try{
      var b64 = $('#imText').value.trim();
      if(!b64){toast('خالی است');return}
      if(!confirm('پیشرفت جایگزین شود؟'))return;
      importData(b64); schedulePushToCloud();
      toast('وارد شد ✅'); updateStats(); go('program');
    }catch(e){toast('کد نامعتبر',5000)}
  };
  $('#rs').onclick = function(){
    if(confirm('پاک شود؟')){
      prog = {xp:0,streak:0,last:'',done:{},program:{}};
      lessonCache = {};
      store.set('zy_lessons',{});
      saveProg();
      toast('پاک شد.');
    }
  };
  updateSyncUI();
}

// ============ INIT ============
document.addEventListener('click', function(e){
  var s = e.target.closest && e.target.closest('[data-say]');
  if(s){speak(s.getAttribute('data-say'));return}
  var p = e.target.closest && e.target.closest('[data-prac]');
  if(p){
    var en = p.getAttribute('data-prac');
    var out = p.closest('.vc').querySelector('.pr');
    if(p.classList.contains('rec')){rec && rec.stop();return}
    p.classList.add('rec'); out.className='pr'; out.textContent='در حال گوش دادن…';
    rec = listen({
      done: function(t){
        p.classList.remove('rec');
        var a = norm(t), b = norm(en);
        if(!a){out.textContent='';return}
        var ok = a===b || a.indexOf(b)>=0 || sim(a,b)>=0.8;
        out.className = 'pr '+(ok?'ok':'no');
        out.textContent = ok?'تلفظ عالی!':'شنیده شد: «'+t+'»';
        if(ok) award(1);
      }
    });
    if(!rec) p.classList.remove('rec');
  }
});

$$('.tab').forEach(function(t){
  t.onclick = function(){go(t.getAttribute('data-v'))};
});

try{
  updateStats();
  go('program');
  if(settings.proxy && settings.syncCode){
    initSync().then(function(ok){
      if(ok) pullFromCloud(true);
    });
  }
}catch(e){
  console.error('Init error:', e);
  var m = $('#main');
  if(m) m.innerHTML = '<div class="card"><b>خطا در راه‌اندازی</b><p dir="ltr" style="font-family:monospace;font-size:12px">'+esc(e.message)+'</p><button type="button" class="btn brand" onclick="localStorage.clear();location.reload()">پاک کردن داده و رفرش</button></div>';
   }
