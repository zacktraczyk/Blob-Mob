import { useState } from "react";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db } from "./apis/firebase";

import Canvas from "@Components/Canvas";
import Score from "@Components/Score";
import Coins from "@Components/Coins";
import PowerupBar from "@Components/PowerupBar";
import Navbar from "@Components/Navbar";
import Views, { View } from "@Views/index.tsx";

import { Game } from "@Game/game";
import { Main } from "@Game/main";
import { Scenes } from "@Game/scenes/scenes";

export const game = new Game();

const App = () => {
  const [page, setPage] = useState<View>(View.Play);

  const uid = "" + auth?.currentUser?.uid;
  const docRef = doc(db, "highscores", uid);
  const [highscore] = useDocumentData(docRef);

  if (highscore && highscore.score) {
    game.highscore = highscore.score;
  }

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
      {page != View.Home && <PowerupBar />}
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
