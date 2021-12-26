class IO {

    constructor() {
        this.xmouse = 0
        this.ymouse = 0
        this.mouseDown = false

        this.keyState = {
            right: false,
            up: false,
            left: false,
            down: false,

            attack: false,
            push: false,

            pause: false,
        }

        this.keyMap = {
            // arrow
            39: 'right',
            38: 'up',
            37: 'left',
            40: 'down',

            // wasd
            68: 'right',
            87: 'up',
            65: 'left',
            83: 'down',

            32: 'attack',
            81: 'push',

            80: 'pause',
        }

    }


    addKeyListeners() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    keyDownHandler(e) {
        let key = I.keyMap[e.keyCode] // THIS IS HORRENDOUS
        I.keyState[key] = true // ALSO THIS (I reference)
        // if (e.keyCode == 77 && monce) muteSound(); //Mute
        // else if (e.keyCode == 88 && cool === 0 && power > 0) attackx = true; //Special Regenerate
    }

    keyUpHandler(e) {
        let key = I.keyMap[e.keyCode] // THIS IS HORRENDOUS AS AWELL
        I.keyState[key] = false // GOD HELP ME
    }

    mousePosition(event) {
        I.xmouse = event.x - c.offsetLeft // ALSO BAD
        I.ymouse = event.y - c.offsetTop // REAL BAD
        I.mouseDown = true

    }

    addMouseListener() {
        document.addEventListener("click", this.mousePosition, false);
    }
}
