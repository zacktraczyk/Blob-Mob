import { GameAttributes } from '../gameAttributes';
import { State } from '../entities/entity';
import { Input } from '../input';
import { player } from '../entities/player';
import { enemies } from '../entities/enemy';

export function Gameover(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  update(game, ctx);
  draw(game, ctx);
}

function update(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  enemies.controller(game);
}

function draw(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
}
