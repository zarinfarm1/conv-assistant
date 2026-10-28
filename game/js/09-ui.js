'use strict';

// ============================================================
// آیکون‌ها
// ============================================================
function drawIcon(t, x, y, s) {
  X.save(); X.translate(x, y); X.scale(s, s); X.lineCap = 'round'; X.lineJoin = 'round';
  switch (t) {
    case 'heart':
      heart(0, 0, 7, '#e0443a'); X.fillStyle = 'rgba(255,255,255,0.4)'; X.beginPath(); X.arc(-2.5, -2, 1.4, 0, TAU); X.fill();
      break;
    case 'fist':
      X.fillStyle = '#d8c8a8'; X.beginPath(); X.roundRect(-7, -6, 14, 12, 3); X.fill();
      X.strokeStyle = '#8a7860'; X.lineWidth = 1;
      for (let i = -3; i <= 3; i += 3) { X.beginPath(); X.moveTo(i, -6); X.lineTo(i, -1); X.stroke(); }
      break;
    case 'sword':
      X.strokeStyle = '#cfd8e2'; X.lineWidth = 3.2; X.beginPath(); X.moveTo(-7, 7); X.lineTo(8, -8); X.stroke();
      X.strokeStyle = '#fff'; X.lineWidth = 1; X.beginPath(); X.moveTo(-5, 5); X.lineTo(7, -7); X.stroke();
      X.strokeStyle = '#8a5a28'; X.lineWidth = 3; X.beginPath(); X.moveTo(-9, 3); X.lineTo(-3, 9); X.stroke();
      X.lineWidth = 2.6; X.beginPath(); X.moveTo(-7, 7); X.lineTo(-11, 11); X.stroke();
      break;
    case 'sed':
      X.rotate(-0.6);
      X.fillStyle = '#cfe6f0'; X.beginPath(); X.roundRect(-8, -3, 14, 6, 1.5); X.fill();
      X.fillStyle = '#e86fb5'; X.fillRect(-6, -2, 8, 4);
      X.strokeStyle = '#9ab'; X.lineWidth = 1.4; X.beginPath(); X.moveTo(6, 0); X.lineTo(11, 0); X.moveTo(11, -3.5); X.lineTo(11, 3.5); X.moveTo(-8, 0); X.lineTo(-13, 0); X.stroke();
      break;
    case 'stone':
      X.fillStyle = '#8a8a92'; X.strokeStyle = '#4a4a52'; X.lineWidth = 1;
      X.beginPath(); X.moveTo(-6, 2); X.lineTo(-3, -5); X.lineTo(4, -6); X.lineTo(7, 0); X.lineTo(4, 6); X.lineTo(-3, 6); X.closePath(); X.fill(); X.stroke();
      break;
    case 'gun':
      X.fillStyle = '#2a2a32'; X.beginPath(); X.roundRect(-9, -5, 17, 5, 1); X.fill();
      X.beginPath(); X.moveTo(-5, 0); X.lineTo(1, 0); X.lineTo(0, 8); X.lineTo(-5, 8); X.closePath(); X.fill();
      X.fillStyle = '#6a6a74'; X.fillRect(-8, -4, 14, 1.2);
      break;
    case 'mol':
      X.fillStyle = 'rgba(70,150,90,0.95)'; X.beginPath(); X.roundRect(-4.5, -1, 9, 11, 2.5); X.fill();
      X.fillRect(-2, -7, 4, 7);
      X.fillStyle = '#d8c8a0'; X.fillRect(-2.5, -9, 5, 3);
      X.fillStyle = '#ff9a2a'; X.beginPath(); X.arc(0, -11, 2.6, 0, TAU); X.fill();
      X.fillStyle = '#ffe070'; X.beginPath(); X.arc(0, -10.6, 1.2, 0, TAU); X.fill();
      break;
    case 'card':
      X.fillStyle = '#f0c050'; X.beginPath(); X.roundRect(-9, -6, 18, 12, 2); X.fill();
      X.fillStyle = '#8a5a12'; X.fillRect(-9, -2, 18, 3); X.fillStyle = '#c89a30'; X.fillRect(-6, 3, 6, 2);
      break;
    case 'clock':
      X.strokeStyle = '#e8a838'; X.lineWidth = 1.5;
      X.beginPath(); X.arc(0, 0, 7, 0, TAU); X.stroke();
      X.fillStyle = '#ffe070'; X.beginPath(); X.arc(0, 0, 6, 0, TAU); X.fill();
      X.strokeStyle = '#5a3a10'; X.lineWidth = 1;
      X.beginPath(); X.moveTo(0, 0); X.lineTo(0, -3.2); X.moveTo(0, 0); X.lineTo(2.6, 1.2); X.stroke();
      X.fillStyle = '#e8a838'; X.fillRect(-1.5, -10, 3, 2.2);
      X.beginPath(); X.arc(0, -11.5, 1.2, 0, TAU); X.fill();
      break;
  }
  X.restore();
}
function heart(x, y, s, c) {
  X.fillStyle = c; X.beginPath(); X.moveTo(x, y + s);
  X.bezierCurveTo(x - s*1.5, y - s*0.1, x - s*0.6, y - s*1.2, x, y - s*0.4);
  X.bezierCurveTo(x + s*0.6, y - s*1.2, x + s*1.5, y - s*0.1, x, y + s); X.fill();
}
function limb(x1, y1, x2, y2, w, c) {
  X.strokeStyle = c; X.lineWidth = w; X.lineCap = 'round';
  X.beginPath(); X.moveTo(x1, y1); X.lineTo(x2, y2); X.stroke();
}
function drawMask(cx, cy, r, glow) {
  const g = X.createRadialGradient(cx - r*0.3, cy - r*0.3, r*0.1, cx, cy, r);
  g.addColorStop(0, '#f6efe6'); g.addColorStop(1, '#bdb2a4');
  X.fillStyle = g; X.beginPath(); X.arc(cx, cy, r, 0, TAU); X.fill();
  X.fillStyle = '#0a0a10';
  X.beginPath(); X.ellipse(cx - r*0.38, cy - r*0.1, r*0.24, r*0.13, 0.2, 0, TAU); X.ellipse(cx + r*0.38, cy - r*0.1, r*0.24, r*0.13, -0.2, 0, TAU); X.fill();
  if (glow) {
    X.fillStyle = `rgba(230,60,40,${0.55 + Math.sin(anim * 0.15) * 0.3})`;
    X.beginPath(); X.arc(cx - r*0.38, cy - r*0.1, r*0.1, 0, TAU); X.arc(cx + r*0.38, cy - r*0.1, r*0.1, 0, TAU); X.fill();
  }
  X.strokeStyle = 'rgba(60,50,45,0.6)'; X.lineWidth = 0.9;
  X.beginPath(); X.moveTo(cx - r*0.3, cy + r*0.5); X.lineTo(cx + r*0.3, cy + r*0.5); X.stroke();
}

