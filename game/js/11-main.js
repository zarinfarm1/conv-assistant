'use strict';

// ============================================================
// بارگذاری
// ============================================================
function loadLevel(i, keep) {
  levelIdx = i;
  const L = LEVELS[i];
  if (keep) kills = killsAtStart; else killsAtStart = kills;
  if (!keep) writeSave(i, kills);
P = {x:L.start[0], y:L.start[1], vx:0, vy:0, f:1, onGround:false, hp:maxHp(), weapon:'fist', inv:{fist:1},
     cd:0, sw:0, attackAnim:0, hurtT:0, walkT:0, dcd:0, dashT:0, dvx:0,
     coyote:0, jbuf:0, jumpHeld:false, squash:0, dying:false, deathT:0,
     idleT:0, idleAnim:0, jumpsLeft:2, jump2Fx:0,
     perfectT:0, kianCd:0, khandCd:0, dashHoldT:0, revivedThisLevel:false, slowT:0};
  if (!keep) cpLv = -1;
  if (keep && cpLv === i && L.cp) { P.x = cpX; P.y = 290; }
  phFires.length = 0; phRain.length = 0; itemRespawnTimer = 0;
  if (!keep) { bossDeaths = 0; phKeep = 0; }
  phTotal = easy() ? 4400 : 5400;
  if (L.boss && bossDeaths >= 3) phTotal = Math.round(phTotal * (bossDeaths >= 6 ? 0.7 : 0.85));
  phTimer = L.phoenix ? Math.max(1800, phTotal - (keep ? phKeep : 0)) : 0;
  if (L.phoenix && keep && phKeep > 0) say('ادامه از ثانیه‌ی ' + fa(Math.round(phKeep / 60)), 140, '#ffd678');
  if (L.lore) L.lore.forEach(l => { l.done = P.x > l.x; });
  items = L.items.filter(it => it.t !== 'clock' || !collectedClocks.has(it.id)).map(it => ({...it}));
  enemies = L.enemies.map(e => ({
    x:e.x, y:e.y, vx:1, f:1, hp:Math.max(1, Math.ceil(((e.boss || e.fly) ? e.hp : e.hp * 1.5) * (easy() ? 0.8 : 1) * assistK())), maxHp:Math.max(1, Math.ceil(((e.boss || e.fly) ? e.hp : e.hp * 1.5) * (easy() ? 0.8 : 1) * assistK())), min:e.min, max:e.max,
    state:'patrol', st:0, drop:e.drop, dropped:false, flash:0,
    shoots:!!e.shoots, shootCd: rnd(60, 140), boss:!!e.boss, human:!!e.human, kian:!!e.kian, khand:!!e.khand, dog:!!e.dog, lunger:!!e.lunger, slower:!!e.slower, phoenix:!!e.phoenix, elite:!!(e.kian || e.khand), phase2:false, walkT:rnd(0, 6), laughT:0,
    fly:!!e.fly, shield:!!e.shield, phantom:!!e.phantom, baseY:e.y, bt:rnd(70, 160), shieldHits:0, shieldBroken:false, turnT:0
  }));
  projectiles = []; particles = []; marks = []; afterimages = [];
  hasCard = false; doorOpen = false; gameTime = 0;
  histHead = 0; histCount = 0;
  shakeMag = 0; shakeTime = 0; flash = 0; hitStop = 0; rewindFx = 0; winT = 0;
  combo = 0; comboT = 0; rageMsgAt = -1; idleMsgShown = false;
  clocksAtLevelStart = collectedClocks.size;
  // راهنمای شروع بازی
  hintQueue = (i === 0 && !seen.has('hints0')) ? HINTS.map(h => ({...h})) : [];
  hintTimer = 0; hintMsg = ''; hintMsgT = 0;
  camX = clamp(P.x - W / 2, 0, Math.max(0, L.width - W));
  camTarget = camX;
  say(L.say, 180);
  spawnAmbient();
  fadeIn = 1; titleT = 120;
  bgCache = buildBg();
  if (!L.boss) preSeen = false;
  if (L.boss && !preSeen) { preSeen = true; startTalk(L.bossId === 3 ? PHOENIX_PRE : L.bossId === 2 ? KHAND_PRE : KIAN_PRE); }
  if (needRewindTip) { needRewindTip = false; tip('rewind', '⏪ برگشت زمان، ۵ ثانیه‌ی آخر را پس می‌گیرد. قبل از مرگ امتحانش کن', 300); }
}

