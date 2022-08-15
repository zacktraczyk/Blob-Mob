import { GameAttributes } from "../gameAttributes";
import { Entity, State } from "./entity";
import { player } from "./player";

class CoinController {
  public instances: Array<Coin>;

  constructor() {
    this.instances = new Array();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((dp) => dp.draw(ctx));
  }

  public controller(game: GameAttributes, w: number, h: number) {
    for (let i = 0; i < this.instances.length; i++) {
      if (this.instances[i].state == State.Dead) {
        this.instances.splice(i, 1);
      } else {
        this.instances[i].controller(game, w, h);
      }
    }
  }

  public spawn(x: number, y: number) {
    let coin = new Coin(x, y);
    this.instances.push(coin);
  }

  public reset() {
    this.instances = new Array();
  }
}

class Coin extends Entity {
  readonly value: number;

  private xdir: number;
  private ydir: number;
  public speed: number;
  readonly accel: number;

  public timer: number;

  constructor(x: number, y: number) {
    super(x, y, 30, 25);
    this.state = State.Spawn;

    this.value = 1;

    this.xdir = 0;
    this.ydir = 0;
    this.speed = 0;
    this.accel = 0.1;

    this.timer = 10;

    // Set velocity for launch
    if (player && player.state < State.Dying) {
      // <++> TODO: Add coin launch variance
      const [xvel, yvel] = player.velocity;
      const mag = Math.sqrt(xvel * xvel + yvel * yvel);
      console.log("MAGNITUDE", mag);
      console.log(`xvel, yvel: (${xvel}, ${yvel})`);

      this.xdir = xvel != 0 ? xvel / mag : 0;
      this.ydir = yvel != 0 ? yvel / mag : 0;
      console.log(`xvel / this.speed = ${xvel} / ${this.speed}`, xvel/ this.speed)
      console.log(`xdir, ydir: (${this.xdir}, ${this.ydir})`);

      this.speed = mag * 2.5;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    // Back Oval
    const offset = 5;
    if (this.w <= 0 || this.h <= 0) return;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.ellipse(
      this.x - this.w / 2,
      this.y - this.h / 2,
      this.w / 2 - offset / 2,
      this.h / 2,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();

    // Front OVal
    ctx.fillStyle = "#b3b300";
    ctx.beginPath();
    ctx.ellipse(
      this.x - this.w / 2 + offset,
      this.y - this.h / 2,
      this.w / 2 - offset / 2,
      this.h / 2,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();

    if (this.state > State.Normal) return;
    // Label
    ctx.fillStyle = "black";
    ctx.font = "22px monospace";
    const text = "$";
    ctx.fillText(text, this.x - 9 - offset, this.y - 9);
  }

  public controller(game: GameAttributes, w: number, h: number) {
    // console.log(`X Y coords: (${this.x}, ${this.y})`)
    // console.log(`xdir ydir: (${this.xdir}, ${this.ydir})`)
    // console.log(`speed: ${this.speed}`)
    switch (this.state) {
      case State.Spawn:
        this.launch(w, h);
        break;

      case State.Normal:
        if (game.frame % 10 == 0) {
          this.wiggle();
        }
        break;

      case State.Dying:
        this.death(game);
        break;
    }
  }

  private launch(w: number, h: number) {
    if (this.timer > 0) {
      this.timer--;
    }

    this.speed -= this.accel;

    this.x += this.xdir * this.speed;
    this.y += this.ydir * this.speed;

    this.bounceOnScreen(w, h);

    if (this.speed <= 0) {
      this.state = State.Normal;
    }
  }

  private bounceOnScreen(w: number, h: number) {
    if (this.x <= 0 && this.xdir < 0) this.xdir *= -1;
    else if (this.x >= w && this.xdir > 0) this.xdir *= -1;
    if (this.y <= 0 && this.ydir < 0) this.ydir *= -1;
    else if (this.y >= h && this.ydir > 0) this.ydir *= -1;
  }

  private wiggle() {
    let rand = Math.random() > 0.5 ? 1 : -1;
    this.x = this.x + rand * 2;

    rand = Math.random() > 0.5 ? 1 : -1;
    this.y = this.y + rand * 2;
  }

  private death(game: GameAttributes) {
    // Shrink
    this.w = Math.max(0, this.w - 2);
    this.h = Math.max(0, this.h - 3.9);

    if (this.w == 0 || this.h == 0) {
      game.coins += this.value;
      this.state = State.Dead;
    }
  }
}

export const coins = new CoinController();
