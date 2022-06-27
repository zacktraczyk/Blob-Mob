import { Game } from './game';
import { Input } from './input';

import { Scenes } from './scenes/scenes';
import { Menu } from './scenes/menu'
import { Battle } from './scenes/battle';
import { Gameover } from './scenes/gameover';

import './style.css';

const input = new Input();

export function Main(game: Game, ctx: CanvasRenderingContext2D) {
  ++game.frame;

  switch (game.scene) {
    case Scenes.menu:
      Menu(game, input, ctx);
      break;
    case Scenes.battle:
      Battle(game, input, ctx);
      break;
    case Scenes.gameOver:
      Gameover(game, input, ctx);
      break;
  }

  return game;
}
