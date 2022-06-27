import { Player } from './entities/player';
import { DamagePointController } from './entities/damagePoints';
import { EnemyController } from './entities/enemy';
import { difficultyTable } from './difficulty';
import { Scenes } from './scenes/scenes';

export class Game {

    public frame: number;
    public paused: boolean;

    public score: number;
    public difficulty: number;

    private tutorial: boolean;
    public highscore: number;

    private pauseKeyRelease: boolean;

    private fxSound: number;
    private musSound: number;

    public scene: Scenes;

    constructor() {
        this.difficulty = 5;

        this.tutorial = false;

        this.score = 0;
        this.highscore = this.getHighscore();

        this.frame = 0;
        this.paused = false;
        this.pauseKeyRelease = true;

        this.fxSound = 1;
        this.musSound = 0.5;

        this.scene = Scenes.menu;
    }

    public setTutorial() {
        window.localStorage.setItem('tutorial', 'COMPLETED');
    }

    public getTutorial(): boolean {
        let t = window.localStorage.getItem('tutorial');
        if (t == null) {
            return false;
        }

        return true;
    }

    public gameOver() {
        this.scene = Scenes.gameOver;
    }

    public setHighscore() {
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
        window.localStorage.setItem('highscore', '' + this.highscore);
    }

    public getHighscore() {
        let score = window.localStorage.getItem('highscore');
        if (score == null) {
            return 0
        }
        return parseInt(score);
    }

    public pause(player: Player | null) {
        // effects.play('btn')
        if (player && this.pauseKeyRelease) {
            this.pauseKeyRelease = false;
            this.paused = !this.paused;
        } else if (!player && !this.pauseKeyRelease) {
            this.pauseKeyRelease = true;
        }
    }

    reset(player: Player, enemies: EnemyController, damagePoints: DamagePointController) {
        player.reset();
        enemies.reset();
        damagePoints.reset();

        this.score = 0;
        this.frame = 0;
    }

    // public debug(player: Player, enemyController: EnemyController) {
    //     ctx.font = '20px Arial Bold';
    //     ctx.color = 'black';

    //     let x = 40;
    //     let y = this.screen.h * 5 / 8 + 100;

    //     ctx.fillText('difficulty: ' + this.difficulty, x, y);

    //     // y += 30;
    //     // ctx.fillText('player: ', x, y);

    //     // x += 30;
    //     // y += 20;
    //     // ctx.fillText('speed: ' + player.maxSpeed, x, y);

    //     // y += 20;
    //     // ctx.fillText('accel: ' + player.accel, x, y);

    //     // y += 20;
    //     // ctx.fillText('cool: ' + player.maxCool, x, y);

    //     // y += 20;
    //     // ctx.fillText('health: ' + player.maxHealth, x, y);

    //     // y += 30;
    //     // x -= 30;
    //     // ctx.fillText('enemy: ', x, y);

    //     // x += 30;
    //     // y += 20;
    //     // ctx.fillText('speed: ' + enemyController.speed, x, y);

    //     // y += 20;
    //     // ctx.fillText('Spawn Rate: ' + enemyController.spawnWait + 's', x, y);

    //     // y += 20;
    //     // ctx.fillText('Max Number: ' + enemyController.maxInst, x, y);

    //     // y += 40;
    //     // if (enemyController.instances != null) {
    //     //     ctx.fillText('Blobs: ' + enemyController.instances.length, x, y);
    //     // }
    // }
}
