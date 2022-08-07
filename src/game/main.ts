import { GameAttributes } from "./gameAttributes";
import { Input } from "./input";
import { entities } from "./entities/entities";

import { Scenes } from "./scenes/scenes";
import { Menu } from "./scenes/menu";
import { Tutorial } from "./scenes/tutorial";
import { Battle } from "./scenes/battle";
import { Gameover } from "./scenes/gameover";

const input = new Input();

export const Main = (game: GameAttributes, ctx: CanvasRenderingContext2D) => {
  ++game.frame;

  switch (game.scene) {
    case Scenes.menu:
      Menu(game, input, ctx);
      game.reset(entities);
      break;

    case Scenes.tutorial:
      Tutorial(game, input, entities, ctx);
      break;

    case Scenes.play:
      game.reset(entities);
    case Scenes.battle:
      game.scene = Scenes.battle;
      Battle(game, input, entities, ctx);
      break;

    case Scenes.gameOver:
      Gameover(game, input, entities, ctx);
      break;
  }

  return game;
}