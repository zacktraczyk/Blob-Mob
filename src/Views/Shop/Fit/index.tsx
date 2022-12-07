import PlayerFit, { PlayerFitType } from "@Components/PlayerFit";
import { player } from "@Game/entities/player";
import shop from "@Game/shop";
import { Body } from "@Game/shop/bodies";
import { Face } from "@Game/shop/faces";
import { Hat } from "@Game/shop/hats";
import { useEffect, useReducer, useState } from "react";
import Bodies from "./Bodies";
import Faces from "./Faces";
import Hats from "./Hats";

import "./index.scss";

const Fit: React.FC = () => {
  const [playerFit, setPlayerFit] = useState({
    body: player.body,
    face: player.face,
    hat: player.hat,
  });

  shop.setPlayerFit = setPlayerFit;

  return (
    <div className="fit">
      <Hats fit={playerFit} />
      <Bodies fit={playerFit} />
      <Faces fit={playerFit} />
    </div>
  );
};

export default Fit;
