'use strict';
/* ============ UNIFIED PLAN v2 ============ */
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
    '.up-focus .d{font-size:.85rem;color:var(--ink,#14213d);line-height:1.7}',
    '.up-focus .note{font-size:.72rem;color:var(--muted,#5b6b80);margin-top:6px;font-style:italic}',
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
    '.up-item .go.gram{background:#7c3aed}',
    '.up-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px}',
    '.up-mini{padding:12px;background:var(--bg,#f0f4f4);border:1.5px solid var(--line,#cddada);border-radius:10px;cursor:pointer;transition:all .15s;text-align:start;font-family:inherit}',
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
    '.up-nav button.next{background:var(--prog,#c2410c);color:#fff;border-color:var(--prog,#c2410c)}',
    '.up-hint{padding:10px 14px;background:var(--brand-soft,#d5efef);border:1px dashed var(--brand,#0e9a9a);border-radius:10px;font-size:.78rem;color:var(--brand,#0e9a9a);line-height:1.6}'
  ].join('\n');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // ============ Week Info (با سطح) ============
  var WEEK_INFO = {
    1:{title:'پایه‌سازی', sub:'فعل to be · Present Simple · a/an/the', level:'A1'},
    2:{title:'درخواست و گذشته', sub:'Can/Could · Past Simple', level:'A2'},
    3:{title:'آینده و قوانین', sub:'Will/Going to · Should/Must', level:'A2'},
    4:{title:'حال کامل و نظر', sub:'Present Perfect · I think', level:'B1'},
    5:{title:'شرطی و داستان', sub:'First Conditional · Past Continuous', level:'B1'},
    6:{title:'مکالمه تلفنی', sub:'Could/Would · Modals', level:'B2'},
    7:{title:'حضوری و پیگیری', sub:'Meetings · Following up', level:'B2'},
    8:{title:'خودکارسازی', sub:'مرور · Passive · Reported', level:'B2'}
  };

  // ============ Day Focus (بر اساس روز ایرانی) ============
  // شنبه=0، یکشنبه=1، دوشنبه=2، سه‌شنبه=3، چهارشنبه=4، پنجشنبه=5، جمعه=6
  var DAY_FOCUS = {
    0:{title:'گزارش روزانه به ایلدار', tip:'r2-jmc-check · r2-meeting-well · r2-daily-multi'},
    1:{title:'پشتیبانی IT', tip:'m-printer · m-network · m-office'},
    2:{title:'درخواست اپروف', tip:'r2-monitor-approve · r2-denis-laptop-approve · r2-azat-handover'},
    3:{title:'پیگیری فاکتور و افراد', tip:'r2-hoda-followup · r2-hoda-pdf · r2-kord-phone'},
    4:{title:'مکالمه تلفنی', tip:'r2-popov-call · h-phone-in · h-phone-mgr'},
    5:{title:'حضوری با ایلدار', tip:'r-hall · r2-meeting-well · r2-artem-meeting'},
    6:{title:'مرور هفته', tip:'دفترچه رو بخون · اشتباهات رو بلند تکرار کن'}
  };

  // ============ Speed Filter بر اساس سطح ============
  var SPEED_FILTER_BY_LEVEL = {
    'A1': ['تأیید', 'موجودی'],
    'A2': ['تأیید', 'موجودی', 'پشتیبانی', 'پیگیری'],
    'B1': ['پشتیبانی', 'پیگیری', 'توضیح', 'گزارش', 'جلسه'],
    'B2': null
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

  // ============ Iran Day Index ============
  // شنبه=0، یکشنبه=1، ...، جمعه=6
  function getIranDay(){
    var d = new Date().getDay(); // 0=Sun, 6=Sat
    return (d + 1) % 7;
  }

  // ============ Rotation ============
  function rotate(arr, dayIdx, offset){
    if(!arr || !arr.length) return null;
    return arr[(dayIdx + (offset||0)) % arr.length];
  }

  function getTodayLesson(week, offset){
    return rotate(week.lessons, getIranDay(), offset);
  }
  function getTodayScenario(week, offset){
    if(!week.scenarios || !week.scenarios.length) return null;
    var day = getIranDay();
    var perDay = 2;
    return week.scenarios[(day * perDay + (offset || 0)) % week.scenarios.length];
  }
  function getTodayGrammar(week){
    if(!week.grammar || !week.grammar.length) return null;
    return rotate(week.grammar, getIranDay(), 0);
  }

  // ============ Speed Integration ============
  function goToSpeed(count, week){
    var info = WEEK_INFO[week.week] || WEEK_INFO[1];
    var cats = SPEED_FILTER_BY_LEVEL[info.level];
    window.speedActiveCats = cats; // null → همه
    window.speedQuestionCount = count;
    window.go('speed');
  }

  // ============ Build HTML ============
  function buildHTML(){
    var now = new Date();
    var iranDay = getIranDay();
    var w = window.curWeek || 1;
    var week = null;
    for(var i=0;i<window.PROGRAM.length;i++) if(window.PROGRAM[i].week===w){ week=window.PROGRAM[i]; break; }
    if(!week){ w=1; week=window.PROGRAM[0]; }
    var info = WEEK_INFO[w] || WEEK_INFO[1];
    var focus = DAY_FOCUS[iranDay] || DAY_FOCUS[0];
    var checks = checksGet();

    // Rotation
    var lessonAM = getTodayLesson(week, 0);
    var lessonPM = getTodayLesson(week, week.lessons.length > 1 ? 1 : 0);
    var scenAM = getTodayScenario(week, 0);
    var scenPM = getTodayScenario(week, week.scenarios.length > 1 ? 1 : 0);
    var gramToday = getTodayGrammar(week);

    // Week progress
    var total = week.lessons.length + week.scenarios.length + (week.grammar?week.grammar.length:0);
    var done = 0;
    week.lessons.forEach(function(l){ if(taskDone('les', l.level+':'+l.idx)) done++; });
    week.scenarios.forEach(function(s){ if(taskDone('sc', s.id)) done++; });
    (week.grammar||[]).forEach(function(g){ if(gramDone(g)) done++; });
    var pct = total ? Math.round(done*100/total) : 0;

    var h = '<div class="up-wrap">';

    // === HEAD ===
    h += '<div class="up-head">';
    h += '<div class="top">';
    h += '<div class="date">📅 ' + now.toLocaleDateString('fa-IR', {weekday:'long', month:'long', day:'numeric'}) + '</div>';
    h += '<div class="wk">هفته ' + window.fa(w) + ' از ۸</div>';
    h += '</div>';
    h += '<div class="theme">🎯 ' + info.title + '</div>';
    h += '<div class="sub">' + info.sub + '</div>';
    h += '</div>';

    // === FOCUS ===
    h += '<div class="up-focus">';
    h += '<div class="t">💡 تمرکز امروز</div>';
    h += '<div class="d"><b>' + focus.title + '</b><br>' + focus.tip + '</div>';
    h += '<div class="note">این یه پیشنهاده. کارهای اصلی امروز رو در چک‌لیست زیر ببین.</div>';
    h += '</div>';

    // === WEEK PROGRESS ===
    h += '<div class="up-progress">';
    h += '<div class="bar"><i style="width:' + pct + '%"></i></div>';
    h += '<div class="pct">' + window.fa(pct) + '٪</div>';
    h += '</div>';

    // === CHECKLIST ===
    h += '<div class="up-section">';
    h += '<div class="st"><span>📋 کارهای امروز</span><span class="badge">' + info.level + '</span></div>';

    var checklist = [];

    // درس صبح
    if(lessonAM){
      var uAM = findLessonUnit(lessonAM);
      if(uAM){
        checklist.push({
          id: 'c-lam',
          label: 'صبح: ' + uAM[0],
          sub: lessonAM.level + ' · ' + uAM[1],
          go: 'les:' + lessonAM.level + ':' + lessonAM.idx,
          tag: 'prog'
        });
      }
    }

    // speed صبح
    checklist.push({
      id: 'c-sam',
      label: 'صبح: ۵ سؤال جواب سریع',
      sub: 'سطح ' + info.level + ' · ۷ ثانیه · حالت صدا',
      go: 'speed:5',
      tag: 'prog'
    });

    // دفترچه
    checklist.push({
      id: 'c-note',
      label: 'ظهر: مرور دفترچه',
      sub: '۵ دقیقه · اشتباهات رو بلند تکرار کن',
      go: 'notes',
      tag: ''
    });

    // گرامر امروز
    if(gramToday){
      var gt = window.findGrammarTopic(gramToday);
      if(gt){
        checklist.push({
          id: 'c-gram',
          label: 'گرامر: ' + gt.topic.title,
          sub: gt.topic.titleFa + ' · ' + gt.topic.dur,
          go: 'gram:' + gramToday,
          tag: 'gram'
        });
      }
    }

    // درس شب
    if(lessonPM){
      var uPM = findLessonUnit(lessonPM);
      if(uPM){
        checklist.push({
          id: 'c-lpm',
          label: 'شب: ' + uPM[0],
          sub: lessonPM.level + ' · ' + uPM[1],
          go: 'les:' + lessonPM.level + ':' + lessonPM.idx,
          tag: 'prog'
        });
      }
    }

    // سناریو صبح
    if(scenAM){
      var sAM = findScenario(scenAM.id);
      if(sAM){
        checklist.push({
          id: 'c-scm',
          label: 'سناریو: ' + sAM.title,
          sub: (sAM.roleFa||'') + ' · ' + (sAM.desc||''),
          go: 'sc:' + sAM.id,
          tag: 'job'
        });
      }
    }

    // سناریو شب
    if(scenPM){
      var sPM = findScenario(scenPM.id);
      if(sPM){
        checklist.push({
          id: 'c-scp',
          label: 'سناریو: ' + sPM.title,
          sub: (sPM.roleFa||'') + ' · ' + (sPM.desc||''),
          go: 'sc:' + sPM.id,
          tag: 'job'
        });
      }
    }

    // speed شب
    checklist.push({
      id: 'c-sem',
      label: 'شب: ۱ session جواب سریع',
      sub: '۱۰ سؤال · سطح ' + info.level,
      go: 'speed:10',
      tag: 'prog'
    });

    checklist.forEach(function(it){
      var isDone = !!checks[it.id];
      h += '<div class="up-item' + (isDone?' done':'') + '" data-ck="' + it.id + '">';
      h += '<div class="ck" data-toggle="' + it.id + '">' + (isDone?'✓':'') + '</div>';
      h += '<div class="bd"><div class="lb">' + window.esc(it.label) + '</div>' + (it.sub ? '<div class="sub">' + window.esc(it.sub) + '</div>' : '') + '</div>';
      h += '<button class="go ' + it.tag + '" data-go="' + it.go + '">برو</button>';
      h += '</div>';
    });

    h += '</div>';

    // === Hint ===
    h += '<div class="up-hint">';
    h += '💡 <b>هر کار رو که انجام دادی، تیک بزن</b> (روی دایره‌ی کنارش). تیک‌ها در پایان روز خودکار صفر می‌شن.';
    h += '</div>';

    // === LESSONS PREVIEW ===
    h += '<div class="up-section">';
    h += '<div class="st"><span>📚 درس‌های هفته</span><span class="badge">' + window.fa(week.lessons.length) + '</span></div>';
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

    // === GRAMMAR PREVIEW ===
    if(week.grammar && week.grammar.length){
      h += '<div class="up-section">';
      h += '<div class="st"><span>📐 گرامرهای هفته</span><span class="badge">' + window.fa(week.grammar.length) + '</span></div>';
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

    // === SCENARIOS PREVIEW ===
    h += '<div class="up-section">';
    h += '<div class="st"><span>💼 سناریوهای هفته</span><span class="badge">' + window.fa(week.scenarios.length) + '</span></div>';
    h += '<div class="up-cards">';
    week.scenarios.forEach(function(sc){
      var s = findScenario(sc.id);
      if(!s) return;
      var d = taskDone('sc', s.id);
      h += '<button class="up-mini' + (d?' done':'') + '" data-sc="' + s.id + '">';
      h += '<div class="t">' + window.esc(s.title) + '</div>';
      h += '<div class="d">' + window.esc(s.desc || '') + '</div>';
      h += '<div class="chk">' + (d?'✓ انجام شد':(s.roleFa||'') + ' · کلیک کن') + '</div>';
      h += '</button>';
    });
    h += '</div></div>';

    // === NAV ===
    h += '<div class="up-nav">';
    h += '<button id="upPrev"' + (w<=1?' disabled':'') + '>← هفته قبل</button>';
    h += '<button class="next" id="upNext"' + (w>=8?' disabled':'') + '>هفته بعد →</button>';
    h += '</div>';

    h += '</div>';
    return h;
  }

  // ============ Handle Go ============
  function handleGo(go){
    if(!go) return;
    if(go === 'notes'){ window.go('notes'); return; }
    if(go.indexOf('speed:') === 0){
      var cnt = parseInt(go.split(':')[1]) || 10;
      var w = window.curWeek || 1;
      var week = null;
      for(var i=0;i<window.PROGRAM.length;i++) if(window.PROGRAM[i].week===w){ week=window.PROGRAM[i]; break; }
      if(!week) week = window.PROGRAM[0];
      goToSpeed(cnt, week);
      return;
    }
    if(go.indexOf('les:') === 0){
      var p = go.split(':');
      window.openLesson(p[1], +p[2]);
      return;
    }
    if(go.indexOf('gram:') === 0){
      window.openGrammarTopic(go.slice(5));
      return;
    }
    if(go.indexOf('sc:') === 0){
      var id = go.slice(3);
      var isImport = (window.importedScenarios||[]).some(function(s){ return s.id===id; });
      if(isImport) window.startImportedScenario(id);
      else window.startJobScenario(id);
      return;
    }
  }

  // ============ Bind ============
  function bind(){
    var main = document.getElementById('main');
    if(!main) return;

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

    main.querySelectorAll('[data-go]').forEach(function(el){
      el.addEventListener('click', function(ev){
        ev.stopPropagation();
        handleGo(this.getAttribute('data-go'));
      });
    });

    main.querySelectorAll('[data-les]').forEach(function(el){
      el.addEventListener('click', function(){
        var parts = this.getAttribute('data-les').split(':');
        if(!window.prog.program) window.prog.program = {};
        window.prog.program.lastFrom = 'program';
        if(window.saveProg) window.saveProg();
        window.openLesson(parts[0], +parts[1]);
      });
    });

    main.querySelectorAll('[data-gram]').forEach(function(el){
      el.addEventListener('click', function(){
        window.openGrammarTopic(this.getAttribute('data-gram'));
      });
    });

    main.querySelectorAll('[data-sc]').forEach(function(el){
      el.addEventListener('click', function(){
        var id = this.getAttribute('data-sc');
        if(!window.prog.program) window.prog.program = {};
        window.prog.program.lastFrom = 'program';
        if(window.saveProg) window.saveProg();
        var isImport = (window.importedScenarios||[]).some(function(s){ return s.id===id; });
        if(isImport) window.startImportedScenario(id);
        else window.startJobScenario(id);
      });
    });

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
  window.renderProgram = function(){ render(); };

  // ============ FIX: لود اولیه ============
  // بعد از بارگذاری app.js، اگه view='program' بود، رندر کن
  setTimeout(function(){
    if(window.view === 'program'){
      render();
    }
  }, 300);

  console.log('[Unified Plan v2] loaded successfully');
})();
