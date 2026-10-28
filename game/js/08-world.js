'use strict';

function trapSawX(t) { return t.min + (t.max - t.min) * (0.5 + 0.5 * Math.sin(gameTime * t.sp + (t.ph || 0))); }
function jetPhase(t) { const c = (gameTime + (t.off || 0)) % t.period; return c < t.warn ? 1 : c < t.warn + t.on ? 2 : 0; }
function updateTraps() {
  const L = LEVELS[levelIdx]; if (!L.traps) return;
  const pb = {x:P.x, y:P.y, w:18, h:30};
  for (const t of L.traps) {
    const cx = t.t === 'saw' ? (t.min + t.max) / 2 : t.x;
    if (Math.abs(P.x - cx) > 420) continue;
    let hit = false, bounce = false;
    if (t.t === 'spike') { if (AABB(pb, {x:t.x + 2, y:t.y + 3, w:t.w - 4, h:14})) { hit = true; bounce = true; } }
    else if (t.t === 'saw') { if (Math.hypot(P.x + 9 - trapSawX(t), P.y + 15 - t.y) < t.r + 9) hit = true; }
    else if (t.t === 'jet') { if (jetPhase(t) === 2 && AABB(pb, {x:t.x, y:t.y - t.h, w:t.w, h:t.h})) hit = true; }
    if (hit) { const hp = P.hp; damagePlayer(1); if (P.hp < hp && bounce && !P.dying) P.vy = -9; }
  }
}
function drawDeco() {
  const L = LEVELS[levelIdx]; if (!L.deco) return;
  const gy = GROUND;
  for (const d of L.deco) {
    if (d.x < camX - 150 || d.x > camX + W + 150) continue;
    const near = Math.abs(P.x + 9 - d.x) < 80, jit = near ? (Math.random() - 0.5) * 5 : 0;
    const gold = d.k === 'laugh', obj = d.k === 'dog' || d.k === 'hat' || d.k === 'feather', col = gold || obj ? '232,190,100' : '95,179,217';
    X.save();
    if (!obj) {
      const cyR = gy - 50, R = 48;
      X.strokeStyle = `rgba(${col},${0.35 + 0.15 * Math.sin(anim * 0.05 + d.x)})`; X.lineWidth = 1.6;
      X.beginPath(); X.arc(d.x, cyR, R, 0, TAU); X.stroke();
      X.setLineDash([4, 6]); X.beginPath(); X.arc(d.x, cyR, R + 9, anim * 0.01, anim * 0.01 + TAU); X.stroke(); X.setLineDash([]);
    }
    if (d.k === 'child') {
      const p = (anim % 360) / 360, op = (p < 0.94 ? 0.8 : 0.25) * (0.75 + 0.25 * Math.sin(anim * 0.3));
      const cxp = d.x - 34 + p * 68 + jit; drawFigure(cxp, gy - 17, 0.8, op, '#8fd8ff'); scarfBit(cxp, gy - 17 - 21 * 0.8, 0.8, op);
    } else if (d.k === 'still') {
      const sop = (0.55 + 0.25 * Math.sin(anim * 0.08)) * (near ? 0.6 + Math.random() * 0.4 : 1); drawFigure(d.x + jit, gy - 26, 1.2, sop, '#8fd8ff'); scarfBit(d.x + jit, gy - 26 - 21 * 1.2, 1.2, sop);
    } else if (d.k === 'laugh') {
      drawFigure(d.x + Math.sin(anim * 0.9) * 2, gy - 26, 1.2, 0.6, '#f0d98a');
      const q = anim % 70;
      X.font = 'bold 16px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = `rgba(250,230,150,${1 - q / 70})`;
      X.fillText('ها', d.x + Math.sin(anim * 0.1) * 6, gy - 100 - q * 0.5);
    } else if (d.k === 'dog') {
      X.translate(d.x, gy); X.scale(-1.4, 1.4); dogShape({sil:true, t:anim * 16.67, pose:'lie'});
    } else if (d.k === 'hat') {
      X.translate(d.x, gy - 2); X.rotate(0.18); X.scale(1.6, 1.6); hatShape(true);
    } else if (d.k === 'feather') {
      X.translate(d.x, gy - 14 + Math.sin(anim * 0.04 + d.x) * 4); X.rotate(-0.5);
      const fg = X.createRadialGradient(0, 0, 2, 0, 0, 26); fg.addColorStop(0, 'rgba(255,240,200,0.5)'); fg.addColorStop(1, 'rgba(255,200,120,0)'); X.fillStyle = fg; X.fillRect(-26, -26, 52, 52);
      X.fillStyle = '#f4ead0'; X.beginPath(); X.ellipse(0, 0, 14, 3.4, 0, 0, TAU); X.fill(); X.strokeStyle = '#f4ead0'; X.lineWidth = 1; X.beginPath(); X.moveTo(-14, 0); X.lineTo(14, 0); X.stroke();
    }
    X.restore();
  }
}
function scarfBit(x, y, sc, a) {
  X.save(); X.globalAlpha *= a; X.fillStyle = '#c8422a'; X.beginPath(); X.ellipse(x, y, 7 * sc, 2.6 * sc, 0, 0, TAU); X.fill();
  X.strokeStyle = '#c8422a'; X.lineWidth = 2.2 * sc; X.lineCap = 'round'; X.beginPath(); X.moveTo(x - 4 * sc, y); X.quadraticCurveTo(x - 11 * sc, y + 3 * sc + Math.sin(anim * 0.08) * 1.5, x - 16 * sc, y + sc); X.stroke(); X.restore();
}
function drawTraps() {
  const L = LEVELS[levelIdx]; if (!L.traps) return;
  for (const t of L.traps) {
    const cx = t.t === 'saw' ? (t.min + t.max) / 2 : t.x;
    if (cx < camX - 500 || cx > camX + W + 500) continue;
    if (t.t === 'spike') {
      const n = Math.max(1, Math.round(t.w / 10)), sw = t.w / n;
      X.fillStyle = '#9aa0ac';
      for (let i = 0; i < n; i++) { X.beginPath(); X.moveTo(t.x + i * sw, GROUND); X.lineTo(t.x + i * sw + sw / 2, t.y); X.lineTo(t.x + (i + 1) * sw, GROUND); X.closePath(); X.fill(); }
      X.fillStyle = 'rgba(200,66,42,0.55)'; X.fillRect(t.x, GROUND - 2, t.w, 2);
    } else if (t.t === 'saw') {
      const sx = trapSawX(t);
      X.fillStyle = 'rgba(90,80,80,0.55)'; X.fillRect(t.min - t.r, t.y - 1, t.max - t.min + t.r * 2, 2);
      X.save(); X.translate(sx, t.y); X.rotate(anim * 0.35);
      X.fillStyle = '#b8bcc6'; X.beginPath();
      for (let i = 0; i < 12; i++) { const a = i / 12 * TAU, r = i % 2 ? t.r * 0.78 : t.r; X.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      X.closePath(); X.fill();
      X.fillStyle = '#3a3d46'; X.beginPath(); X.arc(0, 0, t.r * 0.28, 0, TAU); X.fill(); X.restore();
    } else if (t.t === 'jet') {
      X.fillStyle = '#2a2d35'; X.fillRect(t.x - 2, t.y - 4, t.w + 4, 6);
      const ph = jetPhase(t);
      if (ph === 1) { X.fillStyle = `rgba(255,140,60,${0.3 + 0.25 * Math.sin(anim * 0.6)})`; X.fillRect(t.x + 2, t.y - 12, t.w - 4, 8); }
      if (ph === 2) {
        const g = X.createLinearGradient(0, t.y, 0, t.y - t.h); g.addColorStop(0, 'rgba(255,210,90,0.95)'); g.addColorStop(0.6, 'rgba(255,100,30,0.75)'); g.addColorStop(1, 'rgba(255,60,20,0)');
        X.fillStyle = g; X.fillRect(t.x, t.y - t.h, t.w, t.h);
      }
    }
  }
}


// ============================================================
// پس‌زمینه
// ============================================================
function buildBg() {
  const L = LEVELS[levelIdx];
  const b = mkHi(W, H), x = b.x;
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, L.sky[0]); g.addColorStop(1, L.sky[1]);
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  for (let i = 0; i < 80; i++) {
    x.fillStyle = `rgba(255,255,255,${0.12 + h2(i, 3) * 0.5})`;
    x.fillRect(h2(i, L.seed) * W, h2(i, L.seed + 9) * 230, 1.4, 1.4);
  }
  const mx = 620, my = 80;
  const mg = x.createRadialGradient(mx, my, 10, mx, my, 150);
  mg.addColorStop(0, 'rgba(240,220,180,0.4)'); mg.addColorStop(0.4, 'rgba(240,220,180,0.1)'); mg.addColorStop(1, 'rgba(240,220,180,0)');
  x.fillStyle = mg; x.fillRect(mx - 150, my - 150, 300, 300);
  const dg = x.createRadialGradient(mx - 8, my - 8, 4, mx, my, 32);
  dg.addColorStop(0, 'rgba(250,240,215,0.95)'); dg.addColorStop(1, 'rgba(210,190,155,0.9)');
  x.fillStyle = dg; x.beginPath(); x.arc(mx, my, 32, 0, TAU); x.fill();
  x.fillStyle = 'rgba(170,150,120,0.35)';
  x.beginPath(); x.arc(mx + 9, my - 7, 6, 0, TAU); x.fill();
  x.beginPath(); x.arc(mx - 11, my + 9, 4, 0, TAU); x.fill();
  x.beginPath(); x.arc(mx + 2, my + 14, 3, 0, TAU); x.fill();
  return b.c;
}
function nearObjs(L, cb) {
  const sp = 200, off = camX * 0.55;
  const c0 = Math.floor(off / sp) - 1, c1 = Math.floor((off + W) / sp) + 2;
  for (let c = c0; c <= c1; c++) {
    if (h2(c, L.seed + 20) < 0.3) continue;
    cb(c, c * sp - off + h2(c, L.seed + 21) * 60);
  }
}
const lampFlick = c => h2(Math.floor(anim / 5), c) > 0.08 ? 1 : 0.35;
function crackAmt() { const L = LEVELS[levelIdx], pi = (L.ch - 1) * 6 + (L.num - 1); return Math.max(0, (pi - 2) / 6); }
function drawCrackBg() {
  const amt = crackAmt(); if (amt <= 0) return;
  X.save(); X.lineCap = 'round'; X.lineJoin = 'round';
  for (let k = 0; k < Math.min(5, Math.ceil(amt)); k++) {
    const a = clamp(amt - k, 0, 1), pts = BGCK[k].slice(0, Math.floor(3 + a * 11) + 2), ox = -camX * 0.03;
    const path = () => { X.beginPath(); pts.forEach(([x, y], i) => i ? X.lineTo(x + ox, y) : X.moveTo(x + ox, y)); X.stroke(); };
    X.globalAlpha = 0.2 + 0.55 * a;
    X.strokeStyle = 'rgba(190,230,255,0.22)'; X.lineWidth = 2 + 5 * a; path();
    X.shadowColor = '#bfe8ff'; X.shadowBlur = 8 * a; X.strokeStyle = 'rgba(235,246,255,0.9)'; X.lineWidth = 0.7 + 1.2 * a; path(); X.shadowBlur = 0;
  }
  X.restore();
}
const NEAR_ALL = ['lamp', 'pipe', 'pillar', 'stack', 'tree'];
const nearType = (L, c) => { const list = L.nearList || NEAR_ALL; return list[((Math.floor(c / 7) + L.seed) % list.length + list.length) % list.length]; };
function drawBg() {
  const L = LEVELS[levelIdx];
  X.drawImage(bgCache, 0, 0, W, H);
  drawCrackBg();
  const off1 = camX * 0.08 + anim * 0.05;
  X.fillStyle = L.far; X.beginPath(); X.moveTo(0, H);
  for (let sx = 0; sx <= W; sx += 16) {
    const wx = sx + off1;
    X.lineTo(sx, 250 - 40*Math.abs(Math.sin(wx*0.006 + L.seed)) - 24*Math.abs(Math.sin(wx*0.017 + L.seed*2)) - 12*Math.sin(wx*0.05));
  }
  X.lineTo(W, H); X.closePath(); X.fill();
  const off2 = camX * 0.25 + anim * 0.12, cw = 84;
  const c0 = Math.floor(off2 / cw) - 1, c1 = Math.floor((off2 + W) / cw) + 2;
  for (let c = c0; c <= c1; c++) {
    if (h2(c, L.seed) < 0.18) continue;
    const bw = 48 + h2(c, L.seed + 1) * 40, bh = 50 + h2(c, L.seed + 2) * 110;
    const bx = c * cw - off2 + h2(c, L.seed + 3) * 20, by = 300 - bh;
    X.fillStyle = L.mid; X.fillRect(bx, by, bw, bh + 60);
    const rd = h2(c, L.seed + 4);
    if (rd < 0.25) { X.fillRect(bx + bw*0.4, by - 20, 3, 20); X.fillRect(bx + bw*0.4 - 5, by - 14, 13, 2); }
    else if (rd < 0.45) X.fillRect(bx + bw*0.15, by - 10, 12, 10);
    else if (rd < 0.6) { X.beginPath(); X.moveTo(bx, by); X.lineTo(bx + bw/2, by - 14); X.lineTo(bx + bw, by); X.fill(); }
    for (let wy = by + 10; wy < by + bh; wy += 13)
      for (let wx = bx + 6; wx < bx + bw - 8; wx += 11) {
        const hv = h2(c * 131 + Math.floor(wy), Math.floor(wx));
        if (hv < 0.62) continue;
        X.fillStyle = hv > 0.93 ? 'rgba(255,220,150,0.6)' : 'rgba(255,190,110,0.2)';
        X.fillRect(wx, wy, 5, 7);
      }
  }
  const fogG = X.createLinearGradient(0, 270, 0, H);
  fogG.addColorStop(0, 'rgba(20,18,28,0)'); fogG.addColorStop(1, 'rgba(20,18,28,0.75)');
  X.fillStyle = fogG; X.fillRect(0, 270, W, H - 270);
  X.fillStyle = '#06050a'; X.strokeStyle = '#06050a'; X.lineCap = 'round';
  nearObjs(L, (c, x) => {
    if (x < camX - 200 || x > camX + W + 200) return;
    switch (nearType(L, c)) {
      case 'lamp':
        X.fillRect(x - 2, GROUND - 130, 4, 130); X.fillRect(x - 5, GROUND - 6, 10, 6);
        X.lineWidth = 3; X.beginPath(); X.moveTo(x, GROUND - 128); X.quadraticCurveTo(x + 6, GROUND - 138, x + 24, GROUND - 130); X.stroke();
        X.fillRect(x + 17, GROUND - 130, 14, 5);
        X.fillStyle = `rgba(255,225,160,${0.9 * lampFlick(c)})`; X.beginPath(); X.arc(x + 24, GROUND - 124, 2.6, 0, TAU); X.fill();
        X.fillStyle = '#06050a'; break;
      case 'stack':
        X.fillRect(x - 15, GROUND - 175, 30, 175); X.fillRect(x - 18, GROUND - 180, 36, 8);
        X.fillStyle = `rgba(255,60,40,${0.5 + 0.5 * Math.sin(anim * 0.08 + c)})`; X.beginPath(); X.arc(x, GROUND - 186, 3, 0, TAU); X.fill();
        X.fillStyle = '#06050a'; break;
      case 'tree': {
        X.lineWidth = 6; X.beginPath(); X.moveTo(x, GROUND); X.lineTo(x + 3, GROUND - 70); X.stroke();
        for (let k = 0; k < 4; k++) {
          const dir = k % 2 ? 1 : -1, by = GROUND - 50 - k * 20, len = 36 + h2(c, k) * 26;
          X.lineWidth = 3; X.beginPath(); X.moveTo(x + 2, by); X.lineTo(x + dir * len, by - 22 - h2(c, k + 5) * 14); X.stroke();
          X.lineWidth = 1.6; X.beginPath(); X.moveTo(x + dir * len * 0.6, by - 14); X.lineTo(x + dir * (len + 12), by - 40); X.stroke();
        }
        break; }
      case 'pipe':
        X.fillRect(x - 70, GROUND - 100, 140, 12); X.fillRect(x - 70, GROUND - 100, 8, 100); X.fillRect(x + 62, GROUND - 100, 8, 100);
        X.fillRect(x - 74, GROUND - 104, 148, 4);
        X.fillStyle = 'rgba(95,179,217,0.5)'; X.fillRect(x - 6, GROUND - 99, 12, 2); X.fillStyle = '#06050a'; break;
      case 'hourglass':
        X.beginPath(); X.moveTo(x - 24, GROUND - 130); X.lineTo(x + 24, GROUND - 130); X.lineTo(x + 3, GROUND - 78); X.lineTo(x + 24, GROUND - 26); X.lineTo(x - 24, GROUND - 26); X.lineTo(x - 3, GROUND - 78); X.closePath(); X.fill();
        X.fillRect(x - 28, GROUND - 136, 56, 6); X.fillRect(x - 28, GROUND - 26, 56, 6);
        X.fillStyle = `rgba(255,190,100,${0.35 + 0.25 * Math.sin(anim * 0.05 + c)})`; X.fillRect(x - 1, GROUND - 76, 2, 40); X.fillStyle = '#06050a'; break;
      case 'clocktower':
        X.fillRect(x - 22, GROUND - 190, 44, 190); X.beginPath(); X.moveTo(x - 26, GROUND - 190); X.lineTo(x, GROUND - 222); X.lineTo(x + 26, GROUND - 190); X.closePath(); X.fill();
        X.fillStyle = 'rgba(255,200,120,0.5)'; X.beginPath(); X.arc(x, GROUND - 150, 11, 0, TAU); X.fill();
        X.strokeStyle = '#06050a'; X.lineWidth = 1.6; X.beginPath(); X.moveTo(x, GROUND - 150); X.lineTo(x + Math.cos(anim * 0.02 + c) * 8, GROUND - 150 + Math.sin(anim * 0.02 + c) * 8); X.stroke();
        X.fillStyle = '#06050a'; break;
      case 'pillar':
        X.beginPath(); X.moveTo(x - 16, GROUND); X.lineTo(x - 16, GROUND - 120); X.lineTo(x - 6, GROUND - 130); X.lineTo(x + 2, GROUND - 118);
        X.lineTo(x + 9, GROUND - 138); X.lineTo(x + 16, GROUND - 124); X.lineTo(x + 16, GROUND); X.closePath(); X.fill();
        X.fillRect(x - 22, GROUND - 8, 44, 8); break;
    }
  });
  for (let i = 0; i < 6; i++) {
    const fx = (((i * 190 - anim * (0.2 + i * 0.03) - camX * 0.7) % 1100) + 1100) % 1100 - 250;
    X.globalAlpha = 0.1 + (i % 3) * 0.03;
    X.drawImage(FOG, fx, GROUND - 52 + (i % 3) * 10, 320, 110);
  }
  X.globalAlpha = 1;
  const pr = clamp(camX / Math.max(1, L.width - W), 0, 1);
  X.fillStyle = `hsla(${(L.seed * 37 + pr * 110) % 360},55%,42%,0.07)`; X.fillRect(0, 0, W, H);
}

