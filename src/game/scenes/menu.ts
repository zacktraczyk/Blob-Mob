import { game } from '@App'

export function Menu() {
  const ctx = game.ctx
  if (ctx == null) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
