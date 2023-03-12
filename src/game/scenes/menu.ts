import { game } from '@App'

export const Menu = () => {
  const ctx = game.ctx
  if (ctx == null) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
