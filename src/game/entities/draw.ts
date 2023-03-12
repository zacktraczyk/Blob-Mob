import { input } from '../input'
import { enemies } from './enemy'
import { Entity } from './entity'
import { player } from './player'

const distance = ([x1, y1]: Point, [x2, y2]: Point) =>
  Math.abs(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)))

type Point = [number, number]

class DrawController {
  public instances: Array<Line>
  private currentPath: Line

  constructor() {
    this.instances = []
    this.currentPath = new Line()
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((draw) => draw.draw(ctx))
    this.currentPath.draw(ctx)
  }

  public controller() {
    for (let i = 0; i < this.instances.length; i++) {
      const line = this.instances[i]
      // if (line.state == State.Dead) {
      if (line.health <= 0) {
        this.instances.splice(i, 1)
        return
      }

      // check collision
      for (const enemy of enemies.instances) {
        if (line.collides(enemy)) {
          enemy.pushLine()
          // console.log("TOUCHING ENEMY AT:", enemy.x, enemy.y);
        }
      }
    }

    // Line
    // if (player.power < 0) {
    //   if (this.currentPath.points.length > 0) {
    //     this.instances.push(this.currentPath)
    //     this.currentPath = new Line();
    //   }
    // return;
    // }

    if (input.mouseDown && player.power > 0) {
      this.currentPath.add(input.mouse.x, input.mouse.y)
    } else {
      if (this.currentPath.points.length > 0) {
        this.currentPath.planning = false
        this.currentPath.fixDimensions()
        this.instances.push(this.currentPath)
        this.currentPath = new Line()
      }
    }
  }

  public spawn() {
    const draw = new Line()
    this.instances.push(draw)
  }

  public reset() {
    this.instances = []
  }

  public debug(ctx: CanvasRenderingContext2D) {
    const x = ctx.canvas.width - 300
    let y = ctx.canvas.height / 2

    ctx.fillStyle = 'black'
    ctx.font = '20px Ariel'
    ctx.fillText('x -- Line -- x', x, y)
    y += 20

    ctx.fillText('Mousedown:' + input.mouseDown, x, y)
    y += 20

    ctx.fillText(`Mouse pos: (${input.mouse.x}, ${input.mouse.y})`, x, y)
    y += 20

    ctx.fillText(`instances: ${this.instances.length}`, x, y)
    y += 40

    this.instances.forEach((draw) => {
      ctx.fillText(`Line points: ${draw.points.length}`, x, y)
      y += 20
      ctx.fillText(`Dimensions: (${draw.x}, ${draw.y}, ${draw.w}, ${draw.h}`, x, y)
      y += 40
    })
  }
}

class Line extends Entity {
  public points: Array<Point>
  public planning: boolean

  public x1: number
  public x2: number
  public y1: number
  public y2: number

  public health: number

  constructor() {
    super(0, 0, 0, 0)
    this.points = []
    this.planning = true

    this.x1 = 0
    this.x2 = 0
    this.y1 = 0
    this.y2 = 0

    this.health = 50
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 5
    ctx.strokeStyle = this.planning
      ? 'rgba(15, 15, 15, 0.4)'
      : `rgba(${(50 - this.health) * 4}, 
        0,
        0,
        ${(this.health + 5) / 50})`
    ctx.beginPath()
    this.points.forEach((point) => {
      ctx.lineTo(point[0], point[1])
    })
    ctx.stroke()
    ctx.closePath()

    // Debug
    // ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    // ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
  }

  public add(x: number, y: number) {
    const lastPoint: Point = this.points[this.points.length - 1]
    const currPoint: Point = [x, y]
    if (this.points.length == 0) {
      this.points.push([x, y])
      this.x1 = x
      this.y1 = y
      this.x2 = x
      this.y2 = y
      return
    }

    if (distance(lastPoint, currPoint) > 10) {
      // <++> TODO: Make sure line doesn't exceed a value, (makes super long line if move mouse fast enough)
      player.power--
      this.points.push([x, y])
      this.x1 = Math.min(this.x1, x)
      this.y1 = Math.min(this.y1, y)
      this.x2 = Math.max(this.x2, x)
      this.y2 = Math.max(this.y2, y)
    }
  }

  public fixDimensions() {
    this.x = (this.x1 + this.x2) / 2
    this.y = (this.y1 + this.y2) / 2
    this.w = this.x2 - this.x1
    this.h = this.y2 - this.y1
  }

  public collides(target: Entity | null) {
    if (target == null) {
      return false
    }
    if (
      !(
        this.x + this.w / 2 < target.x - target.w / 2 ||
        this.x - this.w / 2 > target.x + target.w / 2
      ) &&
      !(
        this.y + this.h / 2 < target.y - target.h / 2 ||
        this.y - this.h / 2 > target.y + target.w / 2
      )
    ) {
      for (const point of this.points) {
        if (distance(point, [target.x, target.y]) < 30) {
          this.health--
          return true
        }
      }
    }

    return false
  }
}

export const drawController = new DrawController()
