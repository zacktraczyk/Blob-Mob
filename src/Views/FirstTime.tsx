import React from 'react'
import useNavigation from 'hooks/useNavigation'
import { View } from '.'
import Button from '@Components/Button'

const FirstTime: React.FC = () => {
  const { setView } = useNavigation()

  return (
    <div className='flex flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
      <h2 className='text-center text-xl font-bold '>Need a Tutorial?</h2>
      <div className='h-2'></div>
      <div className='flex items-center gap-5'>
        <Button color='bg-main' size='w-40 h-10' onClick={() => setView(View.Difficulty)}>
          Nah, Play
        </Button>
        <Button color='bg-tutorial' size='w-44 h-10' onClick={() => setView(View.Tutorial)}>
          Tutorial
        </Button>
      </div>
    </div>
  )
}

export default FirstTime
