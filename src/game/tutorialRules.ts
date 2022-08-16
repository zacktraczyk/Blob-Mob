import { game } from "@App";
import { Game } from "./gameAttributes";
import { Action } from "./entities/entity";
import { enemies } from "./entities/enemy";
import { input } from "./input";
import { player } from "./entities/player/player";

export enum Stage {
  move,
  enemy,
  push,
  bars,
  goodLuck,
  end,
}

class TurtorialRules {
  private timer: number;
  public stage: Stage;
  private check: boolean;

  private controlCheck: [0|1, 0|1, 0|1, 0|1];

  constructor() {
    this.timer = 0;
    this.stage = Stage.move;
    this.check = false;

    // Move
    this.controlCheck = [0, 0, 0, 0];
  }

  debug(ctx: CanvasRenderingContext2D) {
    ctx.font = "20px Arial Bold";
    ctx.strokeStyle = "black";

    let x = 40;
    let y = (ctx.canvas.height * 6) / 8 + 100;

    ctx.fillText("Stage: " + this.stage, x, y);
    y += 20;
    ctx.fillText("Timer: " + this.timer, x, y);

    switch (this.stage) {
      case Stage.enemy:
        y += 30;
        ctx.fillText(`Enemy State: ${enemies.instances[0].state}`, x, y);
        break;
      case Stage.push:
        break;
      case Stage.bars:
        break;
      case Stage.goodLuck:
        break;
    }
  }

  controller(w: number, h: number) {
    ++this.timer;
    const keys = input.keyState;

    if (this.check) {
      this.stage++;
      this.check = false;
    }

    switch (this.stage) {
      case Stage.move:
        // if every move direction hit &&
        // if timer > 200
        if (keys.right) this.controlCheck[0] = 1;
        if (keys.up) this.controlCheck[1] = 1;
        if (keys.left) this.controlCheck[2] = 1;
        if (keys.down) this.controlCheck[3] = 1;

        if (!this.controlCheck.includes(0) && this.timer > 200) {
          this.timer = 0;
          this.check = true;
        }

        break;
      case Stage.enemy:
        if (enemies.instances.length == 0) {
          enemies.spawn(w, h, player);
        }

        if (game.score == 1) {
          this.timer = 0;
          this.check = true;
          player.power = player.maxPower;
        }
        break;
      case Stage.push:
        if (enemies.instances.length <= 5) {
          enemies.spawn(w, h, player);
        }
        if (player.action == Action.Push) {
          this.timer = 0;
          this.check = true;
        }
        break;
      case Stage.bars:
        if (enemies.instances.length == 0) {
          this.timer = 0;
          this.check = true;
        }
        break;
      case Stage.goodLuck:
        if (this.timer > 300) {
          this.check = true;
        }
        break;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = 0;
    let y = 0;
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    let text = "";
    ctx.font = "30px Comic Sans MS";
    switch (this.stage) {
      case Stage.move:
        text = "Use WASD or Arrow Keys to Move";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = (h * 2) / 8;

        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.enemy:
        text = "This is an enemy! Use space to kill him";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = (h * 2) / 8;

        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.push:
        text = "More Homies! Push em away with Q";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = (h * 2) / 8;

        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.bars:
        ctx.lineWidth = 3;

        // COOLDOWN

        // Arrow stem
        ctx.beginPath();
        ctx.moveTo((w * 5) / 8 - 20, 145);
        ctx.lineTo((w * 5) / 8, 80);
        ctx.stroke();
        ctx.closePath();

        // Arrow left tip
        ctx.beginPath();
        ctx.moveTo((w * 5) / 8, 80);
        ctx.lineTo((w * 5) / 8 - 10, 85);
        ctx.stroke();
        ctx.closePath();

        // Arrow right tip
        ctx.beginPath();
        ctx.moveTo((w * 5) / 8, 80);
        ctx.lineTo((w * 5) / 8 + 5, 89);
        ctx.stroke();
        ctx.closePath();

        // POWER

        // Arrow stem
        ctx.beginPath();
        ctx.moveTo((w * 7) / 8 - 20, 145);
        ctx.lineTo((w * 7) / 8, 80);
        ctx.stroke();
        ctx.closePath();

        // Arrow left tip
        ctx.beginPath();
        ctx.moveTo((w * 7) / 8, 80);
        ctx.lineTo((w * 7) / 8 - 10, 85);
        ctx.stroke();
        ctx.closePath();

        // Arrow right tip
        ctx.beginPath();
        ctx.moveTo((w * 7) / 8, 80);
        ctx.lineTo((w * 7) / 8 + 5, 89);
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.font = "25px Comic Sans MS";

        text = "Cooldown";
        x = (w * 5) / 8 - 20 - ctx.measureText(text).width / 2;
        y = 170;
        ctx.fillText(text, x, y);

        text = "Power";
        x = (w * 7) / 8 - 20 - ctx.measureText(text).width / 2;
        y = 170;
        ctx.fillText(text, x, y);

        ctx.font = "30px Comic Sans MS";
        text = "Attacks and specials have a Cooldown,";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = (h * 2) / 8;
        ctx.fillText(text, x, y);

        ctx.font = "30px Comic Sans MS";
        text = "specials require full Power";
        x = w / 2 - ctx.measureText(text).width / 2;
        y += 34;
        ctx.fillText(text, x, y);

        break;
      case Stage.goodLuck:
        text = "Kill as many Blobs as you can,";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = (h * 2) / 8;
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);

        text = "Good luck!";
        x = w / 2 - ctx.measureText(text).width / 2;
        y += 34;
        ctx.fillText(text, x, y);
        break;
    }
  }

  public reset() {
    this.timer = 0;
    this.stage = Stage.move;
    this.check = false;
    this.controlCheck = [0, 0, 0, 0];
  }
}

export const tutorialRules = new TurtorialRules();