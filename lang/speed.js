'use strict';
/* ============ SPEED MODE MODULE ============ */
(function(){
  if(window.__speedModuleLoaded) return;
  window.__speedModuleLoaded = true;
  
  // Override render() and go() for speed view
  var _origRender = window.render;
  window.render = function(){
    if(window.view === 'speed') return window.renderSpeed();
    return _origRender();
  };
  var _origGo = window.go;
  window.go = function(v){
    _origGo(v);
    window.view = v;
    if(v === 'speed') window.renderSpeed();
  };
  // ============ 1. Inject CSS ============
  var css = [
    '.speed-setup{display:grid;gap:16px;max-width:600px;margin:0 auto}',
    '.speed-hero{text-align:center;padding:24px 16px;background:linear-gradient(135deg,var(--prog,#c2410c),#a83a00);color:#fff;border-radius:22px;margin-bottom:16px}',
    '.speed-hero h1{color:#fff;margin:0 0 6px;font-size:1.5rem}',
    '.speed-hero p{margin:0;opacity:.9;font-size:.95rem;color:#fff}',
    '.speed-options{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}',
    '@media(max-width:500px){.speed-options{grid-template-columns:1fr}}',
    '.speed-opt{padding:14px;border-radius:14px;background:var(--card,#fff);border:2px solid var(--line,#cddada);text-align:center;cursor:pointer;transition:all .15s;color:var(--ink,#14213d)}',
    '.speed-opt:hover{border-color:var(--prog,#c2410c)}',
    '.speed-opt.on{background:var(--prog-soft,#ffedd5);border-color:var(--prog,#c2410c);color:var(--prog,#c2410c)}',
    '.speed-opt b{display:block;font-size:1.3rem;font-family:Lexend,sans-serif;margin-bottom:2px}',
    '.speed-opt small{font-size:.78rem;opacity:.8}',
    '.speed-play{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;padding:20px 0;position:relative}',
    '.speed-timer{position:relative;width:180px;height:180px;margin:0 auto 24px}',
    '.speed-timer svg{transform:rotate(-90deg);width:100%;height:100%}',
    '.speed-timer .track{fill:none;stroke:var(--line,#cddada);stroke-width:10}',
    '.speed-timer .prog{fill:none;stroke:var(--ok,#23906a);stroke-width:10;stroke-linecap:round;transition:stroke-dashoffset .3s linear, stroke .3s}',
    '.speed-timer.warn .prog{stroke:var(--accent,#f2b134)}',
    '.speed-timer.danger .prog{stroke:var(--bad,#d64550)}',
    '.speed-timer .num{position:absolute;inset:0;display:grid;place-items:center;font:800 3rem Lexend,sans-serif;color:var(--ink,#14213d)}',
    '.speed-timer.warn .num{color:var(--accent,#f2b134)}',
    '.speed-timer.danger .num{color:var(--bad,#d64550);animation:pulse .5s infinite}',
    '.speed-question{background:var(--card,#fff);border:1px solid var(--line,#cddada);border-radius:20px;padding:26px 20px;text-align:center;max-width:560px;width:100%;margin-bottom:20px;min-height:100px;display:flex;align-items:center;justify-content:center;color:var(--ink,#14213d)}',
    '.speed-question .q-en{font:600 1.3rem Lexend,sans-serif;line-height:1.5;direction:ltr;color:var(--ink,#14213d)}',
    '.speed-question .q-role{font-size:.8rem;color:var(--muted,#5b6b80);margin-bottom:10px}',
    '.speed-question .q-hint{font-size:.85rem;color:var(--muted,#5b6b80);margin-top:12px;border-top:1px dashed var(--line,#cddada);padding-top:10px}',
    '.speed-mic-wrap{display:flex;flex-direction:column;align-items:center;gap:12px;width:100%;max-width:560px}',
    '.speed-big-mic{width:90px;height:90px;border-radius:50%;background:var(--prog,#c2410c);color:#fff;border:0;cursor:pointer;display:grid;place-items:center;font-size:2rem;box-shadow:0 8px 24px rgba(194,65,12,.3);transition:all .15s}',
    '.speed-big-mic:active{transform:scale(.95)}',
    '.speed-big-mic.rec{background:var(--bad,#d64550);animation:ring 1.4s infinite}',
    '.speed-big-mic:disabled{opacity:.5;cursor:not-allowed}',
    '.speed-transcript{font-size:1.1rem;font-family:Lexend,sans-serif;direction:ltr;text-align:center;color:var(--muted,#5b6b80);min-height:1.5em;padding:8px}',
    '.speed-transcript.has-text{color:var(--ink,#14213d)}',
    '.speed-type-row{display:flex;gap:8px;width:100%}',
    '.speed-type-row input{flex:1;padding:12px 16px;border-radius:999px;border:1.5px solid var(--line,#cddada);font-family:Lexend,sans-serif;direction:ltr;background:var(--card,#fff);color:var(--ink,#14213d)}',
    '.speed-type-row button{padding:0 20px;border-radius:999px;background:var(--ink,#14213d);color:var(--bg,#e9f1f1);font-weight:700;border:0;cursor:pointer}',
    '.speed-result{background:var(--card,#fff);border:1px solid var(--line,#cddada);border-radius:20px;padding:20px;max-width:600px;width:100%;margin-top:16px;color:var(--ink,#14213d)}',
    '.speed-result h3{margin:0 0 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;color:var(--ink,#14213d)}',
    '.speed-result .time-badge{display:inline-block;padding:3px 12px;border-radius:999px;font-weight:700;font-size:.85rem}',
    '.speed-result .time-badge.great{background:var(--ok-soft,#d8f1e6);color:var(--ok,#23906a)}',
    '.speed-result .time-badge.ok{background:var(--accent-soft,#fdf0d0);color:#a86d00}',
    '.speed-result .time-badge.bad{background:var(--bad-soft,#fbe0e2);color:var(--bad,#d64550)}',
    '.speed-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0;width:100%;max-width:600px}',
    '.speed-stats .st{text-align:center;padding:10px;background:var(--card,#fff);border-radius:12px;border:1px solid var(--line,#cddada);color:var(--ink,#14213d)}',
    '.speed-stats .st b{display:block;font-size:1.3rem;font-family:Lexend,sans-serif;color:var(--prog,#c2410c)}',
    '.speed-stats .st small{font-size:.72rem;color:var(--muted,#5b6b80)}',
    '.speed-skip{background:transparent;border:1.5px solid var(--line,#cddada);color:var(--muted,#5b6b80);padding:8px 20px;border-radius:999px;font-size:.88rem;cursor:pointer;margin-top:12px}',
    '.speed-skip:hover{border-color:var(--bad,#d64550);color:var(--bad,#d64550)}',
    '@media(prefers-color-scheme:dark){',
    '.speed-timer .num{color:var(--ink,#eaf0f7)}',
    '.speed-question .q-en{color:var(--ink,#eaf0f7)}',
    '.speed-result .time-badge.ok{color:#fbbf24}',
    '}'
  ].join('\n');
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ============ 2. Inject tab button ============
  function injectTab(){
    var tabsNav = document.querySelector('.tabs');
    if(!tabsNav) return;
    if(tabsNav.querySelector('[data-v="speed"]')) return;
    var tabBtn = document.createElement('button');
    tabBtn.className = 'tab';
    tabBtn.setAttribute('data-v', 'speed');
    tabBtn.setAttribute('type', 'button');
    tabBtn.innerHTML = '<svg class="ic"><use href="#i-light"/></svg>جواب سریع';
    tabBtn.addEventListener('click', function(){ window.go('speed'); });
    var talkTab = tabsNav.querySelector('[data-v="talk"]');
    if(talkTab && talkTab.nextSibling){
      tabsNav.insertBefore(tabBtn, talkTab.nextSibling);
    } else {
      tabsNav.appendChild(tabBtn);
    }
  }
  injectTab();
  setTimeout(injectTab, 500);

  // ============ 3. Speed questions ============
  var SPEED_QUESTIONS = [
    {q:"Please hand this to Milad.",cat:"تأیید",role:"Manager",hint:"تأیید کن کوتاه",sample:"Understood. I'll take it to Milad."},
    {q:"Did you send the report?",cat:"تأیید",role:"Manager",hint:"یا بله کوتاه یا پیگیری",sample:"Yes, I sent it this morning."},
    {q:"Is the JMC preparation good?",cat:"تأیید",role:"Manager",hint:"کوتاه تأیید کن",sample:"Yes, everything is going well."},
    {q:"Will you be at the office tomorrow?",cat:"تأیید",role:"Manager",hint:"بله/نه + دلیل کوتاه",sample:"Yes, I'll be at the office tomorrow."},
    {q:"Is your issue fixed?",cat:"تأیید",role:"User",hint:"کوتاه",sample:"Yes, everything is working now."},
    {q:"Do you have Kord's number?",cat:"تأیید",role:"Manager",hint:"صادقانه کوتاه",sample:"No, I don't have it."},
    {q:"How many laptops do we have?",cat:"موجودی",role:"Manager",hint:"عدد + نوع",sample:"We have five HP laptops."},
    {q:"How many spare keyboards?",cat:"موجودی",role:"Manager",hint:"عدد + اسم",sample:"We have four spare keyboards."},
    {q:"Any spare monitors?",cat:"موجودی",role:"Manager",hint:"بله/نه + عدد",sample:"Yes, we have two spare monitors."},
    {q:"Any update on the invoices?",cat:"پیگیری",role:"Manager",hint:"وضعیت فعلی + قدم بعدی",sample:"Yes, Hoda sent the PDFs. I'll review them with Masoumeh."},
    {q:"Did you follow up with Hoda?",cat:"پیگیری",role:"Manager",hint:"بله + نتیجه",sample:"Yes, I spoke with her today. She'll send them tomorrow."},
    {q:"Where is Mr. Raei-Tabar?",cat:"پیگیری",role:"Manager",hint:"نمی‌دونم یا می‌دونم",sample:"He's at the Anahita office, online on TrueConf."},
    {q:"Any news on the contract?",cat:"پیگیری",role:"Manager",hint:"کوتاه",sample:"Yes, I received it from Milad. Kord will pick it up."},
    {q:"My printer is not working.",cat:"پشتیبانی",role:"User",hint:"سؤال تشخیصی",sample:"Is it turned on? Is there paper?"},
    {q:"I have no internet.",cat:"پشتیبانی",role:"User",hint:"Wi-Fi یا کابل؟",sample:"Are you on Wi-Fi or cable?"},
    {q:"My laptop is very slow.",cat:"پشتیبانی",role:"User",hint:"از کی شروع شد؟",sample:"When did it start? Let me check."},
    {q:"Word keeps crashing.",cat:"پشتیبانی",role:"User",hint:"کدوم فایل؟",sample:"Which file? Let me check."},
    {q:"My VPN is not connecting.",cat:"پشتیبانی",role:"User",hint:"شبکه داخلی؟",sample:"Are you on the office network?"},
    {q:"Why is the setup delayed?",cat:"توضیح",role:"Manager",hint:"عذرخواهی + دلیل + ETA",sample:"Sorry. The laptops arrived late. I'll finish by tomorrow."},
    {q:"What was the issue?",cat:"توضیح",role:"Manager",hint:"مشکل + راه‌حل",sample:"A paper jam. I cleared it and tested."},
    {q:"How did the meeting go?",cat:"توضیح",role:"Manager",hint:"کوتاه + نتیجه",sample:"It went well. Everything finished without issues."},
    {q:"Any updates for me today?",cat:"گزارش",role:"Manager",hint:"۲-۳ خبر کوتاه",sample:"Yes, the printer issue is fixed. I'm now working on two laptops."},
    {q:"Mr. Mostaghim wants a new monitor. OK?",cat:"تأیید",role:"Manager",hint:"تأیید بخواه",sample:"Do you approve giving him a Xiaomi monitor?"},
    {q:"Ali needs a new laptop.",cat:"تأیید",role:"User",hint:"با مدیر چک می‌کنم",sample:"Let me check with Ildar. What's wrong with his current one?"},
    {q:"Can I get a new keyboard?",cat:"تأیید",role:"User",hint:"تأیید + جزئیات",sample:"Sure. Let me check with my manager and get back to you."},
    {q:"Hello? Armin? Can you hear me?",cat:"تلفنی",role:"Colleague",hint:"بله + کمک",sample:"Yes, I can hear you. How can I help?"},
    {q:"Why didn't you answer my call?",cat:"تلفنی",role:"Colleague",hint:"عذرخواهی + توضیح",sample:"Sorry, I couldn't answer. Could you send me a text message?"},
    {q:"I'm at the entrance. Where are you?",cat:"تلفنی",role:"Colleague",hint:"میام دنبالت",sample:"I'll come to the entrance now."},
    {q:"Can you cooperate with Denis on the E&C website?",cat:"همکاری",role:"Manager",hint:"قبول + نقطه‌ی شروع",sample:"Sure. I'll work with Denis. I didn't have access before either."},
    {q:"Ask Hesam. Kaspersky check. Need list of serials.",cat:"همکاری",role:"Manager",hint:"قبول + نگرانی فنی",sample:"Got it. One concern - could Kaspersky remove our software cracks?"},
    {q:"Need you to be at the meeting at 3.",cat:"جلسه",role:"Manager",hint:"تأیید یا پیشنهاد جایگزین",sample:"Yes, 3 works for me."},
    {q:"This is urgent, I need it now.",cat:"اضطراری",role:"Manager",hint:"قبول + ETA کوتاه",sample:"On it now. I'll have it ready in 10 minutes."},
    {q:"Can you stay late today?",cat:"اضطراری",role:"Manager",hint:"بله + شرط",sample:"Yes, no problem. How late do you need me?"},
    {q:"The server is down. Everyone is stuck.",cat:"اضطراری",role:"Colleague",hint:"اولویت + شروع",sample:"I'm on it. Let me check the server now."}
  ];

  // ============ 4. State ============
  var speed = {
    phase: 'setup',
    seconds: 7,
    remaining: 7,
    timerId: null,
    question: null,
    inputMode: 'voice',
    startTime: 0,
    responseTime: 0,
    lastResult: null,
    busy: false,
    session: null
  };
  window.speed = speed;

  // ============ 5. Stats ============
  function ensureStats(){
    if(!window.prog.speed || typeof window.prog.speed !== 'object'){
      window.prog.speed = {sessions:0, totalResponses:0, totalTime:0, bestTime:999, correctCount:0, history:[]};
    }
  }
  function saveStats(rt, wasCorrect){
    ensureStats();
    var s = window.prog.speed;
    s.totalResponses++;
    s.totalTime += rt;
    if(rt < s.bestTime) s.bestTime = rt;
    if(wasCorrect) s.correctCount++;
    s.history.unshift({t:rt, c:wasCorrect, at:Date.now()});
    s.history = s.history.slice(0, 50);
    window.saveProg();
  }
  function getStats(){
    var s = window.prog.speed;
    if(!s) return {sessions:0, totalResponses:0, avgTime:0, bestTime:0};
    return {
      sessions: s.sessions || 0,
      totalResponses: s.totalResponses || 0,
      avgTime: s.totalResponses ? (s.totalTime / s.totalResponses).toFixed(1) : 0,
      bestTime: s.bestTime === 999 ? 0 : s.bestTime.toFixed(1)
    };
  }

  // ============ 6. Render ============
  function renderSpeed(){
    if(speed.phase === 'setup') return renderSetup();
    if(speed.phase === 'play') return renderPlay();
    if(speed.phase === 'result') return renderResult();
    renderSetup();
  }
  window.renderSpeed = renderSpeed;

  function renderSetup(){
    var stats = getStats();
    var h = '<div class="speed-setup">';
    h += '<div class="speed-hero"><h1>⚡ جواب سریع</h1><p>تحت فشار، بدون فکر کردن، بلند جواب بده</p></div>';
    if(stats.totalResponses > 0){
      h += '<div class="speed-stats">';
      h += '<div class="st"><b>' + window.fa(stats.avgTime) + '</b><small>میانگین (ثانیه)</small></div>';
      h += '<div class="st"><b>' + window.fa(stats.bestTime) + '</b><small>بهترین</small></div>';
      h += '<div class="st"><b>' + window.fa(stats.totalResponses) + '</b><small>مجموع</small></div>';
      h += '</div>';
    }
    h += '<div class="card">';
    h += '<div><b>چند ثانیه فرصت داری؟</b><div class="sub" style="font-size:.85rem">هر چی کمتر، فشار بیشتر.</div></div>';
    h += '<div class="speed-options">';
    h += '<button type="button" class="speed-opt' + (speed.seconds===10?' on':'') + '" data-sec="10"><b>۱۰</b><small>راحت</small></button>';
    h += '<button type="button" class="speed-opt' + (speed.seconds===7?' on':'') + '" data-sec="7"><b>۷</b><small>واقعی</small></button>';
    h += '<button type="button" class="speed-opt' + (speed.seconds===5?' on':'') + '" data-sec="5"><b>۵</b><small>چالشی</small></button>';
    h += '</div></div>';
    h += '<div class="card">';
    h += '<div><b>حالت ورودی</b></div>';
    h += '<div class="speed-options">';
    h += '<button type="button" class="speed-opt' + (speed.inputMode==='voice'?' on':'') + '" data-mode="voice"><b>🎤</b><small>صدا</small></button>';
    h += '<button type="button" class="speed-opt' + (speed.inputMode==='type'?' on':'') + '" data-mode="type"><b>⌨️</b><small>تایپ</small></button>';
    h += '<button type="button" class="speed-opt' + (speed.inputMode==='both'?' on':'') + '" data-mode="both"><b>🔀</b><small>هر دو</small></button>';
    h += '</div>';
    h += '<p class="sub" style="font-size:.82rem">🎯 توصیه: <b>صدا</b> رو انتخاب کن.</p>';
    h += '</div>';
    h += '<button type="button" class="btn prog" id="speedStart" style="padding:16px;font-size:1.05rem">🚀 شروع تمرین (۱۰ سؤال)</button>';
    h += '</div>';
    document.getElementById('main').innerHTML = h;

    var opts = document.querySelectorAll('[data-sec]');
    for(var i=0;i<opts.length;i++){
      opts[i].addEventListener('click', function(){
        speed.seconds = +this.getAttribute('data-sec');
        renderSetup();
      });
    }
    var modes = document.querySelectorAll('[data-mode]');
    for(var j=0;j<modes.length;j++){
      modes[j].addEventListener('click', function(){
        speed.inputMode = this.getAttribute('data-mode');
        renderSetup();
      });
    }
    var sb = document.getElementById('speedStart');
    if(sb) sb.addEventListener('click', startSpeedSession);
  }

  // ============ 7. Session ============
function startSpeedSession(){
  speed.session = {questions: [], idx: 0};
  var pool = SPEED_QUESTIONS.slice();

  // فیلتر بر اساس سطح هفته
  if(window.speedActiveCats && window.speedActiveCats.length){
    var filtered = pool.filter(function(q){
      return window.speedActiveCats.indexOf(q.cat) >= 0;
    });
    if(filtered.length >= 5) pool = filtered;
  }

  var count = window.speedQuestionCount || 10;
  for(var i=0;i<count && pool.length;i++){
    var j = Math.floor(Math.random()*pool.length);
    speed.session.questions.push(pool[j]);
    pool.splice(j, 1);
  }
  speed.session.idx = 0;
  speed.phase = 'play';
  nextQuestion();

  // ریست بعد از استفاده
  window.speedActiveCats = null;
  window.speedQuestionCount = null;
}
  function nextQuestion(){
    if(!speed.session) return;
    if(speed.session.idx >= speed.session.questions.length){
      return endSession();
    }
    speed.question = speed.session.questions[speed.session.idx];
    speed.effectiveSec = (speed.inputMode === 'type' || speed.inputMode === 'both') ? Math.max(15, Math.round(speed.seconds * 2.5)) : speed.seconds; speed.remaining = speed.effectiveSec;
    speed.startTime = Date.now();
    speed.lastResult = null;
    speed.busy = false;
    renderPlay();
    startTimer();
  }

  // ============ 8. Timer ============
  function startTimer(){
    if(speed.timerId) clearInterval(speed.timerId);
    speed.timerId = setInterval(function(){
      speed.remaining -= 0.1;
      if(speed.remaining <= 0){
        speed.remaining = 0;
        clearInterval(speed.timerId);
        speed.timerId = null;
        onTimeout();
        return;
      }
      updateTimerUI();
    }, 100);
    updateTimerUI();
  }
  function updateTimerUI(){
    var timerEl = document.querySelector('.speed-timer');
    if(!timerEl) return;
    var numEl = timerEl.querySelector('.num');
    var progEl = timerEl.querySelector('.prog');
    if(!numEl || !progEl) return;
    numEl.textContent = Math.ceil(speed.remaining);
    var pct = speed.remaining / (speed.effectiveSec || speed.seconds);
    var circ = 2 * Math.PI * 85;
    progEl.style.strokeDasharray = circ;
    progEl.style.strokeDashoffset = circ * (1 - pct);
    timerEl.classList.remove('warn','danger');
    if(speed.remaining <= 2) timerEl.classList.add('danger');
    else if(speed.remaining <= speed.seconds * 0.5) timerEl.classList.add('warn');
  }

  // ============ 9. Play ============
  function renderPlay(){
    var q = speed.question;
    if(!q){ renderSetup(); return; }
    var circ = 2 * Math.PI * 85;
    var h = '<div class="speed-play">';
    h += '<button type="button" class="link" id="speedQuit" style="position:absolute;top:0;right:0">✕ خروج</button>';
    h += '<div class="speed-timer">';
    h += '<svg viewBox="0 0 180 180">';
    h += '<circle class="track" cx="90" cy="90" r="85"/>';
    h += '<circle class="prog" cx="90" cy="90" r="85" style="stroke-dasharray:' + circ + ';stroke-dashoffset:0"/>';
    h += '</svg>';
    h += '<div class="num">' + speed.seconds + '</div>';
    h += '</div>';
    h += '<div class="speed-question"><div>';
    h += '<div class="q-role">' + window.esc(q.role || 'پیام') + '</div>';
    h += '<div class="q-en">' + window.esc(q.q) + '</div>';
    h += '<div class="q-hint">💡 ' + window.esc(q.hint) + '</div>';
    h += '</div></div>';
    h += '<div class="speed-mic-wrap">';
    if(speed.inputMode !== 'type'){
      h += '<button type="button" class="speed-big-mic" id="speedMic">🎤</button>';
      h += '<div class="speed-transcript" id="speedTranscript">دکمه رو بزن و بلند جواب بده…</div>';
    }
    if(speed.inputMode !== 'voice'){
      h += '<form class="speed-type-row" id="speedForm" autocomplete="off">';
      h += '<input type="text" id="speedType" dir="ltr" lang="en" inputmode="latin" placeholder="Type your answer…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="send">';
      h += '<button type="submit" id="speedSend">ارسال</button>';
      h += '</form>';
    }
    h += '</div>';
    h += '<button type="button" class="speed-skip" id="speedSkip">رد کردن سؤال ⏭</button>';
    h += '</div>';
    document.getElementById('main').innerHTML = h;

    document.getElementById('speedQuit').addEventListener('click', quitSession);
    document.getElementById('speedSkip').addEventListener('click', onSkip);

    var mic = document.getElementById('speedMic');
    if(mic) mic.addEventListener('click', toggleMic);

    if(speed.inputMode !== 'voice'){
      var form = document.getElementById('speedForm');
      var inp = document.getElementById('speedType');

      if(inp){
        setTimeout(function(){ try{ inp.focus(); }catch(e){} }, 100);

        var composing = false;
        inp.addEventListener('compositionstart', function(){ composing = true; });
        inp.addEventListener('compositionend', function(){ composing = false; });

        inp.addEventListener('keydown', function(e){
          if(e.key === 'Enter' || e.keyCode === 13){
            e.preventDefault();
            e.stopPropagation();
            if(composing) return;
            var attempt = 0;
            var trySubmit = function(){
              var v = inp.value;
              if(v && v.trim().length > 0){
                submitAnswer(v, null, false);
              } else if(attempt < 8){
                attempt++;
                setTimeout(trySubmit, 60);
              }
            };
            trySubmit();
          }
        });
      }

      if(form){
        form.addEventListener('submit', function(e){
          e.preventDefault();
          e.stopPropagation();
          var v = inp ? inp.value : '';
          if(v && v.trim().length > 0){
            submitAnswer(v, null, false);
          }
        });
      }
    }

    if(speed.inputMode === 'voice' && mic){
      setTimeout(function(){
        if(speed.phase === 'play' && !speed.busy) toggleMic();
      }, 400);
    }
  }

  // ============ 10. Mic ============
  function toggleMic(){
    if(speed.busy) return;
    var b = document.getElementById('speedMic');
    if(window.listening){ if(window.rec) window.rec.stop(); return; }
    window.rec = window.listen({
      interim: function(t){
        var tr = document.getElementById('speedTranscript');
        if(tr){ tr.textContent = t || '…'; tr.classList.toggle('has-text', !!t); }
      },
      done: function(t, c){
        window.listening = false;
        var bb = document.getElementById('speedMic');
        if(bb) bb.classList.remove('rec');
        if(t && t.trim().length > 1) submitAnswer(t, c, true);
      }
    });
    if(window.rec){
      window.listening = true;
      if(b) b.classList.add('rec');
      var tr2 = document.getElementById('speedTranscript');
      if(tr2){ tr2.textContent = 'در حال شنیدن…'; tr2.classList.remove('has-text'); }
    }
  }

  // ============ 11. Timeout / Skip / Quit ============
  function onTimeout(){
    if(speed.busy) return;
    speed.responseTime = speed.seconds;
    speed.lastResult = {timeout: true, text: ''};
    speed.busy = true;
    if(window.listening && window.rec) window.rec.stop();
    window.mistakes.unshift({
      original: '⏱ (پاسخ در ' + window.fa(speed.seconds) + ' ثانیه نداد)',
      fix: speed.question.sample,
      explain: 'وقت تموم شد — سرعت پایین. نمونه: "' + speed.question.sample + '"',
      type: 'speed', level: 'speed', topic: speed.question.cat,
      date: new Date().toLocaleDateString('fa-IR')
    });
    window.mistakes = window.mistakes.slice(0, 300);
    window.store.set('zy_mistakes', window.mistakes);
    saveStats(speed.seconds, false);
    renderResult();
  }
  function onSkip(){
    if(speed.timerId){ clearInterval(speed.timerId); speed.timerId = null; }
    if(window.listening && window.rec) window.rec.stop();
    nextQuestion();
  }
  function quitSession(){
    if(speed.timerId){ clearInterval(speed.timerId); speed.timerId = null; }
    if(window.listening && window.rec) window.rec.stop();
    speed.phase = 'setup';
    speed.question = null;
    speed.lastResult = null;
    renderSpeed();
  }

  // ============ 12. Submit ============
  function submitAnswer(text, confidence, isVoice){
    if(speed.busy) return;
    text = (text || '').trim();
    if(!text) return;
    if(speed.timerId){ clearInterval(speed.timerId); speed.timerId = null; }
    if(window.listening && window.rec) window.rec.stop();
    speed.responseTime = (Date.now() - speed.startTime) / 1000;
    speed.busy = true;
    var q = speed.question;
    var sys = 'Armin is practicing FAST English responses for workplace situations (Iranian IT support, manager Ildar is Russian).\n\nHe was asked: "' + q.q + '"\nHis answer: "' + text + '"\nResponse time: ' + speed.responseTime.toFixed(1) + 's (target: ' + speed.seconds + 's)\n\nAnalyse:\n1. Correct and appropriate?\n2. Brief enough? Ildar prefers 1-2 sentences.\n3. Suggest a NATURAL, SHORTER version.\n4. Score 0-10.\n\nReturn ONLY JSON:\n{"score":0-10,"is_correct":true,"corrected":"best version","mistakes":[{"original":"...","fix":"...","explain_fa":"توضیح"}],"tip_fa":"نکته","too_long":false}';
    window.callAI(sys, [{role:'user', content:'Analyse now.'}], 700)
      .then(function(raw){
        var j; try { j = window.parseJSON(raw); } catch(e){ j = {score:7, is_correct:true, mistakes:[], corrected:text, tip_fa:'', too_long:false}; }
        speed.lastResult = {timeout:false, text:text, analysis:j};
        saveStats(speed.responseTime, j.is_correct !== false);
        (j.mistakes || []).forEach(function(m){
          if(!m.original || !m.fix) return;
          var exists = window.mistakes.some(function(x){ return x.original===m.original && x.fix===m.fix; });
          if(exists) return;
          window.mistakes.unshift({
            original: m.original, fix: m.fix, explain: m.explain_fa || '',
            type: 'speed', level: 'speed', topic: q.cat,
            date: new Date().toLocaleDateString('fa-IR')
          });
        });
        if(j.too_long && j.corrected){
          window.mistakes.unshift({
            original: '⏱ خیلی طولانی: ' + text,
            fix: j.corrected,
            explain: 'برای جواب سریع، کوتاه‌تر بگو.',
            type: 'brevity', level: 'speed', topic: q.cat,
            date: new Date().toLocaleDateString('fa-IR')
          });
        }
        window.mistakes = window.mistakes.slice(0, 300);
        window.store.set('zy_mistakes', window.mistakes);
        speed.busy = false;
        renderResult();
      })
      .catch(function(e){
        speed.lastResult = {timeout:false, text:text, analysis:{score:5, is_correct:true, mistakes:[], corrected:text, tip_fa:'خطا در تحلیل', too_long:false}};
        speed.busy = false;
        renderResult();
      });
  }

  // ============ 13. Result ============
  function renderResult(){
    var q = speed.question;
    var r = speed.lastResult;
    if(!q || !r){ renderSetup(); return; }
    var done = speed.session.idx + 1;
    var total = speed.session.questions.length;
    var circ = 2 * Math.PI * 85;
    var pctShown = r.timeout ? 0 : Math.max(0, 1 - (speed.responseTime / (speed.effectiveSec || speed.seconds)));
    var h = '<div class="speed-play">';
    h += '<div class="speed-timer">';
    h += '<svg viewBox="0 0 180 180">';
    h += '<circle class="track" cx="90" cy="90" r="85"/>';
    h += '<circle class="prog" cx="90" cy="90" r="85" style="stroke-dasharray:' + circ + ';stroke-dashoffset:' + (circ*(1-pctShown)) + '"/>';
    h += '</svg>';
    h += '<div class="num">' + window.fa(done) + '/' + window.fa(total) + '</div>';
    h += '</div>';
    h += '<div class="speed-question" style="opacity:.7"><div>';
    h += '<div class="q-role">' + window.esc(q.role) + '</div>';
    h += '<div class="q-en">' + window.esc(q.q) + '</div>';
    h += '</div></div>';
    h += '<div class="speed-result">';
    if(r.timeout){
      h += '<h3><span class="time-badge bad">⏱ ' + window.fa(speed.seconds) + ' ثانیه تموم شد</span></h3>';
      h += '<p style="margin:8px 0 4px;font-size:.9rem;color:#5b6b80">حتی یه جواب کوتاه هم کافی بود:</p>';
      h += '<div style="background:#ffedd5;padding:12px 16px;border-radius:12px;margin-top:8px;color:#14213d"><div dir="ltr" style="font:600 1.05rem Lexend,sans-serif;color:#14213d">' + window.esc(q.sample) + '</div></div>';
      h += '<div class="tip" style="margin-top:12px">💡 ' + window.esc(q.hint) + '</div>';
    } else {
      var a = r.analysis;
      var score = a.score != null ? a.score : 7;
      var timeClass = speed.responseTime <= 3 ? 'great' : (speed.responseTime <= speed.seconds * 0.75 ? 'ok' : 'bad');
      h += '<h3>زمان <span class="time-badge ' + timeClass + '">' + window.fa(speed.responseTime.toFixed(1)) + ' ثانیه</span> <span class="time-badge" style="background:#ffedd5;color:#c2410c">امتیاز ' + window.fa(score) + '/10</span></h3>';
      h += '<div style="background:#f0f4f4;padding:12px 16px;border-radius:12px;margin:10px 0;color:#14213d"><div style="font-size:.8rem;color:#5b6b80;margin-bottom:4px">جواب تو:</div><div dir="ltr" style="font-family:Lexend,sans-serif;color:#14213d">' + window.esc(r.text) + '</div></div>';
      if(a.corrected && window.norm(a.corrected) !== window.norm(r.text)){
        h += '<div style="background:#d8f1e6;padding:12px 16px;border-radius:12px;margin:10px 0;border:1px solid #23906a"><div style="font-size:.8rem;color:#23906a;font-weight:700;margin-bottom:4px">✓ طبیعی‌تر:</div><div dir="ltr" style="font:600 1rem Lexend,sans-serif;color:#23906a">' + window.esc(a.corrected) + '</div></div>';
      }
      if(a.mistakes && a.mistakes.length){
        a.mistakes.forEach(function(m){
          h += '<div style="margin-top:8px;padding:8px 12px;background:#fbe0e2;border-radius:8px;color:#14213d"><div dir="ltr" style="color:#14213d"><s style="color:#d64550">' + window.esc(m.original) + '</s> → <b style="color:#23906a">' + window.esc(m.fix) + '</b></div><div style="color:#14213d">' + window.esc(m.explain_fa || '') + '</div></div>';
        });
      }
      if(a.tip_fa) h += '<div class="tip" style="margin-top:12px">💡 ' + window.esc(a.tip_fa) + '</div>';
      if(a.too_long) h += '<div style="margin-top:10px;padding:10px 14px;background:#fbe0e2;border-radius:10px;color:#d64550;font-size:.88rem"><b>⚠️ طولانی جواب دادی</b></div>';
    }
    h += '</div>';
    h += '<div class="row" style="gap:10px;margin-top:16px">';
    if(done < total){
      h += '<button type="button" class="btn prog" id="speedNext" style="padding:14px 32px;font-size:1rem">سؤال بعدی →</button>';
    } else {
      h += '<button type="button" class="btn prog" id="speedFinish" style="padding:14px 32px;font-size:1rem">پایان و نتایج 🎉</button>';
    }
    h += '<button type="button" class="speed-skip" id="speedQuit2">خروج</button>';
    h += '</div></div>';
    document.getElementById('main').innerHTML = h;
    var btn = document.getElementById('speedNext') || document.getElementById('speedFinish');
    if(btn) btn.addEventListener('click', function(){
      speed.session.idx++;
      nextQuestion();
    });
    var q2 = document.getElementById('speedQuit2');
    if(q2) q2.addEventListener('click', quitSession);
  }

  // ============ 14. End session ============
  function endSession(){
    if(speed.timerId){ clearInterval(speed.timerId); speed.timerId = null; }
    if(window.prog.speed) window.prog.speed.sessions = (window.prog.speed.sessions || 0) + 1;
    window.saveProg();
    var stats = getStats();
    var h = '<div class="speed-play">';
    h += '<div class="speed-hero" style="background:linear-gradient(135deg,#23906a,#0f766e)"><h1>🎉 عالی بود!</h1><p>یک جلسه تموم شد</p></div>';
    h += '<div class="speed-stats">';
    h += '<div class="st"><b>' + window.fa(stats.avgTime) + '</b><small>میانگین (ثانیه)</small></div>';
    h += '<div class="st"><b>' + window.fa(stats.bestTime) + '</b><small>بهترین</small></div>';
    h += '<div class="st"><b>' + window.fa(stats.totalResponses) + '</b><small>مجموع</small></div>';
    h += '</div>';
    h += '<div class="card" style="max-width:600px;width:100%;margin-top:16px">';
    h += '<h3>📊 پیشرفتت</h3>';
    var avg = parseFloat(stats.avgTime);
    if(avg <= 3) h += '<p>🔥 <b>فوق‌العاده!</b> میانگین ' + window.fa(avg) + ' ثانیه.</p>';
    else if(avg <= 5) h += '<p>✅ <b>خوب!</b> میانگین ' + window.fa(avg) + ' ثانیه.</p>';
    else if(avg <= 7) h += '<p>👍 <b>قابل قبول.</b> هدف بعدی: زیر ۵ ثانیه.</p>';
    else h += '<p>💪 <b>جای پیشرفت داری.</b></p>';
    h += '<div style="margin-top:12px;font-size:.88rem;color:#5b6b80">اشتباهات به <b>دفترچه</b> اضافه شدن.</div>';
    h += '</div>';
    h += '<div class="row" style="gap:10px;margin-top:16px">';
    h += '<button type="button" class="btn prog" id="speedAgain">🔄 جلسه‌ی دیگه</button>';
    h += '<button type="button" class="btn ghost" id="speedNotes">📓 دفترچه</button>';
    h += '<button type="button" class="btn ghost" id="speedHome">صفحه اصلی</button>';
    h += '</div></div>';
    document.getElementById('main').innerHTML = h;
    document.getElementById('speedAgain').addEventListener('click', function(){ speed.phase='setup'; renderSpeed(); });
    document.getElementById('speedNotes').addEventListener('click', function(){ window.go('notes'); });
    document.getElementById('speedHome').addEventListener('click', function(){ speed.phase='setup'; window.go('program'); });
  }

  console.log('[Speed Mode] loaded successfully');
})();
