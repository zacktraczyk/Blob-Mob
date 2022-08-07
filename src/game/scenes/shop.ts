import { Entities } from '../entities/entities';
import { GameAttributes } from '../gameAttributes';
import { Input } from '../input';
import { drawHUD, drawStage } from './sceneElements';
import { State } from '../entities/entity';

export function Shop(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (ctx == null) return;
  const { player } = entities;

  drawStage(ctx);
  if (!game.paused) update(game, input, entities, ctx);

  game.pause(input.keyState.pause);

  draw(game, entities, ctx);
}

function update(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  // Confine to half of screen
  player.controller(ctx.canvas.width/2, ctx.canvas.height, input.keyState, enemies.instances, damagePoints);
  enemies.controller(game);
  damagePoints.controller();
}

function draw(game: GameAttributes, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawStage(ctx);

  drawHUD(game, player, ctx);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);
}