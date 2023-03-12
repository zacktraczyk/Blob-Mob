import React from 'react'
import { PlayerAttributes } from '@Game/entities/player'
import { game } from '@App'
import './index.scss'
import Stat from '@Game/shop/stats'
import shop from '@Game/shop'

export interface PlayerStatProps {
  type: keyof PlayerAttributes
  stats: PlayerAttributes
}

const PlayerStat: React.FC<PlayerStatProps> = ({ type, stats }) => {
  const cost = Stat[type].priceScale[shop.purchasedStatsIdx[type]]
  const name = Stat[type].name
  const value = stats[type]

  let dir = 'up'
  let arrowClass = 'default'
  switch (type) {
    case 'maxSpeed':
      arrowClass = 'speed'
      break
    case 'maxHealth':
      arrowClass = 'health'
      break
    case 'maxPower':
      arrowClass = 'power'
      break
    case 'maxCool':
      arrowClass = 'cool'
      dir = 'down'
      break
  }

  const afford = cost <= game.coins ? 'afford' : 'cant-afford'

  const purchaseUpdate = () => {
    shop.purchaseStat(type)
  }

  return (
    <div className='playerStat'>
      <div className='playerStat__stat'>
        <p className='playerStat__stat-name'>{name}</p>
        <p className='playerStat__stat-number'>{value}</p>
      </div>
      <div className={`playerStat__upgrade ${dir} ${afford} ${arrowClass}`}>
        <i className='fa-solid fa-arrow-up fa-2xl' onClick={purchaseUpdate}></i>
        <span className='playerStat__upgrade-cost'>
          <p>{'$' + cost}</p>
        </span>
      </div>
    </div>
  )
}

export default PlayerStat
