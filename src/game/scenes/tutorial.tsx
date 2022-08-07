import { Scenes } from "./scenes";
import { Entities } from "../entities/entities";
import { Player } from "../entities/player";
import { EnemyController } from "../entities/enemy";
import { Input } from "../input";
import { GameAttributes } from "../gameAttributes";
import { TurtorialRules } from "../tutorialRules";

import { drawStage, drawHUD } from "./sceneElements";

const t = new TurtorialRules();

// <++> TODO: Use game.tutorial boolean to fix interupted and revisited glitch

export function Tutorial(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {

  update(game, input, entities, ctx);
  draw(game, entities, ctx);

  if (t.step == 'end') {
    game.reset(entities)
    t.reset();
    game.scene = Scenes.battle;
  }
}

function update(game: GameAttributes, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  player.controller(ctx.canvas.width, ctx.canvas.height, input.keyState, enemies.instances, damagePoints)
  damagePoints.controller();
  enemies.controller(game);

  if (player.health <= 50) player.health = 50
  t.controller(game, ctx.canvas.width, ctx.canvas.height, input.keyState, enemies,player);

}

function draw(game: GameAttributes, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawStage(ctx);
  player.draw(ctx);
  enemies.draw(ctx);
  t.draw(ctx);

  if (t.step == 'bars' || t.step == 'goodLuck' || t.step == 'end')
    drawHUD(game, player, ctx);
}