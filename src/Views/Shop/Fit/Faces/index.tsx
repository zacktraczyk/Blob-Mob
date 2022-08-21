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

const Faces: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="fit-faces">
      <h2>Faces</h2>
      <div className="fit-faces__items">
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
  );
};

export default Faces;
