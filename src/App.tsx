import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db, getAccount, getHighscore } from "./apis/firebase";

import Canvas from "@Components/Canvas";
import Score from "@Components/Score";
import Coins from "@Components/Coins";
import PowerupBar from "@Components/PowerupBar";
import Navbar from "@Components/Navbar";
import Views, { View } from "@Views/index.tsx";

import { Game } from "@Game/game";
import { Main } from "@Game/main";
import { Scenes } from "@Game/scenes/scenes";
import shop from "@Game/shop";
import { onAuthStateChanged } from "firebase/auth";

export const game = new Game();

const App = () => {
  const [page, setPage] = useState<View>(View.Home);

  const onAuthStateChanged = () => {
    getAccount();
    getHighscore();
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => {
          game.ctx = ctx;
          Main(game, setPage);
        }}
      />
      <Score />

      <div className="app">
        <Views page={page} setPage={setPage} />
      </div>

      <Coins />
      <Navbar
        navHome={() => {
          setPage(View.Home);
          game.scene = Scenes.menu;
        }}
      />
    </>
  );
};

export default App;
