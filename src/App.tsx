import { doc } from "firebase/firestore";
import { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db } from "./apis/firebase";
import Canvas from "./components/Canvas";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import { player, PlayerAttributes } from "./Game/entities/player";
import { GameAttributes } from "./Game/gameAttributes";
import { Main } from "./Game/main";
import { Scenes } from "./Game/scenes/scenes";
import Views, { View } from "./Views";

export const game = new GameAttributes();

const App = () => {
  const [page, setPage] = useState<View>(View.Home);

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
