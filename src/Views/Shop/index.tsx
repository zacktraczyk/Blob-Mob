import React from 'react'
import { motion } from 'framer-motion'
import { updateAccount } from '@Apis/firebase'
import { useEffect, useState } from 'react'
import { game } from '@App'
import Button from '@Components/Button'
import { player } from '@Game/entities/player'
import { enemies } from '@Game/entities/enemy'
import Stats from './Stats'
import Fit from './Fit'

interface ShopProps {
  navPlay: () => void
}

enum Tabs {
  Stats,
  Fit,
}

const Shop: React.FC<ShopProps> = ({ navPlay }) => {
  const [tab, setTab] = useState<Tabs>(Tabs.Stats)

  useEffect(() => {
    return () => {
      updateAccount()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex h-full w-full items-center justify-start'
    >
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
            <Button size='w-44 h-10' color='bg-main' onClick={() => navPlay()}>
              Play
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Shop