function update() {
  if (hitStop > 0) { hitStop--; return; }
  tickFx();
    const dyingBoss = enemies.find(en => en.khand && en.state === 'dying');
  if (dyingBoss) {
    for (const k in acts) acts[k] = 0;
    if (--dyingBoss.st <= 0) {
      dyingBoss.state = 'dead'; dyingBoss.hp = 0; kills++;
      startTalk(KHAND_DEATH, endChapter);
    }
    return; // متوقف کردن آپدیت‌های دیگر تا زمان مرگ
  }
  if (winT > 0 && --winT === 0) { startTalk(LEVELS[levelIdx].bossId === 2 ? KHAND_DEATH : KIAN_DEATH, endChapter); return; }
  if (P.dying) {
    for (const k in acts) acts[k] = 0;
    if (--P.deathT <= 0) {
      const kk = kills;
      loadLevel(levelIdx, true);
      kills = Math.max(kk, killsAtStart);
      say(pick(DIALOG.die), 80);
    }
    return;
  }
  if (comboT > 0) { comboT--; if (comboT === 0) combo = 0; }
  // راهنمای مرحله ۱
  if (hintQueue.length > 0) {
    hintTimer++;
    if (hintTimer >= hintQueue[0].t) {
      hintMsg = hintQueue.shift().s;
      hintMsgT = 200; hintMsgD = 200;
      if (!hintQueue.length) markSeen('hints0');
    }
  }
  if (hintMsgT > 0) hintMsgT--;
  gameTime++;
  processActs();
    // اسپاون آیتم در مرحله باس
  if (LEVELS[levelIdx].boss) {
    itemRespawnTimer++;
    if (itemRespawnTimer > (bossDeaths >= 3 ? 300 : 600)) { // هر ۱۰ ثانیه (60fps * 10)
      itemRespawnTimer = 0;
      if (items.length < 4 || (P.hp < maxHp() && !items.some(it => it.t === 'heart'))) { // اگر آیتم‌ها کم شد
        const rx = camX + rnd(100, 700);
        const rt = (P.hp < maxHp() && !items.some(it => it.t === 'heart')) ? 'heart' : pick(['sword', 'sed', 'stone', 'mol']);
        items.push({t: rt, x: rx, y: 320});
        spawnParticles(rx, 320, 'spark', 10);
      }
    }
  }
  if (gameTime % SNAP_EVERY === 0) {
    hist[histHead] = snap();
    histHead = (histHead + 1) % HIST;
    if (histCount < HIST) histCount++;
  }
  updatePlayer();
  updateTraps();
  updateWaves();
  updatePhHazards();
  for (const e of enemies) updateEnemy(e);
  updateProjectiles();
}

