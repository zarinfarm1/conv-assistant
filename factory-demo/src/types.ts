export interface ZoneDef {
  id: string;
  title: string;
  sub: string;
  color: number;
  xMin: number;
  xMax: number;
  zMin: number;
  zMax: number;
}

export interface ZoneBounds extends ZoneDef {
  cx: number;
  cz: number;
}

export interface Collider {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  kind: "wall" | "prop";
}