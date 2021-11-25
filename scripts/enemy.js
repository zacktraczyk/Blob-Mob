let esx = 0; //Enemy object x cordinate
let esy = 0; //Enemy object y cordinate
let ewx = 50; //Enemy object width
let ewy = 50; //Enemy object height;
let enemies; //Enemies array

var speed = 1;

const ecolors = ['#81ea25', '#6bba27', '#96e84e', '#abf966', '#b9f981']; //Enemy color strobe
const ebcolors = ['#f45642', '#e06757', '#f9543e', '#dd351f', '#ed452f']; //Enemy Boss color strobe

function enemy(state, type, enemspeed) {

    this.state = state, //Spawn, alive, push, dying, or dead

    this.type = type, //Regular or boss

    this.speed = enemspeed * speed,
    
    this.bossIsAlive = false, //Boss not functional

    this.spawn = function() {
        randomLocation(this);
        this.state = 'alive';
    },

    this.draw = function() {
        ctx.lineWidth = 1;
        randNum = Math.round(Math.random() * 2);
        var erandomColor = ecolors[randNum];
        ctx.fillStyle = erandomColor;
        this.ewx = wx / 2 - 10;
        this.ewy = wy - 10;
        ctx.beginPath();
        
        //Draws Body
        ctx.moveTo(this.esx - this.ewx / 8, this.esy);
        ctx.bezierCurveTo(this.esx - this.ewx / 8, this.esy - this.ewy / 4,
                          this.esx + this.ewx + this.ewx / 8, this.esy - this.ewy / 4,
                          this.esx + this.ewx + this.ewx / 8, this.esy);

        ctx.bezierCurveTo(this.esx + this.ewx * 2, this.esy,
                          this.esx + this.ewx * 2, this.esy + this.ewy,
                          this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy);

        ctx.bezierCurveTo(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy * 1.75,
                          this.esx - this.ewx * 2, this.esy + this.ewy / 4,
                          this.esx, this.esy + this.ewy / 2);

        ctx.bezierCurveTo(this.esx - this.ewx, this.esy + this.ewy / 2,
                          this.esx - this.ewx / 2, this.esy,
                          this.esx - this.ewx / 8, this.esy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 1;

        //Draws Left Eye
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.esx + this.ewx / 6, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Right Eye
        ctx.beginPath();
        ctx.arc(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        //Draws Mouth
        ctx.beginPath();
        ctx.moveTo(this.esx + this.ewx / 8, this.esy + this.ewy);
        ctx.bezierCurveTo(this.esx + this.ewy / 8, this.esy + this.ewy - this.ewy /3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy - this.ewy /3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy);
        ctx.stroke();
        ctx.closePath();
    },

    this.drawBoss = function() {
        ctx.lineWidth = 1;
        randNum = Math.round(Math.random() * 2);
        var ebrandomColor = ebcolors[randNum];
        ctx.fillStyle = ebrandomColor;
        this.ewx = wx - 10;
        this.ewy = wy * 2 - 10;
        ctx.beginPath();

        ctx.moveTo(this.esx - this.esx / 20, this.esy);
        ctx.bezierCurveTo(this.esx - this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy);

        ctx.bezierCurveTo(this.esx + this.ewx + this.esx / 10, this.esy, this.esx + this.ewx + this.esx / 10, this.esy + this.ewy, this.esx + this.ewx, this.esy + this.ewy);

        ctx.bezierCurveTo(this.esx + this.ewx / 10, this.esy + this.esy / 4, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy + this.ewy / 2);

        ctx.bezierCurveTo(this.esx - this.ewx / 2, this.esy + this.ewy / 2, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.esx + this.ewx / 6, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.esx + this.ewy / 8, this.esy + this.ewy);
        ctx.bezierCurveTo(this.esx + this.ewx / 8, this.esy + this.ewy - this.ewy / 3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy - this.ewy / 3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy);
        ctx.stroke();
        ctx.closePath();
    },

    this.move = function() {

        if (this.esx > sx + wx / 10) this.esx -= this.speed;
        if (this.esx < sx + wx / 10) this.esx += this.speed;

        if (this.esy > sy + wy / 10) this.esy -= this.speed;
        if (this.esy < sy + wy / 10) this.esy += this.speed;

        this.esx = random(this.esx);
        this.esy = random(this.esy);
    },

    this.kill = function() {
        this.ewx -= 2;
        this.ewy -= 2;

        //Draws Body
        ctx.moveTo(this.esx - this.ewx / 8, this.esy);
        ctx.bezierCurveTo(this.esx - this.ewx / 8, this.esy - this.ewy / 4,
                          this.esx + this.ewx + this.ewx / 8, this.esy - this.ewy / 4,
                          this.esx + this.ewx + this.ewx / 8, this.esy);

        ctx.bezierCurveTo(this.esx + this.ewx * 2, this.esy,
                          this.esx + this.ewx * 2, this.esy + this.ewy,
                          this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy);

        ctx.bezierCurveTo(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy * 1.75,
                          this.esx - this.ewx * 2, this.esy + this.ewy / 4,
                          this.esx, this.esy + this.ewy / 2);

        ctx.bezierCurveTo(this.esx - this.ewx, this.esy + this.ewy / 2,
                          this.esx - this.ewx / 2, this.esy,
                          this.esx - this.ewx / 8, this.esy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if (this.ewx <= 0 || this.ewy <= 0) {
            effects.stop(ah);
            de = effects.play('death');
            score++;
            if (power < 50) power += 1;
            this.state = 'dead';
            if(this.type == 'boss') this.bossIsAlive = false;
        }
    },

    this.push = function() {
        if(this.type == 'regular')this.draw();
        else if(this.type== 'boss')this.drawBoss();
        if (inarea(this)) {
            if (this.esx > sx + wx / 10) this.esx += 6;
            if (this.esx < sx + wx / 10) this.esx -= 6;

            if (this.esy > sy + wy / 10) this.esy += 6;
            if (this.esy < sy + wy / 10) this.esy -= 6;
        } else {
            this.esx = srandom(this.esx);
            this.esy = srandom(this.esy);
        }
    };


}

function stateDef(a) {
    if (a.type == 'regular') {
        if (a.state == 'spawn' || a.state == 'dead') {
            a.spawn();
        } else if (a.state == 'alive') {
            if(pause === false) a.move();
            a.draw();
        } else if (a.state == 'dying') {
            a.kill();
        } else if (a.state == 'push') {
            a.push();
        }
    } else if (a.type == 'boss') {
        if (a.state == 'spawn') {
            a.spawn();
        } else if (a.state == 'alive') {
            if(pause === false) a.move();
            a.drawBoss();
        } else if (a.state == 'dying') {
            a.kill();
        } else if (a.state == 'push') {
            a.push();
        }
    }
}

function stateDefinition(){
    stateDef(enemy1);
    stateDef(enemy2);
    stateDef(enemy3);
    stateDef(enemy4);
    stateDef(enemy5);
    stateDef(enemy6);
    stateDef(enemy7);
    stateDef(enemy8);
    stateDef(enemy9);
    stateDef(enemy10);
    stateDef(enemy11);
    stateDef(enemy12);
    stateDef(enemy13);
    stateDef(enemy14);
    stateDef(enemy15);
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

