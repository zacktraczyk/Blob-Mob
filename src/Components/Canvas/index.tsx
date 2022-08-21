import React, { useRef, useEffect } from "react";
import "./index.scss";

const FramesPerSecond = 60;
const FrameMinTime = (1000/60) * (60 / FramesPerSecond) - (1000/60) * 0.5;

interface CanvasProps {
  draw: Function;
}

const Canvas = (props: CanvasProps) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (c == null) {
      throw new Error("Could not get canvas");
    }

    const ctx = c.getContext("2d");
    if (ctx == null) throw new Error("Could not get context");

    let animationFrameId = 0;
    let lastFrameTime = 0;

    const render = (time: number) => {
      if(time - lastFrameTime < FrameMinTime) {
        animationFrameId = window.requestAnimationFrame(render);
        return;
      }

      resizeCanvasToDisplaySize(c);
      draw(ctx);

      lastFrameTime = time;
      animationFrameId = window.requestAnimationFrame(render);

    };

    window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} className="canvas" />;
};

export default Canvas;

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width * 2;
    canvas.height = height * 2;
    return true;
  }

  return false;
};
