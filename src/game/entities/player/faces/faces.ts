import { browserLocalPersistence } from "firebase/auth";
import { Entity } from "../../entity";
import { Player } from "../player";
import { faceTooth } from "./faceTooth";

export enum Face {
  Normal,
  Tooth,
  Squiggle,
  Cyclops,
}

export const drawFace = (
  ctx: CanvasRenderingContext2D,
  player: Player,
  face: Face
) => {
  if (!player) return;

  const { x, y, w, h, xvel, yvel, frownCount, frownCountMax } = player;

  switch (face) {
    case Face.Tooth:
      faceTooth(ctx, x, y, w, h, xvel, yvel, frownCount, frownCountMax);
      break;
    case Face.Squiggle:
      break;
    case Face.Cyclops:
      faceCyclops(ctx, x, y, w, h, xvel, yvel, frownCount, frownCountMax);
      break;
    default:
      faceNormal(ctx, x, y, w, h, xvel, yvel, frownCount, frownCountMax);
      break;
  }
};

export const faceNormal = (
  ctx: CanvasRenderingContext2D,

  x: number,
  y: number,
  w: number,
  h: number,

  xvel: number,
  yvel: number,

  frownCount: number,
  frownCountMax: number
) => {
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";

  //Draws Left Eye
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(
    x + w / 4 + xvel / 2,
    y + h / 4 + yvel / 2,
    (w / 4 + h / 4) / 4,
    0,
    2 * Math.PI
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Right Eye
  ctx.beginPath();
  ctx.arc(
    x + w - w / 4 + xvel,
    y + h / 4 + yvel,
    (w / 4 + h / 4) / 6,
    0,
    2 * Math.PI
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Mouth
  ctx.beginPath();
  const frownDelta = (frownCount / frownCountMax) * 2 - 1;
  const [mouthX, mouthY] = [w / 8, h * (3 / 4)];
  const mouthH = h / 8;
  ctx.moveTo(x + mouthX, y + mouthY + frownDelta);
  ctx.bezierCurveTo(
    x + mouthX,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX + xvel,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX,
    y + mouthY + frownDelta
  );
  ctx.stroke();
  ctx.closePath();
};

export const faceCyclops = (
  ctx: CanvasRenderingContext2D,

  x: number,
  y: number,
  w: number,
  h: number,

  xvel: number,
  yvel: number,

  frownCount: number,
  frownCountMax: number
) => {
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";

  //Draws Center Eye
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(
    x + w / 2 + xvel * 2,
    y + h / 4 + yvel / 2,
    (w / 4 + h / 4) / 4,
    0,
    2 * Math.PI
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Mouth
  ctx.beginPath();
  const frownDelta = (frownCount / frownCountMax) * 2 - 1;
  const [mouthX, mouthY] = [w / 3, h * (3 / 4)];
  const mouthH = h / 8;
  ctx.moveTo(x + mouthX, y + mouthY + frownDelta);
  ctx.bezierCurveTo(
    x + mouthX,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX + xvel,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX,
    y + mouthY + frownDelta
  );
  ctx.stroke();
  ctx.closePath();
};
