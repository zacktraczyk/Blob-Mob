// REQUIRED: enum.js game.js

class EnemyController {

    constructor(){
        this.instances = new Array()
        this.cool = 0
    }

    spawner(w, h, p, speed) {
        if (this.cool > 0) --this.cool
        if (G.time % 1.00 && Enemies.instances.length < 30 && this.cool <= 0) {
            let e = new Enemy(speed)
            e.spawn(w, h, p)
            this.instances.push(e)
            this.cool = 50
        }
    }

    draw() {
        this.instances.forEach(e => e.draw())
    }

    controller(){
        for (let i = 0; i < this.instances.length; i++) { 
            if (this.instances[i].state == en.state.dead) {
                this.instances.splice(i, 1)
            }
            else {
                this.instances[i].controller()
            }
        }
    }
}

class Enemy {

    constructor(speed) {
        this.x = 0
        this.y = 0
        this.w = 50
        this.h = 50
        this.speed = speed
        this.target //target needs a width, height, x, and y position

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
            rand = Math.random()
            this.x = rand < 0.5 ? -this.w - 5 : w + 5
            this.y = rand*(h+10) - 5
        } else { // top/bottom
            rand = Math.random()
            this.x = rand*(w+10) - 5
            this.y = rand < 0.5 ? -this.h - 5 : h + 5
        }

