import { game } from "../../App";
import { State } from "../entities/entity";
import { difficultyScalar } from "../difficulty";
import { input } from "../input";
import { player } from "../entities/player";
import { damagePoints } from "../entities/damagePoints";
import { enemies } from "../entities/enemy";
import { coins } from "../entities/coin";
import { drawHUD, drawPauseMenu } from "./sceneElements";

let transTimer = 0; // after death change scene timer
let duration = 100;

export function Battle(ctx: CanvasRenderingContext2D) {
  if (!game.paused) update(ctx);
  game.pause();

  draw(ctx);

  // Pause after death before transition
  if (player.state == State.Dead) {
    transTimer++;
    if (transTimer > duration) {
      game.gameOver();
      transTimer = 0;
    }
  }
}

function update(ctx: CanvasRenderingContext2D) {
  if (player.state != State.Dead) {
    enemies.spawner(ctx.canvas.width, ctx.canvas.height, player);
  }

  difficultyScalar.controller();

  coins.controller(game, ctx.canvas.width, ctx.canvas.height);
  player.controller(ctx.canvas.width, ctx.canvas.height);
  damagePoints.controller();
  enemies.controller();
}

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  coins.draw(ctx);
  player.draw(ctx);
  damagePoints.draw(ctx);
  enemies.draw(ctx);
  difficultyScalar.debug(ctx);

  drawHUD(ctx);

  if (game.paused) drawPauseMenu(ctx);
}
