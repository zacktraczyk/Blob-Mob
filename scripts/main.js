//DEVELOPED BY ZACK TRACZYK ;]

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const w = c.width;
const h = c.height;
let randNum = 0;
var r = 3;
var Otime = 0;

var pause = true;
var ponce = true;
var sessionM;

//--------------FUNCTIONS--------------//
function random(a) {
    var rand = Math.random() * 10;
    if (rand - 5 > 0 && a < 60) {
        return a + 1;
    } else if (rand - 5 <= 0 && a > 40) {
        return a - 1;
    } else {
        return a;
    }
}

function srandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5) {
        return a + 1;

    } else {
        return a - 1;
    }
}


function mxrandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5 && a < w - wx - 10) {
        return a + 1;

    } else if (rand <= 5 && a > 10) {
        return a - 1;
    } else {
        return a;
    }
}


function myrandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5 && a > 10) {
        return a - 1;

    } else if (rand <= 5 && a < h - wy - 10) {
        return a + 1;
    } else {
        return a;
    }
}

function randomLocation(a) {
    if (Math.random() * 10 >= 5) {
        if (Math.random() * 10 >= 5) {
            a.esx = Math.random() * w;
            a.esy = -50 * Math.random() - 20;
        } else {
            a.esx = Math.random() * w;
            a.esy = h + 50 * Math.random() + 20;
        }
    } else {
        if (Math.random() * 10 >= 5) {
            a.esx = -50 * Math.random() - 20;
            a.esy = Math.random() * h;
        } else {
            a.esx = w + 50 * Math.random() + 20;
            a.esy = Math.random() * h;
        }
    }

}

//Player and Enemy trackers
function collide() {
    if (sx < 0 || sy < 0 || sx + wx > w || sy + wy > h) {
        return true;
    }
}

function touch(enemy) {
    if (((sx <= enemy.esx && enemy.esx <= sx + wx) && (sy <= enemy.esy && enemy.esy <= sy + wy)) || ((sx <= enemy.esx + enemy.ewx && enemy.esx + enemy.ewx <= sx + wx) && (sy <= enemy.esy + enemy.ewy && enemy.esy + enemy.ewy <= sy + wy))) {
        return true;
    }
}


function inarea(enemy) {
    if (((sx - (wx / 2 + r) <= enemy.esx && enemy.esx <= sx + wx + (wx / 2 + r)) && (sy - (wy / 2 + r) <= enemy.esy && enemy.esy <= sy + wy + (wy / 2 + r))) || ((sx <= enemy.esx + enemy.ewx && enemy.esx + enemy.ewx <= sx + wx + (wx / 2 + r)) && (sy <= enemy.esy + enemy.ewy && enemy.esy + enemy.ewy <= sy + wy - (wy / 2 + r)))) {
        return true;
    }
}

//Resets variables
function reset(){
    enemies.forEach(function(item, index, arr){
        arr[index].state = 'none';
    });
    
    rDown = false;
    lDown = false;
    uDown = false;
    dDown = false;
    attackb = false;
    attackz = false;
    attackx = false;
    speed = 1;
    regeneration = false;
    Otime = 0;
    power = 50;
    dead = false;
    health = 100;
    damaging = false;
    cool = 0;
}
    
//-----------------------------------//
//--------------ATTACKS--------------//


//-------------------------------//



var enemy1 = new enemy('none', 'regular', 0.3);
var enemy2 = new enemy('none', 'regular', 1);
var enemy3 = new enemy('none', 'regular', 1.2);
var enemy4 = new enemy('none', 'regular', 0.9);
var enemy5 = new enemy('none', 'regular', 1.4);
var enemy6 = new enemy('none', 'regular', 1.1);
var enemy7 = new enemy('none', 'regular', 1.2);
var enemy8 = new enemy('none', 'regular', 1.3);
var enemy9 = new enemy('none', 'regular', 1.4);
var enemy10 = new enemy('none', 'regular', 1.5);
var enemy11 = new enemy('none', 'regular', 1.5);
var enemy12 = new enemy('none', 'regular', 1.5);
var enemy13 = new enemy('none', 'regular', 1.8);
var enemy14 = new enemy('none', 'regular', 1.8);
var enemy15 = new enemy('none', 'regular', 2.1);
//var enemy1 = new enemy('none', 'boss');

enemies = [enemy1,
           enemy2,
           enemy3,
           enemy4,
           enemy5,
           enemy6,
           enemy7,
           enemy8,
           enemy9,
           enemy10,
           enemy11,
           enemy12,
           enemy13,
           enemy14,
           enemy15 ];

function main() {
    // var sx = 100;
    // var sy = 100;
    // var wx = 50;
    // var wy = 50;
    document.body.style.backgroundColor = 'black';
    if(effects.playing(ah) !== true && mainTheme.playing() !== true && muted !== true)
            effects.on('end', function(){
                mainTheme.mute(false);
            }, pu);
    
    ah = effects.play('healthLoss');
    effects.volume(0.6, ah);
    effects.stop(ah);
    sessionM = setInterval(function() {
        if(pause === false) Otime++;
        ctx.clearRect(0, 0, w, h);
        
        //muteSound();

        drawStage();
        
        listen();
        
        stateDefinition();
        
        drawChar();

        drawHealth();

        drawScore();

        drawPower();

        drawCool();
        
        pauseMenu();
        
        if(pause === false){
            
            if(regeneration && damaging === false) regenerate();
            
            moveChar();
            
            enemySpawn();

            enemeySpeed();
            
            if (cool > 0 && regeneration === false) {
                cool--;
                pcolor = '#adedff';
            }
            
            if ((touch(enemy1) && enemy1.state != 'dead') || (touch(enemy2) && enemy2.state != 'dead') || (touch(enemy3) && enemy3.state != 'dead') || (touch(enemy4) && enemy4.state != 'dead') || (touch(enemy5) && enemy5.state != 'dead') || (touch(enemy6) && enemy6.state != 'dead') || (touch(enemy7) && enemy7.state != 'dead') || (touch(enemy8) && enemy8.state != 'dead') || (touch(enemy9) && enemy9.state != 'dead') || (touch(enemy10) && enemy10.state != 'dead') || (touch(enemy11) && enemy11.state != 'dead') || (touch(enemy12) && enemy12.state != 'dead') || (touch(enemy13) && enemy13.state != 'dead') || (touch(enemy14) && enemy14.state != 'dead') || (touch(enemy15) && enemy15.state != 'dead')) {
                health--;
                pcolor = '#ff6d6d';
                damaging = true;
                regeneration = false;
                if(hlSound && muted === false){
                    mainTheme.mute(true);
                    ah = effects.play('healthLoss');
                    hlSound = false;
                }
            } else {
                hlSound = true;
                effects.stop(ah);
                damaging = false;
            }

            if (cool === 0 && damaging === false) {
                if(attackb === false && attackx === false && attackz === false && muted === false) mainTheme.mute(false);
                effects.stop(ah);
                pcolor = '#ffd6cc';
            }
            
            if (collide() || health <= 0) {
                hlSound = true;
                effects.stop(ah);
                playerDead = true;
                clearInterval(sessionM);
                shrink();
            }
        }
        document.body.style.backgroundColor = 'black';
    }, 50);
}


//Developed By ZACK TRACZYK
