import { input } from "../input";
import { Entity, State } from "./entity";
import { player } from "./player";

const distance = ([x1, y1]: Point, [x2, y2]: Point) =>
  Math.abs(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));

type Point = [number, number];

class DrawController {
  public instances: Array<Draw>;
  private currentPath: Draw;

  constructor() {
    this.instances = new Array();
    this.currentPath = new Draw();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((draw) => draw.draw(ctx));
    this.currentPath.draw(ctx);
  }

  public controller(w: number, h: number) {
    // check collision
    // for (let i = 0; i < this.instances.length; i++) {
    //   if (this.instances[i].state == State.Dead) {
        // this.instances.splice(i, 1);
      // } else {
        
        // if (this.instances[i].collides()) {
        //   console.log()
        // }
        
    //   }
    // }

    // Draw
    // if (player.power <= 20) {
    //   if (this.currentPath.points.length > 0) {
    //     this.instances.push(this.currentPath)
    //     this.currentPath = new Draw();
    //   }
    //   return;
    // }

    if (input.mouseDown) {
      this.currentPath.add(input.mouse.x, input.mouse.y);
      // player.power--;
    } else {
      if (this.currentPath.points.length > 0) {
        this.currentPath.planning = false;
        this.currentPath.fixDimensions();
        this.instances.push(this.currentPath);
        this.currentPath = new Draw();
      }
    }
  }

  public spawn(x: number, y: number) {
    let draw = new Draw();
    this.instances.push(draw);
  }

  public reset() {
    this.instances = new Array();
  }

  public debug(ctx: CanvasRenderingContext2D) {
    let x = ctx.canvas.width - 300;
    let y = ctx.canvas.height / 2;

    ctx.fillStyle = "black";
    ctx.font = "20px Ariel";
    ctx.fillText("x -- Draw -- x", x, y);
    y += 20;

    ctx.fillText("Mousedown:" + input.mouseDown, x, y);
    y += 20;

    ctx.fillText(`Mouse pos: (${input.mouse.x}, ${input.mouse.y})`, x, y);
    y += 20;

    ctx.fillText(`instances: ${this.instances.length}`, x, y);
    y += 40;

    this.instances.forEach((draw) => {
      ctx.fillText(`Line points: ${draw.points.length}`, x, y);
      y += 20;
      ctx.fillText(
        `Dimensions: (${draw.x}, ${draw.y}, ${draw.w}, ${draw.h}`,
        x,
        y
      );
      y += 40;
    });
  }
}

class Draw extends Entity{
  public points: Array<Point>;
  public planning: boolean;

  public x1: number;
  public x2: number;
  public y1: number;
  public y2: number;

  constructor() {
    super(0,0,0,0);
    this.points = new Array();
    this.planning = true;
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.planning ? "gray" : "black";
    ctx.beginPath();
    this.points.forEach((point) => {
      ctx.lineTo(point[0], point[1]);
    });
    ctx.stroke();
    ctx.closePath();
  }

  public add(x: number, y: number) {
    const lastPoint: Point = this.points[this.points.length - 1];
    const currPoint: Point = [x, y];
    if (this.points.length == 0) {
      this.points.push([x, y]);
      this.x1 = x;
      this.y1 = y;
      this.x2 = x;
      this.y2 = y;
      return;
    }

    if (distance(lastPoint, currPoint) > 10) {
      this.points.push([x, y]);
      this.x1 = Math.min(this.x1, x);
      this.y1 = Math.min(this.y1, y);
      this.x2 = Math.max(this.x2, x);
      this.y2 = Math.min(this.y2, y);
    }
  }

  public fixDimensions() {
    this.x = this.x1;
    this.y = this.y1;
    this.w = this.x2;
    this.h = this.y2;
  }

  public collides(target: Entity | null) {
    if (target == null) {
      return false;
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
      return true;
    }

    return false;
  }
}

export const drawController = new DrawController();
