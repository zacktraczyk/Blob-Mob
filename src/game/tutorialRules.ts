import { game } from "@App";
import { Game } from "./game";
import { Action } from "./entities/entity";
import { enemies, Enemy } from "./entities/enemy";
import { input } from "./input";
import { player } from "./entities/player";
import { drawArrow } from "./scenes/sceneElements";
import { drawController } from "./entities/draw";

export enum Stage {
  move,
  enemy,
  cooldown,
  power,
  draw_approach,
  draw_gesture,
  draw_break,
  coins,
  goodLuck,
  end,
}

class TurtorialRules {
  private stageTimer: number;
  public stage: Stage;
  private check: boolean;

  private controlCheck: [0 | 1, 0 | 1, 0 | 1, 0 | 1];

  constructor() {
    this.stageTimer = 0;
    this.stage = Stage.move;
    this.check = false;

    // Move
    this.controlCheck = [0, 0, 0, 0];
  }

  controller(w: number, h: number) {
    ++this.stageTimer;
    const keys = input.keyState;

    if (this.check) {
      this.stage++;
      this.stageTimer = 0;
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

        if (!this.controlCheck.includes(0) && this.stageTimer > 200) {
          this.check = true;
        }
        break;
      case Stage.enemy:
        if (enemies.instances.length == 0) enemies.spawn(w, h, player);
        if (game.score == 1) this.check = true;
        break;
      case Stage.cooldown:
        player.power = 0;
        if (enemies.instances.length < 2) enemies.spawn(w, h, player);
        if (this.stageTimer > 800) {
          this.check = true;
        }
        break;
      case Stage.power:
        if (enemies.instances.length < 2) enemies.spawn(w, h, player);

        if (this.stageTimer > 1000 && player.power >= player.maxPower) {
          this.check = true;
        }
        break;
      case Stage.draw_approach:
        if (enemies.instances.length < 5) enemies.spawn(w, h, player);

        if (this.stageTimer > 200) {
          enemies.instances.forEach((enemy) => {
            if (enemy.distance < 300) {
              game.paused = true;
            }
          });
        }

        if (game.paused) this.check = true;
        break;
      case Stage.draw_gesture:
        if (enemies.instances.length < 5) enemies.spawn(w, h, player);

        const enemy = enemies.instances[0];
        if (player.power <= 0) {
          game.paused = false;
          this.check = true;
        }
        break;
      case Stage.draw_break:
        if (enemies.instances.length < 5) enemies.spawn(w, h, player);

        if (
          drawController.instances.length <= 0 ||
          (this.stageTimer > 2000 &&
            drawController.instances[0] &&
            drawController.instances[0].health <= 50)
        ) {
          this.check = true;
        }
        break;
      case Stage.coins:
        if (enemies.instances.length <= 0) this.check = true;
        break;
      case Stage.goodLuck:
        if (this.stageTimer > 300) {
          this.check = true;
        }
        break;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    let x = 0;
    let y = h * (3 / 4);

    // Bar Arrows
    const hudHeight = h * (2 / 40) + 40;
    const arrowHeight = 100;
    const arrowPadding = 20;

    let text = "";
    ctx.font = "30px Comic Sans MS";
    switch (this.stage) {
      case Stage.move:
        text = "Use WASD or Arrow Keys to Move";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);

        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.enemy:
        text = "This is an enemy! Use space to kill him";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);

        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.cooldown:
        text = "You can't attack while your cooling down";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);

        // Arrow
        drawArrow(
          ctx,
          w * (5 / 8) - 10,
          hudHeight + arrowPadding + arrowHeight,
          w * (5 / 8) + 10,
          hudHeight + arrowPadding
        );

        text = "cooldown";
        x = w * (5 / 8) - 10 - ctx.measureText(text).width / 2;
        y = hudHeight + arrowPadding * 3 + arrowHeight;
        ctx.fillText(text, x, y);

        break;
      case Stage.power:
        text = "Killing blobs gets you power";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);

        // Arrow
        drawArrow(
          ctx,
          w * (7 / 8) + 10,
          hudHeight + arrowPadding + arrowHeight,
          w * (7 / 8) - 10,
          hudHeight + arrowPadding
        );

        text = "power";
        x = w * (7 / 8) + 10 - ctx.measureText(text).width / 2;
        y = hudHeight + arrowPadding * 3 + arrowHeight;
        ctx.fillText(text, x, y);
        break;
      case Stage.draw_approach:
        text = "Sometimes you may get overwhelmed...";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.draw_gesture:
        text = "Draw walls on the screen to protect yourself";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);
        break;
      case Stage.coins:
        text = "Collect coins and kill enemies,";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
        ctx.fillStyle = "black";
        ctx.fillText(text, x, y);

        text = "use your coins to update your stats and outfit";
        x = w / 2 - ctx.measureText(text).width / 2;
        y += 34;
        ctx.fillText(text, x, y);
        break;
      case Stage.goodLuck:
        text = "Kill as many Blobs as you can,";
        x = w / 2 - ctx.measureText(text).width / 2;
        y = h * (3 / 4);
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
    this.stageTimer = 0;
    this.stage = Stage.move;
    this.check = false;
    this.controlCheck = [0, 0, 0, 0];
  }

  debug(ctx: CanvasRenderingContext2D) {
    ctx.font = "20px Arial Bold";
    ctx.strokeStyle = "black";

    let x = 40;
    let y = (ctx.canvas.height * 6) / 8 + 100;

    ctx.fillText("Stage: " + this.stage, x, y);
    y += 20;
    ctx.fillText("Timer: " + this.stageTimer, x, y);

    switch (this.stage) {
      case Stage.enemy:
        y += 30;
        ctx.fillText(`Enemy State: ${enemies.instances[0].state}`, x, y);
        break;
      case Stage.goodLuck:
        break;
    }
  }
}

export const tutorialRules = new TurtorialRules();
