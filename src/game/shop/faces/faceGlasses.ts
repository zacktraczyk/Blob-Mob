import { FaceAttr, FaceFunction } from ".";

const faceGlasses: FaceFunction = (
  ctx: CanvasRenderingContext2D,
  faceAttr: FaceAttr
) => {
  let { x, y, w, h, xvel, yvel, frownCount, frownCountMax } = faceAttr;
  // Translate center x,y to draw corner
  x -= w / 2;
  y -= h / 2;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";

  // Glasses Bridge
  ctx.beginPath();
  ctx.moveTo(x + w / 3 + xvel / 2, y + h / 2 + h / 10 + yvel / 2);
  ctx.bezierCurveTo(
    x + w / 4 + xvel / 2,
    y + h / 2 - h / 5 + yvel / 2,
    x + w * (3 / 4) + xvel / 2,
    y + h / 2 - h / 5 + yvel / 2,
    x + w * (3 / 4) + xvel / 2,
    y + h / 2 + yvel / 2 + h / 10
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Left Eye
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(
    x + w / 3 + xvel / 2,
    y + h / 2 + yvel / 2,
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
    x + w * (2 / 3) + xvel / 2,
    y + h / 2 + yvel / 2,
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
    x + w - mouthX + xvel,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX,
    y + mouthY + frownDelta
  );
  ctx.stroke();
  ctx.closePath();
};

export default faceGlasses;
