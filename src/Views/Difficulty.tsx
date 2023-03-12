import React from 'react'
import { Difficulties, difficultyScalar } from '@Game/difficulty'
import { useState } from 'react'
import Button from '@Components/Button'

import difficulyEasy from '@Assets/images/difficulty-easy.jpg'
import difficulyMedium from '@Assets/images/difficulty-medium.jpg'
import difficulyHard from '@Assets/images/difficulty-hard.jpg'

const difficulies = [
  {
    difficulty: Difficulties.Easy,
    title: 'Easier',
    preview: difficulyEasy,
    descriptors: [
      <>
        <b>2x</b> Slower Enemies
      </>,
    ],
  },
  { difficulty: Difficulties.Medium, preview: difficulyMedium, title: 'Normal' },
  {
    difficulty: Difficulties.Hard,
    title: 'Harder',
    preview: difficulyHard,
    descriptors: [
      <>
        <b>2x</b> Coins
      </>,
      <>
        <b>2x</b> Score
      </>,
      <>
        <b>2x</b> Faster Enemies
      </>,
    ],
  },
]
interface DifficultyProps {
  navPlay: () => void
}

const Difficulty: React.FC<DifficultyProps> = ({ navPlay }) => {
  const [selected, setSelected] = useState<Difficulties>(Difficulties.Medium)

  return (
    <div className='flex w-[600px] flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
      <h2 className='text-center text-xl font-bold'>Difficulty</h2>
      <div className='my-4 flex w-full grow items-stretch justify-center gap-5'>
        {difficulies.map((diff, key) => (
          <DifficultyPanel
            key={key}
            active={selected === diff.difficulty}
            setSelected={setSelected}
            {...diff}
          />
        ))}
      </div>

      <Button
        color='bg-main'
        size='w-60 h-10'
        onClick={() => {
          difficultyScalar.difficulty = selected

          navPlay()
        }}
      >
        Play
      </Button>
    </div>
  )
}

interface DifficultyPanelProps {
  active: boolean
  setSelected: React.Dispatch<React.SetStateAction<Difficulties>>
  difficulty: Difficulties
  preview: string
  title: string
  descriptors?: JSX.Element[]
}

const DifficultyPanel: React.FC<DifficultyPanelProps> = ({
  active,
  setSelected,
  difficulty,
  preview,
  title,
  descriptors,
}) => {
  return (
    <div
      className={`grid border-4 text-center transition-all ${
        active && 'border-facebook shadow-[-0_0_1em_0.3em_#12bcf1]'
      }`}
      onClick={() => setSelected(difficulty)}
    >
      <img className='col-start-1 row-start-1' src={preview} />
      <div className='col-start-1 row-start-1 flex h-full flex-col items-center justify-between py-4'>
        <h3 className='text-xl font-bold text-main'>{title}</h3>
        <ul>
          {descriptors?.map((desc, key) => (
            <li className='text-sm text-text-alt' key={key}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Difficulty
