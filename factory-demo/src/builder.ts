import * as THREE from "three";
import { scene, renderer } from "./scene";
import {
  X_MIN, X_MAX, Z_MIN, Z_MAX, Z_FENCE_SOUTH,
  HALL_X_MIN, HALL_X_MAX, HALL_Z_MIN, HALL_Z_MAX, HALL_H, HALL_WALL_T,
  HALL_DOOR_HALF, HALL_DOOR_H,
  ADMIN_X_MIN, ADMIN_X_MAX, ADMIN_Z_MIN, ADMIN_Z_MAX, ADMIN_H,
  GUARD_X_MIN, GUARD_X_MAX, GUARD_Z_MIN, GUARD_Z_MAX, GUARD_H,
  GATE_Z, GATE_HALF, GATE_H, FENCE_H, ZONES,
} from "./constants";
import { pushCollider } from "./player";
import {
  grassTexture, asphaltTexture, concreteTexture, corrugatedTexture,
  brickTexture, roofMetalTexture, noiseTexture, signTexture,
  smokeTexture, beltTexture,
} from "./utils";
import type { ZoneBounds } from "./types";

// ──────────────── متریال‌ها ────────────────
const TEX_GRASS = grassTexture();
const TEX_ASPHALT = asphaltTexture();
const TEX_CONCRETE = concreteTexture(0x9a9490);
const TEX_CONCRETE_DARK = concreteTexture(0x6a6660);
const TEX_CORRUGATED = corrugatedTexture(0x8a8d92);
const TEX_BRICK = brickTexture(0xc4a888);
const TEX_ROOF = roofMetalTexture(0x4a4d52);
const TEX_RUST = noiseTexture(0x8a5a3a, 256, 40);

const matGrass = new THREE.MeshStandardMaterial({ map: TEX_GRASS, roughness: 1 });
const matAsphalt = new THREE.MeshStandardMaterial({ map: TEX_ASPHALT, roughness: 0.95 });
const matConcrete = new THREE.MeshStandardMaterial({ map: TEX_CONCRETE, roughness: 0.9 });
const matConcreteDark = new THREE.MeshStandardMaterial({ map: TEX_CONCRETE_DARK, roughness: 0.9 });
const matCorrugated = new THREE.MeshStandardMaterial({ map: TEX_CORRUGATED, roughness: 0.7, metalness: 0.35 });
const matBrick = new THREE.MeshStandardMaterial({ map: TEX_BRICK, roughness: 0.85 });
const matRoof = new THREE.MeshStandardMaterial({
  map: TEX_ROOF, roughness: 0.6, metalness: 0.4, side: THREE.DoubleSide,
});
const matRust = new THREE.MeshStandardMaterial({ map: TEX_RUST, roughness: 0.9 });
const matSteel = new THREE.MeshStandardMaterial({ color: 0x6a7078, roughness: 0.5, metalness: 0.7 });
const matDarkSteel = new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.6, metalness: 0.6 });
const matGlass = new THREE.MeshStandardMaterial({
  color: 0x9ec4e6, emissive: 0xcfe0f0, emissiveIntensity: 0.25,
  roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.7,
});
const matEmissiveOrange = new THREE.MeshStandardMaterial({
  color: 0xff7a1a, emissive: 0xff5a00, emissiveIntensity: 2.5, roughness: 0.8,
});
const matYellow = new THREE.MeshStandardMaterial({ color: 0xd6ab5c, roughness: 0.7 });
const matCardboard = new THREE.MeshStandardMaterial({ color: 0xb89664, roughness: 0.95 });
const matCans = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, roughness: 0.35, metalness: 0.75 });
const matGate = new THREE.MeshStandardMaterial({ color: 0x2a3a48, roughness: 0.65, metalness: 0.45 });
const matHallDoor = new THREE.MeshStandardMaterial({ color: 0x455260, roughness: 0.6, metalness: 0.5 });
const matHallCeiling = new THREE.MeshStandardMaterial({ color: 0x3a3a3e, roughness: 0.95, side: THREE.DoubleSide });
const matWood = new THREE.MeshStandardMaterial({ color: 0x5a4030, roughness: 0.85 });
const matFoliage = new THREE.MeshStandardMaterial({ color: 0x4a7a3a, roughness: 0.95 });
const matTire = new THREE.MeshStandardMaterial({ color: 0x18181a, roughness: 0.95 });

// ──────────────── صادرات ────────────────
export let gateL: THREE.Group | null = null;
export let gateR: THREE.Group | null = null;
export let hallDoorL: THREE.Group | null = null;
export let hallDoorR: THREE.Group | null = null;
export const zoneBounds: ZoneBounds[] = [];

// ──────────────── افکت‌های زنده — کوره ────────────────
let furnaceGlowMat: THREE.MeshStandardMaterial | null = null;
let furnaceFireLight: THREE.PointLight | null = null;
let furnaceFillLight: THREE.PointLight | null = null;

interface SmokeParticle {
  sprite: THREE.Sprite;
  age: number;
  life: number;
  riseSpeed: number;
  swayAmp: number;
}
const smokeParticles: SmokeParticle[] = [];
const smokeOrigin = new THREE.Vector3();

function resetSmoke(p: SmokeParticle, randomize = false): void {
  p.life = 3.8 + Math.random() * 2.8;
  p.age = randomize ? Math.random() * p.life : 0;
  p.riseSpeed = 0.6 + Math.random() * 0.5;
  p.swayAmp = 0.3 + Math.random() * 0.5;
  p.sprite.position.set(
    smokeOrigin.x + (Math.random() - 0.5) * 0.6,
    smokeOrigin.y,
    smokeOrigin.z + (Math.random() - 0.5) * 0.6,
  );
  p.sprite.scale.setScalar(0.8 + Math.random() * 0.5);
}

function initSmoke(originX: number, originY: number, originZ: number): void {
  smokeOrigin.set(originX, originY, originZ);
  const tex = smokeTexture();

  for (let i = 0; i < 20; i++) {
    const isDark = i % 3 === 0;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      opacity: 0,
      color: isDark ? 0x8a8a8a : 0xffffff,
    });
    const sprite = new THREE.Sprite(mat);
    scene.add(sprite);
    const p: SmokeParticle = { sprite, age: 0, life: 1, riseSpeed: 1, swayAmp: 1 };
    resetSmoke(p, true);
    smokeParticles.push(p);
  }
}

export function updateFurnaceEffects(delta: number, elapsed: number): void {
  const flick = 0.82 + Math.sin(elapsed * 11.3) * 0.08 + Math.sin(elapsed * 27.1) * 0.05 + (Math.random() - 0.5) * 0.04;
  if (furnaceGlowMat) furnaceGlowMat.emissiveIntensity = 2.4 * flick;
  if (furnaceFireLight) furnaceFireLight.intensity = 2.8 * flick;
  if (furnaceFillLight) furnaceFillLight.intensity = 1.4 * flick;

  for (const p of smokeParticles) {
    p.age += delta;
    const t = p.age / p.life;
    if (t >= 1) { resetSmoke(p); continue; }

    p.sprite.position.y += delta * p.riseSpeed * (1 + t * 0.8);
    p.sprite.position.x += Math.sin(elapsed * 0.8 + p.sprite.id) * delta * 0.2 * p.swayAmp;
    p.sprite.position.z += Math.cos(elapsed * 0.6 + p.sprite.id) * delta * 0.15 * p.swayAmp;
    p.sprite.scale.setScalar(0.8 + t * 3.2);
    (p.sprite.material as THREE.SpriteMaterial).opacity = Math.sin(t * Math.PI) * 0.45;
  }
}

// ──────────────── افکت‌های زنده — جرقه‌ی جوش ────────────────
let weldingSparkLight: THREE.PointLight | null = null;
let weldingSparkMesh: THREE.Mesh | null = null;
const weldingSparkPos = new THREE.Vector3();
const WELD_CYCLE = 3.2;

