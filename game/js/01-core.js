'use strict';

// ============================================================
// راه‌اندازی canvas
// ============================================================
const CV = document.getElementById('c');
const X = CV.getContext('2d');
const W = 800, H = 420, GROUND = 350, G = 0.58;
const PAD = document.getElementById('pad');
const DPR = Math.min(window.devicePixelRatio || 1, 2);
CV.width = Math.round(W * DPR); CV.height = Math.round(H * DPR);
if (document.fonts && document.fonts.load) {
  document.fonts.load('700 20px Vazirmatn').catch(() => {});
  document.fonts.load('400 14px Vazirmatn').catch(() => {});
}
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (typeof r === 'number') r = [r, r, r, r];
    else if (!r) r = [0, 0, 0, 0];
    else if (r.length === 1) r = [r[0], r[0], r[0], r[0]];
    else if (r.length === 2) r = [r[0], r[1], r[0], r[1]];
    const tl = r[0], tr = r[1], br = r[2], bl = r[3];
    this.moveTo(x + tl, y);
    this.lineTo(x + w - tr, y); this.arcTo(x + w, y, x + w, y + tr, tr);
    this.lineTo(x + w, y + h - br); this.arcTo(x + w, y + h, x + w - br, y + h, br);
    this.lineTo(x + bl, y + h); this.arcTo(x, y + h, x, y + h - bl, bl);
    this.lineTo(x, y + tl); this.arcTo(x, y, x + tl, y, tl);
    this.closePath();
  };
}

// ============================================================
// توابع کمکی
// ============================================================
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.random() * arr.length | 0];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const sign = v => v < 0 ? -1 : v > 0 ? 1 : 0;
const AABB = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
const hash = n => { n = Math.imul(n ^ 61, 0x45d9f3b); n ^= n >>> 16; n = Math.imul(n, 0x45d9f3b); n ^= n >>> 16; return (n >>> 0) / 4294967296; };
const h2 = (a, b) => hash((a * 73856093) ^ (b * 19349663));
const TAU = Math.PI * 2;
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
function mkHi(w, h) { const c = mk(Math.round(w * DPR), Math.round(h * DPR)); const x = c.getContext('2d'); x.scale(DPR, DPR); return { c, x }; }
const fa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

