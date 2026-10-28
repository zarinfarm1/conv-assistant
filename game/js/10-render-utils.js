'use strict';

function drawProjectiles() {
  for (const p of projectiles) {
    const w = p.type === 'enemy_bullet' ? null : WEAPONS[p.type];
    const col = p.col || (w && w.col) || '#fff';
    X.globalCompositeOperation = 'lighter';
    X.strokeStyle = col; X.lineCap = 'round';
    for (let i = 1; i < p.tr.length; i++) {
      X.globalAlpha = i / p.tr.length * 0.5; X.lineWidth = 1 + i * 0.5;
      X.beginPath(); X.moveTo(p.tr[i-1].x, p.tr[i-1].y); X.lineTo(p.tr[i].x, p.tr[i].y); X.stroke();
    }
    X.globalAlpha = 1;
    const gr = X.createRadialGradient(p.x, p.y, 0, p.x, p.y, 11);
    gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(255,255,255,0)');
    X.fillStyle = gr; X.beginPath(); X.arc(p.x, p.y, 11, 0, TAU); X.fill();
    X.globalCompositeOperation = 'source-over';
    switch (p.type) {
      case 'enemy_bullet': case 'gun':
        limb(p.x - p.vx * 1.6, p.y - p.vy * 1.6, p.x, p.y, 3, col); limb(p.x - p.vx * 0.8, p.y - p.vy * 0.8, p.x, p.y, 1.4, '#fff'); break;
      case 'sed': {
        const a = Math.atan2(p.vy, p.vx);
        X.save(); X.translate(p.x, p.y); X.rotate(a);
        X.fillStyle = '#cfe6f0'; X.fillRect(-6, -1.6, 8, 3.2); X.fillStyle = '#e86fb5'; X.fillRect(-4, -1, 4, 2);
        limb(2, 0, 7, 0, 1, '#bbc'); X.restore(); break; }
      case 'stone':
        X.save(); X.translate(p.x, p.y); X.rotate(p.rot); X.fillStyle = '#8a8a92'; X.fillRect(-3, -2.5, 6, 5); X.restore(); break;
      case 'mol':
        X.save(); X.translate(p.x, p.y); X.rotate(p.rot); X.scale(0.9, 0.9);
        X.fillStyle = 'rgba(70,150,90,0.95)'; X.beginPath(); X.roundRect(-4, -5, 8, 10, 2); X.fill();
        X.fillStyle = '#ff9a2a'; X.beginPath(); X.arc(0, -8, 3, 0, TAU); X.fill(); X.restore(); break;
    }
  }
}
function drawParticles() {
  for (const p of particles) {
    X.globalAlpha = p.life / p.maxLife;
    X.globalCompositeOperation = p.add ? 'lighter' : 'source-over';
    X.fillStyle = p.col;
    X.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
  }
  X.globalAlpha = 1; X.globalCompositeOperation = 'source-over';
}
function drawMarks() {
  for (const m of marks) {
    if (m.x < camX - 100 || m.x > camX + W + 100) continue;
    const a = m.life / m.maxLife;
    X.globalAlpha = a;
    if (m.type === 'ring') {
      X.strokeStyle = m.col; X.lineWidth = 3 * a; X.beginPath(); X.arc(m.x, m.y, m.r, 0, TAU); X.stroke();
    } else if (m.type === 'slash') {
      const prog = 1 - a;
      X.save(); X.translate(m.x, m.y); X.scale(m.dir, 1);
      X.strokeStyle = m.col; X.lineWidth = 5 * a; X.lineCap = 'round';
      X.beginPath(); X.arc(-18, 0, 30, -1.1 + prog * 1.6, 1.1 + prog * 1.6); X.stroke();
      X.strokeStyle = '#fff'; X.lineWidth = 1.6 * a; X.beginPath(); X.arc(-18, 0, 30, -1.1 + prog * 1.6, 1.1 + prog * 1.6); X.stroke();
      X.restore();
    } else if (m.type === 'ripple') {
      X.strokeStyle = 'rgba(160,185,220,0.5)'; X.lineWidth = 1; X.beginPath(); X.ellipse(m.x, m.y, m.r, m.r * 0.3, 0, 0, TAU); X.stroke();
    } else if (m.type === 'glyph') {
      const sc = 1 + (1 - a) * 0.6;
      X.save(); X.translate(m.x, m.y); X.rotate((1 - a) * 1.2);
      X.strokeStyle = m.col; X.lineWidth = 2; X.shadowColor = m.col; X.shadowBlur = 10;
      X.beginPath(); X.moveTo(0, -14 * sc); X.lineTo(12 * sc, 0); X.lineTo(0, 14 * sc); X.lineTo(-12 * sc, 0); X.closePath(); X.stroke();
      X.beginPath(); X.arc(0, 0, 4 * sc, 0, TAU); X.stroke(); X.restore();
    } else if (m.type === 'pool') {
      X.globalAlpha = 0.6 * Math.min(1, m.life / 200);
      X.fillStyle = '#4a0a08'; X.beginPath(); X.ellipse(m.x, m.y, m.r * Math.min(1, (m.maxLife - m.life) / 25 + 0.2), 5, 0, 0, TAU); X.fill();
    } else if (m.type === 'muzzle') {
      X.save(); X.translate(m.x, m.y); X.scale(m.dir, 1); X.globalCompositeOperation = 'lighter';
      X.fillStyle = '#ffd870'; X.beginPath(); X.moveTo(0, 0); X.lineTo(14, -4); X.lineTo(8, 0); X.lineTo(14, 4); X.closePath(); X.fill();
      X.restore();
    }
    X.globalCompositeOperation = 'source-over';
  }
  X.globalAlpha = 1;
}
function drawAmbient() {
  const L = LEVELS[levelIdx];
  for (const a of ambient) {
    if (a.type === 'rain') {
      X.strokeStyle = L.ambCol; X.lineWidth = 1;
      X.beginPath(); X.moveTo(a.x, a.y); X.lineTo(a.x + a.vx * 2, a.y + a.vy * 1.5); X.stroke();
    } else if (a.type === 'ember') {
      const alpha = (a.life / a.maxLife) * 0.8;
      X.globalCompositeOperation = 'lighter';
      X.globalAlpha = alpha; X.fillStyle = L.ambCol; X.beginPath(); X.arc(a.x, a.y, 1.5, 0, TAU); X.fill();
      X.globalAlpha = alpha * 0.25; X.beginPath(); X.arc(a.x, a.y, 4.5, 0, TAU); X.fill();
      X.globalCompositeOperation = 'source-over';
    } else {
      X.globalAlpha = 0.45; X.fillStyle = L.ambCol; X.beginPath(); X.arc(a.x, a.y, 1, 0, TAU); X.fill();
    }
  }
  X.globalAlpha = 1;
}
function collectLights() {
  const L = LEVELS[levelIdx];
  lights = [];
  const add = (x, y, r, c, a) => {
    if (x + r < camX - 100 || x - r > camX + W + 100) return;
    lights.push({x, y, r, c, a});
  };
  add(P.x + 9, P.y + 14, 190, '255,205,150', P.dying ? 0.4 : 0.95);
  add(620, 80, 260, '170,190,230', 0.4);
  add(L.exit[0] + L.exit[2]/2, L.exit[1] + L.exit[3]/2, 120, '255,200,90', exitUnlocked() ? 0.85 : 0.2);
  for (const it of items) add(it.x + 5, it.y, it.t === 'clock' ? 80 : 62, it.t === 'clock' ? '255,240,150' : '255,220,120', it.t === 'clock' ? 0.85 : 0.75);
  for (const e of enemies) {
    if (isDown(e)) continue;
    if (e.phantom && e.state !== 'windup' && e.state !== 'attack') continue;
    add(eCx(e), e.y + 8, e.boss ? (e.phase2 ? 170 : 110) : 54, e.boss ? '255,60,30' : '255,80,60', e.boss ? 0.65 : 0.45);
  }
  for (const p of projectiles) add(p.x, p.y, p.type === 'mol' ? 110 : 70, p.lc || WEAPONS[p.type].lc, 0.9);
  for (const m of marks) {
    if (m.type === 'ring') add(m.x, m.y, m.maxR * 2.3 * a2(m), m.lc, 0.8 * a2(m));
    else if (m.type === 'muzzle') add(m.x + m.dir * 8, m.y, 90, m.lc, 0.95);
  }
  if (L.gate) { const g = L.gate; add(g.x + g.w/2, g.y + g.h/2, 100, '255,110,50', gateOpen() ? 0.25 : 0.6); }
  if (L.deco) for (const d of L.deco) add(d.x, GROUND - 55, 120, (d.k === 'laugh' || d.k === 'dog' || d.k === 'hat' || d.k === 'feather') ? '240,200,120' : '110,190,240', 0.75);
  if (L.tplat) for (const t of L.tplat) if (tpOn(t)) add(t.x + t.w / 2, t.y, 75, '95,179,217', 0.55);
  nearObjs(L, (c, x) => {
    if (L.near === 'lamp') add(x + 24, GROUND - 126, 130, '255,215,150', 0.8 * lampFlick(c));
    else if (L.near === 'stack') add(x, GROUND - 186, 50, '255,60,40', 0.5 * (0.5 + 0.5 * Math.sin(anim * 0.08 + c)));
  });
}
const a2 = m => m.life / m.maxLife;
const LSPR = (function () { const c = mk(128, 128), x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return c; })();
const GLOWC = {};
function glowSprite(col) {
  let c = GLOWC[col];
  if (!c) { c = GLOWC[col] = mk(128, 128); const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, `rgba(${col},1)`); g.addColorStop(1, `rgba(${col},0)`); x.fillStyle = g; x.fillRect(0, 0, 128, 128); }
  return c;
}
function renderLight() {
  const L = LEVELS[levelIdx];
  LX.globalCompositeOperation = 'source-over';
  LX.globalAlpha = 1;
  LX.clearRect(0, 0, LC.width, LC.height);
  LX.fillStyle = `rgba(${L.dark},${L.darkA})`; LX.fillRect(0, 0, LC.width, LC.height);
  LX.globalCompositeOperation = 'destination-out';
  for (const l of lights) {
    const x = l.x - camX + LPAD, y = l.y + LPAD;
    LX.globalAlpha = l.a;
    LX.drawImage(LSPR, x - l.r, y - l.r, l.r * 2, l.r * 2);
  }
  LX.globalAlpha = 1;
  LX.globalCompositeOperation = 'source-over';
  X.drawImage(LC, -LPAD, -LPAD, W + LPAD * 2, H + LPAD * 2);
  X.globalCompositeOperation = 'lighter';
  for (const l of lights) {
    const sx = l.x - camX, sy = l.y, r = l.r * 0.9;
    X.globalAlpha = 0.2 * l.a;
    X.drawImage(glowSprite(l.c), sx - r, sy - r, r * 2, r * 2);
  }
  X.globalAlpha = 1;
  X.globalCompositeOperation = 'source-over';
}
