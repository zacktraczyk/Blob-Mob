import React from 'react'

import './index.scss'

const PowerupBar: React.FC = () => {
  return (
    <div className='powerupBar'>
      <div className='powerupBar__powerup-container'>
        <div className='powerup-slot'></div>
        <div className='powerup-slot'></div>
        <div className='powerup-slot'></div>
      </div>
    </div>
  )
}

export default PowerupBar
