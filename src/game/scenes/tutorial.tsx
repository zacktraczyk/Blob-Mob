import { game } from "@App";
import { Scenes } from "./scenes";
import { drawHUD } from "./sceneElements";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";
import { input } from "../input";
import { Stage, tutorialRules } from "../tutorialRules";
import { damagePoints } from "../entities/damagePoints";
import { drawController } from "@Game/entities/draw";
import { coins } from "@Game/entities/coin";
import { View } from "@Views/index.tsx";

export function Tutorial(setPage: React.Dispatch<React.SetStateAction<View>>) {
  update();
  draw();

  if (tutorialRules.stage == Stage.end) {
    game.reset();
    tutorialRules.reset();
    setPage(View.Difficulty);
  }
}

function update() {
  const ctx = game.ctx;
  if (!ctx) return;

  if (!game.paused) {
    player.controller(ctx.canvas.width, ctx.canvas.height);
    damagePoints.controller();
    enemies.controller();
  }

  if (tutorialRules.stage >= Stage.draw_gesture)
    drawController.controller(ctx.canvas.width, ctx.canvas.height);

  coins.controller(game, ctx.canvas.width, ctx.canvas.height);

  tutorialRules.controller(ctx.canvas.width, ctx.canvas.height);

  if (player.health <= player.maxHealth * 0.1) player.health = player.maxHealth;
}

function draw() {
  const ctx = game.ctx;
  if (!ctx) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
  coins.draw(ctx);
  drawController.draw(ctx);

  tutorialRules.draw(ctx);

  if (tutorialRules.stage > Stage.enemy) drawHUD();
}
