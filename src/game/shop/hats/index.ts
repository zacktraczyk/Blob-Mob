import hatNormal from "./hatNormal";
import hatTopHat from "./hatTopHat";

export interface HatAttr {
  x: number; // center of face
  y: number; // center of face
  w: number;
  h: number;
  xvel: number;
  yvel: number;
}

export type HatFunction = (
  ctx: CanvasRenderingContext2D,
  hatAttr: HatAttr
) => void;

export const Hat = {
  normal: {
    name: "Default",
    draw: hatNormal,
    cost: 0,
  },
  topHat: {
    name: "Top Hat",
    draw: hatTopHat,
    cost: 1000,
  },
};
