import React from 'react'
import { PlayerAttributes } from '@Game/entities/player'
import { game } from '@App'
import './index.scss'
import Stat from '@Game/shop/stats'
import shop from '@Game/shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export interface PlayerStatProps {
  type: keyof PlayerAttributes
  stats: PlayerAttributes
}

const PlayerStat: React.FC<PlayerStatProps> = ({ type, stats }) => {
  const cost = Stat[type].priceScale[shop.purchasedStatsIdx[type]]
  const name = Stat[type].name
  const value = stats[type]

  const afford = cost <= game.coins
  const affordClass = afford ? 'afford' : 'cant-afford'

  const purchaseUpdate = () => {
    shop.purchaseStat(type)
  }

  return (
    <div className='playerStat'>
      <div className='playerStat__stat'>
        <p className='playerStat__stat-name'>{name}</p>
        <p className='playerStat__stat-number'>{value}</p>
      </div>
      <div className={`playerStat__upgrade ${affordClass}`}>
        <Arrow type={type} afford={afford} onClick={purchaseUpdate} />
        <span className='playerStat__upgrade-cost'>
          <p>{'$' + cost}</p>
        </span>
      </div>
    </div>
  )
}

interface ArrowProps {
  type: keyof PlayerAttributes
  afford: boolean
  onClick: () => void
}

const Arrow: React.FC<ArrowProps> = ({ type, afford, onClick }) => {
  switch (type) {
    case 'maxSpeed':
      return (
        <FontAwesomeIcon
          icon={faArrowUp}
          className={afford ? 'text-speed' : 'text-gray'}
          size='2xl'
          onClick={onClick}
        />
      )
      break
    case 'maxHealth':
      return (
        <FontAwesomeIcon
          icon={faArrowUp}
          className={afford ? 'text-health' : 'text-gray'}
          size='2xl'
          onClick={onClick}
        />
      )
      break
    case 'maxPower':
      return (
        <FontAwesomeIcon
          icon={faArrowUp}
          className={afford ? 'text-power' : 'text-gray'}
          size='2xl'
          onClick={onClick}
        />
      )
      break
    case 'maxCool':
      return (
        <FontAwesomeIcon
          icon={faArrowDown}
          className={afford ? 'text-cool' : 'text-gray'}
          size='2xl'
          onClick={onClick}
        />
      )
      break
  }
}

export default PlayerStat
