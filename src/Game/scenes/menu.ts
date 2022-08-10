import { GameAttributes } from '../gameAttributes';
import { Input } from '../input';
import { drawHUD } from './sceneElements';

export function Menu(game: GameAttributes, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}