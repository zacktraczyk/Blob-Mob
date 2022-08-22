import { useReducer } from "react";
import Canvas from "@Components/Canvas";
import PlayerFit from "@Components/PlayerFit";

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
          face={"normal"}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Baby"}
          cost={10}
          face={"tooth"}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Cyclops"}
          cost={10}
          face={"cyclops"}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={-1}
          face={"normal"}
          onClick={forceUpdate}
        />
        <PlayerFit
          name={"Default"}
          cost={-1}
          face={"normal"}
          onClick={forceUpdate}
        />
      </div>
    </div>
  );
};

export default Faces;
