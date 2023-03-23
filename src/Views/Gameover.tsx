import React from 'react'
import { motion } from 'framer-motion'
import { game } from '@App'
import Button from '@Components/Button'

interface GameoverProps {
  blobsKilled: number

  navPlay: () => void
  navShop: () => void
}

const Gameover: React.FC<GameoverProps> = ({ blobsKilled, navPlay, navShop }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 shadow-2xl'
    >
      <h2 className='text-shadow-gameover text-center text-6xl font-bold uppercase'>Gameover</h2>
      <ul className='w-full'>
        <li className='flex w-full items-center justify-between border-b-2 border-gray py-4'>
          <p>Blobs Killed</p>
          <p>{blobsKilled}</p>
        </li>
        <li className='flex w-full items-center justify-between border-b-2 border-gray py-4'>
          <p>Highscore</p>
          <p>{game.highscore}</p>
        </li>
      </ul>
      <div className='flex w-full items-center justify-between'>
        <Button color='bg-main' size='w-44 h-10' onClick={() => navPlay()}>
          Play Again
        </Button>
        <Button color='bg-upgrade' size='w-44 h-10' onClick={() => navShop()}>
          Upgrade
        </Button>
      </div>
    </motion.div>
  )
}

export default Gameover
