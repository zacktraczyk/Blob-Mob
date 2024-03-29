import { FaceAttr, FaceFunction } from '.'

const faceNormal: FaceFunction = (ctx: CanvasRenderingContext2D, faceAttr: FaceAttr) => {
  const { w, h, xdir, ydir, frownCount, frownCountMax } = faceAttr
  let { x, y } = faceAttr

  // Translate center x,y to draw corner
  x -= w / 2
  y -= h / 2

  ctx.lineWidth = 3
  ctx.strokeStyle = 'black'

  //Draws Left Eye
  ctx.beginPath()
  ctx.fillStyle = 'black'
  ctx.arc(x + w / 4 + xdir / 2, y + h / 4 + ydir / 2, (w / 4 + h / 4) / 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.closePath()

  //Draws Right Eye
  ctx.beginPath()
  ctx.arc(x + w - w / 4 + xdir, y + h / 4 + ydir, (w / 4 + h / 4) / 6, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.closePath()

  //Draws Mouth
  ctx.beginPath()
  const frownDelta = (frownCount / frownCountMax) * 2 - 1
  const [mouthX, mouthY] = [w / 8, h * (3 / 4)]
  const mouthH = h / 8
  ctx.moveTo(x + mouthX, y + mouthY + frownDelta)
  ctx.bezierCurveTo(
    x + mouthX,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX + xdir,
    y + mouthY + mouthH * -frownDelta,
    x + w - mouthX,
    y + mouthY + frownDelta,
  )
  ctx.stroke()
  ctx.closePath()
}

export default faceNormal
