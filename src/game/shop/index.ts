import { game } from "@App";
import { player } from "@Game/entities/player";
import { Body } from "./bodies";
import { Face } from "./faces";

class Shop {
  public purchasedFaces: Array<keyof typeof Face>;
  public purchasedBodies: Array<keyof typeof Body>;

  public setPlayerFit:
    | React.Dispatch<
        React.SetStateAction<{
          body: "normal" | "gold";
          face: "normal" | "tooth" | "cyclops";
        }>
      >
    | undefined;

  constructor() {
    this.purchasedFaces = ["normal"];
    this.purchasedBodies = ["normal"];
  }

  public purchaseBody(body: keyof typeof Body): boolean {
    const cost = Body[body].cost;

    if (game.coins < cost) return false;

    if (!this.checkPurchaseBody(body)) {
      game.coins -= cost;
      shop.purchasedBodies.push(body);
      return true;
    }

    return false;
  }

  public purchaseFace(face: keyof typeof Face): boolean {
    const cost = Face[face].cost;

    if (game.coins < cost) return false;

    if (!this.checkPurchaseFace(face)) {
      game.coins -= cost;
      shop.purchasedFaces.push(face);
      // console.log(`added face ${face}, faces: ${shop.purchasedFaces}`);
      return true;
    }

    return false;
  }

  public checkPurchaseFace(face: keyof typeof Face): boolean {
    for (const i in this.purchasedFaces) {
      if (face === this.purchasedFaces[i]) {
        return true;
      }
    }
    return false;
  }

  public checkPurchaseBody(body: keyof typeof Body): boolean {
    for (const i in this.purchasedBodies) {
      if (body === this.purchasedBodies[i]) {
        return true;
      }
    }
    return false;
  }

  public debug(ctx: CanvasRenderingContext2D) {
    let x = ctx.canvas.width * (1 / 3);
    let y = ctx.canvas.height * (7 / 8);
    ctx.fillText("PurchasedFaces:" + this.purchasedFaces, x, y);
    y += 10;
    ctx.fillText("PurchasedBodies:" + this.purchasedBodies, x, y);
  }

  public syncReactShop() {
    if (!this.setPlayerFit) {
      console.error(
        "shop: syncReactShop: setPlayerFit hook not passed to Shop Object"
      );
      return;
    }

    this.setPlayerFit({ body: player.body, face: player.face });
  }
}

const shop = new Shop();
export default shop;
