import { game } from "@App";
import Canvas from "@Components/Canvas";
import { Face, FaceAttr } from "@Game/shop/faces";
import { player } from "@Game/entities/player";

import "./index.scss";
import shop from "@Game/shop";

interface Props {
  name: string;
  cost: number;
  face: keyof typeof Face;
  onClick: Function;
}

const PlayerFit: React.FC<Props> = (props: Props) => {
  const { name, cost, face, onClick } = props;

  let frameClass = "frame-normal";
  let label = "";

  if (cost < 0) {
    frameClass = "frame-locked";
    label = "LOCKED";
  } else if (shop.checkPurchaseFace(face)) {
    if (player.face === face) {
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

  const click = () => {
    shop.purchaseFace(face);
    if (shop.checkPurchaseFace(face)) player.face = face;
    onClick();
  };

  return (
    <div className={`playerFit ${frameClass}`} onClick={() => click()}>
      <p className="playerFit-name">{cost >= 0 ? name : "LOCKED"}</p>
      {cost >= 0 ? (
        <Canvas
          draw={(ctx: CanvasRenderingContext2D) => {
            const faceAttr: FaceAttr = {
              x: ctx.canvas.width / 2,
              y: ctx.canvas.height / 2,
              w: ctx.canvas.width,
              h: ctx.canvas.height,
              xvel: player.xvel,
              yvel: player.yvel,
              frownCount: player.frownCount,
              frownCountMax: player.frownCountMax,
            };

            Face[face](ctx, faceAttr);
          }}
        />
      ) : (
        <div className="playerFit-locked"></div>
      )}
      <p className="playerFit-label">{label}</p>
    </div>
  );
};

export default PlayerFit;
