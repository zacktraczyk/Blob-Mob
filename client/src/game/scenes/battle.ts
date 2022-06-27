import { State } from '../entities/entity';
import { Game } from '../game';
import { Input } from '../input';
import { Player } from '../entities/player';
import { DamagePointController } from '../entities/damagePoints';
import { EnemyController } from '../entities/enemy';
import { drawStage, drawHUD, drawPauseMenu } from './sceneElements';

const player = new Player(250, 250, 250, 250);
const enemies = new EnemyController();
const damagePoints = new DamagePointController();;

export function Battle(game: Game, input: Input, ctx: CanvasRenderingContext2D) {
  if (!game.paused) {
    update(game, input, ctx);
  }

  game.pause(input.keyState.pause);

  // Draw
  draw(game, ctx);

  if (player.state == State.Dead) {
    game.gameOver();
  }
}

function update(game: Game, input: Input, ctx: CanvasRenderingContext2D) {
  if (ctx == null) return;

  if (player.state != State.Dead) {
    enemies.spawner(ctx.canvas.width, ctx.canvas.height, player);
  }
  player.controller(ctx.canvas.width, ctx.canvas.height, input.keyState, enemies.instances, damagePoints);
  enemies.controller(game);
  damagePoints.controller();
}

function draw(game: Game, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawStage(ctx);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(game, player, ctx);

  if (game.paused) drawPauseMenu(ctx);
}