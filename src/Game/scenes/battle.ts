import { State } from "../entities/entity";
import { GameAttributes } from "../gameAttributes";
import { Input } from "../input";
import { player } from "../entities/player";
import { damagePoints } from "../entities/damagePoints";
import { enemies } from "../entities/enemy";
import { drawHUD, drawPauseMenu } from "./sceneElements";

let transTimer = 0; // after death change scene timer
let duration = 100;

export function Battle(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  if (!game.paused) update(game, ctx);
  game.pause();

  draw(game, ctx);

  // Pause after death before transition
  if (player.state == State.Dead) {
    transTimer++;
    if (transTimer > duration) {
      game.gameOver();
      transTimer = 0;
    }
  }
}

function update(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  if (player.state != State.Dead) {
    enemies.spawner(ctx.canvas.width, ctx.canvas.height, player);
  }

  player.controller(ctx.canvas.width, ctx.canvas.height);

  enemies.controller(game);
  damagePoints.controller();
}

function draw(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(game, ctx);

  // game.debug(player, enemies, ctx);

  if (game.paused) drawPauseMenu(ctx);
}
