import { GameAttributes } from '../gameAttributes';
import { entities, Entities } from '../entities/entities';
import { State } from '../entities/entity';
import { Input } from '../input';

export function Gameover(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  update(game, entities, ctx);
  draw(game, entities, ctx);
}

function update(game: GameAttributes, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { enemies } = entities;
  enemies.controller(game);
}

function draw(game: GameAttributes, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies } = entities;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
}
