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
      h += '<div class="g-rule"><span class="gr-num">قاعده 
