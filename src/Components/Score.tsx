import React, { useState } from 'react'
import { game } from '../App'

const Score: React.FC = () => {
  const [score, setScore] = useState(game.score)
  const [highscore, setHighscore] = useState(game.highscore)

  game.setScore = setScore
  game.setHighscore = setHighscore

  return (
    <div className='absolute left-6 top-3 text-2xl'>
      <p>Score: {'' + score}</p>
      <p>highscore: {'' + highscore}</p>
    </div>
  )
}

export default Score
