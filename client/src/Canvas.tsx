import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface CanvasProps {
  draw: Function,
  onGameover: Function
  updateScore: Function
  width: number,
  height: number,
}

const Canvas = (props: CanvasProps) => {

  const { draw, onGameover, updateScore, ...rest } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (c == null) throw new Error('Could not get canvas');

    const ctx = c.getContext('2d')
    if (ctx == null) throw new Error('Could not get context');

    let frameCount = 0;
    let animationFrameId = 0;

    const render = () => {
      const { gameover, score } = draw(ctx);
      if (gameover) {
        onGameover();
      }
      if (typeof score == 'number') updateScore(score);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw])

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <canvas ref={canvasRef} {...rest} />
    </motion.div>
  )
}

export default Canvas