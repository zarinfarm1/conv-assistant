import * as THREE from "three";

export function hex(c: number): string {
  return `#${c.toString(16).padStart(6, "0")}`;
}

export function makeCanvas(w: number, h?: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h ?? w;
  return c;
}

export function finish(c: HTMLCanvasElement, rx = 1, ry = 1, aniso = 1): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(rx, ry);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  return tex;
}

export function noiseTexture(hexColor: number, size: number, variation: number): THREE.CanvasTexture {
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const base = new THREE.Color(hexColor);
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = (Math.random() - 0.5) * variation;
    img.data[i * 4] = Math.min(255, Math.max(0, base.r * 255 + v));
    img.data[i * 4 + 1] = Math.min(255, Math.max(0, base.g * 255 + v));
    img.data[i * 4 + 2] = Math.min(255, Math.max(0, base.b * 255 + v));
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return finish(c);
}

export function grassTexture(): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#5c8a4a";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 3600; i++) {
    const g = 100 + Math.random() * 70;
    ctx.fillStyle = `rgba(${60 + Math.random() * 30},${g},${50 + Math.random() * 30},0.5)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1.6, 1.6);
  }
  return finish(c, 40, 40);
}

export function asphaltTexture(): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#3a3a3e";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 2500; i++) {
    const g = 60 + Math.random() * 40;
    ctx.fillStyle = `rgba(${g},${g},${g + 5},0.6)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1.4, 1.4);
  }
  return finish(c, 8, 8);
}

export function concreteTexture(baseHex = 0x9a9490): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const base = new THREE.Color(baseHex);
  ctx.fillStyle = `#${base.getHexString()}`;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 400; i++) {
    const v = (Math.random() - 0.5) * 40;
    const r = Math.min(255, Math.max(0, base.r * 255 + v)) | 0;
    const g = Math.min(255, Math.max(0, base.g * 255 + v)) | 0;
    const b = Math.min(255, Math.max(0, base.b * 255 + v)) | 0;
    ctx.fillStyle = `rgba(${r},${g},${b},0.35)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 4, 4);
  }
  ctx.strokeStyle = "rgba(60,55,50,0.25)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * size, Math.random() * size);
    ctx.lineTo(Math.random() * size, Math.random() * size);
    ctx.stroke();
  }
  return finish(c, 1, 1);
}

export function corrugatedTexture(baseHex = 0x8a8d92): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const base = new THREE.Color(baseHex);
  ctx.fillStyle = `#${base.getHexString()}`;
  ctx.fillRect(0, 0, size, size);
  const stripeW = 8;
  for (let x = 0; x < size; x += stripeW) {
    ctx.fillStyle = `rgba(0,0,0,${x % (stripeW * 2) === 0 ? 0.25 : 0.05})`;
    ctx.fillRect(x, 0, stripeW / 2, size);
    ctx.fillStyle = `rgba(255,255,255,${x % (stripeW * 2) === 0 ? 0.10 : 0.02})`;
    ctx.fillRect(x + stripeW / 2, 0, stripeW / 2, size);
  }
  return finish(c, 3, 1);
}

export function brickTexture(baseHex = 0xc4a888): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = `#${new THREE.Color(baseHex).getHexString()}`;
  ctx.fillRect(0, 0, size, size);
  const rows = 16;
  const rh = size / rows;
  const bw = 32;
  for (let r = 0; r < rows; r++) {
    const y = r * rh;
    const offset = (r % 2) * (bw / 2);
    ctx.strokeStyle = "rgba(80,70,60,0.35)";
    ctx.lineWidth = 2;
    for (let x = -bw; x < size + bw; x += bw) {
      ctx.strokeRect(x + offset, y, bw, rh);
    }
  }
  return finish(c, 3, 2);
}

export function roofMetalTexture(baseHex = 0x5a5a5e): THREE.CanvasTexture {
  const size = 256;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = `#${new THREE.Color(baseHex).getHexString()}`;
  ctx.fillRect(0, 0, size, size);
  const stripeW = 12;
  for (let x = 0; x < size; x += stripeW) {
    ctx.fillStyle = `rgba(0,0,0,${x % (stripeW * 2) === 0 ? 0.30 : 0.05})`;
    ctx.fillRect(x, 0, 1, size);
  }
  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.06})`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 3, 3);
  }
  return finish(c, 3, 4);
}

export function smokeTexture(): THREE.CanvasTexture {
  const size = 128;
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(230,228,222,0.55)");
  g.addColorStop(0.4, "rgba(210,208,202,0.28)");
  g.addColorStop(1, "rgba(200,200,200,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function beltTexture(): THREE.CanvasTexture {
  const size = 64;
  const c = makeCanvas(size, size);
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#16171a";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  const stripeH = 12;
  for (let y = 0; y < size; y += stripeH * 2) {
    ctx.fillRect(0, y, size, stripeH * 0.35);
  }
  return finish(c, 1, 1);
}

// ──────────────── تابلوی با فونت خودکار ────────────────
export function signTexture(title: string, sub: string, accentHex: number, aniso = 1): THREE.CanvasTexture {
  const w = 800;
  const h = 320;
  const c = makeCanvas(w, h);
  const ctx = c.getContext("2d")!;

  // پس‌زمینه
  ctx.fillStyle = "#f1e9d8";
  ctx.fillRect(0, 0, w, h);

  // قاب رنگی
  const accent = `#${accentHex.toString(16).padStart(6, "0")}`;
  ctx.strokeStyle = accent;
  ctx.lineWidth = 14;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  // قاب داخلی
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, w - 56, h - 56);

  ctx.direction = "rtl";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // ─── عنوان با فونت خودکار ───
  const maxTitleW = w - 90;
  let titleSize = 76;
  let titleFont = `800 ${titleSize}px Vazirmatn, Tahoma, sans-serif`;
  ctx.font = titleFont;
  while (ctx.measureText(title).width > maxTitleW && titleSize > 22) {
    titleSize -= 2;
    titleFont = `800 ${titleSize}px Vazirmatn, Tahoma, sans-serif`;
    ctx.font = titleFont;
  }
  ctx.fillStyle = "#1a1612";
  ctx.fillText(title, w / 2, h / 2 - 30);

  // ─── زیرنویس با فونت خودکار ───
  const maxSubW = w - 120;
  let subSize = 36;
  let subFont = `500 ${subSize}px Vazirmatn, Tahoma, sans-serif`;
  ctx.font = subFont;
  while (ctx.measureText(sub).width > maxSubW && subSize > 16) {
    subSize -= 2;
    subFont = `500 ${subSize}px Vazirmatn, Tahoma, sans-serif`;
    ctx.font = subFont;
  }
  ctx.fillStyle = "#6b6153";
  ctx.fillText(sub, w / 2, h / 2 + 58);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  return tex;
}