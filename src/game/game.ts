import { Scenes } from "./scenes/scenes";
import { player } from "./entities/player";
import { damagePoints } from "./entities/damagePoints";
import { enemies } from "./entities/enemy";
import { coins } from "./entities/coin";
import { input } from "./input";
import { drawController } from "./entities/draw";
import { Face } from "./shop/faces";

export class Game {
  public ctx: CanvasRenderingContext2D | null;
  public frame: number;
  public paused: boolean;
  private pauseKeyRelease: boolean;

  private scoreVal: number;
  public setScore: React.Dispatch<React.SetStateAction<number>> | undefined;

  public highscoreVal: number;
  public setHighscore: React.Dispatch<React.SetStateAction<number>> | undefined;

  public difficulty: number; // not used

  private coinVal: number;
  public setCoins: React.Dispatch<React.SetStateAction<number>> | undefined;

  public scene: Scenes;

  constructor() {
    this.ctx = null;
    this.difficulty = 5;

    this.scoreVal = 0;
    this.highscoreVal = 0;
    this.coinVal = 0;

    this.frame = 0;
    this.paused = false;
    this.pauseKeyRelease = true;

    this.scene = Scenes.menu;
  }

  // Score getter/setter
  public set score(val: number) {
    this.scoreVal = val;
    this.syncReactScore();
  }

  public get score() {
    return this.scoreVal;
  }

  // Coins getter/setter
  public set coins(val: number) {
    this.coinVal = val;
    this.syncReactCoins();
  }

  public get coins() {
    return this.coinVal;
  }

  // Highscore getter/setter
  public set highscore(val: number) {
    this.highscoreVal = val;
    this.syncReactHighscore();
  }

  public get highscore() {
    return this.highscoreVal;
  }
  // React hook calls
  public syncReactCoins() {
    if (!this.setCoins) {
      console.error(
        "Game: syncReactCoins: setCoins hook not passed to game Object"
      );
      return;
    }

    this.setCoins(this.coins);
  }

  public syncReactScore() {
    if (!this.setScore) {
      console.error(
        "Game: syncReactScore: setScore hook not passed to game Object"
      );
      return;
    }

    this.setScore(this.score);
  }

  public syncReactHighscore() {
    if (!this.setHighscore) {
      console.error(
        "Game: syncReactScore: setHighscore hook not passed to game Object"
      );
      return;
    }

    this.setHighscore(this.highscoreVal);
  }

  // Scene changes
  public gameOver() {
    this.scene = Scenes.gameOver;
  }

  public pause() {
    if (this.scene != Scenes.battle) {
      return;
    }

    if (input.keyState.pause) {
      if (this.pauseKeyRelease) {
        this.paused = !this.paused;
      }
      this.pauseKeyRelease = false;
    } else {
      this.pauseKeyRelease = true;
    }
  }

  public reset() {
    player.reset();
    enemies.reset();
    damagePoints.reset();
    coins.reset();
    drawController.reset();

    this.paused = false;
    this.score = 0;
    this.frame = 0;
  }

  public debug() {
    if (!this.ctx) return;
    const ctx = this.ctx;

    ctx.font = "20px Arial Bold";
    ctx.fillStyle = "black";
    let x = 40;
    let y = (ctx.canvas.height * 5) / 8 + 100;

    ctx.fillText("difficulty: " + this.difficulty, x, y);

    y += 30;
    ctx.fillText("player: ", x, y);

    x += 30;
    y += 20;
    ctx.fillText("speed: " + player.maxSpeed, x, y);

    // y += 20;
    // ctx.fillText("accel: " + player.accel, x, y);

    y += 20;
    ctx.fillText("cool: " + player.maxCool, x, y);

    y += 20;
    ctx.fillText("health: " + player.maxHealth, x, y);

    y += 30;
    x -= 30;
    ctx.fillText("enemy: ", x, y);

    x += 30;
    y += 20;
    ctx.fillText("speed: " + enemies.speed, x, y);

    y += 20;
    ctx.fillText("Spawn Rate: " + enemies.spawnWait + "s", x, y);

    y += 20;
    ctx.fillText("Max Number: " + enemies.maxInst, x, y);

    y += 40;
    if (enemies.instances != null) {
      ctx.fillText("Blobs: " + enemies.instances.length, x, y);
    }
  }
}
