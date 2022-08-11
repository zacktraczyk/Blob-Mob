import { player } from '../entities/player';
import { enemies } from '../entities/enemy';

export function Gameover(ctx: CanvasRenderingContext2D) {
  update(ctx);
  draw(ctx);
}

function update(ctx: CanvasRenderingContext2D) {
  enemies.controller();
}

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
}
