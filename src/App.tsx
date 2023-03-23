import React, { useEffect, useState } from 'react'
import { auth, getAccount, getHighscore } from './apis/firebase'
import { AnimatePresence, motion } from 'framer-motion'

import Canvas from '@Components/Canvas'
import Score from '@Components/Score'
import Coins from '@Components/Coins'
import Navbar from '@Components/Navbar/index'
import Views, { View } from '@Views/index.tsx'

import { Game } from '@Game/game'
import { Main } from '@Game/main'

export const game = new Game()

const App: React.FC = () => {
  const [page, setPage] = useState<View>(View.Home)

  const onAuthStateChanged = () => {
    getAccount()
    getHighscore()
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  return (
    <>
      <Canvas
        draw={(ctx: CanvasRenderingContext2D) => {
          game.ctx = ctx
          Main(game, page, setPage)
        }}
      />
      <Score />

      <div className='flex h-screen w-screen items-center justify-center'>
        <AnimatePresence mode='wait' initial={false}>
          <Views key={page} page={page} setPage={setPage} />
        </AnimatePresence>
      </div>
      <Coins />
      <Navbar navHome={() => setPage(View.Home)} navInfo={() => setPage(View.Info)} />
    </>
  )
}

export default App
