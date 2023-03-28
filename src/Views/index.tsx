import React from 'react'
import useNavigation from '@Components/useNavigation'
import { game } from '@App'
import { Scenes } from '@Game/scenes/scenes'
import Home from './Home'
import Shop from './Shop'
import Gameover from './Gameover'
import About from './About'
import Difficulty from './Difficulty'
import FirstTime from './FirstTime'
import { sound, Themes } from '@Game/sound'
import Button from '@Components/Button'

export enum View {
  Home,
  Info,
  Shop,
  FirstTime,
  Tutorial,
  Difficulty,
  Play,
  Gameover,
}

const Views: React.FC = () => {
  const { view, setView } = useNavigation()

  switch (view) {
    case View.Home:
      game.scene = Scenes.menu
      sound.play(Themes.Title)
      return <Home />
      break

    case View.Info:
      game.scene = Scenes.menu
      sound.play(Themes.Title)
      return <About />
      break

    case View.FirstTime:
      game.scene = Scenes.menu
      sound.play(Themes.Title)
      return <FirstTime />
      break

    case View.Tutorial:
      game.scene = Scenes.tutorial
      sound.play(Themes.Title)
      break

    case View.Difficulty:
      game.scene = Scenes.menu
      sound.play(Themes.Title)
      return <Difficulty />
      break

    case View.Play:
      localStorage.setItem('firstTime', 'false')
      sound.play(Themes.Main)
      game.scene = Scenes.play
      return <></>
      break

    case View.Shop:
      game.scene = Scenes.shop
      sound.play(Themes.Shop)
      return <Shop />
      break

    case View.Gameover:
      return <Gameover blobsKilled={game.score} />
      break
  }

  return (
    <div className='flex w-[500px] flex-col items-center justify-start gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
      <h1 className='text-center text-3xl'>Oops! Routing Error ☹️</h1>
      <h2 className='text-center text-xl italic text-gameover'>
        &qout;Invalid Page Route Enum {view}&qout;
      </h2>
      <div className='h-5'></div>
      <Button size='w-60 h-10' color='bg-main' onClick={() => setView(View.Home)}>
        Back To Home
      </Button>
    </div>
  )
}

export default Views
