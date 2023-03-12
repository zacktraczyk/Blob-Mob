import { game } from '@App'
import { player, PlayerAttributes } from '@Game/entities/player'
import { Body } from './bodies'
import { Face } from './faces'
import { Hat } from './hats'
import Stat from './stats'

class Shop {
  public purchasedFaces: Array<keyof typeof Face>
  public purchasedBodies: Array<keyof typeof Body>
  public purchasedHats: Array<keyof typeof Hat>

  public purchasedStatsIdx: PlayerAttributes

  public setPlayerStats: React.Dispatch<React.SetStateAction<PlayerAttributes>> | undefined

  public setPlayerFit:
    | React.Dispatch<
        React.SetStateAction<{
          body: keyof typeof Body
          face: keyof typeof Face
          hat: keyof typeof Hat
        }>
      >
    | undefined

  constructor() {
    this.purchasedFaces = ['normal']
    this.purchasedBodies = ['normal']
    this.purchasedHats = ['normal']
    this.purchasedStatsIdx = {
      maxHealth: 0,
      maxPower: 0,
      maxCool: 0,
      maxSpeed: 0,
    }
  }

  // Stats ------------------------
  public purchaseStat(stat: keyof PlayerAttributes): boolean {
    const idx = this.purchasedStatsIdx[stat]
    const cost = Stat[stat].priceScale[idx]

    if (game.coins < cost) return false

    if (idx < Stat[stat].priceScale.length) {
      game.coins -= cost
      this.purchasedStatsIdx[stat]++
      player[stat] += Stat[stat].increase
      this.syncReactStatsShop()
      return true
    }

    return false
  }

  public syncReactStatsShop() {
    if (!this.setPlayerStats) {
      console.error('shop: syncReactShop: setPlayerStats hook not passed to Shop Object')
      return
    }

    console.log('SYNCING STATS')

    this.setPlayerStats(player.getAttributes())
  }

  public syncPlayerStatsShop() {
    let attr: keyof PlayerAttributes
    for (attr in this.purchasedStatsIdx) {
      player[attr] = Stat[attr].initial + Stat[attr].increase * this.purchasedStatsIdx[attr]
    }
  }
  // Fit --------------------------
  public purchaseBody(body: keyof typeof Body): boolean {
    const cost = Body[body].cost

    if (game.coins < cost) return false

    if (!this.checkPurchaseBody(body)) {
      game.coins -= cost
      this.purchasedBodies.push(body)
      return true
    }

    return false
  }

  public purchaseFace(face: keyof typeof Face): boolean {
    const cost = Face[face].cost

    if (game.coins < cost) return false

    if (!this.checkPurchaseFace(face)) {
      game.coins -= cost
      this.purchasedFaces.push(face)
      // console.log(`added face ${face}, faces: ${shop.purchasedFaces}`);
      return true
    }

    return false
  }

  public purchaseHat(hat: keyof typeof Hat): boolean {
    const cost = Hat[hat].cost

    if (game.coins < cost) return false

    if (!this.checkPurchaseHat(hat)) {
      game.coins -= cost
      this.purchasedHats.push(hat)
      // console.log(`added face ${face}, faces: ${shop.purchasedFaces}`);
      return true
    }

    return false
  }

  public checkPurchaseFace(face: keyof typeof Face): boolean {
    for (const i in this.purchasedFaces) {
      if (face === this.purchasedFaces[i]) {
        return true
      }
    }
    return false
  }

  public checkPurchaseBody(body: keyof typeof Body): boolean {
    for (const i in this.purchasedBodies) {
      if (body === this.purchasedBodies[i]) {
        return true
      }
    }
    return false
  }

  public checkPurchaseHat(hat: keyof typeof Hat): boolean {
    for (const i in this.purchasedHats) {
      if (hat === this.purchasedHats[i]) {
        return true
      }
    }
    return false
  }

  public syncReactFitShop() {
    if (!this.setPlayerFit) {
      console.error('shop: syncReactShop: setPlayerFit hook not passed to Shop Object')
      return
    }

    this.setPlayerFit({
      body: player.body,
      face: player.face,
      hat: player.hat,
    })
  }

  public debug(ctx: CanvasRenderingContext2D) {
    const x = ctx.canvas.width * (1 / 3)
    let y = ctx.canvas.height * (7 / 8)
    ctx.fillText('PurchasedFaces:' + this.purchasedFaces, x, y)
    y += 10
    ctx.fillText('PurchasedBodies:' + this.purchasedBodies, x, y)
  }
}

const shop = new Shop()
export default shop