function buildWeldingSpark(x: number, y: number, z: number): void {
  weldingSparkPos.set(x, y, z);

  const light = new THREE.PointLight(0xffe0a0, 0, 6, 2);
  light.position.set(x, y, z);
  scene.add(light);
  weldingSparkLight = light;

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 8, 8),
    new THREE.MeshStandardMaterial({
      color: 0xfff3cf,
      emissive: 0xffa040,
      emissiveIntensity: 3,
    }),
  );
  mesh.position.set(x, y, z);
  mesh.visible = false;
  scene.add(mesh);
  weldingSparkMesh = mesh;
}

export function updateWeldingSpark(elapsed: number): void {
  const t = (elapsed % WELD_CYCLE) / WELD_CYCLE;
  const active = t < 0.15;
  const intensity = active ? (0.4 + Math.random() * 1.2) : 0;

  if (weldingSparkLight) weldingSparkLight.intensity = intensity;
  if (weldingSparkMesh) {
    weldingSparkMesh.visible = active;
    if (active) {
      weldingSparkMesh.position.x = weldingSparkPos.x + (Math.random() - 0.5) * 0.15;
      weldingSparkMesh.position.y = weldingSparkPos.y + (Math.random() - 0.5) * 0.15;
      const s = 0.8 + Math.random() * 0.6;
      weldingSparkMesh.scale.setScalar(s);
    }
  }
}

// ──────────────── نوار نقاله ────────────────
interface ConveyorCan { mesh: THREE.Mesh; lid: THREE.Mesh; }
const conveyorCans: ConveyorCan[] = [];
const conveyorRollers: THREE.Mesh[] = [];
let conveyorBeltTex: THREE.CanvasTexture | null = null;
let conveyorZ0 = 0;
let conveyorZ1 = 0;

export function updateConveyor(delta: number): void {
  const speed = 1.8;
  for (const c of conveyorCans) {
    c.mesh.position.z += speed * delta;
    c.mesh.rotation.y += delta * 2.2;
    c.lid.position.z = c.mesh.position.z;
    if (c.mesh.position.z > conveyorZ1) {
      const overflow = c.mesh.position.z - conveyorZ1;
      c.mesh.position.z = conveyorZ0 + overflow;
      c.lid.position.z = c.mesh.position.z;
    }
  }
  for (const r of conveyorRollers) r.rotateY(delta * 6);
  if (conveyorBeltTex) conveyorBeltTex.offset.y = (conveyorBeltTex.offset.y + delta * 0.6) % 1;
}

// ──────────────── پرس ────────────────
let pressRam: THREE.Mesh | null = null;
let pressFlashLight: THREE.PointLight | null = null;
const PRESS_CYCLE = 2.4;
const PRESS_Y_TOP = 5.8;
const PRESS_Y_BOTTOM = 1.75;

export function updatePress(elapsed: number): void {
  if (!pressRam) return;
  const t = (elapsed % PRESS_CYCLE) / PRESS_CYCLE;
  let k: number;
  if (t < 0.55) k = 0;
  else if (t < 0.62) k = (t - 0.55) / 0.07;
  else if (t < 0.75) k = 1;
  else if (t < 0.9) k = 1 - (t - 0.75) / 0.15;
  else k = 0;
  pressRam.position.y = PRESS_Y_TOP - k * (PRESS_Y_TOP - PRESS_Y_BOTTOM);
  if (pressFlashLight) {
    const d = Math.abs(t - 0.62);
    pressFlashLight.intensity = d < 0.05 ? (1 - d / 0.05) * 3 : 0;
  }
}

// ──────────────── چراغ‌های هشدار چرخان ────────────────
interface WarningLight {
  dome: THREE.Group;
  light: THREE.PointLight;
  speed: number;
  phase: number;
}
const warningLights: WarningLight[] = [];

function buildWarningLight(x: number, y: number, z: number): void {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  scene.add(group);

  const mount = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6),
    matDarkSteel,
  );
  mount.position.y = 0.15;
  group.add(mount);

  const housing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.28, 0.15, 10),
    matDarkSteel,
  );
  group.add(housing);

  const dome = new THREE.Group();
  dome.position.y = -0.08;
  group.add(dome);

  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xffaa00,
    emissive: 0xff8800,
    emissiveIntensity: 2.2,
  });
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), lampMat);
  dome.add(bulb);

  const coneMat = new THREE.MeshBasicMaterial({
    color: 0xffaa00,
    transparent: true,
    opacity: 0.12,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.0, 12, 1, true), coneMat);
  cone.position.y = -1.0;
  cone.rotation.x = Math.PI;
  dome.add(cone);

  const light = new THREE.PointLight(0xffaa00, 0.5, 6, 2);
  light.position.y = -0.4;
  dome.add(light);

  warningLights.push({
    dome,
    light,
    speed: 1.2 + Math.random() * 1.0,
    phase: Math.random() * Math.PI * 2,
  });
}

export function updateWarningLights(elapsed: number): void {
  for (const wl of warningLights) {
    wl.dome.rotation.y = elapsed * wl.speed;
    const pulse = (Math.sin(elapsed * 3.5 + wl.phase) + 1) * 0.5;
    wl.light.intensity = 0.25 + pulse * 0.6;
  }
}

// ──────────────── توابع کمکی ساخت ────────────────
function addBox(cx: number, cz: number, w: number, d: number, y0: number, y1: number, mat: THREE.Material, collide = true): THREE.Mesh {
  const h = y1 - y0;
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(cx, y0 + h / 2, cz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  if (collide) pushCollider(cx - w / 2, cx + w / 2, cz - d / 2, cz + d / 2, "wall");
  return mesh;
}
function addBoxNC(cx: number, cz: number, w: number, d: number, y0: number, y1: number, mat: THREE.Material): THREE.Mesh {
  return addBox(cx, cz, w, d, y0, y1, mat, false);
}
function addCyl(cx: number, cz: number, y0: number, y1: number, rT: number, rB: number, mat: THREE.Material, seg = 24, collide = false): THREE.Mesh {
  const h = y1 - y0;
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rT, rB, h, seg), mat);
  mesh.position.set(cx, y0 + h / 2, cz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  if (collide) pushCollider(cx - rB, cx + rB, cz - rB, cz + rB, "prop");
  return mesh;
}
function addGround(y: number, w: number, d: number, mat: THREE.Material, cx = 0, cz = 0): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(cx, y, cz);
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

// درخت
function buildTree(x: number, z: number, s: number): void {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * s, 0.22 * s, 2 * s, 8), matWood);
  trunk.position.set(x, s, z);
  trunk.castShadow = true;
  scene.add(trunk);
  for (let i = 0; i < 3; i++) {
    const f = new THREE.Mesh(new THREE.SphereGeometry(1.1 * s - i * 0.15 * s, 10, 10), matFoliage);
    f.position.set(x, 2.2 * s + i * 0.7 * s, z);
    f.castShadow = true;
    scene.add(f);
  }
  pushCollider(x - 0.4, x + 0.4, z - 0.4, z + 0.4, "prop");
}

// ──────────────── کارگر ────────────────
function buildWorker(
  x: number,
  z: number,
  rotY: number,
  shirtColor: number,
  helmetColor: number,
): void {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const matShirt = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.9 });
  const matPants = new THREE.MeshStandardMaterial({ color: 0x2a3540, roughness: 0.9 });
  const matSkin = new THREE.MeshStandardMaterial({ color: 0xd4a878, roughness: 0.9 });
  const matHelmet = new THREE.MeshStandardMaterial({ color: helmetColor, roughness: 0.4, metalness: 0.3 });

  for (const dx of [-0.11, 0.11]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.85, 8), matPants);
    leg.position.set(dx, 0.42, 0);
    leg.castShadow = true;
    g.add(leg);
  }

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.24), matShirt);
  torso.position.set(0, 1.15, 0);
  torso.castShadow = true;
  g.add(torso);

  for (const dx of [-0.28, 0.28]) {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.6, 8), matShirt);
    arm.position.set(dx, 1.15, 0);
    arm.castShadow = true;
    g.add(arm);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.1, 8), matSkin);
  neck.position.set(0, 1.52, 0);
  g.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), matSkin);
  head.position.set(0, 1.68, 0);
  head.castShadow = true;
  g.add(head);

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    matHelmet,
  );
  helmet.position.set(0, 1.70, 0);
  g.add(helmet);

  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 12), matHelmet);
  brim.position.set(0, 1.70, 0);
  g.add(brim);

  pushCollider(x - 0.28, x + 0.28, z - 0.28, z + 0.28, "prop");
}

