import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import Canvas from './components/canvas/Canvas'
import Login from './components/login/Login'
import SummonLogin from './components/summonLogin/summonLogin'
import Tutorial from './components/tutorial/Tutorial'
import { GameAttributes } from './components/game/gameAttributes'
import { Scenes } from './components/game/scenes/scenes'
import { Main } from './components/game/main'
import Scoreboard from './components/scoreboard/Scoreboard';

import './App.css'

const game = new GameAttributes();

const App = () => {

  // Component Display States
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayTutorial, setDisplayTutorial] = useState(false);
  const [displayScoreboard, setDisplayScoreboard] = useState(false);
  const [displaySummonLogin, setDisplaySummonLogin] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  const [score, setScore] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  // Page Components
  const login = <Login onSubmission={(data: Object, newUser: boolean) => handleLoginFinish(data, newUser)} />
  const tutorial = <Tutorial onClick={(startTutorial: boolean) => handleTutorialFinish(startTutorial)} />
  const scoreboard = <Scoreboard onPlayAgain={() => playAgain()}/>


  // Change Pages
  const handleLoginFinish = (data: Object, newUser: boolean) => {
    console.log('App.tsx: handleLoginFinish():', data);
    setLoggedIn(true);
    setDisplayLogin(false);
    setDisplaySummonLogin(true);
    // if (userTutorialTrue or guest )
    setDisplayTutorial(true);
    // else
    // game.scene = Scenes.battle;
  }

  const handleLoginStart = () => {
    game.scene = Scenes.menu;
    setDisplayLogin(true);
    setDisplayScoreboard(false);
    setDisplayTutorial(false);
    setDisplaySummonLogin(false);
  }

  const handleTutorialFinish = (startTutorial: boolean) => {
    game.scene = startTutorial ? Scenes.tutorial : Scenes.battle;
    setDisplayTutorial(false);
  }

  const showScoreBoard = () => {
    setDisplayScoreboard(true);
  }

  const updateScore = (newScore: number) => {
    setScore(newScore);
  }

  const playAgain = () => {
    setDisplayScoreboard(false);
    game.scene = Scenes.battle;
  }

  return (
    <>
      {game.scene == Scenes.battle && <h1 className='current-score'>Score: {score}</h1>}

      <div className='main-container'>
        <AnimatePresence>
          {displayLogin && login}
          {displaySummonLogin && <SummonLogin onLogin={() => handleLoginStart()} loggedIn={loggedIn}/>}
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