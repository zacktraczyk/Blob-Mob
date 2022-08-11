import { GameAttributes } from "../gameAttributes";
import { input } from "../input";
import { drawHUD } from "./sceneElements";
import { State } from "../entities/entity";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";
import { damagePoints } from "../entities/damagePoints";
import { game } from "../../App";

let playerDeathCool = 200;

export function Shop(ctx: CanvasRenderingContext2D) {
  draw(ctx);
  update(ctx);

  // Pause before reset
  if (player.state == State.Dead) {
    if (playerDeathCool < 0) {
      playerDeathCool = 200;
      game.reset();
    } else {
      playerDeathCool--;
    }
  }
}

let spawnEnemyRelease = true;

function update(ctx: CanvasRenderingContext2D) {

  // Confine to half of screen
  player.controller(ctx.canvas.width / 2, ctx.canvas.height);
  // if (player.cool <= 0) {
  //   player.power = player.maxPower; // So Player can test powerups
  // }
  enemies.controller();
  damagePoints.controller();

  if (input.keyState.enemySpawn) {
    if (spawnEnemyRelease) {
      enemies.spawn(ctx.canvas.width, ctx.canvas.height, player) ;
    }
    spawnEnemyRelease = false;
  } else {
    spawnEnemyRelease = true;
  }
}

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(ctx);
}