// ──────────────── ۱. زمین ────────────────
function buildGround(): void {
  addGround(-0.10, X_MAX - X_MIN + 120, Z_MAX - Z_MIN + 120, matGrass);
  addGround(0, 120, 12, matAsphalt, 0, -85);
  addGround(0, 12, 24, matAsphalt, 0, -67);
  addGround(0, 10, 41, matAsphalt, 0, -34.5);
  addGround(0, 54, 60, matConcreteDark, 0, 16);
  addGround(0.02, 18, 18, matConcrete, -30, -5);
  addGround(0.02, 24, 16, matConcrete, 25, -69);
}

// ──────────────── ۲. محوطه بیرونی ────────────────
function buildOutsideYard(): void {
  buildTree(-12, -68, 1.2);
  buildTree(-16, -62, 1.0);
  buildTree(-14, -76, 1.1);
  buildTree(12, -72, 1.15);
  buildTree(-24, -72, 1.0);
  buildTree(13, -80, 1.05);

  for (let i = 0; i < 8; i++) {
    const s = 0.5 + Math.random() * 0.4;
    const bush = new THREE.Mesh(new THREE.SphereGeometry(s, 8, 8), matFoliage);
    const side = i % 2 === 0 ? -1 : 1;
    bush.position.set(side * (7 + Math.random() * 3), s * 0.75, -60 - Math.floor(i / 2) * 4);
    bush.castShadow = true;
    scene.add(bush);
  }

  const sideSign = new THREE.Mesh(
    new THREE.PlaneGeometry(4.5, 1.6),
    new THREE.MeshStandardMaterial({
      map: signTexture("کارخانه تولید قوطی فلزی", "۱ کیلومتر جلوتر", 0xd6ab5c, renderer.capabilities.getMaxAnisotropy()),
      roughness: 0.7, side: THREE.DoubleSide,
    }),
  );
  sideSign.position.set(-8, 3, -84);
  sideSign.rotation.y = Math.PI;
  scene.add(sideSign);
  addBoxNC(-8, -84, 0.2, 0.2, 0, 3, matDarkSteel);
}

// ──────────────── ۳. فنس محیطی ────────────────
function buildFenceSegment(x1: number, z1: number, x2: number, z2: number): void {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  if (len < 0.1) return;

  const isHorizontal = Math.abs(dx) > Math.abs(dz);

  const baseW = isHorizontal ? len : 0.5;
  const baseD = isHorizontal ? 0.5 : len;
  addBoxNC((x1 + x2) / 2, (z1 + z2) / 2, baseW, baseD, 0, 0.4, matConcreteDark);

  const posts = Math.max(2, Math.round(len / 3));
  for (let i = 0; i <= posts; i++) {
    const t = i / posts;
    const px = x1 + dx * t;
    const pz = z1 + dz * t;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, FENCE_H, 0.18), matDarkSteel);
    post.position.set(px, FENCE_H / 2, pz);
    post.castShadow = true;
    scene.add(post);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 4), matDarkSteel);
    tip.position.set(px, FENCE_H + 0.15, pz);
    tip.rotation.y = Math.PI / 4;
    scene.add(tip);
  }

  for (const y of [0.8, 1.6, 2.5]) {
    const rail = new THREE.Mesh(
      isHorizontal
        ? new THREE.BoxGeometry(len, 0.08, 0.08)
        : new THREE.BoxGeometry(0.08, 0.08, len),
      matDarkSteel,
    );
    rail.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    rail.castShadow = true;
    scene.add(rail);
  }

  const tx = isHorizontal ? 0.05 : 0.3;
  const tz = isHorizontal ? 0.3 : 0.05;
  pushCollider(
    Math.min(x1, x2) - tx, Math.max(x1, x2) + tx,
    Math.min(z1, z2) - tz, Math.max(z1, z2) + tz,
    "wall",
  );
}

function buildFence(): void {
  const FZ = Z_FENCE_SOUTH;
  buildFenceSegment(X_MIN, FZ, -GATE_HALF - 0.5, FZ);
  buildFenceSegment(GATE_HALF + 0.5, FZ, X_MAX, FZ);
  buildFenceSegment(X_MIN, Z_MAX, X_MAX, Z_MAX);
  buildFenceSegment(X_MIN, FZ, X_MIN, Z_MAX);
  buildFenceSegment(X_MAX, FZ, X_MAX, Z_MAX);
}

// ──────────────── ۴. لنگه‌ی در ────────────────
function makeDoorLeaf(
  pivotX: number, pivotZ: number, dir: 1 | -1,
  width: number, height: number, mat: THREE.Material,
  panelColor = 0x1a2634,
): THREE.Group {
  const pivot = new THREE.Group();
  pivot.position.set(pivotX, 0, pivotZ);

  const leaf = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.15), mat);
  leaf.position.set((-dir * width) / 2, height / 2, 0);
  leaf.castShadow = true;
  leaf.receiveShadow = true;
  pivot.add(leaf);

  const panelMat = new THREE.MeshStandardMaterial({ color: panelColor, roughness: 0.6, metalness: 0.4 });
  const rows = 3;
  const panelH = height / (rows + 1);
  for (let i = 0; i < rows; i++) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, panelH * 0.85, 0.04), panelMat);
    panel.position.set((-dir * width) / 2, panelH * (i + 0.9), 0.09);
    pivot.add(panel);
  }

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(width, 0.15, 0.17), matYellow);
  stripe.position.set((-dir * width) / 2, height * 0.5, 0);
  pivot.add(stripe);

  scene.add(pivot);
  return pivot;
}

// ──────────────── ۵. دروازه ────────────────
function buildGate(): void {
  const pillarW = 1.0;
  const pillarH = GATE_H + 1.2;

  addBox(-GATE_HALF - pillarW / 2, GATE_Z, pillarW, pillarW, 0, pillarH, matConcrete);
  addBox(GATE_HALF + pillarW / 2, GATE_Z, pillarW, pillarW, 0, pillarH, matConcrete);
  addBoxNC(0, GATE_Z, GATE_HALF * 2 + pillarW * 2, 0.5, pillarH, pillarH + 0.4, matConcreteDark);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 1.8),
    new THREE.MeshStandardMaterial({
      map: signTexture("کارخانه تولید قوطی فلزی", "صنایع بسته‌بندی نمونه", 0xd6ab5c, renderer.capabilities.getMaxAnisotropy()),
      roughness: 0.7,
    }),
  );
  sign.position.set(0, pillarH + 0.2, GATE_Z - 0.28);
  sign.rotation.y = Math.PI;
  scene.add(sign);

  const leafW = GATE_HALF - 0.05;
  gateL = makeDoorLeaf(-GATE_HALF, GATE_Z, -1, leafW, GATE_H, matGate);
  gateR = makeDoorLeaf(GATE_HALF, GATE_Z, 1, leafW, GATE_H, matGate);

  const lampL = new THREE.PointLight(0xffd0a0, 1.0, 12, 2);
  lampL.position.set(-GATE_HALF, pillarH + 0.6, GATE_Z + 0.4);
  scene.add(lampL);
  const lampR = new THREE.PointLight(0xffd0a0, 1.0, 12, 2);
  lampR.position.set(GATE_HALF, pillarH + 0.6, GATE_Z + 0.4);
  scene.add(lampR);
}

