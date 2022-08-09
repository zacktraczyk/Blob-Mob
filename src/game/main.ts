import { GameAttributes } from "./gameAttributes";
import { Input, input } from "./input";
import { entities } from "./entities/entities";

import { Scenes } from "./scenes/scenes";
import { Menu } from "./scenes/menu";
import { Tutorial } from "./scenes/tutorial";
import { Battle } from "./scenes/battle";
import { Gameover } from "./scenes/gameover";
import { Shop } from "./scenes/shop";
import { tutorialRules } from "./tutorialRules";

export const Main = (game: GameAttributes, ctx: CanvasRenderingContext2D) => {
  if (ctx == null) return;
  ++game.frame;

  switch (game.scene) {
    case Scenes.menu:
      Menu(game, input, ctx);
      break;

    case Scenes.shop:
      game.reset(entities);
      game.scene = Scenes.shopMain;
    case Scenes.shopMain:
      Shop(game, input, entities, ctx);
      break;

    case Scenes.tutorial:
      game.reset(entities);
      tutorialRules.reset();
      game.scene = Scenes.tutorialMain;
    case Scenes.tutorialMain:
      Tutorial(game, input, entities, ctx);
      break;

    case Scenes.play:
      const { player, enemies } = entities;
      game.reset(entities);
      game.updateDifficulty(player, enemies, 5);
      game.scene = Scenes.battle;
    case Scenes.battle:
      Battle(game, input, entities, ctx);
      break;

    case Scenes.gameOver:
      Gameover(game, input, entities, ctx);
      break;
  }

  return game;
};
