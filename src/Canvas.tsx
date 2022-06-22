import { useRef, useEffect } from 'react'

interface CanvasProps {
  draw: Function,
  width: number,
  height: number
}

const Canvas = (props: CanvasProps) => {

  const { draw, ...rest } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const c = canvasRef.current
    if (c == null) throw new Error('Could not get canvas');

    const ctx = c.getContext('2d')
    if (ctx == null) throw new Error('Could not get context');

    let frameCount = 0;
    let animationFrameId = 0;

    const render = () => {
      frameCount++
      draw(ctx, frameCount)
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw])

  return <canvas ref={canvasRef} {...rest} />
}

export default Canvas