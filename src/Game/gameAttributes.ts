import { Scenes } from "./scenes/scenes";
import { player } from "./entities/player";
import { damagePoints } from "./entities/damagePoints";
import { enemies } from "./entities/enemy";
import { coins } from "./entities/coin";
import { input } from "./input";
import { drawController } from "./entities/draw";

export class GameAttributes {
  public frame: number;
  public paused: boolean;

  private scoreVal: number;
  public setScore: React.Dispatch<React.SetStateAction<number>> | undefined;

  public highscore: number;
  public difficulty: number; // not used

  private coinVal: number;
  public setCoins: React.Dispatch<React.SetStateAction<number>> | undefined;

  private pauseKeyRelease: boolean;

  private fxSound: number;
  private musSound: number;

  public scene: Scenes;

  constructor() {
    this.difficulty = 5;

    this.scoreVal = 0;
    this.highscore = 0;
    this.coinVal = 0;

    this.frame = 0;
    this.paused = false;
    this.pauseKeyRelease = true;

    this.fxSound = 1;
    this.musSound = 0.5;

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

  // React hook calls
  public syncReactCoins() {
    if (!this.setCoins) {
      console.error(
        "gameAttributes: syncReactCoins: setCoins hook not passed to GameAttributes Object"
      );
      return;
    }

    this.setCoins(this.coins);
  }

  public syncReactScore() {
    if (!this.setScore) {
      console.error(
        "gameAttributes: syncReactScore: setScore hook not passed to GameAttributes Object"
      );
      return;
    }

    this.setScore(this.score);
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

  // public debug(ctx: CanvasRenderingContext2D) {
  //     ctx.font = '20px Arial Bold';
  //     ctx.fillStyle = 'black';

  //     let x = 40;
  //     let y = ctx.canvas.height * 5 / 8 + 100;

  //     ctx.fillText('difficulty: ' + this.difficulty, x, y);

  //     y += 30;
  //     ctx.fillText('player: ', x, y);

  //     x += 30;
  //     y += 20;
  //     ctx.fillText('speed: ' + player.maxSpeed, x, y);

  //     y += 20;
  //     ctx.fillText('accel: ' + player.accel, x, y);

  //     y += 20;
  //     ctx.fillText('cool: ' + player.maxCool, x, y);

  //     y += 20;
  //     ctx.fillText('health: ' + player.maxHealth, x, y);

  //     y += 30;
  //     x -= 30;
  //     ctx.fillText('enemy: ', x, y);

  //     x += 30;
  //     y += 20;
  //     ctx.fillText('speed: ' + enemyController.speed, x, y);

  //     y += 20;
  //     ctx.fillText('Spawn Rate: ' + enemyController.spawnWait + 's', x, y);

  //     y += 20;
  //     ctx.fillText('Max Number: ' + enemyController.maxInst, x, y);

  //     y += 40;
  //     if (enemyController.instances != null) {
  //         ctx.fillText('Blobs: ' + enemyController.instances.length, x, y);
  //     }
  // }
}
