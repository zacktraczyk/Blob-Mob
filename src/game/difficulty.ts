import { game } from '@App'
import { enemies } from './entities/enemy'
import { clamp } from './util'

export enum Difficulties {
  Easy,
  Medium,
  Hard,
}

export class DifficultyScalar {
  public difficulty: Difficulties

  constructor() {
    this.difficulty = Difficulties.Medium
  }

  public debug(ctx: CanvasRenderingContext2D) {
    ctx.font = '20px Arial Bold'
    ctx.fillStyle = 'black'

    const x = 40
    let y = (ctx.canvas.height * 5) / 8 + 100

    ctx.fillText(`difficulty debug --x`, x, y)
    y += 20
    ctx.fillText(`Timer: ${Math.round((game.frame / 60) * 10) / 10}`, x, y)
    y += 20
    ctx.fillText(`Enemy Speed: ${enemies.speed}`, x, y)
    y += 20
    ctx.fillText(`Enemy Spawn Rate: ${enemies.spawnWait}`, x, y)
    y += 20
    ctx.fillText(`Max Enemies: ${enemies.maxInst}`, x, y)
  }

  public controller() {
    enemies.maxInst = 60

    const seconds = game.frame / 60
    let spawnWait = 3

    switch (this.difficulty) {
      case Difficulties.Easy:
        enemies.speed = 1
        spawnWait = 2000 / (seconds + 200) - 0.3
        enemies.value = 1
        break
      case Difficulties.Medium:
        enemies.speed = 3
        spawnWait = 500 / (seconds + 96) - 0.8
        enemies.value = 1
        break
      case Difficulties.Hard:
        enemies.speed = 8
        spawnWait = 180 / (seconds + 70) - 0.4
        // coins.value = 2;
        enemies.value = 2
        break
    }

    enemies.spawnWait =
      enemies.instances.length < 15 ? clamp(Math.round(spawnWait * 100) / 100, 0, 8) : 5
  }
}

export const difficultyScalar = new DifficultyScalar()
