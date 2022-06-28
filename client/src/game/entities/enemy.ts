import { Game } from '../game';
import { State, Entity } from './entity';
import { Player } from './player';

export class EnemyController {

    public instances: Array<Enemy>;

    private cool: number;
    private speed: number;

    private maxInst: number;
    private spawnWait: number;

    constructor(){
        this.instances = new Array();
        this.cool = 0;
        this.speed = 1;

        this.maxInst = 10;
        this.spawnWait = 300;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.instances.forEach(e => e.draw(ctx));
    }

    public controller(game: Game){
        for (let i = 0; i < this.instances.length; i++) { 
            if (this.instances[i].state == State.Dead) {
                this.instances.splice(i, 1);
            } else {
                this.instances[i].controller(game);
            }
        }
    }

    public spawner(w: number, h: number, player: Player) {
        this.cool -= 0.01;
        if (this.instances.length < this.maxInst && this.cool * 1000 <= 0) {
            this.spawn(w, h, player);
            this.cool = this.spawnWait;
        }
    }

    public updateAttributes(attributes: any) {
        this.speed = attributes.speed;
        this.maxInst = attributes.maxInst;
        this.spawnWait = attributes.spawnWait;
    }

    public reset() {
        this.instances = new Array();
        this.cool = 0;
    }

    public spawn(w: number, h: number, player: Player) {
        let enemy = new Enemy(w, h, player, this.speed);
        this.instances.push(enemy);
    }
}

export class Enemy extends Entity{
    private rcolors: Array<string>;

    private speed: number;
    private xdir: number;
    private ydir: number;

    private target: Player | null;

    private distance: number;
    private pushMagnitude: number;

    constructor(w: number, h: number, target: Player, speed: number) {
        super(0, 0, 50, 50);
        this.rcolors = ['#81ea25', '#6bba27', '#96e84e', '#abf966', '#b9f981']; //Enemy color strobe
        this.color = this.rcolors[0];
        this.state = State.Spawn;

        this.speed = speed;
        this.xdir = 0;
        this.ydir = 0;

        this.target = null;

        this.distance = 0;
        this.pushMagnitude = 17;

        this.spawn(w, h, target);
    }

    private spawn(w: number, h: number, target: Player) {
        let rand = Math.random();

        if (rand < 0.5) { // side
            this.x = rand < 0.5 ? -this.w - 5 : w + 5;
            rand = Math.random();
            this.y = rand*(h+10) - 5;
        } else { // top/bottom
            this.x = rand*(w+10) - 5
            rand = Math.random()
            this.y = rand < 0.5 ? -this.h - 5 : h + 5
        }

        this.target = target;
        this.state = State.Normal;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (this.state == State.Spawn){
            return;
        }

        let x = this.x - this.w/2; // draw corner
        let y = this.y - this.h/2; // draw corner

        ctx.lineWidth = 1;
        let rand = Math.round(Math.random() * 2);
        this.color = this.rcolors[rand];
        ctx.fillStyle = this.color;
        if (this.target != null && this.state == State.Normal) {
            this.w = this.target.w / 2 - 10;
            this.h = this.target.h - 10;
        }
        ctx.beginPath();

        //Draws Body
        ctx.moveTo(x - this.w / 8, y);
        ctx.bezierCurveTo(x - this.w / 8, y - this.h / 4,
            x + this.w + this.w / 8, y - this.h / 4,
            x + this.w + this.w / 8, y);

        ctx.bezierCurveTo(x + this.w * 2, y,
            x + this.w * 2, y + this.h,
            x + this.w - this.w / 8, y + this.h);

        ctx.bezierCurveTo(x + this.w - this.w / 8, y + this.h * 1.75,
            x - this.w * 2, y + this.h / 4,
            x, y + this.h / 2);

        ctx.bezierCurveTo(x - this.w, y + this.h / 2,
            x - this.w / 2, y,
            x - this.w / 8, y);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 1;

        //Draws Left Eye
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(x + this.w / 6, y + this.h / 6, (this.w / 4 + this.h / 4) / 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Right Eye
        ctx.beginPath();
        ctx.arc(x + this.w - this.w / 8, y + this.h / 6, (this.w / 4 + this.h / 4) / 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Mouth
        ctx.beginPath();
        ctx.moveTo(x + this.w / 8, y + this.h);
        ctx.bezierCurveTo(x + this.h / 8, y + this.h - this.h /3, x + this.w - this.h / 8, y + this.h - this.h /3, x + this.w - this.h / 8, y + this.h);
        ctx.stroke();
        ctx.closePath();

        //Draw Hitbox (DEBUG)
        // ctx.lineWidth = 1
        // ctx.strokeRect(this.x - this.w/2, this.y - this.w/2, this.w, this.h)
    }

    public controller(game: Game) {
        switch (this.state) {
            case State.Normal:
                this.move();
                break;

            case State.Dying:
                this.death(game, this.target);
                break;
        }
    }

    private calculateDir() {
        if (this.target == null) {
            return;
        }

        let xdiff = this.target.x - this.x ;
        let ydiff = this.target.y - this.y ;
        this.distance = Math.sqrt(xdiff*xdiff + ydiff*ydiff);
        if (this.distance > 0) {
            this.xdir = xdiff/this.distance;
            this.ydir = ydiff/this.distance;
        }
    }

    private move() {
        if (this.target == null) {
            return;
        }

        this.calculateDir();

        if (this.target.state == State.Dead) {
            this.xdir = -this.xdir;
            this.ydir = -this.ydir;
        }

        this.x += this.xdir*this.speed;
        this.y += this.ydir*this.speed;

        this.wiggle();
    }

    private wiggle() {
        let rand = Math.random() > 0.5 ? 1 : -1;
        this.x = this.x + rand*2;

        rand = Math.random() > 0.5 ? 1 : -1;
        this.y = this.y + rand*2;
    }

    private death(game: Game, player: Player | null) {
        // Shrink
        this.w = Math.max(0, this.w - 2);
        this.h = Math.max(0, this.h - 3.9);

        if (this.w == 0 || this.h == 0) { 
            // effects.stop(ah);
            // de = effects.play('death');
            if (player != null) {
                player.updatePower();
            }
            game.score++;
            this.state = State.Dead;
        }
    }

    public pushField(r: number) {
        if (this.distance < r) {
            this.x += this.pushMagnitude * -this.xdir
            this.y += this.pushMagnitude * -this.ydir
        }
    }
}

// function enemeySpeed(){
//     if(score >= 20 && score < 40)speed=1.2;
//     if(score >= 40 && score < 80)speed=1.25;
//     if(score >= 80 && score < 100)speed=1.5;
//     if(score >= 100 && score < 200)speed=1.75;
//     if(score >= 200 && score < 250)speed=2;
//     if(score >= 250 && score < 300)speed=2.5;
//     if(score >= 300)speed=3;
// }
