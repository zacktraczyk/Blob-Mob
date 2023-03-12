import PlayerFit, { PlayerFitType } from '@Components/PlayerFit'
import { player } from '@Game/entities/player'
import shop from '@Game/shop'
import { Body } from '@Game/shop/bodies'
import { Face } from '@Game/shop/faces'
import { Hat } from '@Game/shop/hats'
import React, { useState } from 'react'

const Fit: React.FC = () => {
  const [playerFit, setPlayerFit] = useState({
    body: player.body,
    face: player.face,
    hat: player.hat,
  })

  shop.setPlayerFit = setPlayerFit

  return (
    <div className='flex h-full w-full flex-col gap-5 text-[0.6em]'>
      <Hats fit={playerFit} />
      <Bodies fit={playerFit} />
      <Faces fit={playerFit} />
    </div>
  )
}

interface Props {
  fit: {
    body: keyof typeof Body
    face: keyof typeof Face
    hat: keyof typeof Hat
  }
}

const Hats: React.FC<Props> = (props: Props) => {
  const { body, face } = props.fit

  const hats = []
  let hat: keyof typeof Hat
  for (hat in Hat) {
    hats.push(<PlayerFit key={hat} type={PlayerFitType.Hat} body={body} face={face} hat={hat} />)
  }

  return (
    <div>
      <h2>Hats</h2>
      <div className='h-3'></div>
      <div className='flex gap-3'>{hats}</div>
    </div>
  )
}

const Bodies: React.FC<Props> = ({ fit }) => {
  const { face, hat } = fit

  const bodies = []
  let body: keyof typeof Body
  for (body in Body) {
    bodies.push(
      <PlayerFit key={body} type={PlayerFitType.Body} body={body} face={face} hat={hat} />,
    )
  }

  return (
    <div>
      <h2>Bodies</h2>
      <div className='h-3'></div>
      <div className='flex gap-3'>{bodies}</div>
    </div>
  )
}

const Faces: React.FC<Props> = (props: Props) => {
  const { body, hat } = props.fit

  const faces = []
  let face: keyof typeof Face
  for (face in Face) {
    faces.push(<PlayerFit key={face} type={PlayerFitType.Face} body={body} face={face} hat={hat} />)
  }

  return (
    <div>
      <h2>Faces</h2>
      <div className='h-3'></div>
      <div className='flex gap-3'>{faces}</div>
    </div>
  )
}

export default Fit
