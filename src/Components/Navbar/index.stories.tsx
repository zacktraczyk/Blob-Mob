import React from 'react'
import { Meta, Story } from '@storybook/react'
import Navbar, { NavbarProps } from './index'

export default {
  title: 'HUD/Navbar',
  component: Navbar,
} as Meta

export const Primary: Story<NavbarProps> = (args) => <Navbar {...args} />
