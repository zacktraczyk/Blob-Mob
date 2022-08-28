import { FaceAttr, FaceFunction } from ".";

const faceOoo: FaceFunction = (
  ctx: CanvasRenderingContext2D,
  faceAttr: FaceAttr
) => {
  let { x, y, w, h, xvel, yvel, frownCount, frownCountMax } = faceAttr;
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
    x + w * (3 / 4) + xvel,
    y + h / 4 + yvel,
    (w / 4 + h / 4) / 6,
    0,
    2 * Math.PI
  );
  ctx.stroke();
  ctx.closePath();

  //Draws Mouth
  ctx.fillStyle = "black";
  ctx.lineWidth = 3;
  const frownDelta = (frownCount / frownCountMax) * 2 - 1;
  const [mouthX, mouthY] = [w / 2 + 5, h * (3 / 4)];
  const mouthH = h / 8;
  ctx.beginPath();
  ctx.arc(
    x + mouthX + xvel * 3,
    y + mouthY + yvel,
    (w / 4 + h / 4) / 8,
    0,
    2 * Math.PI
  );
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

export default faceOoo;
