import Canvas from "@Components/Canvas";
import {
  drawFace,
  Face,
  faceCyclops,
  faceNormal,
} from "@Game/entities/player/faces/faces";
import { faceTooth } from "@Game/entities/player/faces/faceTooth";
import { player } from "@Game/entities/player/player";
import PlayerFit from "@Components/PlayerFit";
import { useReducer } from "react";
import { game } from "@App";

import "./index.scss";

const Body: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="fit-body">
      <h2>Body</h2>
      <div className="fit-body__items">
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={0}
          locked={true}
          face={Face.Normal}
          faceFunc={faceNormal}
          onClick={forceUpdate}
        />
      </div>
    </div>
  );
};

export default Body;
