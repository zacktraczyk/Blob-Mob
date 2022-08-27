import { Body, BodyAttr, BodyFunction } from ".";

const bodyGold: BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => {
  let { x, y, w, h, cool, maxCool } = bodyAttr;
  const colorNorm = Body.gold.colorNorm;
  const colorCool = Body.gold.colorCool;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm;
  ctx.fillRect(x, y, w, h);
};

export default bodyGold;
