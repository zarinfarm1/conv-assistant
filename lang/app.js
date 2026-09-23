'use strict';

// ============ GLOBAL ERROR HANDLER ============
window.addEventListener('error',function(ev){
  try{
    var msg = ev.message || 'Unknown error';
    var src = ev.filename || '';
    var line = ev.lineno || '';
    var overlay = document.createElement('div');
    overlay.className = 'err-overlay';
    overlay.innerHTML = '<div><h2>خطای برنامه</h2><p style="margin:10px 0">لطفاً این متن را برای پشتیبانی بفرست:</p><pre>'+msg+'\n'+src+':'+line+'</pre><button onclick="try{localStorage.removeItem(\'zy_prog\')}catch(e){};location.reload()" style="margin-top:20px;padding:10px 24px;background:#fff;color:#d64550;border:none;border-radius:8px;font-weight:700;cursor:pointer">ریست پیشرفت و رفرش</button></div>';
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
  program: (savedProg.program && typeof savedProg.program === 'object' && !Array.isArray(savedProg.program)) ? savedProg.program : {},
  grammar: (savedProg.grammar && typeof savedProg.grammar === 'object' && !Array.isArray(savedProg.grammar)) ? savedProg.grammar : {}, speed: (savedProg.speed && typeof savedProg.speed === 'object') ? savedProg.speed : {sessions:0,totalResponses:0,totalTime:0,bestTime:999,correctCount:0,history:[]}
};
var lessonCache = store.get('zy_lessons',{}) || {};
if(typeof lessonCache !== 'object' || Array.isArray(lessonCache)) lessonCache = {};
var grammarCache = store.get('zy_grammar',{}) || {};
if(typeof grammarCache !== 'object' || Array.isArray(grammarCache)) grammarCache = {};
var mistakes = store.get('zy_mistakes',[]) || [];
if(!Array.isArray(mistakes)) mistakes = [];
var importedScenarios = store.get('zy_imported',[]) || [];
if(!Array.isArray(importedScenarios)) importedScenarios = [];
var customLessons = store.get('zy_custom_lessons',[]) || [];
if(!Array.isArray(customLessons)) customLessons = [];
store.set('zy_prog', prog);

var view='program', pathLevel='A1', lessonCtx=null;
var curWeek=1;
var talk={started:false,level:'A1',topic:'',focus:'',unitId:null,history:[],turns:[],busy:false,count:0,report:null,reporting:false};
var job={view:'cats',catId:null,scenario:null,history:[],turns:[],busy:false,count:0,done:false,showHint:false};
var free={mode:null,situation:null,turns:[],busy:false,count:0,done:false,showHint:false};
var gram={level:null,topic:null,lesson:null,step:'learn',loading:false,err:null};
var listening=false, rec=null;

function saveProg(){
  if(!prog.program || typeof prog.program !== 'object') prog.program = {};
  if(!prog.grammar || typeof prog.grammar !== 'object') prog.grammar = {};
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
  var payload = {prog:prog, lessonCache:lessonCache, grammarCache:grammarCache, mistakes:mistakes, importedScenarios:importedScenarios, customLessons:customLessons, updatedAt:Date.now()};
  return fetch(base+'/sync/'+syncKey, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    .then(function(r){if(!r.ok) throw new Error('HTTP '+r.status); var dot=$('#syncDot'); if(dot) dot.className='sync-dot on';})
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
        var _oldSpeed = (prog && prog.speed) ? prog.speed : null;
        prog = (function(){var _sp=(prog&&prog.speed)?prog.speed:null;var _p=Object.assign({xp:0,streak:0,last:'',done:{},program:{},grammar:{},speed:_sp||{sessions:0,totalResponses:0,totalTime:0,bestTime:999,correctCount:0,history:[]}}, d.prog);if(!_p.speed)_p.speed={sessions:0,totalResponses:0,totalTime:0,bestTime:999,correctCount:0,history:[]};return _p;})();
        if(!prog.speed && _oldSpeed) prog.speed = _oldSpeed;
        if(!prog.program || typeof prog.program !== 'object') prog.program={};
        if(!prog.done || typeof prog.done !== 'object') prog.done={};
        if(!prog.grammar || typeof prog.grammar !== 'object') prog.grammar={};
        store.set('zy_prog', prog); updateStats();
      }
      if(d.lessonCache && typeof d.lessonCache === 'object'){lessonCache=d.lessonCache; store.set('zy_lessons',lessonCache)}
      if(d.grammarCache && typeof d.grammarCache === 'object'){grammarCache=d.grammarCache; store.set('zy_grammar',grammarCache)}
      if(Array.isArray(d.mistakes)){mistakes=d.mistakes; store.set('zy_mistakes',mistakes)}
      if(Array.isArray(d.importedScenarios)){importedScenarios=d.importedScenarios; store.set('zy_imported',importedScenarios)}
      if(Array.isArray(d.customLessons)){customLessons=d.customLessons; store.set('zy_custom_lessons',customLessons)}
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
  var data={v:1,exportedAt:new Date().toISOString(),prog:prog,lessonCache:lessonCache,grammarCache:grammarCache,mistakes:mistakes,importedScenarios:importedScenarios,customLessons:customLessons};
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function importData(b64){
  var json = decodeURIComponent(escape(atob(b64.trim())));
  var data = JSON.parse(json);
  if(data.prog){var _oldSpeed2=(prog&&prog.speed)?prog.speed:null;prog=Object.assign({xp:0,streak:0,last:'',done:{},program:{},grammar:{},speed:_oldSpeed2||{sessions:0,totalResponses:0,totalTime:0,bestTime:999,correctCount:0,history:[]}},data.prog);if(!prog.program)prog.program={};if(!prog.grammar)prog.grammar={};if(!prog.speed&&_oldSpeed2)prog.speed=_oldSpeed2;store.set('zy_prog',prog);updateStats()}
  if(data.lessonCache){lessonCache=data.lessonCache;store.set('zy_lessons',lessonCache)}
  if(data.grammarCache){grammarCache=data.grammarCache;store.set('zy_grammar',grammarCache)}
  if(data.mistakes){mistakes=data.mistakes;store.set('zy_mistakes',mistakes)}
  if(data.importedScenarios){importedScenarios=data.importedScenarios;store.set('zy_imported',importedScenarios)}
  if(data.customLessons){customLessons=data.customLessons;store.set('zy_custom_lessons',customLessons)}
  return true;
}

// ============ GRAMMAR CURRICULUM ============
var GRAMMAR_CURRICULUM=[
 {level:'A1',name:'پایه',hours:20,color:'#0e9a9a',topics:[
  {id:'g-a1-articles',title:'Articles: a / an / the',titleFa:'حرف تعریف a / an / the',dur:'۳ ساعت',why:'بزرگ‌ترین مشکل فارسی‌زبان‌ها'},
  {id:'g-a1-plurals',title:'Singular & Plural Nouns',titleFa:'مفرد و جمع',dur:'۲ ساعت',why:'ساختار جمع در فارسی متفاوته'},
  {id:'g-a1-sv',title:'Subject-Verb Agreement',titleFa:'هماهنگی فاعل و فعل',dur:'۲ ساعت',why:'he go → he goes'},
  {id:'g-a1-pronouns',title:'Subject Pronouns',titleFa:'ضمایر فاعلی',dur:'۱.۵ ساعت',why:'I / you / he / she / it / we / they'},
  {id:'g-a1-tobe',title:'Verb To Be',titleFa:'فعل to be',dur:'۲ ساعت',why:'پایه‌ی همه‌چیز'},
  {id:'g-a1-havehas',title:'Have / Has',titleFa:'Have و Has',dur:'۱.۵ ساعت',why:'مالکیت'},
  {id:'g-a1-demons',title:'This / That / These / Those',titleFa:'اشاره‌ها',dur:'۱.۵ ساعت',why:'اشاره به چیزها'},
  {id:'g-a1-poss',title:'Possessive Adjectives',titleFa:'صفات ملکی',dur:'۱.۵ ساعت',why:'my / your / his / her'},
  {id:'g-a1-there',title:'There is / There are',titleFa:'There is و There are',dur:'۱.۵ ساعت',why:'وجود داشتن'},
  {id:'g-a1-present',title:'Present Simple',titleFa:'حال ساده',dur:'۲.۵ ساعت',why:'کارهای روزانه'}
 ]},
 {level:'A2',name:'ابتدایی',hours:22,color:'#f2b134',topics:[
  {id:'g-a2-continuous',title:'Present Continuous',titleFa:'حال استمراری',dur:'۲.۵ ساعت',why:'اتفاقات الان'},
  {id:'g-a2-pres-cont',title:'Present Simple vs Continuous',titleFa:'ساده یا استمراری',dur:'۳ ساعت',why:'اشتباه رایج'},
  {id:'g-a2-past-reg',title:'Past Simple (Regular)',titleFa:'گذشته ساده',dur:'۲.۵ ساعت',why:'دیروز'},
  {id:'g-a2-past-irreg',title:'Past Simple (Irregular)',titleFa:'گذشته بی‌قاعده',dur:'۳ ساعت',why:'۸۰ فعل بی‌قاعده'},
  {id:'g-a2-past-cont',title:'Past Continuous',titleFa:'گذشته استمراری',dur:'۲.۵ ساعت',why:'اتفاق در حال گذشته'},
  {id:'g-a2-future',title:'Future: Will vs Going To',titleFa:'آینده',dur:'۳ ساعت',why:'تفاوت will و going to'},
  {id:'g-a2-preptime',title:'Prepositions of Time',titleFa:'حروف اضافه‌ی زمان',dur:'۲.۵ ساعت',why:'at / on / in'},
  {id:'g-a2-quant',title:'Quantifiers',titleFa:'مقدارها',dur:'۳ ساعت',why:'some / any / much / many'}
 ]},
 {level:'B1',name:'متوسط',hours:26,color:'#c2410c',topics:[
  {id:'g-b1-perfect',title:'Present Perfect',titleFa:'حال کامل',dur:'۳.۵ ساعت',why:'have done'},
  {id:'g-b1-perfect-vs-past',title:'Present Perfect vs Past Simple',titleFa:'حال کامل یا گذشته',dur:'۳ ساعت',why:'اشتباه رایج'},
  {id:'g-b1-forsince',title:'For / Since / Ago',titleFa:'For، Since، Ago',dur:'۲.۵ ساعت',why:'مدت زمان'},
  {id:'g-b1-modals',title:'Modal Verbs',titleFa:'افعال وجهی',dur:'۳ ساعت',why:'should, must, might'},
  {id:'g-b1-cond1',title:'First Conditional',titleFa:'شرطی نوع اول',dur:'۲.۵ ساعت',why:'اگر… پس…'},
  {id:'g-b1-cond2',title:'Second Conditional',titleFa:'شرطی نوع دوم',dur:'۳ ساعت',why:'آرزوها'},
  {id:'g-b1-relative',title:'Relative Clauses',titleFa:'جمله‌های موصولی',dur:'۳ ساعت',why:'who, which, that'},
  {id:'g-b1-compar',title:'Comparatives & Superlatives',titleFa:'مقایسه',dur:'۳ ساعت',why:'bigger / the biggest'}
 ]},
 {level:'B2',name:'پیشرفته',hours:22,color:'#7c3aed',topics:[
  {id:'g-b2-passive',title:'Passive Voice',titleFa:'مجهول',dur:'۳ ساعت',why:'It was done'},
  {id:'g-b2-reported',title:'Reported Speech',titleFa:'نقل قول غیرمستقیم',dur:'۳ ساعت',why:'He said that...'},
  {id:'g-b2-cond3',title:'Third Conditional & Mixed',titleFa:'شرطی نوع سوم',dur:'۳ ساعت',why:'If I had known'},
  {id:'g-b2-gerund',title:'Gerunds & Infinitives',titleFa:'Gerund و Infinitive',dur:'۳ ساعت',why:'enjoy doing / want to do'},
  {id:'g-b2-phrasal',title:'Phrasal Verbs',titleFa:'افعال عبارتی',dur:'۳ ساعت',why:'turn on, look after'},
  {id:'g-b2-wishes',title:'Wishes & Regrets',titleFa:'آرزو و پشیمانی',dur:'۲.۵ ساعت',why:'I wish / If only'},
  {id:'g-b2-caus',title:'Causatives',titleFa:'سببی',dur:'۲.۵ ساعت',why:'have something done'},
  {id:'g-b2-advrel',title:'Advanced Relative Clauses',titleFa:'موصولی پیشرفته',dur:'۲ ساعت',why:'whose, where, when'}
 ]}
];

function findGrammarTopic(id){
  for(var i=0;i<GRAMMAR_CURRICULUM.length;i++){
    var lvl=GRAMMAR_CURRICULUM[i];
    for(var j=0;j<lvl.topics.length;j++){
      if(lvl.topics[j].id===id) return {level:lvl,topic:lvl.topics[j]};
    }
  }
  return null;
}
function grammarLevelProgress(levelId){
  var lvl=null;
  for(var i=0;i<GRAMMAR_CURRICULUM.length;i++) if(GRAMMAR_CURRICULUM[i].level===levelId){lvl=GRAMMAR_CURRICULUM[i];break}
  if(!lvl) return 0;
  var done=0;
  lvl.topics.forEach(function(t){if(prog.grammar && prog.grammar[t.id]) done++});
  return lvl.topics.length ? Math.round(done*100/lvl.topics.length) : 0;
}

// ============ JOB SCENARIOS ============
var JOB_CATS=[
 {id:'it',name:'پشتیبانی IT',icon:'tool',desc:'حل مشکلات کارمندان'},
 {id:'rep',name:'گزارش به ایلدار',icon:'briefcase',desc:'به‌روزرسانی، موجودی، تأیید'},
 {id:'phone',name:'مکالمه تلفنی',icon:'phone',desc:'تماس با همکاران'},
 {id:'f2f',name:'حضوری',icon:'users',desc:'ملاقات حضوری'},
 {id:'biz',name:'وظایف کاری',icon:'file',desc:'فاکتور، موجودی، پیگیری'}
];

var JOB_SCENARIOS=[
 {id:'e-hello',cat:'rep',level:'easy',title:'چک سریع',desc:'یه نگاه سریع از مدیر',role:'Manager',roleFa:'مدیر',opening:"Armin, any update?",hint:"جواب کوتاه بده.",sample:"Yes, all good. I'll send the report by end of day."},
 {id:'e-ack',cat:'rep',level:'easy',title:'تأیید ساده',desc:'تأیید دریافت یه کار',role:'Manager',roleFa:'مدیر',opening:"Please take this and give it to Milad.",hint:"فقط تأیید کن.",sample:"Understood. I'll take it to Milad."},
 {id:'e-count',cat:'rep',level:'easy',title:'چند تا داری؟',desc:'موجودی ساده',role:'Manager',roleFa:'مدیر',opening:"How many laptops do we have?",hint:"عدد + اسم.",sample:"We have three."},
 {id:'e-where',cat:'rep',level:'easy',title:'کجاست؟',desc:'پیدا کردن یه نفر',role:'Manager',roleFa:'مدیر',opening:"Where is Ali?",hint:"نمی‌دونم یا هست در...",sample:"I don't know. Let me check."},
 {id:'e-printer',cat:'it',level:'easy',title:'پرینتر روشن نمی‌شه',desc:'کاربر ساده',role:'User',roleFa:'کاربر',opening:"My printer is not working.",hint:"Is it on? Is there paper?",sample:"Is it turned on? Is there paper in the tray?"},
 {id:'e-internet',cat:'it',level:'easy',title:'اینترنت قطع شده',desc:'کاربر ساده',role:'User',roleFa:'کاربر',opening:"I have no internet.",hint:"Wi-Fi یا کابل؟",sample:"Are you on Wi-Fi or cable? Let me check."},
 {id:'m-printer',cat:'it',level:'medium',title:'پرینتر کار نمی‌کند',desc:'خطای دقیق',role:'User',roleFa:'کاربر',opening:"My printer isn't printing. There's a red light.",hint:"error message چیه؟",sample:"Is there an error message? I'll remote in to check."},
 {id:'m-network',cat:'it',level:'medium',title:'اتصال به شبکه',desc:'مشکل شبکه',role:'User',roleFa:'کاربر',opening:"My laptop shows no network at all.",hint:"Wi-Fi یا کابل؟",sample:"Are you on Wi-Fi or cable? Could you disconnect and reconnect?"},
 {id:'m-office',cat:'it',level:'medium',title:'آفیس کرش می‌کند',desc:'مشکل نرم‌افزار',role:'User',roleFa:'کاربر',opening:"Word keeps crashing when I open a file.",hint:"کدوم فایل؟",sample:"Which file? Let's try opening in safe mode."},
 {id:'m-inventory',cat:'rep',level:'medium',title:'گزارش موجودی',desc:'موجودی کامل',role:'Manager',roleFa:'مدیر',opening:"How many spare HP laptops do we have in stock?",hint:"جواب کوتاه.",sample:"We have three spare HP laptops. Let me confirm."},
 {id:'m-person',cat:'rep',level:'medium',title:'پیدا کردن افراد',desc:'پیگیری یه نفر',role:'Manager',roleFa:'مدیر',opening:"About Mr. Raei-Tabar. Do you know where he is?",hint:"پیگیری می‌کنم.",sample:"I don't know yet. I'll check and let you know."},
 {id:'h-daily',cat:'rep',level:'hard',title:'گزارش روزانه',desc:'به‌روزرسانی کامل',role:'Manager',roleFa:'مدیر',opening:"Hello Armin. Do you have a minute? I'd like a quick update for today.",hint:"Yesterday I… Today I…",sample:"Sure. Yesterday I finished the printer issue. Today I'm setting up two laptops."},
 {id:'h-delay',cat:'rep',level:'hard',title:'توضیح تأخیر',desc:'کار دیر شده',role:'Manager',roleFa:'مدیر',opening:"Why is the laptop setup delayed? I expected it yesterday.",hint:"عذرخواهی + دلیل + ETA",sample:"Sorry for the delay. The new laptops arrived late. I'll have them ready by tomorrow."},
 {id:'h-phone-in',cat:'phone',level:'hard',title:'دریافت تماس',desc:'تماس از همکار',role:'Colleague',roleFa:'همکار',opening:"Hello? Armin? Can you hear me?",hint:"Yes + How can I help?",sample:"Yes, I can hear you. How can I help?"},
 {id:'h-phone-mgr',cat:'phone',level:'hard',title:'تماس با ایلدار',desc:'مدیر زنگ می‌زند',role:'Manager',roleFa:'مدیر',opening:"Armin? Hello. I need a quick status on the tickets today.",hint:"گزارش کوتاه.",sample:"Hi Ildar. We have three open tickets. Two are in progress."},
 {id:'r-meeting',cat:'f2f',level:'real',title:'جلسه‌ی حضوری',desc:'توضیح دقیق',role:'Manager',roleFa:'مدیر',opening:"Let's sit down. I want to discuss the printer issue from yesterday.",hint:"چی شد، چی کردی، نتیجه.",sample:"The printer had a paper jam. I cleared it and tested. Now it works fine."},
 {id:'r-invoice',cat:'biz',level:'real',title:'پیگیری اینویس',desc:'فاکتور',role:'Colleague',roleFa:'همکار',opening:"Hi Armin. Any news about invoice #1234?",hint:"چک می‌کنم.",sample:"Let me check. It was submitted last week. I'll confirm and get back to you."},
 {id:'r-hall',cat:'f2f',level:'real',title:'راهرو',desc:'گپ کوتاه',role:'Manager',roleFa:'مدیر',opening:"Hello Armin, good morning. Do you have a minute?",hint:"Greet + yes.",sample:"Good morning. Yes, of course. What do you need?"},
 {id:'r-balance',cat:'biz',level:'real',title:'موجودی حساب',desc:'چک موجودی',role:'Manager',roleFa:'مدیر',opening:"Can you check the current balance and let me know?",hint:"Acknowledge + check.",sample:"Sure. Let me check now and I'll send you the number."},
// ===== واقعی: از مکالمات واقعی آرمین با ایلدار و همکاران استخراج شده =====
 {id:'r2-topup',cat:'biz',level:'easy',title:'خبر دادن یه کار شخصی',desc:'گزارش کوتاه به مدیر',role:'Manager',roleFa:'مدیر',opening:'Did the top-up go through?',hint:'بگو با کارت خودش نشد و خودت خریدی، بخواه چک کنه',sample:'Hi Ildar, I bought the top-up myself since it didn\'t work with your card. Could you please check if it\'s credited?'},
 {id:'r2-abramov-fixed',cat:'it',level:'easy',title:'اعلام رفع مشکل به کاربر',desc:'بعد از حل مشکل یه کاربر',role:'User',roleFa:'کاربر',opening:'Is my issue fixed?',hint:'کوتاه بگو همه‌چیز درست شد',sample:'Everything has been fixed and is working properly now.'},
 {id:'r2-jmc-check',cat:'rep',level:'easy',title:'چک وضعیت آماده‌سازی',desc:'سؤال سریع مدیر',role:'Manager',roleFa:'مدیر',opening:'Is everything good with the JMC preparation?',hint:'کوتاه بگو بله همه‌چیز خوب پیش می‌ره',sample:'Yes, everything is going well.'},
 {id:'r2-meeting-well',cat:'rep',level:'easy',title:'گزارش بعد از جلسه',desc:'خبر دادن نتیجه‌ی یه جلسه',role:'Manager',roleFa:'مدیر',opening:'How did the meeting go?',hint:'بگو خیلی خوب پیش رفت، بدون مشکل تموم شد',sample:'The meeting went perfectly. Everything went smoothly, and it finished without any issues.'},
 {id:'r2-office-tomorrow',cat:'rep',level:'easy',title:'سؤال درباره‌ی حضور فردا',desc:'مدیر می‌پرسه فردا میای؟',role:'Manager',roleFa:'مدیر',opening:'Will you be at the office tomorrow?',hint:'بله یا نه + دلیل کوتاه',sample:'Yes, I\'ll be at the office tomorrow.'},
 {id:'r2-laptop-stock',cat:'it',level:'easy',title:'موجودی لپ‌تاپ یدکی',desc:'چک سریع موجودی',role:'Manager',roleFa:'مدیر',opening:'How many spare HP laptops do we have?',hint:'عدد بده و اگه چیز دیگه‌ای هم هست بگو',sample:'We have 5 new HP laptops in stock. Also, I still have the one you asked me to prepare for Reza Amiri.'},
 {id:'r2-kord-phone',cat:'rep',level:'easy',title:'نداشتن یه اطلاعات',desc:'وقتی چیزی رو نداری صادقانه بگو',role:'Manager',roleFa:'مدیر',opening:'Do you have Mr. Kord\'s phone number?',hint:'نه رو مؤدبانه بگو',sample:'No, Ildar. I don\'t have Mr. Kord\'s phone number.'},
 {id:'r2-video-watch',cat:'rep',level:'easy',title:'درخواست محترمانه از مدیر',desc:'خواهش کوچیک از ایلدار',role:'Manager',roleFa:'مدیر',opening:'Yes, Armin? What is it?',hint:'با احترام بخواه یه ویدیو رو نگاه کنه',sample:'If you have time, could you please take a look at this video? Thank you.'},
 {id:'r2-trueconf-problem',cat:'it',level:'easy',title:'چک کردن TrueConf',desc:'پرسیدن مشکل از کاربر',role:'User',roleFa:'کاربر',opening:'Ildar asked me to check your TrueConf.',hint:'بپرس آیا مشکلی داره',sample:'Is there any problem with your TrueConf?'},
 {id:'r2-meeting-finished',cat:'f2f',level:'easy',title:'پرسیدن تموم شدن جلسه',desc:'حضوری از یه نفر بپرس',role:'Colleague',roleFa:'همکار',opening:'I\'m still in a meeting, one moment.',hint:'مؤدبانه بپرس جلسه تموم شده یا نه',sample:'Has your meeting finished?'},
 {id:'r2-artem-reinstall',cat:'it',level:'medium',title:'هماهنگی نصب مجدد آفیس',desc:'درخواست یه همکار روسی',role:'Colleague',roleFa:'همکار',opening:'Need Artem Peshkov with Office, he ask re-install.',hint:'بگو حتماً باهاش هماهنگ می‌کنی و بررسی می‌کنی',sample:'Sure, I\'ll contact Artem Peshkov and check with him.'},
 {id:'r2-domain-profile',cat:'it',level:'medium',title:'توضیح مشکل دامین به کاربر',desc:'قبل از نصب آفیس',role:'Colleague',roleFa:'همکار',opening:'Can you install Office on my laptop now?',hint:'توضیح بده اول باید دامین پروفایلش عوض بشه',sample:'Your profile is still connected to the company\'s old domain. We need to change that first, and then I can install Office.'},
 {id:'r2-popov-call',cat:'phone',level:'hard',title:'وقتی نتونستی جواب تماس بدی',desc:'توضیح محدودیت زبانی و دادن آدرس',role:'Colleague',roleFa:'همکار',opening:'Hello? Why didn\'t you answer my call?',hint:'ببخشید بخواه، بگو مکالمه‌ات خوب نیست، پیام متنی بخواه، آدرس دقیق بده',sample:'Sorry, I was unable to answer your call. My spoken English isn\'t very good — could you please send me a text message instead? I\'m sitting on the second floor, north wing, opposite Mr. Rajab\'s office.'},
 {id:'r2-popov-lost',cat:'f2f',level:'easy',title:'راهنمایی همکار گم‌شده',desc:'یه همکار جدید مسیر رو بلد نیست',role:'Colleague',roleFa:'همکار',opening:'This is my first time here, I don\'t know my way around. I\'m right next to the entrance.',hint:'بگو الان میای پیداش می‌کنی',sample:'I will come to the entrance and find you in a few minutes.'},
 {id:'r2-hoda-followup',cat:'rep',level:'medium',title:'پیگیری فاکتور از تأمین‌کننده',desc:'گزارش تأخیر یه فاکتور',role:'Manager',roleFa:'مدیر',opening:'Did you clarify the invoices with Ms. Hoda? Did she send them?',hint:'بگو پیگیری کردی، مشکل داخلی داشتن، فردا می‌فرستن',sample:'I followed up with Ms. Hoda today. She said they had an internal issue and couldn\'t send the invoices until today, but they will send them tomorrow.'},
 {id:'r2-hoda-pdf',cat:'rep',level:'medium',title:'ادامه‌ی پیگیری فاکتور',desc:'رسیدن فایل‌ها و مرحله‌ی بعد',role:'Manager',roleFa:'مدیر',opening:'Any update on the invoices?',hint:'بگو pdf رسید، با همکار بررسی می‌کنی، بعد می‌فرستی تهران',sample:'Hoda sent the PDF copies of the invoices. I will review them with Masoumeh, and if there are no other issues, she will send them to Tehran.'},
 {id:'r2-abramov-report',cat:'rep',level:'medium',title:'گزارش دو خبر با هم',desc:'دو تا آپدیت کوتاه پشت‌سرهم',role:'Manager',roleFa:'مدیر',opening:'Any updates for me?',hint:'اول بگو مشکل آبراموف حل شد، بعد بگو داری میری پیش همکار برای فاکتورها',sample:'Mr. Abramov\'s issue has been resolved. Now I\'m going to meet Masoumeh to review the Aryant invoices with her.'},
 {id:'r2-azat-handover',cat:'it',level:'medium',title:'تحویل لپ‌تاپ بدون تنظیمات',desc:'دستور کوتاه مدیر برای تحویل',role:'Manager',roleFa:'مدیر',opening:'Need to handover one HP laptop to Azat Garaev, geologist on a business trip. W/o setting up. He is sitting in Shadegan wing.',hint:'تأیید کن که بدون تنظیمات تحویل می‌دی',sample:'Understood, Ildar. I will hand over one HP laptop to Azat Garaev without setting it up.'},
 {id:'r2-nisoc-laptop',cat:'it',level:'medium',title:'لپ‌تاپ در انتظار درخواست',desc:'وقتی باید منتظر یه درخواست بمونی',role:'Manager',roleFa:'مدیر',opening:'One laptop for NISOC too. Reza has the credentials, he must send you the request.',hint:'بگو متوجه شدی و منتظر درخواست رضا می‌مونی',sample:'Understood, Ildar. I will wait for Reza\'s request regarding the NISOC laptop.'},
 {id:'r2-denis-handover',cat:'it',level:'hard',title:'تحویل لپ‌تاپ به فرد دیگری تغییر کرد',desc:'دستور اصلاح‌شده‌ی مدیر',role:'Manager',roleFa:'مدیر',opening:'Actually, prepare the handover for Popov Denis instead — it\'s for him. He\'s in Ahvaz now and will go straight back to Moscow without visiting Renault.',hint:'تأیید کن و خلاصه‌ی هر دو مورد (NISOC و دنیس) رو بگو',sample:'Understood, Ildar. I will keep both laptops ready — one for NISOC, and the other is the laptop I set up last week for Denis Popov. I\'ll wait for further instructions about delivery to Ahvaz.'},
 {id:'r2-trueconf-name',cat:'it',level:'medium',title:'تأیید هویت قبل از چک فنی',desc:'قبل از بررسی، مطمئن شو با فرد درست صحبت می‌کنی',role:'User',roleFa:'کاربر',opening:'Yes, hello?',hint:'بپرس آیا همون آقای پاشکویچ هستش که مدیر گفته',sample:'Are you Mr. Pashkevich? Ildar asked me to check your TrueConf.'},
 {id:'r2-website-ec',cat:'it',level:'hard',title:'همکاری برای رفع مشکل سایت',desc:'درخواست همکاری با یه همکار دیگه',role:'Manager',roleFa:'مدیر',opening:'Can you cooperate with Denis and solve the issue with the website used by our E&C department? It works in the Moscow office, he\'ll provide access.',hint:'قبول کن، و بگو قبلاً از لپ‌تاپ خودت هم بهش دسترسی نداشتی',sample:'Sure. I\'ll cooperate with Denis and check it. I didn\'t have access to it from my laptop before either.'},
 {id:'r2-denis-laptop-approve',cat:'rep',level:'hard',title:'درخواست تأیید برای تجهیزات',desc:'قبل از دادن تجهیزات، تأیید مدیر رو بگیر',role:'Manager',roleFa:'مدیر',opening:'Yes, Armin, what do you need?',hint:'بگو حسام گفته ایگور خواسته لپ‌تاپ بدی، تأیید می‌خوای و مدل رو می‌پرسی',sample:'Hesam told me that Igor asked him to get a laptop from us for Denis. Do you approve? If so, should I give him one of the MPS laptops, and which model?'},
 {id:'r2-daily-multi',cat:'rep',level:'real',title:'گزارش روزانه با چند خبر',desc:'چند تا آپدیت متفاوت پشت‌سرهم، خلاصه و مرتب',role:'Manager',roleFa:'مدیر',opening:'Good morning, Armin. Any updates for me today?',hint:'سه تا خبر جدا: لپ‌تاپ‌های برگشتی، وضعیت فاکتور آریانت، وضعیت FTTH',sample:'Good morning. A few quick updates: Denis returned two laptops to me. I spoke with Ms. Atfan Nezhad again about the Arianet invoices — she said they still can\'t accept them from us. I also spoke with Mr. Bahrami about the FTTH line; the issue was resolved yesterday and it will be installed in the Reno building, only the TIC security approval is still pending.'},
 {id:'r2-daily-short',cat:'rep',level:'hard',title:'همون گزارش ولی کوتاه‌تر',desc:'همون خبر روز ولی خلاصه‌تر',role:'Manager',roleFa:'مدیر',opening:'Can you make that shorter, just the important part?',hint:'فقط بخش FTTH رو خیلی خلاصه بگو',sample:'I also spoke with Mr. Bahrami. The FTTH issue with TCI was resolved yesterday, and it will be installed in the Reno building. Only the TIC security approval is pending, and it should be resolved soon.'},
 {id:'r2-kaspersky-concern',cat:'it',level:'hard',title:'ابراز نگرانی فنی به مدیر',desc:'قبل از انجام یه دستور، یه نگرانی رو مطرح کن',role:'Manager',roleFa:'مدیر',opening:'Ask Hesam — we sent the Kaspersky live CD to the group, need to check all laptops, and prepare a list of model, serial number and domain name.',hint:'قبول کن ولی نگرانی‌ات رو درباره‌ی حذف شدن کرک نرم‌افزارها بگو',sample:'Got it. Just one concern: could Kaspersky Live remove the cracks for some software, such as AutoCAD and Navisworks?'},
 {id:'r2-kaspersky-progress',cat:'it',level:'real',title:'گزارش پیشرفت یه کار زمان‌بر',desc:'وقتی کار طول کشیده، توضیح بده کجای کاری',role:'Manager',roleFa:'مدیر',opening:'How many laptops have you checked so far?',hint:'بگو چند تا تموم شده، چرا طول می‌کشه، و چی هنوز کامل نیست',sample:'Scanning takes some time. I\'ve scanned 4 laptops so far, the ones I\'m sure don\'t have any cracked software. I already have the serial numbers, models and names of most people, I just don\'t have the PC names yet.'},
 {id:'r2-arianet-pd',cat:'biz',level:'medium',title:'توضیح یه سوءتفاهم درباره‌ی فاکتور',desc:'روشن کردن اینکه مشکل کجاست',role:'Manager',roleFa:'مدیر',opening:'Is there a problem with the Arianet invoices?',hint:'بگو مشکلی نیست، فقط هنوز تو لیست تحویل PD اضافه نشدن',sample:'There is no issue with Arianet. The PD team accepts invoices according to their list, but Arianet hasn\'t been added to that list yet, so they can\'t accept the invoices for now.'},
 {id:'r2-artem-meeting',cat:'f2f',level:'easy',title:'گزارش یه ملاقات ناموفق',desc:'وقتی طرف رو پیدا نکردی',role:'Manager',roleFa:'مدیر',opening:'Did you talk to Artem?',hint:'بگو رفتی ولی جلسه بوده، قراره دو ساعت دیگه دوباره بری',sample:'I went to see Artem, but he was in a meeting. They asked me to come back to his office in two hours.'},
 {id:'r2-monitor-approve',cat:'rep',level:'medium',title:'درخواست تأیید برای مانیتور',desc:'درخواست تجهیزات یه کارمند',role:'Manager',roleFa:'مدیر',opening:'Yes?',hint:'بگو یه نفر درخواست مانیتور شیائومی داده، تأیید می‌خوای',sample:'Mr. Mostaghimzadeh has requested a Xiaomi monitor. Do you approve giving him one?'},
 {id:'r2-contract-kord',cat:'rep',level:'hard',title:'گزارش پیچیده‌ی تحویل قرارداد',desc:'چند خبر مرتبط با هم درباره‌ی یه قرارداد',role:'Manager',roleFa:'مدیر',opening:'Any news about the contract copy for Mr. Kord?',hint:'بگو قرارداد رو از میلاد گرفتی، با کرد هماهنگ کردی بیاد بگیره، و خبر معصومه رو هم بگو',sample:'I received the contract from Milad. I also spoke with Mr. Kord, and he told me that he or his representative will come to the office to collect it. Also, Ms. Masoumeh will be in the office tomorrow, and I\'ll coordinate with her regarding Aryant.'}
];

// ============ FREE SITUATIONS ============
var FREE_SITUATIONS=[
 {id:'f1',cat:'موجودی',fa:'ایلدار ازت می‌پرسه چند تا لپ‌تاپ یدکی داریم',hint:'عدد + نوع + in stock',sample:"We have 3 spare HP laptops in stock.",level:'easy'},
 {id:'f2',cat:'گزارش',fa:'ایلدار گزارش امروزت رو می‌خواد',hint:'Yesterday I… Today I… No blockers.',sample:"Sure. Yesterday I finished the printer setup. Today I'm working on two tickets.",level:'medium'},
 {id:'f3',cat:'پیگیری',fa:'ایلدار می‌خواد بدونه اینویس چطور پیش می‌ره',hint:'Let me check + will confirm',sample:"Let me check and get back to you in 10 minutes.",level:'easy'},
 {id:'f4',cat:'تأخیر',fa:'ایلدار می‌پرسه چرا کار دیر شده',hint:'Sorry + reason + ETA',sample:"Sorry for the delay. The laptops arrived late. I'll have them ready by tomorrow.",level:'hard'},
 {id:'f5',cat:'پشتیبانی',fa:'کاربر می‌گه پرینترش کار نمی‌کنه',hint:'Ask: is it on? paper? error?',sample:"Is it turned on? Is there paper in the tray?",level:'easy'},
 {id:'f6',cat:'پشتیبانی',fa:'کاربر می‌گه به اینترنت وصل نمی‌شه',hint:'Wi-Fi or cable? Try reconnect',sample:"Are you on Wi-Fi or cable? Let me check from my side.",level:'medium'},
 {id:'f7',cat:'پشتیبانی',fa:'کاربر می‌گه Word کرش می‌کنه',hint:'Which file? Safe mode?',sample:"Which file? Let's try opening it in safe mode.",level:'medium'},
 {id:'f8',cat:'پشتیبانی',fa:'کاربر می‌گه لپ‌تاپش کند شده',hint:'When did it start?',sample:"When did it start? Let me check what's running.",level:'medium'},
 {id:'f9',cat:'تأیید',fa:'ایلدار می‌خواد قرارداد رو به میلاد بدی',hint:'Understood. Will do.',sample:"Understood. I'll take it to Milad.",level:'easy'},
 {id:'f10',cat:'پیدا کردن',fa:'ایلدار می‌پرسه آقای راعی‌تبار کجاست',hint:'I don\'t know yet + will check',sample:"I don't know yet. I'll check and let you know.",level:'easy'},
 {id:'f11',cat:'جلسه',fa:'ایلدار می‌پرسه می‌تونی ساعت ۳ جلسه باشی',hint:'Yes, I can. / Sorry, I have…',sample:"Yes, 3 works for me.",level:'easy'},
 {id:'f12',cat:'اولویت',fa:'ایلدار می‌پرسه کدوم کار فوری‌تره',hint:'I think… is more urgent because…',sample:"I think the printer issue is more urgent because a client needs it.",level:'hard'},
 {id:'f13',cat:'پیشنهاد',fa:'ایلدار می‌پرسه پیشنهادت چیه',hint:'I suggest / I recommend',sample:"I suggest we order two more spare laptops.",level:'hard'},
 {id:'f14',cat:'نظر',fa:'ایلدار می‌پرسه نظرت چیه',hint:'In my opinion / I think',sample:"In my opinion, we should wait until Monday.",level:'medium'},
 {id:'f15',cat:'فنی',fa:'ایلدار می‌پرسه مشکل چی بود',hint:'The issue was… I fixed it by…',sample:"The issue was a paper jam. I cleared it and tested.",level:'medium'},
 {id:'f16',cat:'منابع',fa:'ایلدار می‌پرسه تجهیزات بیشتری لازم داریم',hint:'Yes, we need… / No, we have enough',sample:"Yes, we need two more keyboards.",level:'medium'},
 {id:'f17',cat:'زمان‌بندی',fa:'ایلدار می‌پرسه کی تموم می‌شه',hint:'I\'ll have it done by…',sample:"I'll have it done by end of day.",level:'easy'},
 {id:'f18',cat:'امنیت',fa:'کاربر می‌گه رمزش رو فراموش کرده',hint:'I\'ll reset it for you',sample:"No problem. I'll reset it for you now.",level:'easy'},
 {id:'f19',cat:'انبار',fa:'ایلدار می‌پرسه کیبورد یدکی داریم',hint:'Yes, we have X. / No, we need to order',sample:"Yes, we have 4 spare keyboards.",level:'easy'},
 {id:'f20',cat:'همکاری',fa:'ایلدار می‌خواد به همکار جدید کمک کنی',hint:'Sure, I\'ll help him with…',sample:"Sure, I'll help him with the setup.",level:'easy'},
 {id:'f21',cat:'مرخصی',fa:'می‌خوای یه روز مرخصی بگیری',hint:'I need… Is it OK?',sample:"I need to take a day off tomorrow. Is that OK?",level:'medium'},
 {id:'f22',cat:'تلفنی',fa:'همکار زنگ می‌زنه و می‌گه صدات رو نمی‌شنوه',hint:'Yes, I can hear you',sample:"Yes, I can hear you. How can I help?",level:'easy'},
 {id:'f23',cat:'شبکه',fa:'کاربر می‌گه VPN وصل نمی‌شه',hint:'Are you on…? Try restarting',sample:"Are you on the office network? Try restarting the VPN client.",level:'hard'},
 {id:'f24',cat:'چاپ',fa:'کاربر می‌گه چاپگر خطا می‌ده',hint:'What does the error say?',sample:"What does the error say? I'll take a look.",level:'medium'},
 {id:'f25',cat:'گزارش',fa:'ایلدار می‌خواد گزارش هفته رو بفرستی',hint:'Sure + when',sample:"Sure. I'll send it by end of day.",level:'easy'}
];

// ============ PROGRAM ============
var PROGRAM=[
 {week:1,title:'پایه‌سازی — فعل to be',goal:'یادگیری فعل to be و Present Simple',
  lessons:[{level:'A1',idx:1,note:'پایه‌ی همه‌چیز'},{level:'A1',idx:4,note:'برای گزارش روزانه'}],
  scenarios:[{id:'e-hello',note:'چک سریع'},{id:'e-ack',note:'تأیید'},{id:'e-count',note:'موجودی'},{id:'e-where',note:'پیدا کردن'},{id:'e-printer',note:'پرینتر'},{id:'e-internet',note:'اینترنت'},{id:'r2-jmc-check',note:'واقعی'},{id:'r2-meeting-well',note:'واقعی'},{id:'r2-office-tomorrow',note:'واقعی'},{id:'r2-laptop-stock',note:'واقعی'}],
  grammar:['g-a1-articles','g-a1-plurals','g-a1-tobe'],
  schedule:['۱۵ دقیقه: درس','۱۰ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر','۵ دقیقه: تمرین آزاد']},
 {week:2,title:'درخواست و گذشته',goal:'Can/Could و Past Simple',
  lessons:[{level:'A1',idx:10,note:'Can برای درخواست'},{level:'A2',idx:0,note:'Past Simple'}],
  scenarios:[{id:'e-hello',note:'مرور'},{id:'e-ack',note:'مرور'},{id:'e-printer',note:'پرینتر'},{id:'m-printer',note:'پرینتر دقیق'},{id:'m-network',note:'شبکه'},{id:'e-internet',note:'اینترنت'},{id:'r2-topup',note:'واقعی'},{id:'r2-abramov-fixed',note:'واقعی'},{id:'r2-kord-phone',note:'واقعی'},{id:'r2-video-watch',note:'واقعی'}],
  grammar:['g-a1-sv','g-a1-pronouns','g-a2-past-reg'],
  schedule:['۱۵ دقیقه: درس','۱۵ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر']},
 {week:3,title:'آینده و قوانین',goal:'Future و Rules',
  lessons:[{level:'A2',idx:2,note:'Will/Going to'},{level:'B1',idx:5,note:'Should/Must'}],
  scenarios:[{id:'m-printer',note:'پرینتر'},{id:'m-network',note:'شبکه'},{id:'m-office',note:'نرم‌افزار'},{id:'m-inventory',note:'موجودی'},{id:'m-person',note:'پیدا کردن'},{id:'e-count',note:'مرور'},{id:'r2-trueconf-problem',note:'واقعی'},{id:'r2-meeting-finished',note:'واقعی'},{id:'r2-artem-reinstall',note:'واقعی'},{id:'r2-domain-profile',note:'واقعی'}],
  grammar:['g-a2-continuous','g-a2-pres-cont','g-a2-future'],
  schedule:['۱۵ دقیقه: درس','۱۵ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر']},
 {week:4,title:'حال کامل و نظر',goal:'Present Perfect و Opinions',
  lessons:[{level:'B1',idx:1,note:'Present Perfect'},{level:'B1',idx:4,note:'I think'}],
  scenarios:[{id:'m-inventory',note:'موجودی'},{id:'m-person',note:'پیدا کردن'},{id:'m-office',note:'نرم‌افزار'},{id:'m-printer',note:'پرینتر'},{id:'m-network',note:'شبکه'},{id:'e-ack',note:'تأیید'},{id:'r2-hoda-followup',note:'واقعی'},{id:'r2-hoda-pdf',note:'واقعی'},{id:'r2-abramov-report',note:'واقعی'},{id:'r2-arianet-pd',note:'واقعی'}],
  grammar:['g-a2-past-irreg','g-a2-past-cont','g-b1-perfect'],
  schedule:['۱۵ دقیقه: درس','۱۵ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر']},
 {week:5,title:'شرطی و داستان',goal:'If…will و Telling a Story',
  lessons:[{level:'B1',idx:3,note:'First Conditional'},{level:'B1',idx:6,note:'Past Continuous'}],
  scenarios:[{id:'h-daily',note:'گزارش روزانه'},{id:'h-delay',note:'تأخیر'},{id:'h-phone-in',note:'تماس'},{id:'h-phone-mgr',note:'تلفنی ایلدار'},{id:'m-inventory',note:'مرور'},{id:'m-person',note:'مرور'},{id:'r2-azat-handover',note:'واقعی'},{id:'r2-nisoc-laptop',note:'واقعی'},{id:'r2-denis-handover',note:'واقعی'},{id:'r2-trueconf-name',note:'واقعی'}],
  grammar:['g-b1-perfect-vs-past','g-b1-forsince','g-b1-cond1'],
  schedule:['۱۰ دقیقه: درس','۲۰ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر']},
 {week:6,title:'مکالمه تلفنی',goal:'آماده‌شدن برای تماس‌ها',
  lessons:[{level:'A2',idx:8,note:'Could/Would'}],
  scenarios:[{id:'h-phone-in',note:'دریافت تماس'},{id:'h-phone-mgr',note:'ایلدار'},{id:'h-daily',note:'گزارش'},{id:'h-delay',note:'تأخیر'},{id:'m-printer',note:'پرینتر'},{id:'m-office',note:'آفیس'},{id:'r2-popov-call',note:'واقعی'},{id:'r2-popov-lost',note:'واقعی'},{id:'r2-artem-meeting',note:'واقعی'},{id:'r2-monitor-approve',note:'واقعی'}],
  grammar:['g-b1-modals','g-b1-cond2','g-a2-preptime'],
  schedule:['۱۰ دقیقه: مرور','۲۰ دقیقه: ۳ سناریو','۱۰ دقیقه: گرامر','دست‌آزاد']},
 {week:7,title:'حضوری و پیگیری',goal:'ملاقات حضوری',
  lessons:[{level:'B1',idx:10,note:'مصاحبه'},{level:'B2',idx:4,note:'Meetings'}],
  scenarios:[{id:'r-hall',note:'راهرو'},{id:'r-meeting',note:'جلسه'},{id:'r-invoice',note:'پیگیری'},{id:'r-balance',note:'موجودی'},{id:'h-daily',note:'گزارش'},{id:'h-phone-mgr',note:'تلفنی'},{id:'r2-website-ec',note:'واقعی'},{id:'r2-denis-laptop-approve',note:'واقعی'},{id:'r2-contract-kord',note:'واقعی'}],
  grammar:['g-b1-relative','g-b1-compar','g-a2-quant'],
  schedule:['۱۰ دقیقه: مرور','۲۵ دقیقه: ۵ سناریو','۱۰ دقیقه: گرامر']},
 {week:8,title:'خودکارسازی',goal:'مرور همه‌چیز',
  lessons:[{level:'B2',idx:10,note:'Complaints'}],
  scenarios:[{id:'r-balance',note:'موجودی'},{id:'r-invoice',note:'پیگیری'},{id:'r-meeting',note:'حضوری'},{id:'h-daily',note:'گزارش'},{id:'h-phone-mgr',note:'تلفنی ایلدار'},{id:'m-person',note:'پیدا کردن'},{id:'r2-daily-multi',note:'واقعی'},{id:'r2-daily-short',note:'واقعی'},{id:'r2-kaspersky-concern',note:'واقعی'},{id:'r2-kaspersky-progress',note:'واقعی'}],
  grammar:['g-b2-passive','g-b2-reported','g-b2-gerund'],
  schedule:['۱۰ دقیقه: درس','۲۰ دقیقه: ۶ سناریو مرور','۱۰ دقیقه: گرامر']}
];

// ============ LEVELS ============
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
 {en:'Name',say:'نِیم',fa:'اسم',ex:'My name is Sara.',ex_fa:'اسم من سارا است.'},
 {en:'From',say:'فِرام',fa:'از / اهل',ex:'I am from Iran.',ex_fa:'من اهل ایران هستم.'},
 {en:'Nice to meet you',say:'نایس تو میت یو',fa:'از آشنایی خوشحالم',ex:'Nice to meet you, Sam.',ex_fa:'خوشحالم.'},
 {en:'How are you?',say:'های آر یو',fa:'حالت چطور است؟',ex:'Hi Ali, how are you?',ex_fa:'سلام علی.'},
 {en:'Fine',say:'فاین',fa:'خوب',ex:'I am fine, thank you.',ex_fa:'خوبم، ممنون.'},
 {en:'Thank you',say:'تَنک یو',fa:'ممنون',ex:'Thank you very much.',ex_fa:'خیلی ممنون.'},
 {en:'Please',say:'پلیز',fa:'لطفاً',ex:'Sit down, please.',ex_fa:'لطفاً بنشینید.'},
 {en:'Sorry',say:'سُری',fa:'ببخشید',ex:'Sorry, I am late.',ex_fa:'ببخشید.'},
 {en:'Goodbye',say:'گودبای',fa:'خداحافظ',ex:'Goodbye, see you tomorrow.',ex_fa:'خداحافظ.'}],
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

// ============ API ============
function callAI(system,messages,max){
  max = max || 1500;
  if(!settings.key) return Promise.reject(new Error('NOKEY'));
  var baseUrl = (settings.proxy && settings.proxy.trim()) ? settings.proxy.trim().replace(/\/+$/,'') : 'https://1xai.ir';
  var body = {model:settings.model, max_tokens:max, messages:[{role:'system',content:system}].concat(messages)};
  var attempt = 0;
  var maxAttempts = 3;
  var tryFetch = function(){
    attempt++;
    return fetch(baseUrl+'/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+settings.key},
      body:JSON.stringify(body)
    }).then(function(r){
      if(r.status >= 500 && attempt < maxAttempts){
        console.log('[Retry] server error ' + r.status + ', attempt ' + attempt);
        return new Promise(function(resolve){ setTimeout(resolve, 800); }).then(tryFetch);
      }
      if(!r.ok) return r.json().catch(function(){return{}}).then(function(d){
        var m = (d.error && d.error.message) || (d.error) || '';
        throw new Error(r.status + (m?' — '+m:''));
      });
      return r.json();
    }).then(function(d){
      return ((d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content)||'').trim();
    }).catch(function(e){
      if(attempt < maxAttempts && /Failed to fetch|NetworkError|500/.test(e.message||'')){
        console.log('[Retry] network error, attempt ' + attempt);
        return new Promise(function(resolve){ setTimeout(resolve, 800); }).then(tryFetch);
      }
      throw e;
    });
  };
  return tryFetch();
}

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
    t.setAttribute('aria-current', String(t.getAttribute('data-v') === (v==='lesson'?'path':(v==='gramtopic'?'grammar':v))));
  });
  render();
  window.scrollTo(0,0);
}
function render(){
  try{
    if(view==='program') return renderProgram();
    if(view==='grammar') return renderGrammar();
    if(view==='gramtopic') return renderGrammarTopic();
    if(view==='free') return renderFree();
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

// ============ PROGRAM RENDER ============
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
  var total = p.lessons.length + p.scenarios.length + (p.grammar?p.grammar.length:0);
  var done = 0;
  p.lessons.forEach(function(l){if(isTaskDone('les',l.level+':'+l.idx))done++});
  p.scenarios.forEach(function(s){if(isTaskDone('sc',s.id))done++});
  if(p.grammar) p.grammar.forEach(function(g){if(prog.grammar && prog.grammar[g])done++});
  return total ? Math.round(done*100/total) : 0;
}
function isWeekDone(w){return weekProgress(w)===100}

function renderProgram(){
  var p = null;
  for(var i=0;i<PROGRAM.length;i++) if(PROGRAM[i].week===curWeek){p=PROGRAM[i];break}
  if(!p){curWeek=1;return renderProgram()}
  var h = '<h1>برنامه‌ی ۸ هفته‌ای من</h1><p class="sub">ترکیب درس + گرامر + سناریو.</p>';
  h += '<div class="week-nav">';
  PROGRAM.forEach(function(w){
    var done = isWeekDone(w.week) ? 'done' : '';
    h += '<button type="button" class="week-tab '+done+'" data-w="'+w.week+'" aria-pressed="'+(w.week===curWeek)+'"><b>هفته '+fa(w.week)+'</b><small>'+weekProgress(w.week)+'٪</small></button>';
  });
  h += '</div>';
  var pct = weekProgress(p.week);
  h += '<div class="week-head"><h2>هفته '+fa(p.week)+' — '+esc(p.title)+'</h2><p>🎯 '+esc(p.goal)+'</p><div class="prog-bar"><i style="width:'+pct+'%"></i></div><div style="font-size:.8rem;margin-top:4px;opacity:.9">'+fa(pct)+'٪ تکمیل</div></div>';
  h += '<div class="week-section"><h3>📚 درس‌ها</h3><div class="task-list" id="lessonList"></div></div>';
  if(p.grammar && p.grammar.length){
    h += '<div class="week-section"><h3 style="color:var(--gram)">📐 گرامر این هفته</h3><div class="task-list" id="grammarList"></div></div>';
  }
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
  var grammarList = $('#grammarList');
  if(grammarList && p.grammar){
    p.grammar.forEach(function(gid){
      var gt = findGrammarTopic(gid); if(!gt) return;
      var done = prog.grammar && prog.grammar[gid];
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'task' + (done?' done':'');
      btn.innerHTML = '<div class="tick">'+(done?'✓':'')+'</div><div class="body"><div class="tt" dir="ltr">'+esc(gt.topic.title)+'</div><div class="td">'+esc(gt.topic.titleFa)+' — '+esc(gt.topic.why)+'</div></div><span class="badge gr">'+esc(gt.topic.dur)+'</span>';
      btn.addEventListener('click', function(ev){
        if(ev.target.closest('.tick')){ev.preventDefault();
          if(!prog.grammar) prog.grammar={};
          if(prog.grammar[gid]) delete prog.grammar[gid];
          else {prog.grammar[gid]=Date.now(); award(5)}
          saveProg(); renderProgram();
          return;
        }
        openGrammarTopic(gt.topic.id);
      });
      grammarList.appendChild(btn);
    });
  }
  var jobList = $('#jobList');
  if(jobList){
    p.scenarios.forEach(function(sc){
      var s = null;
      for(var i=0;i<JOB_SCENARIOS.length;i++) if(JOB_SCENARIOS[i].id===sc.id){s=JOB_SCENARIOS[i];break}
if(!s) for(var k=0;k<importedScenarios.length;k++) if(importedScenarios[k].id===sc.id){s=importedScenarios[k];break}
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

// ============ GRAMMAR RENDER ============
function renderGrammar(){
  var h = '<h1>📐 گرامر حرفه‌ای</h1><p class="sub">۴ سطح، ۳۴ موضوع، حدود ۹۰ ساعت آموزش.</p>';
  var totalTopics=0, doneTopics=0;
  GRAMMAR_CURRICULUM.forEach(function(lvl){
    totalTopics += lvl.topics.length;
    lvl.topics.forEach(function(t){if(prog.grammar && prog.grammar[t.id]) doneTopics++});
  });
  var totalPct = totalTopics ? Math.round(doneTopics*100/totalTopics) : 0;
  h += '<div class="card" style="background:var(--gram-soft);border-color:var(--gram)">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">';
  h += '<div><b>📊 پیشرفت کلی گرامر</b><div class="sub" style="font-size:.85rem;margin-top:4px">'+fa(doneTopics)+' از '+fa(totalTopics)+' موضوع</div></div>';
  h += '<div style="font-size:1.6rem;font-weight:800;color:var(--gram)">'+fa(totalPct)+'٪</div>';
  h += '</div>';
  h += '<div class="prog-bar" style="margin-top:12px;height:8px;background:rgba(0,0,0,.1);border-radius:4px;overflow:hidden"><i style="display:block;height:100%;background:var(--gram);width:'+totalPct+'%"></i></div>';
  h += '</div>';
  h += '<div class="gram-levels">';
  GRAMMAR_CURRICULUM.forEach(function(lvl){
    var pct = grammarLevelProgress(lvl.level);
    var done = pct===100?'done':'';
    h += '<button type="button" class="gram-lvl '+done+'" data-gramlvl="'+lvl.level+'">';
    h += '<span class="gl-tag" style="background:'+lvl.color+'">'+lvl.level+'</span>';
    h += '<div class="gl-t">'+esc(lvl.name)+'</div>';
    h += '<div class="gl-d">'+fa(lvl.topics.length)+' موضوع · ~'+fa(lvl.hours)+' ساعت</div>';
    h += '<div class="gl-stats"><span><b>'+fa(pct)+'٪</b> تکمیل</span></div>';
    h += '</button>';
  });
  h += '</div>';

  var showLevel = null;
  for(var i=0;i<GRAMMAR_CURRICULUM.length;i++){
    if(grammarLevelProgress(GRAMMAR_CURRICULUM[i].level)<100){showLevel = GRAMMAR_CURRICULUM[i];break}
  }
  if(!showLevel) showLevel = GRAMMAR_CURRICULUM[0];
  if(window._gramSelectedLevel){
    for(var i=0;i<GRAMMAR_CURRICULUM.length;i++) if(GRAMMAR_CURRICULUM[i].level===window._gramSelectedLevel) showLevel=GRAMMAR_CURRICULUM[i];
  }
  h += '<h2 style="margin-top:24px">موضوعات سطح '+esc(showLevel.level)+' — '+esc(showLevel.name)+'</h2>';
  h += '<div class="topic-list">';
  showLevel.topics.forEach(function(t,idx){
    var done = prog.grammar && prog.grammar[t.id];
    h += '<button type="button" class="topic '+(done?'done':'')+'" data-gramtopic="'+t.id+'">';
    h += '<span class="tp-num">'+(done?'✓':fa(idx+1))+'</span>';
    h += '<span class="tp-body"><div class="tp-t" dir="ltr">'+esc(t.title)+'</div><div class="tp-d">'+esc(t.titleFa)+' — '+esc(t.why)+'</div></span>';
    h += '<span class="tp-dur">'+esc(t.dur)+'</span>';
    h += '</button>';
  });
  h += '</div>';
  $('#main').innerHTML = h;
  $$('[data-gramlvl]').forEach(function(b){b.onclick = function(){window._gramSelectedLevel = b.getAttribute('data-gramlvl'); renderGrammar()}});
  $$('[data-gramtopic]').forEach(function(b){b.onclick = function(){openGrammarTopic(b.getAttribute('data-gramtopic'))}});
}

var GRAMMAR_SYS='You are the world\'s best English grammar teacher for Persian speakers. Create an EXTREMELY detailed lesson.\nReturn ONLY valid JSON:\n{"title":string,"titleFa":string,"intro_fa":string,"duration_read_min":number,"duration_practice_min":number,"rules":[{"num":number,"title":string,"explain_fa":string,"structure":string,"examples":[{"en":string,"fa":string}],"persian_warning":string}],"common_mistakes":[{"wrong":string,"right":string,"why_fa":string}],"when_to_use":[{"situation_fa":string,"example_en":string}],"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}],"fill_blanks":[{"sentence":string,"answer":string,"hint_fa":string}],"correction":[{"wrong":string,"right":string,"why_fa":string}],"speaking_practice":[{"en":string,"fa":string}],"cheat_sheet_fa":string,"extra_tips_fa":[string]}\nRules: 8-12 rules. 25 quiz. 15 fill-blanks. 10 correction. 5 speaking. Everything in Persian where needed. Return ONLY JSON.';

function openGrammarTopic(id){
  var gt = findGrammarTopic(id);
  if(!gt){toast('موضوع پیدا نشد');return}
  gram.topic = gt.topic; gram.level = gt.level.level;
  gram.step = 'learn';
  gram.err = null;
  if(grammarCache[id]){
    gram.lesson = grammarCache[id];
    gram.loading = false;
    go('gramtopic');
  } else {
    gram.lesson = null;
    gram.loading = true;
    go('gramtopic');
    genGrammarTopic(id, gt);
  }
}
function genGrammarTopic(id, gt){
  var msg = 'Topic: '+gt.topic.title+' ('+gt.topic.titleFa+')\nLevel: '+gt.level.level+'\nWhy hard: '+gt.topic.why+'\n\nCreate the FULL lesson now.';
  callAI(GRAMMAR_SYS, [{role:'user',content:msg}], 8000)
    .then(function(raw){
      var j = parseJSON(raw);
      grammarCache[id] = j;
      store.set('zy_grammar', grammarCache);
      schedulePushToCloud();
      if(gram.topic && gram.topic.id===id){
        gram.lesson = j;
        gram.loading = false;
        render();
      }
    })
    .catch(function(e){
      if(gram.topic && gram.topic.id===id){
        gram.err = errText(e);
        gram.loading = false;
        render();
      }
    });
}
function renderGrammarTopic(){
  var t = gram.topic;
  if(!t){go('grammar');return}
  var h = '<button type="button" class="link" id="gback">← بازگشت</button>';
  if(gram.loading || (!gram.lesson && !gram.err)){
    h += '<div class="card" style="margin-top:10px"><b>در حال ساخت درس گرامر…</b><p class="sub">ممکنه ۲۰-۴۰ ثانیه طول بکشه.</p><div class="skel"></div><div class="skel" style="width:80%"></div><div class="skel" style="width:60%"></div><div class="skel" style="width:70%"></div></div>';
    $('#main').innerHTML = h;
    var b = $('#gback'); if(b) b.onclick = function(){go('grammar')};
    return;
  }
  if(gram.err){
    h += '<div class="card" style="margin-top:10px"><p>'+esc(gram.err)+'</p><button type="button" class="btn gram" id="gretry">تلاش دوباره</button></div>';
    $('#main').innerHTML = h;
    var b2 = $('#gback'); if(b2) b2.onclick = function(){go('grammar')};
    var r = $('#gretry'); if(r) r.onclick = function(){gram.err=null;gram.loading=true;render();genGrammarTopic(t.id,{topic:t,level:{level:gram.level}})};
    return;
  }
  var L = gram.lesson;
  h += '<div class="g-hero"><h1 dir="ltr">'+esc(L.title||t.title)+'</h1><p>'+esc(L.titleFa||t.titleFa)+' — سطح '+gram.level+'</p><div class="g-meta"><span>📖 مطالعه: '+fa(L.duration_read_min||40)+' دق</span><span>✏️ تمرین: '+fa(L.duration_practice_min||90)+' دق</span><span>📚 '+fa((L.rules||[]).length)+' قاعده</span><span>❓ '+fa((L.quiz||[]).length)+' تست</span></div></div>';
  h += '<div class="g-step">';
  [['learn','📖 آموزش'],['mistakes','⚠️ اشتباهات'],['quiz','❓ تست'],['fill','✏️ جای خالی'],['correction','🔧 اصلاح'],['speaking','🎤 گفتار'],['cheat','📋 خلاصه']].forEach(function(x){
    h += '<button type="button" data-gstep="'+x[0]+'" aria-current="'+(gram.step===x[0])+'">'+x[1]+'</button>';
  });
  h += '</div>';
  if(gram.step==='learn'){
    h += '<div class="card"><h2>مقدمه</h2><p class="pre" style="line-height:1.9">'+esc(L.intro_fa||'')+'</p></div>';
    h += '<h2 style="margin-top:20px">📐 قواعد</h2>';
    (L.rules||[]).forEach(function(r,i){
      h += '<div class="g-rule"><span class="gr-num">قاعده '+(i+1)+'</span>';
      h += '<div class="gr-t" dir="ltr">'+esc(r.title)+'</div>';
      h += '<div class="gr-explain">'+esc(r.explain_fa||'')+'</div>';
      if(r.structure) h += '<div class="gr-struct">'+esc(r.structure)+'</div>';
      if(r.examples && r.examples.length){
        h += '<div class="gr-ex">';
        r.examples.forEach(function(ex){
          h += '<div class="ex-row"><button type="button" class="mini" data-say="'+esc(ex.en)+'">'+ic('vol')+'</button><div style="flex:1"><div class="ex-en">'+esc(ex.en)+'</div><div class="ex-fa">'+esc(ex.fa)+'</div></div></div>';
        });
        h += '</div>';
      }
      if(r.persian_warning) h += '<div class="gr-warn"><b>⚠️ فارسی‌زبان:</b> '+esc(r.persian_warning)+'</div>';
      h += '</div>';
    });
    if(L.when_to_use && L.when_to_use.length){
      h += '<div class="card" style="margin-top:16px"><h2>🎯 کِی استفاده کنیم؟</h2>';
      L.when_to_use.forEach(function(w){
        h += '<div style="padding:10px 0;border-bottom:1px dashed var(--line)"><div>'+esc(w.situation_fa)+'</div><div dir="ltr" style="font-family:Lexend;color:var(--gram);margin-top:4px">'+esc(w.example_en)+'</div></div>';
      });
      h += '</div>';
    }
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn gram" data-gnext="mistakes">مرحله بعد: اشتباهات →</button></div>';
  }
  else if(gram.step==='mistakes'){
    h += '<div class="card"><h2>⚠️ اشتباهات رایج</h2>';
    (L.common_mistakes||[]).forEach(function(m){
      h += '<div class="g-mist"><div class="gm-row"><s>'+esc(m.wrong)+'</s> → <b>'+esc(m.right)+'</b></div><div class="gm-why">'+esc(m.why_fa)+'</div></div>';
    });
    h += '</div>';
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="learn">← قبلی</button><button type="button" class="btn gram" data-gnext="quiz">مرحله بعد: تست →</button></div>';
  }
  else if(gram.step==='quiz'){
    h += '<div class="card"><h2>❓ تست ('+fa((L.quiz||[]).length)+')</h2><div id="gquiz">'+quizHTML(L.quiz||[])+'</div></div>';
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="mistakes">← قبلی</button><button type="button" class="btn gram" data-gnext="fill">مرحله بعد: جای خالی →</button></div>';
  }
  else if(gram.step==='fill'){
    h += '<div class="card"><h2>✏️ جای خالی ('+fa((L.fill_blanks||[]).length)+')</h2><div id="gfill"></div></div>';
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="quiz">← قبلی</button><button type="button" class="btn gram" data-gnext="correction">مرحله بعد: اصلاح →</button></div>';
  }
  else if(gram.step==='correction'){
    h += '<div class="card"><h2>🔧 اصلاح جمله ('+fa((L.correction||[]).length)+')</h2><div id="gcorr"></div></div>';
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="fill">← قبلی</button><button type="button" class="btn gram" data-gnext="speaking">مرحله بعد: گفتار →</button></div>';
  }
  else if(gram.step==='speaking'){
    h += '<div class="card"><h2>🎤 تمرین گفتاری</h2>';
    (L.speaking_practice||[]).forEach(function(s){
      h += '<div style="padding:12px 0;border-bottom:1px dashed var(--line)"><div style="display:flex;gap:10px;align-items:center"><button type="button" class="mini" data-say="'+esc(s.en)+'">'+ic('vol')+'</button><div style="flex:1"><div dir="ltr" style="font-family:Lexend;font-size:1rem">'+esc(s.en)+'</div><div class="sub" style="font-size:.82rem">'+esc(s.fa)+'</div></div></div></div>';
    });
    h += '</div>';
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="correction">← قبلی</button><button type="button" class="btn gram" data-gnext="cheat">پایان: خلاصه →</button></div>';
  }
  else if(gram.step==='cheat'){
    h += '<div class="card"><h2>📋 خلاصه‌ی نهایی</h2><div class="g-cheat">'+esc(L.cheat_sheet_fa||'')+'</div></div>';
    if(L.extra_tips_fa && L.extra_tips_fa.length){
      h += '<div class="card" style="margin-top:14px"><h2>💡 نکات اضافه</h2>';
      L.extra_tips_fa.forEach(function(tp){h += '<div class="g-tip">'+esc(tp)+'</div>'});
      h += '</div>';
    }
    var done = prog.grammar && prog.grammar[t.id];
    if(!done){
      if(!prog.grammar) prog.grammar={};
      prog.grammar[t.id] = Date.now();
      award(15);
      saveProg();
      h += '<div class="card" style="margin-top:14px;text-align:center;background:var(--ok-soft);border-color:var(--ok)"><b>🎉 تبریک! تموم شد.</b><p class="sub" style="margin-top:6px">+۱۵ امتیاز</p></div>';
    }
    h += '<div class="row between" style="margin-top:18px"><button type="button" class="btn ghost" data-gnext="speaking">← قبلی</button><button type="button" class="btn gram" id="gback3">بازگشت به گرامر</button></div>';
  }
  $('#main').innerHTML = h;

  var gb = $('#gback'); if(gb) gb.onclick = function(){go('grammar')};
  var gb3 = $('#gback3'); if(gb3) gb3.onclick = function(){go('grammar')};
  $$('[data-gstep]').forEach(function(b){b.onclick = function(){gram.step = b.getAttribute('data-gstep'); render(); window.scrollTo(0,0)}});
  $$('[data-gnext]').forEach(function(b){b.onclick = function(){gram.step = b.getAttribute('data-gnext'); render(); window.scrollTo(0,0)}});

  if(gram.step==='quiz'){
    var qz = $('#gquiz');
    if(qz) bindQuiz(qz, L.quiz||[], function(s,n){award(s*2); $('.qres',qz).innerHTML='نتیجه: '+fa(s)+' از '+fa(n)});
  }
  if(gram.step==='fill'){
    var fc = $('#gfill');
    if(fc && L.fill_blanks){
      L.fill_blanks.forEach(function(f,idx){
        var div = document.createElement('div');
        div.style.cssText = 'padding:12px 0;border-bottom:1px dashed var(--line)';
        div.innerHTML = '<div style="direction:ltr;text-align:left;font-family:Lexend;margin-bottom:8px;font-size:.95rem">'+(idx+1)+'. '+esc(f.sentence)+'</div><div style="display:flex;gap:8px"><input type="text" dir="ltr" style="flex:1" placeholder="جواب..." data-fidx="'+idx+'"><button type="button" class="btn small gram" data-check="'+idx+'">بررسی</button></div><div class="sub" style="font-size:.82rem;margin-top:6px">💡 '+esc(f.hint_fa||'')+'</div><div class="fg-res" style="margin-top:6px;font-weight:600;min-height:1.2em"></div>';
        fc.appendChild(div);
      });
      $$('[data-check]', fc).forEach(function(b){
        b.onclick = function(){
          var idx = +b.getAttribute('data-check');
          var input = fc.querySelector('input[data-fidx="'+idx+'"]');
          var res = input.parentNode.parentNode.querySelector('.fg-res');
          var correct = norm(L.fill_blanks[idx].answer);
          var given = norm(input.value);
          if(given === correct){res.style.color='var(--ok)';res.textContent='✓ درست!';award(2)}
          else{res.style.color='var(--bad)';res.innerHTML='✗ درست: <b dir="ltr">'+esc(L.fill_blanks[idx].answer)+'</b>'}
        };
      });
    }
  }
  if(gram.step==='correction'){
    var cc = $('#gcorr');
    if(cc && L.correction){
      L.correction.forEach(function(f,idx){
        var div = document.createElement('div');
        div.style.cssText = 'padding:12px 0;border-bottom:1px dashed var(--line)';
        div.innerHTML = '<div style="direction:ltr;text-align:left;font-family:Lexend;margin-bottom:8px;color:var(--bad)">✗ '+esc(f.wrong)+'</div><div style="display:flex;gap:8px"><input type="text" dir="ltr" style="flex:1" placeholder="جمله درست..." data-cidx="'+idx+'"><button type="button" class="btn small gram" data-corr="'+idx+'">بررسی</button></div><div class="cg-res" style="margin-top:6px;font-weight:600;min-height:1.2em"></div><div class="sub" style="font-size:.82rem;margin-top:4px">💡 '+esc(f.why_fa||'')+'</div>';
        cc.appendChild(div);
      });
      $$('[data-corr]', cc).forEach(function(b){
        b.onclick = function(){
          var idx = +b.getAttribute('data-corr');
          var input = cc.querySelector('input[data-cidx="'+idx+'"]');
          var res = input.parentNode.parentNode.querySelector('.cg-res');
          var correct = norm(L.correction[idx].right);
          var given = norm(input.value);
          if(given === correct || sim(given, correct) >= 0.8){res.style.color='var(--ok)';res.innerHTML='✓ درست! <span dir="ltr" style="color:var(--muted);font-size:.85rem">'+esc(L.correction[idx].right)+'</span>';award(2)}
          else{res.style.color='var(--bad)';res.innerHTML='✗ درست: <b dir="ltr">'+esc(L.correction[idx].right)+'</b>'}
        };
      });
    }
  }
}

// ============ FREE PRACTICE ============
function renderFree(){
  var h = '';
  if(!free.mode){
    h += '<h1>🎲 تمرین آزاد</h1><p class="sub">ایلدار یا کاربر سؤال می‌پرسه، تو جواب می‌دی.</p>';
    h += '<div class="mode-grid">';
    h += '<button type="button" class="mode-card" data-freemode="ildar"><div class="mi">'+ic('briefcase')+'</div><div class="mt">گفتگو با ایلدار</div><div class="md">ایلدار سؤال می‌پرسه</div></button>';
    h += '<button type="button" class="mode-card" data-freemode="user"><div class="mi">'+ic('users')+'</div><div class="mt">گفتگو با کاربر</div><div class="md">کاربر مشکل داره</div></button>';
    h += '<button type="button" class="mode-card" data-freemode="persian"><div class="mi">🇮🇷</div><div class="mt">سناریوی فارسی</div><div class="md">سناریو فارسی، جواب انگلیسی</div></button>';
    h += '</div>';
    $('#main').innerHTML = h;
    $$('[data-freemode]').forEach(function(b){b.onclick=function(){startFree(b.getAttribute('data-freemode'))}});
    return;
  }
  var sit = free.situation;
  if(!sit){toast('سناریو نیست');free.mode=null;render();return}
  h += '<button type="button" class="link" id="fexit">← بازگشت</button>';
  h += '<div class="situation-card"><div class="sc-cat">📌 '+esc(sit.cat)+' · سطح: '+esc(sit.level)+'</div><div class="sc-fa">'+esc(sit.fa)+'</div>'+(free.showHint?'<div class="sc-hint">💡 '+esc(sit.hint)+'</div>':'')+'</div>';
  h += '<div class="row" style="margin-bottom:12px"><button type="button" class="btn ghost small" id="fhint">'+(free.showHint?'پنهان':'💡 راهنما')+'</button><button type="button" class="btn ghost small" id="fsample">📝 نمونه</button><button type="button" class="btn ghost small" id="fnext">🎲 جدید</button></div>';
  h += '<div class="chat" id="fchat">'+free.turns.map(freeBubble).join('')+'</div>';
  h += '<div class="composer"><div class="hint">به انگلیسی جواب بده.</div><div class="cbox"><button type="button" class="mic free-mic '+(listening?'rec':'')+'" id="fmic">'+ic('mic')+'</button><input type="text" id="fmsg" dir="ltr" placeholder="Type reply…" autocomplete="off"><button type="button" class="send" id="fsend">'+ic('send')+'</button></div></div>';
  $('#main').innerHTML = h;
  $('#fexit').onclick = function(){free.mode=null;free.turns=[];free.situation=null;render()};
  $('#fhint').onclick = function(){free.showHint=!free.showHint;render()};
  $('#fsample').onclick = function(){if(!sit.sample){toast('نمونه نیست');return}free.turns.push({role:'sample',text:sit.sample});drawFree()};
  $('#fnext').onclick = function(){startFree(free.mode)};
  $('#fmic').onclick = toggleFreeMic;
  $('#fsend').onclick = function(){sendFree($('#fmsg').value,null,false)};
  $('#fmsg').onkeydown = function(e){if(e.key==='Enter'){e.preventDefault();sendFree($('#fmsg').value,null,false)}};
  drawFree();
}
function startFree(mode){
  var sit = FREE_SITUATIONS[Math.floor(Math.random()*FREE_SITUATIONS.length)];
  if(mode==='ildar'){
    var ildarCats = ['موجودی','گزارش','پیگیری','تأخیر','تأیید','پیدا کردن','جلسه','اولویت','پیشنهاد','نظر','فنی','منابع','زمان‌بندی','انبار','مرخصی','همکاری'];
    var pool = FREE_SITUATIONS.filter(function(s){return ildarCats.indexOf(s.cat)>=0});
    sit = pool[Math.floor(Math.random()*pool.length)];
  }
  if(mode==='user'){
    var userCats = ['پشتیبانی','شبکه','چاپ','امنیت'];
    var pool2 = FREE_SITUATIONS.filter(function(s){return userCats.indexOf(s.cat)>=0});
    sit = pool2[Math.floor(Math.random()*pool2.length)];
  }
  free.mode = mode; free.situation = sit; free.turns = []; free.busy=false; free.count=0; free.showHint=false;
  if(mode==='persian'){
    free.turns.push({role:'situation',text:sit.fa});
  } else {
    free.turns.push({role:'ai',text:sit.fa});
  }
  go('free');
  if(settings.autoplay && sit.sample) speak(sit.sample);
}
function freeBubble(t){
  if(t.role==='ai') return '<div class="b free-ai"><div class="bt">'+esc(t.text)+'</div></div>';
  if(t.role==='situation') return '<div class="b free-ai"><div style="font-size:.78rem;color:#0e7490;font-weight:700;margin-bottom:4px">📌 سناریو</div><div class="bt">'+esc(t.text)+'</div></div>';
  if(t.role==='sample') return '<div class="b ai" style="background:var(--accent-soft);border-color:var(--accent)"><div style="font-size:.75rem;color:#8a6d00;font-weight:700;margin-bottom:4px">📝 نمونه</div><div class="bt" dir="ltr">'+esc(t.text)+'</div><button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  return '<div class="b free-me"><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>'+(t.err?'<div class="an">ارسال نشد.</div>':freeAnalysis(t));
}
function freeAnalysis(t){
  if(t.pending) return '<div class="an"><span class="dots"><i></i><i></i><i></i></span> در حال تحلیل…</div>';
  var a = t.an; if(!a) return '';
  var ms = a.mistakes||[];
  var h = '<div class="an"><div class="an-top">'+(a.is_correct&&!ms.length?'<span class="pill ok">عالی</span>':'<span class="pill warn">بهتر می‌شه</span>');
  if(a.score!=null) h += '<span class="sc">امتیاز <b>'+a.score+'</b>/10</span>';
  h += '</div>';
  if(a.corrected && norm(a.corrected)!==norm(t.text)) h += '<div class="fix"><span>✓</span><span dir="ltr">'+esc(a.corrected)+'</span></div>';
  ms.forEach(function(m){h += '<div class="mk"><div dir="ltr"><s>'+esc(m.original)+'</s> → <b>'+esc(m.fix)+'</b></div><div>'+esc(m.explain_fa||'')+'</div></div>'});
  if(a.tip_fa) h += '<div class="tip">💡 '+esc(a.tip_fa)+'</div>';
  return h+'</div>';
}
function drawFree(){
  var c = $('#fchat'); if(!c || view!=='free') return;
  c.innerHTML = free.turns.map(freeBubble).join('');
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}
function sendFree(text, conf, voice){
  text = (text||'').trim();
  if(!text || free.busy) return;
  var m = $('#fmsg'); if(m) m.value='';
  var ut = {role:'me', text:text, pending:true};
  free.turns.push(ut); free.count++;
  free.busy = true; drawFree();
  var sit = free.situation;
  var sys = 'You are helping Armin (Iranian IT support) practice English. Situation: '+sit.fa+'. He must reply in English. Analyse his reply in Persian. Return ONLY valid JSON: {"score":0-10,"is_correct":true,"corrected":"natural version","mistakes":[{"original":"...","fix":"...","explain_fa":"..."}],"tip_fa":"نکته","next":"a follow-up line the other person would say"}';
  callAI(sys, [{role:'user',content:'Armin replied: "'+text+'"'}], 800)
    .then(function(raw){
      var j; try{j=parseJSON(raw)}catch(e){j={is_correct:true,mistakes:[],score:7}}
      ut.pending = false; ut.an = j;
      (j.mistakes||[]).forEach(function(mk){
        if(!mk.original || !mk.fix) return;
        var exists = mistakes.some(function(x){return x.original===mk.original && x.fix===mk.fix});
        if(exists) return;
        mistakes.unshift({original:mk.original, fix:mk.fix, explain:mk.explain_fa||'', type:'grammar', level:'free', topic:sit.cat, date:new Date().toLocaleDateString('fa-IR')});
      });
      mistakes = mistakes.slice(0,300);
      store.set('zy_mistakes', mistakes);
      if(j.next) free.turns.push({role:'ai',text:j.next});
      free.busy = false;
      award(j.is_correct && !(j.mistakes||[]).length ? 4 : 2);
      drawFree();
      if(settings.autoplay && j.next) speak(j.next);
    })
    .catch(function(e){free.busy = false; ut.pending = false; ut.err = true; drawFree(); toast(errText(e), 6000)});
}
function toggleFreeMic(){
  if(view!=='free' || free.busy) return;
  var b = $('#fmic');
  if(listening){rec && rec.stop(); return}
  rec = listen({interim:function(t){var m=$('#fmsg');if(m)m.value=t},done:function(t,c){listening=false;var bb=$('#fmic');if(bb)bb.classList.remove('rec');if(t)sendFree(t,c,true)}});
  if(rec){listening = true; b && b.classList.add('rec')}
}

// ============ PATH ============
function unitId(l,i){return l+'-'+i}
function renderPath(){
  var L = null;
  for(var i=0;i<LEVELS.length;i++) if(LEVELS[i].id===pathLevel){L=LEVELS[i];break}
  if(!L){pathLevel='A1';L=LEVELS[0]}
  var h = '';
  if(!settings.key) h += '<div class="banner"><div><b>برای درس‌های کامل، کلید API لازم است.</b></div><button type="button" class="btn brand" id="gset">تنظیمات</button></div>';
  h += '<div class="card" style="margin-bottom:14px;background:var(--prog-soft);border-color:var(--prog)">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">';
  h += '<div><b>🎯 کجا مشکل داری؟</b><div class="sub" style="font-size:.85rem">درس اختصاصی</div></div>';
  h += '<button type="button" class="btn prog small" id="openCustom">'+ic('light')+' بساز</button>';
  h += '</div></div>';
  h += '<div id="customBox"></div>';
  if(customLessons.length){
    h += '<h3 style="margin-top:18px">🎯 درس‌های اختصاصی ('+fa(customLessons.length)+')</h3>';
    h += '<div style="display:grid;gap:10px;margin-top:8px;margin-bottom:18px">';
    customLessons.forEach(function(cl){
      h += '<div class="card" style="display:flex;gap:12px;align-items:center;padding:14px">';
      h += '<button type="button" class="task" data-cust="'+cl.id+'" style="flex:1;padding:0;border:0;background:transparent;display:flex;gap:12px;align-items:center;text-align:start;cursor:pointer">';
      h += '<span style="display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:var(--prog-soft);color:var(--prog);flex:none">🎯</span>';
      h += '<span style="flex:1"><div style="font-weight:600" dir="ltr">'+esc(cl.title||'')+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(cl.customTopic||cl.topic||'')+' · '+esc(cl.level||'')+'</div></span>';
      h += '</button>';
      h += '<button type="button" class="mini" data-del-cust="'+cl.id+'" style="background:var(--bad-soft);color:var(--bad)">✕</button>';
      h += '</div>';
    });
    h += '</div>';
  }
  h += '<h1>همه‌ی درس‌ها</h1>';
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
  var oc = $('#openCustom'); if(oc) oc.onclick = function(){
    $('#customBox').innerHTML = renderCustomLessonForm();
    $('#cancelCust').onclick = function(){$('#customBox').innerHTML=''};
    $('#buildCust').onclick = function(){
      var topic = $('#custTopic').value.trim();
      if(!topic){toast('موضوع رو وارد کن');return}
      var count = parseInt($('#custCount').value) || 10;
      var level = $('#custLevel').value;
      var note = $('#custNote').value.trim();
      buildCustomLesson(topic, count, level, note);
    };
  };
  $$('.lv').forEach(function(b){b.onclick=function(){pathLevel=b.getAttribute('data-lv');renderPath()}});
  $$('.unit').forEach(function(b){b.onclick=function(){openLesson(pathLevel, +b.getAttribute('data-u'))}});
  $$('[data-cust]').forEach(function(b){b.onclick=function(){openCustomLesson(b.getAttribute('data-cust'))}});
  $$('[data-del-cust]').forEach(function(b){b.onclick = function(ev){ev.stopPropagation(); deleteCustomLesson(b.getAttribute('data-del-cust'))}});
  var g = $('#gset'); if(g) g.onclick = function(){go('settings')};
}
function renderCustomLessonForm(){
  var h = '<div class="card stack" style="margin-top:14px">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center"><b>🎯 درس اختصاصی</b><button type="button" class="link" id="cancelCust">✕</button></div>';
  h += '<div class="field"><label>موضوع</label><input type="text" id="custTopic" placeholder="مثلاً: Present Perfect" dir="ltr"></div>';
  h += '<div class="row"><div class="field" style="flex:1"><label>تعداد</label><select id="custCount"><option>8</option><option selected>10</option><option>15</option><option>20</option></select></div>';
  h += '<div class="field" style="flex:1"><label>سطح</label><select id="custLevel"><option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>C1</option></select></div></div>';
  h += '<div class="field"><label>توضیح (اختیاری)</label><input type="text" id="custNote" dir="ltr"></div>';
  h += '<button type="button" class="btn prog" id="buildCust">ساخت</button></div>';
  return h;
}
function buildCustomLesson(topic, count, level, extraNote){
  var box = $('#customBox');
  box.innerHTML = '<div class="card"><b>در حال ساخت…</b><div class="skel"></div><div class="skel" style="width:80%"></div></div>';
  var sys = 'You are an EFL curriculum designer. Create FOCUSED lesson. Return ONLY valid JSON: {"id":string,"title":string,"topic":string,"intro_fa":string,"vocab":[{"en":string,"say":string,"fa":string,"ex":string,"ex_fa":string}],"grammar":{"title":string,"explain_fa":string,"rules":[string],"examples":[{"en":string,"fa":string}]},"dialogue":[{"speaker":"A"|"B","en":string,"fa":string}],"phrases":[{"en":string,"fa":string}],"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}],"speaking_goal":string,"practice_tips_fa":[string]}\nRules: 10 vocab. LONG grammar. Exactly '+count+' quiz. All Persian explanations.';
  callAI(sys, [{role:'user',content:'Topic: '+topic+'\nLevel: '+level+(extraNote?'\nNote: '+extraNote:'')}], 5000)
    .then(function(raw){
      var j = parseJSON(raw);
      j.id = 'cust-'+Date.now();
      j.customTopic = topic; j.level = level; j.createdAt = Date.now();
      customLessons.unshift(j);
      customLessons = customLessons.slice(0, 30);
      store.set('zy_custom_lessons', customLessons);
      schedulePushToCloud();
      toast('ساخته شد ✅');
      renderPath();
    })
    .catch(function(e){box.innerHTML = '<div class="card"><p style="color:var(--bad)">'+esc(errText(e))+'</p></div>'});
}
function deleteCustomLesson(id){
  if(!confirm('پاک بشه؟')) return;
  customLessons = customLessons.filter(function(l){return l.id!==id});
  store.set('zy_custom_lessons', customLessons);
  schedulePushToCloud();
  renderPath();
}
function openCustomLesson(id){
  var cl = null;
  for(var i=0;i<customLessons.length;i++) if(customLessons[i].id===id){cl=customLessons[i];break}
  if(!cl){toast('پیدا نشد');return}
  lessonCtx = {id:cl.id,level:cl.level||'B1',idx:0,unit:[cl.title||'Custom',cl.topic||'',''],lesson:cl,step:'learn',loading:false,err:null,quizDone:false,isCustom:true};
  go('lesson');
}

// ============ LESSON ============
var LESSON_SYS='You are an EFL curriculum designer for Persian speakers. Create ONE lesson as strict JSON.\nSchema: {"title":string,"intro_fa":string,"vocab":[{"en":string,"say":string,"fa":string,"ex":string,"ex_fa":string}],"grammar":{"title":string,"explain_fa":string,"rules":[string],"examples":[{"en":string,"fa":string}]},"dialogue":[{"speaker":"A"|"B","en":string,"fa":string}],"phrases":[{"en":string,"fa":string}],"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}],"speaking_goal":string}\nRules: 10 vocab, "say" for A1-A2, Persian grammar, 6-8 dialogue, 5 phrases, 6 quiz, valid JSON.';
function openLesson(level,idx){
  var L = null;
  for(var i=0;i<LEVELS.length;i++) if(LEVELS[i].id===level){L=LEVELS[i];break}
  if(!L) return;
  var unit = L.units[idx]; if(!unit) return;
  var id = unitId(level,idx);
  var cached = lessonCache[id];
  var hasLesson = (id==='A1-0') || !!cached;
  lessonCtx = {id:id,level:level,idx:idx,unit:unit,lesson:(id==='A1-0'?DEMO:(cached||null)),step:'learn',loading:!hasLesson,err:null,quizDone:false};
  go('lesson');
  if(!hasLesson) genLesson();
}
function genLesson(){
  var C = lessonCtx; if(!C) return;
  C.loading = true; C.err = null; render();
  callAI(LESSON_SYS, [{role:'user',content:'CEFR: '+C.level+'\nUnit: "'+C.unit[0]+'" ('+C.unit[1]+')\nFocus: '+C.unit[2]}], 5000)
    .then(function(raw){
      var j = parseJSON(raw);
      if(!j.vocab || !j.quiz) throw new Error('incomplete');
      lessonCache[C.id] = j; store.set('zy_lessons', lessonCache); C.lesson = j;
      schedulePushToCloud();
      C.loading = false;
      if(view==='lesson' && lessonCtx===C) render();
    })
    .catch(function(e){C.err = errText(e);C.loading = false;if(view==='lesson' && lessonCtx===C) render()});
}
function renderLesson(){
  var C = lessonCtx; if(!C){go('path');return}
  var h = '<button type="button" class="link" id="back">← بازگشت</button><div class="lh">';
  if(C.isCustom) h += '<span class="lvl" style="background:var(--prog);color:#fff">🎯 اختصاصی</span>';
  else h += '<span class="lvl">'+C.level+'</span>';
  h += '<h1 class="en" dir="ltr">'+esc(C.unit[0])+'</h1><p class="sub">'+esc(C.unit[1])+'</p></div>';
  if(C.loading || (!C.lesson && !C.err)) h += '<div class="card"><b>در حال ساخت…</b><div class="skel"></div><div class="skel" style="width:80%"></div></div>';
  else if(C.err) h += '<div class="card"><p>'+esc(C.err)+'</p><button type="button" class="btn brand" id="retry">تلاش دوباره</button></div>';
  else {
    h += '<div class="steps">';
    [['learn','۱. آموزش'],['quiz','۲. آزمون'],['speak','۳. صحبت']].forEach(function(x){
      h += '<button type="button" class="stp" data-s="'+x[0]+'" aria-current="'+(C.step===x[0])+'">'+x[1]+'</button>';
    });
    h += '</div>';
    if(C.step==='learn') h += learnHTML(C.lesson);
    else if(C.step==='quiz') h += '<div class="card"><h2>آزمون</h2><div id="quiz">'+quizHTML(C.lesson.quiz)+'</div></div>';
    else h += '<div class="card stack"><h2>هدف صحبت</h2><p>'+esc(C.lesson.speaking_goal||'')+'</p><button type="button" class="btn brand" id="startTalk">'+ic('mic')+' شروع</button></div>';
  }
  $('#main').innerHTML = h;
  var back = $('#back'); if(back) back.onclick = function(){if(C.isCustom){go('path');return} if(prog.program && prog.program.lastFrom==='program'){prog.program.lastFrom='';saveProg();go('program')}else go('path')};
  var rt = $('#retry'); if(rt) rt.onclick = genLesson;
  $$('.stp').forEach(function(b){b.onclick=function(){C.step=b.getAttribute('data-s');renderLesson();window.scrollTo(0,0)}});
  var nx = $('#nextQuiz'); if(nx) nx.onclick = function(){C.step='quiz';renderLesson();window.scrollTo(0,0)};
  var qz = $('#quiz'); if(qz) bindQuiz(qz, C.lesson.quiz, function(s,n){
    var pct = Math.round(100*s/n);
    if(!C.isCustom){var d = prog.done[C.id] = prog.done[C.id] || {};d.quiz = Math.max(d.quiz||0, pct);}
    award(s*3);
    if(prog.program && prog.program.lastFrom==='program'){if(!prog.program) prog.program={};prog.program[taskKey('les', C.level+':'+C.idx)] = Date.now();saveProg();}
    $('.qres',qz).innerHTML = 'نتیجه: '+fa(s)+' از '+fa(n)+' <button type="button" class="btn brand" id="toSpeak" style="margin-top:10px">برو به صحبت</button>';
    $('#toSpeak').onclick = function(){C.step='speak';renderLesson();window.scrollTo(0,0)};
  });
  var st = $('#startTalk'); if(st) st.onclick = function(){startTalk({level:C.level,topic:C.unit[0],focus:C.unit[2],unitId:C.id})};
}
function learnHTML(L){
  var h = '<div class="stack"><div class="card"><p>'+esc(L.intro_fa)+'</p></div>';
  h += '<div class="card"><h2>لغت‌ها</h2><div class="vgrid">';
  (L.vocab||[]).forEach(function(v){
    h += '<div class="vc"><div class="row between"><span class="w" dir="ltr">'+esc(v.en)+'</span><span class="row"><button type="button" class="mini" data-say="'+esc(v.en)+'">'+ic('vol')+'</button><button type="button" class="mini" data-prac="'+esc(v.en)+'">'+ic('mic')+'</button></span></div>'+(v.say?'<div class="say">'+esc(v.say)+'</div>':'')+'<div>'+esc(v.fa)+'</div><div class="ex" dir="ltr">'+esc(v.ex)+'</div><div class="exfa">'+esc(v.ex_fa)+'</div><div class="pr"></div></div>';
  });
  h += '</div></div>';
  var g = L.grammar||{};
  h += '<div class="card"><h2>گرامر</h2><p class="pre">'+esc(g.explain_fa)+'</p></div>';
  h += '<div class="card"><h2>گفتگو</h2><div class="dl">';
  (L.dialogue||[]).forEach(function(l){
    h += '<div class="dline '+(l.speaker==='B'?'b':'')+'"><button type="button" class="mini" data-say="'+esc(l.en)+'">'+ic('vol')+'</button><div class="bub"><div dir="ltr">'+esc(l.en)+'</div><div class="fa">'+esc(l.fa)+'</div></div></div>';
  });
  h += '</div></div>';
  h += '<div class="row between"><button type="button" class="btn brand" id="nextQuiz">برو به آزمون</button></div></div>';
  return h;
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
        $('.why',qe).textContent = (ok?'درست! ':'نه. ')+(q.why_fa||'');
        if(++answered === quiz.length) done(score, quiz.length);
      };
    });
  });
}

