import { Enemy } from './enemy';
import { Input } from '../input';
import { State, Action, Entity } from './entity';
import { DamagePointController } from './damagePoints';

// Clamp number between two values with the following line:
const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export class Player extends Entity {

    private maxSpeed: number;
    private accel: number;
    private xdir: number;
    private ydir: number;
    private xvel: number;
    private yvel: number;

    private action: Action;

    public maxCool: number;
    public cool: number;
    public maxPower: number;
    public power: number;
    public maxHealth: number;
    public health: number;

    private pushRadius: number;
    private pushR: number;
    private timer: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.color = '#ffd6cc';
        this.state = State.Normal;

        this.maxSpeed = 7;
        this.accel = 0.4;
        this.xdir = 1;
        this.ydir = 0;
        this.xvel = 0;
        this.yvel = 0;

        this.action = Action.Normal;

        this.maxCool = 50;
        this.cool = 0;
        this.maxPower = 50;
        this.power = 0;
        this.maxHealth = 500;
        this.health = this.maxHealth;

        this.pushRadius = 240;
        this.pushR = 0;
        this.timer = 0;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        // this.x is center while x 
        // is drawing origin (top left corner)
        let x = this.x - this.w / 2;
        let y = this.y - this.h / 2;

        //Draws body
        ctx.fillStyle = this.color; //Set to #ffd6cc
        ctx.fillRect(x, y, this.w, this.h);

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
        ctx.moveTo(x + this.w / 8, y + this.h - this.h / 3);
        ctx.bezierCurveTo(x + this.h / 8, y + this.h, x + this.w - this.h / 8, y + this.h, x + this.w - this.h / 8, y + this.h - this.h / 3);
        ctx.stroke();
        ctx.closePath();

        if (this.action == Action.Push) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.pushR, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }
    }

    public controller(w: number, h: number, keys: Input['keyState'], enemies: Array<Enemy>, damagePoints: DamagePointController) {
        if (this.state == State.Dead) {
            return;
        }

        this.actionController(w, h, keys, enemies);

        // Update Position
        this.x += this.xvel;
        this.y += this.yvel;

        // Cooldown
        if (this.action != Action.Push) {
            if (this.cool > 0) {
                --this.cool;
                this.color = '#adedff';
            } else {
                this.color = '#ffd6cc';
            }
        }

        this.healthController(enemies, damagePoints);

        // Check for death
        if (this.health <= 0) {
            this.state = State.Dead;
        }
    }

    private actionController(w: number, h: number, keys: Input['keyState'], enemies: Array<Enemy>){
        if (this.cool <= 0) {
            this.cool = 0;
            if (keys.attack) {
                this.action = Action.Attack;
            } else if (keys.push && this.power == this.maxPower) {
                this.action = Action.Push;
            }
        }

        // Action Followthrough
        switch (this.action) {
            case Action.Attack:
                this.color = '#adedff';
                this.attack(w, h, 8, enemies);
                return; // exit control loop

            case Action.Normal:
                this.move(w, h, keys);
                break;

            case Action.Push:
                this.move(w, h, keys);
                this.color = '#adedff';
                this.pushField(600, enemies);
                break;
        }
    }

    private healthController(enemies: Array<Enemy>, damagePoints: DamagePointController) {
        let damage = false;
        enemies.forEach(enemy => {
            if (this.collides(enemy) && enemy.state == State.Normal) {
                damage = true;
                return;
            }
        });

        if (damage) {
            this.color = '#ff6d6d';
            this.health--;
            if (damagePoints != null) {
                damagePoints.spawn(this);
            }
        }
    }

    public title(x: number, y: number, w: number, h: number) {
        this.color = '#ffd6cc';
        this.wiggle(w / 2, h / 2);

        this.x = clamp(this.x, x + w * 3 / 8, x + w * 5 / 8);
        this.y = clamp(this.y, y + w * 3 / 8, y + h * 5 / 8);
    }

    public shrink(dx: number, dy: number, s: number) {
        s = clamp(s / 2, 55, 60 + s / 2);
        this.wiggle(55, s);

        this.x += dx;
        this.y += dy;
    }

    private move(w: number, h: number, dir: Input['keyState']) {

        // Increase speed if keydown
        if (dir.right) this.xvel += this.accel;
        if (dir.left) this.xvel -= this.accel;
        if (dir.down) this.yvel += this.accel;
        if (dir.up) this.yvel -= this.accel;

        // Decrease speed if keyup
        if (!dir.right && !dir.left) {
            if (Math.abs(this.xvel) <= this.accel) this.xvel = 0;
            else if (this.xvel > 0) this.xvel -= this.accel*1.1;
            else if (this.xvel < 0) this.xvel += this.accel*1.1;
        }
        if (!dir.down && !dir.up) {
            if (Math.abs(this.yvel) <= this.accel) this.yvel = 0;
            else if (this.yvel > 0) this.yvel -= this.accel*1.1;
            else if (this.yvel < 0) this.yvel += this.accel*1.1;
        }

        this.xvel = clamp(this.xvel, -this.maxSpeed, this.maxSpeed);
        this.yvel = clamp(this.yvel, -this.maxSpeed, this.maxSpeed);
        this.calculateDir(); // Needed for Attack

        this.wiggle(50, 69);
        this.keepOnScreen(w, h);
    }

    private calculateDir() {
        let mag = Math.sqrt(this.xvel * this.xvel + this.yvel * this.yvel);
        if (mag > 0) {
            this.xdir = this.xvel / mag;
            this.ydir = this.yvel / mag;
        }
    }

    private attack(w: number, h: number, duration: number, enemies: Array<Enemy>) {
        ++this.timer;
        this.cool += this.maxCool / duration;

        const xspeed = Math.max(10, Math.abs(this.xvel) * 2);
        const yspeed = Math.max(10, Math.abs(this.yvel) * 2);
        this.x += this.xdir * xspeed;
        this.y += this.ydir * yspeed;

        // Collision test
        enemies.forEach(enemy => {
            if (this.collides(enemy) &&
                enemy.state != State.Dying
                && enemy.state != State.Dead) {

                enemy.state = State.Dying;
            }
        });

        this.keepOnScreen(w, h);

        // End attack
        if (this.timer >= duration) {
            this.xvel = 0;
            this.yvel = 0;
            this.timer = 0;
            this.action = Action.Normal;
        }
    }

    private pushField(duration: number, enemies: Array<Enemy>) {
        ++this.timer;
        this.power -= this.maxPower / duration;
        this.cool += this.maxCool / duration;

        enemies.forEach(enemy => {
            if (enemy.state != State.Dying
                && enemy.state != State.Dead) {
                this.pushR = Math.min(this.timer / (duration / 4), 1) * this.pushRadius;

                enemy.pushField(this.pushR);
            }
        })

        if (this.timer >= duration) {
            this.pushR = 0;
            this.power = 0;
            this.timer = 0;
            this.action = Action.Normal;
        }
    }

    public collides(target: Entity | null) {
        if (target == null) {
            return false;
        }

        if (!(this.x + this.w / 2 < target.x - target.w / 2 ||
            this.x - this.w / 2 > target.x + target.w / 2) &&

            !(this.y + this.h / 2 < target.y - target.h / 2 ||
                this.y - this.h / 2 > target.y + target.w / 2)) {
            return true;
        }

        return false;
    }

    private wiggle(min: number, max: number) {
        let rand = Math.random() > 0.5 ? 1 : -1;
        this.x = this.x + rand;

        rand = Math.random() > 0.5 ? 1 : -1;
        this.y = this.y + rand;

        rand = Math.random() > 0.5 ? 1 : -1;
        this.w = clamp(this.w + rand, min, max);

        rand = Math.random() > 0.5 ? 1 : -1;
        this.h = clamp(this.h + rand, min, max);
    }

    private keepOnScreen(w: number, h: number) {
        this.x = clamp(this.x, this.w / 2 + 5, w - this.w / 2 - 5);
        this.y = clamp(this.y, this.h / 2 + 5, h - this.h / 2 - 5);
        // this.x = 250;
        // this.y = 250;
    }

    public reset() {
        this.health = this.maxHealth;
        this.power = 0;
        this.cool = 0;
        this.state = State.Normal;
        this.action = Action.Normal;

        this.xvel = 0;
        this.yvel = 0;
    }

    public updateAttributes(attributes: any) {
        this.maxSpeed = attributes.speed;
        this.accel = attributes.accel;

        this.maxCool = attributes.cool;
        this.maxHealth = attributes.health;
        this.health = attributes.maxHealth;
    }

    public updatePower() {
        if (this.power < this.maxPower) {
            this.power++;
        } else {
            this.power = this.maxPower;
        }
    }
}