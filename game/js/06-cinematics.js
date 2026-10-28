'use strict';

const mkCrack = (seed, x0) => { let sd = seed; const r = () => (sd = sd * 16807 % 2147483647) / 2147483647; const p = [[x0, 0]];
  for (let i = 0; i < 40; i++) { const [a, b] = p[p.length - 1]; p.push([a + (r() - 0.5) * 56, b + r() * 14 + 4]); } return p; };

const CK = mkCrack(7, 540), CK2 = mkCrack(19, 250), CK3 = mkCrack(31, 400), BGCK = [CK, CK2, CK3, mkCrack(43, 120), mkCrack(57, 680)];
function agentFx(e, x, y, killed) {
  if (killed) {
    spawnParticles(x, y, 'blood', 34);
    marks.push({type:'pool', x:e.x + 11, y:GROUND + 4, life:1200, maxLife:1200, r:26});
    marks.push({type:'glyph', x, y:y - 34, life:90, maxLife:90, col:'#ff4a3a'});
    say(pick(DIALOG.glyphR), 150, '#ff8a7a');
  } else {
    spawnParticles(x, y, 'light', 30);
    e.vanish = true;
    marks.push({type:'glyph', x, y:y - 34, life:90, maxLife:90, col:'#7fd0ff'});
    say(pick(DIALOG.glyphB), 150, '#9fe0ff');
  }
}
let cine = null;

