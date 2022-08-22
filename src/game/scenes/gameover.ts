import { game } from "@App";
import { player } from "../entities/player";
import { enemies } from "../entities/enemy";

export function Gameover() {
  update();
  draw();
}

function update() {
  enemies.controller();
}

function draw() {
  const ctx = game.ctx;
  if (ctx == null) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  player.draw(ctx);
  enemies.draw(ctx);
}
