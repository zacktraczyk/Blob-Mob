import React, { useState } from 'react'
import { game } from '@App'

const Coins: React.FC = () => {
  const [coins, setCoins] = useState(game.coins)
  game.setCoins = setCoins

  return (
    <div className='absolute bottom-6 left-6 text-4xl'>
      <p>${'' + coins}</p>
    </div>
  )
}

export default Coins
