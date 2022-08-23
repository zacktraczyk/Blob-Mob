import faceCyclops from "./faceCyclops";
import faceNormal from "./faceNormal";
import faceTooth from "./faceTooth";

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
};