// ──────────────── ۶. نگهبانی ────────────────
function buildGuardPost(): void {
  const w = GUARD_X_MAX - GUARD_X_MIN;
  const d = GUARD_Z_MAX - GUARD_Z_MIN;
  const cx = (GUARD_X_MIN + GUARD_X_MAX) / 2;
  const cz = (GUARD_Z_MIN + GUARD_Z_MAX) / 2;

  addBox(cx, GUARD_Z_MIN, w + 0.3, 0.3, 0, GUARD_H, matConcrete);
  addBox(cx, GUARD_Z_MAX, w + 0.3, 0.3, 0, GUARD_H, matConcrete);
  addBox(GUARD_X_MIN, cz, 0.3, d + 0.3, 0, GUARD_H, matConcrete);

  const winHalfD = 1.2;
  const winY0 = 1.0;
  const winY1 = 2.1;

  const seg1Cz = (GUARD_Z_MIN + (cz - winHalfD)) / 2;
  const seg1D = (cz - winHalfD) - GUARD_Z_MIN;
  addBox(GUARD_X_MAX, seg1Cz, 0.3, seg1D, 0, GUARD_H, matConcrete);

  const seg2Cz = ((cz + winHalfD) + GUARD_Z_MAX) / 2;
  const seg2D = GUARD_Z_MAX - (cz + winHalfD);
  addBox(GUARD_X_MAX, seg2Cz, 0.3, seg2D, 0, GUARD_H, matConcrete);

  addBoxNC(GUARD_X_MAX, cz, 0.3, winHalfD * 2, 0, winY0, matConcrete);
  addBoxNC(GUARD_X_MAX, cz, 0.3, winHalfD * 2, winY1, GUARD_H, matConcrete);

  const glass = new THREE.Mesh(new THREE.PlaneGeometry(winHalfD * 2, winY1 - winY0), matGlass);
  glass.position.set(GUARD_X_MAX + 0.05, (winY0 + winY1) / 2, cz);
  glass.rotation.y = Math.PI / 2;
  scene.add(glass);

  addBox(cx, cz, w + 1.0, d + 1.0, GUARD_H, GUARD_H + 0.3, matConcreteDark);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 1),
    new THREE.MeshStandardMaterial({
      map: signTexture("نگهبانی", "کنترل ورود", 0x5c6b99, renderer.capabilities.getMaxAnisotropy()),
      roughness: 0.7, side: THREE.DoubleSide,
    }),
  );
  sign.position.set(cx, GUARD_H + 0.9, GUARD_Z_MIN - 0.05);
  sign.rotation.y = Math.PI;
  scene.add(sign);
  addBoxNC(cx, GUARD_Z_MIN - 0.05, 0.15, 0.15, GUARD_H + 0.3, GUARD_H + 0.9, matDarkSteel);
}

// ──────────────── ۷. ساختمان اداری ────────────────
function buildAdminBuilding(): void {
  const w = ADMIN_X_MAX - ADMIN_X_MIN;
  const d = ADMIN_Z_MAX - ADMIN_Z_MIN;
  const cx = (ADMIN_X_MIN + ADMIN_X_MAX) / 2;
  const cz = (ADMIN_Z_MIN + ADMIN_Z_MAX) / 2;
  const floorH = ADMIN_H / 2;

  addBox(cx, cz, w, d, 0, ADMIN_H, matBrick);

  const winFrameMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d2, roughness: 0.7 });
  const winW = 2, winH = 1.6;

  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 4; i++) {
      const zPos = ADMIN_Z_MIN + 3 + i * ((d - 6) / 3);
      const y = r * floorH + 1.2;
      const wm = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), matGlass);
      wm.position.set(ADMIN_X_MAX + 0.02, y + winH / 2, zPos);
      wm.rotation.y = Math.PI / 2;
      scene.add(wm);
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(winW + 0.3, winH + 0.3), winFrameMat);
      frame.position.set(ADMIN_X_MAX + 0.01, y + winH / 2, zPos);
      frame.rotation.y = Math.PI / 2;
      scene.add(frame);
    }
  }

  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 3; i++) {
      const xPos = ADMIN_X_MIN + 3 + i * ((w - 6) / 2);
      const y = r * floorH + 1.2;

      const wmS = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), matGlass);
      wmS.position.set(xPos, y + winH / 2, ADMIN_Z_MAX + 0.02);
      scene.add(wmS);
      const frameS = new THREE.Mesh(new THREE.PlaneGeometry(winW + 0.3, winH + 0.3), winFrameMat);
      frameS.position.set(xPos, y + winH / 2, ADMIN_Z_MAX + 0.01);
      scene.add(frameS);

      const wmN = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), matGlass);
      wmN.position.set(xPos, y + winH / 2, ADMIN_Z_MIN - 0.02);
      wmN.rotation.y = Math.PI;
      scene.add(wmN);
      const frameN = new THREE.Mesh(new THREE.PlaneGeometry(winW + 0.3, winH + 0.3), winFrameMat);
      frameN.position.set(xPos, y + winH / 2, ADMIN_Z_MIN - 0.01);
      frameN.rotation.y = Math.PI;
      scene.add(frameN);
    }
  }

  addBoxNC(ADMIN_X_MAX + 1.4, cz, 2.6, 6, floorH, floorH + 0.25, matConcreteDark);
  addBoxNC(ADMIN_X_MAX + 2.5, cz - 2.4, 0.2, 0.2, 0, floorH, matSteel);
  addBoxNC(ADMIN_X_MAX + 2.5, cz + 2.4, 0.2, 0.2, 0, floorH, matSteel);
  addBoxNC(ADMIN_X_MAX + 0.05, cz, 0.1, 2.4, 0, 2.6, matDarkSteel);
  addBoxNC(ADMIN_X_MAX + 0.06, cz - 1.4, 0.15, 0.2, 0, 2.8, matConcreteDark);
  addBoxNC(ADMIN_X_MAX + 0.06, cz + 1.4, 0.15, 0.2, 0, 2.8, matConcreteDark);
  addBoxNC(ADMIN_X_MAX + 0.06, cz, 0.15, 3.0, 2.6, 2.8, matConcreteDark);

  addBoxNC(cx, ADMIN_Z_MIN - 0.15, w + 0.3, 0.3, ADMIN_H, ADMIN_H + 0.7, matConcreteDark);
  addBoxNC(cx, ADMIN_Z_MAX + 0.15, w + 0.3, 0.3, ADMIN_H, ADMIN_H + 0.7, matConcreteDark);
  addBoxNC(ADMIN_X_MIN - 0.15, cz, 0.3, d + 0.3, ADMIN_H, ADMIN_H + 0.7, matConcreteDark);
  addBoxNC(ADMIN_X_MAX + 0.15, cz, 0.3, d + 0.3, ADMIN_H, ADMIN_H + 0.7, matConcreteDark);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 1.4),
    new THREE.MeshStandardMaterial({
      map: signTexture("ساختمان اداری", "مدیریت و دفاتر", 0xa35a3d, renderer.capabilities.getMaxAnisotropy()),
      roughness: 0.7,
    }),
  );
  sign.position.set(ADMIN_X_MAX + 0.06, ADMIN_H - 0.8, cz);
  sign.rotation.y = Math.PI / 2;
  scene.add(sign);
}

