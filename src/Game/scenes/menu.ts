import { game } from '../../App';
import { drawController } from '../entities/draw';
import { GameAttributes } from '../gameAttributes';
import { input } from '../input';
import { drawHUD } from './sceneElements';

export function Menu() {
  const ctx = game.ctx;
  if (ctx == null) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}