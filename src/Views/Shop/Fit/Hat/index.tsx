import { useReducer } from "react";
import Canvas from "@Components/Canvas";
import PlayerFit from "@Components/PlayerFit";

import "./index.scss";

const Hat: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="fit-hats">
      <h2>Hats</h2>
      <div className="fit-hats__items">
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

export default Hat;
