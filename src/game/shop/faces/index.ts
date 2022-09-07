import faceNormal from "./faceNormal";
import faceOoo from "./faceOoo";
import faceTooth from "./faceTooth";
import faceCyclops from "./faceCyclops";
import faceGlasses from "./faceGlasses";

export interface FaceAttr {
  x: number; // center of face
  y: number; // center of face
  w: number;
  h: number;
  xvel: number;
  yvel: number;
  frownCount: number;
  frownCountMax: number;
}

export type FaceFunction = (
  ctx: CanvasRenderingContext2D,
  faceAttr: FaceAttr
) => void;

export const Face = {
  normal: {
    name: "Default",
    draw: faceNormal,
    cost: 0,
  },
  nervous: {
    name: "Ooo",
    draw: faceOoo,
    cost: 10,
  },
  tooth: {
    name: "Baby",
    draw: faceTooth,
    cost: 100,
  },
  cyclops: {
    name: "Cyclops",
    draw: faceCyclops,
    cost: 300,
  },
  glasses: {
    name: "Goggles",
    draw: faceGlasses,
    cost: 500,
  },
};
