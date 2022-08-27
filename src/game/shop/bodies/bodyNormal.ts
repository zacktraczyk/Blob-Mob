import { Body, BodyAttr, BodyFunction } from ".";

const bodyNormal: BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => {
  let { x, y, w, h, cool, maxCool } = bodyAttr;
  const colorNorm = Body.normal.colorNorm;
  const colorCool = Body.normal.colorCool;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm;
  ctx.fillRect(x, y, w, h);
};

export default bodyNormal;
