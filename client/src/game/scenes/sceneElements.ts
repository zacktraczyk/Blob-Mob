import { Player } from "../entities/player";
import { Game } from "../game";
import { Input } from "../input";
import paper from "../paper.jpg"

const background = new Image();
background.src = paper

export function drawStage(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#fffbf9';

    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export function drawHUD(game: Game, player: Player, ctx: CanvasRenderingContext2D) {
    if (ctx == null) return;

    // Health
    ctx.fillStyle = 'black';
    ctx.fillRect(ctx.canvas.width / 2, 10, ctx.canvas.width / 2 - 10, 20);
    ctx.fillStyle = player.color;
    ctx.font = "10px monospace";
    ctx.fillText(player.health + "/" + player.maxHealth, ctx.canvas.width * 3 / 4 - 10, 23);
    ctx.fillRect(ctx.canvas.width / 2 + 1, 11, Math.max(0, (player.health / player.maxHealth) * (ctx.canvas.width / 2 - 10) - 2), 18);

    // Power
    ctx.fillStyle = 'black';
    ctx.fillRect(ctx.canvas.width * 3 / 4 + 5, 40, ctx.canvas.width / 4 - 15, 20);
    ctx.fillStyle = '#33cc33';
    if (player.power > 0) {
        ctx.fillRect(ctx.canvas.width * 3 / 4 + 6, 41, (player.power / player.maxPower) * (ctx.canvas.width / 4 - 15) - 2, 18);
    }

    // Cool
    ctx.fillStyle = 'black';
    ctx.fillRect(ctx.canvas.width / 2, 40, ctx.canvas.width / 4 - 5, 20);
    ctx.fillStyle = 'blue';
    ctx.fillRect(ctx.canvas.width / 2 + 1, 41, (1 - (player.cool / player.maxCool)) * (ctx.canvas.width / 4 - 5) - 2, 18);

    // Difficulty
    ctx.fillStyle = 'black';
    ctx.font = "20px monospace";
    let text = `Difficulty ${game.difficulty}`;
    ctx.fillText(text, ctx.canvas.width - ctx.measureText(text).width - 20, ctx.canvas.height - 25);
}

export function drawPauseMenu(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(225, 220, 212, 0.4)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "grey";
    ctx.font = "50px monospace";
    ctx.fillText("PAUSE", ctx.canvas.width / 2 - (ctx.measureText("Pause").width / 2), ctx.canvas.height / 2 + 10);
}