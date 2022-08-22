import { FaceAttr, FaceFunction } from ".";

const faceCyclops: FaceFunction = (
  ctx: CanvasRenderingContext2D,
  faceAttr: FaceAttr
) => {
  let { x, y, w, h, xvel, yvel, frownCount, frownCountMax } = faceAttr;

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
  const [mouthX, mouthY] = [w / 3, h * (3 / 4)];
  const mouthH = h / 8;

  const frownDelta = (frownCount / frownCountMax) * 2 - 1;

  ctx.beginPath();
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

export default faceCyclops;
