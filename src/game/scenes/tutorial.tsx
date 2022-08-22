import { game } from "@App";
import { Scenes } from "./scenes";
import { drawHUD } from "./sceneElements";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";
import { input } from "../input";
import { Stage, tutorialRules } from "../tutorialRules";
import { damagePoints } from "../entities/damagePoints";

export function Tutorial() {
  update();
  draw();

  if (tutorialRules.stage == Stage.end) {
    game.reset();
    tutorialRules.reset();
    game.scene = Scenes.battle;
  }
}

function update() {
  const ctx = game.ctx;
  if (!ctx) return;

  player.controller(ctx.canvas.width, ctx.canvas.height);
  damagePoints.controller();
  enemies.controller();

  if (player.health <= 50) player.health = 50;
  tutorialRules.controller(ctx.canvas.width, ctx.canvas.height);
}

function draw() {
  const ctx = game.ctx;
  if (!ctx) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  tutorialRules.draw(ctx);

  if (tutorialRules.stage >= Stage.bars) drawHUD();
}
