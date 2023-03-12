interface keyState {
  right: boolean
  up: boolean
  left: boolean
  down: boolean
  attack: boolean
  push: boolean
  pause: boolean
  enemySpawn: boolean
}

const keyMap = {
  ArrowRight: 'right',
  d: 'right',
  ArrowUp: 'up',
  w: 'up',
  ArrowLeft: 'left',
  a: 'left',
  ArrowDown: 'down',
  s: 'down',
  ' ': 'attack',
  q: 'push',
  p: 'pause',
  r: 'enemySpawn',
}

export class Input {
  public mouse: { x: number; y: number }
  public mouseDown: boolean

  public keyState: keyState
  private keyMap: typeof keyMap

  constructor() {
    this.mouse = {
      x: 0,
      y: 0,
    }
    this.mouseDown = false

    this.keyState = {
      right: false,
      up: false,
      left: false,
      down: false,

      attack: false,
      push: false,

      pause: false,

      // Shop
      enemySpawn: false,
    }

    this.keyMap = keyMap
    this.addKeyListeners()
    this.addMouseListener()
  }

  public addKeyListeners() {
    document.addEventListener('keydown', (event) => this.keyDownHandler(event), false)
    document.addEventListener('keyup', (event) => this.keyUpHandler(event), false)
  }

  public keyDownHandler(e: KeyboardEvent) {
    const key = this.keyMap[e.key as keyof typeof keyMap]
    this.keyState[key as keyof keyState] = true
  }

  public keyUpHandler(e: KeyboardEvent) {
    const key = this.keyMap[e.key as keyof typeof keyMap]
    this.keyState[key as keyof keyState] = false
  }

  public mousePosition(event: MouseEvent) {
    // <++> TODO: Fix canvas scaling
    // *2 is janky fix for scaling in canvas component
    this.mouse.x = event.x * 1.5
    this.mouse.y = event.y * 1.5
  }

  public addMouseListener() {
    document.addEventListener('mousedown', () => (this.mouseDown = true), false)

    document.addEventListener('mousemove', (event) => this.mousePosition(event), false)

    document.addEventListener('mouseup', () => (this.mouseDown = false), false)
  }
}

export const input = new Input()
