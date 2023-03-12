import React from 'react'
import Button from '@Components/Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInGoogle, signInFacebook, signOut, auth } from '../../../apis/firebase'

import './index.scss'

interface Props {
  navPlay: () => void
  navTutorial: () => void
}

const Login: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial } = props

  const [user] = useAuthState(auth)

  return (
    <div className='login'>
      <h2>BLOB MOB</h2>

      <div className='login__buttons'>
        <Button height='3em' width='100%' color='play' onClick={() => navPlay()}>
          {user ? 'Play' : 'Play as Guest'}
        </Button>
        <div className='login__buttons-auth'>
          {user ? (
            // <Button className="signout-button" onClick={() => signOut()}>
            <Button height='auto' width='100%' color={'signout'} onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <>
              <Button height='auto' width='100%' color='google' onClick={() => signInGoogle()}>
                Google
                <i className='fa-brands fa-google'></i>
              </Button>
              <Button height='auto' width='100%' color='facebook' onClick={() => signInFacebook()}>
                Facebook
                <i className='fa-brands fa-square-facebook'></i>
              </Button>
            </>
          )}
        </div>
      </div>

      <div className='login__tutorial-blurb'>
        <b>WASD</b> to move, <b>SPACE</b> to attack, or play...
      </div>

      <Button width='100%' height='auto' color='tutorial' onClick={() => navTutorial()}>
        Tutorial
      </Button>
    </div>
  )
}

export default Login
