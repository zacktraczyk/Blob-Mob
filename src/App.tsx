import { useState } from "react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import { GameAttributes } from "./Game/gameAttributes";
import { Main } from "./Game/main";
import { Scenes } from "./Game/scenes/scenes";
import Views, { View } from "./Views";

export const game = new GameAttributes();

const App = () => {
  const [page, setPage] = useState<View>(View.Home);
  const [coins, setCoins] = useState<number>(0);

  return (
    <>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => Main(game, ctx, setPage)}
      />
      {/* <Score score={game.score} highscore={0} /> */}
      <div className="app">
        <Views page={page} setPage={setPage} />
      </div>
      <Navbar
        navHome={() => {
          setPage(View.Home);
          game.scene = Scenes.menu;
        }}
        coins={coins}
      />
    </>
  );
};

export default App;
