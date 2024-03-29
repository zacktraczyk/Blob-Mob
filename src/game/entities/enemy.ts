import { game } from '@App'
import { Stage, tutorialRules } from '@Game/tutorialRules'
import { Scenes } from '../scenes/scenes'
import { coins } from './coin'
import { State, Entity, Action } from './entity'
import { player, Player } from './player'

export interface EnemyAttributes {
  speed: number
  maxInst: number
  spawnWait: number
}

class EnemyController {
  public instances: Array<Enemy>

  private cool: number
  public speed: number

  public maxInst: number
  public spawnWait: number

  public value: number

  constructor() {
    this.instances = []
    this.speed = 1

    this.maxInst = 10
    this.spawnWait = 5
    this.cool = this.spawnWait
    this.value = 1
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((e) => e.draw(ctx))
  }

  public controller() {
    let playerDamaging = false
    for (let i = 0; i < this.instances.length; i++) {
      const enemy = this.instances[i]
      if (enemy.state == State.Dead) {
        this.instances.splice(i, 1)
        return
      }

      // Player collision test
      if (player && player.collides(enemy) && enemy.state < State.Dying) {
        if (player.action != Action.Attack) {
          playerDamaging = true
        } else {
          enemy.state = State.Dying
        }
      }
      enemy.controller()
    }
    if (player && player.state != State.Dead) player.damaging = playerDamaging
  }

  public spawner(w: number, h: number, player: Player) {
    this.cool -= 1
    if (this.instances.length < this.maxInst && this.cool <= 0) {
      this.spawn(w, h, player)
      this.cool = this.spawnWait * 60 // 60fps
    }
  }

  public updateAttributes(attributes: EnemyAttributes) {
    this.speed = attributes.speed
    this.maxInst = attributes.maxInst
    this.spawnWait = attributes.spawnWait
  }

  public reset() {
    this.instances = []
    this.cool = 0
  }

  public spawn(w: number, h: number, player: Player) {
    const enemy = new Enemy(w, h, player, this.speed, this.value)
    this.instances.push(enemy)
  }
}

export class Enemy extends Entity {
  private rcolors: Array<string>

  private speed: number
  private xdir: number
  private ydir: number

  private target: Player | null
  private triedCoinSpawn: boolean
  private value: number

  public distance: number
  private pushMagnitude: number

  constructor(w: number, h: number, target: Player, speed: number, value: number) {
    super(0, 0, 50, 50)
    this.rcolors = ['#81ea25', '#6bba27', '#96e84e', '#abf966', '#b9f981'] //Enemy color strobe
    this.color = this.rcolors[0]
    this.state = State.Spawn

    this.speed = speed
    this.xdir = 0
    this.ydir = 0

    this.target = null
    this.triedCoinSpawn = false

    this.distance = 0
    this.pushMagnitude = 17

    this.value = value

    this.target = target
    this.spawn(w, h)
  }

  private spawn(w: number, h: number) {
    let rand = Math.random()

    if (rand <= 0.5) {
      // sides
      rand = Math.random()
      this.x = rand < 0.5 ? -this.w - 5 : w + 5
      rand = Math.random()
      this.y = rand * (h + 10) - 5
    } else {
      // top/bottom
      rand = Math.random()
      this.x = rand * (w + 10) - 5
      rand = Math.random()
      this.y = rand < 0.5 ? -this.h - 5 : h + 5
    }

    this.state = State.Normal
  }

