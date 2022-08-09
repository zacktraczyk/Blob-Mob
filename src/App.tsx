import { useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import { GameAttributes } from "./Game/gameAttributes";
import Home from "./views/Home";
import { Main } from "./Game/main";
import { Scenes } from "./Game/scenes/scenes";
import Score from "./components/Score";
import Shop from "./views/Shop";
import { Pages } from "./pages";

const game = new GameAttributes();

const App = () => {
  const [page, setPage] = useState(Pages.Home);
  const [coins, setCoins] = useState(0);

  if (page == Pages.Play) {
    game.scene = Scenes.play;
  } else if (page == Pages.Tutorial) {
    game.scene = Scenes.tutorial;
  }

  return (
    <>
      <Canvas draw={(ctx: CanvasRenderingContext2D) => Main(game, ctx, setPage)} />
      {/* <Score score={game.score} highscore={0} /> */}
      <div className="app">
        {page == Pages.Home ? (
          <Home
            navPlay={() => setPage(Pages.Play)}
            navTutorial={() => setPage(Pages.Tutorial)}
            navShop={() => {
              setPage(Pages.Shop);
              game.scene = Scenes.shop;
            }}
          />
        ) : page == Pages.Shop ? (
          <Shop
            navHome={() => {
              setPage(Pages.Home);
              game.scene = Scenes.menu;
            }}
          ></Shop>
        ) : page == Pages.Gameover ? (
          <h1>GAMEOVER</h1>
        ) : (
          <></>
        )}
      </div>
      <Navbar
        navHome={() => {
          setPage(Pages.Home);
          game.scene = Scenes.menu;
        }}
        coins={coins}
      />
    </>
  );
};

export default App;
