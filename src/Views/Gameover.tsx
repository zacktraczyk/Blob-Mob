import React from 'react'
import useNavigation from '@Components/useNavigation'
import { View } from '.'
import { game } from '@App'
import Button from '@Components/Button'

interface GameoverProps {
  blobsKilled: number
}

const Gameover: React.FC<GameoverProps> = ({ blobsKilled }) => {
  const { setView } = useNavigation()

  return (
    <div className='flex flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
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
        <Button color='bg-main' size='w-44 h-10' onClick={() => setView(View.Play)}>
          Play Again
        </Button>
        <Button color='bg-upgrade' size='w-44 h-10' onClick={() => setView(View.Shop)}>
          Upgrade
        </Button>
      </div>
    </div>
  )
}

export default Gameover
