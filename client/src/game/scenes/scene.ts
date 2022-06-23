import { Game } from "../game";
import { Input } from "../input";

export class Scene {

  private game: Game;
  private input: Input;

  public end: boolean;
  private next: Function;

  constructor(game: Game, input: Input) {
    this.game = game;
    this.input = input;

    this.end = false;
    this.next = this.loop;

    this.loop = (draw: Function, update: Function) => {

    }
  }

  public loop(draw: Function, update: Function) {
    const innerLoop = () => {
      this.game.frame++;
      this.game.resizeWindow();

      if (!this.game.paused) {
        update();
      }

      draw();

      this.game.pause(this.input.keyState.pause);

      if (this.end) {
        this.next();
        return;
      }

      window.requestAnimationFrame(innerLoop);
    }
  }
}