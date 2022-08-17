import Canvas from "@Components/Canvas";
import {
  drawFace,
  Face,
  faceCyclops,
  faceNormal,
} from "@Game/entities/player/faces/faces";
import { faceTooth } from "@Game/entities/player/faces/faceTooth";
import "./index.scss";
import { player } from "@Game/entities/player/player";
import PlayerFit from "@Components/PlayerFit";
import { useEffect, useReducer, useState } from "react";
import { game } from "@App";
import Body from "./Body";
import Faces from "./Faces";
import Hat from "./Hat";

const Fit: React.FC = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div className="fit">
      <Body />
      <Faces />
      <Hat />
    </div>
  );
};

export default Fit;
