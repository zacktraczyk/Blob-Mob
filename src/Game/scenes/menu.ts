import { drawController } from '../entities/draw';
import { GameAttributes } from '../gameAttributes';
import { input } from '../input';
import { drawHUD } from './sceneElements';

export function Menu(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}