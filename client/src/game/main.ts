import { Game } from './game';
import { Input } from './input';
import { entities } from './entities/entities';

import { Scenes } from './scenes/scenes';
import { Menu } from './scenes/menu'
import { Tutorial } from './scenes/tutorial';
import { Battle } from './scenes/battle';
import { Gameover } from './scenes/gameover';

import './style.css';

const input = new Input()

export function Main(game: Game, ctx: CanvasRenderingContext2D) {
  ++game.frame;

  switch (game.scene) {
    case Scenes.menu:
      Menu(game, input, ctx);
      break;
    case Scenes.tutorial:
      Tutorial(game, input, entities, ctx);
      break;
    case Scenes.battle:
      Battle(game, input, entities, ctx);
      break;
    case Scenes.gameOver:
      Gameover(game, input, ctx);
      break;
  }

  return game;
}
