import React from 'react'
import { motion } from 'framer-motion'
import Login from './Login'
import Scoreboard from './Scoreboard'
import ShopCard from './ShopCard'

interface HomeProps {
  navPlay: () => void
  navTutorial: () => void
  navShop: () => void
}

const Home: React.FC<HomeProps> = ({ navPlay, navTutorial, navShop }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className='flex h-[500px] w-[600px] items-stretch gap-5'
    >
      <div className='flex w-full flex-col gap-5'>
        <Login navPlay={() => navPlay()} navTutorial={() => navTutorial()} />
        <ShopCard navShop={() => navShop()} />
      </div>
      <Scoreboard />
    </motion.div>
  )
}

export default Home
