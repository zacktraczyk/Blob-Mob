import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />
Primary.args = {
  color: 'play',
  children: 'Button',
  width: '200px',
  height: '50px',
}
