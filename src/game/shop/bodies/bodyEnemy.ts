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
  w /= 2;

  x -= w / 2;
  y -= h / 2;

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm;
  if (damaging) ctx.fillStyle = colorDamg;

  ctx.beginPath();

  ctx.strokeStyle = "black";
  //Draws Body
  ctx.moveTo(x - w / 8, y);
  ctx.bezierCurveTo(
    x - w / 8,
    y - h / 4,
    x + w + w / 8,
    y - h / 4,
    x + w + w / 8,
    y
  );

  ctx.bezierCurveTo(x + w * 2, y, x + w * 2, y + h, x + w - w / 8, y + h);

  ctx.bezierCurveTo(
    x + w - w / 8,
    y + h * 1.75,
    x - w * 2,
    y + h / 4,
    x - 10,
    y + h / 2 - 10
  );

  ctx.bezierCurveTo(x - w - 5, y + h / 2, x - w / 4, y, x - w / 8, y);
  ctx.fill();
  // ctx.stroke();
  ctx.closePath();

  ctx.lineWidth = 3;
};

export default bodyEnemy;