  public draw(ctx: CanvasRenderingContext2D) {
    if (this.state == State.Spawn) {
      return
    }

    const x = this.x - this.w / 2 // draw corner
    const y = this.y - this.h / 2 // draw corner

    // ctx.lineWidth = 1;
    if (game.frame % 3 == 0) {
      const rand = Math.round(Math.random() * 2)
      this.color = this.rcolors[rand]
    }
    ctx.fillStyle = this.color
    if (this.target != null && this.state == State.Normal) {
      this.w = this.target.w / 2 - 10
      this.h = this.target.h - 10
    }
    ctx.beginPath()

    ctx.strokeStyle = 'black'
    //Draws Body
    ctx.moveTo(x - this.w / 8, y)
    ctx.bezierCurveTo(
      x - this.w / 8,
      y - this.h / 4,
      x + this.w + this.w / 8,
      y - this.h / 4,
      x + this.w + this.w / 8,
      y,
    )

    ctx.bezierCurveTo(
      x + this.w * 2,
      y,
      x + this.w * 2,
      y + this.h,
      x + this.w - this.w / 8,
      y + this.h,
    )

    ctx.bezierCurveTo(
      x + this.w - this.w / 8,
      y + this.h * 1.75,
      x - this.w * 2,
      y + this.h / 4,
      x - 10,
      y + this.h / 2 - 10,
    )

    ctx.bezierCurveTo(x - this.w - 5, y + this.h / 2, x - this.w / 4, y, x - this.w / 8, y)
    ctx.fill()
    // ctx.stroke();
    ctx.closePath()

    ctx.lineWidth = 3

    //Draws Left Eye
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(
      x + this.w / 6 + this.xdir * 5,
      y + this.h / 6 + this.ydir * 5,
      (this.w / 4 + this.h / 4) / 4,
      0,
      2 * Math.PI,
    )
    ctx.stroke()
    ctx.closePath()

    //Draws Right Eye
    ctx.beginPath()
    ctx.arc(
      x + this.w - this.w / 8 + this.xdir * 5,
      y + this.h / 6 + this.ydir * 5,
      (this.w / 4 + this.h / 4) / 6,
      0,
      2 * Math.PI,
    )
    ctx.stroke()
    ctx.closePath()

    //Draws Mouth
    ctx.beginPath()
    ctx.moveTo(x + this.w / 8, y + this.h)
    ctx.bezierCurveTo(
      x + this.h / 8,
      y + this.h - this.h / 3,
      x + this.w - this.h / 8,
      y + this.h - this.h / 3,
      x + this.w - this.h / 8,
      y + this.h,
    )
    ctx.stroke()
    ctx.closePath()

    //Draw Hitbox (DEBUG)
    // ctx.lineWidth = 1
    // ctx.strokeRect(this.x - this.w/2, this.y - this.w/2, this.w, this.h)
  }

  public controller() {
    switch (this.state) {
      case State.Normal:
        this.move()
        break

      case State.Dying:
        this.death(this.target)
        break
    }
  }

  private calculateDir() {
    if (this.target == null) {
      return
    }

    const xdiff = this.target.x - this.x
    const ydiff = this.target.y - this.y
    this.distance = Math.sqrt(xdiff * xdiff + ydiff * ydiff)
    if (this.distance > 0) {
      this.xdir = xdiff / this.distance
      this.ydir = ydiff / this.distance
    }
  }

  private move() {
    if (this.target == null) {
      return
    }

    this.calculateDir()

    if (this.target.state == State.Dead) {
      this.xdir = -this.xdir
      this.ydir = -this.ydir
    }

    this.x += this.xdir * this.speed
    this.y += this.ydir * this.speed

    if (game.frame % 3 == 0) this.wiggle()
  }

  private wiggle() {
    let rand = Math.random() > 0.5 ? 1 : -1
    this.x = this.x + rand * 2

    rand = Math.random() > 0.5 ? 1 : -1
    this.y = this.y + rand * 2
  }

  private death(player: Player | null) {
    // Shrink
    this.w = Math.max(0, this.w - 2)
    this.h = Math.max(0, this.h - 3.9)

    if (
      !this.triedCoinSpawn &&
      ((game.scene == Scenes.tutorialMain && tutorialRules.stage >= Stage.coins) ||
        (game.scene == Scenes.battle && Math.random() <= 0.8))
    ) {
      for (let i = 0; i < this.value; i++) {
        coins.spawn(this.x, this.y)
      }
    }
    this.triedCoinSpawn = true

    if (this.w == 0 || this.h == 0) {
      // effects.stop(ah);
      // de = effects.play('death');
      if (player != null) {
        player.updatePower()
      }
      if (game.scene == Scenes.battle || game.scene == Scenes.tutorialMain) {
        game.score += this.value
      }
      this.state = State.Dead
    }
  }

  public pushField(r: number) {
    if (this.distance < r) {
      this.x += this.pushMagnitude * -this.xdir
      this.y += this.pushMagnitude * -this.ydir
    }
  }

  public pushLine() {
    this.x += this.pushMagnitude * -this.xdir
    this.y += this.pushMagnitude * -this.ydir
  }
}

export const enemies = new EnemyController()
