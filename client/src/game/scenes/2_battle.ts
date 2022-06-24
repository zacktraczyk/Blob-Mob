import { Player } from "../entities/player";
import { Game } from "../game";
import { Input } from "../input";
import { Scene } from "./scene";
import paper from "../paper.jpg"

class Battle extends Scene {

    constructor(game: Game, input: Input) {
        super(game, input);
    }

    private draw() {

    }

    private update() {

    }
}

const background = new Image();
background.src = paper

export const Stage = {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#fffbf9';

        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.lineWidth = 10;
        ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },

    HUD(game: Game, player: Player) {
        const ctx = game.ctx;
        if (ctx == null) return;

        // Health
        ctx.fillStyle = 'black';
        ctx.fillRect(ctx.canvas.width / 2, 10, ctx.canvas.width/2 - 10, 20);
        ctx.fillStyle = player.color;
        ctx.font = "10px monospace";
        ctx.fillText(player.health + "/" + player.maxHealth, ctx.canvas.width*3/4 - 10, 23);;
        ctx.fillRect(ctx.canvas.width / 2 + 1, 11, Math.max(0, (player.health / player.maxHealth) * (ctx.canvas.width/2 - 10) - 2), 18);

        // Power
        ctx.fillStyle = 'black';
        ctx.fillRect(ctx.canvas.width*3/4 + 5, 40, ctx.canvas.width/4 - 15, 20);
        ctx.fillStyle = '#33cc33';
        // ctx.fillText(player.power + "/" + player.maxPower, w*7/8, 53)
        if (player.power > 0) {
            ctx.fillRect(ctx.canvas.width*3/4 + 6, 41, (player.power / player.maxPower) * (ctx.canvas.width/4 - 15) - 2, 18);
        }

        // Cool
        ctx.fillStyle = 'black';
        ctx.fillRect(ctx.canvas.width/2, 40, ctx.canvas.width/4 - 5, 20);
        ctx.fillStyle = 'blue';
        ctx.fillRect(ctx.canvas.width/2 + 1, 41, (1 - (player.cool / player.maxCool)) * (ctx.canvas.width/4 - 5) - 2, 18);

        // Score
        ctx.fillStyle = 'black';
        ctx.font = "20px monospace";
        ctx.fillText("Score: " + game.score, 18, 28, ctx.canvas.width / 2);
        ctx.fillText("High-Score: " + game.highscore, 18, 58, ctx.canvas.width / 2);

        // Difficulty
        ctx.fillStyle = 'black';
        ctx.font = "20px monospace";
        let text = `Difficulty ${game.difficulty}`;
        ctx.fillText(text, ctx.canvas.width - ctx.measureText(text).width - 20, ctx.canvas.height - 25);
    },
}

export const pauseMenu = {
    draw(ctx: CanvasRenderingContext2D, screen: {w: number, h: number}) {
        ctx.fillStyle = "rgba(225, 220, 212, 0.4)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "grey";
        ctx.font = "50px monospace";
        ctx.fillText("PAUSE", ctx.canvas.width / 2 - (ctx.measureText("Pause").width/2), ctx.canvas.height/2 + 10);
    }
}
