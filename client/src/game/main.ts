import { Game } from './game';
import { Input } from './input';
import { State } from './entities/entity';
import { Player } from './entities/player';
import { DamagePointController } from './entities/damagePoints';
import { EnemyController } from './entities/enemy';
import { Stage, pauseMenu } from './scenes/2_battle';

import './style.css';

const game = new Game();
const input = new Input();
const player = new Player(250, 250, 250, 250);
const damagePoints = new DamagePointController();;
const enemies = new EnemyController();
// let Enemies

export function Init(ctx: CanvasRenderingContext2D) {
  game.ctx = ctx;
  if (!Main(ctx)) return {gameover: true, score: game.score}
  return {gameover: false, score: game.score}
}

function Main(ctx: CanvasRenderingContext2D) {
    ++game.frame;

    if (!game.paused) {
      update();
    }

    game.pause(input.keyState.pause);

    // Draw
    draw();

    if (player.state == State.Dead) {
        // window.requestAnimationFrame(GameoverTrans);
        // mainTheme.stop();
        game.setHighscore();
        return false;
    }
    return true;
}

function update() {
    // game.resizeWindow();

    if (player.state != State.Dead) {
      enemies.spawner(game.ctx.canvas.width, game.ctx?.canvas.height, player);
    }
    player.controller(game.ctx?.canvas.width, game.ctx?.canvas.height, input.keyState, enemies.instances, damagePoints);
    enemies.controller(game);
    damagePoints.controller();
}

function draw() {
    game.ctx.clearRect(0, 0, screen.w, screen.h);
    Stage.draw(game.ctx, screen);

    player.draw(game.ctx);
    enemies.draw(game.ctx);
    damagePoints.draw(game.ctx);

    Stage.HUD(game, player);
    if (game.paused) pauseMenu.draw(game.ctx, screen);
}