function render() {
  X.setTransform(DPR, 0, 0, DPR, 0, 0);
  X.save();
  if (shakeTime > 0) {
    const amp = shakeMag * (shakeTime / shakeDur);
    X.translate(Math.sin(anim * 1.8) * amp + (Math.random() - 0.5) * amp * 0.4, Math.cos(anim * 2.4) * amp + (Math.random() - 0.5) * amp * 0.4);
  }
  drawBg();
  X.save();
  X.translate(-camX, 0);
  const L = LEVELS[levelIdx];
  for (const r of L.plat) {
    if (r[0] + r[2] < camX - 50 || r[0] > camX + W + 50) continue;
    drawPlatform(r);
  }
  if (L.tplat) for (const t of L.tplat) {
    if (t.x + t.w < camX - 50 || t.x > camX + W + 50) continue;
    const c = (gameTime + t.ph) % t.cyc, on = c < t.len, warn = on && c > t.len - 40;
    if (on) {
      X.globalAlpha = warn ? 0.45 + 0.4 * Math.sin(anim * 0.7) : 1;
      drawPlatform([t.x, t.y, t.w, t.h]);
      X.fillStyle = 'rgba(95,179,217,0.6)'; X.fillRect(t.x, t.y, t.w, 2);
      X.globalAlpha = 1;
    } else {
      X.strokeStyle = 'rgba(95,179,217,0.3)'; X.lineWidth = 1; X.setLineDash([5, 5]); X.strokeRect(t.x + 0.5, t.y + 0.5, t.w - 1, t.h - 1); X.setLineDash([]);
      const soon = t.cyc - c;
      if (soon < 30) { X.fillStyle = `rgba(95,179,217,${0.28 * (1 - soon / 30)})`; X.fillRect(t.x, t.y, t.w, t.h); }
    }
  }
  if (L.gate) {
    const g = L.gate;
    if (!gateOpen()) {
      const gg = X.createLinearGradient(g.x, 0, g.x + g.w, 0); gg.addColorStop(0, '#2a120a'); gg.addColorStop(0.5, '#5a2a20'); gg.addColorStop(1, '#2a120a');
      X.fillStyle = gg; X.fillRect(g.x, g.y, g.w, g.h);
      X.fillStyle = '#1a0a05'; for (let i = 0; i < g.h; i += 20) X.fillRect(g.x + 1, g.y + i + 4, g.w - 2, 2);
      X.fillStyle = `rgba(255,120,60,${0.4 + Math.sin(anim * 0.2) * 0.25})`; X.fillRect(g.x, g.y, 2, g.h); X.fillRect(g.x + g.w - 2, g.y, 2, g.h);
    } else {
      X.strokeStyle = `rgba(200,100,60,${0.5 + Math.sin(anim * 0.15) * 0.3})`; X.setLineDash([4, 4]); X.strokeRect(g.x, g.y, g.w, g.h); X.setLineDash([]);
    }
  }
  if (L.door) {
    const d = L.door;
    if (!doorOpen) {
      X.fillStyle = '#1a1a2a'; X.fillRect(d.x, d.y, d.w, d.h); X.fillStyle = '#2a2a3a'; X.fillRect(d.x + 2, d.y + 2, d.w - 4, d.h - 4);
      X.fillStyle = '#0a0a10'; for (let i = 0; i < d.h; i += 30) X.fillRect(d.x + 2, d.y + i + 6, d.w - 4, 1);
      X.fillStyle = hasCard ? '#5fb3d9' : '#c8422a'; X.beginPath(); X.arc(d.x + d.w/2, d.y + d.h/2, 3, 0, TAU); X.fill();
    } else {
      const glow = X.createLinearGradient(d.x - 10, 0, d.x + d.w + 10, 0);
      glow.addColorStop(0, 'rgba(95,179,217,0)'); glow.addColorStop(0.5, 'rgba(95,179,217,0.4)'); glow.addColorStop(1, 'rgba(95,179,217,0)');
      X.fillStyle = glow; X.fillRect(d.x - 10, d.y, d.w + 20, d.h);
    }
  }
  const open = exitUnlocked(), pulse = 0.7 + Math.sin(anim * 0.1) * 0.3;
  const ex = L.exit;
  X.fillStyle = open ? `rgba(240,192,80,${pulse})` : 'rgba(90,70,40,0.7)';
  X.beginPath(); X.roundRect(ex[0], ex[1], ex[2], ex[3], [4, 4, 0, 0]); X.fill();
  X.fillStyle = '#8a5a12'; X.beginPath(); X.arc(ex[0] + ex[2] - 8, ex[1] + 25, 2.5, 0, TAU); X.fill();
  drawDeco();
  drawTraps();
  drawWaves();
  drawPhHazards();
  for (const it of items) {
    if (it.x < camX - 50 || it.x > camX + W + 50) continue;
    const bounce = Math.sin(anim * 0.1 + it.x) * 3;
    if (it.t === 'clock') {
      const glowR = 18 + Math.sin(anim * 0.15 + it.x) * 4;
      const gr = X.createRadialGradient(it.x + 5, it.y + bounce, 0, it.x + 5, it.y + bounce, glowR);
      gr.addColorStop(0, 'rgba(255,240,150,0.5)'); gr.addColorStop(1, 'rgba(255,240,150,0)');
      X.fillStyle = gr; X.beginPath(); X.arc(it.x + 5, it.y + bounce, glowR, 0, TAU); X.fill();
    }
    drawIcon(it.t, it.x + 5, it.y + bounce - 2, 1.5);
  }
for (const e of enemies) drawEnemy(e);
drawGhost(); drawAfterimages(); drawHero();
if (POWERS.khand && P.khandCd <= 0 && dashHeld && P.dashHoldT > 0) {
  const prog = Math.min(1, P.dashHoldT / 60);
  X.strokeStyle = `rgba(242,200,72,${0.6 + prog * 0.4})`;
  X.lineWidth = 4;
  X.beginPath();
  X.arc(P.x + 9, P.y + 15, 26, -Math.PI / 2, -Math.PI / 2 + TAU * prog);
  X.stroke();
}
drawProjectiles(); drawParticles(); drawMarks();
  X.restore();
  collectLights();
  renderLight();
  X.restore();
  drawAmbient();
  if (flash > 0.01) { X.fillStyle = `rgba(${flashCol},${flash})`; X.fillRect(0, 0, W, H); }
  if (rewindFx > 0) {
    const a = rewindFx / 30;
    X.fillStyle = `rgba(95,179,217,${0.14 * a})`; X.fillRect(0, 0, W, H);
    for (let i = 0; i < 18; i++) { X.fillStyle = `rgba(190,235,255,${0.2 * a})`; X.fillRect(0, (i * 47 + anim * 23) % H, W, 1.5 + (i % 3)); }
  }
  if (P.dying) { X.fillStyle = `rgba(110,10,10,${0.28 * (1 - P.deathT / 45)})`; X.fillRect(0, 0, W, H); }
  if (fadeIn > 0.01) { X.fillStyle = `rgba(0,0,0,${fadeIn})`; X.fillRect(0, 0, W, H); }
  X.drawImage(VG.c, 0, 0, W, H);
  if (mode === 'play') drawHUD();
  else if (mode === 'talk') drawTalk();
  else if (mode === 'chapter-end') drawChapterEnd();
  else if (mode === 'end') drawEnding();
}
let lastT = 0, acc = 0;
function isPaused() { return menuOpen || portrait; }
function loop(t) {
  if (!lastT) lastT = t;
  const dt = Math.min(t - lastT, 100);
  lastT = t; acc += dt;
  while (acc >= 16.67) {
    if (!isPaused()) {
      if (mode === 'intro') updateIntro();
      else if (mode === 'play') update();
      else if (mode === 'talk') talkUpdate();
      else if (mode === 'chapter-end' || mode === 'end') endingT++;
    }
    acc -= 16.67;
  }
  if (mode === 'intro') renderIntro(); else render();
  requestAnimationFrame(loop);
}
const KEYMAP = {ArrowLeft:'L',a:'L',A:'L',ArrowRight:'R',d:'R',D:'R',ArrowUp:'U',w:'U',W:'U',' ':'U',Shift:'D',ArrowDown:'D',s:'D',S:'D'};
const ACTMAP = {j:'J',J:'J',k:'K',K:'K',r:'R',R:'R',x:'X',X:'X'};
const menuEl = document.getElementById('menu');
function releaseInputs() {
  for (const k in keys) keys[k] = 0;
  for (const k in acts) acts[k] = 0;
  dashHeld = false;
  document.querySelectorAll('#pad button.on').forEach(b => b.classList.remove('on'));
}
function setMenu(v) { menuOpen = v; menuEl.classList.toggle('hide', !v); if (v) releaseInputs(); }
const touchDevice = () => !!(window.matchMedia && window.matchMedia('(pointer:coarse)').matches);
const fsActive = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
function enterImmersive() {
  try {
    const el = document.documentElement;
    const rq = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!rq || fsActive()) return;
    const lock = () => { try { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {}); } catch (_) {} };
    const pr = rq.call(el, { navigationUI: 'hide' });
    if (pr && pr.then) pr.then(lock).catch(() => {}); else lock();
  } catch (_) {}
}
function exitImmersive() {
  try { const ex = document.exitFullscreen || document.webkitExitFullscreen; if (ex) ex.call(document); } catch (_) {}
}
function startGame() {
  mode = 'play'; introT = 0; introStartBtn = false; introFlash = 0; introFlashed = false;
  const sv = readSave();
  canSave = true; testMode = false;
  kills = sv ? sv.kills || 0 : 0; killsAtStart = kills; rageShown = false;
  PAD.classList.remove('hide');
  loadLevel(sv && sv.lv < LEVELS.length ? sv.lv : 0);
}
function restartAfterEnd() {
  if (endingT <= 60) return;
  newPowerThisChapter = null;
  if (mode === 'chapter-end') {
    const nxt = LEVELS.findIndex(l => l.ch === LEVELS[levelIdx].ch + 1);
    if (nxt >= 0) { mode = 'play'; PAD.classList.remove('hide'); loadLevel(nxt); }
    else { mode = 'end'; endingT = 0; clearSave(); }
    return;
  }
  preSeen = false; PAD.classList.remove('hide');
  mode = 'play'; kills = 0; killsAtStart = 0; rageShown = false; loadLevel(0);
}
function introTap() {
  if (touchDevice()) enterImmersive();
  if (!introStarted) { introStarted = true; return; }
  if (introStartBtn) startGame(); else skipIntro();
}
addEventListener('keydown', e => {
  const k = e.key;
  if (mode === 'play' && (k === 'n' || k === 'N') && !menuOpen) { testJump('next'); e.preventDefault(); return; }
  if (mode === 'play' && (k === 'Escape' || k === 'p' || k === 'P')) { setMenu(!menuOpen); e.preventDefault(); return; }
  if (isPaused()) return;
  if (mode === 'intro') { if (!e.repeat) introTap(); e.preventDefault(); return; }
  if (mode === 'talk') { if (!e.repeat) talkAdvance(); e.preventDefault(); return; }
  if (mode === 'chapter-end' || mode === 'end') { if (!e.repeat) restartAfterEnd(); e.preventDefault(); return; }
  if (KEYMAP[k]) { keys[KEYMAP[k]] = 1; e.preventDefault(); }
  if (ACTMAP[k]) { acts[ACTMAP[k]] = 1; e.preventDefault(); }
});
addEventListener('keyup', e => { if (KEYMAP[e.key]) keys[KEYMAP[e.key]] = 0; });
addEventListener('blur', () => { for (const k in keys) keys[k] = 0; });
addEventListener('contextmenu', e => e.preventDefault());
// بقیه‌ی دکمه‌ها (پرش، جاخالی، برگشت، ضربه) — همان رفتار قبلی
document.querySelectorAll('#pad button[data-k], #pad button[data-a]').forEach(b => {
  const h = b.dataset.k, a = b.dataset.a;
  if (h === 'L' || h === 'R') return; // L/R در ادامه جدا مدیریت می‌شوند
  if (h) {
    const on = e => { e.preventDefault(); keys[h] = 1; b.classList.add('on'); };
    const off = e => { e.preventDefault(); keys[h] = 0; b.classList.remove('on'); };
    b.addEventListener('pointerdown', on);
    b.addEventListener('pointerup', off);
    b.addEventListener('pointercancel', off);
    b.addEventListener('pointerleave', off);
  } else {
    b.addEventListener('pointerdown', e => {
      e.preventDefault(); acts[a] = 1; b.classList.add('on');
      setTimeout(() => b.classList.remove('on'), 100);
    });
  }
});

