'use strict';

function phoenixHit(e, w) {
  if (e.state === 'fading' || e.state === 'reborn') return;
  e.hp -= w.dmg; e.flash = 8; hitStop = 3; spawnParticles(eCx(e), e.y + 35, 'spark', 8);
  if (e.hp <= 0) {
    e.rebirths = (e.rebirths || 0) + 1; phTimer = Math.min(phTimer + 600, Math.round(phTotal * 1.5));
    e.state = 'reborn'; e.st = 110; addShake(12, 30); spawnImpactRing(eCx(e), e.y + 35, '#ffd678', 120, '255,214,120');
    say('ققنوس از خاکسترش برمی‌خیزد... قوی‌تر. نکشش.', 180, '#ffb870');
  } else tip('phhit', 'هر بار که بکشی‌اش، زنده می‌شود. نکش؛ فقط دوام بیار.', 280);
}
function updatePhoenix(e) {
  const px = P.x + 9, py = P.y + 15, L = LEVELS[levelIdx], lv = e.rebirths || 0, spd = 1 + lv * 0.22, cx = eCx(e);
  e.walkT += 0.3;
  if (phTimer > 0 && e.state !== 'fading') phTimer--;
  if (phTimer <= 0 && e.state !== 'fading') { e.state = 'fading'; e.st = 0; phFires.length = 0; phRain.length = 0; }
  if (e.lastPx === undefined || Math.abs(px - e.lastPx) > 70 || Math.abs(py - e.lastPy) > 50) { e.lastPx = px; e.lastPy = py; e.stillT = 0; } else e.stillT = (e.stillT || 0) + 1;
  if (e.stillT === 200) tip('still', 'ققنوس جای ثابت را هدف می‌گیرد؛ حرکت کن!', 220);
  const still = e.stillT > 240, rest = () => (still ? 90 : 220) - lv * 18;
  const mv = e.state === 'sweepW' || e.state === 'skyW' || e.state === 'sweep' || e.state === 'sky', mvx = Math.abs(e.x - (e.lx ?? e.x));
  e.lx = e.x;
  const atk = mv || e.state === 'rainW', side = mv || (mvx > 3 && e.state !== 'rainW' && e.state !== 'reborn');
  e.pa = (e.pa ?? 0) + ((atk ? 1 : (e.rebirths ? 0.55 : 0)) - (e.pa ?? 0)) * 0.04;
  e.psv = (e.psv ?? 0) + ((side ? 1 : 0) - (e.psv ?? 0)) * 0.07;
  e.pamp = (e.pamp ?? 0.25) + ((side ? 1 : 0.25) - (e.pamp ?? 0.25)) * 0.04;
  switch (e.state) {
    case 'reborn':
      e.st--; e.y += ((GROUND - 165) - e.y) * 0.05;
      if (e.st <= 0) { e.hp = e.maxHp = Math.round(14 * (1 + lv * 0.35)); e.state = 'idle'; e.pcd = 70; }
      break;
    case 'fading':
      e.st++; e.y += ((GROUND - 70) - e.y) * 0.02;
      if (e.st === 150 && !e.finalDone) { e.finalDone = true; startTalk(PHOENIX_DEATH, endChapter); }
      break;
    case 'sweepW':
    case 'skyW':
      e.st--; e.x += clamp((e.sx - cx) * 0.08, -10, 10); e.y += (((e.state === 'skyW' ? 140 : GROUND - 150)) - e.y) * 0.08;
      if (e.st <= 0) { e.state = e.state === 'skyW' ? 'sky' : 'sweep'; e.dir = e.sdir; }
      break;
    case 'sweep':
      e.x += e.dir * 8.5 * spd; e.y += ((GROUND - 75) - e.y) * 0.25;
      if (Math.floor(cx) % 36 < 10) phFires.push({x: cx, y: GROUND, life: 130});
      if (Math.abs(cx - px) < 60 && Math.abs((e.y + 35) - py) < 42) damagePlayer(1);
      if (e.x < -140 || e.x > L.width + 40) { e.state = 'idle'; e.pcd = rest(); e.x = clamp(e.x, 40, L.width - 160); e.y = GROUND - 165; }
      break;
    case 'sky':
      e.x += e.dir * 9 * spd; e.y += (140 - e.y) * 0.25;
      if (Math.abs(cx - px) < 62 && Math.abs((e.y + 35) - py) < 40) damagePlayer(1);
      if (e.x < -140 || e.x > L.width + 40) { e.state = 'idle'; e.pcd = rest(); e.x = clamp(e.x, 40, L.width - 160); e.y = GROUND - 165; }
      break;
    case 'rainW':
      e.st--; e.x += (clamp(px, 200, L.width - 200) - cx) * 0.03; e.y += ((GROUND - 215) - e.y) * 0.06;
      if (e.st === 30) {
        const n = 3 + lv * 2 + (still ? 2 : 0);
        for (let i = 0; i < n; i++) phRain.push({x: clamp(i < (e.aimed || 2) ? px + P.vx * 14 + rnd(-18, 18) : px + rnd(-280, 280), 40, L.width - 40), warn: 50 + i * 6, y: -30, vy: 0});
      }
      if (e.st <= 0) { e.state = 'idle'; e.pcd = rest(); }
      break;
    default:
      e.x += clamp((px - cx) * 0.01 + Math.sin(anim * 0.015) * 1.4, -2.4 * spd, 2.4 * spd);
      e.y = GROUND - 165 + Math.sin(anim * 0.05) * 10;
      e.pcd = (e.pcd ?? 150) - 1;
      if (e.pcd <= 0 && !P.dying) {
        const onPlat = py < GROUND - 70;
        let k = onPlat ? (Math.random() < 0.6 ? 'sky' : 'rain') : (Math.random() < 0.5 ? 'sweep' : 'rain');
        if (still) k = onPlat ? ((e.pn || 0) % 2 ? 'sky' : 'rain') : ((e.pn || 0) % 2 ? 'sweep' : 'rain');
        if (k === e.lastK && Math.random() < 0.6) k = k === 'rain' ? (onPlat ? 'sky' : 'sweep') : 'rain';
        e.lastK = k; e.pn = (e.pn || 0) + 1;
        if (k === 'rain') { e.state = 'rainW'; e.st = 70; e.aimed = still ? 6 : 2; }
        else { e.state = k === 'sky' ? 'skyW' : 'sweepW'; e.st = 46; e.sdir = px > L.width / 2 ? -1 : 1; e.sx = e.sdir > 0 ? 60 : L.width - 60; }
      }
  }
  e.x = clamp(e.x, -150, L.width + 150); e.f = (e.state === 'sweep' || e.state === 'sky') ? e.dir : (sign(px - cx) || e.f);
}
function updatePhHazards() {
  for (let i = phFires.length - 1; i >= 0; i--) {
    const f = phFires[i]; f.life--;
    if (f.life <= 0) { phFires.splice(i, 1); continue; }
    if (!P.dying && Math.abs(f.x - (P.x + 9)) < (f.big ? 34 : 18) && P.y + 30 > GROUND - 22) damagePlayer(1);
  }
  for (let i = phRain.length - 1; i >= 0; i--) {
    const r = phRain[i];
    if (r.warn > 0) { r.warn--; if (r.warn === 0) r.vy = 5; continue; }
    r.vy += 0.6; r.y += r.vy;
    if (Math.abs(r.x - (P.x + 9)) < 14 && Math.abs(r.y - (P.y + 15)) < 22) damagePlayer(1);
    if (r.y >= GROUND - 6) { phFires.push({x: r.x, y: GROUND, life: 80, big: true}); spawnParticles(r.x, GROUND - 6, 'spark', 10); addShake(4, 8); phRain.splice(i, 1); }
  }
}
function drawPhHazards() {
  for (const e of enemies) if (e.phoenix && (e.state === 'sweepW' || e.state === 'skyW')) {
    const yy = e.state === 'skyW' ? 175 : GROUND - 38, hh = e.state === 'skyW' ? 34 : 30;
    X.fillStyle = `rgba(255,150,70,${0.12 + 0.12 * Math.sin(anim * 0.5)})`; X.fillRect(0, yy - hh / 2, LEVELS[levelIdx].width, hh);
  }
  for (const r of phRain) {
    if (r.warn > 0) { X.strokeStyle = `rgba(255,120,60,${0.35 + 0.3 * Math.sin(anim * 0.6)})`; X.lineWidth = 2; X.beginPath(); X.ellipse(r.x, GROUND - 2, 24, 6, 0, 0, TAU); X.stroke(); }
    else { const g = X.createRadialGradient(r.x, r.y, 1, r.x, r.y, 16); g.addColorStop(0, 'rgba(255,250,220,1)'); g.addColorStop(0.5, 'rgba(255,170,70,0.9)'); g.addColorStop(1, 'rgba(255,100,40,0)'); X.fillStyle = g; X.fillRect(r.x - 16, r.y - 16, 32, 32); }
  }
  for (const f of phFires) {
    const a = Math.min(1, f.life / 40), h = (f.big ? 48 : 28) * (0.7 + 0.3 * Math.sin(anim * 0.5 + f.x)), w2 = f.big ? 22 : 12;
    X.fillStyle = `rgba(255,${130 + (f.life % 50)},50,${a * 0.85})`;
    X.beginPath(); X.moveTo(f.x - w2, GROUND); X.quadraticCurveTo(f.x - 6, GROUND - h * 0.6, f.x, GROUND - h); X.quadraticCurveTo(f.x + 6, GROUND - h * 0.6, f.x + w2, GROUND); X.closePath(); X.fill();
    X.fillStyle = `rgba(255,245,200,${a * 0.7})`; X.beginPath(); X.moveTo(f.x - w2 * 0.45, GROUND); X.quadraticCurveTo(f.x, GROUND - h * 0.7, f.x + w2 * 0.45, GROUND); X.closePath(); X.fill();
  }
}
function drawPhoenixHUD() {
  const e = enemies.find(en => en.phoenix); if (!e) return;
  X.fillStyle = 'rgba(0,0,0,0.5)'; X.fillRect(W / 2 - 120, 14, 240, 8);
  X.fillStyle = '#ffd678'; X.fillRect(W / 2 - 120, 14, 240 * clamp(phTimer / phTotal, 0, 1), 8);
  X.textAlign = 'center'; X.direction = 'rtl'; X.font = '13px Vazirmatn'; X.fillStyle = '#f2ece0';
  X.fillText('ققنوس تا ' + fa(Math.ceil(phTimer / 60)) + ' ثانیه‌ی دیگر خاموش می‌شود' + (e.rebirths ? '   ↺ ' + fa(e.rebirths) : ''), W / 2, 38);
}
// ===== ققنوس زمان: رندر نسخه‌ی روبه‌رو/نیم‌رخ، آرام/عصبی (طرح کاربر) =====
const PHX = (function (GX) {
  let X = GX, GDIM = 1;
  const lerp = (a, b, k) => a + (b - a) * k;
  let ph = 0, AMP = 0, YAW = 0, SV = 0;
  const RGBA = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const N_SEG = 7, WING_MAIN = 5, WING_BACK = 4, WING_SH = 3, MANE_COLS = 9, TAIL_N = 4, EMBERS_N = 40, SAND_N = 25, HALO_TICKS = 30, HALO_SWEEP = 8;
  function layers(pal) {
    const h = ph;
    if (pal === 2) return [
      [[0, [255, 110, 30], .85], [.6, [240, 90, 40], .5], [1, [90, 150, 255], 0]],
      [[0, [255, 250, 215], .95], [.6, [255, 225, 150], .6], [.85, [200, 235, 255], .3], [1, [190, 230, 255], 0]]];
    return [
      [[0, [255, lerp(120, 150, h), lerp(40, 60, h)], .8], [.55, [lerp(230, 255, h), lerp(70, 110, h), lerp(20, 40, h)], .5], [1, [180, 30, 20], 0]],
      [[0, [255, 250, lerp(220, 245, h)], .95], [.6, [255, lerp(220, 240, h), lerp(130, 190, h)], .62], [1, [255, 180, 80], 0]]];
  }
  function fireBlade(len, wd, ang, t, seed, pal, lift, dim = 1) {
    const L = layers(pal), upx = -Math.sin(ang), upy = -Math.cos(ang);
    const passes = [[1, 1, L[0]], [0.82, 0.5, L[1]]];
    for (const [kL, kW, lay] of passes) {
      X.save(); X.globalCompositeOperation = 'lighter';
      const Ln = len * kL, g = X.createLinearGradient(0, 0, Ln, 0);
      for (const [pos, c, a] of lay) g.addColorStop(pos, RGBA(c, a * dim * GDIM));
      const top = [], bot = [];
      for (let i = 0; i <= N_SEG; i++) {
        const u = i / N_SEG;
        const wave = Math.sin(t * 5 + seed * 2.3 + u * 7) * Ln * 0.035 * u + Math.sin(t * 9 + seed + u * 13) * Ln * 0.012 * u;
        const d = lift * Ln * u * u;
        const w = wd * kW * (Math.pow(Math.sin(Math.PI * Math.pow(u, 0.65)), 0.9) + 0.12 * (1 - u)) * (1 + 0.1 * Math.sin(t * 7 + u * 9 + seed)) * (1 - 0.15 * u);
        const x = Ln * u + upx * d, y = wave + upy * d;
        top.push([x, y - w]); bot.push([x, y + w]);
      }
      X.beginPath(); X.moveTo(top[0][0], top[0][1]);
      for (let i = 1; i <= N_SEG; i++) X.lineTo(top[i][0], top[i][1]);
      for (let i = N_SEG; i >= 0; i--) X.lineTo(bot[i][0], bot[i][1]);
      X.closePath(); X.fillStyle = g; X.fill(); X.restore();
    }
  }
  const HALO = (function () {
    const size = 500, cx = size / 2, cy = size / 2, R = 196;
    const mk = () => { const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d'); x.translate(cx, cy); return [c, x]; };
    const [ticks, xt] = mk();
    for (let i = 0; i < HALO_TICKS; i++) {
      const a = i / HALO_TICKS * TAU, big = i % 2 === 0;
      if ((i * 7) % 11 === 3) continue;
      xt.strokeStyle = big ? 'rgba(160,220,255,0.75)' : 'rgba(110,190,240,0.35)'; xt.lineWidth = big ? 2.4 : 1;
      xt.beginPath(); xt.moveTo(Math.cos(a) * (R - (big ? 14 : 8)), Math.sin(a) * (R - (big ? 14 : 8))); xt.lineTo(Math.cos(a) * R, Math.sin(a) * R); xt.stroke();
    }
    const [gold, xg] = mk();
    xg.setLineDash([3, 11]); xg.strokeStyle = 'rgba(232,168,56,0.45)'; xg.lineWidth = 2; xg.beginPath(); xg.arc(0, 0, R + 14, 0, TAU); xg.stroke(); xg.setLineDash([]);
    const [sweep, xs] = mk();
    for (let k = 0; k < HALO_SWEEP; k++) { xs.strokeStyle = `rgba(150,215,255,${0.5 * (1 - k / HALO_SWEEP)})`; xs.lineWidth = 5; xs.beginPath(); xs.arc(0, 0, R - 5, k * 0.08, (k + 1) * 0.08 + 0.01); xs.stroke(); }
    return { ticks, gold, sweep, size, cx, cy, R };
  })();
  function halo(cx, cy, t) {
    const R = HALO.R, sp = lerp(0.10, 0.26, ph);
    X.save(); X.translate(cx, cy);
    X.strokeStyle = 'rgba(110,190,240,0.30)'; X.lineWidth = 2; X.beginPath(); X.arc(0, 0, R, 0, TAU); X.stroke();
    X.strokeStyle = 'rgba(110,190,240,0.14)'; X.lineWidth = 1; X.beginPath(); X.arc(0, 0, R - 16, 0, TAU); X.stroke();
    X.save(); X.rotate(-t * sp); X.drawImage(HALO.ticks, -HALO.cx, -HALO.cy); X.restore();
    X.save(); X.rotate(t * sp * 1.7); X.drawImage(HALO.gold, -HALO.cx, -HALO.cy); X.restore();
    X.save(); X.rotate(-t * lerp(0.7, 1.6, ph)); X.drawImage(HALO.sweep, -HALO.cx, -HALO.cy); X.restore();
    X.restore();
  }
  const CLOCK_FACE = (function () {
    const size = 120, cx = size / 2, cy = size / 2, r = 27;
    const c = document.createElement('canvas'); c.width = c.height = size;
    const x = c.getContext('2d'); x.translate(cx, cy);
    x.beginPath(); x.arc(0, 0, r + 9, 0, TAU); x.fillStyle = 'rgba(70,12,8,0.88)'; x.fill();
    const rg = x.createLinearGradient(-r, -r, r, r); rg.addColorStop(0, '#f6d884'); rg.addColorStop(0.5, '#a8741c'); rg.addColorStop(1, '#f0c85a');
    x.beginPath(); x.arc(0, 0, r + 4, 0, TAU); x.fillStyle = rg; x.fill();
    x.beginPath(); x.arc(0, 0, r, 0, TAU); x.fillStyle = '#0b0e18'; x.fill();
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * TAU - Math.PI / 2, big = i % 2 === 0;
      x.strokeStyle = big ? '#f2cf7a' : 'rgba(242,207,122,0.5)'; x.lineWidth = big ? 2.2 : 1;
      x.beginPath(); x.moveTo(Math.cos(a) * (r - (big ? 7 : 4)), Math.sin(a) * (r - (big ? 7 : 4))); x.lineTo(Math.cos(a) * (r - 1.5), Math.sin(a) * (r - 1.5)); x.stroke();
    }
    return { canvas: c, cx, cy, r };
  })();
  function chestClock(t) {
    const r = CLOCK_FACE.r;
    X.save(); X.translate(0, 14);
    X.drawImage(CLOCK_FACE.canvas, -CLOCK_FACE.cx, -CLOCK_FACE.cy);
    const m = -t * lerp(0.9, 2.4, ph) - Math.PI / 2, h = -t * lerp(0.075, 0.2, ph) - Math.PI / 2;
    X.lineCap = 'round'; X.strokeStyle = '#9fdcff'; X.lineWidth = 2.6;
    X.beginPath(); X.moveTo(0, 0); X.lineTo(Math.cos(h) * 13, Math.sin(h) * 13); X.stroke();
    X.lineWidth = 1.6; X.beginPath(); X.moveTo(0, 0); X.lineTo(Math.cos(m) * 21, Math.sin(m) * 21); X.stroke();
    X.fillStyle = '#f2cf7a'; X.beginPath(); X.arc(0, 0, 2.6, 0, TAU); X.fill();
    X.globalCompositeOperation = 'lighter';
    X.strokeStyle = `rgba(190,235,255,${0.55 + 0.3 * Math.sin(t * 3)})`; X.lineWidth = 1.4;
    X.beginPath(); X.moveTo(r * 0.72, -r * 0.72); X.lineTo(8, -9); X.lineTo(11, -1); X.lineTo(-4, 6); X.lineTo(-r * 0.62, r * 0.78); X.stroke();
    if (ph > 0.5) { X.beginPath(); X.moveTo(-r * 0.7, -r * 0.4); X.lineTo(-9, -3); X.lineTo(6, 12); X.lineTo(r * 0.5, r * 0.8); X.stroke(); }
    X.restore();
  }
  function wing(t) {
    const flap = Math.sin(t * (1.5 + 0.9 * AMP)) * lerp(0.13, 0.22, ph) * (1 + 0.45 * AMP), lift = 0.2 + 0.1 * ph;
    for (let i = 0; i < WING_BACK; i++) {
      const u = i / Math.max(1, WING_BACK - 1), ang = lerp(-1.32, 0.62, u) + flap * (0.4 + u * 0.8) * 0.8, len = 90 + 100 * Math.sin(Math.PI * (0.1 + 0.8 * u));
      X.save(); X.rotate(ang); fireBlade(len, 34, ang, t, i + 70, 0, lift, 0.55); X.restore();
    }
    for (let i = 0; i < WING_MAIN; i++) {
      const u = i / Math.max(1, WING_MAIN - 1), ang = lerp(-1.12, 0.5, u) + flap * (0.3 + u * 0.9);
      const len = 150 + 150 * Math.pow(Math.sin(Math.PI * (0.05 + 0.6 * (1 - u))), 0.9) - u * 40, wd = 34 - 6 * u;
      X.save(); X.rotate(ang); fireBlade(len, wd, ang, t, i, 0, lift); X.restore();
      for (const sg of [-1, 1]) { const a2 = ang + sg * 0.11; X.save(); X.rotate(a2); fireBlade(len * 0.7, wd * 0.62, a2, t, i + 20 + sg * 7, 0, lift * 1.2); X.restore(); }
    }
    for (let i = 0; i < WING_SH; i++) {
      const u = i / Math.max(1, WING_SH - 1), ang = lerp(-1.4, 0.4, u) + flap * 0.3;
      X.save(); X.rotate(ang); fireBlade(60 + 20 * Math.sin(Math.PI * u), 26, ang, t, i + 40, 0, lift); X.restore();
    }
  }
  function body(t) {
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) {
      const y = -42 + i * 16, ang = s > 0 ? -0.95 + i * 0.04 : Math.PI + 0.95 - i * 0.04;
      X.save(); X.translate(s * (30 - i * 0.6), y); X.rotate(ang); fireBlade(50 + (i % 3) * 8, 13, ang, t, i * 2 + (s > 0 ? 0 : 1) + 90, 0, 0.25); X.restore();
    }
    X.save();
    X.beginPath(); X.moveTo(0, -60); X.bezierCurveTo(40, -50, 44, 10, 15, 72); X.quadraticCurveTo(0, 92, -15, 72); X.bezierCurveTo(-44, 10, -40, -50, 0, -60);
    const bg = X.createRadialGradient(0, 10, 4, 0, 14, 62);
    bg.addColorStop(0, 'rgb(255,245,205)'); bg.addColorStop(0.3, 'rgb(255,185,70)'); bg.addColorStop(0.7, 'rgb(226,80,24)'); bg.addColorStop(1, 'rgb(130,24,12)');
    X.fillStyle = bg; X.fill(); X.clip();
    X.strokeStyle = 'rgba(255,255,225,0.2)'; X.lineWidth = 2;
    for (let k = -1; k <= 1; k++) { X.beginPath(); for (let y = -58; y <= 84; y += 8) { const x = k * 12 + Math.sin(y * 0.1 - t * 4 + k * 1.7) * 5; y === -58 ? X.moveTo(x, y) : X.lineTo(x, y); } X.stroke(); }
    X.restore();
    X.save(); X.globalCompositeOperation = 'lighter';
    const gl = X.createRadialGradient(0, 10, 10, 0, 10, 100); gl.addColorStop(0, 'rgba(255,150,50,0.35)'); gl.addColorStop(1, 'rgba(255,100,30,0)');
    X.fillStyle = gl; X.fillRect(-100, -90, 200, 200); X.restore();
    chestClock(t);
  }
  function head(t) {
    const ng = X.createLinearGradient(0, -98, 0, -40); ng.addColorStop(0, 'rgb(255,172,62)'); ng.addColorStop(1, 'rgb(240,110,34)');
    X.fillStyle = ng; X.beginPath(); X.moveTo(-14, -42); X.quadraticCurveTo(-8, -72, -10, -98); X.lineTo(10, -98); X.quadraticCurveTo(8, -72, 14, -42); X.closePath(); X.fill();
    X.save(); X.translate(0, -104); X.scale(1.62, 1.62);
    for (let k = -(MANE_COLS - 1) / 2; k <= (MANE_COLS - 1) / 2; k++) {
      const a = -Math.PI / 2 + k * 0.4 + Math.sin(t * 2 + k * 1.3) * 0.05, f = Math.abs(k) / ((MANE_COLS - 1) / 2);
      const sx = Math.cos(a) * 10, sy = -5 + Math.sin(a) * 15, len = 60 + 46 * f * f + (k * 7 % 5);
      X.save(); X.translate(sx, sy); X.rotate(a); fireBlade(len, 8, a, t, k * 3 + 30, 0, 0.5, 1); X.restore();
    }
    const hg = X.createRadialGradient(0, -6, 2, 0, 0, 24); hg.addColorStop(0, 'rgb(255,240,190)'); hg.addColorStop(0.55, 'rgb(255,160,56)'); hg.addColorStop(1, 'rgb(215,70,24)');
    X.fillStyle = hg; X.beginPath(); X.moveTo(-11, -6); X.quadraticCurveTo(-11, -21, 0, -21); X.quadraticCurveTo(11, -21, 11, -6); X.quadraticCurveTo(9, 8, 0, 13); X.quadraticCurveTo(-9, 8, -11, -6); X.fill();
    const bk = X.createLinearGradient(0, 2, 0, 28); bk.addColorStop(0, '#fff3b0'); bk.addColorStop(1, '#e8a020');
    X.fillStyle = bk; X.beginPath(); X.moveTo(-5.8, 3); X.quadraticCurveTo(0, 6.5, 5.8, 3); X.quadraticCurveTo(4.4, 13, 2.2, 22); X.quadraticCurveTo(1, 29, -0.8, 25); X.quadraticCurveTo(-4, 13, -5.8, 3); X.fill();
    const hot = ph > 0.5;
    for (const s of [-1, 1]) {
      X.save(); X.translate(s * 6.4, -7); X.rotate(s * (hot ? -0.42 : -0.16));
      X.fillStyle = 'rgba(90,16,8,0.55)'; X.beginPath(); X.ellipse(0, 0, 5.2, 3.3, 0, 0, TAU); X.fill();
      X.fillStyle = hot ? 'rgb(255,255,240)' : 'rgb(190,230,255)'; X.beginPath(); X.ellipse(0, 0, 4.3, 2.6, 0, 0, TAU); X.fill();
      X.fillStyle = hot ? '#b01808' : '#10202e'; X.beginPath(); X.ellipse(0.3 * s, 0, 1.1, 2.5, 0, 0, TAU); X.fill();
      X.strokeStyle = '#4a1006'; X.lineWidth = 1.8; X.beginPath(); X.moveTo(-6.4, -3.1); X.lineTo(6.4, -3.1); X.stroke();
      X.restore();
    }
    X.restore();
  }
  function tail(t) {
    for (let i = 0; i < TAIL_N; i++) {
      const k = i - (TAIL_N - 1) / 2, sway = Math.sin(t * 1.3 + i * 0.9) * 0.05, ang = Math.PI / 2 + k * 0.17 + sway - YAW * 0.45, len = 200 - Math.abs(k) * 28;
      X.save(); X.translate(0, 64); X.rotate(ang); fireBlade(len, 28 - Math.abs(k) * 4, ang, t, i + 50, 2, 0.06); X.restore();
    }
  }
  function sand(cx, cy, t) {
    X.save(); X.globalCompositeOperation = 'lighter';
    for (let i = 0; i < SAND_N; i++) {
      const p = (t * 0.22 + i / SAND_N) % 1, x = cx + Math.sin(i * 12.9 + t * 0.4) * (14 + (i % 9) * 9) * (1 - p * 0.5), y = cy + 300 - p * 230;
      X.fillStyle = `rgba(160,220,255,${Math.sin(Math.PI * p) * 0.8})`; X.fillRect(x, y, 2 + (i % 3), 2 + (i % 3));
    }
    X.restore();
  }
  function embers(cx, cy, t) {
    X.save(); X.globalCompositeOperation = 'lighter';
    for (let i = 0; i < EMBERS_N; i++) {
      const p = (t * 0.32 + i * 0.137) % 1, side = i % 2 ? 1 : -1;
      const x = cx + side * (20 + ((i * 37) % 250)) + Math.sin(t * 1.5 + i) * 10 * p, y = cy - 10 - p * 230 + ((i * 53) % 150) - 60;
      X.fillStyle = `rgba(255,${150 + (i % 5) * 18},70,${Math.sin(Math.PI * p) * 0.85})`; X.beginPath(); X.arc(x, y, 1 + (i % 3) * 0.7, 0, TAU); X.fill();
    }
    X.restore();
  }
  function sideWing(t, sc, dim, lag, full, seed) {
    const w = 0.5 + 0.5 * Math.sin(t * 3.2 - lag), c = -2.05 - 1.3 * w, lift = 0.18 + 0.08 * ph;
    for (let i = 0; i < WING_BACK; i++) {
      const u = i / Math.max(1, WING_BACK - 1), ang = c + (u - 0.5) * 2.0 + 0.1;
      X.save(); X.rotate(ang); fireBlade((120 + 80 * Math.sin(Math.PI * (0.1 + 0.8 * u))) * sc, 30 * sc, ang, t, i + seed, 0, lift, dim * 0.55); X.restore();
    }
    for (let i = 0; i < WING_MAIN; i++) {
      const u = i / Math.max(1, WING_MAIN - 1), ang = c + (u - 0.5) * 1.7, len = (190 + 80 * Math.sin(Math.PI * (0.12 + 0.76 * u))) * sc;
      X.save(); X.rotate(ang); fireBlade(len, 30 * sc, ang, t, i + 7 + seed, 0, lift, dim); X.restore();
      if (full) for (const sg of [-1, 1]) { const a2 = ang + sg * 0.1; X.save(); X.rotate(a2); fireBlade(len * 0.68, 19 * sc, a2, t, i + 25 + sg * 5 + seed, 0, lift * 1.2, dim); X.restore(); }
    }
    if (full) for (let i = 0; i < WING_SH; i++) {
      const u = i / Math.max(1, WING_SH - 1), ang = c + (u - 0.5) * 2.3;
      X.save(); X.rotate(ang); fireBlade(66 + 16 * Math.sin(Math.PI * u), 24, ang, t, i + 60 + seed, 0, lift, dim); X.restore();
    }
  }
  function sideFigure(t) {
    X.save(); X.rotate(-0.1 + Math.sin(t * 3.2) * 0.035);
    X.save(); X.translate(8, -32); sideWing(t, 0.8, 0.8, 0.7, false, 100); X.restore();
    for (let i = 0; i < TAIL_N; i++) {
      const k = i - (TAIL_N - 1) / 2, sway = Math.sin(t * 1.4 + i * 0.9) * 0.05, ang = Math.PI - 0.12 + k * 0.17 + sway, len = 235 - Math.abs(k) * 28;
      X.save(); X.translate(-62, 8); X.rotate(ang); fireBlade(len, 26 - Math.abs(k) * 3, ang, t, i + 50, 2, 0.05); X.restore();
    }
    for (let i = 0; i < 3; i++) {
      const x = 44 - i * 30;
      for (const sg of [-1, 1]) { const ang = Math.PI + sg * 0.34; X.save(); X.translate(x, sg < 0 ? 26 : -28); X.rotate(ang); fireBlade(78 + (i % 2) * 18, 12, ang, t, i * 2 + (sg > 0 ? 1 : 0) + 120, 0, 0.2); X.restore(); }
    }
    X.save(); X.beginPath(); X.ellipse(0, 0, 88, 42, 0, 0, TAU);
    const bg = X.createRadialGradient(24, -4, 4, 8, 0, 96);
    bg.addColorStop(0, 'rgb(255,245,205)'); bg.addColorStop(0.3, 'rgb(255,185,70)'); bg.addColorStop(0.7, 'rgb(226,80,24)'); bg.addColorStop(1, 'rgb(130,24,12)');
    X.fillStyle = bg; X.fill(); X.clip();
    X.strokeStyle = 'rgba(255,255,225,0.2)'; X.lineWidth = 2;
    for (let k = -1; k <= 1; k++) { X.beginPath(); for (let x = -82; x <= 82; x += 8) { const y = k * 12 + Math.sin(x * 0.09 + t * 4 + k * 1.7) * 4; x === -82 ? X.moveTo(x, y) : X.lineTo(x, y); } X.stroke(); }
    X.restore();
    X.save(); X.globalCompositeOperation = 'lighter';
    const gl = X.createRadialGradient(10, 0, 10, 10, 0, 110); gl.addColorStop(0, 'rgba(255,150,50,0.35)'); gl.addColorStop(1, 'rgba(255,100,30,0)');
    X.fillStyle = gl; X.fillRect(-110, -110, 230, 220); X.restore();
    const NP = [[46, -16], [100, -2], [76, -76], [118, -84]];
    for (let i = 0; i <= 18; i++) {
      const u = i / 18, m = 1 - u;
      const x = m*m*m*NP[0][0] + 3*m*m*u*NP[1][0] + 3*m*u*u*NP[2][0] + u*u*u*NP[3][0], y = m*m*m*NP[0][1] + 3*m*m*u*NP[1][1] + 3*m*u*u*NP[2][1] + u*u*u*NP[3][1];
      X.fillStyle = `rgb(${lerp(238, 255, u) | 0},${lerp(100, 178, u) | 0},${lerp(30, 62, u) | 0})`; X.beginPath(); X.arc(x, y, lerp(23, 10.5, Math.pow(u, 0.7)), 0, TAU); X.fill();
    }
    X.save(); X.translate(-2, -32); sideWing(t, 1, 1, 0, true, 0); X.restore();
    X.save(); X.translate(14, -8); X.scale(0.72, 0.9); chestClock(t); X.restore();
    for (let k = 0; k < 6; k++) {
      const u = 0.96 - k * 0.09, m = 1 - u;
      const x = m*m*m*NP[0][0] + 3*m*m*u*NP[1][0] + 3*m*u*u*NP[2][0] + u*u*u*NP[3][0], y = m*m*m*NP[0][1] + 3*m*m*u*NP[1][1] + 3*m*u*u*NP[2][1] + u*u*u*NP[3][1];
      const r = lerp(23, 10.5, Math.pow(u, 0.7)), a = -2.55 - k * 0.06 + Math.sin(t * 2.2 + k) * 0.05;
      X.save(); X.translate(x - r * 0.55, y - r * 0.8); X.rotate(a); fireBlade(58 + k * 12, 9, a, t, k + 160, 0, 0.2); X.restore();
    }
    for (const [ca, len, sd] of [[-2.25, 78, 1], [-2.75, 88, 2]]) { X.save(); X.translate(114, -98); X.rotate(ca + Math.sin(t * 2.3 + sd) * 0.05); fireBlade(len, 8, ca, t, sd + 140, 0, 0.2); X.restore(); }
    X.save(); X.translate(120, -76); X.rotate(Math.PI - 0.6); fireBlade(54, 8, Math.PI - 0.6, t, 150, 0, 0.15); X.restore();
    const hg = X.createRadialGradient(122, -90, 2, 124, -86, 26); hg.addColorStop(0, 'rgb(255,240,190)'); hg.addColorStop(0.55, 'rgb(255,160,56)'); hg.addColorStop(1, 'rgb(215,70,24)');
    X.fillStyle = hg; X.beginPath(); X.moveTo(109, -84); X.bezierCurveTo(109, -99, 130, -103, 141, -92); X.lineTo(143, -81); X.bezierCurveTo(134, -71, 115, -71, 109, -84); X.closePath(); X.fill();
    const bk = X.createLinearGradient(139, -94, 164, -72); bk.addColorStop(0, '#fff3b0'); bk.addColorStop(1, '#e8a020');
    X.fillStyle = bk; X.beginPath(); X.moveTo(139, -95); X.bezierCurveTo(150, -97, 160, -90, 165, -72); X.bezierCurveTo(158, -79, 150, -79, 142, -78); X.closePath(); X.fill();
    X.strokeStyle = 'rgba(120,60,10,0.5)'; X.lineWidth = 1; X.beginPath(); X.moveTo(143, -85); X.lineTo(158, -79); X.stroke();
    const hot = ph > 0.5;
    X.save(); X.translate(127, -90); X.rotate(hot ? 0.3 : 0.14);
    X.fillStyle = 'rgba(90,16,8,0.78)'; X.beginPath(); X.ellipse(0, 0, 6.4, 4.1, 0, 0, TAU); X.fill();
    X.fillStyle = hot ? 'rgb(255,255,240)' : 'rgb(190,230,255)'; X.beginPath(); X.ellipse(0, 0, 4.6, 2.8, 0, 0, TAU); X.fill();
    X.fillStyle = hot ? '#b01808' : '#10202e'; X.beginPath(); X.ellipse(1.5, 0, 1.2, 2.7, 0, 0, TAU); X.fill();
    X.strokeStyle = '#4a1006'; X.lineWidth = 2; X.beginPath(); X.moveTo(-7, -3.6); X.lineTo(7.4, -3.6); X.stroke();
    X.restore();
    X.restore();
  }
  function frontFigure(t) {
    tail(t);
    for (const s of [-1, 1]) { X.save(); X.translate(s * 20 * (1 - Math.abs(YAW) * 0.3), -30); X.scale(s * (1 + s * YAW * 0.34), 1); wing(t); X.restore(); }
    X.save(); X.scale(1.12 * (1 - Math.abs(YAW) * 0.2), 1.12); body(t); X.restore();
    X.save(); X.translate(YAW * 16, 0); X.scale(1 - Math.abs(YAW) * 0.15, 1); head(t); X.restore();
  }
  // st: {anger 0..1, sv 0=روبه‌رو..1=نیم‌رخ, amp 0..1 (شدت حرکت), yaw, fc (+1 راست / -1 چپ), alpha}
  const SILW = 760, SILH = 700;
  const SIL = (function () { const c = document.createElement('canvas'), tc = document.createElement('canvas'); c.width = tc.width = SILW; c.height = tc.height = SILH; return { c, x: c.getContext('2d'), t: tc, tx: tc.getContext('2d') }; })();
  function drawFig(t, FC) {
    if (SV < 0.98) { X.save(); X.globalAlpha *= 1 - SV; X.rotate(YAW * 0.13); frontFigure(t); X.restore(); }
    if (SV > 0.02) { X.save(); X.globalAlpha *= SV; X.scale(FC, 1); sideFigure(t); X.restore(); }
  }
  function render(cx, cy, sc, t, st) {
    ph = st.anger || 0; AMP = st.amp || 0; YAW = st.yaw || 0; SV = st.sv || 0; GDIM = st.dim ?? 1;
    const FC = st.fc || 1, al = st.alpha ?? 1;
    if (st.sil) {
      const o = SIL.x; X = o;
      o.setTransform(1, 0, 0, 1, 0, 0); o.globalCompositeOperation = 'source-over'; o.globalAlpha = 1; o.clearRect(0, 0, SILW, SILH);
      o.translate(SILW / 2, SILH / 2); drawFig(t, FC);
      o.setTransform(1, 0, 0, 1, 0, 0); o.globalCompositeOperation = 'source-in'; o.fillStyle = '#07060a'; o.fillRect(0, 0, SILW, SILH); o.globalCompositeOperation = 'source-over';
      X = GX;
      const q = SIL.tx; q.setTransform(1, 0, 0, 1, 0, 0); q.globalCompositeOperation = 'source-over'; q.clearRect(0, 0, SILW, SILH); q.drawImage(SIL.c, 0, 0);
      q.globalCompositeOperation = 'source-in'; q.fillStyle = st.rim || 'rgba(255,170,80,0.7)'; q.fillRect(0, 0, SILW, SILH); q.globalCompositeOperation = 'source-over';
      const d = clamp(2.4 / sc, 2, 22);
      X.save(); X.translate(cx, cy); X.scale(sc, sc); X.globalAlpha *= al;
      const gg = X.createRadialGradient(0, 0, 10, 0, 0, 340); gg.addColorStop(0, `rgba(255,150,70,${0.2 * (st.glow ?? 1)})`); gg.addColorStop(1, 'rgba(255,120,40,0)');
      X.fillStyle = gg; X.fillRect(-340, -340, 680, 680);
      for (const [dx, dy] of [[d, 0], [-d, 0], [0, d], [0, -d]]) X.drawImage(SIL.t, -SILW / 2 + dx, -SILH / 2 + dy);
      X.drawImage(SIL.c, -SILW / 2, -SILH / 2);
      X.restore(); return;
    }
    X.save(); X.translate(cx, cy); X.scale(sc, sc); X.globalAlpha *= al;
    X.save(); X.globalCompositeOperation = 'lighter';
    const ag = X.createRadialGradient(0, 0, 20, 0, 0, 360);
    ag.addColorStop(0, `rgba(255,${150 - 60 * ph},${50 + 40 * ph},${(0.3 + 0.3 * ph) * GDIM * 0.7})`); ag.addColorStop(1, 'rgba(255,150,50,0)');
    X.fillStyle = ag; X.fillRect(-360, -360, 720, 720); X.restore();
    X.save(); X.globalAlpha *= GDIM; halo(0, -6, t); embers(0, 0, t); sand(lerp(0, -FC * 150, SV), lerp(0, -120, SV), t); X.restore();
    drawFig(t, FC);
    X.restore();
  }
  return { render };
})(X);
function drawPhoenix(e) {
  const cx = eCx(e), cy = e.y + 35, rb = e.state === 'reborn', fd = e.state === 'fading';
  const k = fd ? clamp(1 - e.st / 170, 0.25, 1) : rb ? clamp(1 - e.st / 110, 0.12, 1) : 1, t = anim / 60, amp = e.pamp ?? 0.25;
  PHX.render(cx, cy - 6, 0.46 * k, t, {anger: e.pa || 0, sv: e.psv || 0, amp, yaw: Math.cos(t * 0.85) * amp * 0.85, fc: e.f || 1, dim: 0.72, alpha: fd ? clamp(1 - e.st / 200, 0.2, 1) : 1});
  if (e.flash > 0) { X.save(); X.globalCompositeOperation = 'lighter'; X.fillStyle = 'rgba(255,255,255,0.35)'; X.beginPath(); X.arc(cx, cy, 52 * k, 0, TAU); X.fill(); X.restore(); }
}
function drawPhoenixCine(c) {
  const p = c.ph; if (!p) return;
  const t = c.tAll / 1000, amp = p.mode === 'shrink' || p.mode === 'fly' ? 1 : 0.25;
  PHX.render(p.x, p.y, p.sc, t, {anger: p.anger || 0, sv: p.sv || 0, amp, yaw: Math.cos(t * 0.85) * amp * 0.85, fc: -1, sil: true, alpha: p.a});
}
