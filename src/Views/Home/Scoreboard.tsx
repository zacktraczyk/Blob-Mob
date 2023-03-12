import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, db } from '../../apis/firebase'
import { collection, limit, orderBy, query } from '@firebase/firestore'

const Scoreboard: React.FC = () => {
  const highscoresRef = collection(db, 'highscores')
  const q = query(highscoresRef, orderBy('score', 'desc'), limit(10))

  const [highscores, loading, error] = useCollectionData(q)

  if (error) {
    return (
      <div className='col-start-2 row-start-1 row-end-3 flex w-full flex-col items-stretch justify-start gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
        <h2 className='text-center text-xl font-bold'>Top Scores</h2>
        <h2 className='text-error'>Can&apos;t get Highscores: {'' + error}</h2>
      </div>
    )
  }

  return (
    <div className='col-start-2 row-start-1 row-end-3 flex w-4/6 flex-col items-stretch justify-start gap-3 rounded-3xl bg-card p-10 shadow-2xl'>
      <h2 className='text-center text-xl font-bold'>Top Scores</h2>
      <ul>
        {loading
          ? [...Array(9).keys()].map((key) => (
              <li
                key={key}
                className='flex h-11 grow animate-pulse items-center justify-between border-b-2 border-gray'
              >
                <div className='h-4 w-20 rounded bg-gray'></div>
                <div className='h-4 w-10 rounded bg-gray'></div>
              </li>
            ))
          : highscores?.map((highscore, key) => (
              <li
                key={key}
                className='flex h-11 grow items-center justify-between border-b-2 border-gray text-sm'
              >
                <p className={isUserScore(highscore.uid) ? 'bg-main font-bold' : ''}>
                  {highscore.username}
                </p>
                <p className={isUserScore(highscore.uid) ? 'bg-main font-bold' : ''}>
                  {highscore.score}
                </p>
              </li>
            ))}
      </ul>
    </div>
  )
}

const isUserScore = (uid: string): boolean => {
  return auth?.currentUser?.uid === uid
}

export default Scoreboard
