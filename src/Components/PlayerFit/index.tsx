import Canvas from "@Components/Canvas";
import { game } from "@App";
import { player } from "@Game/entities/player";
import { Face, FaceAttr } from "@Game/shop/faces";
import { Body, BodyAttr } from "@Game/shop/bodies";
import shop from "@Game/shop";

import "./index.scss";

export enum PlayerFitType {
  Body,
  Face,
  Hat,
}

interface Props {
  type: PlayerFitType;
  face: keyof typeof Face;
  body: keyof typeof Body;
}

const PlayerFit: React.FC<Props> = (props: Props) => {
  const { type, face, body } = props;

  // Get Draw Functions
  const drawBody = Body[body].draw;
  const drawFace = Face[face].draw;
  // const drawHat = Hat[hat].draw;

  // Get Cost
  let cost = 0;
  let name = "";
  if (type == PlayerFitType.Body) {
    cost = Body[body].cost;
    name = Body[body].name;
  } else if (type == PlayerFitType.Face) {
    cost = Face[face].cost;
    name = Face[face].name;
  }
  // else if (type == PlayerFitType.Hat) cost = Hat[hat].cost

  const purchased =
    (type == PlayerFitType.Face && shop.checkPurchaseFace(face)) ||
    (type == PlayerFitType.Body && shop.checkPurchaseBody(body));
  const selected =
    (type == PlayerFitType.Face && player.face === face) ||
    (type == PlayerFitType.Body && player.body === body);

  let frameClass = "frame-normal";
  let label = "";

  if (cost < 0) {
    frameClass = "frame-locked";
    label = "LOCKED";
  } else if (purchased) {
    if (selected) {
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
    shop.purchaseBody(body);
    if (purchased) {
      player.face = face;
      player.body = body;
    }
    shop.syncReactShop();
  };

  return (
    <div className={`playerFit ${frameClass}`} onClick={() => click()}>
      <p className="playerFit-name">{cost >= 0 ? name : "LOCKED"}</p>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => {
          const bodyAtter: BodyAttr = {
            x: ctx.canvas.width / 2,
            y: ctx.canvas.height / 2,
            w: ctx.canvas.width,
            h: ctx.canvas.height,
          };

          const faceAttr: FaceAttr = {
            ...bodyAtter,
            xvel: player.xvel,
            yvel: player.yvel,
            frownCount: player.frownCount,
            frownCountMax: player.frownCountMax,
          };

          drawBody(ctx, bodyAtter);
          drawFace(ctx, faceAttr);
        }}
      />
      <p className="playerFit-label">{label}</p>
    </div>
  );
};

export default PlayerFit;
