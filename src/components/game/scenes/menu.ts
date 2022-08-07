import { GameAttributes } from '../gameAttributes';
import { Input } from '../input';
import { drawStage } from './sceneElements';

export function Menu(game: GameAttributes, input: Input, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawStage(ctx);
}