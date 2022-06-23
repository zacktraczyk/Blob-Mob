import React, { useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import { Init } from './game/main'
import Scoreboard from './scoreboard/Scoreboard';

import './App.css'

function App() {

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

  const handleClick = () => {
    setPage(canvas);
  }

  const showScoreBoard = () => {
    setPage(scoreboard);
  }

  const updateScore = (score: number) => {
    setScore(score);
  }

    console.log(score);
  return (
    <>
      <h1 className='title'>Blob Mob</h1>
      {/* <h1 className='score'>Score: {score}</h1> */}
      <h1 className='score'>{score}</h1>
      <div className='main-container'>
        {page}
      </div>
    </>
  )
}

export default App