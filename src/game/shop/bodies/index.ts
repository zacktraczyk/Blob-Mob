import bodyNormal from "./bodyNormal";
import bodyGold from "./bodyGold";

export interface BodyAttr {
  x: number; // center of face
  y: number; // center of face
  w: number;
  h: number;
}

export type BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => void;

export const Body = {
  normal: {
    name: "Default",
    draw: bodyNormal,
    cost: 0,
  },
  gold: {
    name: "Pee",
    draw: bodyGold,
    cost: 50,
  },
};
