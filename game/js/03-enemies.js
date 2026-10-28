'use strict';

function hitEnemy(e, w, dir) {
  if (e.phoenix) { phoenixHit(e, w); return; }
  if (e.khand && e.state === 'dying') return;
  if (e.shield && !e.shieldBroken && !w.pierce && e.f === -dir && e.state !== 'stun') {
    e.shieldHits += Math.max(1, w.dmg); e.flash = 4;
    const sx = eCx(e) + e.f * 14, sy = eCy(e);
    spawnParticles(sx, sy, 'spark', 8); spawnImpactRing(sx, sy, '#cfd8e2', 26, '207,216,226');
    addShake(3, 10); hitStop = 2;
    if (e.shieldHits >= 4) {
      e.shieldBroken = true; e.state = 'stun'; e.st = 70; e.vx = -dir * 2;
      spawnParticles(sx, sy, 'spark', 22); spawnImpactRing(sx, sy, '#fff', 44, '255,255,255'); addShake(8, 24);
      say('سپر شکست!', 80);
    } else say(pick(['سپر نمی‌ذاره.', 'از پشت!', 'فایده نداره. از پشتش بزن.']), 50);
    return;
  }
  if (e.khand) {
    e.laughT = 30;
    const dog = enemies.find(en => en.dog);
    if (dog && !isDown(dog) && e.state !== 'dying') {
      tip('dogfirst', 'باس هنوز آسیب نمی‌بیند؛ اول سگ را بزن', 280);
      spawnImpactRing(eCx(e), eCy(e), 'rgba(255,255,255,0.4)', 20);
      return; // باس در فاز اول آسیب نمی‌بیند
    }
    // سیستم خستگی: هر ۸ ضربه، باس خسته می‌شود
    if (e.state !== 'fatigue' && e.state !== 'dying') {
      e.hitsReceived = (e.hitsReceived || 0) + 1;
      if (e.hitsReceived >= 8) {
        e.state = 'fatigue';
        e.st = 180; // ۳ ثانیه خستگی
        e.hitsReceived = 0;
        say('...ها...ها... خسته شدم...', 120, '#f2c848');
        tip('fatigue', 'او خسته است! حالا هر ضربه کامل وارد می‌شود', 280);
      }
    }
  }
  
  // در حالت خستگی، ضربه کامل وارد می‌شود (بدون کاهش ۳۵ درصدی)
  let dmgMult = 1;
  if (e.khand && e.state !== 'fatigue' && e.state !== 'dying') dmgMult = 0.35;
  
  e.hp -= w.dmg * dmgMult; 
  e.flash = 8;
  const ex = eCx(e), ey = eCy(e);
  
  if (e.hp <= 0) {
    if (e.khand) {
      // تأخیر ۲ ثانیه‌ای قبل از سینماتیک مرگ
      e.state = 'dying';
      e.st = 120;
      if (!e.drop) e.dropped = true; // جلوگیری از تکرار مرگ
    } else if (w.kill) {
      e.state = 'dead'; kills++;
      spawnParticles(ex, ey, 'blood', 22, dir);
      spawnImpactRing(ex, ey, '#c8422a', 50, '200,66,42');
      addShake(11, 35); hitStop = 9;
      say(pick(DIALOG.kill), 70);
      if (!e.human && !e.boss) agentFx(e, ex, ey, true);
      if (!rageShown && rageMsgAt < 0) rageMsgAt = 90;
    } else {
      e.state = 'ko';
      spawnParticles(ex, ey, 'stun', 18);
      spawnImpactRing(ex, ey, '#e86fb5', 40, '232,111,181');
      addShake(7, 28); hitStop = 6;
      say(pick(DIALOG.ko), 70);
      if (!e.human && !e.boss) agentFx(e, ex, ey, false);
    }
    if (e.drop && !e.dropped) {
      e.dropped = true;
      items.push({t:e.drop, x:e.x + (e.boss ? 10 : 0), y:e.fly ? 322 : e.y + 20});
    }
    if (e.boss && !e.khand) winT = 50;
  } else {
    if (e.khand) { /* بدون گیجی؛ فقط بعد از کوبیدن، وقتی خسته است ضربه کامل می‌خورد */ }
    else if (e.boss) {
      e.poise = (e.poise || 0) + w.dmg;
      if (e.poise >= 3 && e.state !== 'windup' && e.state !== 'attack') { e.poise = 0; e.state = 'stun'; e.st = w.stun ? Math.min(w.stun, 50) : 26; e.vx = -dir * 2.5; }
    } else { if (e.state !== 'attack' && !(e.state === 'windup' && e.st <= 11)) { e.state = 'stun'; e.st = w.stun || 14; e.vx = -dir * 2.5; } }
    if (e.khand && Math.random() < 0.3) say('هاهاها!', 45);
    spawnParticles(ex, ey, 'blood', 8, dir);
    spawnImpactRing(ex, ey, 'rgba(255,200,150,0.7)', 30, '255,200,150');
    addShake(5, 20); hitStop = 4;
  }
}