// ──────────────── ۸. سوله ────────────────
function buildProductionHall(): void {
  const w = HALL_X_MAX - HALL_X_MIN;
  const d = HALL_Z_MAX - HALL_Z_MIN;
  const cx = (HALL_X_MIN + HALL_X_MAX) / 2;
  const cz = (HALL_Z_MIN + HALL_Z_MAX) / 2;

  addBox(HALL_X_MIN, cz, HALL_WALL_T, d, 0, HALL_H, matCorrugated);
  addBox(HALL_X_MAX, cz, HALL_WALL_T, d, 0, HALL_H, matCorrugated);
  addBox(cx, HALL_Z_MAX, w, HALL_WALL_T, 0, HALL_H, matCorrugated);

  const oh = HALL_DOOR_HALF;
  const westCx = (HALL_X_MIN + (-oh)) / 2;
  const westW = -oh - HALL_X_MIN;
  addBox(westCx, HALL_Z_MIN, westW, HALL_WALL_T, 0, HALL_H, matCorrugated);

  const eastCx = (oh + HALL_X_MAX) / 2;
  const eastW = HALL_X_MAX - oh;
  addBox(eastCx, HALL_Z_MIN, eastW, HALL_WALL_T, 0, HALL_H, matCorrugated);

  addBoxNC(cx, HALL_Z_MIN, oh * 2, HALL_WALL_T, HALL_DOOR_H, HALL_H, matCorrugated);

  const fT = 0.25;
  addBoxNC(-oh - fT / 2, HALL_Z_MIN, fT, HALL_WALL_T + 0.2, 0, HALL_DOOR_H, matYellow);
  addBoxNC(oh + fT / 2, HALL_Z_MIN, fT, HALL_WALL_T + 0.2, 0, HALL_DOOR_H, matYellow);
  addBoxNC(0, HALL_Z_MIN, oh * 2 + fT * 2, HALL_WALL_T + 0.2, HALL_DOOR_H, HALL_DOOR_H + fT, matYellow);

  const wY0 = 5.5, wY1 = 7.2;
  for (let i = 0; i < 6; i++) {
    const z = HALL_Z_MIN + 6 + i * 7;
    const wmW = new THREE.Mesh(new THREE.PlaneGeometry(5, wY1 - wY0), matGlass);
    wmW.position.set(HALL_X_MIN + 0.25, (wY0 + wY1) / 2, z);
    wmW.rotation.y = Math.PI / 2;
    scene.add(wmW);
    const wmE = new THREE.Mesh(new THREE.PlaneGeometry(5, wY1 - wY0), matGlass);
    wmE.position.set(HALL_X_MAX - 0.25, (wY0 + wY1) / 2, z);
    wmE.rotation.y = -Math.PI / 2;
    scene.add(wmE);
  }

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, d - 0.4), matHallCeiling);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(cx, HALL_H - 0.05, cz);
  ceiling.receiveShadow = true;
  scene.add(ceiling);

  for (let i = 0; i < 8; i++) {
    const z = HALL_Z_MIN + 4 + i * ((d - 8) / 7);
    addBoxNC(cx, z, w - 1, 0.35, HALL_H - 0.5, HALL_H - 0.1, matDarkSteel);
  }

  const roofH = 3;
  const overhang = 1.5;
  const roofW = w / 2 + overhang;
  const roofLen = d + overhang * 2;
  const slope = Math.atan2(roofH, roofW);
  const slopeLen = Math.hypot(roofW, roofH);

  const makeSlope = (dir: 1 | -1) => {
    const g = new THREE.Group();
    g.position.set(0, HALL_H + roofH, cz);
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(slopeLen, roofLen), matRoof);
    plane.rotation.x = -Math.PI / 2;
    plane.position.x = (dir * slopeLen) / 2;
    plane.castShadow = true;
    plane.receiveShadow = true;
    g.add(plane);
    g.rotation.z = -dir * slope;
    scene.add(g);
  };
  makeSlope(-1);
  makeSlope(1);

  const gableMat = new THREE.MeshStandardMaterial({ map: TEX_CORRUGATED, roughness: 0.7, metalness: 0.35, side: THREE.DoubleSide });
  const gable = (z: number) => {
    const shape = new THREE.Shape();
    shape.moveTo(HALL_X_MIN, HALL_H);
    shape.lineTo(HALL_X_MAX, HALL_H);
    shape.lineTo(0, HALL_H + roofH);
    shape.closePath();
    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), gableMat);
    mesh.position.z = z;
    mesh.castShadow = true;
    scene.add(mesh);
  };
  gable(HALL_Z_MIN);
  gable(HALL_Z_MAX);

  const cols = [
    [-20, -8], [-20, 5], [-20, 18], [-20, 31],
    [20, -8], [20, 5], [20, 18], [20, 31],
    [0, -8], [0, 31],
  ];
  for (const [x, z] of cols) addBox(x, z, 0.7, 0.7, 0, HALL_H, matSteel);

  const lamps = [
    [-15, -5], [0, -5], [15, -5],
    [-15, 12], [0, 12], [15, 12],
    [-15, 28], [0, 28], [15, 28],
  ];
  for (const [x, z] of lamps) {
    const light = new THREE.PointLight(0xffe6b0, 0.9, 24, 2);
    light.position.set(x, HALL_H - 1.2, z);
    scene.add(light);
    const housing = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.3, 12), matDarkSteel);
    housing.position.set(x, HALL_H - 1.05, z);
    scene.add(housing);
  }

  // چراغ‌های هشدار چرخان
  const warningPositions: [number, number][] = [
    [-10, 0], [10, 0],
    [-10, 20], [10, 20],
  ];
  for (const [wx, wz] of warningPositions) {
    buildWarningLight(wx, HALL_H - 1.0, wz);
  }
}

// ──────────────── ۹. درب سوله ────────────────
function buildHallDoors(): void {
  const w = HALL_DOOR_HALF - 0.05;
  hallDoorL = makeDoorLeaf(-HALL_DOOR_HALF, HALL_Z_MIN, -1, w, HALL_DOOR_H, matHallDoor, 0x2a3540);
  hallDoorR = makeDoorLeaf(HALL_DOOR_HALF, HALL_Z_MIN, 1, w, HALL_DOOR_H, matHallDoor, 0x2a3540);
}

// ──────────────── ۱۰. کوره ────────────────
function buildFurnace(): void {
  const x = -16, z = 0;
  addBox(x, z, 9, 9, 0, 0.5, matConcreteDark);
  addCyl(x, z, 0.5, 7, 3, 3.2, matRust, 28, true);
  addCyl(x, z, 7, 9, 0.4, 3, matRust, 28);
  addCyl(x, z, 9, 15, 0.6, 0.9, matDarkSteel, 16, true);
  addCyl(x, z, 15, 15.4, 0.75, 0.75, matDarkSteel, 16);

  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), matEmissiveOrange);
  glow.position.set(x + 3.15, 2.5, z);
  glow.rotation.y = Math.PI / 2;
  scene.add(glow);
  furnaceGlowMat = matEmissiveOrange;

  addBoxNC(x, z - 2.4, 3.2, 0.3, 0.5, 2, matDarkSteel);

  const fire = new THREE.PointLight(0xff6a20, 3, 18, 2);
  fire.position.set(x + 1, 2.5, z);
  scene.add(fire);
  furnaceFireLight = fire;
  const fill = new THREE.PointLight(0xff9040, 1.5, 12, 2);
  fill.position.set(x, 8, z);
  scene.add(fill);
  furnaceFillLight = fill;
  initSmoke(x, 15.6, z);

  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 6, 10), matSteel);
  pipe.rotation.z = Math.PI / 2;
  pipe.position.set(x + 5, 5, z);
  scene.add(pipe);

  for (let i = 0; i < 6; i++) {
    addBox(x - 4.2, z - 4 + i * 0.9, 1.6, 0.7, i * 0.6, i * 0.6 + 0.7, matSteel);
    addBoxNC(x - 4.2, z - 4.3 + i * 0.9, 0.15, 0.15, i * 0.6 + 0.7, i * 0.6 + 1.6, matDarkSteel);
  }
}

