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

const Fit: React.FC = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div className="fit">
      <div className="fit__body">
        <Body />
      </div>

      <div className="fit__face">
        <h2>Face</h2>
        <div className="fit__face-items">
          <PlayerFit
            name={"Default"}
            cost={0}
            locked={false}
            face={Face.Normal}
            faceFunc={faceNormal}
            onClick={forceUpdate}
          />
          <PlayerFit
            name={"Baby"}
            cost={5}
            locked={false}
            face={Face.Tooth}
            faceFunc={faceTooth}
            onClick={forceUpdate}
          />
          <PlayerFit
            name={"Cyclops"}
            cost={15}
            locked={false}
            face={Face.Cyclops}
            faceFunc={faceCyclops}
            onClick={forceUpdate}
          />
          <PlayerFit
            name={"Cyclops"}
            cost={15}
            locked={true}
            face={Face.Cyclops}
            faceFunc={faceCyclops}
            onClick={forceUpdate}
          />
          <PlayerFit
            name={"Cyclops"}
            cost={15}
            locked={true}
            face={Face.Cyclops}
            faceFunc={faceCyclops}
            onClick={forceUpdate}
          />
          <PlayerFit
            name={"Cyclops"}
            cost={15}
            locked={true}
            face={Face.Cyclops}
            faceFunc={faceCyclops}
            onClick={forceUpdate}
          />
        </div>
      </div>

      <div className="fit__hat">
        <h2>Hat</h2>
      </div>
    </div>
  );
};

export default Fit;
