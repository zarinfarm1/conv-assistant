import { camera } from "./scene";
import { PLAYER_R, EYE, X_MIN, X_MAX, Z_MIN, Z_MAX } from "./constants";
import type { Collider } from "./types";
import { playFootstep } from "./audio";


export const COLLIDERS: Collider[] = [];

export function pushCollider(minX: number, maxX: number, minZ: number, maxZ: number, kind: "wall" | "prop"): void {
  COLLIDERS.push({ minX, maxX, minZ, maxZ, kind });
}

export function hitsWall(x: number, z: number, r: number = PLAYER_R): boolean {
  for (let i = 0; i < COLLIDERS.length; i++) {
    const c = COLLIDERS[i];
    if (x + r > c.minX && x - r < c.maxX && z + r > c.minZ && z - r < c.maxZ) return true;
  }
  return false;
}

if (typeof window !== "undefined") {
  if (!(window as any).playerState) {
    (window as any).playerState = {
      yaw: Math.PI,
      pitch: 0,
      camY: EYE,
      bobPhase: 0,
    };
  }
}
export const state = (window as any).playerState;

export function setPlayerPosition(x: number, y: number, z: number): void {
  camera.position.set(x, y, z);
  state.camY = y;
}

export const keys: Record<string, boolean> = {};
export const MOVE_SPEED = 5.5;
export const RUN_MULT = 1.8;
export const PITCH_LIMIT = 1.35;

export function updateMovement(delta: number): void {
  camera.rotation.set(state.pitch, state.yaw, 0, "YXZ");

  let mf = 0, mr = 0;
  if (keys.KeyW) mf += 1;
  if (keys.KeyS) mf -= 1;
  if (keys.KeyD) mr += 1;
  if (keys.KeyA) mr -= 1;

  const mag = Math.hypot(mf, mr);
  const moving = mag > 0.02;
  if (mag > 1) { mf /= mag; mr /= mag; }

  const running = keys.ShiftLeft || keys.ShiftRight;
  const speed = MOVE_SPEED * (running ? RUN_MULT : 1) * delta;
  const fx = -Math.sin(state.yaw);
  const fz = -Math.cos(state.yaw);
  const rx = -fz, rz = fx;
  const dx = (fx * mf + rx * mr) * speed;
  const dz = (fz * mf + rz * mr) * speed;

  const nx = camera.position.x + dx;
  if (!hitsWall(nx, camera.position.z)) camera.position.x = nx;
  const nz = camera.position.z + dz;
  if (!hitsWall(camera.position.x, nz)) camera.position.z = nz;

  camera.position.x = Math.max(X_MIN + 1, Math.min(X_MAX - 1, camera.position.x));
  camera.position.z = Math.max(Z_MIN + 1, Math.min(Z_MAX - 1, camera.position.z));

  // ─── bob و صدای قدم ───
  if (moving) {
    const prevPhase = state.bobPhase;
    const stepRate = running ? 11.5 : 8.5;
    state.bobPhase += delta * stepRate;

    // هر بار که bobPhase از یک مضرب π رد شود، یک قدم
    const prevStep = Math.floor(prevPhase / Math.PI);
    const currStep = Math.floor(state.bobPhase / Math.PI);
    if (currStep !== prevStep) {
      playFootstep(running ? 1.15 : 1.0);
    }
  } else {
    state.bobPhase = 0;
  }

  const bob = moving ? Math.sin(state.bobPhase) * 0.045 : 0;

  state.camY += (EYE + bob - state.camY) * Math.min(1, delta * 14);
  camera.position.y = state.camY;
}