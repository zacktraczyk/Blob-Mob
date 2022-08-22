import { game } from "@App";
import { player } from "@Game/entities/player";
import { Face } from "./faces";

class Shop {
  public purchasedFaces: Array<keyof typeof Face>;

  constructor() {
    this.purchasedFaces = ["normal"];
  }

  public purchaseFace(face: keyof typeof Face): boolean {
    const cost = 10; // TEMP
    if (game.coins < cost) return false;

    if (!this.checkPurchaseFace(face)) {
      game.coins -= cost;
      shop.purchasedFaces.push(face);
      console.log(`added face ${face}, faces: ${shop.purchasedFaces}`);
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
}

const shop = new Shop();
export default shop;
