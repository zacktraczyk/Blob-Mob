import React from 'react'
import { updateAccount } from '@Apis/firebase'
import { useEffect, useState } from 'react'
import { game } from '@App'
import Button from '@Components/Button'
import PlayerFit, { PlayerFitType } from '@Components/PlayerFit'
import PlayerStat from '@Components/PlayerStat'
import { player, PlayerAttributes } from '@Game/entities/player'
import shop from '@Game/shop'
import { Body } from '@Game/shop/bodies'
import { Face } from '@Game/shop/faces'
import { Hat } from '@Game/shop/hats'
import { enemies } from '@Game/entities/enemy'
import useNavigation from 'hooks/useNavigation'
import { View } from '.'

enum Tabs {
  Stats,
  Fit,
}

// Container Shop View
const Shop: React.FC = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Stats)
  const { setView } = useNavigation()

  useEffect(() => {
    return () => {
      updateAccount()
    }
  }, [])

  return (
    <div className='flex h-full w-full items-center justify-start'>
      {/* Left Gap */}
      <div className='h-full w-1/2'></div>

      <div className='flex h-full w-full items-center justify-center pb-20 pt-24'>
        {/* Right Shop */}
        <div className='flex h-full w-[500px] flex-col items-stretch justify-start gap-3 rounded-3xl bg-card px-10 py-7 shadow-2xl'>
          {/* Tabs */}
          <div className='flex items-center justify-center gap-5 rounded-2xl bg-gray'>
            <div
              className={`flex h-10 w-full items-center justify-center gap-2 rounded-2xl ${
                tab === Tabs.Stats && 'bg-main'
              }`}
              onClick={() => setTab(Tabs.Stats)}
            >
              Stats
              <i className='fa-solid fa-arrow-up-9-1'></i>
            </div>
            <div
              className={`flex h-10 w-full items-center justify-center gap-2 rounded-2xl ${
                tab === Tabs.Fit && 'bg-main'
              }`}
              onClick={() => setTab(Tabs.Fit)}
            >
              Fit
              <i className='fa-solid fa-glasses'></i>
            </div>
          </div>

          <div className='flex h-[300rem] items-center justify-center'>
            {tab == Tabs.Stats ? <Stats /> : <Fit />}
          </div>

          <div className='flex w-full items-center justify-evenly py-6'>
            <i
              className={`fa-solid fa-angle-left fa-2xl ${tab == 0 ? 'text-gray' : 'text-main'}`}
              onClick={() => setTab(tab > 0 ? tab - 1 : tab)}
            ></i>
            <i
              className={`fa-solid fa-angle-right fa-2xl ${
                tab == Tabs.Fit ? 'text-gray' : 'text-main'
              }`}
              onClick={() => setTab(tab < Tabs.Fit ? tab + 1 : tab)}
            ></i>
          </div>

          <div className='flex items-center justify-evenly'>
            <Button
              color='bg-upgrade'
              size='w-44 h-10'
              onClick={() => {
                const ctx = game.ctx
                if (!ctx) return

                enemies.spawn(ctx.canvas.width, ctx.canvas.height, player)
              }}
            >
              Spawn Enemy
            </Button>
            <Button size='w-44 h-10' color='bg-main' onClick={() => setView(View.Play)}>
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Stats Section
const Stats: React.FC = () => {
  const [playerStats, setPlayerStats] = useState<PlayerAttributes>(player.getAttributes())

  shop.setPlayerStats = setPlayerStats

  return (
    <div className='grid h-full w-full grid-cols-2 grid-rows-2 items-center justify-center text-3xl'>
      <PlayerStat type={'maxSpeed'} stats={playerStats} />
      <PlayerStat type={'maxHealth'} stats={playerStats} />
      <PlayerStat type={'maxPower'} stats={playerStats} />
      <PlayerStat type={'maxCool'} stats={playerStats} />
    </div>
  )
}

// Fit Section
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

export default Shop
