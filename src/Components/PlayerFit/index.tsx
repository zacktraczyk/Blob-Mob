import { game } from "@App";
import Canvas from "@Components/Canvas";
import { Face } from "@Game/entities/player/faces/faces";
import { player } from "@Game/entities/player/player";

import "./index.scss";

interface Props {
  name: string;
  cost: number;
  locked: boolean;
  face: Face;
  faceFunc: Function;
  onClick: Function;
}

const PlayerFit: React.FC<Props> = (props: Props) => {
  const { name, cost, locked, face, faceFunc, onClick } = props;

  let frameClass = "frame-normal";
  let label = "";
  if (locked) {
    frameClass = "frame-locked";
    label = "LOCKED";
  } else if (face in game.purchasedFaces) {
    if (player.face == face) {
      frameClass = "frame-selected";
      label = "SELECTED";
    }
  } else {
    if (game.coins < cost) {
      frameClass = "frame-cant-afford";
      label = "$" + cost;
    } else if (game.coins >= cost) {
      frameClass = "frame-afford";
      label = "$" + cost;
    }
  }
  return (
    <div
      className={`playerFit ${frameClass}`}
      onClick={() => {
        if (locked || game.coins < cost) {
          return;
        }
        if (!(face in game.purchasedFaces)) {
          game.coins -= cost;
          game.purchasedFaces.push(face);
        }
        player.face = face;
        onClick();
      }}
    >
      <p className="playerFit-name">{!locked ? name : "LOCKED"}</p>
      {!locked ? (
        <Canvas
          draw={(ctx: CanvasRenderingContext2D) =>
            faceFunc(
              ctx,
              ctx.canvas.width / 2,
              ctx.canvas.height / 2,
              ctx.canvas.width,
              ctx.canvas.height,
              0,
              0,
              player.frownCount,
              player.frownCountMax
            )
          }
        />
      ) : (
        <div className="playerFit-locked"></div>
      )}
      <p className="playerFit-label">{label}</p>
    </div>
  );
};

export default PlayerFit;
