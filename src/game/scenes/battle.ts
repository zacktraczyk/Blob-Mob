import { game } from '@App'
import { State } from '../entities/entity'
import { difficultyScalar } from '../difficulty'
import { player } from '../entities/player'
import { damagePoints } from '../entities/damagePoints'
import { enemies } from '../entities/enemy'
import { coins } from '../entities/coin'
import { drawHUD, drawPauseMenu } from './sceneElements'
import { drawController } from '../entities/draw'

let transTimer = 0 // after death change scene timer
const duration = 100

export const Battle = () => {
  if (!game.paused) update()
  game.pause()

  draw()

  // Pause after death before transition
  if (player.state == State.Dead) {
    transTimer++
    if (transTimer > duration) {
      game.gameOver()
      transTimer = 0
    }
  }
}

const update = () => {
  const ctx = game.ctx
  if (ctx == null) return

  if (player.state != State.Dead) {
    enemies.spawner(ctx.canvas.width, ctx.canvas.height, player)
  }

  difficultyScalar.controller()

  coins.controller(game, ctx.canvas.width, ctx.canvas.height)
  player.controller(ctx.canvas.width, ctx.canvas.height)
  damagePoints.controller()
  enemies.controller()

  drawController.controller()
}

const draw = () => {
  const ctx = game.ctx
  if (ctx == null) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  coins.draw(ctx)
  player.draw(ctx)
  damagePoints.draw(ctx)
  enemies.draw(ctx)
  drawController.draw(ctx)

  drawHUD()

  if (game.paused) drawPauseMenu(ctx)
}
