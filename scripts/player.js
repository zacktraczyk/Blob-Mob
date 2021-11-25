let sx = 100; //Player x cordinate
let sy = 100; //Player y cordinate
let wx = 50; //Player width;
let wy = 50; //Player height;


var rDown = false; //Keypress right arrow tracker
var lDown = false; // -- left
var uDown = false; // -- up
var dDown = false; // -- down
var attackb = false; // -- attack normal
var attackz = false; // -- attack bubble
let attackx = false; // -- regeneration

function attack() {
    var time = 0;
    at = effects.play('attack');
    var sessionA = setInterval(function() {
        
        randomColor = '#adedff';
        time++;
        cool++;
        ctx.clearRect(0, 0, w, h);

        drawStage();

        drawChar();

        stateDefinition();

        drawHealth();

        drawPower();

        drawCool();

        drawScore();

        if (time < 5 && recent == 'right') sx += 10;
        else if (time < 5 && recent == 'left') sx -= 10;
        else if (time > 5 && recent == 'left') sx += 10;
        else if (time > 5 && recent == 'right') sx -= 10;

        if (time < 5 && recent == 'down') sy += 10;
        else if (time < 5 && recent == 'up') sy -= 10;
        else if (time > 5 && recent == 'up') sy += 10;
        else if (time > 5 && recent == 'down') sy -= 10;

        enemies.forEach(function(item, index, arr){
            if (time == 5 && touch(item) && item.state != 'dead') arr[index].state = 'dying';
        });

        if (time >= 10) {
            effects.stop(ah);
            clearInterval(sessionA);
            attackb = false;
            main();
        } else if (collide()) {
            effects.stop(ah);
            clearInterval(sessionA);
            shrink();
        }
    }, 50);
}


function attackZ() {
    var time = 0;
    r = 3;
    mainTheme.mute(true);
    effects.stop(ah);
    pu = effects.play('push');
    var sessionAZ = setInterval(function() {
        randomColor = '#adedff';
        time++;
        ctx.clearRect(0, 0, w, h);

        if (7 >= time) {
            r--;
            cool += 2;
        } else if (time >= 8 && time < 20 && time % 2 === 0) {
            r -= 3;
            cool += 2;
        } else if (time >= 8 && time < 20 && Math.abs(time % 2) == 1) {
            r += 3;
            cool += 3;
        } else if (20 <= time && time < 30) {
            enemies.forEach(function(item, index, arr){
                arr[index].state = 'push';
            });
            
            power--;
            r += 10;
            cool += 0.5;
        }
        
        drawStage();

        drawChar();

        stateDefinition();

        ctx.beginPath();
        ctx.strokeStyle = randomColor;
        ctx.arc(sx + wx / 2, sy + wy / 2, wx + r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeStyle = 'black';

        drawHealth();

        drawPower();

        drawCool();

        drawScore();
        
        if (time >= 50) {
            clearInterval(sessionAZ);
            attackz = false;
            main();
               
            enemies.forEach(function(item, index, arr){
                arr[index].state = 'alive';
            });

            cool += 1;
        } else if (collide()) {
            clearInterval(sessionAZ);
            attackz = false;
            shrink();

            enemies.forEach(function(item, index, arr){
                arr[index].state = 'alive';
            });
        }
    }, 50);

}

function regenerate(){
    if(cool == 50){
        justRegen = true;
        mainTheme.mute(true);
        if(effects.playing(he) !== true) he = effects.play('heal');
        effects.volume(1.0, he);
        
        if(power <= 0){
            regeneration = false;
            attackx = false;
        }
        if(Otime % 3 === 0 && power > 0) power-=1;
        if(health < 100) health++;
        if(Otime % 2 === 0){
            wx+=5;
            wy+=5;
            sx-=2;
            sy-=2;
        } else {
            wx-=4;
            wy-=4;
            sx+=2;
            sy+=2;
        }
    } else {
        cool++;
    }
}

//--------------------------------------//
//--------------CHARACTERS--------------//
function moveChar() {
    if (dDown && regeneration === false) {
        sy += 4;
        sx = random(sx);
        recent = 'down';
    }
    if (rDown && regeneration === false) {
        sx += 4;
        sy = random(sy);
        recent = 'right';
    }
    if (uDown && regeneration === false) {
        sy -= 4;
        sx = random(sx);
        recent = 'up';
    }
    if (lDown && regeneration === false) {
        sx -= 4;
        sy = random(sy);
        recent = 'left';
    }
    
    
    if (attackb && regeneration === false) {
        clearInterval(sessionM);
        attack();
    } else if (attackz && regeneration === false) {
        clearInterval(sessionM);
        attackZ();
    } else if (attackx) {
        //clearInterval(sessionM);
        //attackX();
        regeneration = true;
    } else if (attackx === false){
        regeneration = false;
        if(justRegen){
            if(muted !== true) mainTheme.mute(false);
            justRegen = false;
            effects.stop(he);
        }
    }

    sx = srandom(sx);
    sy = srandom(sy);
    wx = random(wx);
    wy = random(wy);

}

function drawChar() {
//Pink Color Strobe 
    //randNum = Math.round(Math.random() * 2);
    //randomColor = colors[randNum];

    //Draws body
    ctx.fillStyle = randomColor; //Set to #ffd6cc
    ctx.fillRect(sx, sy, wx, wy);

    ctx.lineWidth = 1;

    //Draws Left Eye
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(sx + wx / 6, sy + wy / 6, (wx / 4 + wy / 4) / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    //Draws Right Eye
    ctx.beginPath();
    ctx.arc(sx + wx - wx / 8, sy + wy / 6, (wx / 4 + wy / 4) / 6, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    //Draws Mouth
    ctx.beginPath();
    ctx.moveTo(sx + wx / 8, sy + wy - wy / 3);
    ctx.bezierCurveTo(sx + wy / 8, sy + wy, sx + wx - wy / 8, sy + wy, sx + wx - wy / 8, sy + wy - wy / 3);
    ctx.stroke();
    ctx.closePath();
}

