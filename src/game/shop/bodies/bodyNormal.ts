import { Body, BodyAttr, BodyFunction } from '.'

const bodyNormal: BodyFunction = (ctx: CanvasRenderingContext2D, bodyAttr: BodyAttr) => {
  const { w, h, cool, damaging } = bodyAttr
  let { x, y } = bodyAttr

  const colorNorm = Body.normal.colorNorm
  const colorCool = Body.normal.colorCool
  const colorDamg = Body.normal.colorDamg
  // Translate center x,y to draw corner
  x -= w / 2
  y -= h / 2

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm
  if (damaging) ctx.fillStyle = colorDamg

  ctx.fillRect(x, y, w, h)
}

export default bodyNormal
