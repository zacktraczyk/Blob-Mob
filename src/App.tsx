import React, { useEffect, useState } from 'react'
import { auth, getAccount, getHighscore } from './apis/firebase'

import Canvas from '@Components/Canvas'
import Score from '@Components/Score'
import Coins from '@Components/Coins'
import Navbar from '@Components/Navbar'
import { ViewContext } from 'hooks/useNavigation'
import Views, { View } from '@Views/index.tsx'
import useWindowDimensions from 'hooks/useWindowDimensions'

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
      <ResizeScreenWarning />

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

const ResizeScreenWarning: React.FC = () => {
  const { width, height } = useWindowDimensions()

  if (width > 700 && height > 700) {
    return <></>
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-main'>
      <h1 className='text-center text-2xl font-bold text-text-alt'>Screen Size Not Supported</h1>
      <div className='h-5'></div>
      <h1 className='text-center text-xl italic'>Please Resize the Screen</h1>
    </div>
  )
}

export default App
