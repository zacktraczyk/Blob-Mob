import { Scenes } from "./scenes/scenes";
import { Menu } from "./scenes/menu";
import { Shop } from "./scenes/shop";
import { Tutorial } from "./scenes/tutorial";
import { tutorialRules } from "./tutorialRules";
import { Battle } from "./scenes/battle";
import { Gameover } from "./scenes/gameover";
import { input } from "./input";

import { View } from "@Views/index.tsx";
import { saveHighscore } from "@Apis/firebase";
import { Game } from "./game";
import { difficultyScalar } from "./difficulty";

export const Main = (
  game: Game,
  setPage: React.Dispatch<React.SetStateAction<View>>
) => {
  if (!game.ctx) return;
  ++game.frame;

  switch (game.scene) {
    // ------------------> MENU
    case Scenes.menu:
      Menu();
      break;

    // ------------------> SHOP
    case Scenes.shop: // INIT
      game.reset();
      game.scene = Scenes.shopMain;
    case Scenes.shopMain:
      Shop();
      break;

    // ------------------> TUTORIAL
    case Scenes.tutorial: // INIT
      game.reset();
      tutorialRules.reset();
      game.scene = Scenes.tutorialMain;
    case Scenes.tutorialMain:
      Tutorial();
      break;

    // ------------------> PLAY
    case Scenes.play: // INIT
      game.reset();
      game.scene = Scenes.battle;
      difficultyScalar.controller();
    case Scenes.battle:
      Battle();
      break;

    // ------------------> GAMEOVER
    case Scenes.gameOver: // INIT
      saveHighscore(game.score);
      setPage(View.Gameover);
      game.scene = Scenes.gameOverMain;
    case Scenes.gameOverMain:
      Gameover();
      break;
  }
};
