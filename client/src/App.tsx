import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import Difficulty from './difficulty/Difficulty'
import { Game } from './game/game'
import { Scenes } from './game/scenes/scenes'
import { Main } from './game/main'
import Scoreboard from './scoreboard/Scoreboard';

import './App.css'
import Tutorial from './tutorial/Tutorial'

const game = new Game();

const App = () => {

  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayTutorial, setDisplayTutorial] = useState(false);
  const [displayScoreboard, setDisplayScoreboard] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  const [score, setScore] = useState(0);

  // Page Components
  const login = <Login onClick={() => handleLoginClick()} />
  const tutorial = <Tutorial onClick={(startTutorial: boolean) => handleTutorialClick(startTutorial)} />
  // const difficulty = <Difficulty gameAttributes={game} />
  const scoreboard = <Scoreboard />


  // Change Pages
  const handleLoginClick = () => {
    setDisplayLogin(false);
    // if (userTutorialTrue or guest )
    setDisplayTutorial(true);
    // else
    // game.scene = Scenes.battle;
  }

  const handleTutorialClick = (startTutorial: boolean) => {
    game.scene = startTutorial ? Scenes.tutorial : Scenes.battle;
    setDisplayTutorial(false);
  }

  const showScoreBoard = () => {
    setDisplayScoreboard(true);
  }

  const updateScore = (newScore: number) => {
    setScore(newScore);
  }

  return (
    <>
      {game.scene == Scenes.battle && <h1 className='current-score'>Score: {score}</h1>}

      <div className='main-container'>
        <AnimatePresence>
          {displayLogin && login}
          {displayTutorial && tutorial}
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