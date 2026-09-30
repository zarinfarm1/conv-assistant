import * as THREE from "three";
import { camera } from "./scene";

interface Waypoint {
  pos: THREE.Vector3;
  look: THREE.Vector3;
}

// مسیر پرواز نمایشی: ورودی → داخل سوله → کوره → پرس → نوار نقاله → نمای بالا از اداری → نمای کلی
const waypoints: Waypoint[] = [
  { pos: new THREE.Vector3(0, 13, -82), look: new THREE.Vector3(0, 3, -50) },
  { pos: new THREE.Vector3(0, 5, -58), look: new THREE.Vector3(0, 2, -10) },
  { pos: new THREE.Vector3(-13, 4.2, 5), look: new THREE.Vector3(-16, 2.6, 0) },
  { pos: new THREE.Vector3(-1, 3.4, 6), look: new THREE.Vector3(0, 3, 0) },
  { pos: new THREE.Vector3(15, 3.2, 4), look: new THREE.Vector3(17, 1.3, 0) },
  { pos: new THREE.Vector3(9, 14, -20), look: new THREE.Vector3(-30, 3, -25) },
  { pos: new THREE.Vector3(-29, 5, -19), look: new THREE.Vector3(-33, 3, -28) },
  { pos: new THREE.Vector3(0, 19, -78), look: new THREE.Vector3(0, 4, -40) },
];

const posCurve = new THREE.CatmullRomCurve3(waypoints.map((w) => w.pos), false, "catmullrom", 0.4);
const lookCurve = new THREE.CatmullRomCurve3(waypoints.map((w) => w.look), false, "catmullrom", 0.4);

const DURATION = 22; // ثانیه، یک دور کامل پرواز

let active = true;
let elapsed = 0;

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function isIntroActive(): boolean {
  return active;
}

export function stopIntro(): void {
  active = false;
}

export function updateIntro(delta: number): void {
  if (!active) return;
  elapsed += delta;
  const t = Math.min(elapsed / DURATION, 1);
  const u = Math.min(easeInOut(t), 0.999);
  const pos = posCurve.getPointAt(u);
  const look = lookCurve.getPointAt(u);
  camera.position.copy(pos);
  camera.up.set(0, 1, 0);
  camera.lookAt(look);
}
