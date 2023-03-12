import React from 'react'
import Login from '@Views/Home/Login'
import Scoreboard from '@Views/Home/Scoreboard'
import ShopCard from '@Views/Home/ShopCard'
import './index.scss'

interface Props {
  navPlay: () => void
  navTutorial: () => void
  navShop: () => void
}

const Home: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial, navShop } = props

  return (
    <div className='home'>
      <Login navPlay={() => navPlay()} navTutorial={() => navTutorial()} />
      <ShopCard navShop={() => navShop()} />
      <Scoreboard />
    </div>
  )
}

export default Home
