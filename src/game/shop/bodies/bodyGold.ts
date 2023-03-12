import { Body, BodyAttr, BodyFunction } from '.'

const bodyGold: BodyFunction = (ctx: CanvasRenderingContext2D, bodyAttr: BodyAttr) => {
  const { w, h, cool, damaging } = bodyAttr
  let { x, y } = bodyAttr

  const colorNorm = Body.gold.colorNorm
  const colorCool = Body.gold.colorCool
  const colorDamg = Body.gold.colorDamg
  // Translate center x,y to draw corner
  x -= w / 2
  y -= h / 2

  ctx.fillStyle = cool > 0 ? colorCool : colorNorm
  if (damaging) ctx.fillStyle = colorDamg

  ctx.fillRect(x, y, w, h)
}

export default bodyGold
