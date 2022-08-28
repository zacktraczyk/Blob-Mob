import { game } from "@App";
import { Body } from "@Game/shop/bodies";
import { player } from "../entities/player";

export function drawHUD() {
  const ctx = game.ctx;
  if (ctx == null) return;

  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const barHeight = h / 40;
  const barPadding = 20;
  const borderWidth = 7;
  const fontSize = barHeight / 2;

  const playerBody = Body[player.body];

  // Health
  ctx.fillStyle = "black";
  ctx.fillRect(w / 2, barPadding, w / 2 - barPadding, barHeight);

  ctx.fillStyle = playerBody.colorNorm;
  if (player && player.damaging) {
    ctx.fillStyle = playerBody.colorDamg;
    console.log("SCENE DRAW DAMAGE");
  }
  ctx.font = `${fontSize}px monospace`;
  ctx.fillText(
    player.health + "/" + player.maxHealth,
    w * (3 / 4) - 10,
    fontSize * (7 / 3)
  );
  ctx.fillRect(
    w / 2 + borderWidth,
    barPadding + borderWidth,
    Math.max(
      0,
      (player.health / player.maxHealth) *
        (w / 2 - barPadding - borderWidth * 2)
    ),
    barHeight + -borderWidth * 2
  );

  // Power
  // Power back Rectangle
  ctx.fillStyle = "black";
  ctx.fillRect(
    w * (3 / 4) + barPadding / 2,
    barPadding + barHeight + barPadding,
    w / 4 - barPadding * (3 / 2),
    barHeight
  );

  // Power front Rectangle
  ctx.fillStyle = "#33cc33";
  if (player.power > 0) {
    ctx.fillRect(
      w * (3 / 4) + barPadding / 2 + borderWidth,
      barPadding + barHeight + barPadding + borderWidth,
      (player.power / player.maxPower) *
        (w / 4 - barPadding * (3 / 2) - borderWidth * 2),
      barHeight - borderWidth * 2
    );
  }

  // Cool
  // Cool back Rectangle
  ctx.fillStyle = "black";
  ctx.fillRect(
    w / 2,
    barPadding + barHeight + barPadding,
    w / 4 - barPadding / 2,
    barHeight
  );

  // Cool front Rectangle
  ctx.fillStyle = playerBody.colorCool;
  ctx.fillRect(
    w / 2 + borderWidth,
    barPadding + barHeight + barPadding + borderWidth,
    (1 - player.cool / player.maxCool) *
      (w / 4 - barPadding / 2 - borderWidth * 2),
    barHeight - borderWidth * 2
  );

  // Difficulty
  // ctx.fillStyle = 'black';
  // ctx.font = "20px monospace";
  // let text = `Difficulty ${game.difficulty}`;
  // ctx.fillText(text, w - ctx.measureText(text).width - 20, h - 25);

  // Score
  // ctx.fillStyle = "black";
  // ctx.font = "30px futura";
  // let text = `Score ${game.score}`;
  // ctx.fillText(text, 20, 30);
  // text = `Highscore ${game.highscore}`;
  // ctx.fillText(text, 20, 60);
}

export function drawPauseMenu(ctx: CanvasRenderingContext2D) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  ctx.fillStyle = "rgba(225, 220, 212, 0.4)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "grey";
  ctx.font = "50px monospace";
  ctx.fillText("PAUSE", w / 2 - ctx.measureText("Pause").width / 2, h / 2 + 10);
}
