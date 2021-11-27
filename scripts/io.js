let x; //Mouse track x
let y; //Mouse track Y

let keyState = {
    pressed: {
        right: false,
        up: false,
        left: false,
        down: false,
        attack: false,
    }
}

const keyMap = {
    39: 'right',
    38: 'up',
    37: 'left',
    40: 'down',
    32: 'attack'
}

function listen() {
    function keyDownHandler(e) {
        // e.preventDefault();
        let key = keyMap[e.keyCode]
        keyState.pressed[key] = true
        // if (e.keyCode == 40)  = true; //Down arrow
        // if (e.keyCode == 39) rDown = true; //Right arrow
        // if (e.keyCode == 38) uDown = true; //Up arrow
        // if (e.keyCode == 37) lDown = true; //Left arrow
        // if (e.keyCode == 77 && monce) muteSound(); //Mute
        // if (e.keyCode == 80 && ponce && playerDead === false) pauseMenu(); //Pause
        // else if (e.keyCode == 90 && cool === 0 && power >= 10) attackz = true; //Special Attack Push
        // else if (e.keyCode == 88 && cool === 0 && power > 0) attackx = true; //Special Regenerate
    }

    function keyUpHandler(e) {
        let key = keyMap[e.keyCode]
        keyState.pressed[key] = false
        // if (e.keyCode == 40) dDown = false;
        // if (e.keyCode == 39) rDown = false;
        // if (e.keyCode == 38) uDown = false;
        // if (e.keyCode == 37) lDown = false;
        // if (e.keyCode == 77) monce = true;
        // if (e.keyCode == 80) ponce = true;
        // if (e.keyCode == 88) attackx = false;
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

//Mouse Tracker
function getPosition(event) {
    x = event.x;
    y = event.y;
    x -= c.offsetLeft;
    y -= c.offsetTop;
}

