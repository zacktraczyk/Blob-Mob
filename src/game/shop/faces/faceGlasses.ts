import { FaceAttr, FaceFunction } from ".";

const faceGlasses: FaceFunction = (
  ctx: CanvasRenderingContext2D,
  faceAttr: FaceAttr
) => {
  let { x, y, w, h, xdir, ydir, frownCount, frownCountMax } = faceAttr;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";

  // Glasses Bridge
  ctx.beginPath();
  ctx.moveTo(x + w / 3 + xdir / 2, y + h / 2 + h / 10 + ydir / 2);
  ctx.bezierCurveTo(
    x + w / 4 + xdir / 2,
    y + h / 2 - h / 5 + ydir / 2,
    x + w * (3 / 4) + xdir / 2,
    y + h / 2 - h / 5 + ydir / 2,
    x + w * (3 / 4) + xdir / 2,
    y + h / 2 + ydir / 2 + h / 10
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Left Eye
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(
    x + w / 3 + xdir / 2,
    y + h / 2 + ydir / 2,
    (w / 4 + h / 4) / 5,
    0,
    2 * Math.PI
  );
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Draws Right Eye
  ctx.beginPath();
  ctx.arc(
    x + w * (2 / 3) + xdir / 2,
    y + h / 2 + ydir / 2,
    (w / 4 + h / 4) / 5,
    0,
    2 * Math.PI
  );
  ctx.fill();
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
    x + w - mouthX + xdir,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX,
    y + mouthY + frownDelta
  );
  ctx.stroke();
  ctx.closePath();
};

export default faceGlasses;
