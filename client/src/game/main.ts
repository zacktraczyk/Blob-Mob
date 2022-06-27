import { Game } from './game';
import { Input } from './input';
import { Menu } from './scenes/menu'
import { Battle } from './scenes/battle';
import { Scenes } from './scenes/scenes';

import './style.css';

const game = new Game();
const input = new Input();

export function Main(playGame: boolean, ctx: CanvasRenderingContext2D) {
  ++game.frame;

  console.log('main.ts: blob-mob Main playGame:', playGame)
  if (playGame) game.scene = Scenes.battle;

  switch (game.scene) {
    case Scenes.menu:
      Menu(game, input, ctx);
      break;
    case Scenes.battle:
      Battle(game, input, ctx);
      break;
    case Scenes.gameOver:
      break;
  }

  return game;
}
