import React, { useState } from 'react'
import PlayerStat from '@Components/PlayerStat'
import { player, PlayerAttributes } from '@Game/entities/player'
import './index.scss'
import shop from '@Game/shop'

const Stats: React.FC = () => {
  const [playerStats, setPlayerStats] = useState<PlayerAttributes>(player.getAttributes())

  shop.setPlayerStats = setPlayerStats

  return (
    <div className='stats'>
      <PlayerStat type={'maxSpeed'} stats={playerStats} />
      <PlayerStat type={'maxHealth'} stats={playerStats} />
      <PlayerStat type={'maxPower'} stats={playerStats} />
      <PlayerStat type={'maxCool'} stats={playerStats} />
    </div>
  )
}

export default Stats
