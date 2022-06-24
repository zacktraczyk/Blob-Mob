import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import { Init } from './game/main'
import Scoreboard from './scoreboard/Scoreboard';

import './App.css'

const App = () => {

  // Page Components
  const login = <Login onClick={() => handleClick()} />
  const canvas =
    <Canvas
      draw={Init}
      onGameover={() => showScoreBoard()}
      updateScore={(score: number) => updateScore(score)}
      width={800}
      height={800}
    />
  const scoreboard = <Scoreboard />

  const [page, setPage] = useState(login);
  const [score, setScore] = useState(0);

  // Change Pages
  const handleClick = () => {
    setPage(canvas)
  }

  const showScoreBoard = () => {
    setPage(scoreboard);
  }

  // Update Score
  const updateScore = (score: number) => {
    setScore(score);
  }

  return (
    <>
      <h1 className='title'>Blob Mob</h1>
      <h1 className='current-score'>Score: {score}</h1>
      <div className='main-container'>
        <AnimatePresence>
            {page}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App