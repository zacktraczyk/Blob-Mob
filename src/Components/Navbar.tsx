import React from 'react'
import { sound } from '@Game/sound'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, signOut } from '../apis/firebase'
import useNavigation from 'hooks/useNavigation'
import { View } from '@Views/index'

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  const [mute, setMute] = useState(false)
  const { setView } = useNavigation()

  const muteAudio = () => {
    sound.mute(!mute)
    setMute(!mute)
  }

  return (
    <div className='absolute bottom-6 right-6 flex items-center justify-end gap-6'>
      <div className='w-10' onClick={() => setView(View.Home)}>
        <i className='fa-solid fa-house fa-2xl'></i>
      </div>
      <div className='w-10' onClick={() => muteAudio()}>
        {mute ? (
          <i className='fa-solid fa-volume-mute fa-2xl'></i>
        ) : (
          <i className='fa-solid fa-volume-high fa-2xl'></i>
        )}
      </div>
      <div className='w-10' onClick={() => setView(View.Info)}>
        <i className='fa-solid fa-circle-info fa-2xl'></i>
      </div>
      {user && (
        <div className='w-10' onClick={() => signOut()}>
          <i className='fa-solid fa-right-to-bracket fa-2xl'></i>
        </div>
      )}
    </div>
  )
}

export default Navbar
