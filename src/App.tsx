import { useState } from "react";
import Canvas from "./components/canvas";
import Navbar from "./components/navbar";
import { GameAttributes } from "./game/gameAttributes";
import Home from "./views/home";
import { Main } from "./game/main";
import { Scenes } from "./game/scenes/scenes";

enum Pages {
  Home,
  Tutorial,
  Play,
  Gameover,
  Shop,
}

const game = new GameAttributes();

const App = () => {
  const [page, setPage] = useState(Pages.Home);
  const [login, setLogin] = useState(false);

  if (page == Pages.Play) {
    game.scene = Scenes.play;
  } else if (page == Pages.Tutorial) {
    game.scene = Scenes.tutorial;
  }

  return (
    <>
      <Canvas draw={(ctx: CanvasRenderingContext2D) => Main(game, ctx)} />
      {page == Pages.Home ? (
        <Home
          navPlay={() => setPage(Pages.Play)}
          navTutorial={() => setPage(Pages.Tutorial)}
          navShop={() => setPage(Pages.Shop)}
        />
      ) : page == Pages.Shop ? (
        <p>SHOP</p>
      ) : (
        <></>
      )}
      <Navbar
        navHome={() => {
          setPage(Pages.Home);
          game.scene = Scenes.menu;
        }}
        loggedin={login}
        logout={() => setLogin(false)}
      />
    </>
  );
};

export default App;