// ──────────────── ۱۱. پرس ────────────────
function buildPress(): void {
  const x = 0, z = 0;
  addBox(x, z, 7, 6, 0, 0.6, matConcreteDark);

  for (const [dx, dz] of [[-2.5, -2], [2.5, -2], [-2.5, 2], [2.5, 2]]) {
    addBox(x + dx, z + dz, 0.6, 0.6, 0.6, 7, matDarkSteel);
  }
  addBoxNC(x, z, 6.6, 5.4, 7, 8, matDarkSteel);
  addCyl(x, z, 6.2, 7, 0.7, 0.7, matSteel, 16);
  addCyl(x, z, 3.2, 6.2, 0.5, 0.5, matSteel, 16);
  addBoxNC(x, z, 3, 3, 2.6, 3.2, matDarkSteel);
  addBoxNC(x, z, 3, 3, 0.6, 1.4, matSteel);
  addBoxNC(x, z, 2.6, 2.6, 1.4, 1.45, matCans);

  addBox(x + 4.5, z, 0.4, 1.6, 0.6, 2.6, matDarkSteel);
  const panel = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x2a5a4a, emissive: 0x1a3a2a, emissiveIntensity: 0.6, roughness: 0.5 }),
  );
  panel.position.set(x + 4.28, 2, z);
  panel.rotation.y = -Math.PI / 2;
  scene.add(panel);

  const light = new THREE.PointLight(0xb0c4dc, 0.6, 12, 2);
  light.position.set(x, 6, z);
  scene.add(light);

  const ram = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.55, 2.3), matDarkSteel);
  ram.position.set(x, PRESS_Y_TOP, z);
  ram.castShadow = true;
  ram.receiveShadow = true;
  scene.add(ram);
  pressRam = ram;

  const flash = new THREE.PointLight(0xdfe8ff, 0, 6, 2);
  flash.position.set(x, 1.7, z);
  scene.add(flash);
  pressFlashLight = flash;
}

// ──────────────── ۱۲. ورق خام ────────────────
function buildRawSheetStack(x: number, z: number, rotY = 0): void {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const pallet = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.15, 3.6), matWood);
  pallet.position.set(0, 0.075, 0);
  pallet.castShadow = true;
  pallet.receiveShadow = true;
  g.add(pallet);

  for (let i = 0; i < 35; i++) {
    const sheet = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.06, 3.4), matCans);
    sheet.position.set(0, 0.2 + i * 0.075, 0);
    sheet.castShadow = true;
    sheet.receiveShadow = true;
    g.add(sheet);
  }

  for (const dx of [-2.3, 2.3]) {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.8, 3.6), matDarkSteel);
    frame.position.set(dx, 1.4, 0);
    frame.castShadow = true;
    g.add(frame);
  }

  pushCollider(x - 2.5, x + 2.5, z - 2.0, z + 2.0, "prop");
}

// ──────────────── ۱۳. جعبه‌های آماده ────────────────
function buildReadyBoxes(x: number, z: number): void {
  const boxGeo = new THREE.BoxGeometry(0.9, 0.7, 0.7);
  const tapeGeo = new THREE.BoxGeometry(0.9, 0.06, 0.12);

  for (let sx = 0; sx < 5; sx++) {
    for (let sz = 0; sz < 2; sz++) {
      for (let sy = 0; sy < 4; sy++) {
        const bx = x + (sx - 2) * 1.0;
        const bz = z + (sz - 0.5) * 0.85;
        const by = 0.35 + sy * 0.72;

        const b = new THREE.Mesh(boxGeo, matCardboard);
        b.position.set(bx, by, bz);
        b.castShadow = true;
        b.receiveShadow = true;
        scene.add(b);

        const tape = new THREE.Mesh(tapeGeo, matYellow);
        tape.position.set(bx, by + 0.36, bz);
        scene.add(tape);
      }
    }
  }

  pushCollider(x - 3.0, x + 3.0, z - 1.2, z + 1.2, "prop");
}

// ──────────────── ۱۴. نوار نقاله ────────────────
function buildConveyor(): void {
  const x = 17, z0 = -8, z1 = 8, beltY = 1.1;

  for (const lz of [-7, -3, 0, 3, 7]) {
    addBox(x - 0.9, lz, 0.15, 0.15, 0, beltY, matSteel);
    addBox(x + 0.9, lz, 0.15, 0.15, 0, beltY, matSteel);
  }

  const beltLen = z1 - z0;
  addBox(x, (z0 + z1) / 2, 2, beltLen, beltY, beltY + 0.15, matSteel, false);

  conveyorZ0 = z0 + 0.4;
  conveyorZ1 = z1 - 0.4;

  const beltTex = beltTexture();
  beltTex.repeat.set(1, Math.max(4, Math.round(beltLen / 1.2)));
  conveyorBeltTex = beltTex;
  const matBelt = new THREE.MeshStandardMaterial({ map: beltTex, roughness: 0.85 });
  const belt = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, beltLen - 0.4), matBelt);
  belt.position.set(x, beltY + 0.2, (z0 + z1) / 2);
  belt.castShadow = true;
  belt.receiveShadow = true;
  scene.add(belt);

  const rollerGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.9, 12);
  for (let i = 0; i < 14; i++) {
    const rz = z0 + 0.5 + i * ((beltLen - 1) / 13);
    const roller = new THREE.Mesh(rollerGeo, matDarkSteel);
    roller.rotation.z = Math.PI / 2;
    roller.position.set(x, beltY + 0.15, rz);
    roller.castShadow = true;
    scene.add(roller);
    conveyorRollers.push(roller);
  }

  // قوطی‌ها — چیدمان ۲ ستون در هر ردیف، ۷ ردیف
  const canGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.5, 14);
  const lidGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.05, 14);
  const rowsCount = 7;
  const rowSpacing = (beltLen - 1.2) / rowsCount;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < 2; col++) {
      const cz = z0 + 0.7 + row * rowSpacing;
      const cx = x + (col - 0.5) * 0.85;

      const can = new THREE.Mesh(canGeo, matCans);
      can.position.set(cx, beltY + 0.45, cz);
      can.castShadow = true;
      can.receiveShadow = true;
      scene.add(can);

      const lid = new THREE.Mesh(lidGeo, matSteel);
      lid.position.set(cx, beltY + 0.72, cz);
      scene.add(lid);

      conveyorCans.push({ mesh: can, lid });
    }
  }

  addBox(x, z0 - 0.8, 2.4, 1.2, 0, 1.6, matDarkSteel);
  addBox(x + 3.5, z1 + 1.5, 4, 2.5, 0, 1.0, matConcreteDark);

  const boxGeo = new THREE.BoxGeometry(0.9, 0.7, 0.7);
  for (let i = 0; i < 4; i++) {
    const bx = x + 3.5 + (i % 2 === 0 ? -1 : 1) * 0.6;
    const bz = z1 + 1.5 + (i < 2 ? -0.5 : 0.5);
    const b = new THREE.Mesh(boxGeo, matCardboard);
    b.position.set(bx, 1.35, bz);
    b.castShadow = true;
    b.receiveShadow = true;
    scene.add(b);
    const tape = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.12), matYellow);
    tape.position.set(bx, 1.71, bz);
    scene.add(tape);
  }

  const light = new THREE.PointLight(0xcfe0f0, 0.7, 14, 2);
  light.position.set(x, 5.5, (z0 + z1) / 2);
  scene.add(light);
}

