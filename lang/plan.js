'use strict';
/* ============ UNIFIED PLAN MODULE ============ */
(function(){
  if(window.__planModuleLoaded) return;
  window.__planModuleLoaded = true;

  // ============ CSS ============
  var css = [
    '.up-wrap{display:flex;flex-direction:column;gap:16px}',
    '.up-head{background:linear-gradient(135deg,var(--prog,#c2410c),#a83a00);color:#fff;border-radius:18px;padding:18px}',
    '.up-head .top{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:8px}',
    '.up-head .date{font-weight:800;font-size:1rem}',
    '.up-head .wk{background:rgba(255,255,255,.2);padding:3px 12px;border-radius:999px;font-size:.8rem;font-weight:700}',
    '.up-head .theme{font-size:1.05rem;font-weight:700;margin-bottom:4px}',
    '.up-head .sub{font-size:.85rem;opacity:.9}',
    '.up-focus{background:var(--card,#fff);border:2px dashed var(--prog,#c2410c);border-radius:14px;padding:14px;color:var(--ink,#14213d)}',
    '.up-focus .t{font-weight:800;color:var(--prog,#c2410c);font-size:.92rem;margin-bottom:4px}',
    '.up-focus .d{font-size:.82rem;color:var(--muted,#5b6b80);line-height:1.7}',
    '.up-section{background:var(--card,#fff);border:1px solid var(--line,#cddada);border-radius:14px;padding:16px}',
    '.up-section .st{font-weight:800;font-size:.95rem;color:var(--ink,#14213d);margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}',
    '.up-section .st .badge{background:var(--brand-soft,#d5efef);color:var(--brand,#0e9a9a);padding:2px 10px;border-radius:999px;font-size:.75rem;font-weight:700}',
    '.up-item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--bg,#f0f4f4);border:1.5px solid var(--line,#cddada);border-radius:10px;margin-bottom:8px;transition:all .15s}',
    '.up-item:last-child{margin-bottom:0}',
    '.up-item:hover{border-color:var(--brand,#0e9a9a)}',
    '.up-item.done{background:var(--ok-soft,#d8f1e6);border-color:var(--ok,#23906a);opacity:.85}',
    '.up-item .ck{width:22px;height:22px;border-radius:6px;border:2px solid var(--line,#cddada);display:grid;place-items:center;flex:none;font-size:.75rem;color:transparent;cursor:pointer;background:var(--card,#fff)}',
    '.up-item.done .ck{background:var(--ok,#23906a);border-color:var(--ok,#23906a);color:#fff}',
    '.up-item .bd{flex:1;min-width:0}',
    '.up-item .lb{font-weight:700;font-size:.88rem;color:var(--ink,#14213d)}',
    '.up-item.done .lb{color:var(--ok,#23906a);text-decoration:line-through}',
    '.up-item .sub{font-size:.74rem;color:var(--muted,#5b6b80);margin-top:2px}',
    '.up-item .go{background:var(--brand,#0e9a9a);color:#fff;border:0;padding:6px 12px;border-radius:8px;font-size:.78rem;font-weight:700;cursor:pointer;flex:none;font-family:inherit}',
    '.up-item .go:hover{opacity:.85}',
    '.up-item .go.prog{background:var(--prog,#c2410c)}',
    '.up-item .go.job{background:var(--job,#6c4ad6)}',
    '.up-item .go.gram{background:var(--gram,#7c3aed)}',
    '.up-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}',
    '.up-mini{padding:12px;background:var(--bg,#f0f4f4);border:1.5px solid var(--line,#cddada);border-radius:10px;cursor:pointer;transition:all .15s;text-align:start}',
    '.up-mini:hover{border-color:var(--brand,#0e9a9a);transform:translateY(-2px)}',
    '.up-mini.done{background:var(--ok-soft,#d8f1e6);border-color:var(--ok,#23906a)}',
    '.up-mini .t{font-weight:700;font-size:.85rem;color:var(--ink,#14213d);margin-bottom:3px}',
    '.up-mini.done .t{color:var(--ok,#23906a)}',
    '.up-mini .d{font-size:.72rem;color:var(--muted,#5b6b80)}',
    '.up-mini .chk{display:inline-block;font-size:.7rem;color:var(--ok,#23906a);font-weight:700;margin-top:4px}',
    '.up-progress{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--card,#fff);border:1px solid var(--line,#cddada);border-radius:14px}',
    '.up-progress .bar{flex:1;height:10px;background:var(--bg,#f0f4f4);border-radius:5px;overflow:hidden}',
    '.up-progress .bar i{display:block;height:100%;background:linear-gradient(90deg,var(--brand,#0e9a9a),var(--ok,#23906a));transition:width .3s;border-radius:5px}',
    '.up-progress .pct{font-weight:800;font-size:1rem;color:var(--brand,#0e9a9a);min-width:70px;text-align:center}',
    '.up-nav{display:flex;justify-content:space-between;gap:10px;margin-top:4px}',
    '.up-nav button{flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--line,#cddada);background:var(--card,#fff);color:var(--ink,#14213d);font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem}',
    '.up-nav button:disabled{opacity:.4;cursor:not-allowed}',
    '.up-nav button.next{background:var(--prog,#c2410c);color:#fff;border-color:var(--prog,#c2410c)}'
  ].join('\n');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // ============ Data ============
  var WEEK_THEMES = {
    1:{title:'پایه‌سازی',sub:'فعل to be · Present Simple · a/an/the'},
    2:{title:'درخواست و گذشته',sub:'Can/Could · Past Simple'},
    3:{title:'آینده و قوانین',sub:'Will/Going to · Should/Must'},
    4:{title:'حال کامل و نظر',sub:'Present Perfect · I think'},
    5:{title:'شرطی و داستان',sub:'First Conditional · Past Continuous'},
    6:{title:'مکالمه تلفنی',sub:'Could/Would · Modals'},
    7:{title:'حضوری و پیگیری',sub:'Meetings · Following up'},
    8:{title:'خودکارسازی',sub:'مرور · Passive · Reported'}
  };
  var DAY_FOCUS = {
    6:{title:'گزارش روزانه به ایلدار',tip:'r2-jmc-check · r2-meeting-well · r2-daily-multi'},
    0:{title:'پشتیبانی IT',tip:'m-printer · m-network · m-office'},
    1:{title:'درخواست اپروف',tip:'r2-monitor-approve · r2-denis-laptop-approve · r2-azat-handover'},
    2:{title:'پیگیری فاکتور و افراد',tip:'r2-hoda-followup · r2-hoda-pdf · r2-kord-phone'},
    3:{title:'مکالمه تلفنی',tip:'r2-popov-call · h-phone-in · h-phone-mgr'},
    4:{title:'حضوری با ایلدار',tip:'r-hall · r2-meeting-well · r2-artem-meeting'},
    5:{title:'مرور هفته',tip:'دفترچه رو بخون · اشتباهات رو بلند تکرار کن'}
  };

  // ============ Helpers ============
  function dayKey(){ return new Date().toDateString(); }
  function checksGet(){
    try{ return JSON.parse(localStorage.getItem('zy_dp_' + dayKey()) || '{}'); }
    catch(e){ return {}; }
  }
  function checksSet(c){
    try{ localStorage.setItem('zy_dp_' + dayKey(), JSON.stringify(c)); }
    catch(e){}
  }
  function taskDone(type, id){
    var k = type + ':' + id;
    return !!(window.prog.program && window.prog.program[k]);
  }
  function markTask(type, id){
    if(!window.prog.program) window.prog.program = {};
    var k = type + ':' + id;
    if(window.prog.program[k]){ delete window.prog.program[k]; }
    else { window.prog.program[k] = Date.now(); window.award(3); }
    window.saveProg();
  }
  function gramDone(id){ return !!(window.prog.grammar && window.prog.grammar[id]); }
  function findScenario(id){
    var i;
    for(i=0;i<window.JOB_SCENARIOS.length;i++) if(window.JOB_SCENARIOS[i].id===id) return window.JOB_SCENARIOS[i];
    for(i=0;i<(window.importedScenarios||[]).length;i++) if(window.importedScenarios[i].id===id) return window.importedScenarios[i];
    return null;
  }
  function findLessonUnit(l){
    for(var i=0;i<window.LEVELS.length;i++){
      if(window.LEVELS[i].id === l.level) return window.LEVELS[i].units[l.idx] || null;
    }
    return null;
  }

  // ============ Build HTML ============
  function buildHTML(){
    var now = new Date();
    var dayIdx = now.getDay();
    var w = window.curWeek || 1;
    var week = null;
    for(var i=0;i<window.PROGRAM.length;i++) if(window.PROGRAM[i].week===w){ week=window.PROGRAM[i]; break; }
    if(!week){ w=1; week=window.PROGRAM[0]; }
    var theme = WEEK_THEMES[w] || WEEK_THEMES[1];
    var focus = DAY_FOCUS[dayIdx] || DAY_FOCUS[6];
    var checks = checksGet();

    var h = '<div class="up-wrap">';

    // HEAD
    h += '<div class="up-head">';
    h += '<div class="top">';
    h += '<div class="date">📅 ' + now.toLocaleDateString('fa-IR', {weekday:'long', month:'long', day:'numeric'}) + '</div>';
    h += '<div class="wk">هفته ' + window.fa(w) + ' از ۸</div>';
    h += '</div>';
    h += '<div class="theme">🎯 ' + theme.title + '</div>';
    h += '<div class="sub">' + theme.sub + '</div>';
    h += '</div>';

    // FOCUS
    h += '<div class="up-focus">';
    h += '<div class="t">💡 تمرکز امروز</div>';
    h += '<div class="d"><b>' + focus.title + '</b><br>' + focus.tip + '</div>';
    h += '</div>';

    // WEEK PROGRESS
    var total = week.lessons.length + week.scenarios.length + (week.grammar?week.grammar.length:0);
    var done = 0;
    week.lessons.forEach(function(l){ if(taskDone('les', l.level+':'+l.idx)) done++; });
    week.scenarios.forEach(function(s){ if(taskDone('sc', s.id)) done++; });
    (week.grammar||[]).forEach(function(g){ if(gramDone(g)) done++; });
    var pct = total ? Math.round(done*100/total) : 0;
    h += '<div class="up-progress">';
    h += '<div class="bar"><i style="width:' + pct + '%"></i></div>';
    h += '<div class="pct">' + window.fa(pct) + '٪</div>';
    h += '</div>';

    // TODAY CHECKLIST
    h += '<div class="up-section">';
    h += '<div class="st"><span>📋 کارهای امروز</span><span class="badge">دستی</span></div>';
    var checklist = [
      {id:'c1', label:'صبح: ۱ درس از برنامه', sub:'از درس‌های زیر انتخاب کن', go:'#lessons', tag:''},
      {id:'c2', label:'صبح: ۵ سؤال جواب سریع', sub:'۷ ثانیه · حالت صدا', go:'speed', tag:'prog'},
      {id:'c3', label:'ظهر: مرور دفترچه', sub:'۵ دقیقه · بلند تکرار کن', go:'notes', tag:''},
      {id:'c4', label:'شب: ۱ درس دیگه', sub:'', go:'#lessons', tag:''},
      {id:'c5', label:'شب: ۲ سناریو از برنامه', sub:'از سناریوهای زیر', go:'#scenarios', tag:'job'},
      {id:'c6', label:'شب: ۱ session جواب سریع', sub:'۱۰ سؤال · ۷ ثانیه', go:'speed', tag:'prog'}
    ];
    checklist.forEach(function(it){
      var isDone = !!checks[it.id];
      h += '<div class="up-item' + (isDone?' done':'') + '" data-ck="' + it.id + '">';
      h += '<div class="ck" data-toggle="' + it.id + '">' + (isDone?'✓':'') + '</div>';
      h += '<div class="bd"><div class="lb">' + it.label + '</div>' + (it.sub ? '<div class="sub">' + it.sub + '</div>' : '') + '</div>';
      if(it.go && it.go !== '#' && it.go.indexOf('#') !== 0){
        h += '<button class="go ' + it.tag + '" data-go="' + it.go + '">برو</button>';
      }
      h += '</div>';
    });
    h += '</div>';

    // LESSONS
    h += '<div class="up-section" id="up-lessons">';
    h += '<div class="st"><span>📚 درس‌های این هفته</span><span class="badge">' + window.fa(week.lessons.length) + '</span></div>';
    h += '<div class="up-cards">';
    week.lessons.forEach(function(l){
      var u = findLessonUnit(l);
      if(!u) return;
      var d = taskDone('les', l.level+':'+l.idx);
      h += '<button class="up-mini' + (d?' done':'') + '" data-les="' + l.level + ':' + l.idx + '">';
      h += '<div class="t" dir="ltr">' + window.esc(u[0]) + '</div>';
      h += '<div class="d">' + window.esc(u[1]) + '</div>';
      h += '<div class="chk">' + (d?'✓ انجام شد':l.level + ' · کلیک کن') + '</div>';
      h += '</button>';
    });
    h += '</div></div>';

    // GRAMMAR
    if(week.grammar && week.grammar.length){
      h += '<div class="up-section">';
      h += '<div class="st"><span>📐 گرامر این هفته</span><span class="badge">' + window.fa(week.grammar.length) + '</span></div>';
      h += '<div class="up-cards">';
      week.grammar.forEach(function(gid){
        var gt = window.findGrammarTopic(gid);
        if(!gt) return;
        var d = gramDone(gid);
        h += '<button class="up-mini' + (d?' done':'') + '" data-gram="' + gid + '">';
        h += '<div class="t" dir="ltr">' + window.esc(gt.topic.title) + '</div>';
        h += '<div class="d">' + window.esc(gt.topic.titleFa) + ' · ' + window.esc(gt.topic.dur) + '</div>';
        h += '<div class="chk">' + (d?'✓ انجام شد':'کلیک کن') + '</div>';
        h += '</button>';
      });
      h += '</div></div>';
    }

    // SCENARIOS
    h += '<div class="up-section" id="up-scenarios">';
    h += '<div class="st"><span>💼 سناریوهای این هفته</span><span class="badge">' + window.fa(week.scenarios.length) + '</span></div>';
    h += '<div class="up-cards">';
    week.scenarios.forEach(function(sc){
      var s = findScenario(sc.id);
      if(!s) return;
      var d = taskDone('sc', s.id);
      h += '<button class="up-mini' + (d?' done':'') + '" data-sc="' + s.id + '">';
      h += '<div class="t">' + window.esc(s.title) + '</div>';
      h += '<div class="d">' + window.esc(s.desc || '') + '</div>';
      h += '<div class="chk">' + (d?'✓ انجام شد':s.roleFa + ' · کلیک کن') + '</div>';
      h += '</button>';
    });
    h += '</div></div>';

    // NAV
    h += '<div class="up-nav">';
    h += '<button id="upPrev"' + (w<=1?' disabled':'') + '>← هفته قبل</button>';
    h += '<button class="next" id="upNext"' + (w>=8?' disabled':'') + '>هفته بعد →</button>';
    h += '</div>';

    h += '</div>';
    return h;
  }

  // ============ Bind ============
  function bind(){
    var main = document.getElementById('main');
    if(!main) return;

    // checkbox toggle
    main.querySelectorAll('[data-toggle]').forEach(function(el){
      el.addEventListener('click', function(ev){
        ev.stopPropagation();
        var id = this.getAttribute('data-toggle');
        var c = checksGet();
        if(c[id]) delete c[id];
        else { c[id] = Date.now(); window.award(2); }
        checksSet(c);
        render();
      });
    });

    // go buttons
    main.querySelectorAll('[data-go]').forEach(function(el){
      el.addEventListener('click', function(ev){
        ev.stopPropagation();
        var go = this.getAttribute('data-go');
        if(go === 'speed') window.go('speed');
        else if(go === 'notes') window.go('notes');
        else if(go.charAt(0) === '#'){
          var t = document.querySelector(go.replace('#', '#up-'));
          if(t) t.scrollIntoView({behavior:'smooth'});
        }
      });
    });

    // lesson clicks
    main.querySelectorAll('[data-les]').forEach(function(el){
      el.addEventListener('click', function(){
        var parts = this.getAttribute('data-les').split(':');
        window.openLesson(parts[0], +parts[1]);
      });
    });

    // grammar clicks
    main.querySelectorAll('[data-gram]').forEach(function(el){
      el.addEventListener('click', function(){
        window.openGrammarTopic(this.getAttribute('data-gram'));
      });
    });

    // scenario clicks
    main.querySelectorAll('[data-sc]').forEach(function(el){
      el.addEventListener('click', function(){
        var id = this.getAttribute('data-sc');
        // تشخیص نوع: import یا JOB
        var isImport = (window.importedScenarios||[]).some(function(s){ return s.id===id; });
        if(isImport) window.startImportedScenario(id);
        else window.startJobScenario(id);
      });
    });

    // nav
    var pv = document.getElementById('upPrev');
    var nx = document.getElementById('upNext');
    if(pv) pv.addEventListener('click', function(){
      if(window.curWeek > 1){ window.curWeek--; render(); }
    });
    if(nx) nx.addEventListener('click', function(){
      if(window.curWeek < 8){ window.curWeek++; render(); }
    });
  }

  // ============ Render ============
  function render(){
    var main = document.getElementById('main');
    if(!main) return;
    main.innerHTML = buildHTML();
    bind();
    window.scrollTo(0, 0);
  }

  // ============ Override renderProgram ============
  var _orig = window.renderProgram;
  window.renderProgram = function(){
    // ذخیره curWeek قبلی
    render();
  };

  console.log('[Unified Plan] loaded successfully');
})();
