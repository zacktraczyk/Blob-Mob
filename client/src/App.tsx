import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import { Main } from './game/main'
import Scoreboard from './scoreboard/Scoreboard';

import './App.css'

const App = () => {

  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayScoreboard, setDisplayScoreboard] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  const [score, setScore] = useState(0);
  // Page Components
  const login = <Login onClick={() => handleClick()} />
  const scoreboard = <Scoreboard />


  // Change Pages
  const handleClick = () => {
    setDisplayLogin(false);
    setPlayGame(true);
  }

  const showScoreBoard = () => {
    setDisplayScoreboard(true);
  }

  // Update Score
  const updateScore = (score: number) => {
    setScore(score);
  }

  console.log('App.tsx: playGame state:', playGame);

  return (
    <>
      {playGame && <h1 className='current-score'>Score: {score}</h1>}
      <div className='main-container'>
        <AnimatePresence>
          {displayLogin && login}
          {displayScoreboard && scoreboard}
        </AnimatePresence>

        <Canvas
          draw={Main}
          playGame={playGame}
          onGameover={() => showScoreBoard()}
          updateScore={(score: number) => updateScore(score)}
          width={800}
          height={800}
        />
      </div>
    </>
  )
}

export default App