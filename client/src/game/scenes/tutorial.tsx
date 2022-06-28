import { Scenes } from "./scenes";
import { Entities } from "../entities/entities";
import { Player } from "../entities/player";
import { EnemyController } from "../entities/enemy";
import { Input } from "../input";
import { Game } from "../game";
import { TurtorialRules } from "../tutorialRules";

import { drawStage, drawHUD } from "./sceneElements";

const t = new TurtorialRules();

export function Tutorial(game: Game, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  update(game, input, entities, ctx);
  draw(game, entities, ctx);


  if (t.step == 'end') {
    game.reset(player, enemies, damagePoints)
    game.scene = Scenes.battle;
    // game.setTutorial()
  }
}

function update(game: Game, input: Input, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;
  player.controller(ctx.canvas.width, ctx.canvas.height, input.keyState, enemies.instances, damagePoints)
  if (player.health <= 50) player.health = 50
  t.controller(game, ctx.canvas.width, ctx.canvas.height, input.keyState, enemies,player);
  enemies.controller(game);
}

function draw(game: Game, entities: Entities, ctx: CanvasRenderingContext2D) {
  const { player, enemies, damagePoints } = entities;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawStage(ctx);
  player.draw(ctx);
  enemies.draw(ctx);
  damagePoints.controller();
  t.draw(ctx);

  if (t.step == 'bars' || t.step == 'goodLuck' || t.step == 'end')
    drawHUD(game, player, ctx);
}