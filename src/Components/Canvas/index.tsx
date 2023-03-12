import React, { useRef, useEffect } from 'react'
import './index.scss'

const FramesPerSecond = 60
const FrameMinTime = (1000 / 60) * (60 / FramesPerSecond) - (1000 / 60) * 0.5

interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D) => void
}

const Canvas: React.FC<CanvasProps> = ({ draw, ...rest }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (c == null) {
      throw new Error('Could not get canvas')
    }

    const ctx = c.getContext('2d')
    if (ctx == null) throw new Error('Could not get context')

    let animationFrameId = 0
    let lastFrameTime = 0

    const render = (time: number) => {
      if (time - lastFrameTime < FrameMinTime) {
        animationFrameId = window.requestAnimationFrame(render)
        return
      }
      c.onselectstart = () => false // disable text selecting on canvas

      resizeCanvasToDisplaySize(c)
      draw(ctx)

      lastFrameTime = time
      animationFrameId = window.requestAnimationFrame(render)
    }

    window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas ref={canvasRef} {...rest} className='canvas' />
}

export default Canvas

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width * 1.5
    canvas.height = height * 1.5
    return true
  }

  return false
}
