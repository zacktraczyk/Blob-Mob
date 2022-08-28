import Canvas from "@Components/Canvas";
import { game } from "@App";
import { player } from "@Game/entities/player";
import { Face, FaceAttr } from "@Game/shop/faces";
import { Body, BodyAttr } from "@Game/shop/bodies";
import { Hat, HatAttr } from "@Game/shop/hats";
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
  hat: keyof typeof Hat;
}

const PlayerFit: React.FC<Props> = (props: Props) => {
  const { type, face, body, hat } = props;

  // Get Draw Functions
  const drawBody = Body[body].draw;
  const drawFace = Face[face].draw;
  const drawHat = Hat[hat].draw;

  // Get Cost
  let cost = 0;
  let name = "";
  let purchased = false;
  let selected = false;
  if (type == PlayerFitType.Body) {
    cost = Body[body].cost;
    name = Body[body].name;
    purchased = shop.checkPurchaseBody(body);
    selected = player.body === body;
  } else if (type == PlayerFitType.Face) {
    cost = Face[face].cost;
    name = Face[face].name;
    purchased = shop.checkPurchaseFace(face);
    selected = player.face === face;
  } else if (type == PlayerFitType.Hat) {
    cost = Hat[hat].cost;
    name = Hat[hat].name;
    purchased = shop.checkPurchaseHat(hat);
    selected = player.hat === hat;
  }

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
    shop.purchaseHat(hat);
    if (purchased) {
      player.face = face;
      player.body = body;
      player.hat = hat;
    }
    shop.syncReactFitShop();
  };

  return (
    <div className={`playerFit ${frameClass}`} onClick={() => click()}>
      <p className="playerFit-name">{cost >= 0 ? name : "LOCKED"}</p>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => {
          const pos = {
            x: ctx.canvas.width / 2,
            y: ctx.canvas.height / 2,
            w: ctx.canvas.width,
            h: ctx.canvas.height,
          };

          if (type == PlayerFitType.Hat) {
            drawHat(ctx, {
              ...pos,
              y: ctx.canvas.height * (11 / 8),
              xvel: player.xvel,
              yvel: player.yvel,
            });
            return;
          }

          drawBody(ctx, {
            ...pos,
            cool: player.cool,
            maxCool: player.maxCool,
            damaging: player.damaging,
          });

          drawFace(ctx, {
            ...pos,
            xvel: player.xvel,
            yvel: player.yvel,
            frownCount: player.frownCount,
            frownCountMax: player.frownCountMax,
          });
        }}
      />
      <p className="playerFit-label">{label}</p>
    </div>
  );
};

export default PlayerFit;
