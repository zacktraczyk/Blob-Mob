import { Game } from './game/game'
import React, { useRef, useEffect } from 'react'
import { Scenes } from './game/scenes/scenes'

import './Canvas.css'

interface CanvasProps {
  draw: Function,
  playGame: boolean,
  onGameover: Function
  updateScore: Function
  width: number,
  height: number,
}

const Canvas = (props: CanvasProps) => {

  const { draw, onGameover, updateScore, playGame, ...rest } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  console.log('Canvas.tsx: playGame state:', playGame);

  useEffect(() => {
    const c = canvasRef.current
    if (c == null) throw new Error('Could not get canvas');

    const ctx = c.getContext('2d')
    if (ctx == null) throw new Error('Could not get context');

    let frameCount = 0;
    let animationFrameId = 0;

    const render = () => {
      resizeCanvasToDisplaySize(c);
      const { scene, score } = draw(playGame, ctx);

      if (scene == Scenes.gameOver) {
        onGameover();
      }
      if (typeof score == 'number') updateScore(score);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw, playGame])

  return <canvas ref={canvasRef} {...rest} className="game-canvas"/>
  
}

export default Canvas

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }

  return false
}