function foeTip(e, dist) {
  if (dist > 420) return;
  const t = e.fly ? FOE_TIPS.fly : e.shield ? FOE_TIPS.shield : e.phantom ? FOE_TIPS.phantom : null;
  if (t) tip(t[0], t[1], 300);
}
function updateBird(e) {
  const cx = eCx(e), px = P.x + 9, py = P.y + 15;
  if (cx < camX - 300 || cx > camX + W + 300) { e.state = 'patrol'; e.y = e.baseY; return; }
  foeTip(e, Math.abs(px - cx));
  e.walkT += e.state === 'dive' ? 0.9 : 0.5;
  if (e.shootCd > 0) e.shootCd--;
  switch (e.state) {
    case 'patrol':
      e.x += e.vx * 1.1; if (e.x < e.min) { e.x = e.min; e.vx = 1; } if (e.x > e.max) { e.x = e.max; e.vx = -1; }
      e.f = e.vx > 0 ? 1 : -1;
      e.y = e.baseY + Math.sin(anim * 0.06 + e.x * 0.02) * 10;
      if (!P.dying && Math.abs(px - cx) < 260 && e.shootCd <= 0) { e.state = 'alert'; e.st = 44; e.f = sign(px - cx) || 1; }
      break;
    case 'alert':
      e.st--; e.y -= 0.9; e.f = sign(px - cx) || e.f;
      if (e.st > 14) { e.tx = px; e.ty = py; }
      if (e.st <= 0) { e.state = 'dive'; e.st = 0; }
      break;
    case 'dive': {
      const ddx = e.tx - cx, ddy = e.ty - (e.y + 10), dd = Math.hypot(ddx, ddy) || 1, sp = 5.6 + kills * 0.06;
      e.x += ddx / dd * sp; e.y += ddy / dd * sp; e.f = sign(ddx) || e.f; e.st++;
      if (AABB({x:e.x, y:e.y, w:28, h:20}, {x:P.x, y:P.y, w:18, h:30})) {
        if (!seen.has('birdhit')) { markSeen('birdhit'); tip('birdspare', 'این بار فقط ترساندمت. دفعه‌ی بعد زخمی می‌شوی؛ ⚡ جاخالی کن', 260); spawnParticles(eCx(e), e.y + 10, 'stun', 10); }
        else damagePlayer(1);
        e.state = 'retreat'; e.shootCd = 110;
      }
      else if (dd < 14 || e.st > 50 || e.y > GROUND - 14) { e.state = 'retreat'; e.shootCd = 110; }
      break; }
    case 'retreat':
      e.y += (e.baseY - e.y) * 0.07; e.x += clamp(((e.min + e.max) / 2 - cx) * 0.03, -2, 2);
      if (Math.abs(e.y - e.baseY) < 8) e.state = 'patrol';
      break;
    case 'stun':
      e.st--; e.y += 0.6; e.x += e.vx; e.vx *= 0.85;
      if (e.st <= 0) e.state = 'retreat';
      break;
  }
}
function phantomPre(e, dist, sameLevel) {
  if (e.state === 'blinkOut') {
    e.st--;
    if (e.st % 8 === 0) marks.push({type:'ring', x:e.bx + 11, y:GROUND - 4, life:14, maxLife:14, col:'rgba(230,60,40,0.85)', lc:'230,60,40', r:4, maxR:22});
    if (e.st <= 0) {
      e.x = e.bx; e.f = sign((P.x + 9) - eCx(e)) || 1; e.state = 'windup'; e.st = 16;
      spawnParticles(eCx(e), e.y + 15, 'stun', 14); spawnImpactRing(eCx(e), e.y + 15, '#e0554a', 36, '224,85,74');
    }
    return true;
  }
  e.bt--;
  if (e.bt <= 0 && sameLevel && dist < 320 && !P.dying && (e.state === 'chase' || e.state === 'patrol' || e.state === 'alert')) {
    e.bt = 170 + (Math.random() * 80 | 0);
    spawnParticles(eCx(e), e.y + 15, 'stun', 14);
    e.bx = clamp(P.x + 9 - P.f * 80 - 11, e.min - 40, e.max + 40);
    e.state = 'blinkOut'; e.st = 36;
    return true;
  }
  return false;
}
function updateEnemy(e) {
  if (e.dog) { updateDog(e); return; }
  if (e.flash > 0) e.flash--;
  if (e.fly) { if (isDown(e)) { e.y = Math.min(e.y + 6, GROUND - 12); return; } updateBird(e); return; }
  if (isDown(e)) return;
  if (e.khand) { updateKhand(e); return; }
  if (e.phoenix) { updatePhoenix(e); return; }
  if (eCx(e) < camX - 300 || eCx(e) > camX + W + 300) {
    if (e.state !== 'patrol') e.state = 'patrol';
    return;
  }
  const dx = (P.x + 9) - eCx(e), dy = (P.y + 15) - eCy(e);
  const dist = Math.abs(dx);
  const sameLevel = Math.abs(dy) < (e.boss ? 80 : 42);
  const speed = ((e.boss ? 1.75 : 1.36) + kills * 0.08) * (easy() ? 0.85 : 1);
  if (e.shootCd > 0) e.shootCd--;
  if (e.lungeCd > 0) e.lungeCd--;
  if (e.shield || e.phantom) foeTip(e, dist);
  if (e.phantom && phantomPre(e, dist, sameLevel)) return;
  if (e.boss && !e.phase2 && e.hp <= e.maxHp * 0.4) {
    e.phase2 = true;
    addShake(10, 30);
    spawnParticles(eCx(e), eCy(e), 'spark', 24);
    spawnImpactRing(eCx(e), eCy(e), '#ff5a2a', 80, '255,90,42');
    say('حالا وقتشه ببینی کی هستی.', 120);
  }
  switch (e.state) {
    case 'patrol':
      e.x += e.vx * speed; e.walkT += 0.3;
      if (e.x < e.min) { e.x = e.min; e.vx = 1; }
      if (e.x > e.max) { e.x = e.max; e.vx = -1; }
      e.f = e.vx > 0 ? 1 : -1;
      if (!P.dying && sameLevel && dist < (e.boss ? 320 : 220)) { e.state = 'alert'; e.st = 22; e.f = sign(dx) || 1; }
      break;
    case 'alert':
      e.st--;
      if (e.st <= 0) e.state = 'chase';
      break;
    case 'chase':
      if (e.shield) {
        const want = sign(dx) || 1;
        if (want !== e.f) { if (++e.turnT > 28) { e.f = want; e.turnT = 0; } } else e.turnT = 0;
      } else e.f = sign(dx) || 1;
      e.x += e.f * speed * (e.phase2 ? 1.6 : 1.3); e.walkT += 0.4;
      e.x = clamp(e.x, e.min - 40, e.max + 40);
      if (((e.elite && e.phase2) || e.lunger) && sameLevel && dist > (e.lunger ? 110 : 150) && dist < (e.lunger ? 320 : 380) && !(e.lungeCd > 0)) {
        e.state = 'lungeWindup'; e.st = 26; e.lungeCd = 140;
      } else if (e.shoots && sameLevel && dist > 100 && dist < 350 && e.shootCd <= 0) {
        e.state = 'shootWindup'; e.st = 28; e.shootCd = e.boss ? (e.elite ? 110 : 60) : 140;
      } else if (sameLevel && dist < 46 && P.y > e.y - 20) {
        e.state = 'windup'; e.st = 20;
      }
      if (dist > 380 || !sameLevel) e.state = 'patrol';
      break;
    case 'windup':
      e.st--;
      if (e.st === 8) spawnParticles(eCx(e) + e.f*22, e.y+15, 'spark', 5, e.f);
      if (e.st <= 0) {
        e.state = 'attack'; e.st = 8;
        const reach = e.boss ? 80 : 55;
        const inFront = sign((P.x + 9) - eCx(e)) === e.f || Math.abs((P.x + 9) - eCx(e)) < 10;
        if (Math.abs((P.x + 9) - eCx(e)) < reach && Math.abs(P.y - e.y) < 40 && inFront) damagePlayer(e.elite ? 1 : e.boss ? 2 : 1);
      }
      break;
    case 'shootWindup':
      e.st--;
      if (e.st <= 0) {
        e.state = 'chase';
        const pcount = e.boss ? 3 : 1;
        for (let k = 0; k < pcount; k++) {
          projectiles.push({
            x: eCx(e) + e.f*15, y: e.y + (e.boss ? 20 : 12) + k*8,
            vx: e.f * (e.phase2 ? 6 : 5), vy: e.boss ? rnd(-1.5, 1.5) : 0,
            type: 'enemy_bullet', life: 100, dmg: 1, kill: false, friendly: false,
            col: e.slower ? '#6ab8ff' : e.boss ? '#ff5a2a' : '#d84040', lc: e.slower ? '106,184,255' : e.boss ? '255,90,42' : '216,64,64', slow: !!e.slower, tr: [], rot: 0
          });
        }
        spawnParticles(eCx(e) + e.f*15, e.y+14, 'spark', 6, e.f);
        spawnMuzzle(eCx(e) + e.f*18, e.y+14, e.f);
      }
      break;
    case 'attack':
      e.st--;
      if (e.st <= 0) {
        if (e.elite && !e.chained && dist < 100 && Math.random() < (e.phase2 ? 0.85 : 0.5)) { e.chained = true; e.state = 'windup'; e.st = 13; }
        else { e.chained = false; e.state = 'recover'; e.st = e.elite && e.phase2 ? 12 : 20; }
      }
      break;
    case 'lungeWindup':
      e.st--; e.f = sign(dx) || 1;
      if (e.st <= 0) { e.state = 'lunge'; e.st = 14; e.hitDone = false; }
      break;
    case 'lunge':
      e.st--; e.x = clamp(e.x + e.f * 11, e.min - 60, e.max + 60);
      if (!e.hitDone && Math.abs((P.x + 9) - eCx(e)) < 42 && Math.abs(P.y - e.y) < 44) { e.hitDone = true; damagePlayer(e.elite ? 2 : 1); }
      if (e.st <= 0) { e.state = 'recover'; e.st = 26; }
      break;
    case 'recover':
      e.st--;
      if (e.st <= 0) e.state = 'chase';
      break;
    case 'stun':
      e.x += e.vx; e.vx *= 0.85; e.st--;
      if (e.st <= 0) e.state = 'chase';
      break;
  }
}
function updateProjectiles() {
  const L = LEVELS[levelIdx];
  const solidsP = L.plat.map(r => ({x:r[0], y:r[1], w:r[2], h:r[3]}));
  if (L.gate && !gateOpen()) solidsP.push(gateRect());
  if (L.door && !doorOpen) solidsP.push(doorRect());
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    if (p.x < camX - 300 || p.x > camX + W + 300) { projectiles.splice(i, 1); continue; }
    const kind = p.type === 'enemy_bullet' ? 'proj' : WEAPONS[p.type].kind;
    p.tr.push({x:p.x, y:p.y}); if (p.tr.length > 7) p.tr.shift();
    p.x += p.vx;
    if (kind === 'arc') { p.vy += 0.3; p.y += p.vy; p.rot += 0.3; }
    else if (p.vy) p.y += p.vy;
    if (p.type === 'stone') p.rot += 0.4;
    p.life--;
    let hit = p.life <= 0;
    let hitWall = false;
    if (!hit) for (const r of solidsP) if (p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h) { hit = true; hitWall = true; break; }
if (!hit && p.friendly) {
  for (const e of enemies) {
    if (isDown(e)) continue;
    if (p.x > e.x && p.x < e.x + eW(e) && p.y > e.y && p.y < e.y + eH(e)) {
      hitEnemy(e, {dmg:p.dmg, kill:p.kill, stun:p.stun}, sign(p.vx) || 1);
      addCombo();
      hit = true; break;
    }
  }
}
    if (!hit && !p.friendly && p.x > P.x && p.x < P.x + 18 && p.y > P.y && p.y < P.y + 30) {
      if (!(P.hurtT > 0 || P.dashT > 0)) {
        if (p.slow) { P.slowT = 150; tip('slow', 'گلوله‌ی آبی زمان را کند می‌کند؛ ⚡ جاخالی کن', 240); spawnImpactRing(P.x + 9, P.y + 15, '#6ab8ff', 40, '106,184,255'); }
        else damagePlayer(1);
        hit = true;
      }
    }
    if (hit) {
      if (p.type === 'mol') {
        spawnParticles(p.x, p.y, 'spark', 26);
        spawnImpactRing(p.x, p.y, '#ff7a1a', 80, '255,122,26');
        addShake(12, 35);
for (const e of enemies) {
  if (isDown(e)) continue;
  if (Math.abs(eCx(e) - p.x) < 75 && Math.abs(eCy(e) - p.y) < 60) {
    hitEnemy(e, {dmg:p.dmg, kill:true, pierce:true}, sign(eCx(e) - p.x) || 1);
    addCombo();
  }
}
      } else if (hitWall) spawnParticles(p.x, p.y, 'dust', 6);
      else spawnParticles(p.x, p.y, 'spark', 4);
      projectiles.splice(i, 1);
    }
  }
}

