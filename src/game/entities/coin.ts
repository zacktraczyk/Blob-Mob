import { Game } from '../game'
import { Entity, State } from './entity'
import { player } from './player'

class CoinController {
  public value: number
  public instances: Array<Coin>

  constructor() {
    this.instances = []
    this.value = 1
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((c) => c.draw(ctx))
  }

  public controller(game: Game, w: number, h: number) {
    for (let i = 0; i < this.instances.length; i++) {
      if (this.instances[i].state == State.Dead) {
        this.instances.splice(i, 1)
      } else {
        this.instances[i].controller(game, w, h)
      }
    }
  }

  public spawn(x: number, y: number) {
    const coin = new Coin(x, y, this.value)
    this.instances.push(coin)
  }

  public reset() {
    this.instances = []
  }
}

class Coin extends Entity {
  readonly value: number

  private xdir: number
  private ydir: number
  public speed: number
  readonly accel: number

  public timer: number

  constructor(x: number, y: number, value: number) {
    super(x, y, 30, 25)
    this.state = State.Spawn

    this.value = value

    this.xdir = 0
    this.ydir = 0
    this.speed = 0
    this.accel = 0.2

    this.timer = 15

    // Set direction and speed
    if (player && player.state < State.Dying) {
      // const spread = Math.random() / 2 - 0.25;
      this.xdir = player.xdir
      this.ydir = player.ydir

      this.speed = (player.maxSpeed + 1) * 3
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    // Back Oval
    const offset = 5
    if (this.w <= 0 || this.h <= 0) return

    ctx.fillStyle = 'yellow'
    ctx.beginPath()
    ctx.ellipse(
      this.x - this.w / 2,
      this.y - this.h / 2,
      this.w / 2 - offset / 2,
      this.h / 2,
      0,
      0,
      2 * Math.PI,
    )
    ctx.fill()

    // Front OVal
    ctx.fillStyle = '#b3b300'
    ctx.beginPath()
    ctx.ellipse(
      this.x - this.w / 2 + offset,
      this.y - this.h / 2,
      this.w / 2 - offset / 2,
      this.h / 2,
      0,
      0,
      2 * Math.PI,
    )
    ctx.fill()

    if (this.state > State.Normal) return
    // Label
    ctx.fillStyle = 'black'
    ctx.font = '22px monospace'
    const text = '$'
    ctx.fillText(text, this.x - 9 - offset, this.y - 9)
  }

  public controller(game: Game, w: number, h: number) {
    switch (this.state) {
      case State.Spawn:
        this.launch(w, h)
        break

      case State.Normal:
        if (game.frame % 10 == 0) {
          this.wiggle()
        }
        break

      case State.Dying:
        this.death(game)
        break
    }
  }

  private launch(w: number, h: number) {
    if (this.timer > 0) {
      this.timer--
    }

    this.speed -= this.accel

    this.x += this.xdir * this.speed
    this.y += this.ydir * this.speed

    this.bounceOnScreen(w, h)

    if (this.speed <= 0) {
      this.state = State.Normal
    }
  }

  private bounceOnScreen(w: number, h: number) {
    if (this.x <= 0 && this.xdir < 0) this.xdir *= -1
    else if (this.x >= w && this.xdir > 0) this.xdir *= -1
    if (this.y <= 0 && this.ydir < 0) this.ydir *= -1
    else if (this.y >= h && this.ydir > 0) this.ydir *= -1
  }

  private wiggle() {
    let rand = Math.random() > 0.5 ? 1 : -1
    this.x = this.x + rand * 2

    rand = Math.random() > 0.5 ? 1 : -1
    this.y = this.y + rand * 2
  }

  private death(game: Game) {
    // Shrink
    this.w = Math.max(0, this.w - 2)
    this.h = Math.max(0, this.h - 3.9)

    if (this.w == 0 || this.h == 0) {
      game.coins += this.value
      console.log('INCREASING COINS BY', this.value)
      this.state = State.Dead
    }
  }
}

export const coins = new CoinController()
