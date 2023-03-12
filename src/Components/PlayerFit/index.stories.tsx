import React from 'react'
import { Meta, Story } from '@storybook/react'
import PlayerFit, { PlayerFitProps } from './index'

export default {
  title: 'Shop/PlayerFit',
  component: PlayerFit,
} as Meta

export const Primary: Story<PlayerFitProps> = (args) => (
  <div>
    <PlayerFit {...args} />
  </div>
)

Primary.args = {
  hat: 'normal',
  face: 'normal',
  body: 'normal',
}
