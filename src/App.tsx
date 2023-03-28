import React, { useEffect, useState } from 'react'
import { auth, getAccount, getHighscore } from './apis/firebase'

import Canvas from '@Components/Canvas'
import Score from '@Components/Score'
import Coins from '@Components/Coins'
import Navbar from '@Components/Navbar/index'
import { ViewContext } from '@Components/useNavigation'
import Views, { View } from '@Views/index.tsx'

import { Game } from '@Game/game'
import { Main } from '@Game/main'

export const game = new Game()

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.Home)

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
          Main(game, view, setView)
        }}
      />

      <ViewContext.Provider value={{ view, setView }}>
        <Score />

        <div className='flex h-screen w-screen items-center justify-center'>
          <Views />
        </div>

        <Coins />
        <Navbar />
      </ViewContext.Provider>
    </>
  )
}

export default App
