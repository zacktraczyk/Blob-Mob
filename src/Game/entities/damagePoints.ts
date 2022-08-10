import { Entity } from "./entity";

class DamagePointController {
  private interval: number;
  private maxPoints: number;
  private cool: number;

  private instances: Array<DamagePoint>;

  constructor() {
    this.interval = 5;
    this.maxPoints = 5;
    this.cool = 0;

    this.instances = new Array();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.instances.forEach((dp) => dp.draw(ctx));
  }

  public controller() {
    if (this.cool > 0) --this.cool;
    for (let i = 0; i < this.instances.length; i++) {
      if (this.instances[i].life <= 0) {
        this.instances.splice(i, 1);
      } else {
        this.instances[i].live();
      }
    }
  }

  public spawn(entity: Entity) {
    if (this.instances.length < this.maxPoints && this.cool <= 0) {
      let dp = new DamagePoint(entity);
      this.instances.push(dp);
      this.cool = this.interval;
    }
  }

  public reset() {
    this.instances = new Array();
    this.cool = 0;
  }
}

class DamagePoint extends Entity {
  public life: number;

  constructor(player: Entity) {
    super(player.x, player.y, 0, 0);

    let w = player.w;
    let h = player.h;

    // Spawn
    let rand = Math.random();
    if (rand < 0.5) {
      // side
      this.x += rand < 0.5 ? -w / 2 - 1 : w / 2 + 1;
      rand = Math.random();
      this.y += rand * (h + 10) - 5;
    } else {
      // top/bottom
      this.x += rand * (w + 10) - 5;
      rand = Math.random();
      this.y += rand < 0.5 ? -h / 2 - 1 : h / 2 + 1;
    }
    this.life = 100;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "18px Comic Sans MS";
    ctx.fillStyle = `rgba(225, 0, 0, ${this.life / 100})`;
    ctx.fillText("-1", this.x, this.y);
  }

  public live() {
    if (this.life > 0) --this.life;
  }
}

export const damagePoints = new DamagePointController();
