import { useState } from "react";
import Canvas from "./components/canvas";
import { drawHUD } from "./components/game/scenes/sceneElements";
import Navbar from "./components/navbar";
import Home from "./views/home";

const App = () => {
  const [page, setPage] = useState("home");
  const [login, setLogin] = useState(false);

  return (
    <>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => ctx.fillRect(0, 0, 100, 100)}
      />
      {page === "home" ? <Home /> : <Home />}
      <Navbar
        navHome={() => {setPage("home")}}
        loggedin={login}
        logout={() => setLogin(false)}
      />
    </>
  );
};

export default App;