// ============================================================
// پلتفرم
// ============================================================
function drawPlatform(r) {
  const x = r[0], y = r[1], w = r[2], h = r[3];
  const g = X.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, '#2c2118'); g.addColorStop(0.18, '#1c1510'); g.addColorStop(1, '#0b0806');
  X.fillStyle = g; X.fillRect(x, y, w, h);
  X.strokeStyle = 'rgba(0,0,0,0.38)'; X.lineWidth = 1; X.beginPath();
  const bh = 13, bw = 34;
  for (let row = 0, yy = y + 8; yy < y + h; row++, yy += bh) {
    X.moveTo(x, yy + 0.5); X.lineTo(x + w, yy + 0.5);
    for (let xx = x + (row % 2) * bw / 2; xx < x + w; xx += bw) { X.moveTo(xx + 0.5, yy); X.lineTo(xx + 0.5, Math.min(yy + bh, y + h)); }
  }
  X.stroke();
  X.fillStyle = 'rgba(140,115,85,0.55)'; X.fillRect(x, y, w, 1.5);
  X.fillStyle = '#3a2a1e'; X.fillRect(x, y + 1.5, w, 3);
  for (let xx = x; xx < x + w; xx += 6) {
    const hv = h2(Math.floor(xx), y);
    if (hv < 0.45) continue;
    X.fillStyle = hv > 0.8 ? 'rgba(70,95,55,0.8)' : 'rgba(50,70,40,0.7)';
    X.fillRect(xx, y - 1 - hv * 4, 1.6, 1 + hv * 4);
  }
  if (h <= 24) { X.fillStyle = 'rgba(0,0,0,0.4)'; X.fillRect(x + 2, y + h, w - 4, 7); }
  if (y === GROUND) {
    const wet = LEVELS[levelIdx].amb === 'rain';
    for (let i = 0; i < 6; i++) {
      const px = h2(i, 77) * (w - 80) + 40;
      X.fillStyle = wet ? 'rgba(130,160,200,0.2)' : 'rgba(0,0,0,0.18)';
      X.beginPath(); X.ellipse(x + px, y + 3, 28 + h2(i, 5) * 20, 2.6, 0, 0, TAU); X.fill();
    }
  }
}

// ============================================================
// آیکون‌ها
// ============================================================
