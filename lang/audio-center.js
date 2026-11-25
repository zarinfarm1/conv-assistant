/* ============ AUDIO CENTER: COMPLETE 8-WEEK PROGRAM ============ */
(function(){
  'use strict';
  if(window.__audioCenter8Loaded) return;
  window.__audioCenter8Loaded = true;

  var CFG_KEY = 'zy_audio8_cfg';
  var cfg = readCfg();
  var queue = [];
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
    buildQueue();
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
    var main=document.getElementById('main'); if(main) main.innerHTML=h;
    bindAudioUI();
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
    (el=document.getElementById('a8-shuffle')) && (el.onchange=function(){cfg.shuffle=this.checked;saveCfg();renderAudio();});
    (el=document.getElementById('a8-custom')) && (el.onchange=function(){cfg.includeCustom=this.checked;saveCfg();renderAudio();});
    (el=document.getElementById('a8-mistakes')) && (el.onchange=function(){cfg.includeMistakes=this.checked;saveCfg();renderAudio();});
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
  function stop(){playing=false;paused=false;stopSpeechOnly();releaseWakeLock();}
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