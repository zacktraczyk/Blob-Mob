import React from 'react'
import { sound } from '@Game/sound'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, signOut } from '../apis/firebase'
import useNavigation from 'hooks/useNavigation'
import { View } from '@Views/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faHome,
  faRightToBracket,
  faVolumeHigh,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faHome} size='2xl' />
      </div>
      <div className='w-10' onClick={() => muteAudio()}>
        {mute ? (
          <FontAwesomeIcon icon={faVolumeMute} size='2xl' />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} size='2xl' />
        )}
      </div>
      <div className='w-10' onClick={() => setView(View.Info)}>
        <FontAwesomeIcon icon={faCircleInfo} size='2xl' />
      </div>
      {user && (
        <div className='w-10' onClick={() => signOut()}>
          <FontAwesomeIcon icon={faRightToBracket} size='2xl' />
        </div>
      )}
    </div>
  )
}

export default Navbar
