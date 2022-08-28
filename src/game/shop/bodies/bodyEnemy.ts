import { Body, BodyAttr, BodyFunction } from ".";

const bodyEnemy: BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => {
  let { x, y, w, h, cool, maxCool, damaging } = bodyAttr;
  const colorNorm = Body.enemy.colorNorm;
  const colorCool = Body.enemy.colorCool;
  const colorDamg = Body.enemy.colorDamg;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm;
  if (damaging) ctx.fillStyle = colorDamg;

  ctx.fillRect(x, y, w, h);
};

export default bodyEnemy;
