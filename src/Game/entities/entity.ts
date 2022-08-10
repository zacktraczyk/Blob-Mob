export enum State {
  Spawn,
  Normal,
  Damage,
  Dying,
  Dead,
}

export enum Action {
  Normal,
  Attack,
  Push,
  Regenerate,
}

export class Entity {
  public x: number; // Center of Sprite
  public y: number; // Center of Sprite
  public w: number;
  public h: number;

  public color: string;
  public state: State;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = h;
    this.h = w;

    this.color = "";
    this.state = State.Normal;
  }
}
