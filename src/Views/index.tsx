import { useState } from "react";
import { game } from "@App";
import { Scenes } from "@Game/scenes/scenes";
import Home from "./Home";
import Shop from "./Shop";
import Gameover from "./Gameover";
import About from "./About";
import Difficulty from "./Difficulty";

export enum View {
  Home,
  Info,
  Shop,
  Tutorial,
  Difficulty,
  Play,
  Gameover,
}

interface Props {
  page: View;
  setPage: React.Dispatch<React.SetStateAction<View>>;
}

const Views: React.FC<Props> = (props: Props) => {
  const { page, setPage } = props;

  switch (page) {
    case View.Home:
      game.scene = Scenes.menu;
      return (
        <Home
          navPlay={() => setPage(View.Difficulty)}
          navTutorial={() => setPage(View.Tutorial)}
          navShop={() => setPage(View.Shop)}
        />
      );
      break;

    case View.Info:
      console.log("views: ABOUT");
      game.scene = Scenes.menu;
      return <About />;
      break;

    case View.Tutorial:
      game.scene = Scenes.tutorial;
      break;

    case View.Difficulty:
      game.scene = Scenes.menu;
      return <Difficulty navPlay={() => setPage(View.Play)} />;
      break;

    case View.Play:
      game.scene = Scenes.play;
      break;

    case View.Shop:
      game.scene = Scenes.shop;
      return (
        <Shop
          navHome={() => {
            setPage(View.Home);
            game.scene = Scenes.menu;
          }}
          navPlay={() => setPage(View.Play)}
        ></Shop>
      );
      break;

    case View.Gameover:
      return (
        <Gameover
          blobsKilled={game.score}
          coins={0}
          navPlay={() => setPage(View.Play)}
          navShop={() => {
            setPage(View.Shop);
            game.scene = Scenes.shop;
          }}
        />
      );
      break;
  }

  return <></>;
};

export default Views;
