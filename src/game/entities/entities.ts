import { Player } from "./player";
import { EnemyController } from "./enemy";
import { DamagePointController } from "./damagePoints";


export interface Entities {
  player: Player,
  enemies: EnemyController,
  damagePoints: DamagePointController
}

export const entities = {
  player: new Player(250, 250, 250, 250),
  enemies: new EnemyController(),
  damagePoints: new DamagePointController(),
}
