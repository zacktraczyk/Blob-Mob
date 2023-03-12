import React from 'react'
import { Meta, Story } from '@storybook/react'
import Coins from './index'

export default {
  title: 'HUD/Coins',
  component: Coins,
} as Meta

export const Primary: Story = () => <Coins />
