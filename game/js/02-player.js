'use strict';

// ============================================================
// بازیکن
// ============================================================
const tpOn = t => ((gameTime + t.ph) % t.cyc) < t.len;
const gateOpen = () => { const g = LEVELS[levelIdx].gate; return !g || (gameTime % g.cyc) >= g.open; };
const gateRect = () => { const g = LEVELS[levelIdx].gate; return {x:g.x, y:g.y, w:g.w, h:g.h}; };
const doorRect = () => { const d = LEVELS[levelIdx].door; return {x:d.x, y:d.y, w:d.w, h:d.h}; };
const exitUnlocked = () => !LEVELS[levelIdx].boss || enemies.every(isDown);

function updatePlayer() {
  const L = LEVELS[levelIdx];
  const ax = (keys.R ? 1 : 0) - (keys.L ? 1 : 0);
  const hasInput = ax || keys.U || P.dashT > 0;
  if (hasInput) {
    if (P.idleT > 0) P.idleT = 0;
    if (P.idleAnim > 0) P.idleAnim = 0;
    if (idleMsgShown) idleMsgShown = false;
  } else {
    P.idleT++;
    if (P.idleT === 300 && !idleMsgShown) {
      idleMsgShown = true;
      P.idleAnim = 180;
      say(pick(DIALOG.idle), 150);
    }
  }
  if (P.idleAnim > 0) P.idleAnim--;
  if (P.slowT > 0) P.slowT--;
  if (P.dashT > 0) {
    P.dashT--; P.vx = P.dvx * 8;
    afterimages.push({x:P.x, y:P.y, f:P.f, life:12});
    if (P.dashT % 2 === 0) spawnParticles(P.x+9, P.y+27, 'dust', 2);
  } else {
    P.vx = ax * 3.4 * (P.slowT > 0 ? 0.5 : 1);
    if (ax) { P.f = ax; P.walkT += 0.35; } else P.walkT *= 0.85;
  }
  // پرش — تک و دوبل
  if (P.onGround) {
    P.coyote = 6;
    P.jumpsLeft = 2;
  } else if (P.coyote > 0) P.coyote--;
  if (keys.U && !P.jumpHeld) { P.jbuf = 6; P.jumpHeld = true; }
  if (!keys.U) P.jumpHeld = false;
  if (P.jbuf > 0) {
    P.jbuf--;
    if (P.coyote > 0) {
      P.vy = -13; P.onGround = false; P.coyote = 0; P.jbuf = 0;
      P.jumpsLeft = 1;
      spawnParticles(P.x+9, P.y+30, 'dust', 4);
    } else if (P.jumpsLeft > 0 && !P.dying) {
      P.vy = -11; P.jbuf = 0; P.jumpsLeft--;
      P.jump2Fx = 20;
      spawnParticles(P.x+9, P.y+28, 'dust', 8);
      spawnImpactRing(P.x+9, P.y+28, 'rgba(95,179,217,0.6)', 30, '95,179,217');
      addShake(2, 6);
    }
  }
  if (!keys.U && P.vy < -4) P.vy *= 0.72;
  P.vy += G;
  if (P.vy > 15) P.vy = 15;
  P.x += P.vx;
  const solids = [...L.plat];
  if (L.tplat) for (const t of L.tplat) if (tpOn(t)) solids.push([t.x, t.y, t.w, t.h]);
  if (L.gate && !gateOpen()) { const g = gateRect(); solids.push([g.x, g.y, g.w, g.h]); }
  if (L.door && !doorOpen) { const d = doorRect(); solids.push([d.x, d.y, d.w, d.h]); }
  P.x = clamp(P.x, 0, L.width - 18);
  for (const r of solids) {
    if (AABB({x:P.x,y:P.y,w:18,h:30}, {x:r[0],y:r[1],w:r[2],h:r[3]})) {
      if (P.vx > 0) P.x = r[0] - 18;
      else if (P.vx < 0) P.x = r[0] + r[2];
      if (P.dashT > 0) P.dashT = 0;
    }
  }
  const wasGround = P.onGround, vyB = P.vy;
  P.y += P.vy;
  P.onGround = false;
  for (const r of solids) {
    if (AABB({x:P.x,y:P.y,w:18,h:30}, {x:r[0],y:r[1],w:r[2],h:r[3]})) {
      if (P.vy > 0) { P.y = r[1] - 30; P.onGround = true; P.vy = 0; }
      else if (P.vy < 0) { P.y = r[1] + r[3]; P.vy = 0; }
    }
  }
  if (P.onGround && !wasGround && vyB > 6) { spawnParticles(P.x+9, P.y+30, 'dust', 6); P.squash = 8; }
  if (P.squash > 0) P.squash--;
  if (P.y > H + 80) { playerDie(); return; }
  if (P.cd > 0) P.cd--;
  if (P.atkBuf > 0) { P.atkBuf--; if (P.cd <= 0) { P.atkBuf = 0; playerAttack(); } }
  if (P.sw > 0) P.sw--;
  if (P.attackAnim > 0) P.attackAnim--;
if (P.hurtT > 0) P.hurtT--;
if (P.dcd > 0) P.dcd--;
if (P.perfectT > 0) P.perfectT--;
if (P.kianCd > 0) P.kianCd--;
if (P.khandCd > 0) P.khandCd--;

// خنده‌ی خندانور — نگه‌داشتن جاخالی برای ۱ ثانیه
if (POWERS.khand && P.khandCd <= 0 && dashHeld && P.dashT <= 0) {
  P.dashHoldT++;
  if (P.dashHoldT >= 60) {
    P.dashHoldT = 0;
    P.khandCd = 600;
    let stunned = 0;
    for (const e of enemies) {
      if (isDown(e)) continue;
      if (Math.abs(eCx(e) - (P.x + 9)) < 200) {
        if (e.boss || e.khand || e.kian || e.phoenix || e.dog) {
          if (e.state !== 'dying') { e.state = 'stun'; e.st = 90; }
        } else {
          e.state = 'stun'; e.st = 180;
        }
        spawnParticles(eCx(e), eCy(e), 'stun', 12);
        stunned++;
      }
    }
    if (stunned) {
      say('خنده‌ی خندانور!', 80, '#f0d98a');
      flash = 0.3; flashCol = '242,200,72';
      addShake(4, 20);
      spawnImpactRing(P.x + 9, P.y + 15, '#f0d98a', 220, '242,200,72');
    }
  }
} else if (!dashHeld) {
  P.dashHoldT = 0;
}
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    if (AABB({x:P.x,y:P.y,w:18,h:30}, {x:it.x-12,y:it.y-16,w:34,h:34})) {
      if (it.t === 'card') { hasCard = true; say('کارت دسترسی برداشته شد.', 100); }
      else if (it.t === 'clock') {
        if (!collectedClocks.has(it.id)) {
          collectedClocks.add(it.id);
          saveClocks();
          say(pick(DIALOG.clock) + '  🕐 ' + fa(collectedClocks.size), 100);
          if (CLOCK_TIERS.includes(collectedClocks.size)) { say('⚡ ساعت‌ها جاخالی را سریع‌تر کردند  🕐 ' + fa(collectedClocks.size), 220, '#e8a838'); P.hp = Math.min(maxHp(), P.hp + 1); }
        }
      }
      else if (it.t === 'heart') {
        if (P.hp >= maxHp()) continue;
        P.hp++; say('♥ یک جان گرفتی', 100, '#ff8a7a');
      }
      else {
        const w = WEAPONS[it.t];
        P.inv[it.t] = Math.min(w.max, (P.inv[it.t] || 0) + Math.ceil(w.max / 2));
        say(pick(DIALOG.pickup) + '  ·  ' + w.n, 90);
        if (Object.keys(P.inv).filter(k => P.inv[k] > 0).length >= 2) tip('switch', 'تعویض سلاح: کادر بالا سمت راست را لمس کن (کیبورد: K)');
      }
      spawnParticles(it.x, it.y, 'spark', 10);
      items.splice(i, 1);
    }
  }
  if (L.door && !doorOpen && !hasCard && msgT <= 0 && AABB({x:P.x-10,y:P.y,w:38,h:30}, doorRect())) say('در قفله. کارتش دست یکی از سفیدپوش‌هاست.', 110);
  if (L.door && !doorOpen && hasCard && AABB({x:P.x-10,y:P.y,w:38,h:30}, doorRect())) {
    doorOpen = true;
    spawnParticles(P.x+9, P.y+15, 'spark', 18);
    say('کلیک.', 60); addShake(4, 20);
  }
  if (L.lore) for (const l of L.lore) if (!l.done && P.x > l.x) { l.done = true; say(l.s, 240, '#cfe8f5'); }
  if (L.cp) for (const c of L.cp) if (P.x > c && P.onGround && (cpLv !== levelIdx || c > cpX)) { cpLv = levelIdx; cpX = c; say('نقطه‌ی بازگشت ثبت شد', 70, '#9fe0ff'); }
  camTarget = clamp(P.x + 9 - W / 2, 0, Math.max(0, L.width - W));
  camX += (camTarget - camX) * 0.1;
  if (AABB({x:P.x,y:P.y,w:18,h:30}, {x:L.exit[0],y:L.exit[1],w:L.exit[2],h:L.exit[3]})) {
    if (!exitUnlocked()) { if (msgT <= 0) say('اول باید با کیان تمومش کنم.', 90); }
    else if (levelIdx < LEVELS.length - 1) loadLevel(levelIdx + 1);
    else { mode = 'chapter-end'; endingT = 0; }
  }
}
function playerDie() {
  if (P.dying) return;
  if (POWERS.phoenix && !P.revivedThisLevel) {
    P.revivedThisLevel = true;
    P.hp = 1; P.hurtT = 120;
    spawnImpactRing(P.x + 9, P.y + 15, '#ffd678', 200, '255,214,120');
    spawnParticles(P.x + 9, P.y + 15, 'spark', 40);
    flash = 0.6; flashCol = '255,214,120';
    addShake(10, 40); hitStop = 15;
    say('خاکستر ققنوس... برمی‌خیزم.', 140, '#ffd678');
    return;
  }
  P.dying = true; P.deathT = 45; needRewindTip = true;
  if (LEVELS[levelIdx].boss) bossDeaths++;
  if (LEVELS[levelIdx].phoenix) phKeep = Math.max(phKeep, Math.min(phTotal - 1800, Math.floor((phTotal - phTimer) / 1800) * 1800));
  say(pick(DIALOG.die), 80);
  addShake(14, 40); hitStop = 10; flash = 0.8; flashCol = '200,40,30';
  spawnParticles(P.x+9, P.y+15, 'blood', 20);
  spawnImpactRing(P.x+9, P.y+15, '#c8422a', 60, '200,66,42');
}
function damagePlayer(dmg) {
  if (P.hurtT > 0 || P.dying || winT > 0) return;
  if (P.dashT > 0) {
    if (P.perfectT <= 0) {
      P.perfectT = 120;
      say('جاخالی کامل!', 70, '#ffd678');
      spawnImpactRing(P.x + 9, P.y + 15, '#ffd678', 60, '255,214,120');
      flash = 0.25; flashCol = '255,214,120';
      addShake(2, 8);
    }
    return;
  }
  P.hp -= dmg; P.hurtT = 90;
  addShake(9, 30); hitStop = 6; flash = 0.7; flashCol = '200,40,30';
  spawnParticles(P.x+9, P.y+15, 'blood', 12);
  combo = 0; comboT = 0;
  say(pick(DIALOG.hurt), 50);
  if (P.hp <= 0) playerDie();
  else if (P.hp === 1) tip('lowhp', 'فقط یک قلب مانده؛ ⏪ زمان را برگردان', 260);
}
function playerDash() {
  if (P.dcd > 0 || P.dashT > 0 || P.dying) return;
  P.dcd = dashCd(); P.dashT = 12; P.dvx = P.f;
  addShake(2, 8); spawnParticles(P.x+9, P.y+27, 'dust', 8);
  say(pick(DIALOG.dash), 40);
}
function playerAttack() {
  if (P.cd > 0 && P.cd <= 9 && !P.dying) P.atkBuf = 9;
  if (P.cd > 0 || P.dying) return;
  const w0 = WEAPONS[P.weapon];
  if (P.weapon !== 'fist' && !(P.inv[P.weapon] > 0)) { cycleWeapon(); return; }

  const hasPerfect = P.perfectT > 0;
  if (hasPerfect) { flash = 0.15; flashCol = '255,214,120'; spawnImpactRing(P.x + 9, P.y + 15, '#ffd678', 40, '255,214,120'); }

  // سایه‌ی کیان — teleport-slash
  if (POWERS.kian && P.kianCd <= 0 && w0.kind === 'melee') {
    let target = null, bestD = 150;
    for (const e of enemies) {
      if (isDown(e)) continue;
      const dx = Math.abs(eCx(e) - (P.x + 9));
      const dy = Math.abs(eCy(e) - (P.y + 15));
      if (dx < 150 && dy < 80 && dx < bestD) { bestD = dx; target = e; }
    }
    if (target) {
      const side = sign(eCx(target) - (P.x + 9)) || P.f;
      const tx = clamp(eCx(target) - side * 38 - 9, 0, LEVELS[levelIdx].width - 18);
      for (let i = 1; i <= 4; i++) afterimages.push({ x: P.x + (tx - P.x) * (i / 5), y: P.y, f: side, life: 14 - i * 2 });
      P.x = tx; P.f = side;
      spawnParticles(P.x + 9, P.y + 15, 'spark', 16);
      spawnImpactRing(P.x + 9, P.y + 15, '#8fd8ff', 60, '143,216,255');
      const dmg = w0.dmg * 2 * (hasPerfect ? 2 : 1);
      if (hasPerfect) P.perfectT = 0;
      hitEnemy(target, { ...w0, dmg }, side);
      spawnSlash(P.x + 9, P.y + 15, side, '#dfe6ee');
      addCombo();
      say('سایه‌ی کیان!', 60, '#8fd8ff');
      P.cd = 30; P.sw = 8; P.attackAnim = 10;
      P.kianCd = 180;
      if (P.weapon !== 'fist') P.inv[P.weapon]--;
      if (P.weapon !== 'fist' && P.inv[P.weapon] <= 0) cycleWeapon();
      return;
    }
  }

  const dmgMult = hasPerfect ? 2 : 1;
  if (hasPerfect) P.perfectT = 0;
  const w = hasPerfect ? { ...w0, dmg: w0.dmg * 2 } : w0;

  // حمله‌ی هوایی — ضربه‌ی رو به پایین
  if (!P.onGround && w.kind === 'melee') {
    const cx = P.x + 9, cy = P.y + 40;
    let hitAny = false;
    for (const e of enemies) {
      if (isDown(e)) continue;
      const rr = e.boss ? 30 : 0;
      if (Math.abs(eCx(e) - cx) < w.range/2 + 16 + rr && Math.abs(eCy(e) - cy) < 28 + rr + (e.khand ? 50 : 0)) {
        hitEnemy(e, { ...w, dmg: Math.max(1, Math.round(w.dmg * 0.7)) }, P.f);
        hitAny = true;
      }
    }
    P.cd = w.cd + 4; P.sw = 8; P.attackAnim = 10;
    if (hitAny) {
      P.vy = -9;
      addCombo();
      spawnImpactRing(cx, cy, 'rgba(255,230,150,0.7)', 46, '255,230,150');
      spawnParticles(cx, cy, 'spark', 12);
      addShake(3, 10);
      if (P.weapon !== 'fist') P.inv[P.weapon]--;
      if (P.weapon !== 'fist' && P.inv[P.weapon] <= 0) cycleWeapon();
    }
    return;
  }

  // حمله‌ی معمولی
  P.cd = w.cd; P.sw = 8; P.attackAnim = 10;
  if (w.kind === 'melee') {
    const cx = P.x + 9 + P.f * 30, cy = P.y + 15;
    let hitAny = false;
    for (const e of enemies) {
      if (isDown(e)) continue;
      const rr = e.boss ? 30 : 0;
      if (Math.abs(eCx(e) - cx) < w.range/2 + 11 + rr && Math.abs(eCy(e) - cy) < 25 + rr + (e.khand ? 50 : e.fly ? 35 : 0)) {
        hitEnemy(e, w, P.f); hitAny = true;
      }
    }
    spawnSlash(cx, cy, P.f, P.weapon === 'sword' ? '#dfe6ee' : '#ffe8b0');
    if (!hitAny) { spawnImpactRing(cx, cy, 'rgba(255,255,255,0.4)', 22); P.cd += 5; }
    else { if (P.weapon !== 'fist') P.inv[P.weapon]--; addCombo(); }
  } else {
    P.inv[P.weapon]--;
    projectiles.push({
      x: P.x + 9 + P.f*14, y: P.y + 14, vx: P.f * w.sp, vy: w.kind === 'arc' ? -4.8 : 0,
      type: P.weapon, life: 70, dmg: w.dmg, kill: w.kill, stun: w.stun || 0, friendly: true, tr: [], rot: 0
    });
    spawnParticles(P.x+9+P.f*14, P.y+14, 'spark', 3, P.f);
    if (P.weapon === 'gun') { spawnMuzzle(P.x+9+P.f*20, P.y+14, P.f); addShake(2, 6); }
  }
  if (P.weapon !== 'fist' && P.inv[P.weapon] <= 0) cycleWeapon();
}
function cycleWeapon() {
  const list = Object.keys(WEAPONS);
  const cur = list.indexOf(P.weapon);
  for (let i = 1; i <= list.length; i++) {
    const k = list[(cur + i) % list.length];
    if (k === 'fist' || P.inv[k] > 0) { P.weapon = k; return; }
  }
}


