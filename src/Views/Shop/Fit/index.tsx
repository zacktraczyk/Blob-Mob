import { player } from "@Game/entities/player";
import shop from "@Game/shop";
import { useEffect, useReducer, useState } from "react";
import Bodies from "./Bodies";
import Faces from "./Faces";
import Hats from "./Hats";

import "./index.scss";

const Fit: React.FC = () => {
  const [playerFit, setPlayerFit] = useState({
    body: player.body,
    face: player.face,
  });

  shop.setPlayerFit = setPlayerFit;

  return (
    <div className="fit">
      <Bodies fit={playerFit} />
      <Faces fit={playerFit} />
      {/* <Hats /> */}
    </div>
  );
};

export default Fit;
