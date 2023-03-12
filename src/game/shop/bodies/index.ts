import bodyNormal from './bodyNormal'
import bodyGold from './bodyGold'
import bodyEnemy from './bodyEnemy'

export interface BodyAttr {
  x: number // center of face
  y: number // center of face
  w: number
  h: number
  cool: number
  maxCool: number
  damaging: boolean
}

export type BodyFunction = (ctx: CanvasRenderingContext2D, bodyAttr: BodyAttr) => void

export const Body = {
  normal: {
    name: 'Default',
    colorNorm: '#ffd6cc',
    colorCool: '#a8c7f7',
    colorDamg: '#f25f57',
    draw: bodyNormal,
    cost: 0,
  },
  gold: {
    name: 'Pee',
    colorNorm: '#e8eb5b',
    colorCool: '#cbccc6',
    colorDamg: '#f21f90',
    draw: bodyGold,
    cost: 50,
  },
  enemy: {
    name: 'Enemy',
    colorNorm: '#81ea25',
    colorCool: '#bdf090',
    colorDamg: '#f25f57',
    draw: bodyEnemy,
    cost: 100,
  },
}
