import { State } from './entity'
import { Player } from './player'

const player = new Player(0, 0, 50, 50)

describe('Player Tests', () => {
  it('player creation', () => {
    expect(player.state).toBe(State.Normal)
  })
})
