// سیستم صدا:
// - صفحه بی‌صدا باز می‌شود
// - دکمه‌ی ON/OFF صدا را روشن/خاموش می‌کند
// - پرواز → موسیقی | راه رفتن → فقط صدای قدم

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let musicGain: GainNode | null = null;
let footstepGain: GainNode | null = null;

let introBuffer: AudioBuffer | null = null;
let introSource: AudioBufferSourceNode | null = null;
const footstepBuffers: AudioBuffer[] = [];
let lastFootstepIdx = -1;

let currentMode: "intro" | "walk" = "intro";
let muted = true;                     // ← پیش‌فرض: خاموش
let soundOn = false;                  // ← یعنی هنوز کاربر روشن نکرده
let loaded = false;
const BASE_VOLUME = 0.55;

// ─────────── بارگذاری فایل ───────────
async function loadBuffer(ac: AudioContext, url: string): Promise<AudioBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const arr = await res.arrayBuffer();
    return await ac.decodeAudioData(arr);
  } catch {
    console.warn(`[audio] نتوانست بارگذاری کند: ${url}`);
    return null;
  }
}

// ─────────── کشتن قطعی موسیقی ───────────
function hardKillIntroSource(): void {
  if (introSource) {
    const s = introSource;
    introSource = null;
    try { s.stop(0); } catch { /* ignore */ }
    try { s.disconnect(); } catch { /* ignore */ }
  }
  if (musicGain && ctx) {
    const now = ctx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(0, now);
  }
}

// ─────────── اعمال حالت فعلی ───────────
function applyMode(): void {
  if (!ctx) return;
  const now = ctx.currentTime;

  if (currentMode === "intro") {
    if (footstepGain) {
      footstepGain.gain.cancelScheduledValues(now);
      footstepGain.gain.setValueAtTime(0, now);
    }
    // موسیقی فقط اگر صدا روشن باشد
    if (introBuffer && soundOn && ctx.state === "running" && !introSource) {
      introSource = ctx.createBufferSource();
      introSource.buffer = introBuffer;
      introSource.loop = true;
      introSource.connect(musicGain!);
      musicGain!.gain.cancelScheduledValues(now);
      musicGain!.gain.setValueAtTime(0, now);
      musicGain!.gain.linearRampToValueAtTime(1.0, now + 1.5);
      introSource.start();
      console.log("[audio] موسیقی پرواز پخش شد");
    }
  } else {
    hardKillIntroSource();
    if (footstepGain && soundOn && ctx.state === "running") {
      footstepGain.gain.cancelScheduledValues(now);
      footstepGain.gain.setValueAtTime(0, now);
      footstepGain.gain.linearRampToValueAtTime(1.0, now + 0.3);
    }
    console.log("[audio] حالت راه رفتن فعال");
  }
}

// ─────────── بارگذاری فایل‌ها ───────────
async function loadAllFiles(): Promise<void> {
  if (!ctx || loaded) return;
  loaded = true;

  const bust = "?v=6";
  const [music, s1, s2, s3, s4] = await Promise.all([
    loadBuffer(ctx, "/audio/intro-music.mp3" + bust),
    loadBuffer(ctx, "/audio/step-1.mp3" + bust),
    loadBuffer(ctx, "/audio/step-2.mp3" + bust),
    loadBuffer(ctx, "/audio/step-3.mp3" + bust),
    loadBuffer(ctx, "/audio/step-4.mp3" + bust),
  ]);

  introBuffer = music;
  [s1, s2, s3, s4].forEach((b) => { if (b) footstepBuffers.push(b); });

  console.log(
    `[audio] موسیقی: ${introBuffer ? "✅" : "❌"} — قدم‌ها: ${footstepBuffers.length}/4`
  );

  // اگر کاربر تا حالا دکمه را زده بود، موسیقی حالا شروع کن
  if (soundOn) applyMode();
}

// ─────────── API عمومی ───────────

export function initAudio(): void {
  if (ctx) return;
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;

  ctx = new Ctx();
  masterGain = ctx.createGain();
  masterGain.gain.value = 0;          // ← شروع با صدای صفر (چون muted=true است)
  masterGain.connect(ctx.destination);

  musicGain = ctx.createGain();
  musicGain.gain.value = 0;
  musicGain.connect(masterGain);

  footstepGain = ctx.createGain();
  footstepGain.gain.value = 0;
  footstepGain.connect(masterGain);

  void loadAllFiles();
}

export function startIntroAudio(): void {
  currentMode = "intro";
  applyMode();
}

export function startWalkAudio(): void {
  currentMode = "walk";
  hardKillIntroSource();
  applyMode();
}

export function playFootstep(intensity = 1): void {
  if (currentMode !== "walk") return;
  if (introSource) hardKillIntroSource();
  if (!ctx || !footstepGain || muted || !soundOn) return;
  if (ctx.state !== "running") return;
  if (footstepBuffers.length === 0) return;

  let idx = Math.floor(Math.random() * footstepBuffers.length);
  if (footstepBuffers.length > 1 && idx === lastFootstepIdx) {
    idx = (idx + 1) % footstepBuffers.length;
  }
  lastFootstepIdx = idx;

  const src = ctx.createBufferSource();
  src.buffer = footstepBuffers[idx];
  src.playbackRate.value = 0.92 + Math.random() * 0.16;

  const g = ctx.createGain();
  g.gain.value = intensity;

  src.connect(g);
  g.connect(footstepGain);
  src.start();
}

// ⭐ دکمه‌ی ON/OFF — این تنها راه روشن کردن صدا است
export function toggleAudio(): boolean {
  if (!ctx || !masterGain) return muted;

  if (soundOn) {
    // خاموش کردن
    soundOn = false;
    muted = true;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(0, now + 0.15);
    console.log("[audio] صدا خاموش شد");
  } else {
    // روشن کردن
    soundOn = true;
    muted = false;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(BASE_VOLUME, now + 0.3);

    // اگر ctx معلق است، فعالش کن
    if (ctx.state === "suspended") {
      ctx.resume().then(() => {
        applyMode();
      }).catch(() => { /* ignore */ });
    } else {
      applyMode();
    }
    console.log("[audio] صدا روشن شد");
  }

  return muted;
}