function drawBird(e) {
  const down = isDown(e), cx = eCx(e), cy = e.y + 10;
  if (cx < camX - 100 || cx > camX + W + 100) return;
  if (e.state === 'alert' && e.tx !== undefined) {
    const a = e.st <= 14 ? 0.85 : 0.4;
    X.save(); X.strokeStyle = `rgba(230,60,40,${a})`; X.lineWidth = 1.2; X.setLineDash([5, 5]);
    X.beginPath(); X.moveTo(cx, cy); X.lineTo(e.tx, e.ty); X.stroke(); X.setLineDash([]);
    X.beginPath(); X.arc(e.tx, e.ty, 10 + (e.st <= 14 ? 0 : 4), 0, TAU); X.stroke(); X.restore();
  }
  const fl = down ? 0.2 : Math.sin(e.walkT * 1.3), dive = e.state === 'dive';
  const flashW = e.flash > 0 && e.flash % 4 < 2, C = c => flashW ? '#fff' : c;
  if (!down) { const k = clamp(1 - (GROUND - cy) / 240, 0.25, 1); X.fillStyle = `rgba(0,0,0,${0.32 * k})`; X.beginPath(); X.ellipse(cx, GROUND + 1, 13 * k, 3 * k, 0, 0, TAU); X.fill(); }
  X.save(); X.translate(cx, cy); X.scale(e.f, 1);
  if (down) { X.rotate(0.9); X.translate(0, 4); }
  else if (dive) X.rotate(0.5);
  if (dive) { X.strokeStyle = 'rgba(200,66,42,0.35)'; X.lineWidth = 1.5; for (let i = 0; i < 3; i++) { X.beginPath(); X.moveTo(-12, -4 + i * 4); X.lineTo(-30 - i * 6, -4 + i * 4); X.stroke(); } }
  const wing = (dir) => {
    const ty = -4 - fl * 15 * dir;
    X.fillStyle = C(dir > 0 ? '#1c1c28' : '#0e0e16');
    X.beginPath(); X.moveTo(-5, -2); X.quadraticCurveTo(-11, -2 - fl * 8 * dir, -16, ty); X.lineTo(-7, ty * 0.45 - 1); X.lineTo(2, -3); X.closePath(); X.fill();
    X.strokeStyle = C('rgba(150,160,190,0.35)'); X.lineWidth = 0.8; X.stroke();
  };
  wing(-1);
  X.fillStyle = C('#14141c'); X.beginPath(); X.ellipse(0, 0, 12, 7, 0, 0, TAU); X.fill();
  X.beginPath(); X.moveTo(-10, 0); X.lineTo(-20, -3 + fl); X.lineTo(-19, 3 + fl); X.closePath(); X.fill();
  X.beginPath(); X.arc(11, -3, 5, 0, TAU); X.fill();
  X.fillStyle = C('#c89a30'); X.beginPath(); X.moveTo(15, -4); X.lineTo(21, -2); X.lineTo(15, -1); X.closePath(); X.fill();
  X.fillStyle = down ? '#222' : `rgba(255,70,50,${0.7 + 0.3 * Math.sin(anim * 0.3)})`; X.beginPath(); X.arc(12.5, -4, 1.3, 0, TAU); X.fill();
  X.strokeStyle = C('#e8a838'); X.lineWidth = 0.9; X.beginPath(); X.arc(2, 1, 3, 0, TAU); X.moveTo(2, 1); X.lineTo(2, -1); X.moveTo(2, 1); X.lineTo(3.6, 1.8); X.stroke();
  wing(1);
  X.restore();
  if (e.state === 'alert') { X.font = 'bold 18px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = '#ff4040'; X.fillText('!', cx, e.y - 8); }
  if (!down && e.hp < e.maxHp) { X.fillStyle = 'rgba(0,0,0,0.7)'; X.fillRect(cx - 12, e.y - 12, 24, 4); X.fillStyle = '#c8422a'; X.fillRect(cx - 11, e.y - 11, 22 * (e.hp / e.maxHp), 2); }
}
function drawEnemy(e) {
  let fa_ = 1;
  if (e.vanish) { e.fadeA = Math.max(0, (e.fadeA ?? 1) - 0.03); fa_ = e.fadeA; }
  else if (e.fadeBoss) { e.fadeA = Math.max(0, (e.fadeA ?? 1) - 0.006); fa_ = e.fadeA; }
  if (fa_ <= 0) return;
  if (e.phantom && !isDown(e)) {
    const d = Math.hypot(P.x + 9 - eCx(e), P.y + 15 - eCy(e));
    let pa = e.state === 'blinkOut' ? 0 : clamp(1 - (d - 60) / 110, 0.1, 1) * (0.8 + 0.2 * Math.sin(anim * 0.4));
    if (e.state === 'windup' || e.state === 'attack') pa = Math.max(pa, 0.9);
    if (e.flash > 0) pa = Math.max(pa, 0.9);
    fa_ *= pa;
    if (e.state !== 'blinkOut') {
      const ex1 = e.x + 11 + e.f * (7.9 - 11), ex2 = e.x + 11 + e.f * (14.1 - 11);
      X.save(); X.globalCompositeOperation = 'lighter';
      X.fillStyle = `rgba(255,70,50,${0.6 + 0.35 * Math.sin(anim * 0.2)})`;
      X.beginPath(); X.arc(ex1, e.y + 2.2, 2, 0, TAU); X.arc(ex2, e.y + 2.2, 2, 0, TAU); X.fill();
      X.fillStyle = 'rgba(255,70,50,0.18)'; X.beginPath(); X.arc(ex1, e.y + 2.2, 6, 0, TAU); X.arc(ex2, e.y + 2.2, 6, 0, TAU); X.fill();
      X.restore();
    }
  }
  X.save(); X.globalAlpha = fa_; drawEnemyRaw(e); X.restore();
  if (e.drop === 'card' && !isDown(e)) drawIcon('card', eCx(e), e.y - 14 + Math.sin(anim * 0.1) * 2, 0.9);
}
function drawFace(e, down) {
  X.fillStyle = '#1a1410'; X.strokeStyle = '#1a1410'; X.lineWidth = 1;
  if (e.kian) { X.fillStyle = '#2a2018'; X.beginPath(); X.arc(11, 2, 8.6, Math.PI * 1.02, Math.PI * 1.98); X.fill(); X.fillStyle = '#1a1410'; }
  if (down) { [[8.2,2.6],[13.8,2.6]].forEach(([x,y]) => { X.beginPath(); X.moveTo(x-1.4,y-1.4); X.lineTo(x+1.4,y+1.4); X.moveTo(x+1.4,y-1.4); X.lineTo(x-1.4,y+1.4); X.stroke(); }); }
  else { X.beginPath(); X.arc(8.2, 2.8, 1.1, 0, TAU); X.arc(13.8, 2.8, 1.1, 0, TAU); X.fill(); }
  X.strokeStyle = '#3a2a20'; X.beginPath();
  X.moveTo(6.4, e.kian ? 1.4 : 0.8); X.lineTo(9.8, e.kian ? 0.6 : 0.4); X.moveTo(12.2, 0.4); X.lineTo(15.6, e.kian ? 1.4 : 0.8); X.stroke();
  if (e.kian) {
    X.fillStyle = 'rgba(60,50,45,0.55)'; X.beginPath(); X.arc(11, 5.6, 6.2, 0.2, Math.PI - 0.2); X.fill();
    X.strokeStyle = '#8a3a2a'; X.beginPath(); X.moveTo(15.4, -1.8); X.lineTo(13.6, 3); X.stroke();
  }
  X.strokeStyle = '#5a3a2a'; X.beginPath(); X.moveTo(9.4, 6.6); X.lineTo(12.6, e.kian ? 6.9 : 6.4); X.stroke();
}
function fireWave(e, ph) {
  const n = e.waveN = (e.waveN || 0) + 1, h = ph === 3 ? (n % 2 ? 150 : 40) : 144;
  waves.push({x: eCx(e) + e.f * 40, dir: e.f, v: 6.2 + ph * 0.9, h, bounce: ph >= 2, back: false});
}
function updateKhand(e) {
  const dx = (P.x + 9) - eCx(e), dist = Math.abs(dx);
  if (e.stompCd === undefined) { e.stompCd = 100; e.armCd = 120; e.laughT = 0; e.dogDead = false; }
  
  // بررسی اینکه آیا سگ مرده است یا نه
  const dog = enemies.find(en => en.dog);
  e.dogDead = !dog || isDown(dog);

  if (e.stompCd > 0) e.stompCd--;
  if (e.armCd > 0) e.armCd--;
  if (e.laughT > 0) e.laughT--;

  if (!e.phase2 && e.hp <= e.maxHp * 0.66) { e.phase2 = true; addShake(10, 30); say('هاهاها! بالاخره خودم وارد می‌شم!', 120); }
  if (!e.phase3 && e.hp <= e.maxHp * 0.33) { e.phase3 = true; addShake(10, 30); say('دیگه... حتی نمی‌تونم... هاها...', 140); }
  const ph = e.phase3 ? 3 : e.phase2 ? 2 : 1;
  if (e.echoWave > 0 && --e.echoWave === 0 && !isDown(e)) fireWave(e, 3);

  // فاز اول: فقط موج انرژی از زمین میاد (تا وقتی سگ زنده است)
  if (!e.dogDead) {
    e.state = 'patrol'; e.f = sign(dx) || e.f;
    if (e.stompCd <= 0) {
      e.state = 'stompWindup'; e.st = 40; e.stompCd = 300; // هر ۵ ثانیه یک موج
    }
    if (e.state === 'stompWindup') {
      e.st--;
      if (e.st <= 0) {
        e.state = 'stomp'; e.st = 12;
        fireWave(e, 1);
        addShake(14, 34); spawnParticles(eCx(e), GROUND, 'dust', 26);
      }
    } else if (e.state === 'stomp') {
      e.st--; if (e.st <= 0) e.state = 'patrol';
    }
    return; // باس در فاز اول حرکت نمی‌کند و شلیک نمی‌کند
  }

  // فاز دوم: وقتی سگ مرد، باس کاملاً فعال می‌شود
  switch (e.state) {
      case 'fatigue':
      e.st--;
      if (e.st <= 0) e.state = 'patrol';
      break;
    case 'recover': e.st--; if (e.st <= 0) e.state = 'patrol'; break;
    case 'stompWindup':
      e.st--; e.f = sign(dx) || e.f;
      if (e.st <= 0) {
        e.state = 'stomp'; e.st = 12;
        fireWave(e, ph);
        if (ph === 3) e.echoWave = 18;
        addShake(14, 34); spawnParticles(eCx(e), GROUND, 'dust', 26);
        if (dist < 100) damagePlayer(1);
      }
      break;
    case 'stomp': e.st--; if (e.st <= 0) { e.state = 'recover'; e.st = ph === 3 ? 60 : 90; } break;
    case 'armWindup':
      e.st--;
      if (e.st <= 0) {
        e.state = 'recover'; e.st = 50;
        const pCount = ph === 3 ? 3 : ph === 2 ? 2 : 1;
        for (let k = 0; k < pCount; k++) {
          projectiles.push({
            x: eCx(e) + e.f * 20, y: e.y + 50 + k * 15,
            vx: e.f * 6, vy: 0, type: 'enemy_bullet', life: 100, dmg: 1,
            kill: false, friendly: false, col: '#f2c848', lc: '242,200,72', tr: [], rot: 0
          });
        }
        spawnMuzzle(eCx(e) + e.f*20, e.y+50, e.f);
        addShake(5, 15);
      }
      break;
    default:
      e.f = sign(dx) || e.f; e.walkT += 0.2;
      if (dist > 80) e.x = clamp(e.x + e.f * (ph === 3 ? 0.4 : 0.8), e.min, e.max);
      if (e.stompCd <= 0 && !P.dying) {
        e.state = 'stompWindup'; e.st = 40; e.stompCd = ph === 3 ? 120 : 180;
      } else if (e.armCd <= 0 && !P.dying && dist > 100) {
        e.state = 'armWindup'; e.st = 35; e.armCd = ph === 3 ? 100 : 150;
      }
  }
}
function updateDog(e) {
  if (isDown(e)) return;
  const dx = (P.x + 9) - eCx(e), dy = (P.y + 15) - eCy(e);
  const dist = Math.abs(dx);
  const speed = e.phase3 ? 2.5 : 1.8; 
  e.f = sign(dx) || e.f; e.walkT += 0.4;
  switch (e.state) {
    case 'patrol': case 'chase':
      e.x += e.f * speed; e.x = clamp(e.x, e.min, e.max);
      if (Math.abs(dx) < 40 && Math.abs(dy) < 30 && !P.dying) { e.state = 'attack'; e.st = 15; e.hitDone = false; }
      break;
    case 'attack':
      e.st--;
      if (e.st === 8 && !e.hitDone) { e.hitDone = true; if (Math.abs(dx) < 45 && Math.abs(dy) < 35) damagePlayer(1); }
      if (e.st <= 0) e.state = 'chase';
      break;
    case 'stun':
      e.x += e.vx; e.vx *= 0.85; e.st--;
      if (e.st <= 0) e.state = 'chase';
      break;
  }
}

function updateWaves() {
  const L = LEVELS[levelIdx];
  for (let i = waves.length - 1; i >= 0; i--) {
    const w = waves[i]; w.x += w.dir * w.v;
    if (AABB({x:P.x, y:P.y, w:18, h:30}, {x:w.x - 12, y:GROUND - w.h, w:24, h:w.h})) damagePlayer(1);
    if (w.x < -30 || w.x > L.width + 30) {
      if (w.bounce && !w.back) { w.back = true; w.dir *= -1; w.x = clamp(w.x, -20, L.width + 20); }
      else waves.splice(i, 1);
    }
  }
}

function drawWaves() {
  for (const e of enemies) if (e.khand && e.state === 'stompWindup') {
    const x0 = eCx(e), x1 = e.f < 0 ? 0 : LEVELS[levelIdx].width;
    const ta = 0.35 + 0.3 * Math.abs(Math.sin(anim * 0.35));
    X.fillStyle = `rgba(255,70,40,${ta})`; X.fillRect(Math.min(x0, x1), GROUND - 12, Math.abs(x1 - x0), 12);
    X.fillStyle = `rgba(255,235,210,${ta * 0.8})`; X.fillRect(Math.min(x0, x1), GROUND - 14, Math.abs(x1 - x0), 2);
  }
  for (const w of waves) {
    const g = X.createLinearGradient(0, GROUND, 0, GROUND - w.h); 
    g.addColorStop(0, 'rgba(255,80,45,0.95)'); g.addColorStop(1, 'rgba(255,80,45,0)');
    X.fillStyle = g; 
    X.fillRect(w.x - 15, GROUND - w.h, 30, w.h);
    X.strokeStyle = '#fff'; X.lineWidth = 2;
    X.beginPath(); X.moveTo(w.x, GROUND); X.lineTo(w.x, GROUND - w.h * 0.8); X.stroke();
  }
}


// ===== خندانور: پیرمرد درشت‌هیکل با پالتوی خزدار، دست مکانیکی و عصا =====
function hatShape(sil) {
  X.fillStyle = sil ? '#030204' : '#15121a';
  X.beginPath(); X.ellipse(2, 0, 15, 4, 0, 0, TAU); X.fill();
  X.beginPath(); X.roundRect(-8, -17, 20, 17, [3, 3, 0, 0]); X.fill();
  if (!sil) { X.fillStyle = '#8a1f2a'; X.fillRect(-8, -5, 20, 4); }
}
function oldMan(o) {
  const sil = !!o.sil, t = o.t, br = Math.sin(t * 0.002) * 0.7, stoop = o.stoop || 0, lg = o.laugh || 0;
  const sh = lg * Math.sin(t * 0.05) * 0.9, rimA = o.rim ?? 0.3;
  const c = sil
    ? {coat:'#07060a', coatD:'#050408', vest:'#07060a', trou:'#07060a', boot:'#030204', fur:'#030204', skin:'#07060a', hair:'#0a090d', metal:'#0a0910', gold:'#0c0b10', line:`rgba(255,215,140,${rimA})`}
    : {coat:'#5a1822', coatD:'#2c0a10', vest:'#7a2a2c', trou:'#2a1618', boot:'#0e0b0c', fur:'#17131a', skin:'#d6b08e', hair:'#ecebee', metal:'#aab2be', gold:'#d9b04a', line:'rgba(10,7,9,0.85)'};
  X.lineJoin = 'round'; X.lineCap = 'round';
  const edge = () => { X.strokeStyle = c.line; X.lineWidth = sil ? 0.7 : 0.9; X.stroke(); };
  X.fillStyle = c.trou;
  X.beginPath(); X.moveTo(-14, -40); X.lineTo(-3, -40); X.lineTo(-4, -4); X.lineTo(-16, -4); X.closePath(); X.fill(); edge();
  X.beginPath(); X.moveTo(3, -40); X.lineTo(15, -40); X.lineTo(17, -4); X.lineTo(5, -4); X.closePath(); X.fill(); edge();
  X.fillStyle = c.boot; X.beginPath(); X.roundRect(-20, -5, 17, 5.5, 2); X.fill(); X.beginPath(); X.roundRect(3, -5, 19, 5.5, 2); X.fill();
  X.save(); X.translate(stoop * 2, stoop * 5 + sh);
  const sw = Math.sin(t * 0.003) * 2;
  X.fillStyle = c.coatD; X.beginPath(); X.moveTo(-18, -68 + br); X.quadraticCurveTo(-34 + sw, -36, -30 + sw * 1.5, -2); X.lineTo(-8, -6); X.lineTo(4, -50); X.closePath(); X.fill(); edge();
  X.fillStyle = c.fur; X.beginPath(); X.moveTo(-31 + sw * 1.5, -8); X.quadraticCurveTo(-27 + sw * 1.5, 3, -9, 0); X.lineTo(-8, -6); X.closePath(); X.fill();
  X.fillStyle = c.coat; X.beginPath(); X.moveTo(-21, -72 + br); X.bezierCurveTo(-30, -62, -26, -44, -22, -22); X.lineTo(-16, -8); X.lineTo(22, -8);
  X.bezierCurveTo(26, -30, 30, -52, 24, -72 + br); X.quadraticCurveTo(0, -80 + br, -21, -72 + br); X.closePath(); X.fill(); edge();
  X.fillStyle = c.vest; X.beginPath(); X.moveTo(-9, -72 + br); X.lineTo(11, -72 + br); X.lineTo(12, -30); X.lineTo(-10, -30); X.closePath(); X.fill();
  if (!sil) {
    X.fillStyle = '#e8e2d8'; X.beginPath(); X.moveTo(-3, -72 + br); X.lineTo(4, -72 + br); X.lineTo(1, -52); X.closePath(); X.fill();
    X.fillStyle = '#14121a'; X.beginPath(); X.moveTo(0, -68 + br); X.lineTo(3, -58); X.lineTo(0, -46); X.lineTo(-2, -58); X.closePath(); X.fill();
    X.fillStyle = c.gold; for (let i = 0; i < 3; i++) { X.beginPath(); X.arc(7, -50 + i * 6, 0.9, 0, TAU); X.fill(); }
    X.beginPath(); X.moveTo(8, -64 + br); X.lineTo(14, -64 + br); X.lineTo(14, -58); X.lineTo(11, -55); X.lineTo(8, -58); X.closePath(); X.fill();
    X.fillStyle = '#2a1810'; X.fillRect(-14, -34, 28, 4); X.fillStyle = c.gold; X.fillRect(-3, -35, 6, 6);
  }
  X.fillStyle = c.fur;
  X.beginPath(); X.moveTo(-6, -74 + br); X.bezierCurveTo(-28, -86, -42, -66, -32, -50); X.bezierCurveTo(-26, -58, -14, -60, -6, -64); X.closePath(); X.fill();
  X.beginPath(); X.moveTo(8, -74 + br); X.bezierCurveTo(30, -86, 44, -68, 34, -52); X.bezierCurveTo(28, -60, 16, -62, 8, -64); X.closePath(); X.fill();
  if (!sil) { X.strokeStyle = 'rgba(120,110,130,0.35)'; X.lineWidth = 0.6; X.beginPath(); for (let i = 0; i < 10; i++) { const fx = -34 + i * 7, fy = -62 + Math.sin(i * 1.7) * 6; X.moveTo(fx, fy); X.lineTo(fx - 2, fy + 5); } X.stroke(); }
  X.strokeStyle = c.coat; X.lineWidth = 9; X.beginPath(); X.moveTo(-22, -68 + br); X.quadraticCurveTo(-30, -52, -26, -36); X.stroke();
  X.fillStyle = c.skin; X.beginPath(); X.arc(-25, -34, 4, 0, TAU); X.fill();
  if (o.cane !== false) {
    X.strokeStyle = sil ? '#07060a' : '#3a1c14'; X.lineWidth = 2.4; X.beginPath(); X.moveTo(-25, -36); X.lineTo(-27, 0); X.stroke();
    X.fillStyle = c.gold; X.beginPath(); X.arc(-25, -40, 4, 0, TAU); X.fill();
  }
  const a = o.arm || 0, ex = 30 + a * 6, ey = -52 - a * 28, hx = 28 - a * 4, hy2 = -34 - a * 74;
  X.strokeStyle = c.metal; X.lineWidth = 9; X.beginPath(); X.moveTo(22, -68 + br); X.lineTo(ex, ey); X.stroke();
  X.lineWidth = 8; X.beginPath(); X.moveTo(ex, ey); X.lineTo(hx, hy2); X.stroke();
  if (!sil) { X.strokeStyle = '#3a414c'; X.lineWidth = 0.8; X.beginPath(); for (let i = 1; i < 4; i++) { const u = i / 4, px = ex + (hx - ex) * u, py = ey + (hy2 - ey) * u; X.moveTo(px - 4, py); X.lineTo(px + 4, py); } X.stroke(); }
  X.fillStyle = c.gold; X.beginPath(); X.arc(ex, ey, 4.5, 0, TAU); X.fill();
  X.fillStyle = c.metal; X.beginPath(); X.roundRect(hx - 6, hy2 - 4, 12, 10, 3); X.fill();
  const hy = -84 + br;
  X.fillStyle = c.skin; X.beginPath(); X.ellipse(2, hy, 10, 11.5, 0, 0, TAU); X.fill(); edge();
  X.fillStyle = c.hair;
  X.beginPath(); X.moveTo(-8, hy - 4); X.quadraticCurveTo(-13, hy + 4, -7, hy + 10); X.lineTo(-3, hy + 2); X.closePath(); X.fill();
  X.beginPath(); X.moveTo(11, hy - 6); X.quadraticCurveTo(14, hy, 11, hy + 3); X.lineTo(8, hy - 3); X.closePath(); X.fill();
  X.beginPath(); X.moveTo(-5, hy + 3); X.bezierCurveTo(-8, hy + 16, 8, hy + 24, 14, hy + 8); X.quadraticCurveTo(12, hy + 6, 9, hy + 5); X.quadraticCurveTo(2, hy + 8, -5, hy + 3); X.closePath(); X.fill(); edge();
  X.beginPath(); X.moveTo(1, hy + 4); X.quadraticCurveTo(9, hy + 1, 14, hy + 6); X.quadraticCurveTo(8, hy + 8, 1, hy + 4); X.fill();
  if (!sil) {
    X.strokeStyle = '#2a1c18'; X.lineWidth = 1; X.fillStyle = '#2a1c18';
    if (o.eyes === 'closed') { X.beginPath(); X.moveTo(2, hy - 2); X.lineTo(5, hy - 2); X.moveTo(8, hy - 2); X.lineTo(11, hy - 2); X.stroke(); }
    else if (o.eyes === 'laugh') { X.beginPath(); X.arc(3.5, hy - 1.2, 1.8, Math.PI, 0); X.stroke(); X.beginPath(); X.arc(9.5, hy - 1.2, 1.8, Math.PI, 0); X.stroke(); }
    else { X.fillStyle = o.angry ? '#d4301f' : '#2a1c18'; X.beginPath(); X.arc(3.5, hy - 2, o.angry ? 1.3 : 1, 0, TAU); X.arc(9.5, hy - 2, o.angry ? 1.3 : 1, 0, TAU); X.fill(); }
    X.beginPath(); if (o.angry) { X.moveTo(1, hy - 7); X.lineTo(5, hy - 4.8); X.moveTo(8, hy - 4.8); X.lineTo(12, hy - 7); } else { X.moveTo(1, hy - 5.4); X.lineTo(5, hy - 6.8); X.moveTo(8, hy - 6.8); X.lineTo(12, hy - 5.2); } X.stroke();
    X.fillStyle = '#a67f60'; X.beginPath(); X.ellipse(9, hy + 1, 1.6, 2, 0, 0, TAU); X.fill();
    if (o.mouth) { X.fillStyle = '#2a0608'; X.beginPath(); X.ellipse(8, hy + 7.6, 3.4, 0.8 + 2.2 * o.mouth, 0, 0, TAU); X.fill(); }
    if (o.tear > 0) { X.strokeStyle = `rgba(160,210,255,${o.tear})`; X.lineWidth = 1; X.beginPath(); X.moveTo(9.4, hy - 0.6); X.lineTo(9.8, hy - 0.6 + 9 * o.tear); X.stroke(); }
  }
  if (o.hat !== false) { X.save(); X.translate(0, hy - 10); X.rotate(-0.08); hatShape(sil); if (sil) { X.strokeStyle = c.line; X.lineWidth = 0.7; X.beginPath(); X.ellipse(2, 0, 15, 4, 0, Math.PI, TAU); X.stroke(); } X.restore(); }
  X.restore();
}
function dogShape(o) {
  const sil = !!o.sil, t = o.t, ph = o.ph || 0, p = o.pose || 'stand', br = Math.sin(t * 0.004) * 0.4;
  const c = sil ? {body:'#07060a', tan:'#07060a', collar:'#0c0b10', rim:'rgba(255,215,140,0.25)'}
                : {body:'#16141a', tan:'#8a4e24', collar:'#d9b04a', rim:'rgba(255,255,255,0.10)'};
  X.lineJoin = 'round'; X.lineCap = 'round';
  X.fillStyle = c.body; X.strokeStyle = c.body;
  const head = (hx, hy, rot, open) => {
    X.save(); X.translate(hx, hy); X.rotate(rot);
    X.fillStyle = c.body; X.beginPath(); X.ellipse(0, 0, 6.5, 4.6, -0.15, 0, TAU); X.fill();
    X.beginPath(); X.moveTo(2, -2); X.lineTo(12, 1.5 + (open || 0)); X.lineTo(11, 4.5 + (open || 0)); X.lineTo(1, 3); X.closePath(); X.fill();
    X.beginPath(); X.moveTo(-4, -3); X.lineTo(-5, -12); X.lineTo(0, -4); X.closePath(); X.fill();
    X.beginPath(); X.moveTo(0, -4); X.lineTo(2, -13); X.lineTo(4, -3); X.closePath(); X.fill();
    if (!sil) {
      X.fillStyle = c.tan; X.beginPath(); X.moveTo(3, 1.5); X.lineTo(12, 1.8 + (open || 0)); X.lineTo(11, 4.5 + (open || 0)); X.lineTo(2, 3); X.closePath(); X.fill();
      X.fillStyle = o.red ? '#ff3a2a' : '#c9a050'; X.beginPath(); X.arc(1.4, -1.2, 1, 0, TAU); X.fill();
      if (open) { X.fillStyle = '#f4efe6'; X.fillRect(8, 2.6, 1.2, 2); X.fillRect(10, 2.6, 1.2, 2); }
    }
    X.restore();
  };
  if (p === 'lie') {
    X.fillStyle = c.body; X.beginPath(); X.ellipse(-4, -8, 20, 8, 0, 0, TAU); X.fill();
    X.beginPath(); X.moveTo(-22, -10); X.lineTo(-27, -9 + Math.sin(t * 0.01) * 1); X.lineTo(-22, -7); X.fill();
    head(22, -6.5, 0.25, 0);
    X.strokeStyle = c.body; X.lineWidth = 3.6; X.beginPath(); X.moveTo(10, -3); X.lineTo(26, -2); X.stroke();
  } else if (p === 'sit') {
    X.fillStyle = c.body; X.beginPath(); X.ellipse(-8, -12, 12, 11, 0, 0, TAU); X.fill();
    X.beginPath(); X.moveTo(-4, -18); X.quadraticCurveTo(4, -40, 14, -37); X.lineTo(20, -22); X.lineTo(8, -4); X.lineTo(-6, -4); X.closePath(); X.fill();
    X.strokeStyle = c.body; X.lineWidth = 4; X.beginPath(); X.moveTo(14, -24); X.lineTo(15, -1); X.stroke();
    head(19, -45 + br, -0.35, 0);
    if (!sil) { X.fillStyle = c.tan; X.beginPath(); X.ellipse(15, -27, 3, 5, 0, 0, TAU); X.fill(); }
    X.strokeStyle = c.collar; X.lineWidth = 2; X.beginPath(); X.moveTo(10, -36); X.lineTo(17, -34); X.stroke();
  } else {
    const k = p === 'stand' ? 0 : 1, lean = p === 'attack' ? 1 : 0;
    X.save(); X.translate(lean * 4, -lean * 2); X.rotate(-lean * 0.1);
    X.strokeStyle = c.body; X.lineWidth = 4;
    [[-14, 0], [-9, Math.PI], [11, Math.PI], [16, 0]].forEach(([lx, off]) => {
      const sw2 = Math.sin(ph + off) * 6 * k; X.beginPath(); X.moveTo(lx, -17); X.lineTo(lx + sw2, -1); X.stroke();
      if (!sil) { X.strokeStyle = c.tan; X.beginPath(); X.moveTo(lx + sw2 * 0.9, -6); X.lineTo(lx + sw2, -1); X.stroke(); X.strokeStyle = c.body; }
    });
    X.fillStyle = c.body; X.beginPath(); X.moveTo(-21, -23 + br); X.quadraticCurveTo(-18, -32, -4, -31 + br); X.quadraticCurveTo(12, -31 + br, 19, -27); X.quadraticCurveTo(23, -18, 16, -15); X.lineTo(-14, -15); X.quadraticCurveTo(-23, -15, -21, -23 + br); X.closePath(); X.fill();
    X.strokeStyle = c.body; X.lineWidth = 3; X.beginPath(); X.moveTo(-21, -24); X.lineTo(-27, -29 + Math.sin(t * 0.02) * 1.5); X.stroke();
    X.fillStyle = c.body; X.beginPath(); X.moveTo(14, -29); X.lineTo(24, -41); X.lineTo(30, -39); X.lineTo(22, -24); X.closePath(); X.fill();
    head(29, -42, lean ? -0.25 : -0.1, lean * 3);
    if (!sil) { X.fillStyle = c.tan; X.beginPath(); X.ellipse(17, -22, 3, 4, 0, 0, TAU); X.fill(); }
    X.strokeStyle = c.collar; X.lineWidth = 2; X.beginPath(); X.moveTo(17, -30); X.lineTo(23, -26); X.stroke();
    X.restore();
  }
}
function drawKhand(e) {
  const cx = eCx(e), by = e.y + eH(e), t = anim * 16.67;
  const wu = e.state === 'stompWindup', aw = e.state === 'armWindup', st = e.state === 'stomp', rc = e.state === 'recover';
  const arm = wu ? clamp(1 - e.st / 40, 0, 1) : aw ? clamp(1 - e.st / 35, 0, 1) * 0.8 : 0;
  const laugh = (e.laughT > 0 || wu || aw) ? 1 : 0.25;
  if (e.phase2 && !isDown(e)) {
    X.save(); X.globalCompositeOperation = 'lighter';
    const ar = X.createRadialGradient(cx, by - 80, 10, cx, by - 80, 150); ar.addColorStop(0, `rgba(255,60,40,${(e.phase3 ? 0.3 : 0.2) + 0.06 * Math.sin(anim * 0.2)})`); ar.addColorStop(1, 'rgba(255,60,40,0)');
    X.fillStyle = ar; X.fillRect(cx - 150, by - 230, 300, 300); X.restore();
  }
  X.save(); X.translate(cx, by); X.scale(e.f * 1.7, 1.7 * (st ? 0.95 : 1));
  if (e.flash > 0) X.globalAlpha = 0.75;
  X.fillStyle = 'rgba(0,0,0,0.45)'; X.beginPath(); X.ellipse(0, 1, 34, 5, 0, 0, TAU); X.fill();
    X.shadowColor = 'rgba(255, 200, 100, 0.6)';
  X.shadowBlur = 12;
    oldMan({
      sil:false, t,
      arm: (e.state === 'fatigue' || e.state === 'dying' || aw) ? 1 : arm,
      laugh: (e.state === 'fatigue' || e.state === 'dying') ? 0 : (laugh > 0.5 ? 1 : 0.25),
      tear: (rc || e.state === 'dying') ? 1 : 0,
      eyes: (e.state === 'fatigue' || e.state === 'dying') ? 'closed' : (laugh > 0.5 ? 'laugh' : 'open'),
      mouth: (e.state === 'fatigue' || e.state === 'dying') ? 0 : (laugh > 0.5 ? 1 : 0),
      stoop: (e.state === 'fatigue' || rc || e.state === 'dying') ? 1 : (e.phase3 ? 0.7 : 0),
      angry: !!e.phase2, cane: !e.phase3
    });
    X.shadowBlur = 0;
  X.restore();
  if (e.phase3 && !isDown(e)) { X.strokeStyle = '#3a1c14'; X.lineWidth = 3; X.lineCap = 'round'; X.beginPath(); X.moveTo(cx - e.f * 70, GROUND - 3); X.lineTo(cx - e.f * 30, GROUND - 7); X.stroke(); X.fillStyle = '#d9b04a'; X.beginPath(); X.arc(cx - e.f * 72, GROUND - 3, 3.5, 0, TAU); X.fill(); }
  if ((wu || aw) && !isDown(e)) { X.font = 'bold 28px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = `rgba(255,90,60,${0.7 + 0.3 * Math.sin(anim * 0.6)})`; X.fillText('!', cx, e.y - 30); }
  if (e.hp > 0 && !isDown(e)) { X.fillStyle = 'rgba(0,0,0,0.5)'; X.fillRect(cx - 40, e.y - 14, 80, 6); X.fillStyle = '#d9b04a'; X.fillRect(cx - 40, e.y - 14, 80 * clamp(e.hp / e.maxHp, 0, 1), 6); }
  if (!isDown(e) && e.state !== 'dying') {
    X.textAlign = 'center';
    const dogAlive = enemies.some(en => en.dog && !isDown(en));
    if (dogAlive) {
      X.font = 'bold 12px Vazirmatn'; X.fillStyle = 'rgba(242,200,72,0.8)'; X.fillText('آسیب‌ناپذیر — اول سگ', cx, e.y - 22);
    } else if (e.state === 'fatigue') {
      const pu = 0.5 + 0.5 * Math.sin(anim * 0.3);
      X.save(); X.globalCompositeOperation = 'lighter';
      const ag = X.createRadialGradient(cx, by - 80, 10, cx, by - 80, 110); ag.addColorStop(0, `rgba(255,220,100,${0.28 + 0.15 * pu})`); ag.addColorStop(1, 'rgba(255,220,100,0)');
      X.fillStyle = ag; X.fillRect(cx - 120, by - 200, 240, 220);
      X.strokeStyle = `rgba(255,220,100,${0.5 + 0.4 * pu})`; X.lineWidth = 3; X.beginPath(); X.ellipse(cx, by - 80, 54 + pu * 6, 92, 0, 0, TAU); X.stroke();
      X.restore();
      X.font = 'bold 15px Vazirmatn'; X.fillStyle = '#ffe070'; X.fillText('ضربه‌ی کامل!', cx, e.y - 24);
      X.fillStyle = 'rgba(255,224,112,0.9)'; X.fillRect(cx - 40, e.y - 6, 80 * clamp(e.st / 180, 0, 1), 3);
    } else {
      const hr = e.hitsReceived || 0;
      for (let k = 0; k < 8; k++) { X.fillStyle = k < hr ? '#ffe070' : 'rgba(255,255,255,0.15)'; X.fillRect(cx - 40 + k * 10, e.y - 6, 8, 3); }
    }
  }
}
function drawDogEnemy(e) {
  if (isDown(e)) return;
  const cx = eCx(e), by = e.y + eH(e), t = anim * 16.67;
  X.save(); X.translate(cx, by); X.scale(e.f * 1.15, 1.15);
  X.fillStyle = 'rgba(0,0,0,0.45)'; X.beginPath(); X.ellipse(2, 1, 24, 3.5, 0, 0, TAU); X.fill();
  if (e.flash > 0) X.globalAlpha = 0.75;
  dogShape({sil:false, t, pose: e.state === 'attack' ? 'attack' : 'walk', ph: e.walkT * 1.6, red:true});
  X.restore();
  if (e.hp > 0 && e.hp < e.maxHp) { X.fillStyle = 'rgba(0,0,0,0.5)'; X.fillRect(cx - 20, e.y - 12, 40, 4); X.fillStyle = '#ff3a2a'; X.fillRect(cx - 20, e.y - 12, 40 * clamp(e.hp / e.maxHp, 0, 1), 4); }
}
function drawKhandCine(c, b, gy) {
  const bx = c.bx, sc = 1.9, death = c.death, kp = death ? c.kp : 0;
  const lie = clamp(kp, 0, 2) / 2, al = kp > 2 ? clamp(1 - (kp - 2) * 1.1, 0, 1) : 1, talking = b.who === 'h';
  const d = c.dog;
  if (d && d.mode !== 'away') { X.save(); X.translate(d.x, gy); X.scale(-1.9, 1.9); dogShape({sil:true, t:c.tAll, pose: d.mode === 'run' ? 'walk' : d.mode, ph: d.ph}); X.restore(); }
  if (c.hat) { X.save(); X.translate(c.hat.x, c.hat.y); X.rotate(c.hat.rot); X.scale(1.9, 1.9); hatShape(true); X.restore(); }
  if (b.fx === 'ghost') {
    X.save(); X.translate(bx, gy); X.globalAlpha = clamp(0.42 * (1 - c.t / b.dur * 0.8), 0, 0.42); X.scale(-sc, sc);
    oldMan({sil:true, t:c.tAll, hat:false, laugh:0, rim:0.5}); X.restore();
  } else if (kp < 3.2) {
    X.save(); X.translate(bx, gy - 11 * sc * lie); X.rotate(1.45 * lie); X.globalAlpha = al; X.scale(-sc, sc);
    oldMan({sil:true, t:c.tAll, hat:!c.hat, laugh: talking ? 1 : 0.15, cane: lie < 0.5, rim: talking ? 0.6 : 0.3});
    X.restore();
  }
}
function cineEnter(c, b) {
  if (b.fx === 'fall') c.hat = {x: c.bx + 4, y: 322 - 176, vx: -2.8, vy: -4.2, rot: 0, rv: -0.24};
  if (b.fx === 'dog' && c.dog) c.dog.mode = 'run';
  if (b.fx === 'fade' && c.dog) c.dog.mode = 'lie';
  if (c.ph) { if (b.fx === 'shrink') c.ph.mode = 'shrink'; if (b.fx === 'land') { c.ph.mode = 'fly'; c.reachT = 1; } if (b.fx === 'pet') c.ph.mode = 'sit'; if (b.fx === 'fade') c.ph.mode = 'fade'; }
}
 
function drawEnemyRaw(e) {
  if (e.dog) { drawDogEnemy(e); return; }
  if (e.fly) { drawBird(e); return; }
  if (e.khand) { drawKhand(e); return; }
  if (e.phoenix) { drawPhoenix(e); return; }
  const sz = e.boss ? 2 : 1, EW = 22 * sz, EH = 30 * sz;
  if (e.x + EW < camX - 100 || e.x > camX + W + 100) return;
  const dead = e.state === 'dead', ko = e.state === 'ko', down = dead || ko;
  const moving = e.state === 'patrol' || e.state === 'chase';
  const sw = moving ? Math.sin(e.walkT) : 0;
  const windup = e.state === 'windup' || e.state === 'lungeWindup', swind = e.state === 'shootWindup', atk = e.state === 'attack' || e.state === 'lunge';
  const flashW = e.flash > 0 && e.flash % 4 < 2;
  const C = c => flashW ? '#fff' : c;
  const idle = Math.sin(anim * 0.06 + e.x) * 0.5;
  if (!down) { X.fillStyle = 'rgba(0,0,0,0.45)'; X.beginPath(); X.ellipse(e.x + EW/2, e.y + EH + 1, 11 * sz, 3 * sz, 0, 0, TAU); X.fill(); }
  X.save();
  if (down) { X.translate(e.x + EW/2, e.y + EH + 2); X.rotate(-e.f * 1.5); X.translate(-EW/2, -EH); }
  else { X.translate(e.x + EW/2, e.y); X.scale(e.f, 1); X.translate(-EW/2, 0); }
  X.scale(sz, sz);
  if (!down) X.translate(0, idle * 0.4);
  limb(4, 11, 2 - sw*2, 22, 4.2, C('#12121b'));
  X.fillStyle = C('#e0d6c6'); X.beginPath(); X.arc(2 - sw*2, 22.6, 2.4, 0, TAU); X.fill();
  limb(7, 23, 7 + sw*4, 29.5, 5, C('#12121a')); limb(15, 23, 15 - sw*4, 29.5, 5, C('#1c1c26'));
  X.fillStyle = C('#07070b'); X.fillRect(4 + sw*4, 28.4, 7, 2.6); X.fillRect(12 - sw*4, 28.4, 7, 2.6);
  const tg = X.createLinearGradient(3, 0, 20, 0);
  tg.addColorStop(0, '#1c1c28'); tg.addColorStop(1, '#3a3a4e');
  X.fillStyle = C(tg); X.beginPath(); X.roundRect(3, 8, 17, 16, 3); X.fill();
  if (e.boss) {
    X.fillStyle = C('#1a1a24'); X.beginPath(); X.moveTo(3, 18); X.lineTo(20, 18); X.lineTo(23, 30); X.lineTo(0, 30); X.fill();
    X.fillStyle = C('#8a2a20'); X.fillRect(10.5, 18, 1.5, 12);
    X.fillStyle = C('#2a2a38'); X.beginPath(); X.arc(3, 9.5, 3.6, 0, TAU); X.arc(20, 9.5, 3.6, 0, TAU); X.fill();
  }
  const rage = Math.min(0.4, kills * 0.04);
  if (rage > 0.05 && !flashW) { X.fillStyle = `rgba(200,50,30,${rage})`; X.beginPath(); X.roundRect(3, 8, 17, 16, 3); X.fill(); }
  X.fillStyle = C('#d8d0c4'); X.beginPath(); X.moveTo(8, 9); X.lineTo(11.5, 16); X.lineTo(15, 9); X.fill();
  X.fillStyle = C('#8a1a14'); X.beginPath(); X.moveTo(11, 11); X.lineTo(12.4, 11); X.lineTo(12.8, 19); X.lineTo(11.5, 21); X.lineTo(10.6, 19); X.fill();
  X.strokeStyle = C('#4a4a5a'); X.lineWidth = 0.9; X.beginPath(); X.moveTo(5, 10); X.lineTo(10, 18); X.moveTo(18, 10); X.lineTo(13, 18); X.stroke();
  let hx, hy;
  if (windup) { hx = 21; hy = -2; }
  else if (atk) { hx = 25; hy = 17; }
  else if (e.shoots) { hx = 21 - (swind ? 1 : 0); hy = 14; }
  else { hx = 21 + sw; hy = 22; }
  limb(18, 11, hx, hy, 4.2, C('#12121b'));
  if (e.shoots && !windup && !atk) {
    X.fillStyle = C('#0c0c10'); X.fillRect(hx - 1, hy - 2.4, 10, 3.6); X.fillRect(hx, hy + 0.6, 3.5, 5);
    if (swind) { const k = 1 - e.st / 28; X.fillStyle = `rgba(255,70,50,${0.3 + k * 0.6})`; X.beginPath(); X.arc(hx + 10, hy - 0.6, 2 + k * 4, 0, TAU); X.fill(); }
  }
  if (windup) { X.fillStyle = `rgba(255,80,40,${0.4 + Math.sin(anim * 0.4) * 0.3})`; X.beginPath(); X.arc(hx, hy, 7, 0, TAU); X.fill(); }
  X.fillStyle = C('#e0d6c6'); X.beginPath(); X.arc(hx, hy, 2.8, 0, TAU); X.fill();
  if (e.kian) { X.strokeStyle = C('#cfd6e0'); X.lineWidth = 2.4; X.lineCap = 'round'; X.beginPath(); X.moveTo(hx, hy); X.lineTo(hx + (windup ? 5 : 11), hy - (windup ? 27 : 20)); X.stroke(); X.strokeStyle = C('#6a4a2a'); X.lineWidth = 3; X.beginPath(); X.moveTo(hx - 2.5, hy - 1); X.lineTo(hx + 2.5, hy - 1.5); X.stroke(); }
  if (e.shield && !e.shieldBroken) {
    const sg = X.createLinearGradient(18, 0, 28, 0); sg.addColorStop(0, C('#59616e')); sg.addColorStop(1, C('#9aa4b4'));
    X.fillStyle = sg; X.beginPath(); X.roundRect(18, 2, 9, 29, [4, 6, 6, 4]); X.fill();
    X.strokeStyle = C('#cfd8e2'); X.lineWidth = 1; X.stroke();
    X.strokeStyle = C('rgba(95,179,217,0.9)'); X.lineWidth = 1;
    X.beginPath(); X.arc(22.5, 16, 3.4, 0, TAU); X.moveTo(22.5, 16); X.lineTo(22.5, 13.6); X.moveTo(22.5, 16); X.lineTo(24.4, 17); X.stroke();
    if (e.shieldHits > 0) {
      X.strokeStyle = 'rgba(15,15,25,0.85)'; X.lineWidth = 0.9; X.beginPath();
      for (let i = 0; i < Math.min(3, e.shieldHits); i++) { X.moveTo(19 + i * 2.5, 4 + i * 3); X.lineTo(23 + i, 11 + i * 4); X.lineTo(21 + i * 2, 18 + i * 3); }
      X.stroke();
    }
  }
  X.fillStyle = C('#cabaa2'); X.beginPath(); X.arc(11, 3, 8, 0, TAU); X.fill();
  if (flashW) { X.fillStyle = '#fff'; X.beginPath(); X.arc(11, 3, 8.4, 0, TAU); X.fill(); }
  else if (e.human || e.kian) drawFace(e, down);
  else drawMask(11, 3, 8.2, false);
  if (!down && !flashW && !e.human && !e.kian) {
    const gl = e.boss ? '255,60,30' : '210,60,40', ga = 0.65 + Math.sin(anim * 0.15) * 0.3;
    X.fillStyle = `rgba(${gl},${ga})`;
    X.beginPath(); X.arc(7.9, 2.2, 1.1, 0, TAU); X.arc(14.1, 2.2, 1.1, 0, TAU); X.fill();
  }
  if (e.shoots && !e.boss) {
    X.fillStyle = C('#0e0e14'); X.beginPath(); X.ellipse(11, -2.6, 11.5, 2.4, 0, 0, TAU); X.fill();
    X.beginPath(); X.roundRect(5.5, -10, 11, 8, 2); X.fill();
    X.fillStyle = C('#7a1a14'); X.fillRect(5.5, -4.6, 11, 1.8);
  }
  if (e.boss && !e.kian) {
    X.fillStyle = C('#14141c');
    for (let i = 0; i < 3; i++) { X.beginPath(); X.moveTo(5 + i*6, -3.5); X.lineTo(7.5 + i*6, -10 - (i === 1 ? 3 : 0)); X.lineTo(10 + i*6, -3.5); X.fill(); }
    X.fillStyle = C('#8a2a20'); X.fillRect(5, -4.2, 12, 1.4);
  }
  if (e.state === 'stun') {
    for (let i = 0; i < 3; i++) {
      const a = anim * 0.15 + i * 2.1;
      X.fillStyle = '#ffe070'; X.beginPath(); X.arc(11 + Math.cos(a) * 9, -7 + Math.sin(a) * 2.5, 1.6, 0, TAU); X.fill();
    }
  }
  X.restore();
  if (e.hp > 0 && e.hp < e.maxHp && !down) {
    const bw = e.boss ? 80 : 22, bx = e.x + (EW - bw) / 2, by = e.y - (e.boss ? 16 : 9);
    X.fillStyle = 'rgba(0,0,0,0.7)'; X.fillRect(bx - 1, by - 1, bw + 2, 5);
    X.fillStyle = e.boss ? '#ff5a2a' : '#c8422a'; X.fillRect(bx, by, bw * (e.hp / e.maxHp), 3);
  }
  if (e.state === 'alert' && !down) {
    X.font = 'bold 18px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = '#ff4040';
    X.shadowColor = 'rgba(0,0,0,0.8)'; X.shadowBlur = 4; X.fillText('!', e.x + EW/2, e.y - 10); X.shadowBlur = 0;
  }
  if (ko) {
    X.font = 'bold 13px Vazirmatn'; X.textAlign = 'center'; X.fillStyle = 'rgba(232,111,181,0.8)';
    X.fillText('z', e.x + EW/2 + 8, e.y - 4 + Math.sin(anim * 0.08) * 3);
  }
}