// ──────────────── ۱۵. دستگاه رول‌کن ────────────────
function buildRollingMachine(x: number, z: number): void {
  addBox(x, z, 6, 3, 0, 0.6, matConcreteDark);
  addBox(x, z, 5, 2.6, 0.6, 3.5, matDarkSteel);
  for (const y of [1.4, 2.0, 2.6]) {
    const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 4.6, 16), matSteel);
    roller.rotation.z = Math.PI / 2;
    roller.position.set(x, y, z);
    roller.castShadow = true;
    scene.add(roller);
  }
  addCyl(x + 3, z, 0.6, 2.4, 0.5, 0.5, matDarkSteel, 12);
  const sheetIn = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 2.4), matCans);
  sheetIn.position.set(x - 3.5, 0.9, z);
  sheetIn.castShadow = true;
  scene.add(sheetIn);
  const sheetOut = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 2.4), matCans);
  sheetOut.position.set(x + 3.5, 0.9, z);
  sheetOut.castShadow = true;
  scene.add(sheetOut);
  addBox(x + 4.2, z + 1.8, 0.15, 0.8, 0.6, 2.2, matDarkSteel);
  const light = new THREE.PointLight(0xcfe0f0, 0.5, 10, 2);
  light.position.set(x, 4, z);
  scene.add(light);
}

// ──────────────── ۱۶. ربات جوش ────────────────
function buildWeldingRobot(x: number, z: number): void {
  addBox(x, z, 3.5, 3.5, 0, 0.5, matConcreteDark);
  addCyl(x, z, 0.5, 1.4, 0.9, 1.0, matDarkSteel, 16);
  const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3.5, 0.6), matSteel);
  arm1.position.set(x, 3, z);
  arm1.castShadow = true;
  scene.add(arm1);
  const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3, 0.5), matSteel);
  arm2.position.set(x + 1.2, 4.8, z);
  arm2.rotation.z = -Math.PI / 4;
  arm2.castShadow = true;
  scene.add(arm2);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), matDarkSteel);
  tip.position.set(x + 2.2, 5.8, z);
  scene.add(tip);
  const spark = new THREE.PointLight(0xffd070, 0.9, 4, 2);
  spark.position.set(x + 2.2, 5.6, z);
  scene.add(spark);
  addBox(x + 2.2, z, 2.5, 2, 0.4, 0.8, matSteel);
  const can = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.55, 12), matCans);
  can.position.set(x + 2.2, 1.15, z);
  can.castShadow = true;
  scene.add(can);

  // جرقه‌ی جوش
  buildWeldingSpark(x + 2.2, 5.6, z);
}

// ──────────────── ۱۷. ایستگاه کنترل کیفیت ────────────────
function buildQCStation(x: number, z: number): void {
  addBox(x, z, 5, 1.6, 0.4, 1.0, matSteel);
  for (const dx of [-2, 2]) {
    addBoxNC(x + dx, z, 0.2, 1.4, 0, 0.4, matDarkSteel);
  }
  const miniBelt = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.08, 1.2), matHallCeiling);
  miniBelt.position.set(x, 1.05, z);
  miniBelt.castShadow = true;
  scene.add(miniBelt);
  for (let i = 0; i < 5; i++) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12), matCans);
    c.position.set(x - 1.8 + i * 0.9, 1.35, z);
    c.castShadow = true;
    scene.add(c);
  }
  const lamp = new THREE.PointLight(0xf0f5ff, 0.8, 6, 2);
  lamp.position.set(x, 3, z);
  scene.add(lamp);
  addBoxNC(x + 2.8, z - 1.2, 0.1, 1.4, 1, 2, matDarkSteel);
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x1a3a4a, emissive: 0x2a5a7a, emissiveIntensity: 0.8, roughness: 0.5 }),
  );
  screen.position.set(x + 2.75, 1.5, z - 1.2);
  screen.rotation.y = Math.PI / 2;
  scene.add(screen);
}

// ──────────────── ۱۸. دستگاه بسته‌بندی ────────────────
function buildPackagingMachine(x: number, z: number): void {
  addBox(x, z, 3, 3, 0, 0.5, matConcreteDark);
  addBox(x, z, 2.6, 2.6, 0.5, 4, matDarkSteel);
  addBoxNC(x, z + 1.32, 1.6, 0.08, 1, 3.2, matSteel);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.8), matGlass);
  win.position.set(x, 2.5, z + 1.37);
  scene.add(win);
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 1.0, 1.2, 14, 1, true), matSteel);
  funnel.position.set(x, 4.6, z);
  scene.add(funnel);
  addBox(x + 2.5, z, 3, 1.2, 0.8, 1.0, matSteel, false);
  const outBelt = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.06, 1.0), matHallCeiling);
  outBelt.position.set(x + 2.5, 1.1, z);
  scene.add(outBelt);
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.6), matCardboard);
  box.position.set(x + 3, 1.5, z);
  box.castShadow = true;
  scene.add(box);
  const light = new THREE.PointLight(0xcfe0f0, 0.6, 10, 2);
  light.position.set(x, 5, z);
  scene.add(light);
}

// ──────────────── ۱۹. قفسه‌ی محصولات نهایی ────────────────
function buildStorageRack(x: number, z: number): void {
  const W = 8, D = 2.4, H = 5;
  const levels = 4;

  for (const dx of [-W / 2, W / 2]) {
    for (const dz of [-D / 2, D / 2]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.15, H, 0.15), matDarkSteel);
      col.position.set(x + dx, H / 2, z + dz);
      col.castShadow = true;
      scene.add(col);
    }
  }

  for (let lv = 0; lv < levels; lv++) {
    const y = 0.7 + lv * 1.2;
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(W, 0.08, D), matSteel);
    shelf.position.set(x, y, z);
    shelf.castShadow = true;
    shelf.receiveShadow = true;
    scene.add(shelf);

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 2; j++) {
        const can = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 10), matCans);
        can.position.set(x - W / 2 + 0.6 + i * 0.95, y + 0.4, z - 0.55 + j * 1.1);
        can.castShadow = true;
        scene.add(can);
      }
    }
  }

  pushCollider(x - W / 2 - 0.2, x + W / 2 + 0.2, z - D / 2 - 0.2, z + D / 2 + 0.2, "prop");
}

// ──────────────── ۲۰. لیفتراک ────────────────
function buildForklift(x: number, z: number, rotY = 0): void {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const matBody = new THREE.MeshStandardMaterial({ color: 0xd6a02a, roughness: 0.7 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 2.2), matBody);
  body.position.set(0, 0.75, 0);
  body.castShadow = true;
  g.add(body);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1), matDarkSteel);
  cabin.position.set(0, 1.85, -0.4);
  cabin.castShadow = true;
  g.add(cabin);

  for (const dx of [-0.6, 0.6]) {
    for (const dz of [-0.85, 0.05]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.1, 0.08), matDarkSteel);
      post.position.set(dx, 1.1, dz);
      g.add(post);
    }
  }
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.08, 1.0), matDarkSteel);
  roof.position.set(0, 2.2, -0.4);
  g.add(roof);

  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.15, 3, 0.15), matDarkSteel);
  mast.position.set(-0.55, 1.5, 1.1);
  g.add(mast);
  const mast2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 3, 0.15), matDarkSteel);
  mast2.position.set(0.55, 1.5, 1.1);
  g.add(mast2);

  const fork1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.08, 1.6), matSteel);
  fork1.position.set(-0.4, 0.35, 2.0);
  g.add(fork1);
  const fork2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.08, 1.6), matSteel);
  fork2.position.set(0.4, 0.35, 2.0);
  g.add(fork2);

  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.25, 12);
  for (const [dx, dz] of [[-0.75, -0.8], [0.75, -0.8], [-0.75, 0.9], [0.75, 0.9]]) {
    const w = new THREE.Mesh(wheelGeo, matTire);
    w.rotation.z = Math.PI / 2;
    w.position.set(dx, 0.3, dz);
    g.add(w);
  }

  g.updateWorldMatrix(true, true);
  pushCollider(x - 1.2, x + 1.2, z - 1.6, z + 1.6, "prop");
}

