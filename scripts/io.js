let x; //Mouse track x
let y; //Mouse track Y

//Mouse Tracker
function getPosition(event) {
    x = event.x;
    y = event.y;
    x -= c.offsetLeft;
    y -= c.offsetTop;
}

function listen() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        e.preventDefault();
        if (e.keyCode == 40) dDown = true; //Down arrow
        if (e.keyCode == 39) rDown = true; //Right arrow
        if (e.keyCode == 38) uDown = true; //Up arrow
        if (e.keyCode == 37) lDown = true; //Left arrow
        if (e.keyCode == 77 && monce) muteSound(); //Mute
        if (e.keyCode == 80 && ponce && playerDead === false) pauseMenu(); //Pause
        if (e.keyCode == 32 && cool === 0) attackb = true; //Attack
        else if (e.keyCode == 90 && cool === 0 && power >= 10) attackz = true; //Special Attack Push
        else if (e.keyCode == 88 && cool === 0 && power > 0) attackx = true; //Special Regenerate
    }

    function keyUpHandler(e) {
        if (e.keyCode == 40) dDown = false;
        if (e.keyCode == 39) rDown = false;
        if (e.keyCode == 38) uDown = false;
        if (e.keyCode == 37) lDown = false;
        if (e.keyCode == 77) monce = true;
        if (e.keyCode == 80) ponce = true;
        if (e.keyCode == 88) attackx = false;
    }

}

//Cookie Storage
function setHighScore() {
    if (highscore !== null) {
        if (score > highscore) {
            localStorage.setItem("highscore", score);
        }
    } else {
        highscore = 0;
        localStorage.setItem("highscore", score);
    }
}