// ============================================================
// قهرمان
// ============================================================
// سر با کلاه گرد (نه نوک‌دار) و شال قرمز روی دهان؛ o.sil = سایه‌ی سینمایی، o.eyes = دو نقطه‌ی روشن
function hoodHead(hy, o) {
  const hood = o.sil ? '#07060a' : '#2a2119';
  X.fillStyle = hood;
  X.beginPath(); X.moveTo(-8.6, hy + 3); X.quadraticCurveTo(-11.4, hy + 9, -8.2, hy + 12.5); X.lineTo(-2, hy + 8); X.closePath(); X.fill();
  X.beginPath(); X.ellipse(0.4, hy - 0.4, 9.6, 9.9, 0, 0, TAU); X.fill();
  X.fillStyle = o.sil ? '#010103' : '#0a0706';
  X.beginPath(); X.ellipse(4.3, hy + 0.7, 4.9, 5.4, 0, 0, TAU); X.fill();
  X.strokeStyle = o.rim || 'rgba(255,230,200,0.12)'; X.lineWidth = 0.8;
  X.beginPath(); X.arc(0.4, hy - 0.4, 9.6, -1.9, 0.9); X.stroke();
  if (o.eyes) { X.fillStyle = '#e8e0d0'; X.beginPath(); X.arc(3.1, hy + 0.3, 0.95, 0, TAU); X.arc(6.5, hy + 0.3, 0.95, 0, TAU); X.fill(); }
  X.fillStyle = '#8a2e22'; X.beginPath(); X.ellipse(3.6, hy + 5.6, 6.2, 2.7, 0.08, 0, TAU); X.fill();
  X.strokeStyle = 'rgba(255,200,180,0.18)'; X.lineWidth = 0.6; X.beginPath(); X.moveTo(-0.6, hy + 4.4); X.quadraticCurveTo(3.6, hy + 3.7, 8.4, hy + 4.6); X.stroke();
}
function drawHero() {
  const f = P.f, run = Math.abs(P.vx) > 0.5 && P.onGround, air = !P.onGround;
  const sw = run ? Math.sin(P.walkT * 1.4) : 0;
  const bob = run ? Math.abs(Math.sin(P.walkT * 1.4)) * 1.6 : Math.sin(anim * 0.05) * 0.5;
  const sq = P.squash > 0 ? P.squash / 8 : 0;
  const blink = P.hurtT > 0 && P.hurtT % 6 < 3;
  const hurtFace = P.hurtT > 70;
  const dp = P.dying ? 1 - P.deathT / 45 : 0;
  const idle = P.idleAnim > 0;
  const idlePhase = idle ? (180 - P.idleAnim) / 180 : 0;
  // هاله‌ی دابل پرش
  if (P.jump2Fx > 0) {
    const ja = P.jump2Fx / 20;
    X.strokeStyle = `rgba(95,179,217,${ja * 0.7})`;
    X.lineWidth = 2;
    X.beginPath();
    X.ellipse(P.x + 9, P.y + 30, 18 * (1 + (1 - ja) * 0.5), 5 * (1 + (1 - ja) * 0.5), 0, 0, TAU);
    X.stroke();
  }
  if (P.onGround && !P.dying) { X.fillStyle = 'rgba(0,0,0,0.45)'; X.beginPath(); X.ellipse(P.x + 9, P.y + 31, 12, 3, 0, 0, TAU); X.fill(); }
  X.save();
  X.translate(P.x + 9, P.y + 30);
  X.scale(f * (1 + sq * 0.14), 1 - sq * 0.12);
  if (dp) X.rotate(-dp * 1.4);
  X.translate(0, -30 - bob);
  if (blink) X.globalAlpha = 0.35;
  const tail = -P.vx * f * 1.0 + Math.sin(anim * 0.12) * 1.2;
  X.strokeStyle = '#8a2e22'; X.lineWidth = 3.4; X.lineCap = 'round';
  X.beginPath(); X.moveTo(-3, 9); X.quadraticCurveTo(-9 + tail*0.6, 8 + Math.sin(anim*0.2)*2.5, -15 + tail*1.2, 11 + Math.sin(anim*0.25 + 1)*3); X.stroke();
  X.fillStyle = '#2e2218';
  X.beginPath(); X.moveTo(-7, 14); X.quadraticCurveTo(-12 + tail, 24, -10 + tail*1.4, 31); X.lineTo(-1, 27); X.lineTo(0, 14); X.fill();
  limb(-5, 11, -9 - sw*3, 21, 4, '#2a1f15');
  X.fillStyle = '#a88868'; X.beginPath(); X.arc(-9 - sw*3, 22, 2.4, 0, TAU); X.fill();
  if (air) { limb(-3, 23, -6, 29, 4.6, '#16120e'); limb(3, 23, 5, 27, 4.6, '#1f1912'); }
  else {
    limb(-3, 23, -3 + sw*5, 29.5, 4.6, '#16120e'); limb(3, 23, 3 - sw*5, 29.5, 4.6, '#221b14');
    X.fillStyle = '#0b0806'; X.fillRect(-6 + sw*5, 28.4, 7, 2.6); X.fillRect(0 - sw*5, 28.4, 7, 2.6);
  }
  const cg = X.createLinearGradient(-9, 0, 9, 0);
  cg.addColorStop(0, '#2a1f15'); cg.addColorStop(0.6, '#4a3825'); cg.addColorStop(1, '#6a5238');
  X.fillStyle = cg; X.beginPath(); X.roundRect(-8, 8, 16, 17, 3); X.fill();
  X.fillStyle = 'rgba(0,0,0,0.25)'; X.beginPath(); X.moveTo(0, 12); X.lineTo(0, 26); X.lineTo(2, 26); X.lineTo(2, 12); X.fill();
  X.fillStyle = '#6a3a18'; X.fillRect(-8, 19.5, 16, 2.4);
  X.fillStyle = '#b8883a'; X.fillRect(-1.6, 19.2, 3.2, 3);
  X.fillStyle = '#5a4630'; X.beginPath(); X.moveTo(-6, 8); X.lineTo(-1, 14); X.lineTo(-8, 13); X.fill(); X.beginPath(); X.moveTo(6, 8); X.lineTo(1, 14); X.lineTo(8, 13); X.fill();
  hoodHead(3, {eyes: !(P.dying || hurtFace)});
  const wp = P.weapon, kind = WEAPONS[wp].kind;
  const atk = P.attackAnim > 0 ? 1 - P.attackAnim / 10 : -1;
  let hx, hy, ang;
  if (idle && idlePhase > 0.15 && idlePhase < 0.7) {
    const ip = (idlePhase - 0.15) / 0.55;
    const arch = Math.sin(ip * Math.PI);
    hx = 11 + arch * 3; hy = 8 - arch * 4;
    ang = -1.4;
    X.save();
    X.globalAlpha = arch;
    X.strokeStyle = '#c8b890'; X.lineWidth = 0.8;
    X.beginPath(); X.moveTo(hx, hy); X.lineTo(hx + 3, hy + 8); X.stroke();
    const wg = X.createRadialGradient(hx + 5, hy + 9, 0, hx + 5, hy + 9, 6);
    wg.addColorStop(0, '#ffe070'); wg.addColorStop(0.6, '#e8a838'); wg.addColorStop(1, '#8a5a12');
    X.fillStyle = wg; X.beginPath(); X.arc(hx + 5, hy + 9, 5, 0, TAU); X.fill();
    X.strokeStyle = '#3a2a10'; X.lineWidth = 0.8;
    X.beginPath(); X.moveTo(hx + 5, hy + 9); X.lineTo(hx + 5, hy + 6.5); X.moveTo(hx + 5, hy + 9); X.lineTo(hx + 7, hy + 9.5); X.stroke();
    X.restore();
  } else if (kind === 'melee' && wp !== 'fist') {
    if (atk >= 0) { ang = -1.3 + atk * 2.3; hx = 5 + Math.cos(ang) * 11; hy = 11 + Math.sin(ang) * 11; }
    else { ang = -0.95; hx = 9 - sw*3; hy = 21; }
  } else if (wp === 'fist') {
    if (atk >= 0) { hx = 8 + atk * 12; hy = 14; } else { hx = 9 + sw*3; hy = 21; }
    ang = 0;
  } else { hx = 13 - (atk >= 0 ? (1 - atk) * 2 : 0); hy = 16 - (atk >= 0 ? 1.5 : 0); ang = 0; }
  if (!(idle && idlePhase > 0.15 && idlePhase < 0.7)) {
    limb(5, 11, hx, hy, 4.2, '#3f2f1d');
    X.save(); X.translate(hx, hy);
    switch (wp) {
      case 'sword':
        X.rotate(ang); limb(-3, 0, 24, 0, 2.6, '#cfd8e2'); limb(-2, 0, 22, -0.4, 0.9, '#ffffff'); limb(0, -4, 0, 4, 2.2, '#8a5a28'); break;
      case 'gun':
        X.rotate(atk >= 0 ? -0.18 : 0); X.fillStyle = '#25252c'; X.fillRect(-2, -2.6, 12, 4.2); X.fillRect(-1, 1, 4, 5.5);
        X.fillStyle = '#5a5a64'; X.fillRect(0, -2.2, 10, 1); break;
      case 'sed':
        X.fillStyle = '#cfe6f0'; X.fillRect(-1, -2, 10, 4); X.fillStyle = '#e86fb5'; X.fillRect(1, -1.2, 6, 2.4);
        limb(9, 0, 14, 0, 0.9, '#aab'); limb(-1, 0, -4, 0, 0.9, '#aab'); break;
      case 'stone':
        X.fillStyle = '#8a8a92'; X.beginPath(); X.arc(2, -2, 3.6, 0, TAU); X.fill(); break;
      case 'mol':
        X.fillStyle = 'rgba(70,150,90,0.95)'; X.beginPath(); X.roundRect(-2.6, -9, 5.2, 11, 2); X.fill();
        X.fillStyle = '#ff9a2a'; X.beginPath(); X.arc(0, -11.5 - Math.sin(anim*0.4), 2.4, 0, TAU); X.fill(); break;
    }
    X.restore();
    X.fillStyle = '#b89878'; X.beginPath(); X.arc(hx, hy, 2.9, 0, TAU); X.fill();
  } else {
    limb(5, 11, hx, hy, 4.2, '#3f2f1d');
    X.fillStyle = '#b89878'; X.beginPath(); X.arc(hx, hy, 2.9, 0, TAU); X.fill();
  }
  X.restore();
}
function drawGhost() {
  if (histCount <= 15 || P.dying) return;
  const s = hist[(histHead - histCount + HIST) % HIST];
  if (!s) return;
  if (s.px < camX - 50 || s.px > camX + W + 50) return;
  X.save();
  X.globalAlpha = 0.28 + Math.sin(anim * 0.1) * 0.1;
  X.strokeStyle = '#5fb3d9'; X.lineWidth = 1.2; X.setLineDash([3, 3]);
  X.beginPath(); X.roundRect(s.px - 1, s.py + 8, 20, 22, 4); X.stroke();
  X.beginPath(); X.arc(s.px + 9, s.py + 3, 7.5, 0, TAU); X.stroke();
  X.restore();
}
function drawAfterimages() {
  for (const a of afterimages) {
    X.globalAlpha = a.life / 12 * 0.4;
    X.fillStyle = clockTier() >= 2 ? '#e8a838' : '#5fb3d9';
    X.beginPath(); X.roundRect(a.x, a.y + 8, 18, 22, 4); X.fill();
    X.beginPath(); X.arc(a.x + 9, a.y + 3, 7.5, 0, TAU); X.fill();
  }
  X.globalAlpha = 1;
}
