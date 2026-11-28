/* ============ AUDIO CENTER: COMPLETE 8-WEEK PROGRAM ============ */
(function(){
  'use strict';
  if(window.__audioCenter8Loaded) return;
  window.__audioCenter8Loaded = true;

  var CFG_KEY = 'zy_audio8_cfg';
  var cfg = readCfg();
  var queue = [];
  var queueBuilt = false;
  var index = 0;
  var playing = false;
  var paused = false;
  var utterance = null;
  var wakeLock = null;
  var activeFilter = 'all';
  var originalRender = window.render;
  var originalGo = window.go;

  function readCfg(){
    try{
      var x = JSON.parse(localStorage.getItem(CFG_KEY) || '{}');
      return Object.assign({rate:0.9, shuffle:false, repeat:'all', includeMistakes:false, includeCustom:true}, x||{});
    }catch(e){ return {rate:0.9,shuffle:false,repeat:'all',includeMistakes:false,includeCustom:true}; }
  }
  function saveCfg(){
    try{ localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); }catch(e){}
  }
  function esc8(s){
    return String(s==null?'':s).replace(/[&<>"']/g,function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function english(s){
    s = String(s==null?'':s).trim();
    if(!s || !/[A-Za-z]/.test(s) || /[\u0600-\u06FF]/.test(s)) return '';
    return s;
  }
  function addTrack(group, title, subtitle, source, lines){
    var clean = (lines||[]).map(english).filter(Boolean);
    if(!clean.length) return;
    queue.push({group:group,title:title||'Practice',subtitle:subtitle||'',source:source||'',lines:clean});
  }
  function cachedLesson(id){
    return (window.lessonCache && window.lessonCache[id]) || null;
  }
  function lessonLines(unit, lesson){
    var out = [];
    if(lesson){
      if(lesson.title) out.push(lesson.title);
      (lesson.vocab||[]).forEach(function(v){ out.push(v.en, v.ex); });
      if(lesson.grammar){
        (lesson.grammar.examples||[]).forEach(function(x){out.push(x.en);});
      }
      (lesson.dialogue||[]).forEach(function(x){out.push(x.en);});
      (lesson.phrases||[]).forEach(function(x){out.push(x.en);});
      (lesson.quiz||[]).forEach(function(x){
        out.push(x.q);
        (x.options||[]).forEach(function(o){out.push(o);});
      });
    }
    return out;
  }
  function grammarLines(g){
    var out = [];
    if(!g) return out;
    if(g.title) out.push(g.title);
    (g.rules||[]).forEach(function(r){
      out.push(r.title, r.structure);
      (r.examples||[]).forEach(function(x){out.push(x.en);});
    });
    (g.when_to_use||[]).forEach(function(x){out.push(x.example_en);});
    (g.speaking_practice||[]).forEach(function(x){out.push(x.en);});
    (g.common_mistakes||[]).forEach(function(x){out.push(x.right);});
    (g.correction||[]).forEach(function(x){out.push(x.right);});
    return out;
  }
  function scenarioById(id){
    var all = (window.JOB_SCENARIOS||[]).concat(window.importedScenarios||[]);
    for(var i=0;i<all.length;i++) if(all[i] && all[i].id===id) return all[i];
    return null;
  }
  function buildQueue(){
    queue = [];
    queueBuilt = true;
    var weeks = window.PROGRAM || [];
    weeks.forEach(function(w){
      (w.lessons||[]).forEach(function(l){
        var levels = window.LEVELS||[], unit=null;
        for(var i=0;i<levels.length;i++) if(levels[i].id===l.level){unit=levels[i].units[l.idx];break;}
        if(!unit) return;
        var id = l.level+'-'+l.idx;
        var title = unit[0] || ('Lesson '+id);
        var body = lessonLines(unit, cachedLesson(id));
        if(!body.length) body = [title, unit[1], unit[2]];
        addTrack('lesson', 'Week '+w.week+' · '+title, (l.note||unit[1]||''), id, body);
      });
      (w.grammar||[]).forEach(function(id){
        var found = window.findGrammarTopic ? window.findGrammarTopic(id) : null;
        if(!found) return;
        var lesson = (window.grammarCache||{})[id] || null;
        var lines = grammarLines(lesson);
        if(!lines.length) lines = [found.topic.title, found.topic.titleFa, found.topic.why];
        addTrack('grammar','Week '+w.week+' · '+found.topic.title,found.topic.titleFa,id,lines);
      });
      (w.scenarios||[]).forEach(function(s){
        var sc = scenarioById(s.id);
        if(!sc) return;
        addTrack('scenario','Week '+w.week+' · '+sc.title,sc.desc||s.note||'',sc.id,[sc.opening,sc.sample]);
      });
    });
    if(cfg.includeCustom){
      (window.customLessons||[]).forEach(function(cl){
        var lines=[];
        if(cl.lesson) lines=lessonLines(null,cl.lesson);
        if(!lines.length) lines=[cl.title,cl.customTopic,cl.topic,cl.sample,cl.example];
        addTrack('personal',cl.title||'Custom lesson',cl.customTopic||cl.topic||'Saved lesson',cl.id,lines);
      });
      (window.importedScenarios||[]).forEach(function(sc){
        if(!(window.PROGRAM||[]).some(function(w){return (w.scenarios||[]).some(function(s){return s.id===sc.id;});}))
          addTrack('personal',sc.title||'Saved scenario',sc.desc||'',sc.id,[sc.opening,sc.sample]);
      });
    }
    if(cfg.includeMistakes){
      (window.mistakes||[]).slice(0,80).forEach(function(m,i){
        addTrack('review','Mistake review '+(i+1),m.type||'Personal review','mistake-'+i,[m.fix]);
      });
    }
    if(cfg.shuffle) shuffleQueue();
    if(index>=queue.length) index=0;
  }
  function shuffleQueue(){
    for(var i=queue.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1)), t=queue[i]; queue[i]=queue[j]; queue[j]=t;
    }
  }
  function currentLines(){ return queue[index] ? queue[index].lines : []; }
  function renderAudio(){
    if(!queueBuilt) buildQueue();
    var counts={lesson:0,grammar:0,scenario:0,personal:0,review:0};
    queue.forEach(function(t){counts[t.group]=(counts[t.group]||0)+1;});
    var t=queue[index];
    var h='<div class="card" style="border:1px solid var(--line);padding:18px">';
    h+='<div class="row between" style="align-items:center;flex-wrap:wrap"><div><h1 style="margin:0">🎧 مرکز شنیداری ۸ هفته‌ای</h1><div class="sub">تمام برنامه آموزشی، مستقل از آمادگی ۶ روزه</div></div><span class="badge">'+queue.length+' بخش صوتی</span></div>';
    h+='<div class="grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin:16px 0">';
    [['lesson','درس‌ها'],['grammar','گرامر'],['scenario','سناریوها'],['personal','شخصی'],['review','مرور اشتباهات']].forEach(function(x){
      h+='<button type="button" class="btn '+(activeFilter===x[0]?'brand':'ghost')+'" data-a8-filter="'+x[0]+'">'+x[1]+' <small>('+((counts[x[0]]||0))+')</small></button>';
    });
    h+='</div>';
    h+='<div class="card" style="background:var(--bg);padding:16px;margin:12px 0">';
    h+='<div class="sub">در حال پخش</div><h2 style="margin:5px 0">'+(t?esc8(t.title):'محتوایی برای پخش وجود ندارد')+'</h2>';
    if(t && t.subtitle) h+='<div class="sub">'+esc8(t.subtitle)+'</div>';
    h+='<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">';
    h+='<button type="button" class="btn brand" id="a8-play">'+(playing&&!paused?'⏸ مکث':(paused?'▶ ادامه':'▶ پخش'))+'</button>';
    h+='<button type="button" class="btn ghost" id="a8-prev">⏮ قبلی</button><button type="button" class="btn ghost" id="a8-next">بعدی ⏭</button><button type="button" class="btn ghost" id="a8-stop">⏹ توقف</button></div>';
    h+='<div class="sub" style="margin-top:10px">جمله '+(t?(index+1)+' از '+queue.length:'۰')+' · فقط صدای انگلیسی پخش می‌شود؛ ترجمه‌ها در محتوای اصلی برنامه باقی می‌مانند.</div></div>';
    h+='<div class="card" style="padding:14px;margin:12px 0"><div class="row between"><label for="a8-rate">سرعت پخش</label><b id="a8-rate-label">'+Number(cfg.rate).toFixed(2)+'x</b></div><input id="a8-rate" type="range" min="0.65" max="1.2" step="0.05" value="'+cfg.rate+'" style="width:100%">';
    h+='<div class="row" style="gap:14px;flex-wrap:wrap;margin-top:10px"><label><input type="checkbox" id="a8-shuffle" '+(cfg.shuffle?'checked':'')+'> پخش تصادفی</label><label><input type="checkbox" id="a8-custom" '+(cfg.includeCustom?'checked':'')+'> محتوای ذخیره‌شده</label><label><input type="checkbox" id="a8-mistakes" '+(cfg.includeMistakes?'checked':'')+'> مرور اشتباهات</label></div>';
    h+='<div class="row" style="align-items:center;gap:10px;margin-top:12px"><label for="a8-repeat">تکرار</label><select id="a8-repeat"><option value="all" '+(cfg.repeat==='all'?'selected':'')+'>همه فهرست</option><option value="one" '+(cfg.repeat==='one'?'selected':'')+'>همین بخش</option><option value="off" '+(cfg.repeat==='off'?'selected':'')+'>بدون تکرار</option></select></div></div>';
    h+='<h3>فهرست محتوا</h3><div style="display:grid;gap:7px">';
    var shown=0;
    queue.forEach(function(item,i){
      if(activeFilter!=='all' && item.group!==activeFilter) return;
      shown++;
      h+='<button type="button" data-a8-item="'+i+'" class="card" style="text-align:start;padding:11px;border:1px solid '+(i===index?'var(--brand)':'var(--line)')+';background:'+(i===index?'var(--brand-soft)':'var(--card)')+'"><b>'+esc8(item.title)+'</b><div class="sub">'+esc8(item.subtitle)+' · '+item.lines.length+' جمله</div></button>';
    });
    if(!shown) h+='<div class="sub">در این دسته هنوز محتوایی موجود نیست.</div>';
    h+='</div><p class="sub" style="margin-top:14px">نکته: اگر متن کامل یک درس یا گرامر هنوز در حافظه برنامه ساخته نشده باشد، عنوان و محور آن برای مرور پخش می‌شود. با باز کردن و ساختن درس در بخش اصلی، نسخه کامل آن به این فهرست اضافه خواهد شد.</p></div>';
    h += renderSecurityPanel();
    var main=document.getElementById('main'); if(main) main.innerHTML=h;
    bindAudioUI();
    bindSecurityUI();
  }

  // ===== Security incident: SFP socket interview practice =====
  var securityQuestions = [
    {q:"Who recommended or introduced the contractor?",faQ:"چه کسی پیمانکار را معرفی کرد؟",a:"We contacted Mr. Amani about the installation. He coordinated with Mr. Leili, and Mr. Leili introduced the contractor to us.",faA:"ما برای انجام نصب با آقای امانی صحبت کردیم. ایشان با آقای لیلی هماهنگ کردند و آقای لیلی پیمانکار را به ما معرفی کردند."},
    {q:"Did you inform security before the contractors arrived?",faQ:"آیا قبل از رسیدن پیمانکارها، حراست را مطلع کرده بودی؟",a:"Yes. I informed the security team by email and also informed Ildar before they arrived.",faA:"بله. قبل از رسیدن پیمانکارها، از طریق ایمیل به حراست اطلاع دادم و ایلدار را هم در جریان گذاشتم."},
    {q:"Did the contractors have permission to enter the building?",faQ:"آیا پیمانکارها اجازه ورود به ساختمان را داشتند؟",a:"Yes. I had already informed the security team by email.",faA:"بله. من از قبل از طریق ایمیل حراست را مطلع کرده بودم."},
    {q:"When did you notice that the SFP socket was broken?",faQ:"چه زمانی متوجه شدی سوکت SFP شکسته است؟",a:"I don't know exactly when it happened. About 20 minutes after the contractors left, Hesam called me and told me that the SFP socket was broken.",faA:"دقیقاً نمی‌دانم چه زمانی این اتفاق افتاده است. حدود ۲۰ دقیقه بعد از رفتن پیمانکارها، حسام با من تماس گرفت و گفت سوکت SFP شکسته است."},
    {q:"Were you with the contractors during the installation?",faQ:"آیا هنگام نصب همراه پیمانکارها بودی؟",a:"Yes, I was with the contractors the whole time.",faA:"بله، من تمام مدت همراه پیمانکارها بودم."},
    {q:"Did you see anyone touching or working on the network equipment?",faQ:"آیا دیدی کسی به تجهیزات شبکه دست بزند یا روی آن‌ها کار کند؟",a:"No, I didn't see anyone touching the equipment.",faA:"نه، ندیدم کسی به تجهیزات دست بزند."},
    {q:"Did you notice anything unusual in the server room that day?",faQ:"آیا آن روز در اتاق سرور متوجه موضوع غیرعادی یا مشکوکی شدی؟",a:"No, I didn't notice anything unusual in the server room that day.",faA:"نه، آن روز متوجه هیچ موضوع غیرعادی در اتاق سرور نشدم."},
    {q:"Did you have access to the server room during that day?",faQ:"آیا آن روز به اتاق سرور دسترسی داشتی؟",a:"Yes, I had the key that day. I asked Hesam for it.",faA:"بله، آن روز کلید دست من بود. من کلید را از حسام خواستم."},
    {q:"Did anyone else have access to the server room while you had the key?",faQ:"در مدتی که کلید دست تو بود، شخص دیگری هم به اتاق سرور دسترسی داشت؟",a:"I don't know. I'm not sure if anyone else had access to the server room.",faA:"نمی‌دانم. مطمئن نیستم که شخص دیگری هم به اتاق سرور دسترسی داشته یا نه."},
    {q:"Did you lock the server room when you left?",faQ:"وقتی از اتاق سرور خارج شدی، در اتاق را قفل کردی؟",a:"Yes, I did.",faA:"بله، قفل کردم."},
    {q:"Did you report the broken SFP socket to anyone?",faQ:"آیا خرابی سوکت SFP را به کسی گزارش دادی؟",a:"Yes. After Hesam told me about it, I reported it to Ildar.",faA:"بله. بعد از اینکه حسام موضوع را به من گفت، آن را به ایلدار گزارش دادم."},
    {q:"Did you touch or move any network equipment in the server room that day?",faQ:"آیا آن روز در اتاق سرور به تجهیزات شبکه دست زدی یا آن‌ها را جابه‌جا کردی؟",a:"No, I didn't touch or move any network equipment. I was only watching the contractors.",faA:"نه، به هیچ‌کدام از تجهیزات شبکه دست نزدم یا آن‌ها را جابه‌جا نکردم. فقط مراقب کار پیمانکارها بودم."},
    {q:"Did the contractors touch any network equipment?",faQ:"آیا پیمانکارها به تجهیزات شبکه دست زدند؟",a:"No, they only brought the fiber optic cable down from above the rack. They didn't work on the network equipment.",faA:"خیر، آن‌ها فقط کابل فیبر نوری را از بالای رک به پایین آوردند. روی تجهیزات شبکه کاری انجام ندادند."}
  ];
  var securityPhrases = [
    {en:"Could you please repeat the question slowly?",fa:"لطفاً می‌توانید سؤال را آهسته‌تر تکرار کنید؟"},
    {en:"Let me think for a moment, please.",fa:"لطفاً اجازه بدهید یک لحظه فکر کنم."},
    {en:"I don't know exactly. I don't want to give you incorrect information.",fa:"دقیقاً نمی‌دانم. نمی‌خواهم اطلاعات اشتباه بدهم."},
    {en:"I wasn't there when it happened, so I can't say exactly when or how it happened.",fa:"من زمانی که این اتفاق افتاد آنجا نبودم، بنابراین نمی‌توانم دقیقاً بگویم چه زمانی یا چگونه اتفاق افتاده است."}
  ];
  var secIndex=0, secRecognition=null, secRecording=false, secShowAnswer=false, secListenQueue=[], secListenPos=0, secListenActive=false;
  var SEC_PROGRESS_KEY='zy_security_sfp_practice_v1';
  function secEsc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function secProgress(){try{return JSON.parse(localStorage.getItem(SEC_PROGRESS_KEY)||'{}')||{};}catch(e){return {};}}
  function secSaveProgress(qid,text){var p=secProgress();p[qid]={answer:text,updatedAt:Date.now(),attempts:(p[qid]&&p[qid].attempts||0)+1};try{localStorage.setItem(SEC_PROGRESS_KEY,JSON.stringify(p));}catch(e){}}
  function renderSecurityPanel(){
    var q=securityQuestions[secIndex], progress=secProgress(), saved=progress[secIndex]||{};
    var h='<section class="card" style="border:1px solid var(--line);padding:18px;margin-top:18px">';
    h+='<div class="row between" style="align-items:center;flex-wrap:wrap"><div><h2 style="margin:0">🛡️ تمرین جلسه حراست – خرابی سوکت SFP</h2><div class="sub">۱۳ سؤال و جواب واقعی + ۴ جمله ضروری جلسه</div></div><span class="badge">مستقل از آمادگی ۶ روزه</span></div>';
    h+='<div class="row" style="gap:8px;flex-wrap:wrap;margin:14px 0"><button class="btn brand" type="button" id="sec-mode-listen">🎧 گوش‌دادن کامل</button><button class="btn ghost" type="button" id="sec-mode-practice">🎙️ تمرین پاسخ با صدا</button></div>';
    h+='<div class="card" style="padding:14px;background:var(--bg);margin:10px 0"><b>گوش‌دادن به کل سناریو</b><p class="sub">ابتدا سؤال و سپس جواب انگلیسی هر مورد پخش می‌شود. ترجمه فارسی برای مطالعه روی صفحه است و با صدا خوانده نمی‌شود.</p>';
    h+='<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn brand" type="button" id="sec-listen-all">▶ پخش همه سؤال و جواب‌ها</button><button class="btn ghost" type="button" id="sec-listen-pause">⏸ مکث / ادامه</button><button class="btn ghost" type="button" id="sec-listen-stop">⏹ توقف</button></div><div class="sub" id="sec-listen-status" aria-live="polite" style="margin-top:8px">آماده پخش · ۱۳ سؤال و ۴ جمله ضروری</div></div>';
    h+='<div class="card" style="padding:14px;margin:12px 0"><div class="row between"><b>سؤال‌های جلسه</b><span class="sub">'+securityQuestions.length+' سؤال</span></div>';
    securityQuestions.forEach(function(x,i){h+='<details style="padding:10px 0;border-bottom:1px solid var(--line)" '+(i===secIndex?'open':'')+'><summary style="cursor:pointer;font-weight:600;direction:ltr;text-align:left">'+(i+1)+'. '+secEsc(x.q)+'</summary><div style="margin-top:8px;direction:rtl">'+secEsc(x.faQ)+'</div><div style="direction:ltr;text-align:left;font-family:Lexend,sans-serif;margin-top:8px">'+secEsc(x.a)+'</div><div class="sub" style="margin-top:5px">'+secEsc(x.faA)+'</div></details>';});
    h+='</div><div class="card" style="padding:14px;margin:12px 0"><b>جملات ضروری برای جلسه</b>';
    securityPhrases.forEach(function(x,i){h+='<div style="padding:10px 0;border-bottom:1px solid var(--line)"><div style="direction:ltr;text-align:left;font-family:Lexend,sans-serif">'+secEsc(x.en)+'</div><div class="sub">'+secEsc(x.fa)+'</div><button type="button" class="btn ghost" data-sec-phrase="'+i+'" style="margin-top:6px">🔊 پخش جمله</button></div>';});
    h+='</div><div class="card" style="padding:14px;margin:12px 0"><div class="row between" style="align-items:center"><b>🎙️ تمرین پاسخ به سؤال‌ها</b><span class="sub">سؤال '+(secIndex+1)+' از '+securityQuestions.length+'</span></div>';
    h+='<div style="direction:ltr;text-align:left;font:600 1.15rem Lexend,sans-serif;margin:12px 0">'+secEsc(q.q)+'</div><div class="sub">'+secEsc(q.faQ)+'</div>';
    h+='<div class="row" style="gap:8px;flex-wrap:wrap;margin:12px 0"><button type="button" class="btn ghost" id="sec-say-question">🔊 شنیدن سؤال</button><button type="button" class="btn brand" id="sec-mic">'+(secRecording?'🔴 در حال ضبط...':'🎙️ پاسخ با میکروفون')+'</button></div>';
    h+='<label for="sec-answer">پاسخ تو (اگر میکروفون پشتیبانی نشد، تایپ کن):</label><textarea id="sec-answer" rows="3" dir="ltr" style="font-family:Lexend,sans-serif;text-align:left;margin-top:6px" placeholder="Speak or type your answer...">'+secEsc(saved.answer||'')+'</textarea>';
    h+='<div class="row" style="gap:8px;flex-wrap:wrap;margin:10px 0"><button type="button" class="btn brand" id="sec-check">بررسی پاسخ و نمایش جواب نمونه</button><button type="button" class="btn ghost" id="sec-show-answer">نمایش جواب نمونه</button></div>';
    h+='<div id="sec-feedback" class="sub" aria-live="polite"></div><div id="sec-model-answer" style="display:'+(secShowAnswer?'block':'none')+';margin-top:10px;padding:12px;background:var(--bg);border-radius:10px"><b>جواب پیشنهادی:</b><div style="direction:ltr;text-align:left;font-family:Lexend,sans-serif;margin:8px 0">'+secEsc(q.a)+'</div><div class="sub">'+secEsc(q.faA)+'</div><button type="button" class="btn ghost" id="sec-say-answer" style="margin-top:8px">🔊 شنیدن جواب نمونه</button></div>';
    h+='<div class="row between" style="gap:8px;margin-top:14px"><button type="button" class="btn ghost" id="sec-prev" '+(secIndex===0?'disabled':'')+'>سؤال قبلی</button><button type="button" class="btn brand" id="sec-next">'+(secIndex===securityQuestions.length-1?'پایان':'سؤال بعدی')+'</button></div>';
    h+='<p class="sub" style="margin-top:12px">پاسخ‌ها فقط در همین مرورگر و با کلید ذخیره‌سازی جداگانه نگهداری می‌شوند. تشخیص گفتار به پشتیبانی مرورگر و اجازه میکروفون نیاز دارد؛ در صورت نبود این قابلیت می‌توانی پاسخ را تایپ کنی.</p></div></section>';
    return h;
  }
  function secSpeak(text,onend){if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){if(onend)onend();return;}acquireWakeLock();var u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=cfg.rate||0.9;u.onend=function(){releaseWakeLock();if(onend)onend();};u.onerror=function(ev){releaseWakeLock();if(onend&&!(ev&&(ev.error==='canceled'||ev.error==='interrupted')))onend();};speechSynthesis.speak(u);}
  function secBuildListenQueue(){var a=[];securityQuestions.forEach(function(q,i){a.push({text:'Question '+(i+1)+'. '+q.q});a.push({text:'Answer. '+q.a});});securityPhrases.forEach(function(p,i){a.push({text:'Useful phrase '+(i+1)+'. '+p.en});});return a;}
  function secPlayNext(){if(!secListenActive)return;if(secListenPos>=secListenQueue.length){secListenActive=false;var st=document.getElementById('sec-listen-status');if(st)st.textContent='پخش کامل شد.';return;}var item=secListenQueue[secListenPos++];var st=document.getElementById('sec-listen-status');if(st)st.textContent='در حال پخش '+secListenPos+' از '+secListenQueue.length;secSpeak(item.text,secPlayNext);}
  function secStartListen(){stop();if(window.speechSynthesis)speechSynthesis.cancel();secListenQueue=secBuildListenQueue();secListenPos=0;secListenActive=true;secPlayNext();}
  function secStopListen(){secListenActive=false;if(window.speechSynthesis)speechSynthesis.cancel();secListenPos=secListenQueue.length;var st=document.getElementById('sec-listen-status');if(st)st.textContent='پخش متوقف شد.';}
  function secToggleListen(){if(!window.speechSynthesis)return;if(speechSynthesis.paused){speechSynthesis.resume();}else if(speechSynthesis.speaking){speechSynthesis.pause();}else if(secListenQueue.length&&secListenPos<secListenQueue.length){secPlayNext();}else{secStartListen();}}
  function secNormalize(s){return String(s||'').toLowerCase().replace(/[^a-z0-9']/g,' ').split(/\s+/).filter(function(w){return w.length>1&&!/^(the|and|for|you|did|was|were|that|this|with|have|had|has|are|is|to|of|a|an|i|it|in|on|or|do|be)$/.test(w);});}
  function secCheckAnswer(){var box=document.getElementById('sec-answer'),fb=document.getElementById('sec-feedback'),model=document.getElementById('sec-model-answer');if(!box||!fb)return;var answer=box.value.trim();if(!answer){fb.textContent='اول پاسخ را با صدا بگو یا تایپ کن.';return;}secSaveProgress(secIndex,answer);var expected=secNormalize(securityQuestions[secIndex].a),actual=secNormalize(answer),hits=actual.filter(function(w){return expected.indexOf(w)>=0;}).length,score=expected.length?Math.round(hits/expected.length*100):0;fb.textContent='پاسخت ذخیره شد. شباهت واژگانی با جواب نمونه: '+score+'٪. این امتیاز ارزیابی دقیق تلفظ یا گرامر نیست؛ جواب نمونه را بررسی کن و دوباره تمرین کن.';if(model)model.style.display='block';secShowAnswer=true;}
  function secStartRecognition(){var SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){var fb=document.getElementById('sec-feedback');if(fb)fb.textContent='تشخیص گفتار در این مرورگر پشتیبانی نمی‌شود. پاسخ را در کادر تایپ کن.';return;}try{if(secRecognition){try{secRecognition.stop();}catch(e){}}secRecognition=new SR();secRecognition.lang='en-US';secRecognition.interimResults=false;secRecognition.continuous=false;secRecording=true;var mic=document.getElementById('sec-mic');if(mic){mic.textContent='🔴 در حال ضبط...';mic.disabled=true;}var fb=document.getElementById('sec-feedback');if(fb)fb.textContent='در حال گوش‌دادن... انگلیسی صحبت کن.';secRecognition.onresult=function(ev){var text=Array.from(ev.results).map(function(r){return r[0].transcript;}).join(' ');var box=document.getElementById('sec-answer');if(box)box.value=text;};secRecognition.onerror=function(ev){var f=document.getElementById('sec-feedback');if(f)f.textContent='خطای میکروفون: '+(ev.error||'unknown')+'. می‌توانی پاسخ را تایپ کنی.';};secRecognition.onend=function(){secRecording=false;var m=document.getElementById('sec-mic');if(m){m.textContent='🎙️ پاسخ با میکروفون';m.disabled=false;}};secRecognition.start();}catch(e){secRecording=false;var m=document.getElementById('sec-mic');if(m){m.textContent='🎙️ پاسخ با میکروفون';m.disabled=false;}var f=document.getElementById('sec-feedback');if(f)f.textContent='امکان شروع میکروفون نبود؛ پاسخ را تایپ کن.';}}
  function bindSecurityUI(){
    var el;
    (el=document.getElementById('sec-listen-all'))&&(el.onclick=secStartListen);
    (el=document.getElementById('sec-listen-stop'))&&(el.onclick=secStopListen);
    (el=document.getElementById('sec-listen-pause'))&&(el.onclick=secToggleListen);
    (el=document.getElementById('sec-mode-listen'))&&(el.onclick=function(){document.getElementById('sec-listen-all').scrollIntoView({behavior:'smooth',block:'center'});});
    (el=document.getElementById('sec-mode-practice'))&&(el.onclick=function(){document.getElementById('sec-answer').focus();});
    document.querySelectorAll('[data-sec-phrase]').forEach(function(b){b.onclick=function(){var p=securityPhrases[Number(b.getAttribute('data-sec-phrase'))];stop();speechSynthesis.cancel();secSpeak(p.en);};});
    (el=document.getElementById('sec-say-question'))&&(el.onclick=function(){stop();speechSynthesis.cancel();secSpeak(securityQuestions[secIndex].q);});
    (el=document.getElementById('sec-say-answer'))&&(el.onclick=function(){stop();speechSynthesis.cancel();secSpeak(securityQuestions[secIndex].a);});
    (el=document.getElementById('sec-mic'))&&(el.onclick=secStartRecognition);
    (el=document.getElementById('sec-check'))&&(el.onclick=secCheckAnswer);
    (el=document.getElementById('sec-show-answer'))&&(el.onclick=function(){secShowAnswer=true;var m=document.getElementById('sec-model-answer');if(m)m.style.display='block';});
    (el=document.getElementById('sec-next'))&&(el.onclick=function(){if(secIndex<securityQuestions.length-1)secIndex++;secShowAnswer=false;renderAudio();});
    (el=document.getElementById('sec-prev'))&&(el.onclick=function(){if(secIndex>0)secIndex--;secShowAnswer=false;renderAudio();});
  }

  function bindAudioUI(){
    var el;
    (el=document.getElementById('a8-play')) && (el.onclick=function(){ if(playing&&!paused) pause(); else if(paused) resume(); else start(); renderAudio(); });
    (el=document.getElementById('a8-stop')) && (el.onclick=function(){stop();renderAudio();});
    (el=document.getElementById('a8-next')) && (el.onclick=function(){next(true);});
    (el=document.getElementById('a8-prev')) && (el.onclick=function(){previous();});
    document.querySelectorAll('[data-a8-filter]').forEach(function(b){b.onclick=function(){activeFilter=b.getAttribute('data-a8-filter');renderAudio();};});
    document.querySelectorAll('[data-a8-item]').forEach(function(b){b.onclick=function(){index=Number(b.getAttribute('data-a8-item'))||0;stopSpeechOnly();start();renderAudio();};});
    (el=document.getElementById('a8-rate')) && (el.oninput=function(){cfg.rate=Number(this.value);saveCfg();var lab=document.getElementById('a8-rate-label');if(lab)lab.textContent=cfg.rate.toFixed(2)+'x';});
    (el=document.getElementById('a8-shuffle')) && (el.onchange=function(){cfg.shuffle=this.checked;saveCfg();queueBuilt=false;renderAudio();});
    (el=document.getElementById('a8-custom')) && (el.onchange=function(){cfg.includeCustom=this.checked;saveCfg();queueBuilt=false;renderAudio();});
    (el=document.getElementById('a8-mistakes')) && (el.onchange=function(){cfg.includeMistakes=this.checked;saveCfg();queueBuilt=false;renderAudio();});
    (el=document.getElementById('a8-repeat')) && (el.onchange=function(){cfg.repeat=this.value;saveCfg();});
  }
  function acquireWakeLock(){
    if(navigator.wakeLock && !wakeLock){
      navigator.wakeLock.request('screen').then(function(lock){wakeLock=lock;lock.addEventListener('release',function(){wakeLock=null;});}).catch(function(){});
    }
  }
  function releaseWakeLock(){ if(wakeLock){wakeLock.release().catch(function(){});wakeLock=null;} }
  function mediaHandlers(){
    if(!('mediaSession' in navigator)) return;
    try{
      navigator.mediaSession.metadata=new MediaMetadata({title:queue[index] ? queue[index].title : 'Audio Center',artist:'Zabanyar · 8-week program'});
      navigator.mediaSession.setActionHandler('play',resume);
      navigator.mediaSession.setActionHandler('pause',pause);
      navigator.mediaSession.setActionHandler('previoustrack',previous);
      navigator.mediaSession.setActionHandler('nexttrack',function(){next(true);});
    }catch(e){}
  }
  function speakLine(line){
    if(!window.speechSynthesis || !window.SpeechSynthesisUtterance){playing=false;return;}
    utterance=new SpeechSynthesisUtterance(line);
    utterance.lang='en-US'; utterance.rate=cfg.rate;
    utterance.onend=function(){ if(!playing || paused) return; var lines=currentLines(); lineIndex++; if(lineIndex<lines.length) speakLine(lines[lineIndex]); else finishTrack(); };
    utterance.onerror=function(){ if(playing&&!paused){lineIndex++;var lines=currentLines();if(lineIndex<lines.length)speakLine(lines[lineIndex]);else finishTrack();} };
    speechSynthesis.speak(utterance);
  }
  var lineIndex=0;
  function start(){
    if(!queue.length) buildQueue();
    if(!queue.length) return;
    stopSpeechOnly(); playing=true;paused=false;lineIndex=0;acquireWakeLock();mediaHandlers();speakLine(currentLines()[0]);renderAudio();
  }
  function pause(){ if(window.speechSynthesis){speechSynthesis.pause();paused=true;} }
  function resume(){
    if(!playing){start();return;}
    if(window.speechSynthesis){speechSynthesis.resume();paused=false;acquireWakeLock();mediaHandlers();}
  }
  function stopSpeechOnly(){ if(window.speechSynthesis) speechSynthesis.cancel(); }
  function stop(){playing=false;paused=false;secListenActive=false;stopSpeechOnly();releaseWakeLock();}
  function finishTrack(){
    if(cfg.repeat==='one'){lineIndex=0;speakLine(currentLines()[0]);return;}
    if(index<queue.length-1){index++;lineIndex=0;mediaHandlers();speakLine(currentLines()[0]);}
    else if(cfg.repeat==='all'){index=0;lineIndex=0;mediaHandlers();speakLine(currentLines()[0]);}
    else {stop();}
    renderAudio();
  }
  function next(manual){
    if(!queue.length) return;
    if(index<queue.length-1) index++; else if(cfg.repeat==='all') index=0; else {stop();renderAudio();return;}
    lineIndex=0;
    if(playing){stopSpeechOnly();paused=false;speakLine(currentLines()[0]);mediaHandlers();}
    renderAudio();
  }
  function previous(){
    if(!queue.length) return;
    if(index>0) index--; else if(cfg.repeat==='all') index=queue.length-1;
    lineIndex=0;
    if(playing){stopSpeechOnly();paused=false;speakLine(currentLines()[0]);mediaHandlers();}
    renderAudio();
  }
  function leaveAudio(){
    if(playing) stop();
  }
  window.render = function(){
    if(window.view==='audio8') return renderAudio();
    if(originalRender) return originalRender();
  };
  window.go = function(v){
    if(window.view==='audio8' && v!=='audio8') leaveAudio();
    return originalGo ? originalGo(v) : undefined;
  };
  function installTab(){
    var nav=document.querySelector('.tabs');
    if(!nav || nav.querySelector('[data-v="audio8"]')) return;
    var b=document.createElement('button');
    b.type='button';b.className='tab';b.setAttribute('data-v','audio8');b.textContent='🎧 مرکز شنیداری';
    b.onclick=function(){window.go('audio8');};
    nav.appendChild(b);
  }
  installTab();
  window.addEventListener('beforeunload',leaveAudio);
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='visible' && playing && !paused) acquireWakeLock();
  });
})();