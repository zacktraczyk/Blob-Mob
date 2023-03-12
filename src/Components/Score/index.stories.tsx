import React from 'react'
import { Meta, Story } from '@storybook/react'
import Score from './index'

export default {
  title: 'HUD/Score',
  component: Score,
} as Meta

export const Primary: Story = () => <Score />
