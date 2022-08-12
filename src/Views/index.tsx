import { useState } from "react";
import { Scenes } from "../Game/scenes/scenes";
import { game } from "../App";
import Home from "./Home";
import Score from "../components/Score";
import Shop from "./Shop";
import Gameover from "./Gameover";
import { browserLocalPersistence } from "firebase/auth";

export enum View {
  Home,
  Shop,
  Tutorial,
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
      return (
        <Home
          navPlay={() => setPage(View.Play)}
          navTutorial={() => setPage(View.Tutorial)}
          navShop={() => {
            setPage(View.Shop);
            game.scene = Scenes.shop;
          }}
        />
      );
      break;

    case View.Tutorial:
      game.scene = Scenes.tutorial;
      break;

    case View.Play:
      game.scene = Scenes.play;
      break;

    case View.Shop:
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
