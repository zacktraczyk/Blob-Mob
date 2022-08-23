import { BodyAttr, BodyFunction } from ".";

const bodyGold: BodyFunction = (
  ctx: CanvasRenderingContext2D,
  bodyAttr: BodyAttr
) => {
  let { x, y, w, h } = bodyAttr;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.fillStyle = "#e8eb5b";
  ctx.fillRect(x, y, w, h);
};

export default bodyGold;
