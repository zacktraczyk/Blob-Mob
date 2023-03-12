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

const Hats: React.FC<Props> = (props: Props) => {
  const { body, face } = props.fit

  const hats = []
  let hat: keyof typeof Hat
  for (hat in Hat) {
    hats.push(<PlayerFit key={hat} type={PlayerFitType.Hat} body={body} face={face} hat={hat} />)
  }

  return (
    <div className='fit-faces'>
      <h2>Hats</h2>
      <div className='fit-items'>{hats}</div>
    </div>
  )
}

export default Hats