        this.target = target
        this.state = en.state.norm;
    }

    draw() {
        // Don't draw if not spawned or dead
        // if (this.state == en.state.spawn || this.state == en.state.dying) return 0
        if (this.state == en.state.spawn) return 0

        ctx.lineWidth = 1;
        let rand = Math.round(Math.random() * 2);
        this.color = this.rcolors[rand];
        ctx.fillStyle = this.color
        if (this.target != null) {
            this.w = this.target.w / 2 - 10;
            this.h = this.target.h - 10;
        }
        ctx.beginPath();

        //Draws Body
        ctx.moveTo(this.x - this.w / 8, this.y);
        ctx.bezierCurveTo(this.x - this.w / 8, this.y - this.h / 4,
            this.x + this.w + this.w / 8, this.y - this.h / 4,
            this.x + this.w + this.w / 8, this.y);

        ctx.bezierCurveTo(this.x + this.w * 2, this.y,
            this.x + this.w * 2, this.y + this.h,
            this.x + this.w - this.w / 8, this.y + this.h);

        ctx.bezierCurveTo(this.x + this.w - this.w / 8, this.y + this.h * 1.75,
            this.x - this.w * 2, this.y + this.h / 4,
            this.x, this.y + this.h / 2);

        ctx.bezierCurveTo(this.x - this.w, this.y + this.h / 2,
            this.x - this.w / 2, this.y,
            this.x - this.w / 8, this.y);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 1;

        //Draws Left Eye
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x + this.w / 6, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Right Eye
        ctx.beginPath();
        ctx.arc(this.x + this.w - this.w / 8, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Mouth
        ctx.beginPath();
        ctx.moveTo(this.x + this.w / 8, this.y + this.h);
        ctx.bezierCurveTo(this.x + this.h / 8, this.y + this.h - this.h /3, this.x + this.w - this.h / 8, this.y + this.h - this.h /3, this.x + this.w - this.h / 8, this.y + this.h);
        ctx.stroke();
        ctx.closePath();
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

    move() {
        if (this.target == null) return 0
        // console.log(this.x, this.y)

        if (this.x > this.target.x + this.target.w/10) this.x -= this.speed;
        if (this.x < this.target.x + this.target.w/10) this.x += this.speed;

        if (this.y > this.target.y + this.target.h/10) this.y -= this.speed;
        if (this.y < this.target.y + this.target.h/10) this.y += this.speed;

        this.wiggle()
    }

    wiggle() {
        let rand = Math.random() > 0.5 ? 1 : -1;
        this.x = this.x + rand

        rand = Math.random() > 0.5 ? 1 : -1;
        this.y = this.y + rand
    }

    death(player) {
        // console.log("DYING")
        // this.w -= 0.01;
        // this.h -= 0.01;

        //Draws Body
        // let rand = Math.round(Math.random() * 2);
        // this.color = this.rcolors[rand];
        // ctx.stroke();
        // ctx.closePath();

        // if (this.w <= 0 || this.h <= 0) {
        //     // effects.stop(ah);
        //     // de = effects.play('death');
        G.score++;
        if (player.power < 50) player.power += 1;
        this.state = en.state.dead

        // }
    }

    push() {
        if(this.type == 'regular')this.draw();
        else if(this.type== 'boss')this.drawBoss();
        if (inarea(this)) {
            if (this.x > sx + wx / 10) this.x += 6;
            if (this.x < sx + wx / 10) this.x -= 6;

            if (this.y > sy + wy / 10) this.y += 6;
            if (this.y < sy + wy / 10) this.y -= 6;
        } else {
            this.x = srandom(this.x);
            this.y = srandom(this.y);
        }
    }


}


function enemySpawn(){
    if (Otime == 20)enemy1.state = 'spawn';

    if (Otime == 100) enemy2.state = 'spawn';

    if (Otime == 300) enemy3.state = 'spawn';

    if (Otime == 500) enemy4.state = 'spawn';

    if (Otime == 800) enemy5.state = 'spawn';

    if (Otime == 1000) enemy6.state = 'spawn';

    if (Otime == 1500) enemy7.state = 'spawn';

    if (Otime == 1800) enemy8.state = 'spawn';

    if (Otime == 2000) enemy9.state = 'spawn';

    if (Otime == 2500) enemy10.state = 'spawn';

    if (Otime == 3000) enemy11.state = 'spawn';

    if (Otime == 3500) enemy12.state = 'spawn';

    if (Otime == 4000){ 
        enemy13.state = 'spawn';
        enemy14.state = 'spawn';
        enemy15.state = 'spawn';
    }
}

function enemeySpeed(){
    if(score >= 20 && score < 40)speed=1.2;
    if(score >= 40 && score < 80)speed=1.25;
    if(score >= 80 && score < 100)speed=1.5;
    if(score >= 100 && score < 200)speed=1.75;
    if(score >= 200 && score < 250)speed=2;
    if(score >= 250 && score < 300)speed=2.5;
    if(score >= 300)speed=3;
}

// this.drawBoss = function() {
//     ctx.lineWidth = 1;
//     randNum = Math.round(Math.random() * 2);
//     var ebrandomColor = ebcolors[randNum];
//     ctx.fillStyle = ebrandomColor;
//     this.w = wx - 10;
//     this.h = wy * 2 - 10;
//     ctx.beginPath();

//     ctx.moveTo(this.x - this.x / 20, this.y);
//     ctx.bezierCurveTo(this.x - this.x / 20, this.y - this.y / 20, this.x + this.w + this.x / 20, this.y - this.y / 20, this.x + this.w + this.x / 20, this.y);

//     ctx.bezierCurveTo(this.x + this.w + this.x / 10, this.y, this.x + this.w + this.x / 10, this.y + this.h, this.x + this.w, this.y + this.h);

//     ctx.bezierCurveTo(this.x + this.w / 10, this.y + this.y / 4, this.x - this.w * 2, this.y + this.h / 4, this.x - this.x / 20, this.y + this.h / 2);

//     ctx.bezierCurveTo(this.x - this.w / 2, this.y + this.h / 2, this.x - this.w * 2, this.y + this.h / 4, this.x - this.x / 20, this.y);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();

//     ctx.lineWidth = 1;

//     ctx.beginPath();
//     ctx.fillStyle = 'black';
//     ctx.arc(this.x + this.w / 6, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 4, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.arc(this.x + this.w - this.w / 8, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 6, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.moveTo(this.x + this.h / 8, this.y + this.h);
//     ctx.bezierCurveTo(this.x + this.w / 8, this.y + this.h - this.h / 3, this.x + this.w - this.h / 8, this.y + this.h - this.h / 3, this.x + this.w - this.h / 8, this.y + this.h);
//     ctx.stroke();
//     ctx.closePath();
// },

