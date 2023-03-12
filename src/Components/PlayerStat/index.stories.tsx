import React from 'react'
import { Meta, Story } from '@storybook/react'
import PlayerStat, { PlayerStatProps } from '.'

export default {
  title: 'Shop/PlayerStat',
  component: PlayerStat,
} as Meta

export const Primary: Story<PlayerStatProps> = (args) => <PlayerStat {...args} />

Primary.args = {
  type: 'maxSpeed',
  stats: {
    maxSpeed: 0,
    maxCool: 0,
    maxPower: 0,
    maxHealth: 0,
  },
}
