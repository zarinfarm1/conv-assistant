import type { ZoneDef } from "./types";

// ---- مرزهای محوطه ----
export const X_MIN = -45;
export const X_MAX = 45;
export const Z_MIN = -85;              // ← محوطه‌ی بیرونی تا این‌جا ادامه دارد
export const Z_MAX = 55;
export const Z_FENCE_SOUTH = -55;      // ← خط فنس و دروازه

// ---- بازیکن ----
export const EYE = 1.7;
export const PLAYER_R = 0.35;
export const SPAWN_X = 0;
export const SPAWN_Z = -75;            // ← نقطه‌ی شروع، بیرون از فنس
export const SKY = 0xa9c8e8;

// ---- سوله تولید ----
export const HALL_X_MIN = -25;
export const HALL_X_MAX = 25;
export const HALL_Z_MIN = -12;
export const HALL_Z_MAX = 40;
export const HALL_H = 9;
export const HALL_WALL_T = 0.4;
export const HALL_DOOR_HALF = 5;
export const HALL_DOOR_H = 6;

// ---- ساختمان اداری ----
export const ADMIN_X_MIN = -40;
export const ADMIN_X_MAX = -26;
export const ADMIN_Z_MIN = -38;
export const ADMIN_Z_MAX = -18;
export const ADMIN_H = 8;

// ---- اتاق نگهبانی ----
export const GUARD_X_MIN = -22;
export const GUARD_X_MAX = -14;
export const GUARD_Z_MIN = -48;
export const GUARD_Z_MAX = -40;
export const GUARD_H = 3.5;

// ---- فنس و دروازه ----
export const FENCE_H = 3;
export const GATE_HALF = 6;
export const GATE_H = 4.5;
export const GATE_Z = Z_FENCE_SOUTH;

// ---- مناطق (از خاص به عام) ----
export const ZONES: ZoneDef[] = [
  {
    id: "outside",
    title: "محوطه بیرونی",
    sub: "بیرون از کارخانه",
    color: 0x8ba05c,
    xMin: X_MIN, xMax: X_MAX, zMin: Z_MIN, zMax: Z_FENCE_SOUTH,
  },
  {
    id: "furnace",
    title: "کوره ذوب",
    sub: "منطقه ذوب و ریخته‌گری فلز",
    color: 0xc4592e,
    xMin: -24, xMax: -8, zMin: -10, zMax: 10,
  },
  {
    id: "press",
    title: "پرس و شکل‌دهی",
    sub: "خط شکل‌دهی قوطی فلزی",
    color: 0x5a7ba6,
    xMin: -6, xMax: 8, zMin: -10, zMax: 10,
  },
  {
    id: "packaging",
    title: "خط بسته‌بندی",
    sub: "نوار نقاله و بسته‌بندی نهایی",
    color: 0x6f8b45,
    xMin: 10, xMax: 24, zMin: -10, zMax: 10,
  },
  {
    id: "hall",
    title: "سوله تولید",
    sub: "سالن اصلی کارخانه",
    color: 0x8b6d3e,
    xMin: -26, xMax: 26, zMin: -13, zMax: 41,
  },
  {
    id: "admin",
    title: "ساختمان اداری",
    sub: "دفاتر مدیریت و اداری",
    color: 0xa35a3d,
    xMin: -41, xMax: -25, zMin: -39, zMax: -17,
  },
  {
    id: "guard",
    title: "اتاق نگهبانی",
    sub: "کنترل ورود و خروج",
    color: 0x5c6b99,
    xMin: -23, xMax: -13, zMin: -49, zMax: -39,
  },
  {
    id: "entrance",
    title: "درب ورودی",
    sub: "ورودی اصلی کارخانه",
    color: 0xd6ab5c,
    xMin: -8, xMax: 8, zMin: Z_FENCE_SOUTH - 5, zMax: Z_FENCE_SOUTH + 5,
  },
  {
    id: "yard",
    title: "حیاط کارخانه",
    sub: "محوطه و پارکینگ",
    color: 0x5c8a4a,
    xMin: X_MIN, xMax: X_MAX, zMin: Z_FENCE_SOUTH, zMax: Z_MAX,
  },
];