// ============================================================
// کش‌های canvas
// ============================================================
const VG = mkHi(W, H);
(function () {
  const x = VG.x, g = x.createRadialGradient(W / 2, H / 2, 190, W / 2, H / 2, 500);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.6)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
})();
const FOG = (function () {
  const c = mk(256, 128), x = c.getContext('2d');
  x.scale(1, 0.5);
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(130,140,170,0.55)'); g.addColorStop(1, 'rgba(130,140,170,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return c;
})();
const LPAD = 20;
const LC = mk(W + LPAD * 2, H + LPAD * 2), LX = LC.getContext('2d');

// ============================================================
// وضعیت راهنما
// ============================================================
let hintQueue = [];
let hintTimer = 0;
let hintMsg = '';
let hintMsgT = 0, hintMsgD = 200;

// ============================================================
// وضعیت بازی
// ============================================================
let P = {}, enemies = [], projectiles = [], particles = [], marks = [], ambient = [], items = [], afterimages = [], lights = [];
let itemRespawnTimer = 0;
let levelIdx = 0, gameTime = 0, anim = 0, kills = 0, killsAtStart = 0, hasCard = false, doorOpen = false;
let shakeMag = 0, shakeTime = 0, shakeDur = 1;
let hitStop = 0, flash = 0, flashCol = '200,40,30', rewindFx = 0, titleT = 0;
let msg = '', msgT = 0, winT = 0;
let msgCol = '#f2ece0', preSeen = false;
const waves = [];
let endingT = 0, fadeIn = 0;
let combo = 0, comboT = 0;
let rageMsgAt = -1, rageShown = false, menuOpen = false, portrait = false;
let camX = 0, camTarget = 0;
let idleMsgShown = false;
let bgCache = null;
let DIFF = 'normal', bossDeaths = 0, phTimer = 0, phTotal = 5400, phKeep = 0;
try { DIFF = localStorage.getItem('zf_diff') || 'normal'; } catch (_) {}
const easy = () => DIFF === 'easy';
const assistK = () => (LEVELS[levelIdx].boss && bossDeaths >= 3) ? (bossDeaths >= 6 ? 0.6 : 0.75) : 1;
function maxHp() { let b = 0; for (let j = 0; j < levelIdx; j++) if (LEVELS[j].boss) b++; return 3 + b + (easy() ? 2 : 0); }
function attemptNo(i) { let n = 0; for (let j = 0; j <= i; j++) if (!LEVELS[j].quiet) n++; return 300 + n; }
function attLabel(i) { return LEVELS[i].quiet ? 'استراحت' : 'تلاش ' + fa(attemptNo(i)); }
const phFires = [], phRain = [];
let collectedClocks = new Set();
try {
  const s = localStorage.getItem('zf_clocks');
  if (s) collectedClocks = new Set(JSON.parse(s));
} catch (_) {}
function saveClocks() {
  try { localStorage.setItem('zf_clocks', JSON.stringify([...collectedClocks])); } catch (_) {}
}
let clocksAtLevelStart = 0;
let seen = new Set();
try { const q = localStorage.getItem('zf_seen'); if (q) seen = new Set(JSON.parse(q)); } catch (_) {}
function markSeen(id) { seen.add(id); try { localStorage.setItem('zf_seen', JSON.stringify([...seen])); } catch (_) {} }
function tip(id, text, dur) {
  if (seen.has(id)) return false;
  markSeen(id);
  hintMsg = text; hintMsgT = dur || 260; hintMsgD = hintMsgT;
  return true;
}
let SAVE = null, canSave = false, testMode = false, needRewindTip = false, cpX = 0, cpLv = -1;
let POWERS = { kian: false, khand: false, phoenix: false };
let newPowerThisChapter = null;
let dashHeld = false;
try { const q = localStorage.getItem('zf_powers'); if (q) POWERS = { ...POWERS, ...JSON.parse(q) }; } catch (_) {}
function savePowers() { try { localStorage.setItem('zf_powers', JSON.stringify(POWERS)); } catch (_) {} }
function addCombo() { if (comboT > 0) combo++; else combo = 1; comboT = 120; }

try { const q = localStorage.getItem('zf_save'); if (q) { const o = JSON.parse(q); if (o && o.lv >= 0) SAVE = o; } } catch (_) {}
function readSave() { return SAVE; }
function writeSave(lv, k) {
  if (!canSave || testMode) return;
  SAVE = { lv, kills: k };
  try { localStorage.setItem('zf_save', JSON.stringify(SAVE)); } catch (_) {}
}
function clearSave() { SAVE = null; try { localStorage.removeItem('zf_save'); } catch (_) {} }

const clockTier = () => CLOCK_TIERS.filter(n => collectedClocks.size >= n).length;
const dashCd = () => 90 - 12 * clockTier();
function chClocks(ch) {
  let got = 0, total = 0;
  for (const L of LEVELS) if (L.ch === ch) for (const it of L.items) if (it.t === 'clock') { total++; if (collectedClocks.has(it.id)) got++; }
  return { got, total };
}

const HIST = 150, SNAP_EVERY = 2;
const hist = new Array(HIST);
let histHead = 0, histCount = 0;
const keys = {}, acts = {};

// ============================================================
// کمکی‌های عمومی
// ============================================================
function say(t, dur, col) { msg = t; msgT = dur || 150; msgCol = col || '#f2ece0'; }
function addShake(mag, dur) {
  if (mag >= shakeMag * (shakeTime / shakeDur) || shakeTime <= 0) { shakeMag = mag; shakeTime = dur; shakeDur = dur; }
}
const eW = e => e.phoenix ? 120 : e.khand ? 70 : e.dog ? 70 : e.fly ? 28 : e.boss ? 44 : 22;
const eH = e => e.phoenix ? 70 : e.khand ? 170 : e.dog ? 56 : e.fly ? 20 : e.boss ? 60 : 30;
const eCx = e => e.x + eW(e) / 2;
const eCy = e => e.y + eH(e) / 2;
const isDown = e => e.state === 'ko' || e.state === 'dead';

// ============================================================
// ذرات
// ============================================================
function spawnParticles(x, y, type, n, dirX) {
  for (let i = 0; i < n; i++) {
    const a = dirX !== undefined ? rnd(-0.9, 0.9) + (dirX > 0 ? 0 : Math.PI) : rnd(0, TAU);
    const s = type === 'spark' ? rnd(3, 8) : rnd(1.5, 5);
    let col = '#fff', size = rnd(1.5, 3.5), life = rnd(20, 50), g = 0.25, add = false;
    if (type === 'blood') col = pick(['#b83a24','#7a1a12','#3a0806','#c84830']);
    else if (type === 'spark') { col = pick(['#ffdc50','#ffa020','#fff0a0','#ffffff']); add = true; }
    else if (type === 'stun') { col = pick(['#e86fb5','#a050ff','#ffb0e0']); add = true; }
    else if (type === 'light') { col = pick(['#ffffff','#bfe8ff','#8fd8ff']); add = true; g = -0.06; size = rnd(2, 4.5); life = rnd(40, 80); }
    else if (type === 'dust') { col = pick(['#7a6a5a','#a09080','#6a5a4a']); g = 0.08; size = rnd(2, 4); }
    particles.push({x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s - 1.5, life, maxLife: life, col, size, g, add});
  }
}
function spawnImpactRing(x, y, col, maxR, lc) { marks.push({type:'ring', x, y, life:18, maxLife:18, col: col || '#fff', lc: lc || '255,255,255', r: 4, maxR: maxR || 40}); }
function spawnSlash(x, y, dir, col) { marks.push({type:'slash', x, y, dir, life:12, maxLife:12, col: col || '#fff'}); }
function spawnMuzzle(x, y, dir) { marks.push({type:'muzzle', x, y, dir, life:5, maxLife:5, lc:'255,220,120'}); }

function spawnAmbient() {
  ambient = [];
  const L = LEVELS[levelIdx];
  if (L.amb === 'rain') for (let i = 0; i < 70; i++) ambient.push({x: rnd(0,W), y: rnd(0,H), vx: -1.5, vy: rnd(6,9), type:'rain'});
  else if (L.amb === 'ember') for (let i = 0; i < 36; i++) ambient.push({x: rnd(0,W), y: rnd(0,H), vx: rnd(-0.4,0.4), vy: rnd(-1.4,-0.4), type:'ember', life: rnd(120,300), maxLife: 300});
  else if (L.amb === 'dust') for (let i = 0; i < 44; i++) ambient.push({x: rnd(0,W), y: rnd(0,H), vx: rnd(-0.3,0.3), vy: rnd(-0.3,0.3), type:'dust'});
}

// ============================================================
// Snap / Restore / Rewind
// ============================================================
function snap() {
  return {
    px:P.x, py:P.y, pvx:P.vx, pvy:P.vy, pf:P.f, pcd:P.cd, pdcd:P.dcd, pit:P.idleT, pjl:P.jumpsLeft,
    pon:P.onGround, php:P.hp, pw:P.weapon, pinv:{...P.inv},
    pkian:P.kianCd || 0, pkhand:P.khandCd || 0, pperfect:P.perfectT || 0, previved:!!P.revivedThisLevel,
    pslow:P.slowT || 0, pdhold:P.dashHoldT || 0,
    en:enemies.map(e => ({x:e.x, state:e.state, st:e.st, hp:e.hp, f:e.f, vx:e.vx, dropped:e.dropped, phase2:e.phase2, shootCd:e.shootCd, phase3:e.phase3, stompCd:e.stompCd, swCd:e.swCd, waveN:e.waveN, rebirths:e.rebirths, pcd:e.pcd, pn:e.pn, y:e.y, bt:e.bt, shieldHits:e.shieldHits, shieldBroken:e.shieldBroken, turnT:e.turnT, bx:e.bx, tx:e.tx, ty:e.ty})),
    it:items.map(i => ({...i})), kc:hasCard, dr:doorOpen, gt:gameTime, kl:kills, cx:camX
  };
}
function restore(s) {
  P.x=s.px; P.y=s.py; P.vx=s.pvx; P.vy=s.pvy; P.f=s.pf; P.cd=s.pcd; P.dcd=s.pdcd; P.idleT=s.pit; P.jumpsLeft=s.pjl;
  P.onGround=s.pon; P.hp=s.php; P.weapon=s.pw; P.inv={...s.pinv};
  P.kianCd = s.pkian || 0; P.khandCd = s.pkhand || 0; P.perfectT = s.ppeffect || 0;
  P.revivedThisLevel = !!s.previved; P.slowT = s.pslow || 0; P.dashHoldT = s.pdhold || 0;
  P.dying=false; P.deathT=0; P.hurtT=45; P.dashT=0; P.jbuf=0; P.coyote=0; P.jumpHeld=false; P.attackAnim=0; P.idleAnim=0; P.jump2Fx=0;
  enemies.forEach((e, i) => { Object.assign(e, s.en[i]); e.flash = 0; e.vanish = false; e.fadeA = 1; e.fadeBoss = false; });
  items = s.it.map(i => ({...i}));
  hasCard=s.kc; doorOpen=s.dr; gameTime=s.gt; kills=s.kl; camX = s.cx || camX;
  projectiles.length = 0; particles.length = 0; marks.length = 0; afterimages.length = 0; waves.length = 0; phFires.length = 0; phRain.length = 0;
  combo = 0; comboT = 0; winT = 0; rageMsgAt = -1;
}
function rewind() {
  if (histCount === 0) return false;
  const oldest = (histHead - histCount + HIST) % HIST;
  const s = hist[oldest];
  restore(s);
  hist[0] = s; histHead = 1; histCount = 1;
  flash = 1; flashCol = '95,179,217'; rewindFx = 30;
  addShake(8, 25);
  return true;
}

// ============================================================
// tickFx
// ============================================================
function tickFx() {
  anim++;
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx; p.y += p.vy; p.vy += p.g; p.vx *= 0.97; p.life--;
    if (p.life <= 0 || p.x < camX - 400 || p.x > camX + W + 400) particles.splice(i, 1);
  }
  for (let i = marks.length - 1; i >= 0; i--) {
    const m = marks[i]; m.life--;
    if (m.type === 'ring') m.r += (m.maxR - m.r) * 0.2;
    else if (m.type === 'ripple') m.r += (m.maxR - m.r) * 0.12;
    if (m.life <= 0) marks.splice(i, 1);
  }
  for (let i = afterimages.length - 1; i >= 0; i--) { afterimages[i].life--; if (afterimages[i].life <= 0) afterimages.splice(i, 1); }
  const L = LEVELS[levelIdx];
  if (L.amb === 'rain' && Math.random() < 0.3) {
    const rx = camX + rnd(0, W);
    marks.push({type:'ripple', x:rx, y:GROUND + rnd(3,14), life:20, maxLife:20, r:2, maxR:14});
  }
  for (const a of ambient) {
    if (a.type === 'rain') { a.x += a.vx; a.y += a.vy; if (a.y > H) { a.y = -10; a.x = rnd(0, W); } }
    else if (a.type === 'ember') {
      a.x += a.vx + Math.sin(anim*0.05 + a.y*0.1) * 0.3; a.y += a.vy; a.life--;
      if (a.life <= 0 || a.y < -10) { a.x = rnd(0, W); a.y = H + 10; a.life = 300; }
    } else {
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0) a.x = W; if (a.x > W) a.x = 0;
      if (a.y < 0) a.y = H; if (a.y > H) a.y = 0;
    }
  }
  if (shakeTime > 0) { shakeTime--; if (shakeTime <= 0) shakeMag = 0; }
  if (msgT > 0) msgT--;
  if (titleT > 0) titleT--;
  if (rewindFx > 0) rewindFx--;
  if (fadeIn > 0) fadeIn *= 0.92;
  if (flash > 0) { flash *= 0.88; if (flash < 0.02) flash = 0; }
  if (P.jump2Fx > 0) P.jump2Fx--;
  if (rageMsgAt > 0) {
    rageMsgAt--;
    if (rageMsgAt === 0) {
      if (msgT <= 0) { say(pick(DIALOG.rage), 110); rageMsgAt = -1; rageShown = true; }
      else rageMsgAt = 1;
    }
  }
}