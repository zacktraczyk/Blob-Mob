import React from 'react'
import Button from '@Components/Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInGoogle, signInFacebook, signOut, auth } from '../../apis/firebase'

interface LoginProps {
  navPlay: () => void
  navTutorial: () => void
}

const Login: React.FC<LoginProps> = ({ navPlay, navTutorial }) => {
  const [user] = useAuthState(auth)

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

      <Button color='bg-tutorial' size='h-10 w-full' onClick={() => navTutorial()}>
        Tutorial
      </Button>
    </div>
  )
}

export default Login