function cineFinish() { const f = cine.after; cine = null; PAD.classList.remove('hide'); mode = 'play'; if (f) f(); }
function cineNext() { if (cine.i < cine.beats.length - 1) { cine.i++; cine.t = 0; } else cineFinish(); }
function talkSkip() { if (cine) cineFinish(); }
function talkAdvance() { if (cine && cine.t > 300) cineNext(); }
function startTalk(lines, after) {
  const isH = lines === KHAND_PRE || lines === KHAND_DEATH, fin = lines === KHAND_DEATH;
  const isP = lines === PHOENIX_PRE || lines === PHOENIX_DEATH, pd = lines === PHOENIX_DEATH;
  const death = lines === KIAN_DEATH || fin || pd, boss = isH ? 'h' : isP ? 'p' : 'k';
  const fi = lines.findIndex(l => l[2] === 'fade'), last = lines.length - 1;
  const beats = lines.map((l, i) => {
    const who = l[0], text = l[1];
    let shot = who === 's' ? 's' : who === 'k' ? 'k' : who === 'h' ? 'kh' : (death && l[2] === 'fade') ? 'k' : 'wide';
    if (!death && (i === 0 || i % 6 === 5 || i === last)) shot = 'wide';
    if (isP && !pd) shot = l[2] === 'close' ? 'phf' : who === 's' ? 's' : 'wide';
    else if (fin) shot = who === 's' ? 's' : i === last ? 'sk' : i === 0 ? 'wide' : l[2] === 'ghost' ? 'kh' : 'khl';
    else if (pd) shot = i === last ? 'sk' : who === 's' ? 's' : i === 0 ? 'wide' : 'ph';
    else if (death && i === last) shot = 'sk';
    return { who, text, shot, fx: l[2], dur: death && i === last ? 5400 : Math.max(2300, text.length * 62 + 1000) };
  });
  const kt = pd ? lines.map(() => 0) : fin ? lines.map((l, i) => i < fi ? 2 : 3) : lines.map((l, i) => i < fi ? 1 : i === fi ? 2 : 3);
  const em = Array.from({length: 46}, () => ({x: rnd(-100, 900), y: rnd(0, H), vx: rnd(-0.2, 0.3), vy: -rnd(0.2, 0.8), s: rnd(1, 2.4), ph: rnd(0, 6)}));
  cine = { beats, i:0, t:0, tAll:0, after, death, boss, kt, cracks: pd ? 3 : fin ? 2 : 1, cam:{...CINE_SHOT.wide}, kp:0, parts:[], em, enter:-1, hat:null,
    bx: fin ? 505 : 585, dog: isH ? (fin ? {x:900, mode:'away', ph:0} : {x:512, mode:'sit', ph:0}) : null,
    ph: isP ? {x:585, y:200, sc:0.55, a:1, mode:'big', sv:0, anger:0} : null, reach:0, reachT:0 };
  mode = 'talk'; PAD.classList.add('hide'); releaseInputs();
}
function talkUpdate() {
  const c = cine, b = c.beats[c.i];
  if (c.enter !== c.i) { c.enter = c.i; cineEnter(c, b); }
  c.t += 16.67; c.tAll += 16.67; anim++;
  const tg = CINE_SHOT[b.shot];
  c.cam.cx += (tg.cx - c.cam.cx) * 0.045; c.cam.cy += (tg.cy - c.cam.cy) * 0.045; c.cam.z += (tg.z - c.cam.z) * 0.045;
  const fin = c.boss === 'h' && c.death;
  if (c.death) c.kp += ((c.kt[c.i] ?? 3) - c.kp) * (fin ? 0.05 : 0.022);
  if (c.death && !fin && c.kp > 1.5 && c.kp < 2.9) for (let n = 0; n < 2; n++) c.parts.push({x: 590 + rnd(-30, 30), y: 312 + rnd(-26, 0), vx: rnd(-0.3, 0.3), vy: rnd(-1.5, -0.4), life: rnd(60, 130), maxLife: 130, s: rnd(1.5, 3.5)});
  if (fin) {
    if (c.kp > 2.05 && c.kp < 2.95) for (let n = 0; n < 3; n++) c.parts.push({x: c.bx + rnd(10, 190), y: 322 - rnd(8, 50), vx: rnd(-0.3, 0.3), vy: rnd(-1.6, -0.5), life: rnd(60, 130), maxLife: 130, s: rnd(1.5, 3.5)});
    if (c.kp > 1.6 && c.kp < 2.2 && Math.random() < 0.12) c.parts.push({x: c.bx + 158, y: 322 - 48, vx: rnd(-0.15, 0.15), vy: 0.3, life: 55, maxLife: 55, s: 1.6, tear: true});
    if (c.kp > 1.3 && c.kp < 2.2 && Math.random() < 0.05) c.parts.push({x: c.bx + 130 + rnd(-30, 30), y: 322 - 80, vx: rnd(-0.2, 0.2), vy: -0.7, life: 110, maxLife: 110, s: 1, txt: 'ها'});
  }
  if (c.hat) { const h = c.hat; h.vy += 0.35; h.x += h.vx; h.y += h.vy; h.rot += h.rv;
    if (h.y > 316) { h.y = 316; if (Math.abs(h.vy) > 2) { h.vy *= -0.42; h.rv *= 0.6; } else { h.vy = 0; h.vx *= 0.95; h.rv = h.vx / 9; } } }
  if (c.dog) { const d = c.dog;
    if (d.mode === 'run') { d.x -= 5.5; d.ph += 0.65; if (d.x <= 745) d.mode = 'sit'; } }
  for (let i = c.parts.length - 1; i >= 0; i--) { const p = c.parts[i]; p.x += p.vx; p.y += p.vy; if (p.tear) p.vy += 0.08; if (--p.life <= 0) c.parts.splice(i, 1); }
  for (const e of c.em) { e.x += e.vx + Math.sin(anim * 0.03 + e.ph) * 0.2; e.y += e.vy; if (e.y < -20) { e.y = H + 10; e.x = rnd(-100, 900); } }
  if (c.ph) { const p = c.ph;
    p.sv += (((p.mode === 'shrink' || p.mode === 'fly') ? 1 : 0) - p.sv) * 0.07;
    p.anger += (((!c.death && c.i === c.beats.length - 1) ? 1 : 0) - p.anger) * 0.04;
    if (p.mode === 'big') { p.y = 200 + Math.sin(c.tAll * 0.002) * 7; }
    else if (p.mode === 'shrink') { p.sc += (0.2 - p.sc) * 0.03; p.y += (215 - p.y) * 0.02; p.x += (470 - p.x) * 0.02; }
    else if (p.mode === 'fly') { p.x += (278 - p.x) * 0.05; p.y += (262 - p.y) * 0.05 + Math.sin(c.tAll * 0.01) * 0.6; p.sc += (0.11 - p.sc) * 0.05; if (Math.abs(p.x - 278) < 3) p.mode = 'sit'; }
    else if (p.mode === 'sit') { p.x = 278; p.y = 262 + Math.sin(c.tAll * 0.004) * 1.2; p.sc = 0.11; }
    else if (p.mode === 'fade') { p.a = Math.max(0, p.a - 0.012); if (c.tAll % 3 < 1) c.parts.push({x: p.x + rnd(-8, 8), y: p.y + rnd(-6, 6), vx: rnd(-0.2, 0.2), vy: -rnd(0.4, 1.2), life: rnd(50, 100), maxLife: 100, s: rnd(1.5, 3)}); }
    c.reach += ((c.reachT || 0) - c.reach) * 0.05;
  }
  if (c.t >= b.dur) cineNext();
}

