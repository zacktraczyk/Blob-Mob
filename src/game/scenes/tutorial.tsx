import { game } from '@App'
import { drawHUD } from './sceneElements'
import { player } from '../entities/player'
import { enemies } from '../entities/enemy'
import { Stage, tutorialRules } from '../tutorialRules'
import { damagePoints } from '../entities/damagePoints'
import { drawController } from '@Game/entities/draw'
import { coins } from '@Game/entities/coin'
import { View } from '@Views/index.tsx'

export const Tutorial = (setPage: React.Dispatch<React.SetStateAction<View>>) => {
  update()
  draw()

  if (tutorialRules.stage == Stage.end) {
    game.reset()
    tutorialRules.reset()
    setPage(View.Difficulty)
  }
}

const update = () => {
  const ctx = game.ctx
  if (!ctx) return

  if (!game.paused) {
    player.controller(ctx.canvas.width, ctx.canvas.height)
    damagePoints.controller()
    enemies.controller()
  }

  if (tutorialRules.stage >= Stage.draw_gesture) drawController.controller()

  coins.controller(game, ctx.canvas.width, ctx.canvas.height)

  tutorialRules.controller(ctx.canvas.width, ctx.canvas.height)

  if (player.health <= player.maxHealth * 0.1) player.health = player.maxHealth
}

const draw = () => {
  const ctx = game.ctx
  if (!ctx) return

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  coins.draw(ctx)
  player.draw(ctx)
  enemies.draw(ctx)
  drawController.draw(ctx)

  tutorialRules.draw(ctx)

  if (tutorialRules.stage > Stage.enemy) drawHUD()
}
