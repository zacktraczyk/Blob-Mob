import React from 'react'
import Button from '@Components/Button'

interface ShopCardProps {
  navShop: () => void
}

const ShopCard: React.FC<ShopCardProps> = ({ navShop }) => {
  return (
    <div className='flex flex-col items-stretch justify-center gap-3 rounded-3xl bg-card px-10 py-7 shadow-2xl'>
      <h2 className='text-center text-2xl font-bold'>Shop</h2>
      <Button color='bg-upgrade' size='h-10 w-full' onClick={() => navShop()}>
        Upgrade
      </Button>
    </div>
  )
}

export default ShopCard
