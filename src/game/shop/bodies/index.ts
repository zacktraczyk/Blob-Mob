import bodyNormal from "./bodyNormal";
import bodyGold from "./bodyGold";

export interface BodyAttr {
  x: number; // center of face
  y: number; // center of face
  w: number;
  h: number;
  cool: number;
  maxCool: number;
}

export type BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => void;

export const Body = {
  normal: {
    name: "Default",
    colorNorm: "#ffd6cc",
    colorCool: "#a8c7f7",
    draw: bodyNormal,
    cost: 0,
  },
  gold: {
    name: "Pee",
    colorNorm: "#e8eb5b",
    colorCool: "#cbccc6",
    draw: bodyGold,
    cost: 50,
  },
};
