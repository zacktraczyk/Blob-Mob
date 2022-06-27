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

let transTimer = 0; // after death change scene timer
let duration = 100;

export function Battle(game: Game, input: Input, ctx: CanvasRenderingContext2D) {

  // Pause after death before transition
  if (player.state == State.Dead) {
    transTimer++;
    if (transTimer > duration) {
      game.gameOver();
      transTimer = 0;
    }
  }

  if (!game.paused) {
    update(game, input, ctx);
  }

  game.pause(input.keyState.pause);

  // Draw
  draw(game, ctx);

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