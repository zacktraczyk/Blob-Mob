import React from 'react'
import PlayerFit, { PlayerFitType } from '@Components/PlayerFit'
import { Body } from '@Game/shop/bodies'
import { Face } from '@Game/shop/faces'
import { Hat } from '@Game/shop/hats'

interface Props {
  fit: {
    body: keyof typeof Body
    face: keyof typeof Face
    hat: keyof typeof Hat
  }
}

const Faces: React.FC<Props> = (props: Props) => {
  const { body, hat } = props.fit

  const faces = []
  let face: keyof typeof Face
  for (face in Face) {
    faces.push(<PlayerFit key={face} type={PlayerFitType.Face} body={body} face={face} hat={hat} />)
  }

  return (
    <div className='fit-faces'>
      <h2>Faces</h2>
      <div className='fit-items'>{faces}</div>
    </div>
  )
}

export default Faces
