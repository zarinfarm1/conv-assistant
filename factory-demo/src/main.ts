import * as THREE from "three";
import { initAudio, startIntroAudio } from "./audio";
import { scene, camera, renderer, setupLights } from "./scene";



import {
  buildWorld, zoneBounds, gateL, gateR, hallDoorL, hallDoorR,
  updateFurnaceEffects, updateConveyor, updatePress,
   updateWeldingSpark, updateWarningLights,       // ← این دو
} from "./builder";
import { SPAWN_X, SPAWN_Z, EYE, GATE_Z, HALL_Z_MIN } from "./constants";
import { setPlayerPosition, updateMovement, keys, hitsWall, COLLIDERS } from "./player";
import { setupUI, updateZoneDetection, drawMinimap, runSelfTest } from "./ui";
import { updateIntro, isIntroActive } from "./intro";

(window as any).hitsWall = hitsWall;
(window as any).keys = keys;
(window as any).zoneBounds = zoneBounds;
(window as any).COLLIDERS = COLLIDERS;

async function boot(): Promise<void> {
  const loadingBar = document.getElementById("loading-bar") as HTMLElement;
  const loadingHint = document.getElementById("loading-hint") as HTMLElement;
  const hints = ["آماده‌سازی زمین…", "ساخت سوله تولید…", "نصب کوره و پرس…", "چیدن خط بسته‌بندی…"];
  let hp = 0;
  const hintTimer = window.setInterval(() => {
    hp = (hp + 1) % hints.length;
    loadingHint.textContent = hints[hp];
  }, 430);

  let prog = 0;
  const progTimer = window.setInterval(() => {
    prog = Math.min(96, prog + 9 + Math.random() * 9);
    loadingBar.style.width = `${prog}%`;
  }, 150);

  try {
    await Promise.all([
      document.fonts.load('800 68px "Vazirmatn"'),
      document.fonts.load('400 28px "Vazirmatn"'),
    ]);
    await document.fonts.ready;
  } catch { /* ignore */ }

		setupLights();
		buildWorld();
		initAudio();             // ← بدون await — سایت منتظر نمی‌ماند
		startIntroAudio();       // ← موسیقی پرواز
		setupUI();
		runSelfTest();

  setPlayerPosition(SPAWN_X, EYE, SPAWN_Z);
  (window as any).playerState.yaw = Math.PI;
  camera.rotation.set(0, Math.PI, 0, "YXZ");

  window.clearInterval(progTimer);
  window.clearInterval(hintTimer);
  loadingBar.style.width = "100%";
  window.setTimeout(() => document.getElementById("loading")?.classList.add("hide"), 320);

  const clock = new THREE.Clock();
  let gateOpen = 0;
  let hallOpen = 0;

  function animate(): void {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.08);
    const elapsed = clock.getElapsedTime();

    if (isIntroActive()) {
      updateIntro(delta);
    } else {
      updateMovement(delta);
    }
    updateZoneDetection();
    updateFurnaceEffects(delta, elapsed);
    updateConveyor(delta);
    updatePress(elapsed);
	
	updateWeldingSpark(elapsed);
    updateWarningLights(elapsed);

    // ─── دروازه: با نزدیک شدن باز می‌شود ───
    const gDist = Math.hypot(camera.position.x, camera.position.z - GATE_Z);
    const gTarget = gDist < 10 ? 1 : 0;
    gateOpen += (gTarget - gateOpen) * Math.min(1, delta * 3.2);
    if (gateL && gateR) {
      const a = gateOpen * (Math.PI / 2.35);
      gateL.rotation.y = -a;
      gateR.rotation.y = a;
    }

    // ─── درب سوله: با نزدیک شدن باز می‌شود ───
    const hDist = Math.hypot(camera.position.x, camera.position.z - HALL_Z_MIN);
    const hTarget = hDist < 8 ? 1 : 0;
    hallOpen += (hTarget - hallOpen) * Math.min(1, delta * 3.2);
    if (hallDoorL && hallDoorR) {
      const a = hallOpen * (Math.PI / 2.35);
      hallDoorL.rotation.y = -a;
      hallDoorR.rotation.y = a;
    }

    drawMinimap();
    renderer.render(scene, camera);
  }

  animate();
}

boot().catch(console.error);