// ============================================================
// HUD و پایان فصل
// ============================================================
function panel(x, y, w, h) { X.fillStyle = 'rgba(6,6,10,0.62)'; X.beginPath(); X.roundRect(x, y, w, h, 8); X.fill(); X.strokeStyle = 'rgba(255,255,255,0.07)'; X.lineWidth = 1; X.stroke(); }

function drawHUD() {
  if (P.slowT > 0) { X.fillStyle = 'rgba(80,140,220,0.10)'; X.fillRect(0, 0, W, H); }
  if (LEVELS[levelIdx].phoenix) drawPhoenixHUD();
  const L = LEVELS[levelIdx];
  panel(10, 10, 196, 28);
  X.strokeStyle = '#5fb3d9'; X.lineWidth = 1.6; X.beginPath(); X.arc(25, 24, 7, 0, TAU); X.stroke();
  X.beginPath(); X.moveTo(25, 24); X.lineTo(25, 19.5); X.moveTo(25, 24); X.lineTo(28.5, 25.5); X.stroke();
  X.fillStyle = 'rgba(255,255,255,0.08)'; X.beginPath(); X.roundRect(40, 19, 120, 10, 5); X.fill();
  if (histCount > 0) {
    const bg = X.createLinearGradient(40, 0, 160, 0); bg.addColorStop(0, '#2a6f93'); bg.addColorStop(1, '#8fd8ff');
    X.fillStyle = bg; X.beginPath(); X.roundRect(40, 19, Math.max(8, 120 * histCount / HIST), 10, 5); X.fill();
  }
  X.fillStyle = 'rgba(0,0,0,0.35)'; for (let i = 1; i < 5; i++) X.fillRect(40 + i * 24, 19, 1, 10);
  X.font = 'bold 11px Vazirmatn'; X.fillStyle = '#cfe8f5'; X.textAlign = 'left';
  X.fillText((histCount * SNAP_EVERY / 60).toFixed(1) + 's', 166, 28);
  for (let i = 0, mh = maxHp(); i < mh; i++) heart(24 + i * 24, 54, 8, i < P.hp ? '#c8422a' : '#2a2d35');
  const ready = P.dcd <= 0;
  X.strokeStyle = ready ? '#e8a838' : '#3a3d45'; X.lineWidth = 2.4; X.beginPath();
  X.arc(20, 78, 6.5, -Math.PI / 2, -Math.PI / 2 + TAU * (ready ? 1 : Math.max(0, 1 - P.dcd / dashCd()))); X.stroke();
  X.fillStyle = ready ? '#e8a838' : '#3a3d45'; X.beginPath(); X.moveTo(21, 72); X.lineTo(17, 79); X.lineTo(20.5, 79); X.lineTo(19, 84); X.lineTo(24, 76); X.lineTo(20.5, 76); X.closePath(); X.fill();
  if (POWERS.khand) {
  const kr = P.khandCd <= 0;
  X.strokeStyle = kr ? '#f0d98a' : '#4a3d2a'; X.lineWidth = 2.4;
  X.beginPath();
  X.arc(48, 78, 6.5, -Math.PI / 2, -Math.PI / 2 + TAU * (kr ? 1 : Math.max(0, 1 - P.khandCd / 600)));
  X.stroke();
  X.fillStyle = kr ? '#f0d98a' : '#4a3d2a';
  X.font = 'bold 9px Vazirmatn'; X.textAlign = 'center';
  X.fillText('خ', 48, 81);
  X.textAlign = 'right';
}
  const prog = clamp((P.x) / (L.width - 100), 0, 1);
  X.fillStyle = 'rgba(0,0,0,0.5)'; X.fillRect(216, 14, W - 448, 5);
  X.fillStyle = 'rgba(95,179,217,0.9)'; X.fillRect(216, 14, (W - 448) * prog, 5);
  const exitScreenX = L.exit[0] - camX;
  if (exitScreenX > W || exitScreenX < 0) {
    const dir = exitScreenX < 0 ? -1 : 1;
    const ax = dir < 0 ? 220 : W - 220;
    X.save(); X.translate(ax, 40); X.scale(dir, 1);
    X.fillStyle = `rgba(240,192,80,${0.6 + Math.sin(anim*0.15)*0.3})`;
    X.beginPath(); X.moveTo(0, -6); X.lineTo(10, 0); X.lineTo(0, 6); X.closePath(); X.fill();
    X.restore();
  }
  const w = WEAPONS[P.weapon];
  panel(W - 206, 24, 196, 30);
  X.strokeStyle = 'rgba(230,223,207,0.5)'; X.lineWidth = 1.4; X.lineCap = 'round'; X.lineJoin = 'round';
  X.beginPath();
  X.moveTo(W - 200, 35); X.lineTo(W - 192, 35); X.moveTo(W - 195, 32); X.lineTo(W - 192, 35); X.lineTo(W - 195, 38);
  X.moveTo(W - 192, 43); X.lineTo(W - 200, 43); X.moveTo(W - 197, 40); X.lineTo(W - 200, 43); X.lineTo(W - 197, 46);
  X.stroke();
  drawIcon(P.weapon, W - 172, 39, 1.15);
  X.font = 'bold 14px Vazirmatn'; X.fillStyle = '#e6dfcf'; X.textAlign = 'right';
  X.fillText(w.n + (P.weapon !== 'fist' ? '  ×' + P.inv[P.weapon] : ''), W - 20, 44);
  X.font = '12px Vazirmatn'; X.fillStyle = '#8d8a80';
  X.fillText(attLabel(levelIdx) + '   |   کشته: ' + fa(kills) + '   |   🕐 ' + fa(collectedClocks.size), W - 14, 70);
  if (hasCard) { drawIcon('card', W - 178, 86, 0.9); X.font = 'bold 13px Vazirmatn'; X.fillStyle = '#f0c050'; X.fillText('کارت دسترسی', W - 20, 91); }
if (combo > 1) {
  X.font = 'bold 22px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = `rgba(255,200,80,${Math.min(1, comboT / 120)})`;
  X.fillText('کمبو ×' + fa(combo), W / 2, 100);
}
  if (titleT > 0) {
    const a = Math.min(1, titleT / 40) * Math.min(1, (120 - titleT) / 20);
    X.textAlign = 'center'; X.font = '900 44px Vazirmatn'; X.fillStyle = `rgba(230,223,207,${a * 0.85})`;
    X.shadowColor = 'rgba(0,0,0,0.9)'; X.shadowBlur = 12;
    X.fillText(attLabel(levelIdx), W / 2, 170);
    X.font = 'bold 18px Vazirmatn';
    X.fillStyle = `rgba(141,138,128,${a * 0.9})`;
    X.fillText(CHAPTERS[L.ch] ? CHAPTERS[L.ch].title : '', W / 2, 200);
    X.shadowBlur = 0;
  }
  // راهنمای درون‌بازی
  if (hintMsgT > 0) {
    const ha = Math.min(1, hintMsgT / 30) * Math.min(1, (hintMsgD - hintMsgT) / 20);
    X.font = 'bold 16px Vazirmatn';
    X.textAlign = 'center';
    X.fillStyle = `rgba(230,223,207,${ha * 0.95})`;
    X.shadowColor = 'rgba(0,0,0,0.95)'; X.shadowBlur = 8;
    X.fillText(hintMsg, W/2, 130);
    X.shadowBlur = 0;
  }
  if (msgT > 0) {
    const a = Math.min(1, msgT / 30);
    X.font = 'bold 19px Vazirmatn'; X.textAlign = 'center';
    const tw = X.measureText(msg).width;
    X.globalAlpha = a * 0.9; X.fillStyle = 'rgba(0,0,0,0.5)'; X.beginPath(); X.roundRect(W/2 - tw/2 - 16, 356, tw + 32, 36, 10); X.fill();
    X.globalAlpha = a; X.fillStyle = msgCol; X.fillText(msg, W / 2, 380); X.globalAlpha = 1;
  }
}
function drawChapterEnd() {
  const a = Math.min(1, endingT / 60);
  X.fillStyle = `rgba(10,10,16,${a})`; X.fillRect(0, 0, W, H);
  X.textAlign = 'center'; X.direction = 'rtl';
  const L = LEVELS[levelIdx];
  const chapterTitle = CHAPTERS[L.ch] ? CHAPTERS[L.ch].title : '';
  X.font = 'bold 20px Vazirmatn';
  X.fillStyle = `rgba(141,138,128,${a})`;
  X.fillText('پایان فصل ' + fa(L.ch), W/2, 100);
  X.font = '900 40px Vazirmatn';
  X.fillStyle = `rgba(230,223,207,${a})`;
  X.fillText(chapterTitle, W/2, 155);
  X.strokeStyle = `rgba(95,179,217,${a * 0.4})`;
  X.lineWidth = 1;
  X.beginPath(); X.moveTo(W/2 - 100, 180); X.lineTo(W/2 + 100, 180); X.stroke();
  X.font = 'bold 18px Vazirmatn';
  X.fillStyle = `rgba(230,223,207,${a * 0.9})`;
  const cc = chClocks(L.ch);
  X.fillText('کشته‌ها:  ' + fa(kills), W/2, 230);
  X.fillText('ساعت‌ها:  ' + fa(cc.got) + ' از ' + fa(cc.total), W/2, 265);
  X.font = '15px Vazirmatn';
  X.fillStyle = `rgba(141,138,128,${a})`;
  if (kills === 0) {
    X.fillText('کسی رو نکشتی.', W/2, 320);
  } else {
    X.fillText(fa(kills) + ' نفر کشتی.', W/2, 320);
  }
if (cc.total > 0 && cc.got >= cc.total && CH_SECRET[L.ch]) {
  X.font = 'italic 15px Vazirmatn'; X.fillStyle = `rgba(232,168,56,${a * 0.95})`;
  X.fillText(CH_SECRET[L.ch], W/2, 342);
}
if (newPowerThisChapter) {
  const PM = { kian: 'سایه‌ی کیان', khand: 'خنده‌ی خندانور', phoenix: 'خاکستر ققنوس' };
  X.font = 'bold 17px Vazirmatn'; X.fillStyle = `rgba(255,214,120,${a})`;
  X.shadowColor = 'rgba(255,180,60,0.6)'; X.shadowBlur = 12;
  X.fillText('قدرت جدید: ' + PM[newPowerThisChapter], W/2, 372);
  X.shadowBlur = 0;
}
  if (endingT > 60) {
    X.font = '13px Vazirmatn';
    X.fillStyle = `rgba(95,179,217,${0.6 + Math.sin(endingT * 0.08) * 0.3})`;
    X.fillText('برای ادامه، لمس کن', W/2, 390);
  }
}

// ============================================================
// پایان بازی
// ============================================================
function drawEnding() {
  const a = Math.min(1, endingT / 60), ch = LEVELS[levelIdx].ch;
  X.fillStyle = `rgba(10,10,16,${a})`; X.fillRect(0, 0, W, H);
  X.textAlign = 'center'; X.direction = 'rtl';
  X.font = 'bold 30px Vazirmatn'; X.fillStyle = `rgba(230,223,207,${a})`; X.fillText('فصل ' + fa(ch + 1) + ' — ' + (CHNAMES[ch + 1] || ''), W/2, 160);
  X.font = '18px Vazirmatn'; X.fillStyle = `rgba(141,138,128,${a})`; X.fillText('به‌زودی', W/2, 202);
  X.font = '14px Vazirmatn'; X.fillStyle = `rgba(200,90,70,${a * 0.85})`; X.fillText('ترک‌های آسمان: ' + fa(ch), W/2, 274);
  if (endingT > 120) { X.font = '13px Vazirmatn'; X.fillStyle = `rgba(95,179,217,${0.6 + Math.sin(endingT * 0.08) * 0.3})`; X.fillText('برای شروع دوباره، لمس کن', W/2, 390); }
}
