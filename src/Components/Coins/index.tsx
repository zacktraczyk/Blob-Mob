import React, { useState } from 'react'
import { game } from '@App'

import './index.scss'

const Coins: React.FC = () => {
  const [coins, setCoins] = useState(game.coins)
  game.setCoins = setCoins

  return (
    <div className='coins'>
      <p>${'' + coins}</p>
    </div>
  )
}

export default Coins
