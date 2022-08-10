import { player } from "../entities/player";
import { GameAttributes } from "../gameAttributes";
import { Input } from "../input";

const borderWidth = 3;

export function drawHUD(
  game: GameAttributes,
  ctx: CanvasRenderingContext2D
) {
  // Health
  ctx.fillStyle = "black";
  ctx.fillRect(ctx.canvas.width / 2, 10, ctx.canvas.width / 2 - 10, 20);
  ctx.fillStyle = player.color;
  ctx.font = "10px monospace";
  ctx.fillText(
    player.health + "/" + player.maxHealth,
    (ctx.canvas.width * 3) / 4 - 10,
    23
  );
  ctx.fillRect(
    ctx.canvas.width / 2 + borderWidth,
    10 + borderWidth,
    Math.max(
      0,
      (player.health / player.maxHealth) * (ctx.canvas.width / 2 - 10) -
        borderWidth * 2
    ),
    20 - borderWidth * 2
  );

  // Power
  ctx.fillStyle = "black";
  ctx.fillRect(
    (ctx.canvas.width * 3) / 4 + 5,
    40,
    ctx.canvas.width / 4 - 15,
    20
  );
  ctx.fillStyle = "#33cc33";
  if (player.power > 0) {
    ctx.fillRect(
      (ctx.canvas.width * 3) / 4 + 5 + borderWidth,
      40 + borderWidth,
      (player.power / player.maxPower) * (ctx.canvas.width / 4 - 15) + 5 -
        borderWidth * 2,
      20 - borderWidth * 2
    );
  }

  // Cool
  ctx.fillStyle = "black";
  ctx.fillRect(ctx.canvas.width / 2, 40, ctx.canvas.width / 4 - 5, 20);
  ctx.fillStyle = "blue";
  ctx.fillRect(
    ctx.canvas.width / 2 + borderWidth,
    40 + borderWidth,
    (1 - player.cool / player.maxCool) * (ctx.canvas.width / 4 - 5) -
      borderWidth * 2,
    20 - borderWidth * 2
  );

  // Difficulty
  // ctx.fillStyle = 'black';
  // ctx.font = "20px monospace";
  // let text = `Difficulty ${game.difficulty}`;
  // ctx.fillText(text, ctx.canvas.width - ctx.measureText(text).width - 20, ctx.canvas.height - 25);

  // Score
  ctx.fillStyle = "black";
  ctx.font = "30px futura";
  let text = `Score ${game.score}`;
  ctx.fillText(text, 20, 30);
  text = `Highscore ${game.highscore}`;
  ctx.fillText(text, 20, 60);
}

export function drawPauseMenu(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "rgba(225, 220, 212, 0.4)";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "grey";
  ctx.font = "50px monospace";
  ctx.fillText(
    "PAUSE",
    ctx.canvas.width / 2 - ctx.measureText("Pause").width / 2,
    ctx.canvas.height / 2 + 10
  );
}
