import { game } from '@App'
import { player } from '../entities/player'
import { enemies } from '../entities/enemy'

export const Gameover = () => {
  update()
  draw()
}

const update = () => {
  enemies.controller()
}

const draw = () => {
  const ctx = game.ctx
  if (ctx == null) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  player.draw(ctx)
  enemies.draw(ctx)
}