// ============ JOB MODE ============
function jobSystemPrompt(){
  var sc = job.scenario; if(!sc) return '';
  var roleDesc = ({'User':'a non-technical office worker','Manager':'Ildar, a Russian IT manager (English is second language; brief and direct)','Colleague':'a friendly colleague'})[sc.role] || 'a colleague';
  var levelHint = {easy:'VERY simple questions.',medium:'Moderate questions.',hard:'Natural questions.',real:'Fully natural.'}[sc.level] || '';
  return 'Role-play as '+roleDesc+' with Armin (Iranian IT support).\nSCENARIO: '+sc.title+'\nCONTEXT: '+sc.opening+'\nYOUR ROLE: '+sc.role+'\nLEVEL: '+(sc.level||'medium')+' — '+levelHint+'\n\nRules: SHORT lines (1-2 sentences). Analyse Armin\'s LAST message.\nReturn ONLY valid JSON: {"reply":"your line","reply_fa":"ترجمه فارسی","analysis":{"score":0-10,"is_correct":true,"corrected":"natural","mistakes":[{"type":"grammar|vocabulary|register|brevity","original":"...","fix":"...","explain_fa":"..."}],"tip_fa":"...","brevity_note":"too long|too short|good"},"scenario_complete":false}';
}
function renderJob(){
  var el = $('#main');
  if(job.view==='cats'){
    var h = '<h1>حالت شغلی</h1><p class="sub">سناریوهای واقعی کار.</p>';
    h += '<div class="card" style="margin-top:14px;background:var(--job-soft);border-color:var(--job)">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">';
    h += '<div><b>📥 مکالمه رو وارد کن</b><div class="sub" style="font-size:.85rem">سناریو تمرینی می‌سازم</div></div>';
    h += '<button type="button" class="btn job small" id="openImport">'+ic('download')+' ایمپورت</button>';
    h += '</div></div>';
    h += '<div id="importBox"></div>';
    if(importedScenarios.length){
      h += '<h3 style="margin-top:18px">📁 سناریوهای من ('+fa(importedScenarios.length)+')</h3>';
      h += '<div style="display:grid;gap:10px;margin-top:8px">';
      importedScenarios.forEach(function(s){
        var done = prog.done['job-'+s.id];
        h += '<div class="card" style="display:flex;gap:12px;align-items:center;padding:14px">';
        h += '<button type="button" class="task" data-imp="'+s.id+'" style="flex:1;padding:0;border:0;background:transparent;display:flex;gap:12px;align-items:center;text-align:start;cursor:pointer">';
        h += '<span style="display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:var(--job-soft);color:var(--job);flex:none">'+(done?'✓':'▶')+'</span>';
        h += '<span style="flex:1"><div style="font-weight:600">'+esc(s.title||'سناریو')+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(s.desc||'')+'</div></span>';
        h += '</button>';
        h += '<button type="button" class="mini" data-del-imp="'+s.id+'" style="background:var(--bad-soft);color:var(--bad)">✕</button>';
        h += '</div>';
      });
      h += '</div>';
    }
    h += '<h3 style="margin-top:20px">📚 سناریوهای آماده</h3>';
    h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:8px">';
    JOB_CATS.forEach(function(c){
      var cnt = JOB_SCENARIOS.filter(function(s){return s.cat===c.id}).length
          + importedScenarios.filter(function(s){return s.cat===c.id}).length;
      h += '<button type="button" class="card" data-cat="'+c.id+'" style="text-align:start;cursor:pointer;padding:16px"><div style="font-size:1.5rem;margin-bottom:6px">'+ic(c.icon)+'</div><div style="font-weight:700">'+esc(c.name)+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(c.desc)+'</div><div style="font-size:.78rem;color:var(--brand);margin-top:6px">'+fa(cnt)+' سناریو</div></button>';
    });
    h += '</div>';
    h += '<div class="card" style="margin-top:20px;text-align:center"><b>برنامه‌ی ۸ هفته‌ای</b><button type="button" class="btn prog" id="toProg" style="margin-top:8px">'+ic('cal')+' برو</button></div>';
    el.innerHTML = h;
    var oi = $('#openImport'); if(oi) oi.onclick = renderImportForm;
    $$('.card[data-cat]').forEach(function(b){b.onclick=function(){job.view='list';job.catId=b.getAttribute('data-cat');renderJob()}});
    $$('[data-imp]').forEach(function(b){b.onclick=function(){startImportedScenario(b.getAttribute('data-imp'))}});
    $$('[data-del-imp]').forEach(function(b){b.onclick=function(ev){ev.stopPropagation();deleteImportedScenario(b.getAttribute('data-del-imp'))}});
    var tp = $('#toProg'); if(tp) tp.onclick = function(){go('program')};
    return;
  }
  if(job.view==='list'){
    var cat = null;
    for(var i=0;i<JOB_CATS.length;i++) if(JOB_CATS[i].id===job.catId){cat=JOB_CATS[i];break}
    if(!cat){job.view='cats';return renderJob()}
    
    // ← merge سناریوهای آماده + سفارشی
    var list = JOB_SCENARIOS.filter(function(s){return s.cat===job.catId})
             .concat(importedScenarios.filter(function(s){return s.cat===job.catId}));
    
    var h = '<button type="button" class="link" id="jback">← بازگشت</button><h1>'+esc(cat.name)+'</h1>';
    ['easy','medium','hard','real'].forEach(function(lvl){
      var group = list.filter(function(s){return (s.level||'medium')===lvl});
      if(!group.length) return;
      var lbl = {easy:'🟢 ساده',medium:'🟡 متوسط',hard:'🟠 سخت',real:'🔴 واقعی'}[lvl];
      h += '<h3 style="margin-top:16px">'+lbl+'</h3><div style="display:grid;gap:10px;margin-top:8px">';
      group.forEach(function(s){
        var done = prog.done['job-'+s.id];
        // ← تشخیص خودکار: سناریوی سفارشی یا آماده؟
        var isImported = importedScenarios.some(function(x){return x.id===s.id});
        var attr = isImported ? 'data-imp="'+s.id+'"' : 'data-sc="'+s.id+'"';
        var badge = isImported ? ' <span style="font-size:.7rem;color:var(--job);background:var(--job-soft);padding:2px 6px;border-radius:6px">سفارشی</span>' : '';
        h += '<button type="button" class="card" '+attr+' style="text-align:start;cursor:pointer;display:flex;gap:12px;align-items:center;padding:14px"><span style="display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:var(--job-soft);color:var(--job);flex:none">'+(done?'✓':'▶')+'</span><span style="flex:1"><div style="font-weight:600">'+esc(s.title)+badge+'</div><div style="font-size:.82rem;color:var(--muted)">'+esc(s.desc)+'</div></span></button>';
      });
      h += '</div>';
    });
    el.innerHTML = h;
    var jb = $('#jback'); if(jb) jb.onclick = function(){job.view='cats';renderJob()};
    // ← دو تا event listener جدا
    $$('.card[data-sc]').forEach(function(b){b.onclick=function(){startJobScenario(b.getAttribute('data-sc'))}});
    $$('.card[data-imp]').forEach(function(b){b.onclick=function(){startImportedScenario(b.getAttribute('data-imp'))}});
    return;
  }
  renderJobPlay();
}
function renderImportForm(){
  var h = '<div class="card stack" style="margin-top:14px">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>📥 مکالمه رو وارد کن</b><button type="button" class="link" id="cancelImp">✕</button></div>';
  h += '<div class="field"><label>متن</label><textarea id="impText" style="min-height:180px;font-family:inherit;font-size:.9rem" placeholder="Ildar: How many laptops do we have?\nArmin: We have 3." dir="ltr"></textarea></div>';
  h += '<button type="button" class="btn job" id="buildImp">🎯 بساز</button></div>';
  var box = $('#importBox');
  box.innerHTML = h;
  $('#cancelImp').onclick = function(){box.innerHTML=''};
  $('#buildImp').onclick = function(){
    var txt = $('#impText').value.trim();
    if(!txt){toast('متن رو وارد کن');return}
    buildScenarioFromConversation(txt);
  };
}
function buildScenarioFromConversation(rawText){
  var lines = rawText.split('\n').filter(function(l){return l.trim()});
  if(lines.length < 2){toast('حداقل ۲ خط');return}
  var dialogText = lines.join('\n');
  var box = $('#importBox');
  box.innerHTML = '<div class="card"><b>در حال ساخت…</b><div class="skel"></div></div>';
  var sys = 'Extract a workplace scenario. Return ONLY JSON: {"title":"فارسی","desc":"فارسی","role":"User"|"Manager"|"Colleague","roleFa":"کاربر|مدیر|همکار","opening":"first English line","hint":"راهنما","sample":"sample English reply","key_phrases":[{"en":"","fa":""}],"level":"easy|medium|hard|real"}';
  callAI(sys, [{role:'user',content:dialogText}], 1500)
    .then(function(raw){
      var j = parseJSON(raw);
      j.id = 'imp-'+Date.now();
      importedScenarios.unshift(j);
      importedScenarios = importedScenarios.slice(0, 50);
      store.set('zy_imported', importedScenarios);
      schedulePushToCloud();
      toast('ساخته شد ✅');
      renderJob();
    })
    .catch(function(e){box.innerHTML = '<div class="card"><p style="color:var(--bad)">'+esc(errText(e))+'</p></div>'});
}
function deleteImportedScenario(id){
  if(!confirm('پاک بشه؟')) return;
  importedScenarios = importedScenarios.filter(function(s){return s.id!==id});
  store.set('zy_imported', importedScenarios);
  schedulePushToCloud();
  renderJob();
}
function startImportedScenario(id){
  var sc = null;
  for(var i=0;i<importedScenarios.length;i++) if(importedScenarios[i].id===id){sc=importedScenarios[i];break}
  if(!sc) return;
  job.scenario = sc;
  job.turns = [{role:'ai',text:sc.opening||'...',fa:''}];
  if(sc.key_phrases && sc.key_phrases.length) job.turns.push({role:'phrases',phrases:sc.key_phrases});
  job.busy=false;job.count=0;job.done=false;job.view='play';job.showHint=false;
  go('job');
  if(settings.autoplay && sc.opening) speak(sc.opening);
}
function startJobScenario(id){
  var sc = null;
  for(var i=0;i<JOB_SCENARIOS.length;i++) if(JOB_SCENARIOS[i].id===id){sc=JOB_SCENARIOS[i];break}
  if(!sc) return;
  job.scenario = sc;
  job.turns = [{role:'ai',text:sc.opening,fa:''}];
  job.busy=false;job.count=0;job.done=false;job.view='play';job.showHint=false;
  go('job');
  if(settings.autoplay) speak(sc.opening);
}
function renderJobPlay(){
  var sc = job.scenario; if(!sc){job.view='cats';return renderJob()}
  var lvlLabel = {easy:'ساده',medium:'متوسط',hard:'سخت',real:'واقعی'}[sc.level] || '';
  var h = '<button type="button" class="link" id="jback2">← بازگشت</button>';
  h += '<div class="thead"><div>'+(sc.level?'<span class="pill '+sc.level+'">'+lvlLabel+'</span> ':'')+'<span class="pill job">'+esc(sc.roleFa||'')+'</span> <b>'+esc(sc.title)+'</b></div>';
  h += '<div class="row"><button type="button" class="btn ghost small" id="jHint">💡</button>'+(sc.sample?'<button type="button" class="btn ghost small" id="jSample">📝</button>':'')+'<button type="button" class="btn ghost small" id="jRestart">🔄</button></div></div>';
  h += '<div class="hint-box'+(job.showHint?' show':'')+'" id="hintBox"><div class="lbl">💡 راهنما</div>'+esc(sc.hint||'')+'</div>';
  h += '<div class="chat" id="chat">'+job.turns.map(jobBubble).join('')+'</div>';
  h += '<div class="composer"><div class="hint">به انگلیسی جواب بده.</div><div class="cbox"><button type="button" class="mic job-mic '+(listening?'rec':'')+'" id="mic">'+ic('mic')+'</button><input type="text" id="msg" dir="ltr" placeholder="Type reply…" autocomplete="off"><button type="button" class="send" id="sendB">'+ic('send')+'</button></div></div>';
  $('#main').innerHTML = h;
  $('#jback2').onclick = function(){job.view='list';renderJob()};
  $('#jRestart').onclick = function(){startJobScenario(sc.id)};
  $('#jHint').onclick = function(){job.showHint=!job.showHint;var b=$('#hintBox');if(b)b.className='hint-box'+(job.showHint?' show':'')};
  var js = $('#jSample'); if(js) js.onclick = function(){if(!sc.sample)return;job.turns.push({role:'sample',text:sc.sample});drawJobChat();toast('📝 حالا خودت امتحان کن!',4000)};
  $('#mic').onclick = toggleJobMic;
  $('#sendB').onclick = function(){sendJob($('#msg').value,null,false)};
  $('#msg').onkeydown = function(e){if(e.key==='Enter'){e.preventDefault();sendJob($('#msg').value,null,false)}};
  drawJobChat();
}
function jobBubble(t){
  if(t.role==='ai') return '<div class="b job-ai"><div class="bt" dir="ltr">'+esc(t.text)+'</div><button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  if(t.role==='sample') return '<div class="b ai" style="background:var(--accent-soft);border-color:var(--accent)"><div style="font-size:.75rem;color:#8a6d00;font-weight:700;margin-bottom:4px">📝 نمونه</div><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>';
  if(t.role==='phrases'){
    var ph = '<div class="b ai" style="background:var(--brand-soft);border-color:var(--brand);max-width:100%"><div style="font-size:.78rem;color:var(--brand);font-weight:700;margin-bottom:6px">🎁 عبارت‌ها</div>';
    (t.phrases||[]).forEach(function(p){
      ph += '<div style="padding:4px 0;border-bottom:1px dashed var(--line)"><span dir="ltr">'+esc(p.en)+'</span><div class="fa" style="font-size:.78rem">'+esc(p.fa||'')+'</div></div>';
    });
    return ph+'</div>';
  }
  return '<div class="b job-me"><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>'+(t.err?'<div class="an">ارسال نشد.</div>':jobAnalysis(t));
}
function jobAnalysis(t){
  if(t.pending) return '<div class="an"><span class="dots"><i></i><i></i><i></i></span> در حال تحلیل…</div>';
  var a = t.an; if(!a) return '';
  var ms = a.mistakes||[];
  var h = '<div class="an"><div class="an-top">'+(a.is_correct&&!ms.length?'<span class="pill ok">عالی</span>':'<span class="pill warn">بهتر می‌شه</span>');
  if(a.score!=null) h += '<span class="sc">امتیاز <b>'+a.score+'</b>/10</span>';
  h += '</div>';
  if(a.corrected && norm(a.corrected)!==norm(t.text)) h += '<div class="fix"><span>✓</span><span dir="ltr">'+esc(a.corrected)+'</span></div>';
  ms.forEach(function(m){h += '<div class="mk"><div dir="ltr"><s>'+esc(m.original)+'</s> → <b>'+esc(m.fix)+'</b></div><div>'+esc(m.explain_fa||'')+'</div></div>'});
  if(a.tip_fa) h += '<div class="tip">💡 '+esc(a.tip_fa)+'</div>';
  return h+'</div>';
}
function drawJobChat(){
  var c = $('#chat'); if(!c) return;
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
  var history = job.turns.filter(function(t){return (t.role==='me'&&!t.pending)||t.role==='ai'}).map(function(t){return {role:t.role==='ai'?'assistant':'user',content:t.text}});
  history.push({role:'user',content:text});
  callAI('Return ONLY valid JSON.\n\n'+jobSystemPrompt(), history.slice(-12), 1400)
    .then(function(raw){
      var j; try{j = parseJSON(raw)}catch(e){j = {reply:raw, reply_fa:'', analysis:{is_correct:true,mistakes:[]}}}
      ut.pending = false; ut.an = j.analysis || {is_correct:true};
      (j.analysis && j.analysis.mistakes || []).forEach(function(mk){
        if(!mk.original||!mk.fix) return;
        var exists = mistakes.some(function(x){return x.original===mk.original && x.fix===mk.fix});
        if(exists) return;
        mistakes.unshift({original:mk.original, fix:mk.fix, explain:mk.explain_fa||'', type:mk.type||'grammar', level:'job', topic:job.scenario?job.scenario.title:'', date:new Date().toLocaleDateString('fa-IR')});
      });
      mistakes = mistakes.slice(0,300);
      store.set('zy_mistakes', mistakes);
      if(j.reply) job.turns.push({role:'ai',text:j.reply,fa:j.reply_fa||''});
      job.busy = false;
      if(j.scenario_complete){
        job.done = true;
        var d = prog.done['job-'+job.scenario.id] = prog.done['job-'+job.scenario.id] || {};
        d.done = true; d.count = job.count;
        award(job.count*2);
        if(prog.program && prog.program.lastFrom==='program'){if(!prog.program) prog.program={};prog.program[taskKey('sc', job.scenario.id)] = Date.now();}
        saveProg();
      } else award(2);
      drawJobChat();
      if(settings.autoplay && j.reply) speak(j.reply);
    })
    .catch(function(e){job.busy = false;ut.pending = false;ut.err = true;drawJobChat();toast(errText(e), 6000)});
}
function toggleJobMic(){
  if(view!=='job' || job.busy || job.done) return;
  var b = $('#mic');
  if(listening){rec && rec.stop(); return}
  rec = listen({interim:function(t){var m=$('#msg');if(m)m.value=t},done:function(t,c){listening = false;var bb=$('#mic');if(bb)bb.classList.remove('rec');if(t) sendJob(t,c,true)}});
  if(rec){listening = true; b && b.classList.add('rec')}
}