function cineBg(c, gy) {
  const g = X.createLinearGradient(0, -420, 0, gy);
  g.addColorStop(0, '#05060c'); g.addColorStop(0.55, '#14101a'); g.addColorStop(0.84, '#3a1618'); g.addColorStop(1, '#6a2a1c');
  X.fillStyle = g; X.fillRect(-300, -420, W + 600, gy + 420);
  for (let i = 0; i < 70; i++) { X.fillStyle = `rgba(230,230,255,${0.2 + 0.16 * Math.sin(anim * 0.04 + i)})`; X.fillRect(-200 + (i * 197) % 1200, -400 + (i * 83) % 380, 1.7, 1.7); }
  const gl = X.createRadialGradient(400, gy - 20, 10, 400, gy - 20, 420);
  gl.addColorStop(0, 'rgba(200,70,34,0.42)'); gl.addColorStop(1, 'rgba(200,70,34,0)');
  X.fillStyle = gl; X.fillRect(-100, gy - 440, 1000, 460);
  X.fillStyle = '#0b0810'; X.beginPath(); X.moveTo(-300, gy - 12);
  for (let x = -300; x <= 1100; x += 22) X.lineTo(x, gy - 14 - (40 + 36 * Math.abs(Math.sin(x * 0.07)) + (Math.floor(x / 22) % 3 ? 0 : 30)));
  X.lineTo(1100, gy - 12); X.closePath(); X.fill();
  X.fillStyle = '#07060a';
  [[40, 170], [760, 150], [-40, 120], [840, 110]].forEach(([cx, h]) => {
    X.beginPath(); X.moveTo(cx - 17, gy); X.lineTo(cx - 17, gy - h); X.lineTo(cx - 6, gy - h - 9); X.lineTo(cx + 4, gy - h + 2); X.lineTo(cx + 17, gy - h - 6); X.lineTo(cx + 17, gy); X.closePath(); X.fill();
  });
  X.fillStyle = '#0c0a0e'; X.fillRect(-300, gy, W + 600, 140);
  const fl = X.createLinearGradient(0, 0, W, 0); fl.addColorStop(0, 'rgba(160,60,34,0)'); fl.addColorStop(0.5, 'rgba(160,60,34,0.45)'); fl.addColorStop(1, 'rgba(160,60,34,0)');
  X.fillStyle = fl; X.fillRect(-100, gy, 1000, 2);
  X.strokeStyle = 'rgba(90,50,40,0.25)'; X.lineWidth = 1;
  for (let i = 0; i < 6; i++) { X.beginPath(); X.moveTo(400 + (i - 2.5) * 40, gy + 2); X.lineTo(400 + (i - 2.5) * 220, gy + 120); X.stroke(); }
  X.globalAlpha = 0.32; X.drawImage(FOG, ((c.tAll * 0.02) % 1100) - 300, gy - 50, 520, 110); X.drawImage(FOG, ((c.tAll * 0.013 + 500) % 1100) - 300, gy - 34, 520, 90); X.globalAlpha = 1;
  if (c.death && c.i === c.beats.length - 1) {
    [[CK, 0, 14], [CK2, 1500, 14], [CK3, 3000, 7]].slice(0, c.cracks).forEach(([path, delay, mx]) => {
      const n = clamp((c.t - delay) / 330, 0, mx), pts = path.slice(0, Math.floor(n) + 2);
      if (n <= 0) return;
      X.save(); X.translate(0, -330); X.lineCap = 'round'; X.lineJoin = 'round';
      X.strokeStyle = 'rgba(190,230,255,0.22)'; X.lineWidth = 12; X.beginPath(); pts.forEach(([x, y], i) => i ? X.lineTo(x, y) : X.moveTo(x, y)); X.stroke();
      X.shadowColor = '#bfe8ff'; X.shadowBlur = 16; X.strokeStyle = '#eaf6ff'; X.lineWidth = 2.4;
      X.beginPath(); pts.forEach(([x, y], i) => i ? X.lineTo(x, y) : X.moveTo(x, y)); X.stroke(); X.restore();
    });
  }
}
function cineSh(x, gy, sc, t, talking, reach) {
  X.save(); X.translate(x, gy); X.scale(sc, sc);
  const br = Math.sin(t * 0.0022) * 0.5, ra = talking ? 0.75 + 0.2 * Math.sin(t * 0.02) : 0.32, rim = `rgba(255,170,110,${ra})`;
  X.fillStyle = 'rgba(0,0,0,0.55)'; X.beginPath(); X.ellipse(0, 1, 12, 3, 0, 0, TAU); X.fill();
  X.fillStyle = '#07060a';
  X.beginPath(); X.moveTo(-7, -25 + br); X.quadraticCurveTo(-15 + Math.sin(t * 0.003) * 2, -14, -13 + Math.sin(t * 0.004) * 3, -3); X.lineTo(-3, -7); X.closePath(); X.fill();
  X.fillRect(-5, -12, 4.2, 12); X.fillRect(1, -12, 4.2, 12); X.fillRect(-6, -2, 6, 2.4); X.fillRect(1, -2, 6.4, 2.4);
  X.beginPath(); X.moveTo(-8, -25 + br); X.lineTo(8, -25 + br); X.lineTo(10, -7); X.lineTo(-10, -7); X.closePath(); X.fill();
  X.strokeStyle = '#07060a'; X.lineWidth = 4.2; X.lineCap = 'round'; X.beginPath(); X.moveTo(6, -22 + br); X.lineTo(9 + (reach || 0) * 13, -13 - (reach || 0) * 7); X.stroke();
  X.fillRect(-2.6, -25 + br, 5.2, 3);
  hoodHead(-31 + br, {sil: true, rim});
  X.strokeStyle = '#8a2e22'; X.lineWidth = 2.6; X.beginPath(); X.moveTo(-3, -25 + br);
  X.quadraticCurveTo(-11 + Math.sin(t * 0.004) * 3, -22, -18, -24 + Math.sin(t * 0.006) * 2.4); X.stroke();
  X.strokeStyle = rim; X.lineWidth = 0.9;
  X.beginPath(); X.moveTo(8, -24 + br); X.lineTo(10, -7); X.stroke();
  X.restore();
}
function cineKi(x, gy, sc, t, talking, kp) {
  const kk = Math.min(kp, 1), lie = clamp(kp - 1, 0, 1), dn = 7 * kk;
  X.save(); X.translate(x, gy); X.rotate(-1.52 * lie);
  X.globalAlpha = kp > 2 ? clamp(1 - (kp - 2) * 1.2, 0, 1) : 1;
  X.scale(-sc, sc);
  const br = Math.sin(t * 0.002) * 0.5, ra = talking ? 0.7 + 0.2 * Math.sin(t * 0.02) : 0.32, rim = `rgba(255,110,80,${ra})`;
  X.fillStyle = 'rgba(0,0,0,0.55)'; X.beginPath(); X.ellipse(0, 1, 13, 3, 0, 0, TAU); X.fill();
  X.fillStyle = '#060509'; const lh = 13 - 7 * kk;
  X.fillRect(-5.5, -lh, 4.6, lh); X.fillRect(1.2, -lh, 4.6, lh); X.fillRect(-6.4, -2, 6.4, 2.4); X.fillRect(1.2, -2, 7, 2.4);
  X.save(); X.translate(0, dn);
  X.beginPath(); X.moveTo(-9, -26 + br); X.lineTo(9, -26 + br); X.lineTo(12.5, -5); X.lineTo(-12.5, -5); X.closePath(); X.fill();
  X.beginPath(); X.arc(-9, -25.5 + br, 3.4, 0, TAU); X.arc(9, -25.5 + br, 3.4, 0, TAU); X.fill();
  X.strokeStyle = '#060509'; X.lineWidth = 4.4; X.lineCap = 'round'; X.beginPath(); X.moveTo(7, -23 + br); X.lineTo(10, -14); X.stroke();
  X.beginPath(); X.arc(0, -33 + br, 8.2, 0, TAU); X.fill(); X.fillRect(-3, -27 + br, 6, 4);
  X.strokeStyle = '#d4dbe6'; X.lineWidth = 2; X.beginPath(); X.moveTo(10.4, -14); X.lineTo(15.5, 1.5 - dn); X.stroke();
  X.strokeStyle = '#3a2c20'; X.lineWidth = 2.6; X.beginPath(); X.moveTo(6.6, -14.6); X.lineTo(14, -13); X.stroke();
  X.strokeStyle = rim; X.lineWidth = 1;
  X.beginPath(); X.arc(0, -33 + br, 8.2, -1.25, 1.25); X.stroke();
  X.beginPath(); X.moveTo(9, -25 + br); X.lineTo(12.5, -5); X.stroke();
  X.restore(); X.restore();
}
function drawTalk() {
  const c = cine, b = c.beats[c.i], last = c.i === c.beats.length - 1, gy = 322;
  const bar = Math.min(1, c.tAll / 700) * 46;
  const glow = (x, y, r, col, a) => { const g = X.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`); X.fillStyle = g; X.fillRect(x - r, y - r, r * 2, r * 2); };
  X.save();
  X.fillStyle = '#05050a'; X.fillRect(0, 0, W, H);
  X.translate(W / 2, H / 2); X.scale(c.cam.z, c.cam.z); X.translate(-c.cam.cx, -c.cam.cy);
  cineBg(c, gy);
  if (b.shot !== 'sk') {
    if (b.who === 's') glow(238, gy - 80, 150, '255,170,100', 0.28);
    if (b.who === 'k') glow(560, gy - 90, 160, '255,90,60', 0.26);
    if (b.who === 'h') glow((c.bx || 585) + (c.kp >= 1 ? 80 : -10), gy - (c.kp >= 1 ? 40 : 110), 230, '255,220,110', 0.24);
    cineSh(215, gy, 2.7, c.tAll, b.who === 's', c.reach || 0);
    if (c.boss === 'p') drawPhoenixCine(c);
    else if (c.boss === 'h') drawKhandCine(c, b, gy);
    else { const kp = c.death ? c.kp : 0; if (kp < 3.2) cineKi(585, gy, 3.1, c.tAll, b.who === 'k', kp); }
  }
  X.globalCompositeOperation = 'lighter';
  for (const e of c.em) { X.fillStyle = `rgba(255,${120 + (e.ph * 20 | 0)},50,${0.3 + 0.25 * Math.sin(anim * 0.07 + e.ph)})`; X.fillRect(e.x, e.y, e.s, e.s); }
  for (const p of c.parts) {
    if (p.txt) { X.font = 'bold 18px Vazirmatn'; X.fillStyle = `rgba(250,230,150,${p.life / p.maxLife})`; X.textAlign = 'center'; X.fillText(p.txt, p.x, p.y); continue; }
    X.fillStyle = p.tear ? `rgba(170,215,255,${p.life / p.maxLife})` : `rgba(190,232,255,${p.life / p.maxLife})`; X.fillRect(p.x, p.y, p.s, p.tear ? p.s * 1.8 : p.s);
  }
  X.globalCompositeOperation = 'source-over';
  X.restore();
  X.drawImage(VG.c, 0, 0, W, H);
  X.fillStyle = '#000'; X.fillRect(0, 0, W, bar); X.fillRect(0, H - bar, W, bar);
  const a = Math.min(1, c.t / 260) * Math.min(1, (b.dur - c.t) / 260);
  X.textAlign = 'center'; X.direction = 'rtl';
  X.font = (b.who === 'n' ? 'italic ' : '') + 'bold 24px Vazirmatn';
  const lines = wrapText(b.text, 660), col = {s:'#f3dcc2', k:'#b4cdf4', h:'#f0d98a', n:'#bdb9ad'}[b.who];
  const y0 = H - bar - 22 - (lines.length - 1) * 30;
  X.shadowColor = 'rgba(0,0,0,0.95)'; X.shadowBlur = 12; X.globalAlpha = Math.max(0, a); X.fillStyle = col;
  lines.forEach((t, i) => X.fillText(t, W / 2, y0 + i * 30));
  if (b.who !== 'n') { X.font = 'bold 13px Vazirmatn'; X.globalAlpha = Math.max(0, a) * 0.75; X.fillText(({s:'شروین', k:'کیان', h:'خندانور'}[b.who]), W / 2, y0 - 28); }
  X.shadowBlur = 0; X.globalAlpha = 1;
  X.font = '12px Vazirmatn'; X.fillStyle = 'rgba(160,156,146,0.55)';
  X.textAlign = 'right'; X.fillText('رد کردن ⏭', W - 16, 28);
  X.textAlign = 'left'; X.fillText('لمس: خط بعد', 16, H - 16);
  const fo = Math.max(1 - c.tAll / 900, last ? (c.t - (b.dur - 500)) / 500 : 0);
  if (fo > 0.01) { X.fillStyle = `rgba(0,0,0,${Math.min(1, fo)})`; X.fillRect(0, 0, W, H); }
}
function wrapText(t, w) {
  const o = []; let cur = '';
  for (const wd of t.split(' ')) { const x = cur ? cur + ' ' + wd : wd; if (X.measureText(x).width > w && cur) { o.push(cur); cur = wd; } else cur = x; }
  o.push(cur); return o;
}
function endChapter() {
  mode = 'chapter-end'; endingT = 0; PAD.classList.add('hide');
  newPowerThisChapter = null;
  const L = LEVELS[levelIdx];
  if (L.boss) {
    const power = (L.bossId === 3 || L.phoenix) ? 'phoenix' : L.bossId === 2 ? 'khand' : 'kian';
    if (!POWERS[power]) { POWERS[power] = true; savePowers(); newPowerThisChapter = power; }
  }
  const nx = LEVELS.findIndex(l => l.ch === LEVELS[levelIdx].ch + 1);
  writeSave(nx >= 0 ? nx : 0, nx >= 0 ? kills : 0);
}
