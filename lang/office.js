'use strict';
/* ============ OFFICE MODE MODULE ============ */
(function(){
  if(window.__officeModeLoaded) return;
  window.__officeModeLoaded = true;

  // ============ CSS ============
  var css = [
    '.office-toggle{cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap;font-weight:700}',
    '.office-toggle.on{background:var(--warn,#c2410c) !important;color:#fff !important;border-color:var(--warn,#c2410c) !important}',
    '.office-toggle.on b{color:#fff !important}',
    '.office-banner{position:sticky;top:0;z-index:100;background:var(--warn,#c2410c);color:#fff;padding:8px 16px;text-align:center;font-size:.85rem;font-weight:700;border-radius:0 0 12px 12px;margin-bottom:12px}'
  ].join('\n');
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ============ State ============
  function isOn(){
    try { return localStorage.getItem('zy_office_mode') === '1'; }
    catch(e){ return false; }
  }
  function setOn(v){
    try { localStorage.setItem('zy_office_mode', v ? '1' : '0'); }
    catch(e){}
  }

  // ============ Apply Mode ============
  function applyMode(){
    var on = isOn();
    document.body.classList.toggle('office-mode', on);

    // در حالت Office: autoplay و hands خاموش
    if(on && window.settings){
      window.settings.autoplay = false;
      window.settings.hands = false;
      try {
        localStorage.setItem('zy_settings', JSON.stringify(window.settings));
      } catch(e){}
    }

    // در حالت Office: speed inputMode = type
    if(on && window.speed){
      window.speed.inputMode = 'type';
    }

    // UI button
    var btn = document.getElementById('officeToggle');
    if(btn){
      btn.classList.toggle('on', on);
      btn.innerHTML = on ? '🔇 Office: روشن' : '🔊 Office: خاموش';
      btn.title = on ? 'حالت Office فعال — میکروفون غیرفعال، فقط تایپ' : 'حالت Office غیرفعال — همه‌چیز آزاد';
    }

    // Banner
    var existingBanner = document.getElementById('officeBanner');
    if(on && !existingBanner){
      var banner = document.createElement('div');
      banner.id = 'officeBanner';
      banner.className = 'office-banner';
      banner.textContent = '🔇 حالت Office — میکروفون غیرفعال است. از تایپ استفاده کن.';
      var main = document.querySelector('main') || document.querySelector('.wrap');
      if(main && main.parentNode){
        main.parentNode.insertBefore(banner, main);
      }
    } else if(!on && existingBanner){
      existingBanner.remove();
    }
  }

  // ============ Inject Toggle Button ============
  function injectToggle(){
    var stats = document.querySelector('.stats');
    if(!stats) return;
    if(document.getElementById('officeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'officeToggle';
    btn.type = 'button';
    btn.className = 'stat office-toggle';
    btn.onclick = function(){
      setOn(!isOn());
      applyMode();
      if(window.toast){
        window.toast(isOn() ? '🔇 حالت Office روشن شد — فقط تایپ' : '🔊 حالت Office خاموش شد — میکروفون آزاد', 2500);
      }
      // re-render speed if it's showing
      if(window.speed && window.view === 'speed' && window.renderSpeed){
        window.renderSpeed();
      }
    };
    stats.appendChild(btn);
  }

  injectToggle();
  setTimeout(injectToggle, 500);
  setTimeout(injectToggle, 1500);

  // ============ Block Microphone ============
  var _origListen = window.listen;
  if(_origListen){
    window.listen = function(opt){
      if(isOn()){
        if(window.toast){
          window.toast('🔇 حالت Office روشنه — میکروفون غیرفعاله. تایپ کن.', 3500);
        }
        if(opt && opt.done){
          setTimeout(function(){ opt.done('', 0); }, 50);
        }
        return null;
      }
      return _origListen.apply(this, arguments);
    };
  }

  // ============ Enforce Mode ============
  setInterval(function(){
    if(!isOn()) return;

    // speed: inputMode = type
    if(window.speed && window.speed.inputMode !== 'type'){
      window.speed.inputMode = 'type';
      if(window.speed.phase === 'setup' && window.renderSpeed){
        window.renderSpeed();
      }
    }

    // settings: autoplay & hands = false
    if(window.settings){
      if(window.settings.autoplay){
        window.settings.autoplay = false;
        try { localStorage.setItem('zy_settings', JSON.stringify(window.settings)); } catch(e){}
      }
      if(window.settings.hands){
        window.settings.hands = false;
        try { localStorage.setItem('zy_settings', JSON.stringify(window.settings)); } catch(e){}
      }
    }
  }, 800);

  // ============ Init ============
  applyMode();

  console.log('[Office Mode] loaded successfully');
})();
