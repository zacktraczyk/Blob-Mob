import { Game } from '../game';
import { Input } from '../input';
import { drawStage } from './sceneElements';

export function Gameover(game: Game, input: Input, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawStage(ctx);
}