// ناحیه‌ی یکپارچه برای چپ/راست — اجازه می‌دهد انگشت بدون بلند شدن بین جهت‌ها سُر بخورد
(function () {
  const bL = document.querySelector('.b-move[data-k="L"]');
  const bR = document.querySelector('.b-move[data-k="R"]');
  if (!bL || !bR) return;
  let activeId = null;

  function zone() {
    const rL = bL.getBoundingClientRect();
    const rR = bR.getBoundingClientRect();
    return {
      midX: (rL.right + rR.left) / 2,
      leftX: rL.left - 20,
      rightX: rR.right + 20,
      topY: Math.min(rL.top, rR.top) - 15,
      botY: Math.max(rL.bottom, rR.bottom) + 20
    };
  }

  function setDir(x, y) {
    const z = zone();
    let L = 0, R = 0;
    if (x >= z.leftX && x <= z.rightX && y >= z.topY && y <= z.botY) {
      if (x < z.midX) L = 1; else R = 1;
    }
    keys.L = L; keys.R = R;
    bL.classList.toggle('on', L === 1);
    bR.classList.toggle('on', R === 1);
  }

  function clearDir() {
    keys.L = 0; keys.R = 0;
    bL.classList.remove('on');
    bR.classList.remove('on');
  }

  window.addEventListener('pointerdown', e => {
    if (activeId !== null) return;
    if (e.target.closest('button:not(.b-move)')) return; // اگر روی دکمه‌ی دیگری بود، دخالت نکن
    const z = zone();
    if (e.clientX < z.leftX || e.clientX > z.rightX || e.clientY < z.topY || e.clientY > z.botY) return;
    activeId = e.pointerId;
    setDir(e.clientX, e.clientY);
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('pointermove', e => {
    if (e.pointerId !== activeId) return;
    setDir(e.clientX, e.clientY);
    e.preventDefault();
  }, { passive: false });

  const end = e => {
    if (e.pointerId !== activeId) return;
    activeId = null;
    clearDir();
  };
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
})();
document.querySelectorAll('#pad button[data-a="D"]').forEach(b => {
  b.addEventListener('pointerdown', e => { dashHeld = true; });
  b.addEventListener('pointerup', e => { dashHeld = false; });
  b.addEventListener('pointercancel', e => { dashHeld = false; });
  b.addEventListener('pointerleave', e => { dashHeld = false; });
});
const attackBtn = document.querySelector('.b-attack');
attackBtn.addEventListener('pointerdown', e => { e.preventDefault(); keys.A = 1; acts.J = 1; attackBtn.classList.add('on'); });
['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => {
  attackBtn.addEventListener(ev, () => { keys.A = 0; attackBtn.classList.remove('on'); });
});
document.querySelector('.b-menu').addEventListener('pointerdown', e => { e.preventDefault(); setMenu(true); });
menuEl.addEventListener('pointerdown', e => { if (e.target === menuEl) setMenu(false); });
menuEl.querySelectorAll('button[data-menu]').forEach(b => {
  if (b.dataset.menu === 'diff') b.textContent = easy() ? 'سختی: آسان' : 'سختی: عادی';
  const cmd = b.dataset.menu;
  if (cmd === 'fs') {
    b.addEventListener('click', () => { if (fsActive()) exitImmersive(); else enterImmersive(); setMenu(false); });
  } else {
    b.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (cmd === 'diff') { DIFF = easy() ? 'normal' : 'easy'; try { localStorage.setItem('zf_diff', DIFF); } catch (_) {} P.hp = Math.min(P.hp, maxHp()); b.textContent = easy() ? 'سختی: آسان' : 'سختی: عادی'; say(easy() ? 'آسان: ۲ قلب بیشتر و دشمن کندتر (از مرحله‌ی بعد)' : 'سختی عادی (از مرحله‌ی بعد)', 200); return; }
      setMenu(false);
      if (cmd === 'reset' && mode === 'play' && !P.dying) loadLevel(levelIdx, true);
            else if (mode === 'play' && (cmd === 'next' || cmd === 'prev' || cmd === 'boss')) testJump(cmd);
else if (cmd === 'new') {
  let ok = true; try { ok = confirm('پیشرفت ذخیره‌شده پاک شود و بازی از اول شروع شود؟'); } catch (_) {}
  if (ok && mode === 'play') {
    clearSave();
    POWERS = { kian: false, khand: false, phoenix: false };
    try { localStorage.removeItem('zf_powers'); } catch (_) {}
    newPowerThisChapter = null;
    testMode = false; canSave = true; kills = 0; killsAtStart = 0; rageShown = false; preSeen = false; waves.length = 0; loadLevel(0);
  }
}
		else if (cmd === 'boss-death') {
		  testMode = true; preSeen = true;
		  mode = 'play';
		  const curCh = LEVELS[levelIdx].ch;
		  const targetIdx = LEVELS.findIndex(l => l.ch === curCh && l.boss);
		  if (targetIdx >= 0) {
			loadLevel(targetIdx);
			const bossId = LEVELS[targetIdx].bossId || 1;
			const lines = bossId === 3 ? PHOENIX_DEATH : bossId === 2 ? KHAND_DEATH : KIAN_DEATH;
			setTimeout(() => { if (cine) cine = null; startTalk(lines, endChapter); }, 50);
		  }
		}
    });
  }
});
function testJump(cmd) {
  let i = levelIdx;
  if (cmd === 'next') i = Math.min(LEVELS.length - 1, levelIdx + 1);
  else if (cmd === 'prev') i = Math.max(0, levelIdx - 1);
  else { const j = LEVELS.findIndex((l, n) => n >= levelIdx && l.boss); i = j >= 0 ? j : levelIdx; }
  testMode = true; waves.length = 0; loadLevel(i);
}
function canvasPoint(e) {
  const r = CV.getBoundingClientRect();
  const s = Math.min(r.width / W, r.height / H);
  const ox = r.left + (r.width - W * s) / 2, oy = r.top + (r.height - H * s) / 2;
  return { x: (e.clientX - ox) / s, y: (e.clientY - oy) / s };
}
CV.addEventListener('pointerdown', e => {
  if (isPaused()) return;
  if (mode === 'talk') { const pt = canvasPoint(e); if (pt.x > W - 130 && pt.y < 64) talkSkip(); else talkAdvance(); }
  else if (mode === 'chapter-end' || mode === 'end') restartAfterEnd();
  else if (mode === 'play') {
    const p = canvasPoint(e);
    if (p.x > W - 214 && p.y < 68) cycleWeapon();
  }
});
CV.addEventListener('pointerup', () => { if (mode === 'intro' && !isPaused()) introTap(); });
function processActs() {
  if (acts.X) { acts.X = 0; if (!P.dying) loadLevel(levelIdx, true); }
  if (acts.K) { acts.K = 0; cycleWeapon(); }
  if (acts.D) { acts.D = 0; playerDash(); }
  if (acts.R) { acts.R = 0; if (!P.dying && histCount > 15) { rewind(); say(pick(DIALOG.rewind), 80); } }
  if (acts.J) { acts.J = 0; playerAttack(); }
}
setInterval(() => {
  // در حالت بازی، ورودی‌ها داخل update() پردازش می‌شوند تا با فریم هم‌زمان باشند
  if (isPaused() || mode === 'intro') { for (const k in acts) acts[k] = 0; return; }
  if (mode !== 'play') {
    if ((mode === 'end' || mode === 'chapter-end') && (acts.J || acts.R || acts.X)) restartAfterEnd();
    if (mode === 'talk' && (acts.J || acts.K || acts.R || acts.X)) talkAdvance();
    for (const k in acts) acts[k] = 0;
    return;
  }
  if (P.dying || winT > 0) for (const k in acts) acts[k] = 0;
}, 16);
function checkOrientation() {
  portrait = window.innerHeight > window.innerWidth && window.innerWidth < 900;
  document.getElementById('rotate-hint').classList.toggle('show', portrait);
  if (portrait) releaseInputs();
}
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('fullscreenchange', checkOrientation);
checkOrientation();
loadLevel(0);
X.direction = 'rtl';
requestAnimationFrame(loop);
