import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />
Primary.args = {
  color: 'bg-main',
  children: 'Button',
  size: 'w-30 h-20',
}
