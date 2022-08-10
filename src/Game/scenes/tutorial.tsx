import { Scenes } from "./scenes";
import { drawHUD } from "./sceneElements";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";
import { input } from "../input";
import { GameAttributes } from "../gameAttributes";
import { Stage, tutorialRules } from "../tutorialRules";
import { damagePoints } from "../entities/damagePoints";

export function Tutorial(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  update(game, ctx);
  draw(game, ctx);

  if (tutorialRules.stage == Stage.end) {
    game.reset()
    tutorialRules.reset();
    game.scene = Scenes.battle;
  }
}

function update(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  player.controller(ctx.canvas.width, ctx.canvas.height);
  damagePoints.controller();
  enemies.controller(game);

  if (player.health <= 50) player.health = 50
  tutorialRules.controller(game, ctx.canvas.width, ctx.canvas.height);

}

function draw(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  player.draw(ctx);
  enemies.draw(ctx);
  tutorialRules.draw(ctx);

  if (tutorialRules.stage >= Stage.bars)
    drawHUD(game, ctx);
}