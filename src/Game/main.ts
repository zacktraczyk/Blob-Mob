import { GameAttributes } from "./gameAttributes";
import { Scenes } from "./scenes/scenes";
import { Menu } from "./scenes/menu";
import { Shop } from "./scenes/shop";
import { Tutorial } from "./scenes/tutorial";
import { tutorialRules } from "./tutorialRules";
import { Battle } from "./scenes/battle";
import { Gameover } from "./scenes/gameover";
import { input } from "./input";

import { View } from "../Views";
import { saveHighscore } from "../apis/firebase";

export const Main = (
  game: GameAttributes,
  ctx: CanvasRenderingContext2D,
  setPage: React.Dispatch<React.SetStateAction<View>>
) => {
  if (ctx == null) return;
  ++game.frame;

  switch (game.scene) {
    // ------------------> MENU
    case Scenes.menu:
      Menu(game, ctx);
      break;

    // ------------------> SHOP
    case Scenes.shop: // INIT
      game.reset();
      game.scene = Scenes.shopMain;
    case Scenes.shopMain:
      Shop(game, ctx);
      break;

    // ------------------> TUTORIAL
    case Scenes.tutorial: // INIT
      game.reset();
      tutorialRules.reset();
      game.scene = Scenes.tutorialMain;
    case Scenes.tutorialMain:
      Tutorial(game, ctx);
      break;

    // ------------------> PLAY
    case Scenes.play: // INIT
      game.reset();
      game.updateDifficulty(5);
      game.scene = Scenes.battle;
    case Scenes.battle:
      Battle(game, ctx);
      break;

    // ------------------> GAMEOVER
    case Scenes.gameOver: // INIT
      saveHighscore(game.score);
      setPage(View.Gameover);
      game.scene = Scenes.gameOverMain;
    case Scenes.gameOverMain:
      Gameover(game, ctx);
      break;
  }

  return game;
};
