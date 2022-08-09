import { EnemyController } from "./entities/enemy";
import { Input } from "./input";
import { Action } from "./entities/entity";
import { Player } from "./entities/player";
import { GameAttributes } from "./gameAttributes";

export class TurtorialRules {

  private timer: number;
  private order: Array<String>;
  private i: number;
  private check: boolean;

  private controlCheck: Array<Number>;

  constructor() {
    this.timer = 0
    this.order = ['move', 'enemy', 'push', 'bars', 'goodLuck', 'end']
    this.i = 0
    this.check = false

    // Move
    this.controlCheck = [0, 0, 0, 0]
  }

  get step() {
    return this.order[this.i]
  }

  debug(game: GameAttributes, enemies: EnemyController, ctx: CanvasRenderingContext2D) {
    ctx.font = "20px Arial Bold"
    ctx.strokeStyle = "black"

    let x = 40
    let y = ctx.canvas.height * 6 / 8 + 100

    ctx.fillText("Stage: " + this.step, x, y)
    y += 20
    ctx.fillText("Timer: " + this.timer, x, y)

    switch (this.step) {
      case 'enemy':
        y += 30
        ctx.fillText(`Enemy State: ${enemies.instances[0].state}`, x, y)
        break
      case 'push':
        break
      case 'bars':
        break
      case 'goodLuck':
        break
    }
  }

  controller(game: GameAttributes, w: number, h: number, keys: Input['keyState'], enemies: EnemyController, player: Player) {
    ++this.timer

    if (this.check) {
      this.i++
      this.check = false
    }

    switch (this.step) {
      case 'move':

        // if every move direction hit &&
        // if timer > 200
        if (keys.right) this.controlCheck[0] = 1
        if (keys.up) this.controlCheck[1] = 1
        if (keys.left) this.controlCheck[2] = 1
        if (keys.down) this.controlCheck[3] = 1

        if (!this.controlCheck.includes(0) && this.timer > 200) {
          this.timer = 0
          this.check = true
        }

        break
      case 'enemy':
        if (enemies.instances.length == 0) {
          enemies.spawn(w, h, player);
        }

        if (game.score == 1) {
          this.timer = 0
          this.check = true
          player.power = player.maxPower
        }
        break
      case 'push':
        if (enemies.instances.length <= 5) {
          enemies.spawn(w, h, player)
        }
        if (player.action == Action.Push) {
          this.timer = 0
          this.check = true
        }
        break
      case 'bars':
        if (enemies.instances.length == 0) {
          this.timer = 0
          this.check = true
        }
        break
      case 'goodLuck':
        if (this.timer > 300) {
          this.check = true
        }
        break
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = 0
    let y = 0
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    let text = ''
    ctx.font = "30px Comic Sans MS"
    switch (this.step) {
      case 'move':
        text = 'Use WASD or Arrow Keys to Move'
        x = w / 2 - ctx.measureText(text).width / 2
        y = h * 2 / 8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
        break
      case 'enemy':
        text = 'This is an enemy! Use space to kill him'
        x = w / 2 - ctx.measureText(text).width / 2
        y = h * 2 / 8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
        break
      case 'push':
        text = 'More Homies! Push em away with Q'
        x = w / 2 - ctx.measureText(text).width / 2
        y = h * 2 / 8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
        break
      case 'bars':
        ctx.lineWidth = 3

        // COOLDOWN

        // Arrow stem
        ctx.beginPath();
        ctx.moveTo(w * 5 / 8 - 20, 145)
        ctx.lineTo(w * 5 / 8, 80)
        ctx.stroke()
        ctx.closePath()

        // Arrow left tip
        ctx.beginPath();
        ctx.moveTo(w * 5 / 8, 80)
        ctx.lineTo(w * 5 / 8 - 10, 85)
        ctx.stroke()
        ctx.closePath()

        // Arrow right tip
        ctx.beginPath();
        ctx.moveTo(w * 5 / 8, 80)
        ctx.lineTo(w * 5 / 8 + 5, 89)
        ctx.stroke()
        ctx.closePath()

        // POWER

        // Arrow stem
        ctx.beginPath();
        ctx.moveTo(w * 7 / 8 - 20, 145)
        ctx.lineTo(w * 7 / 8, 80)
        ctx.stroke()
        ctx.closePath()

        // Arrow left tip
        ctx.beginPath();
        ctx.moveTo(w * 7 / 8, 80)
        ctx.lineTo(w * 7 / 8 - 10, 85)
        ctx.stroke()
        ctx.closePath()

        // Arrow right tip
        ctx.beginPath();
        ctx.moveTo(w * 7 / 8, 80)
        ctx.lineTo(w * 7 / 8 + 5, 89)
        ctx.stroke()
        ctx.closePath()

        ctx.fillStyle = 'black'
        ctx.font = "25px Comic Sans MS"

        text = 'Cooldown'
        x = w * 5 / 8 - 20 - ctx.measureText(text).width / 2
        y = 170
        ctx.fillText(text, x, y)

        text = 'Power'
        x = w * 7 / 8 - 20 - ctx.measureText(text).width / 2
        y = 170
        ctx.fillText(text, x, y)


        ctx.font = "30px Comic Sans MS"
        text = 'Attacks and specials have a Cooldown,'
        x = w / 2 - ctx.measureText(text).width / 2
        y = h * 2 / 8
        ctx.fillText(text, x, y)

        ctx.font = "30px Comic Sans MS"
        text = 'specials require full Power'
        x = w / 2 - ctx.measureText(text).width / 2
        y += 34
        ctx.fillText(text, x, y)

        break
      case 'goodLuck':
        text = 'Kill as many Blobs as you can,'
        x = w / 2 - ctx.measureText(text).width / 2
        y = h * 2 / 8
        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)

        text = 'Good luck!'
        x = w / 2 - ctx.measureText(text).width / 2
        y += 34
        ctx.fillText(text, x, y)
        break
    }
  }

  public reset() {
    this.timer = 0
    this.i = 0
    this.check = false
    this.controlCheck = [0, 0, 0, 0]
  }
}

export const tutorialRules = new TurtorialRules();