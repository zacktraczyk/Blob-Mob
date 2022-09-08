import { State, Action, Entity } from "./entity";
import { input, Input } from "../input";
import { damagePoints } from "./damagePoints";
import { enemies } from "./enemy";
import { coins } from "./coin";
import { game } from "../../App";
import { FaceAttr, FaceFunction, Face } from "../shop/faces";
import faceNormal from "@Game/shop/faces/faceNormal";
import { Body } from "@Game/shop/bodies";
import { Hat } from "@Game/shop/hats";
import Stat from "@Game/shop/stats";
import { clamp } from "@Game/util";

const colorDamage = "#ff6d6d";

// Used for shop updates
export interface PlayerAttributes {
  maxSpeed: number;
  maxCool: number;
  maxPower: number;
  maxHealth: number;
}

export class Player extends Entity {
  // Faces are assigned in Shop View
  public body: keyof typeof Body;
  public face: keyof typeof Face;
  public hat: keyof typeof Hat;
  public frownCount: number;
  readonly frownCountMax: number;

  private accel: number;
  private xdir: number;
  private ydir: number;
  public xvel: number;
  public yvel: number;

  public action: Action;
  public damaging: boolean;

  private pushRadius: number;
  private pushR: number;
  private timer: number;

  // Adjustable
  public maxSpeed: number;
  public maxCool: number;
  public maxPower: number;
  public maxHealth: number;
  // ---

  public cool: number;
  public power: number;
  public health: number;

  constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);

    this.body = "normal";
    this.face = "normal";
    this.hat = "normal";
    this.state = State.Normal;
    this.frownCount = 0;
    this.frownCountMax = 30;

    this.accel = 0.4;
    this.xdir = 1;
    this.ydir = 0;
    this.xvel = 0;
    this.yvel = 0;

    this.action = Action.Normal;
    this.damaging = false;

    this.pushRadius = 240;
    this.pushR = 0;
    this.timer = 0;

    this.maxSpeed = Stat.maxSpeed.initial;
    this.maxHealth = Stat.maxHealth.initial;
    this.maxPower = Stat.maxPower.initial;
    this.maxCool = Stat.maxCool.initial;

    this.health = this.maxHealth;
    this.power = 0;
    this.cool = 0;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    // Draws body
    Body[this.body].draw(ctx, player);

    // Draws Face
    Face[this.face].draw(ctx, player);

    // Draws Hat
    Hat[this.hat].draw(ctx, player);

    if (this.action == Action.Push) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.pushR, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }
  }

  // Controllers --------------------
  public controller(w: number, h: number) {
    if (this.state == State.Dead) {
      this.damaging = true;
      return;
    }

    this.actionController(w, h, input.keyState);

    // Update Position
    this.x += this.xvel;
    this.y += this.yvel;

    // Cooldown
    if (this.action != Action.Push && this.cool > 0) {
      --this.cool;
      // Change smile to meh face
      if (this.frownCount < this.frownCountMax * 0.5) this.frownCount++;
    }

    this.healthController();

    // Check Coin Collisions
    if (coins) {
      coins.instances.forEach((coin) => {
        if (
          this.collides(coin) &&
          (coin.state == State.Normal ||
            (coin.state == State.Spawn && coin.timer <= 0))
        ) {
          coin.state = State.Dying;
        }
      });
    }

    // Check for death
    if (this.health <= 0) {
      this.state = State.Dead;
    }
  }

  private actionController(w: number, h: number, keys: Input["keyState"]) {
    if (this.cool <= 0) {
      this.cool = 0;
      if (keys.attack) {
        this.action = Action.Attack;
      } else if (keys.push && this.power == this.maxPower) {
        this.action = Action.Push;
      }
    }

    // Action Follow through
    switch (this.action) {
      case Action.Attack:
        this.attack(w, h, 8);
        return; // exit control loop

      case Action.Normal:
        this.move(w, h, keys);
        break;

      case Action.Push:
        this.move(w, h, keys);
        this.pushField(600);
        break;
    }
  }

  private healthController() {
    if (this.damaging) {
      this.health--;
      this.frownCount++;
      if (damagePoints != null) {
        damagePoints.spawn(this);
      }
    } else {
      if (this.cool <= 0) this.frownCount--;
    }

    this.frownCount = clamp(this.frownCount, 0, this.frownCountMax);
  }

  // Actions --------------------
  private move(w: number, h: number, dir: Input["keyState"]) {
    if (dir.right) this.xvel += this.accel;
    if (dir.left) this.xvel -= this.accel;
    if (dir.down) this.yvel += this.accel;
    if (dir.up) this.yvel -= this.accel;

    // Decrease speed if keyup
    if (!dir.right && !dir.left) {
      if (Math.abs(this.xvel) <= this.accel) this.xvel = 0;
      else if (this.xvel > 0) this.xvel -= this.accel * 1.5;
      else if (this.xvel < 0) this.xvel += this.accel * 1.5;
    }
    if (!dir.down && !dir.up) {
      if (Math.abs(this.yvel) <= this.accel) this.yvel = 0;
      else if (this.yvel > 0) this.yvel -= this.accel * 1.5;
      else if (this.yvel < 0) this.yvel += this.accel * 1.5;
    }

    this.xvel = clamp(this.xvel, -this.maxSpeed, this.maxSpeed);
    this.yvel = clamp(this.yvel, -this.maxSpeed, this.maxSpeed);
    this.calculateDir(); // Needed for Attack

    if (game.frame % 10 == 0) this.wiggle(50, 69);
    this.keepOnScreen(w, h);
  }

  private attack(w: number, h: number, duration: number) {
    ++this.timer;
    this.cool += this.maxCool / duration;

    const xspeed = Math.max(10, Math.abs(this.xvel) * 2);
    const yspeed = Math.max(10, Math.abs(this.yvel) * 2);
    this.x += this.xdir * xspeed;
    this.y += this.ydir * yspeed;

    this.keepOnScreen(w, h);

    // End attack
    if (this.timer >= duration) {
      this.xvel = 0;
      this.yvel = 0;
      this.timer = 0;
      this.action = Action.Normal;
    }
  }

  private pushField(duration: number) {
    ++this.timer;
    this.power -= this.maxPower / duration;
    this.cool += this.maxCool / duration;

    enemies.instances.forEach((enemy) => {
      if (enemy.state != State.Dying && enemy.state != State.Dead) {
        this.pushR = Math.min(this.timer / (duration / 4), 1) * this.pushRadius;

        enemy.pushField(this.pushR);
      }
    });

    if (this.timer >= duration) {
      this.pushR = 0;
      this.power = 0;
      this.timer = 0;
      this.action = Action.Normal;
    }
  }

  public shrink(dx: number, dy: number, s: number) {
    s = clamp(s / 2, 55, 60 + s / 2);
    this.wiggle(55, s);

    this.x += dx;
    this.y += dy;
  }

  // Helper Methods --------------------
  private calculateDir() {
    let mag = Math.sqrt(this.xvel * this.xvel + this.yvel * this.yvel);
    if (mag > 0) {
      this.xdir = this.xvel / mag;
      this.ydir = this.yvel / mag;
    }
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

  private wiggle(min: number, max: number) {
    let rand = Math.random() > 0.5 ? 1 : -1;
    this.x = this.x + rand;

    rand = Math.random() > 0.5 ? 1 : -1;
    this.y = this.y + rand;

    rand = Math.random() > 0.5 ? 1 : -1;
    this.w = clamp(this.w + rand, min, max);

    rand = Math.random() > 0.5 ? 1 : -1;
    this.h = clamp(this.h + rand, min, max);
  }

  private keepOnScreen(w: number, h: number) {
    this.x = clamp(this.x, this.w / 2 + 5, w - this.w / 2 - 5);
    this.y = clamp(this.y, this.h / 2 + 5, h - this.h / 2 - 5);
    // this.x = 250;
    // this.y = 250;
  }

  public reset() {
    this.health = this.maxHealth;
    this.power = 0;
    this.cool = 0;
    this.state = State.Normal;
    this.action = Action.Normal;

    this.xvel = 0;
    this.yvel = 0;

    this.frownCount = this.frownCountMax * 0.6;
  }

  public updatePower() {
    if (this.power < this.maxPower) {
      this.power += 2;
    } else {
      this.power = this.maxPower;
    }
  }

  public get velocity() {
    return [this.xvel, this.yvel];
  }
  // Attribute Methods --------------------
  public getAttributes(): PlayerAttributes {
    return {
      maxSpeed: this.maxSpeed,
      maxCool: this.maxCool,
      maxHealth: this.maxHealth,
      maxPower: this.maxPower,
    };
  }

  public updateAttributes(attributes: PlayerAttributes) {
    this.maxSpeed = attributes.maxSpeed;
    this.maxCool = attributes.maxCool;
    this.maxHealth = attributes.maxHealth;
    this.health = this.maxHealth;
  }

  public increaseAttrSpeed(val: number) {
    this.maxSpeed += val;
  }

  public increaseAttrHealth(val: number) {
    this.maxHealth += val;
  }

  public increaseAttrPower(val: number) {
    this.maxPower += val;
  }

  public increaseAttrCool(val: number) {
    this.maxCool += val;
    if (this.maxCool <= 30) this.maxCool = 30;
  }
}

export const player = new Player(250, 250, 250, 250);
