import { HatAttr, HatFunction } from '.'

const hatTopHat: HatFunction = (ctx: CanvasRenderingContext2D, hatAttr: HatAttr) => {
  const { x, w, h } = hatAttr
  let y = hatAttr.y

  // Translate center x,y to draw corner
  y -= h / 2

  ctx.fillStyle = 'black'
  const bandHeight = h / 5
  const hatWidth = w / 2
  const hatHeight = h * (3 / 4)
  ctx.fillRect(x - w / 2, y - bandHeight * (3 / 4), w, bandHeight)
  ctx.fillRect(x - hatWidth / 2, y - bandHeight * (1 / 4) - hatHeight, hatWidth, hatHeight)

  ctx.fillStyle = 'white'
  ctx.fillRect(x - hatWidth / 2, y - bandHeight * (5 / 4), hatWidth, bandHeight / 2)
}

export default hatTopHat
