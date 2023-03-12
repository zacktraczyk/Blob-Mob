import { game } from '@App'
import { input } from '../input'
import { drawHUD } from './sceneElements'
import { State } from '../entities/entity'
import { player } from '../entities/player'
import { enemies } from '../entities/enemy'
import { damagePoints } from '../entities/damagePoints'

let playerDeathCool = 200

export const Shop = () => {
  draw()
  update()

  // Pause before reset
  if (player.state == State.Dead) {
    if (playerDeathCool < 0) {
      playerDeathCool = 200
      game.reset()
    } else {
      playerDeathCool--
    }
  }
}

let spawnEnemyRelease = true

const update = () => {
  const ctx = game.ctx
  if (!ctx) return

  // Confine to half of screen
  player.controller(ctx.canvas.width / 3, ctx.canvas.height)
  enemies.controller()
  damagePoints.controller()

  if (input.keyState.enemySpawn) {
    if (spawnEnemyRelease) {
      enemies.spawn(ctx.canvas.width, ctx.canvas.height, player)
    }
    spawnEnemyRelease = false
  } else {
    spawnEnemyRelease = true
  }
}

const draw = () => {
  const ctx = game.ctx
  if (ctx == null) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  player.draw(ctx)
  enemies.draw(ctx)
  damagePoints.draw(ctx)

  drawHUD()
}
