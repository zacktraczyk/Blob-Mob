import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import { Game } from './game/game'
import { Scenes } from './game/scenes/scenes'
import { Main } from './game/main'
import Scoreboard from './scoreboard/Scoreboard';

import './App.css'

const game = new Game();

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
    game.scene = Scenes.battle;
  }

  const showScoreBoard = () => {
    setDisplayScoreboard(true);
  }

  // useEffect(() => {
  //   setScore(game.score);
  //   console.log('Apps.tsx: useEffect setScore game.score:', game.score)
  // }, [game.score]);
  // Update Score
  const updateScore = (newScore: number) => {
    setScore(newScore);
  }

  return (
    <>
      {game.scene == Scenes.battle && <h1 className='current-score'>Score: {score}</h1>}

      <div className='main-container'>
        <AnimatePresence>
          {displayLogin && login}
          {displayScoreboard && scoreboard}
        </AnimatePresence>

        <Canvas
          draw={Main}
          gameAttributes={game}
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