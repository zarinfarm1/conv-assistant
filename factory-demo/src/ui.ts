import { camera } from "./scene";
import { ZONES, X_MIN, X_MAX, Z_MIN, Z_MAX, SPAWN_X, SPAWN_Z, EYE } from "./constants";
import { zoneBounds } from "./builder";
import { keys, setPlayerPosition, state } from "./player";
import { hex } from "./utils";
import { stopIntro } from "./intro";
import { startWalkAudio, toggleAudio } from "./audio";
import type { ZoneBounds } from "./types";

const $ = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

const roomTxtEl = $("room-txt");
const roomSubEl = $("room-sub");
const roomDotEl = $("room-dot");
const roomBadgeEl = $("room-badge");
const instructions = $("instructions");
const startBtn = $("start-btn");
const mmCanvas = $("minimap") as HTMLCanvasElement;
const mmCtx = mmCanvas.getContext("2d")!;

let currentZoneId: string | null = null;

// ---- تشخیص منطقه ----
export function updateZoneDetection(): void {
  const x = camera.position.x;
  const z = camera.position.z;
  let found: ZoneBounds | null = null;
  for (const zb of zoneBounds) {
    if (x > zb.xMin && x < zb.xMax && z > zb.zMin && z < zb.zMax) {
      found = zb;
      break;
    }
  }
  const newId = found ? found.id : null;
  if (newId !== currentZoneId) {
    currentZoneId = newId;
    if (found) {
      roomTxtEl.textContent = found.title;
      roomSubEl.textContent = found.sub;
      roomDotEl.style.background = hex(found.color);
      roomDotEl.style.boxShadow = `0 0 0 3px ${hex(found.color)}33`;
    } else {
      roomTxtEl.textContent = "حیاط کارخانه";
      roomSubEl.textContent = "محوطه";
      roomDotEl.style.background = "#d6ab5c";
      roomDotEl.style.boxShadow = "0 0 0 3px rgba(214,171,92,0.16)";
    }
    roomBadgeEl.classList.add("pop");
    window.setTimeout(() => roomBadgeEl.classList.remove("pop"), 380);
  }
}

// ---- مینی‌مپ ----
export function drawMinimap(): void {
  const W = mmCanvas.width, H = mmCanvas.height;
  mmCtx.clearRect(0, 0, W, H);
  mmCtx.fillStyle = "#0d1017";
  mmCtx.fillRect(0, 0, W, H);

  const xRange = X_MAX - X_MIN;
  const zRange = Z_MAX - Z_MIN;
  const sx = W / xRange;
  const sz = H / zRange;
  const toPx = (x: number, z: number): [number, number] => [
    (x - X_MIN) * sx,
    (z - Z_MIN) * sz,
  ];

  for (const zb of zoneBounds) {
    if (zb.id === "yard") continue;
    const [x1, z1] = toPx(zb.xMin, zb.zMin);
    const [x2, z2] = toPx(zb.xMax, zb.zMax);
    mmCtx.fillStyle = currentZoneId === zb.id ? hex(zb.color) : `${hex(zb.color)}44`;
    mmCtx.fillRect(x1, z1, x2 - x1, z2 - z1);
  }

  const [px, pz] = toPx(camera.position.x, camera.position.z);
  mmCtx.save();
  mmCtx.translate(px, pz);
  const st = (window as any).playerState;
  mmCtx.rotate(-(st?.yaw ?? 0));
  mmCtx.fillStyle = "#ffffff";
  mmCtx.beginPath();
  mmCtx.moveTo(0, -7);
  mmCtx.lineTo(5, 6);
  mmCtx.lineTo(0, 3);
  mmCtx.lineTo(-5, 6);
  mmCtx.closePath();
  mmCtx.fill();
  mmCtx.restore();
}

// ---- راه‌اندازی UI ----
export function setupUI(): void {
  // ─────── کلیدهای کیبورد ───────
  window.addEventListener("keydown", (e) => {
    const el = e.target as HTMLElement;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable) return;
    keys[e.code] = true;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
      e.preventDefault();
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  window.addEventListener("blur", () => {
    for (const k of Object.keys(keys)) keys[k] = false;
  });
  // ────────────────────────────────

  const canvas = document.getElementById("three-canvas") as HTMLCanvasElement;

  function requestLook(): void {
    try {
      const p = canvas.requestPointerLock() as any;
      if (p && typeof p.catch === "function") p.catch(() => undefined);
    } catch { /* ignore */ }
  }

  let entered = false;

  function enterFactory(): void {
    if (entered) return;
    entered = true;

    // اول: قفل انیمیشن پرواز را می‌بندیم
    stopIntro();

    // دوم: موقعیت بازیکن را تعیین می‌کنیم
    setPlayerPosition(SPAWN_X, EYE, SPAWN_Z);
    state.yaw = Math.PI;
    state.pitch = 0;
    camera.rotation.set(0, Math.PI, 0, "YXZ");

    // سوم: صدا را به حالت راه رفتن می‌بریم — موسیقی این‌جا کشته می‌شود
    startWalkAudio();

    // چهارم: UI را مخفی می‌کنیم
    instructions.classList.add("hide");
    requestLook();
  }

  // دکمه‌ی ورود
  startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    enterFactory();
  });

  // دکمه‌ی صدا — فقط قطع/وصل کل صدا
const soundBtn = document.getElementById("sound-toggle") as HTMLButtonElement | null;
if (soundBtn) {
  soundBtn.textContent = "🔇";   // شروع خاموش
  soundBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isMuted = toggleAudio();
    soundBtn.textContent = isMuted ? "🔇" : "🔊";
  });
}

  // فعال‌سازی pointer lock
  document.addEventListener("pointerlockchange", () => {
    canvas.classList.toggle("locked", document.pointerLockElement === canvas);
  });

  canvas.addEventListener("click", () => {
    if (entered) requestLook();
  });

  // ماوس در حالت قفل
  document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement !== canvas) return;
    const st = (window as any).playerState;
    st.yaw -= e.movementX * 0.0022;
    st.pitch = Math.max(-1.35, Math.min(1.35, st.pitch - e.movementY * 0.0022));
  });

  // درگ
  let dragging = false;
  canvas.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    dragging = true;
    try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!dragging || document.pointerLockElement === canvas || e.pointerType === "touch") return;
    const st = (window as any).playerState;
    st.yaw -= e.movementX * 0.0032;
    st.pitch = Math.max(-1.35, Math.min(1.35, st.pitch - e.movementY * 0.0032));
  });
  const endDrag = (): void => { dragging = false; };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
}

// ---- خودآزمون ----
export function runSelfTest(): void {
  console.info("[factory] zones:", ZONES.map((z) => z.id).join(", "));
}