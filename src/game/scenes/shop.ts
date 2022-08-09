import { Entities } from "../entities/entities";
import { GameAttributes } from "../gameAttributes";
import { Input } from "../input";
import { drawHUD } from "./sceneElements";
import { State } from "../entities/entity";

let spawnCool = 0;

export function Shop(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const {player, enemies} = entities;

  draw(game, entities, ctx);
  update(game, input, entities, ctx);

  if (player.state == State.Dead) {
    game.reset(entities);
  }
}

function update(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  // Confine to half of screen
  player.controller(ctx.canvas.width / 2, ctx.canvas.height, input.keyState, enemies.instances, damagePoints);
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

function draw(game: GameAttributes, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.draw(ctx);

  drawHUD(game, player, ctx);
}
