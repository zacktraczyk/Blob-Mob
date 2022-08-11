import { game } from "../App";
import { enemies } from "./entities/enemy";
import { GameAttributes } from "./gameAttributes";
// DON'T CHANGE FORMAT (PARSED BY PYTHON)

export class DifficultyScalar {
  constructor() {}

  public debug(ctx: CanvasRenderingContext2D) {
    ctx.font = "20px Arial Bold";
    ctx.strokeStyle = "black";

    let x = 40;
    let y = ctx.canvas.height * 5 / 8 + 100;

    ctx.fillText(`difficulty debug --x`, x, y);
    y += 20;
    ctx.fillText(`Timer: ${game.frame / 100}`, x, y);
    y += 20;
    ctx.fillText(`Enemy Speed: ${enemies.speed}`, x, y);
    y += 20;
    ctx.fillText(`Enemy Spawn Rate: ${enemies.spawnWait}`, x, y);
    y += 20;
    ctx.fillText(`Max Enemies: ${enemies.maxInst}`, x, y);
  }

  public controller() {
    // Scale max enemies (Stops Scaling at 240)
    const x = game.frame / 100;
    if (x > 0 && x < 240) {
        enemies.maxInst = Math.floor((-10 * x)/(x-270)) + 1;
    }

    // enemies.maxInst = 10;
    enemies.spawnWait = 0.1;
    // Scale enemy speed
    enemies.speed = 3;
    // const
    // this.enemy

    // Scale enemy spawn rate

  }
}

export const difficultyScalar = new DifficultyScalar();
