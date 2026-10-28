'use strict';

// ============================================================
// اینترو
// ============================================================
const INTRO = [
  { id:'swamp', dur:6500, lines:[
    {t:500, d:2400, s:'زمان یک مرداب است.'},
    {t:3200, d:2600, s:'هرچه بیشتر تلاش کنی، عمیق‌تر فرو می‌روی.'}
  ]},
  { id:'city', dur:9500, lines:[
    {t:400, d:1600, s:'سال ۲۰۸۹.'},
    {t:2200, d:3200, s:'پاریس در یک شب، با تمام مردمانش، در یک حلقه گم شد.'},
    {t:5600, d:1400, s:'بعد مسکو.'},
    {t:7200, d:1600, s:'بعد دیگر شهری نماند که اسم داشته باشد.'}
  ]},
  { id:'loops', dur:11200, lines:[
    {t:400, d:2800, s:'من افتادم جایی که زمان دیگر معنی نداشت.'},
    {t:3400, d:2800, s:'زنم در یکی از حلقه‌ها گیر کرد.'},
    {t:6400, d:1600, s:'پسرم در حلقه‌ای دیگر.'},
    {t:8200, d:2400, s:'نمی‌دانم چرا فقط من بیرون ماندم.'}
  ]},
  { id:'stutter', dur:10800, lines:[
    {t:400, d:2800, s:'هزاران بار مرگشان را به چشم دیدم.'},
    {t:3400, d:2800, s:'هزار بار خواستم خودم را بکشم.'},
    {t:6400, d:1000, s:'نشد.'},
    {t:7600, d:2400, s:'همیشه چیزی مانع می‌شد.'}
  ]},
  { id:'edge', dur:10500, lines:[
    {t:400, d:2800, s:'یک بار تا مرز رفتن پیش رفتم.'},
    {t:3400, d:1600, s:'ولی ترسیدم.'},
    {t:5200, d:1400, s:'نه از مرگ.'},
    {t:6800, d:3000, s:'از این‌که اگر من هم بروم، کسی نمی‌ماند که یادش باشد آن‌ها بودند.'}
  ]},
  { id:'agents', dur:14000, lines:[
    {t:400, d:2800, s:'بعد فهمیدم کسی این حلقه‌ها را نگه داشته.'},
    {t:3400, d:2200, s:'مأموران زمان.'},
    {t:5800, d:2600, s:'نه برای اینکه نابود کنند.'},
    {t:8600, d:3200, s:'برای اینکه بگذارند همه‌چیز همان‌طور بماند که هست.'},
    {t:12000, d:2200, s:'چون فکر می‌کنند تغییر، بدتر است.'}
  ]},
  { id:'device', dur:15200, lines:[
    {t:400, d:2800, s:'تا اینکه در یکی از حلقه‌ها چیزی پیدا کردم.'},
    {t:3400, d:2400, s:'وسیله‌ای عجیب. نصفه‌خراب.'},
    {t:6000, d:2600, s:'داخلش چیزی بود که شبیه دکمه نبود.'},
    {t:8800, d:2000, s:'ولی کار دکمه را می‌کرد.'},
    {t:11000, d:1600, s:'فشارش دادم.'},
    {t:12800, d:1600, s:'و ناگهان...'}
  ]},
  { id:'final', dur:13200, lines:[
    {t:500, d:3000, s:'در گذشته چشم باز کردم.'},
    {t:3800, d:3000, s:'نمی‌دانم می‌توانم آینده را عوض کنم یا نه.'},
    {t:7200, d:1800, s:'ولی حداقل...'},
    {t:9400, d:3000, s:'حداقل می‌توانم اینجا بمیرم.', slow:true, keep:true}
  ]}
];
const INTRO_GAP = 400;
const INTRO_STARTS = [];
let INTRO_TOTAL = 0;
(function () { let a = 0; for (const sc of INTRO) { INTRO_STARTS.push(a); a += sc.dur + INTRO_GAP; } INTRO_TOTAL = a; })();
const DEVICE_IDX = INTRO.findIndex(s => s.id === 'device');
let introT = 0, introFlash = 0, introFlashed = false, introStartBtn = false, introStarted = false;
let mode = 'intro';
function skipIntro() { introT = INTRO_TOTAL; introStartBtn = true; introFlashed = true; introFlash = 0; }
function drawFigure(cx, cy, sc, op, col) {
  X.globalAlpha = op;
  X.fillStyle = col || '#000';
  X.beginPath(); X.arc(cx, cy - 22*sc, 8*sc, 0, TAU); X.fill();
  X.beginPath();
  X.moveTo(cx - 7*sc, cy - 14*sc);
  X.lineTo(cx + 7*sc, cy - 14*sc);
  X.lineTo(cx + 5*sc, cy + 22*sc);
  X.lineTo(cx - 5*sc, cy + 22*sc);
  X.closePath(); X.fill();
  X.globalAlpha = 1;
}
function updateIntro() {
  if (!introStarted) return;
  introT += 16.67;
  if (!introFlashed && introT >= INTRO_STARTS[DEVICE_IDX] + 14000) { introFlash = 1; introFlashed = true; }
  if (introFlash > 0) { introFlash *= 0.9; if (introFlash < 0.02) introFlash = 0; }
  if (introT >= INTRO_TOTAL - INTRO_GAP) introStartBtn = true;
}
function introLocate() {
  const n = INTRO.length;
  for (let i = 0; i < n; i++) {
    const s = INTRO_STARTS[i], sc = INTRO[i];
    if (introT < s + sc.dur) return { sc, t: Math.max(0, introT - s), held: false };
    if (i < n - 1 && introT < s + sc.dur + INTRO_GAP) return { sc: null };
  }
  const sc = INTRO[n - 1];
  return { sc, t: sc.dur, held: true };
}
function drawSplash() {
  X.fillStyle = '#06060a'; X.fillRect(0, 0, W, H);
  const g = X.createRadialGradient(W / 2, H / 2, 20, W / 2, H / 2, 380); g.addColorStop(0, 'rgba(95,179,217,0.10)'); g.addColorStop(1, 'rgba(95,179,217,0)');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  X.textAlign = 'center'; X.direction = 'rtl';
  X.font = '900 58px Vazirmatn'; X.fillStyle = '#e6dfcf'; X.fillText('زمان فاجعه', W / 2, 190);
  X.font = '15px Vazirmatn'; X.fillStyle = `rgba(95,179,217,${0.55 + Math.sin(anim * 0.06) * 0.35})`;
  X.fillText('برای شروع، صفحه را لمس کن (تمام‌صفحه می‌شود)', W / 2, 270);
}
function renderIntro() {
  X.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (!introStarted) { anim++; drawSplash(); return; }
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  const loc = introLocate();
  if (loc.sc) {
    const sc = loc.sc, localT = loc.t;
    const inFade = Math.min(1, localT / 300);
    const outFade = (loc.held || sc.id === 'final') ? 1 : Math.min(1, (sc.dur - localT) / 300);
    X.save();
    X.globalAlpha = Math.min(inFade, outFade);
    switch (sc.id) {
      case 'swamp': renderSwamp(localT); break;
      case 'city': renderCity(localT); break;
      case 'loops': renderLoops(localT); break;
      case 'stutter': renderStutter(localT); break;
      case 'edge': renderEdge(localT); break;
      case 'agents': renderAgents(localT); break;
      case 'device': renderDevice(localT); break;
      case 'final': renderFinal(localT); break;
    }
    X.restore();
    renderIntroLines(sc, localT);
  }
  if (introFlash > 0.01) { X.fillStyle = `rgba(255,255,255,${introFlash})`; X.fillRect(0, 0, W, H); }
  X.drawImage(VG.c, 0, 0, W, H);
  if (!introStartBtn) {
    X.font = '13px Vazirmatn'; X.textAlign = 'center';
    X.fillStyle = 'rgba(141,138,128,0.65)';
    X.fillText('برای رد کردن، لمس کن', W / 2, H - 16);
  } else {
    const pulse = 0.5 + Math.sin(introT * 0.004) * 0.5;
    const gr = X.createRadialGradient(W/2, H/2 + 105, 0, W/2, H/2 + 105, 140);
    gr.addColorStop(0, `rgba(95,179,217,${0.3 + pulse*0.2})`);
    gr.addColorStop(1, 'rgba(95,179,217,0)');
    X.fillStyle = gr; X.fillRect(W/2 - 140, H/2 - 35, 280, 280);
    X.fillStyle = `rgba(95,179,217,${0.85 + pulse*0.15})`;
    X.beginPath(); X.roundRect(W/2 - 90, H/2 + 78, 180, 54, 10); X.fill();
    X.fillStyle = '#08080c'; X.font = 'bold 24px Vazirmatn'; X.textAlign = 'center';
    X.fillText(SAVE ? 'ادامه' : 'شروع', W/2, H/2 + 116);
    if (SAVE) { X.font = '13px Vazirmatn'; X.fillStyle = 'rgba(141,138,128,0.95)'; X.fillText(attLabel(SAVE.lv), W/2, H/2 + 152); }
  }
}
function renderIntroLines(scene, localT) {
  for (const line of scene.lines) {
    if (localT < line.t) continue;
    const lineT = localT - line.t;
    let opacity = 1;
    if (lineT < 250) opacity = lineT / 250;
    if (!line.keep && lineT > line.d - 250) opacity = Math.max(0, (line.d - lineT) / 250);
    if (opacity <= 0) continue;
    const floatY = Math.sin(lineT * 0.001) * 2;
    X.font = 'bold 26px Vazirmatn';
    X.shadowColor = 'rgba(0,0,0,0.95)'; X.shadowBlur = 14;
    if (line.slow) {
      const words = line.s.split(' ');
      const wordTime = 320;
      const wWidth = words.map(w => X.measureText(w).width);
      const spaceW = X.measureText(' ').width;
      const totalWidth = wWidth.reduce((s, w) => s + w, 0) + spaceW * (words.length - 1);
      let curX = W/2 + totalWidth/2;
      for (let i = 0; i < words.length; i++) {
        const wAppear = clamp((lineT - i * wordTime) / 200, 0, 1);
        if (wAppear > 0) {
          X.globalAlpha = wAppear * opacity;
          X.fillStyle = '#e6dfcf'; X.textAlign = 'right';
          X.fillText(words[i], curX, H/2 + floatY);
        }
        curX -= wWidth[i] + spaceW;
      }
      X.globalAlpha = 1;
    } else {
      X.globalAlpha = clamp(lineT / 350, 0, 1) * opacity;
      X.fillStyle = '#e6dfcf'; X.textAlign = 'center';
      X.fillText(line.s, W/2, H/2 + floatY);
      X.globalAlpha = 1;
    }
    X.shadowBlur = 0;
  }
}
function renderSwamp(t) {
  const g = X.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#050a08'); g.addColorStop(1, '#0a1815');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  const cx = W/2, cy = H - 60;
  for (let i = 0; i < 6; i++) {
    const phase = (t * 0.0006 + i * 0.15) % 1;
    const r = 40 + phase * 280;
    X.strokeStyle = `rgba(95,179,217,${(1 - phase) * 0.35})`; X.lineWidth = 2;
    X.beginPath(); X.ellipse(cx, cy, r, r * 0.35, 0, 0, TAU); X.stroke();
  }
  drawFigure(W/2, cy - 20 + Math.min(30, t * 0.004), 1.4, 0.9, '#000');
}
function renderCity(t) {
  const g = X.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#0a0810'); g.addColorStop(1, '#1a1020');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  X.fillStyle = 'rgba(255,255,255,0.4)';
  for (let i = 0; i < 60; i++) {
    const sx = (i * 137) % W, sy = (i * 53) % 220;
    X.globalAlpha = 0.2 + (0.5 + Math.sin(t * 0.002 + i) * 0.5) * 0.4;
    X.fillRect(sx, sy, 1.5, 1.5);
  }
  X.globalAlpha = 1;
  const buildings = [];
  for (let i = 0; i < 14; i++) {
    const bw = 45 + (i * 7 % 40), bh = 80 + (i * 37 % 120);
    buildings.push({ x: i * 60 + 10, y: H - 80 - bh, w: bw, h: bh });
  }
  const collapsePhase = clamp((t - 2000) / 5000, 0, 1);
  const collapseCount = Math.floor(collapsePhase * buildings.length);
  for (let i = 0; i < buildings.length; i++) {
    const b = buildings[i], collapsed = i < collapseCount;
    X.globalAlpha = collapsed ? Math.max(0.1, 1 - collapsePhase) : 1;
    X.fillStyle = '#0a0810'; X.fillRect(b.x, b.y, b.w, b.h);
    X.strokeStyle = 'rgba(80,60,100,0.5)'; X.lineWidth = 1; X.strokeRect(b.x, b.y, b.w, b.h);
    if (!collapsed) {
      for (let wy = b.y + 12; wy < b.y + b.h - 10; wy += 14)
        for (let wx = b.x + 6; wx < b.x + b.w - 6; wx += 12) {
          if ((wx * 7 + wy * 3) % 5 < 2) continue;
          X.fillStyle = `rgba(255,200,120,${0.5 + Math.sin(t*0.003 + wx)*0.3})`;
          X.fillRect(wx, wy, 5, 6);
        }
    }
    X.globalAlpha = 1;
  }
  for (let i = 0; i < collapseCount && i < buildings.length; i++) {
    const b = buildings[i], phase = (t - 2000 - i * 250) / 700;
    if (phase < 0 || phase > 1.5) continue;
    const a = phase < 1 ? phase : Math.max(0, 1 - (phase - 1) * 2);
    X.strokeStyle = `rgba(200,66,42,${a * 0.8})`; X.lineWidth = 2;
    X.beginPath(); X.arc(b.x + b.w/2, b.y + b.h/2, 30 + Math.min(1, phase) * 50, 0, TAU); X.stroke();
  }
  const dustY = H - 80, dustG = X.createLinearGradient(0, dustY - 40, 0, dustY);
  dustG.addColorStop(0, 'rgba(40,30,50,0)'); dustG.addColorStop(1, 'rgba(40,30,50,0.9)');
  X.fillStyle = dustG; X.fillRect(0, dustY - 40, W, 40);
}
function renderLoops(t) {
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  const loops = [
    { x: 180, y: 160, r: 70, fig: false }, { x: 350, y: 100, r: 55, fig: true },
    { x: 500, y: 180, r: 65, fig: false }, { x: 620, y: 120, r: 60, fig: true },
    { x: 250, y: 240, r: 50, fig: false }
  ];
  for (let i = 0; i < loops.length; i++) {
    const l = loops[i], lPhase = clamp((t - i * 200) / 800, 0, 1);
    if (lPhase <= 0) continue;
    X.strokeStyle = `rgba(95,179,217,${lPhase * 0.5})`; X.lineWidth = 1.5;
    X.beginPath(); X.arc(l.x, l.y, l.r * lPhase, 0, TAU); X.stroke();
    if (l.fig && lPhase > 0.7) {
      const figOp = (lPhase - 0.7) / 0.3 * 0.5, flicker = 0.7 + Math.sin(t * 0.005 + i) * 0.3;
      drawFigure(l.x, l.y + 15, 0.7, figOp * flicker, '#5fb3d9');
    }
  }
  drawFigure(W/2, H - 70, 1.5, 0.95, '#e6dfcf');
}
function renderStutter(t) {
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  const numbers = ['۱', '۱۰', '۱۰۰', '۱۰۰۰'];
  for (let i = 0; i < numbers.length; i++) {
    const appear = clamp((t - i * 800) / 400, 0, 1);
    if (appear <= 0) continue;
    X.globalAlpha = appear * 0.15;
    X.font = `bold ${60 + i * 20}px Vazirmatn`; X.fillStyle = '#c8422a'; X.textAlign = 'center';
    const angle = t * 0.0005 + i, r = 150 + i * 30;
    X.fillText(numbers[i], W/2 + Math.cos(angle) * r, H/2 + Math.sin(angle) * r * 0.6);
  }
  X.globalAlpha = 1;
  for (const f of [0, 0.3, 0.5, 0.7, 0.9]) {
    const phase = (t * 0.001 + f) % 1;
    if (phase > 0.5) continue;
    drawFigure(W/2 + Math.sin(t * 0.05 + f * 10) * 6, H - 70, 1.5, (1 - phase * 2) * 0.3, '#c8422a');
  }
  drawFigure(W/2, H - 70, 1.5, Math.sin(t * 0.02) > -0.3 ? 0.95 : 0.4, '#e6dfcf');
}
function renderEdge(t) {
  const g = X.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#0a0810'); g.addColorStop(1, '#1a0a10');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  const horizonY = H - 100;
  X.strokeStyle = 'rgba(200,66,42,0.4)'; X.lineWidth = 1;
  X.beginPath(); X.moveTo(0, horizonY); X.lineTo(W, horizonY); X.stroke();
  X.fillStyle = '#000'; X.fillRect(W/2 - 60, horizonY, 120, H - horizonY);
  const walkPhase = clamp(t / 6000, 0, 1);
  let px;
  if (walkPhase < 0.5) px = W/2 - 200 + (walkPhase * 2) * 130;
  else if (walkPhase < 0.65) px = W/2 - 70;
  else px = W/2 - 70 - ((walkPhase - 0.65) / 0.35) * 200;
  drawFigure(px, horizonY - 30, 1.2, 0.95, '#e6dfcf');
  for (let i = 0; i < 20; i++) {
    const dx = (i * 137 + t * 0.1) % W, dy = horizonY - 20 + Math.sin(t * 0.001 + i) * 10;
    X.fillStyle = 'rgba(200,66,42,0.15)'; X.fillRect(dx, dy, 1.5, 1.5);
  }
}
function renderAgents(t) {
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  const bg = X.createRadialGradient(W/2, H/2, 60, W/2, H/2, 400);
  bg.addColorStop(0, 'rgba(30,40,60,0.5)');
  bg.addColorStop(1, 'rgba(10,12,20,0)');
  X.fillStyle = bg; X.fillRect(0, 0, W, H);
  const groundY = H - 70;
  X.strokeStyle = 'rgba(95,179,217,0.25)'; X.lineWidth = 1;
  X.beginPath(); X.moveTo(0, groundY); X.lineTo(W, groundY); X.stroke();
  const positions = [170, 320, 480, 630];
  for (let i = 0; i < positions.length; i++) {
    const x = positions[i];
    const localT = t - i * 500;
    if (localT <= 0) continue;
    const a = Math.min(1, localT / 1200);
    const bob = Math.sin(t * 0.002 + i) * 1.5;
    X.globalAlpha = a * 0.9;
    X.fillStyle = '#0a0a12';
    X.beginPath();
    X.moveTo(x - 12, groundY);
    X.lineTo(x - 10, groundY - 50 + bob);
    X.lineTo(x + 10, groundY - 50 + bob);
    X.lineTo(x + 12, groundY);
    X.closePath(); X.fill();
    X.beginPath(); X.arc(x, groundY - 60 + bob, 10, 0, TAU); X.fill();
    X.fillStyle = '#f0e8e0';
    X.beginPath(); X.arc(x, groundY - 60 + bob, 8.5, 0, TAU); X.fill();
    X.fillStyle = '#0a0a10';
    X.beginPath(); X.ellipse(x - 3.5, groundY - 61 + bob, 2, 1.3, 0.2, 0, TAU); X.fill();
    X.beginPath(); X.ellipse(x + 3.5, groundY - 61 + bob, 2, 1.3, -0.2, 0, TAU); X.fill();
    X.fillStyle = `rgba(230,60,40,${0.55 + Math.sin(t * 0.15 + i) * 0.3})`;
    X.beginPath(); X.arc(x - 3.5, groundY - 61 + bob, 0.9, 0, TAU); X.fill();
    X.beginPath(); X.arc(x + 3.5, groundY - 61 + bob, 0.9, 0, TAU); X.fill();
    X.strokeStyle = '#5fb3d9'; X.lineWidth = 1.5; X.globalAlpha = a * 0.4;
    X.beginPath(); X.moveTo(x + 8, groundY - 48 + bob);
    X.quadraticCurveTo(x + 18 + Math.sin(t * 0.005 + i) * 3, groundY - 46 + bob, x + 26, groundY - 50 + bob);
    X.stroke();
    X.globalAlpha = 1;
  }
  const pAlpha = clamp((t - 3000) / 2000, 0, 1);
  if (pAlpha > 0) {
    X.globalAlpha = pAlpha * 0.95;
    X.save();
    X.translate(W/2, groundY);
    X.scale(1.5, 1.5);
    X.fillStyle = 'rgba(0,0,0,0.5)';
    X.beginPath(); X.ellipse(0, 1, 12, 3, 0, 0, TAU); X.fill();
    X.fillStyle = '#4a3828';
    X.beginPath(); X.roundRect(-8, -22, 16, 22, 3); X.fill();
    hoodHead(-27, {eyes: true});
    X.strokeStyle = '#8a2e22'; X.lineWidth = 2.4; X.lineCap = 'round';
    X.beginPath(); X.moveTo(-3, -20);
    X.quadraticCurveTo(-10 + Math.sin(t * 0.005) * 3, -18, -17, -20 + Math.sin(t * 0.008) * 2);
    X.stroke();
    X.restore();
    X.globalAlpha = 1;
  }
}
function renderDevice(t) {
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  for (let i = 0; i < 30; i++) {
    const dx = (i * 97 + t * 0.05) % W, dy = (i * 53 + Math.sin(t * 0.001 + i) * 30) % H;
    X.fillStyle = 'rgba(95,179,217,0.15)'; X.fillRect(dx, dy, 1.5, 1.5);
  }
  const deviceY = H/2, cx = W/2;
  const glow = 0.5 + Math.sin(t * 0.003) * 0.3;
  const gr = X.createRadialGradient(cx, deviceY, 0, cx, deviceY, 100);
  gr.addColorStop(0, `rgba(95,179,217,${glow * 0.3})`); gr.addColorStop(1, 'rgba(95,179,217,0)');
  X.fillStyle = gr; X.fillRect(cx - 100, deviceY - 100, 200, 200);
  const sc = 0.7 + clamp(t / 1500, 0, 1) * 0.3;
  X.save(); X.translate(cx, deviceY); X.scale(sc, sc);
  X.fillStyle = '#1a1a28'; X.beginPath(); X.roundRect(-40, -28, 80, 56, 4); X.fill();
  X.strokeStyle = 'rgba(95,179,217,0.5)'; X.lineWidth = 1.5; X.strokeRect(-40, -28, 80, 56);
  X.strokeStyle = 'rgba(95,179,217,0.2)'; X.lineWidth = 1;
  for (let i = -20; i < 28; i += 8) { X.beginPath(); X.moveTo(-35, i); X.lineTo(35, i); X.stroke(); }
  if (t > 4000) {
    const btnPulse = 0.5 + Math.sin(t * 0.005) * 0.5;
    const btnGlow = X.createRadialGradient(0, 0, 0, 0, 0, 15);
    btnGlow.addColorStop(0, `rgba(255,220,80,${0.7 + btnPulse * 0.3})`); btnGlow.addColorStop(1, 'rgba(255,220,80,0)');
    X.fillStyle = btnGlow; X.beginPath(); X.arc(0, 0, 15, 0, TAU); X.fill();
    X.fillStyle = '#ffdc50'; X.beginPath(); X.arc(0, 0, 3, 0, TAU); X.fill();
  }
  X.restore();
  if (t > 10000 && t < 12300) {
    const handY = H + 50 - clamp((t - 10000) / 1500, 0, 1) * (H - deviceY - 20);
    X.fillStyle = 'rgba(230,223,207,0.7)';
    X.beginPath(); X.arc(cx, handY, 18, 0, TAU); X.fill();
    X.fillRect(cx - 12, handY, 24, 60);
  }
}
function renderFinal(t) {
  X.fillStyle = '#08080c'; X.fillRect(0, 0, W, H);
  const gr = X.createRadialGradient(W/2, H/2, 0, W/2, H/2, 300);
  gr.addColorStop(0, 'rgba(95,179,217,0.08)'); gr.addColorStop(1, 'rgba(95,179,217,0)');
  X.fillStyle = gr; X.fillRect(0, 0, W, H);
  if (t < 6000) {
    const op = clamp(t / 1000, 0, 1) * clamp((6000 - t) / 1000, 0, 1);
    drawFigure(W/2, H - 70, 1.5, op * 0.5, '#e6dfcf');
  }
}

// ============================================================
// داده‌های بازی
// ============================================================
