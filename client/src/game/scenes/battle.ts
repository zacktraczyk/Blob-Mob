import { State } from '../entities/entity';
import { Game } from '../game';
import { Input } from '../input';
import { Player } from '../entities/player';
import { DamagePointController } from '../entities/damagePoints';
import { EnemyController } from '../entities/enemy';
import { drawStage, drawHUD, drawPauseMenu } from './sceneElements';
import { Entities } from '../entities/entities';

let sceneInit = true;
let transTimer = 0; // after death change scene timer
let duration = 100;

export function Battle(game: Game, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  if (sceneInit) initalizeScene(game, entities);
  const { player } = entities;

  if (!game.paused) update(game, input, entities, ctx);

  game.pause(input.keyState.pause);

  draw(game, entities, ctx);

  // Pause after death before transition
  if (player.state == State.Dead) {
    transTimer++;
    if (transTimer > duration) {
      game.gameOver();
      transTimer = 0;
    }
  }


}

function update(game: Game, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  if (ctx == null) return;

  if (player.state != State.Dead) {
    enemies.spawner(ctx.canvas.width, ctx.canvas.height, player);
  }
  player.controller(ctx.canvas.width, ctx.canvas.height, input.keyState, enemies.instances, damagePoints);
  enemies.controller(game);
  damagePoints.controller();
}

function draw(game: Game, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawStage(ctx);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(game, player, ctx);

  // game.debug(player, enemies, ctx);

  if (game.paused) drawPauseMenu(ctx);
}

function initalizeScene(game: Game, entities: Entities) {
  const { player, enemies }  = entities;
  game.updateDifficulty(player, enemies, 3)
  sceneInit = false;
}