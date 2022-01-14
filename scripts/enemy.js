// REQUIRED: enum.js game.js

class EnemyController {

    constructor(){
        this.instances = new Array()
        this.cool = 0
        this.speed = 0
        this._speedChangeCount = 0 // death count up to 50

        this.maxInst = 0
        this.spawnWait = 0
    }

    spawner(w, h, p) {
        --this.cool
        if (Enemies.instances.length < this.maxInst && this.cool <= 0) {
            this.spawn(w, h, p)
            this.cool = this.spawnWait*G.fps
        }
    }

    spawn(w, h, p) {
        let e = new Enemy(this.speed)
        e.spawn(w, h, p)
        this.instances.push(e)
    }

    draw() {
        this.instances.forEach(e => e.draw())
    }

    controller(p){
        // Update speed
        // if (this._speedChangeCount > 50) {
        //     this.changeSpeed(1.2)
        //     this.speed *= 1.2
        //     p.changeSpeed(1.2 / 2)
        //     this._speedChangeCount = 0
        // }

        // Update Enemy Instances
        for (let i = 0; i < this.instances.length; i++) { 
            if (this.instances[i].state == en.state.dead) { // Free memory (kill)
                // this._speedChangeCount++;
                this.instances.splice(i, 1)
            } else {
                this.instances[i].controller()
            }
        }
    }

    // changeSpeed(speed) {
    //     for (let i = 0; i < this.instances.length; i++) { 
    //         if (this.instances[i].state != en.state.dead) {
    //             this.instances[i].changeSpeed(speed)
    //         }
    //     }
    // }
}

class Enemy {

    constructor(speed) {
        this.x = 0
        this.y = 0
        this.w = 50
        this.h = 50
        this.xdir = 0
        this.ydir = 0

        this.pushMag = 17
        this.speed = speed
        this.target = null //target needs a width, height, x, and y position
        this.distance = 0

        this.rcolors = ['#81ea25', '#6bba27', '#96e84e', '#abf966', '#b9f981']; //Enemy color strobe
        this.color = this.rcolors[0]
        this.state = en.state.spawn // idle, chase, dying, or dead
    }

    spawn(w, h, target) {
        if (w == null || h == null) {
            w = 500
            h = 500
        }

        let rand = Math.random()
        if (rand < 0.5) { // side
            this.x = rand < 0.5 ? -this.w - 5 : w + 5
            rand = Math.random()
            this.y = rand*(h+10) - 5
        } else { // top/bottom
            this.x = rand*(w+10) - 5
            rand = Math.random()
            this.y = rand < 0.5 ? -this.h - 5 : h + 5
        }

        this.target = target
        this.state = en.state.norm;
    }

    draw() {
        // Don't draw if not spawned or dead
        // if (this.state == en.state.spawn || this.state == en.state.dying) return 0
        if (this.state == en.state.spawn) return 0

        // this.x is center while x 
        // is drawing origin (top left corner)
        let x = this.x - this.w/2
        let y = this.y - this.h/2

        ctx.lineWidth = 1;
        let rand = Math.round(Math.random() * 2);
        this.color = this.rcolors[rand];
        ctx.fillStyle = this.color
        if (this.target != null && this.state == en.state.norm) {
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

    controller() {
        switch (this.state) {
            case en.state.norm:
                this.move()
                break
            case en.state.dying:
                this.death(this.target)
                break
                // case en.act.push:
                //     break
                // case en.act.regen:
                //     break
        }
    }

    calculateDir() {
        if (this.target == null) return 0

        let xdiff = this.target.x - this.x 
        let ydiff = this.target.y - this.y 
        this.distance = Math.sqrt(xdiff*xdiff + ydiff*ydiff)
        if (this.distance > 0) {
            this.xdir = xdiff/this.distance
            this.ydir = ydiff/this.distance
        }
    }

    changeSpeed(delta) {
        this.speed *= delta;
    }

    move() {
        if (this.target == null) return 0

        this.calculateDir()

        if (this.target.state == en.state.dead) {
            this.xdir = -this.xdir
            this.ydir = -this.ydir
        }

        this.x += this.xdir*this.speed
        this.y += this.ydir*this.speed

        //faster direction picking
        // if (this.x > this.target.x + this.target.w/10) this.x -= this.speed;
        // if (this.x < this.target.x + this.target.w/10) this.x += this.speed;

        // if (this.y > this.target.y + this.target.h/10) this.y -= this.speed;
        // if (this.y < this.target.y + this.target.h/10) this.y += this.speed;

        this.wiggle()
    }

    wiggle() {
        let rand = Math.random() > 0.5 ? 1 : -1;
        this.x = this.x + rand*2

        rand = Math.random() > 0.5 ? 1 : -1;
        this.y = this.y + rand*2
    }

    death(player) {
        // Shrink
        this.w = Math.max(0, this.w - 2)
        this.h = Math.max(0, this.h - 3.9)

        if (this.w == 0 || this.h == 0) { 
            // effects.stop(ah);
            // de = effects.play('death');
            if (player.power < 50) player.power += 1;
            G.score++;
            this.state = en.state.dead
        }
    }

    pushField(r) {
        if (this.distance < r) {
            this.x += this.pushMag * -this.xdir
            this.y += this.pushMag * -this.ydir
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
