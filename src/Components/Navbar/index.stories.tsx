import React from 'react'
import { Meta, Story } from '@storybook/react'
import Navbar from '.'

export default {
  title: 'HUD/Navbar',
  component: Navbar,
} as Meta

export const Primary: Story = () => <Navbar />
