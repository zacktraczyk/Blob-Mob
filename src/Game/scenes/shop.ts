import { GameAttributes } from "../gameAttributes";
import { input } from "../input";
import { drawHUD } from "./sceneElements";
import { State } from "../entities/entity";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";
import { damagePoints } from "../entities/damagePoints";

let spawnCool = 0;

export function Shop(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  draw(game, ctx);
  update(game, ctx);

  if (player.state == State.Dead) {
    game.reset();
  }
}

function update(game: GameAttributes, ctx: CanvasRenderingContext2D) {

  // Confine to half of screen
  player.controller(ctx.canvas.width / 2, ctx.canvas.height);
  // if (player.cool <= 0) {
  //   player.power = player.maxPower; // So Player can test powerups
  // }
  enemies.controller(game);
  damagePoints.controller();

  // Spawn when button pressed
  if (spawnCool > 0) {
    spawnCool--;
  }

  if (input.keyState.enemySpawn && spawnCool <= 0) {
    spawnCool = 50;
    enemies.spawn(ctx.canvas.width, ctx.canvas.height, player) ;
  }
}

function draw(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(game, ctx);
}
