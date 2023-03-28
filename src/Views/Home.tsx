import React from 'react'
import useNavigation from '@Components/useNavigation'
import { View } from '.'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, limit, orderBy, query } from '@firebase/firestore'
import { auth, db, signInFacebook, signInGoogle, signOut } from '@Apis/firebase'
import Button from '@Components/Button'

// Container Home View
const Home: React.FC = () => {
  return (
    <div className='flex h-[500px] w-[600px] items-stretch gap-5'>
      <div className='flex w-full flex-col gap-5'>
        <Login />
        <ShopCard />
      </div>
      <Scoreboard />
    </div>
  )
}

// Login Section
const Login: React.FC = () => {
  const [user] = useAuthState(auth)
  const { setView } = useNavigation()

  const navPlay = () => {
    const firstTime = localStorage.getItem('firstTime')
    if (firstTime === 'false') {
      setView(View.Difficulty)
    } else {
      setView(View.FirstTime)
    }
  }

  return (
    <div className='flex grow flex-col items-stretch justify-start gap-4 rounded-3xl bg-card p-10 shadow-2xl'>
      <h2 className='text-shadow-main text-center text-2xl font-bold uppercase'>Blob Mob</h2>

      <div className='flex flex-col gap-3'>
        <Button color='bg-main' size='h-10 w-full' onClick={() => navPlay()}>
          {user ? 'Play' : 'Play as Guest'}
        </Button>
        <div className='flex flex-row gap-1'>
          {user ? (
            <Button color='bg-signout' size='h-10 w-full' onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <div className='flex w-full gap-1'>
              <Button
                color='bg-google'
                size='h-8 w-full'
                textstyle='text-xs'
                onClick={() => signInGoogle()}
              >
                Google
                <i className='fa-brands fa-google'></i>
              </Button>
              <Button
                color='bg-facebook'
                size='h-8 w-full'
                textstyle='text-xs'
                onClick={() => signInFacebook()}
              >
                Facebook
                <i className='fa-brands fa-square-facebook'></i>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className='text-center text-text-secondary'>
        <b>WASD</b> to move, <b>SPACE</b> to attack, or play...
      </div>

      <Button color='bg-tutorial' size='h-10 w-full' onClick={() => setView(View.Tutorial)}>
        Tutorial
      </Button>
    </div>
  )
}

// Shop "Upgrade" Section
const ShopCard: React.FC = () => {
  const { setView } = useNavigation()

  return (
    <div className='flex flex-col items-stretch justify-center gap-3 rounded-3xl bg-card px-10 py-7 shadow-2xl'>
      <h2 className='text-center text-2xl font-bold'>Shop</h2>
      <Button color='bg-upgrade' size='h-10 w-full' onClick={() => setView(View.Shop)}>
        Upgrade
      </Button>
    </div>
  )
}

// Scoreboard Section
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
export default Home
