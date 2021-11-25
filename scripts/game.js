
function shrink() {
    var shrinksx = sx;
    var shrinksy = sy;
    var shrinkwx = wx;
    var shrinkwy = wy;
    var sessionS = setInterval(function() {
        de = effects.play('death');
        ctx.clearRect(0, 0, w, h);
        drawStage();
        shrinksx += 4;
        shrinksy += 4;
        shrinkwx -= 8;
        shrinkwy -= 8;
        ctx.fillStyle = randomColor;
        ctx.fillRect(shrinksx, shrinksy, shrinkwx, shrinkwy);
        stateDefinition();
        drawHealth();
        drawPower();
        drawCool();
        drawScore();
        if (shrinkwx <= 0 || shrinkwy <= 0 || shrinksx > w || shrinksy > h) {
            clearInterval(sessionS);
            end();
        }

    }, 150);
}

function end() {
    var gx = -w;
    var gx2 = -0.5*w;
    effects.stop(ah);
    mainTheme.stop();
    endTheme.play();
    var sessionE = setInterval(function() {
        if (gx !== 0) gx += 4;
        if (gx2 !== 0 + 200) gx2 += 14;
        setHighScore();
        randomColor = '#ffd6cc';
        ctx.clearRect(0, 0, w, 0);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, h, w);
        var grd = ctx.createLinearGradient(0, 0, w + gx, 0);
        grd.addColorStop(0, randomColor);
        grd.addColorStop(1, 'black');
        ctx.font = '70px Comic Sans MS';
        ctx.fillStyle = grd;
        ctx.fillText("GAME OVER", w / 2 - (ctx.measureText("GAME OVER").width/2), h / 2 - 5);
        ctx.font = '12px monospace';
        if(highscore < score){
            ctx.fillText("The high score was " + highscore, w / 2 - (ctx.measureText("The high score was " + highscore).width/2), h * 8.5 / 16);
            ctx.fillText("Your score is " + score, w / 2 - (ctx.measureText("Your score is " + score).width/2), h * 9 / 16);
        }
        else {
            ctx.fillText("The high score is " + highscore, w / 2 - (ctx.measureText("The high score is " + highscore).width/2), h * 8.5 / 16);
            ctx.fillText("Your score was " + score, w / 2 - (ctx.measureText("Your score was " + score).width/2), h * 9 / 16);
        }
        ctx.font = '20px monospace';
        var grd2 = ctx.createLinearGradient(0, 0, w + gx2, 0);
        grd2.addColorStop(0, randomColor);
        grd2.addColorStop(1, 'black');
        ctx.fillStyle = grd2;
        ctx.fillText("TITLE >>",w - (ctx.measureText("TITLE >>").width), h - 10);
        canvas.addEventListener("mousedown", getPosition, false);
        if (x >= w - (ctx.measureText("TITLE >>").width)-10 && x <= w && y >= h - 20 && y <= h) {
            clearInterval(sessionE);
            location.reload();
        }
    }, 50);
}