// ============ TALK ============
function talkSystem(){
  var style = ({A1:'Simple words, 1-2 sentences.',A2:'Simple clear, 2-3 sentences.',B1:'Natural, 2-3 sentences.',B2:'Natural with idioms, 2-4 sentences.',C1:'Sophisticated, 2-4 sentences.',C2:'Native-level.'})[talk.level];
  return 'You are "Sam", English tutor for a Persian speaker at CEFR '+talk.level+'.\nTopic: '+talk.topic+'.\nReply: '+style+' React then ask ONE question.\nAnalyse the learner\'s LAST message. Explanations in Persian.\nReturn ONLY valid JSON: {"reply":string,"reply_fa":string,"corrected":string,"is_correct":boolean,"mistakes":[{"type":string,"original":string,"fix":string,"explain_fa":string}],"better_version":string,"scores":{"grammar":0-10,"vocabulary":0-10,"fluency":0-10}|null,"new_words":[{"en":string,"fa":string}],"tip_fa":string}';
}
function startTalk(o){
  talk = {started:true,level:o.level,topic:o.topic,focus:o.focus||'',unitId:o.unitId||null,history:[],turns:[],busy:false,count:0,report:null,reporting:false};
  go('talk');
  aiTurn('[START]', null);
}
function aiTurn(content, ut){
  talk.busy = true; drawChat();
  callAI(talkSystem(), talk.history.concat([{role:'user',content:content}]), 1400)
    .then(function(raw){
      var j; try{j=parseJSON(raw)}catch(e){j={reply:raw,reply_fa:'',mistakes:[],is_correct:true}}
      talk.history.push({role:'user',content:content},{role:'assistant',content:raw});
      talk.history = talk.history.slice(-16);
      if(ut){ut.pending=false;ut.an=j;award(j.is_correct&&!(j.mistakes||[]).length?4:2)}
      talk.turns.push({role:'ai',text:j.reply||'…',fa:j.reply_fa||''});
      talk.busy = false; drawChat();
      if(settings.autoplay) speak(j.reply);
    })
    .catch(function(e){talk.busy=false;if(ut){ut.pending=false;ut.err=true}drawChat();toast(errText(e),6000)});
}
function renderTalk(){
  var el = $('#main');
  if(!talk.started){
    var TOPICS=['Introduce yourself','Ordering at a café','My daily routine','Travel plans','My job','Movies and music','Technology','A job interview','Health','Money and shopping'];
    var h = '<h1>مکالمه آزاد</h1><div class="card stack" style="margin-top:14px"><div class="field"><label>سطح</label><select id="fl">';
    LEVELS.forEach(function(l){h += '<option value="'+l.id+'">'+l.id+' — '+l.name+'</option>'});
    h += '</select></div><div class="field"><label>موضوع</label><div class="chips" id="chips">';
    TOPICS.forEach(function(t,i){h += '<button type="button" class="chip" data-t="'+esc(t)+'" aria-pressed="'+(i===0)+'">'+esc(t)+'</button>'});
    h += '</div><input type="text" id="ft" dir="ltr" placeholder="موضوع دلخواه…"></div><button type="button" class="btn brand" id="go">'+ic('mic')+' شروع</button></div>';
    el.innerHTML = h;
    var topic = TOPICS[0];
    $$('.chip').forEach(function(c){c.onclick=function(){$$('.chip').forEach(function(x){x.setAttribute('aria-pressed','false')});c.setAttribute('aria-pressed','true');topic=c.getAttribute('data-t');$('#ft').value=''}});
    $('#go').onclick = function(){var cust = $('#ft').value.trim();startTalk({level:$('#fl').value,topic:cust||topic})};
    return;
  }
  el.innerHTML = '<div class="thead"><div><b dir="ltr">'+esc(talk.topic)+'</b><div class="sub">'+talk.level+'</div></div><div class="row"><button type="button" class="btn ghost" id="newT">جدید</button><button type="button" class="btn brand" id="endT">گزارش</button></div></div><div class="chat" id="chat"></div><div id="report"></div><div class="composer"><div class="cbox"><button type="button" class="mic '+(listening?'rec':'')+'" id="mic">'+ic('mic')+'</button><input type="text" id="msg" dir="ltr" placeholder="Say…"><button type="button" class="send" id="sendB">'+ic('send')+'</button></div></div>';
  $('#newT').onclick = function(){if('speechSynthesis' in window)speechSynthesis.cancel();rec&&rec.stop();talk.started=false;renderTalk()};
  $('#endT').onclick = endTalk;
  $('#mic').onclick = toggleMic;
  $('#sendB').onclick = function(){send($('#msg').value,null,false)};
  $('#msg').onkeydown = function(e){if(e.key==='Enter'){e.preventDefault();send($('#msg').value,null,false)}};
  drawChat();
}
function bubbleHTML(t){
  if(t.role==='ai') return '<div class="b ai"><div class="bt" dir="ltr">'+esc(t.text)+'</div>'+(settings.showFa&&t.fa?'<div class="fa">'+esc(t.fa)+'</div>':'')+'<button type="button" class="mini" data-say="'+esc(t.text)+'">'+ic('vol')+'</button></div>';
  return '<div class="b me"><div class="bt" dir="ltr">'+esc(t.text)+'</div></div>'+(t.err?'<div class="an">ارسال نشد.</div>':analysisHTML(t));
}
function analysisHTML(t){
  if(t.pending) return '<div class="an"><span class="dots"><i></i><i></i><i></i></span> در حال تحلیل…</div>';
  var a = t.an; if(!a) return '';
  var ms = a.mistakes||[];
  var h = '<div class="an"><div class="an-top">'+(a.is_correct&&!ms.length?'<span class="pill ok">درست</span>':'<span class="pill warn">بهتر می‌شه</span>');
  if(a.scores) h += [['grammar','گرامر'],['vocabulary','لغت'],['fluency','روانی']].map(function(x){return '<span class="sc">'+x[1]+' <b>'+(a.scores[x[0]]==null?'–':a.scores[x[0]])+'</b></span>'}).join('');
  h += '</div>';
  if(a.corrected && norm(a.corrected)!==norm(t.text)) h += '<div class="fix"><span>✓</span><span dir="ltr">'+esc(a.corrected)+'</span></div>';
  ms.forEach(function(m){h += '<div class="mk"><div dir="ltr"><s>'+esc(m.original)+'</s> → <b>'+esc(m.fix)+'</b></div><div>'+esc(m.explain_fa||'')+'</div></div>'});
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
  rec = listen({interim:function(t){var m=$('#msg');if(m)m.value=t},done:function(t,c){listening=false;var bb=$('#mic');if(bb)bb.classList.remove('rec');if(t)send(t,c,true)}});
  if(rec){listening = true; b && b.classList.add('rec')}
}
function endTalk(){
  if(talk.count<1){toast('اول چند جمله');return}
  if(talk.reporting) return;
  if('speechSynthesis' in window) speechSynthesis.cancel();
  rec && rec.stop();
  talk.reporting = true;
  var tr = talk.turns.map(function(t){return t.role==='ai'?'Tutor: '+t.text:'Learner: '+t.text}).join('\n');
  callAI('Write a session report. Return ONLY JSON: {"summary_fa":string,"level_estimate":string,"strengths_fa":[string],"weak_points_fa":[string],"next_steps_fa":[string],"vocab_to_review":[{"en":string,"fa":string}]}.', [{role:'user',content:tr}], 1200)
    .then(function(raw){
      talk.report = parseJSON(raw);
      award(20);
      if(talk.unitId){var d=prog.done[talk.unitId]=prog.done[talk.unitId]||{};d.talk=true;saveProg()}
      talk.reporting = false;
      var r = talk.report, li = function(a){return (a||[]).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')};
      var el = $('#report');
      if(el) el.innerHTML = '<div class="card"><h2>گزارش</h2><p>'+esc(r.summary_fa)+'</p><p><b>سطح:</b> '+esc(r.level_estimate)+'</p><h2>قوت</h2><ul>'+li(r.strengths_fa)+'</ul><h2>ضعف</h2><ul>'+li(r.weak_points_fa)+'</ul><h2>بعدی</h2><ul>'+li(r.next_steps_fa)+'</ul></div>';
    })
    .catch(function(e){talk.reporting=false;toast(errText(e),6000)});
}

// ============ NOTEBOOK ============
function renderNotes(){
  var byType = {};
  mistakes.forEach(function(m){var k=(m.type||'other');byType[k]=(byType[k]||0)+1});
  var patterns = Object.keys(byType).filter(function(k){return byType[k]>=3}).map(function(k){return {type:k,count:byType[k]}}).sort(function(a,b){return b.count-a.count});
  var h = '<h1>دفترچه</h1>';
  if(patterns.length){
    h += '<div class="card" style="margin-bottom:16px"><h2>⚠️ الگوها</h2>';
    patterns.forEach(function(p){
      h += '<div class="pattern-card"><div class="pt">'+esc(p.type)+' <span class="pill warn">'+fa(p.count)+' بار</span></div>';
      var ex = mistakes.filter(function(m){return m.type===p.type}).slice(0,3).map(function(m){return m.original+' → '+m.fix});
      ex.forEach(function(e){h += '<div class="pe">'+esc(e)+'</div>'});
      h += '</div>';
    });
    h += '</div>';
  }
  h += '<div class="row" style="margin-bottom:16px">';
  h += '<button type="button" class="btn brand" id="drill" '+(mistakes.length?'':'disabled')+'>تمرین</button>';
  h += '<button type="button" class="btn prog" id="reportBtn">'+ic('chart')+' گزارش</button>';
  h += '<button type="button" class="btn ghost" id="clr" '+(mistakes.length?'':'disabled')+'>پاک</button>';
  h += '</div><div id="drillBox"></div><div id="reportBox"></div>';
  h += '<div class="nb" style="margin-top:16px">';
  if(mistakes.length){
    mistakes.slice(0,50).forEach(function(m){
      h += '<div class="nbi"><div class="row between"><span dir="ltr"><s style="color:var(--bad)">'+esc(m.original)+'</s> → <b style="color:var(--ok)">'+esc(m.fix)+'</b></span><button type="button" class="mini" data-say="'+esc(m.fix)+'">'+ic('vol')+'</button></div><div>'+esc(m.explain)+'</div><div class="sub" style="font-size:.8rem">'+esc(m.type)+' · '+esc(m.level)+' · '+esc(m.date)+'</div></div>';
    });
  } else h += '<div class="card">هنوز اشتباهی نیست.</div>';
  h += '</div>';
  $('#main').innerHTML = h;
  var c = $('#clr'); if(c) c.onclick = function(){if(confirm('پاک شود؟')){mistakes=[];store.set('zy_mistakes',mistakes);schedulePushToCloud();renderNotes()}};
  var d = $('#drill'); if(d) d.onclick = function(){
    var box = $('#drillBox');
    box.innerHTML = '<div class="card"><b>در حال ساخت…</b><div class="skel"></div></div>';
    var src = mistakes.slice(0,15).map(function(m){return 'wrong: '+m.original+' | right: '+m.fix}).join('\n');
    callAI('Create 6 MC exercises. Return ONLY JSON: {"quiz":[{"q":string,"options":[string,string,string,string],"answer":number,"why_fa":string}]}.', [{role:'user',content:src}], 2500)
      .then(function(raw){
        var j = parseJSON(raw);
        box.innerHTML = '<div class="card"><h2>تمرین شخصی</h2><div id="dq">'+quizHTML(j.quiz)+'</div></div>';
        bindQuiz($('#dq'), j.quiz, function(s,n){award(s*2);$('.qres',$('#dq')).textContent='نتیجه: '+fa(s)+' از '+fa(n)});
      })
      .catch(function(e){box.innerHTML='';toast(errText(e),6000)});
  };
  var rb = $('#reportBtn'); if(rb) rb.onclick = buildReport;
}
function buildReport(){
  var box = $('#reportBox');
  var byType = {};
  mistakes.forEach(function(m){var k=m.type||'other';byType[k]=(byType[k]||0)+1});
  var topTypes = Object.keys(byType).sort(function(a,b){return byType[b]-byType[a]}).slice(0,5).map(function(k){return {type:k,count:byType[k]}});

  // ==== Speed Stats ====
  var speedStats = {sessions:0, totalResponses:0, avgTime:0, bestTime:0, accuracy:0};
  if(prog.speed){
    var ss = prog.speed;
    speedStats.sessions = ss.sessions || 0;
    speedStats.totalResponses = ss.totalResponses || 0;
    speedStats.avgTime = ss.totalResponses ? +(ss.totalTime / ss.totalResponses).toFixed(2) : 0;
    speedStats.bestTime = ss.bestTime === 999 ? 0 : +ss.bestTime.toFixed(2);
    speedStats.accuracy = ss.totalResponses ? Math.round((ss.correctCount||0) * 100 / ss.totalResponses) : 0;
    speedStats.recentTrend = (ss.history || []).slice(0, 10).map(function(h){return h.t;});
  }

  // ==== Daily Checklist History ====
  var dailyHistory = [];
  var today = new Date();
  var completedDays = 0, totalChecklistItems = 0, totalChecklistDone = 0;
  for(var dayOffset = 0; dayOffset < 60; dayOffset++){
    var d = new Date(today.getTime() - dayOffset * 86400000);
    var key = 'zy_dp_' + d.toDateString();
    try {
      var checks = JSON.parse(localStorage.getItem(key) || '{}');
      var itemCount = Object.keys(checks).length;
      if(itemCount > 0){
        var dayStr = d.toISOString().split('T')[0];
        dailyHistory.push({date: dayStr, items: itemCount});
        totalChecklistItems += itemCount;
        if(itemCount >= 4) completedDays++;
      }
    } catch(e){}
  }
  // آخرین ۱۴ روز رو برمی‌گردونیم
  dailyHistory = dailyHistory.slice(0, 14);

  // ==== Week Progress ====
  var weeksDone = 0;
  for(var w=1;w<=8;w++) if(weekProgress(w)===100) weeksDone++;
  var wp = {}; for(var i=1;i<=8;i++) wp['week_'+i]=weekProgress(i);

  // ==== Grammar ====
  var gTopicsDone=0, gTopicsTotal=0;
  GRAMMAR_CURRICULUM.forEach(function(lvl){
    gTopicsTotal+=lvl.topics.length;
    lvl.topics.forEach(function(t){if(prog.grammar&&prog.grammar[t.id])gTopicsDone++})
  });

  // ==== Week-level breakdown ====
  var weekScenariosDone = {};
  var weekLessonsDone = {};
  Object.keys(prog.program||{}).forEach(function(k){
    if(k.indexOf('sc:') === 0){
      var scId = k.slice(3);
      PROGRAM.forEach(function(w){
        (w.scenarios||[]).forEach(function(s){
          if(s.id === scId){ weekScenariosDone[w.week] = (weekScenariosDone[w.week]||0) + 1; }
        });
      });
    }
    if(k.indexOf('les:') === 0){
      var parts = k.slice(4).split(':');
      PROGRAM.forEach(function(w){
        (w.lessons||[]).forEach(function(l){
          if(l.level === parts[0] && String(l.idx) === String(parts[1])){
            weekLessonsDone[w.week] = (weekLessonsDone[w.week]||0) + 1;
          }
        });
      });
    }
  });

  // ==== Build Report ====
  var report = {
    version: 2,
    generated_at: new Date().toISOString(),
    user: 'Armin',

    // کلی
    total_xp: prog.xp,
    streak_days: prog.streak,
    first_seen: prog.last || null,

    // پیشرفت کلی
    current_week: curWeek,
    weeks_completed: weeksDone,
    week_progress: wp,

    // جواب سریع
    speed: {
      sessions_completed: speedStats.sessions,
      total_responses: speedStats.totalResponses,
      avg_response_time_sec: speedStats.avgTime,
      best_response_time_sec: speedStats.bestTime,
      accuracy_pct: speedStats.accuracy,
      recent_times_sec: speedStats.recentTrend
    },

    // پیوستگی
    consistency: {
      days_with_activity_60d: dailyHistory.length,
      days_with_4plus_tasks_60d: completedDays,
      total_checklist_items: totalChecklistItems,
      last_14_days: dailyHistory
    },

    // گرامر
    grammar: {
      topics_done: gTopicsDone,
      topics_total: gTopicsTotal,
      pct: gTopicsTotal ? Math.round(gTopicsDone*100/gTopicsTotal) : 0
    },

    // اشتباهات
    mistakes: {
      total: mistakes.length,
      top_types: topTypes,
      recent_30: mistakes.slice(0,30).map(function(m){
        return {type:m.type, original:m.original, fix:m.fix, level:m.level, topic:m.topic, date:m.date};
      })
    },

    // محتوا
    content: {
      program_scenarios_done_by_week: weekScenariosDone,
      program_lessons_done_by_week: weekLessonsDone,
      lessons_generated: Object.keys(lessonCache).length,
      grammar_lessons_generated: Object.keys(grammarCache).length,
      custom_lessons: customLessons.length,
      imported_scenarios: importedScenarios.length
    },

    // نسخه‌ها
    modules_loaded: {
      speed: !!window.__speedModuleLoaded,
      plan: !!window.__planModuleLoaded,
      office: !!window.__officeModuleLoaded
    }
  };

  var jsonStr = JSON.stringify(report, null, 2);

  // ==== Summary card ====
  var summary = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin-bottom:12px">';
  summary += '<div style="padding:10px;background:var(--brand-soft);border-radius:10px;text-align:center"><b style="display:block;font-size:1.3rem;color:var(--brand)">' + fa(prog.xp) + '</b><small style="color:var(--muted);font-size:.72rem">امتیاز کل</small></div>';
  summary += '<div style="padding:10px;background:var(--prog-soft);border-radius:10px;text-align:center"><b style="display:block;font-size:1.3rem;color:var(--prog)">' + fa(speedStats.totalResponses) + '</b><small style="color:var(--muted);font-size:.72rem">جواب سریع</small></div>';
  summary += '<div style="padding:10px;background:#d8f1e6;border-radius:10px;text-align:center"><b style="display:block;font-size:1.3rem;color:#23906a">' + fa(dailyHistory.length) + '</b><small style="color:var(--muted);font-size:.72rem">روز فعال (۶۰ روز)</small></div>';
  summary += '<div style="padding:10px;background:#fef3c7;border-radius:10px;text-align:center"><b style="display:block;font-size:1.3rem;color:#a86d00">' + fa(gTopicsDone) + '/' + fa(gTopicsTotal) + '</b><small style="color:var(--muted);font-size:.72rem">گرامر</small></div>';
  summary += '</div>';

  box.innerHTML = '<div class="card"><h2>' + ic('chart') + ' گزارش کامل پیشرفت</h2>' + summary +
    '<div class="row" style="margin:12px 0">' +
      '<button type="button" class="btn brand" id="copyReport">📋 کپی</button>' +
      '<button type="button" class="btn ghost" id="downloadReport">' + ic('download') + ' دانلود JSON</button>' +
      '<button type="button" class="btn ghost" id="closeReport">بستن</button>' +
    '</div>' +
    '<textarea readonly style="min-height:300px;font-size:11px" dir="ltr">' + esc(jsonStr) + '</textarea></div>';

  $('#closeReport').onclick = function(){box.innerHTML=''};
  $('#copyReport').onclick = function(){
    var ta = box.querySelector('textarea');
    ta.select();
    if(navigator.clipboard) navigator.clipboard.writeText(ta.value).then(function(){toast('کپی ✅')}).catch(function(){document.execCommand('copy');toast('کپی ✅')});
    else { document.execCommand('copy'); toast('کپی ✅'); }
  };
  $('#downloadReport').onclick = function(){
    var blob = new Blob([jsonStr], {type:'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'zabanyar-report-' + new Date().toISOString().split('T')[0] + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('دانلود ✅');
  };
  box.scrollIntoView({behavior:'smooth'});
}

// ============ SETTINGS ============
function renderSettings(){
  loadVoices();
  var syncActive = syncEnabled;
  var h = '<h1>تنظیمات</h1>';
  h += '<div class="card stack" style="margin-top:14px"><h3>AI</h3>';
  h += '<div class="field"><label>کلید API</label><input type="password" id="k" dir="ltr" value="'+esc(settings.key)+'"></div>';
  h += '<div class="field"><label>آدرس پروکسی</label><input type="text" id="p" dir="ltr" value="'+esc(settings.proxy||'')+'"></div>';
  h += '<div class="field"><label>مدل</label><select id="m">';
  ['gpt-4o-mini','gpt-4.1-mini','gpt-3.5-turbo','deepseek-chat','claude-3-5-haiku','claude-sonnet-4-6','gemini-2.0-flash-lite','gemini-2.5-flash'].forEach(function(mm){h += '<option value="'+mm+'">'+mm+'</option>'});
  h += '</select></div>';
  h += '<div class="field"><label>سرعت صدا</label><select id="r"><option value="slow">آهسته</option><option value="normal">عادی</option><option value="fast">سریع</option></select></div>';
  h += '<div class="field"><label>صدا</label><select id="v"><option value="">پیش‌فرض</option>';
  voices.forEach(function(v){h += '<option value="'+esc(v.name)+'">'+esc(v.name)+'</option>'});
  h += '</select></div>';
  h += '<div class="row"><button type="button" class="btn brand" id="sv">ذخیره</button><button type="button" class="btn ghost" id="ts">آزمایش</button></div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>☁️ همگام‌سازی</h3><div class="field"><label>کد</label><input type="password" id="sc" dir="ltr" value="'+esc(settings.syncCode||'')+'"></div><div class="row"><button type="button" class="btn brand" id="scActivate">'+(syncActive?'به‌روز':'فعال')+'</button><button type="button" class="btn ghost" id="scPull">دریافت</button><button type="button" class="btn ghost" id="scPush">ارسال</button></div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>📤 صادرات/واردات</h3><div class="row"><button type="button" class="btn brand" id="exBtn">صادرات</button><button type="button" class="btn ghost" id="imBtn">واردات</button></div><div id="exBox" style="display:none"><textarea id="exText" readonly></textarea><button type="button" class="btn ghost" id="exCopy" style="margin-top:8px">کپی</button></div><div id="imBox" style="display:none"><textarea id="imText" placeholder="کد..."></textarea><button type="button" class="btn brand" id="imGo" style="margin-top:8px">وارد</button></div></div>';
  h += '<div class="card stack" style="margin-top:16px"><h3>🗑 پاک کردن</h3><button type="button" class="btn ghost" id="rs">پاک کردن همه</button></div>';
  $('#main').innerHTML = h;
  $('#m').value=settings.model;$('#r').value=settings.rate;$('#v').value=settings.voice;
  var save = function(){settings.key=$('#k').value.trim();settings.model=$('#m').value;settings.rate=$('#r').value;settings.voice=$('#v').value;settings.proxy=$('#p').value.trim();settings.syncCode=$('#sc').value.trim();store.set('zy_settings',settings)};
  $('#sv').onclick = function(){save();toast('ذخیره ✅')};
  $('#ts').onclick = function(){save();callAI('Reply: ok',[{role:'user',content:'ping'}],20).then(function(){toast('اتصال ✅')}).catch(function(e){toast(errText(e),6000)})};
  $('#scActivate').onclick = function(){save();if(!settings.proxy||!settings.syncCode||settings.syncCode.length<8){toast('پروکسی و کد');return}syncEnabled=false;initSync().then(function(ok){if(ok){toast('بارگذاری...');pullFromCloud(true).then(function(){toast('فعال ✅');renderSettings()})}})};
  $('#scPull').onclick = function(){save();if(!syncEnabled)initSync().then(function(ok){if(ok)pullFromCloud().then(renderSettings)});else pullFromCloud().then(renderSettings)};
  $('#scPush').onclick = function(){save();if(!syncEnabled)initSync().then(function(ok){if(ok)pushToCloud().then(function(){toast('ارسال ✅')})});else pushToCloud().then(function(){toast('ارسال ✅')})};
  $('#exBtn').onclick = function(){try{$('#exText').value=exportData();$('#exBox').style.display='block';$('#imBox').style.display='none'}catch(e){toast('خطا')}};
  $('#imBtn').onclick = function(){$('#imBox').style.display='block';$('#exBox').style.display='none'};
  var ec = $('#exCopy'); if(ec) ec.onclick = function(){var t=$('#exText');t.select();if(navigator.clipboard)navigator.clipboard.writeText(t.value).then(function(){toast('کپی ✅')}).catch(function(){document.execCommand('copy');toast('کپی ✅')});else{document.execCommand('copy');toast('کپی ✅')}};
  var ig = $('#imGo'); if(ig) ig.onclick = function(){try{var b64=$('#imText').value.trim();if(!b64){toast('خالی');return}if(!confirm('جایگزین شود؟'))return;importData(b64);schedulePushToCloud();toast('وارد ✅');updateStats();go('program')}catch(e){toast('نامعتبر',5000)}};
  $('#rs').onclick = function(){if(confirm('همه پاک شود؟')){prog={xp:0,streak:0,last:'',done:{},program:{},grammar:{}};lessonCache={};grammarCache={};importedScenarios=[];customLessons=[];store.set('zy_lessons',{});store.set('zy_grammar',{});store.set('zy_imported',[]);store.set('zy_custom_lessons',[]);saveProg();toast('پاک شد')}};
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
    p.classList.add('rec'); out.className='pr'; out.textContent='…';
    rec = listen({done:function(t){
      p.classList.remove('rec');
      var a=norm(t),b=norm(en);
      if(!a){out.textContent='';return}
      var ok=a===b||a.indexOf(b)>=0||sim(a,b)>=0.8;
      out.className='pr '+(ok?'ok':'no');
      out.textContent=ok?'عالی!':'شنیده شد: «'+t+'»';
      if(ok)award(1);
    }});
    if(!rec)p.classList.remove('rec');
  }
});
$$('.tab').forEach(function(t){t.onclick=function(){go(t.getAttribute('data-v'))}});
try{
  updateStats();
  go('program');
if(settings.proxy && settings.syncCode) initSync();
}catch(e){
  console.error('Init error:', e);
  var m = $('#main'); if(m) m.innerHTML = '<div class="card"><b>خطا</b><p dir="ltr" style="font-family:monospace;font-size:12px">'+esc(e.message)+'</p><button type="button" class="btn brand" onclick="try{localStorage.removeItem(\'zy_prog\')}catch(e){};location.reload()">ریست و رفرش</button></div>';
                                                                                }