// ──────────────── ۲۱. ماشین سواری ────────────────
function buildCar(x: number, z: number, rotY: number, bodyColor: number): void {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const matBody = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.4, metalness: 0.5 });
  const matGlassCar = new THREE.MeshStandardMaterial({
    color: 0x1a2a3a, roughness: 0.1, metalness: 0.4, transparent: true, opacity: 0.85,
  });

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.65, 3.9), matBody);
  body.position.set(0, 0.55, 0);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.55, 1.9), matBody);
  cabin.position.set(0, 1.15, -0.15);
  cabin.castShadow = true;
  g.add(cabin);

  const wf = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.45), matGlassCar);
  wf.position.set(0, 1.15, 0.8);
  wf.rotation.y = Math.PI;
  g.add(wf);

  const wb = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.45), matGlassCar);
  wb.position.set(0, 1.15, -1.1);
  g.add(wb);

  for (const dx of [-0.81, 0.81]) {
    const ws = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.45), matGlassCar);
    ws.position.set(dx, 1.15, -0.15);
    ws.rotation.y = Math.PI / 2;
    g.add(ws);
  }

  const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 14);
  for (const [dx, dz] of [[-0.9, 1.2], [0.9, 1.2], [-0.9, -1.2], [0.9, -1.2]]) {
    const w = new THREE.Mesh(wheelGeo, matTire);
    w.rotation.z = Math.PI / 2;
    w.position.set(dx, 0.32, dz);
    w.castShadow = true;
    g.add(w);
  }

  const lampMat = new THREE.MeshStandardMaterial({ color: 0xfff3cf, emissive: 0xffd070, emissiveIntensity: 0.6 });
  for (const dx of [-0.55, 0.55]) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.15, 0.08), lampMat);
    l.position.set(dx, 0.6, 1.98);
    g.add(l);
  }

  g.updateWorldMatrix(true, true);
  pushCollider(x - 1.2, x + 1.2, z - 2.2, z + 2.2, "prop");
}

// ──────────────── ۲۲. پارکینگ ────────────────
function buildParkingLot(): void {
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xe8e2c8, roughness: 0.9 });
  const lineY = 0.03;
  const carColors = [0xe8e8e8, 0x2a2d33, 0xc02a2a, 0x2a4a8a, 0x8a8a8a, 0xe8e8e8, 0x4a5a3a, 0x1a1a1a];

  let idx = 0;
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 5; i++) {
      const px = 17 + i * 3.4;
      const pz = -66 + row * 6;

      for (const dz of [-1.6, 1.6]) {
        const line = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.08), lineMat);
        line.rotation.x = -Math.PI / 2;
        line.position.set(px, lineY, pz + dz);
        scene.add(line);
      }

      if (idx < 6) {
        const c = carColors[idx % carColors.length];
        buildCar(px, pz, row === 0 ? 0 : Math.PI, c);
      }
      idx++;
    }
  }
}

// ──────────────── ۲۳. کامیون ────────────────
function buildTruck(x: number, z: number, rotY: number): void {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const matCab = new THREE.MeshStandardMaterial({ color: 0xe8e4d8, roughness: 0.5, metalness: 0.3 });
  const matContainer = new THREE.MeshStandardMaterial({ color: 0x2a5a8a, roughness: 0.7, metalness: 0.2 });
  const matChassis = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.8, metalness: 0.4 });
  const matWin = new THREE.MeshStandardMaterial({ color: 0x1a2a3a, roughness: 0.1, metalness: 0.5 });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 9.5), matChassis);
  chassis.position.set(0, 0.75, 0);
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  g.add(chassis);

  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.2, 2.6), matCab);
  cab.position.set(0, 2.05, 3.3);
  cab.castShadow = true;
  g.add(cab);

  const wf = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.0), matWin);
  wf.position.set(0, 2.5, 4.62);
  g.add(wf);

  for (const dx of [-1.26, 1.26]) {
    const ws = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), matWin);
    ws.position.set(dx, 2.5, 3.3);
    ws.rotation.y = Math.PI / 2;
    g.add(ws);
  }

  const cont = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.6, 6.2), matContainer);
  cont.position.set(0, 2.3, -1.1);
  cont.castShadow = true;
  cont.receiveShadow = true;
  g.add(cont);

  for (let i = 0; i < 5; i++) {
    const zPos = -3.7 + i * 1.4;
    for (const dx of [-1.22, 1.22]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.5, 0.1), matChassis);
      bar.position.set(dx, 2.3, zPos);
      g.add(bar);
    }
  }

  const backDoor = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.4), matChassis);
  backDoor.position.set(0, 2.3, -4.21);
  backDoor.rotation.y = Math.PI;
  g.add(backDoor);

  const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.32, 16);
  const axlePos = [3.3, -1.2, -3.2];
  for (const z of axlePos) {
    for (const dx of [-1.05, 1.05]) {
      const w = new THREE.Mesh(wheelGeo, matTire);
      w.rotation.z = Math.PI / 2;
      w.position.set(dx, 0.5, z);
      w.castShadow = true;
      g.add(w);
    }
  }

  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff3cf, emissive: 0xffd070, emissiveIntensity: 0.8 });
  for (const dx of [-0.85, 0.85]) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.08), headMat);
    l.position.set(dx, 1.3, 4.62);
    g.add(l);
  }

  g.updateWorldMatrix(true, true);
  pushCollider(x - 1.5, x + 1.5, z - 5, z + 5, "prop");
}

// ──────────────── ۲۴. تابلوی مناطق ────────────────
function buildZoneSigns(): void {
  for (const z of ZONES) {
    if (z.id === "yard" || z.id === "entrance" || z.id === "outside") continue;
    const cx = (z.xMin + z.xMax) / 2;
    const cz = (z.zMin + z.zMax) / 2;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 1.4),
      new THREE.MeshStandardMaterial({
        map: signTexture(z.title, z.sub, z.color, renderer.capabilities.getMaxAnisotropy()),
        roughness: 0.7, side: THREE.DoubleSide,
      }),
    );
    sign.position.set(cx, 4.5, cz);
    scene.add(sign);
  }
}

// ──────────────── ۲۵. محاسبه‌ی ZoneBounds ────────────────
function computeZoneBounds(): void {
  zoneBounds.length = 0;
  for (const z of ZONES) {
    zoneBounds.push({ ...z, cx: (z.xMin + z.xMax) / 2, cz: (z.zMin + z.zMax) / 2 });
  }
}

// ──────────────── تابع اصلی ────────────────
export function buildWorld(): void {
  buildGround();
  buildOutsideYard();
  buildFence();
  buildGate();
  buildGuardPost();
  buildAdminBuilding();
  buildProductionHall();
  buildHallDoors();

  // ماشین‌آلات اصلی
  buildFurnace();
  buildPress();
  buildConveyor();

  // ماشین‌آلات تکمیلی
  buildRollingMachine(-15, 22);
  buildWeldingRobot(-15, 30);
  buildQCStation(0, 22);
  buildPackagingMachine(10, 28);
  buildStorageRack(17, 34);
  buildForklift(8, 14, -Math.PI / 6);

  // مواد اولیه و محصول
  buildRawSheetStack(-6, 6);
  buildRawSheetStack(5, 7, Math.PI / 2);
  buildRawSheetStack(-22, 20, 0);
  buildReadyBoxes(20, 14);
  buildReadyBoxes(20, 20);
  buildReadyBoxes(-22, 32);

  // خودروها و پارکینگ
  buildParkingLot();
  buildTruck(0, -20, Math.PI);

  // ⭐ کارگرها
  buildWorker(-13, 4, Math.PI * 0.8, 0x2a4a8a, 0xd6ab5c);
  buildWorker(-17, 7, Math.PI * 1.2, 0x2a4a8a, 0xd6ab5c);
  buildWorker(-3, 4, 0, 0x8a3a3a, 0xd6ab5c);
  buildWorker(14, 6, Math.PI / 2, 0x4a6b3a, 0xffd050);
  buildWorker(19, -4, -Math.PI / 2, 0x4a6b3a, 0xffd050);

  buildZoneSigns();
  computeZoneBounds();
  console.log(`✅ کارخانه ساخته شد با ${ZONES.length} منطقه`);
}