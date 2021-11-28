class IO {

    constructor() {
        this.xmouse = 0
        this.ymouse = 0
        this.keyState = {
            right: false,
            up: false,
            left: false,
            down: false,

            attack: false,

            pause: false,
        }

        this.keyMap = {
            39: 'right',
            38: 'up',
            37: 'left',
            40: 'down',

            32: 'attack',

            80: 'pause'
        }

    }


    addKeyListeners() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    keyDownHandler(e) {
        // e.preventDefault();
        let key = I.keyMap[e.keyCode] // THIS IS HORRENDOUS
        I.keyState[key] = true // ALSO THIS (I reference)
        // if (e.keyCode == 77 && monce) muteSound(); //Mute
        // if (e.keyCode == 80 && ponce && playerDead === false) pauseMenu(); //Pause
        // else if (e.keyCode == 90 && cool === 0 && power >= 10) attackz = true; //Special Attack Push
        // else if (e.keyCode == 88 && cool === 0 && power > 0) attackx = true; //Special Regenerate
    }

    keyUpHandler(e) {
        let key = I.keyMap[e.keyCode] // THIS IS HORRENDOUS AS AWELL
        I.keyState[key] = false // GOD HELP ME
        // if (e.keyCode == 77) monce = true;
        // if (e.keyCode == 80) ponce = true;
        // if (e.keyCode == 88) attackx = false;
    }

    mousePosition(event) {
        I.xmouse = event.x - c.offsetLeft // ALSO BAD
        I.ymouse = event.y - c.offsetTop // REAL BAD
    }

    addMouseListener() {
        canvas.addEventListener("click", this.mousePosition, false);
    }

    removeMouseListener() {
        canvas.removeEventListener("click", this.mousePosition, false);
    }
    
}
