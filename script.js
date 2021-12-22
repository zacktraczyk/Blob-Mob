// Player Enumerations
const en = {
    dir: {
        right: 0,
        up: 1,
        left: 2,
        down: 3
    },

    act: {
        norm: 0,
        attack: 1,
        push: 2,
        regen: 3
    },

    state: {
        spawn: -1,
        norm: 0,
        damage: 1,
        dying: 2,
        dead: 3
    },
}
// DON'T CHANGE FORMAT (PARSED BY PYTHON)
const difficultyTable = {
    2: {
        player: {
            speed:      4,
            accel:      0.6,
            cool:       5,
            health:     1000,
        },
        enemy: {
            speed:      0.8,
            spawnWait:  1,
            maxInst:    10,
        }
    },

    3: {
        player: {
            speed:      4,
            accel:      0.4,
            cool:       20,
            health:     800,
        },
        enemy: {
            speed:      1,
            spawnWait:  0.8,
            maxInst:    50,
        }
    },

    4: {
        player: {
            speed:      4,
            accel:      0.4,
            cool:       40,
            health:     500,
        },
        enemy: {
            speed:      1.5,
            spawnWait:  0.6,
            maxInst:    100,
        }
    },

    5: {
        player: {
            speed:      4,
            accel:      0.4,
            cool:       50,
            health:     300,
        },
        enemy: {
            speed:      1.7,
            spawnWait:  0.6,
            maxInst:    150,
        }
    },

    6: {
        player: {
            speed:      14,
            accel:      1,
            cool:       15,
            health:     100,
        },
        enemy: {
            speed:      5,
            spawnWait:  0.1,
            maxInst:    200,
        }
    },

}
//Howler Sound
let titleTheme = new Howl({
    src: ['Sound/Good-portion-of-distortion.mp3'],
    volume: 0.7,
    loop: true
});

let mainTheme = new Howl({
    // src: ['Sound/8-lit.mp3'],
    src: ['Sound/No-Thanksv1.1.mp3'],
    volume: 0.5,
    loop: true
    
});

let endTheme = new Howl({
    src: ['Sound/Game-Over.mp3'],
    volume: 1,
    loop: true
});

//Length of segment ~= 2100
var hlSound = true;

let effects = new Howl({
    src: ['Sound/Sound-effects.mp3'],
    sprite: {
        attack: [0, 400],
        healthLoss: [2031, 2350, true],
        btn: [4980, 500],
        death: [6450, 1000],
        push: [8500, 5000],
        heal: [14000, 10000]
    }
});


function muteSound() {
    if(monce) {
        if (muted) muted = false;
        else muted = true;
        
        monce = false;
    }
    
    if(muted) {
        mainTheme.mute(true);
        titleTheme.mute(true);
        effects.mute(true);
        endTheme.mute(true);
    } else {
        mainTheme.mute(false);
        titleTheme.mute(false);
        effects.mute(false);
        endTheme.mute(false);
    }
    
    mainTheme.volume(mSound);
    effects.volume(eSound);
}
class Button {

    constructor(font, text, c1, c2){
        this.font = font
        this.text = text
        this.c1 = c1
        this.c2 = c2

        this.x = 0
        this.y = 0
        this.w = 100
        this.h = 100
    }

    draw() {
        ctx.font = this.font
        ctx.fillStyle = this.c2
        ctx.fillText(this.text, this.x - this.w/2 - 3, this.y + this.h/2 - 3)
        ctx.fillStyle = this.c1
        ctx.fillText(this.text, this.x - this.w/2, this.y + this.h/2)
    }

    check(m) {
        let x = this.x - this.w/2
        let y = this.y - this.h/2
        if (m.xmouse > x && m.xmouse < x + this.w &&
            m.ymouse > y && m.ymouse < y + this.h && m.mouseDown){
            if (!effects.playing('btn'))
                effects.play('btn')
            m.mouseDown = false
            return true
        }
    }

    adjust(x, y){
        ctx.font = this.font
        this.w = ctx.measureText(this.text).width
        this.h = parseInt(this.font.split(" ")[0], 10)
        this.x = x
        this.y = y
    }

    debug() {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h)
    }

}
// REQUIRES: difficulty.js

// animation loop
function loop(dest) {
    setTimeout(() => 
        window.requestAnimationFrame(dest),
    1000 / G.fps);
}

class Game {

    constructor() {
        this.w = window.innerWidth
        this.h = window.innerHeight

        this.difficulty = 5 // 0 - 9

        this.tutorial = false

        this.score = 0
        this.highscore = this.getHighscore()

        this.fps = 60
        this.frame = 0
        this.paused = false
        this.pauseKeyRelease = true

        this.fxSound = 1
        this.musSound = 0.5
    }

    resizeWindow() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        this.w = innerWidth
        this.h = innerHeight
    }

    updateDifficulty(player, enemyController, d) {
        if (d != null) this.difficulty = d

        let pVals = difficultyTable[this.difficulty].player
        let eVals = difficultyTable[this.difficulty].enemy

        // Player
        player.maxSpeed = pVals.speed
        player.accel = pVals.accel

        player.maxCool = pVals.cool
        player.maxHealth = pVals.health
        player.health = player.maxHealth

        // Enemy
        enemyController.speed = eVals.speed
        enemyController.maxInst = eVals.maxInst
        enemyController.spawnWait = eVals.spawnWait
    }

    get time() {
        return Math.floor(this.frame/this.fps * 100)/100
    }

    setTutorial() {
        localStorage.setItem("tutorial", this.tutorial);
    }

    getTutorial() {
        let t = localStorage.getItem("tutorial")
        if (t == null)
            return false
        return true
    }

    setHighscore() {
        if (this.score > this.highscore)
            this.highscore = this.score
        localStorage.setItem("highscore", this.highscore);
    }

    getHighscore() {
        let score = localStorage.getItem("highscore")
        if (score == null)
            return 0
        return score
    }

    pause(p) {
        // effects.play('btn')
        if (p && this.pauseKeyRelease) {
            this.pauseKeyRelease = false
            G.paused = !G.paused
        } else if (!p && !this.pauseKeyRelease) {
            this.pauseKeyRelease = true
        }
    }

    reset(p, e, damagePoints) {
        // player
        p.health = p.maxHealth
        p.power = 0
        p.cool = 0
        p.state = en.state.alive
        p.action = en.state.norm
        
        p.xvel = 0
        p.yvel = 0

        e.instances = new Array()
        damagePoints.instances = new Array()

        this.score = 0
    }

    debug() {
        ctx.font = "20px Arial Bold"
        ctx.color = "black"
        
        let x = 40
        let y = this.h*5/8 + 100

        let pVals = difficultyTable[this.difficulty].player
        let eVals = difficultyTable[this.difficulty].enemy

        ctx.fillText("difficulty: " + this.difficulty, x, y)
        y += 30
        ctx.fillText("player: ", x, y)
        x += 30
        y += 20
        ctx.fillText("speed: " + pVals.speed, x, y)
        y += 20
        ctx.fillText("accel: " + pVals.accel, x, y)
        y += 20
        ctx.fillText("cool: " + pVals.cool, x, y)
        y += 20
        ctx.fillText("health: " + pVals.health, x, y)
        y += 30
        x -= 30
        ctx.fillText("enemy: ", x, y)
        x += 30
        y += 20
        ctx.fillText("speed: " + eVals.speed, x, y)
        y += 20
        ctx.fillText("Spawn Rate: " + eVals.spawnWait + "s", x, y)
        y += 20
        ctx.fillText("Max Number: " + eVals.maxInst, x, y)
        y += 40
        if (Enemies != null) ctx.fillText("Blobs: " + Enemies.instances.length, x, y)

    }

}
// REQUIRE: HOWLER.js 

let background = new Image();
background.src = 'paper.jpg'; //NOT IN USE

let Stage = {
    draw(w, h) {
        document.body.style.backgroundColor = '#000000'
        ctx.fillStyle = '#fffbf9'
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(background, 0, 0, w, h)
        ctx.lineWidth = 10
        ctx.strokeRect(0, 0, w, h)
    },

    HUD(w, h, player) {
        // Health
        ctx.fillStyle = 'black'
        ctx.fillRect(w / 2, 10, w/2 - 10, 20)
        ctx.fillStyle = player.color
        ctx.font = "10px monospace"
        ctx.fillText(player.health + "/" + player.maxHealth, w*3/4 - 10, 23)
        ctx.fillRect(w / 2 + 1, 11, Math.max(0, (player.health / player.maxHealth) * (w/2 - 10) - 2), 18)

        // Power
        ctx.fillStyle = 'black'
        ctx.fillRect(w*3/4 + 5, 40, w/4 - 15, 20)
        ctx.fillStyle = '#33cc33'
        // ctx.fillText(player.power + "/" + player.maxPower, w*7/8, 53)
        if (player.power > 0) {
            ctx.fillRect(w*3/4 + 6, 41, (player.power / player.maxPower) * (w/4 - 15) - 2, 18)
        }

        // Cool
        ctx.fillStyle = 'black'
        ctx.fillRect(w/2, 40, w/4 - 5, 20)
        ctx.fillStyle = 'blue'
        ctx.fillRect(w/2 + 1, 41, (1 - (player.cool / player.maxCool)) * (w/4 - 5) - 2, 18)

        // Score
        ctx.fillStyle = 'black'
        ctx.font = "20px monospace"
        ctx.fillText("Score: " + G.score, 18, 28, w / 2)
        ctx.fillText("High-Score: " + G.highscore, 18, 58, w / 2)

        // Difficulty
        ctx.fillStyle = 'black'
        ctx.font = "20px monospace"
        let text = `Difficulty ${G.difficulty}`
        ctx.fillText(text, G.w - ctx.measureText(text).width - 20, h - 25)
    },
}

let pauseMenu = {
    draw(w, h) {
        ctx.fillStyle = "rgba(225, 220, 212, 0.4)"
        ctx.fillRect(0, 0, w, h)
        ctx.fillStyle = "grey"
        ctx.font = "50px monospace"
        ctx.fillText("PAUSE", w / 2 - (ctx.measureText("Pause").width/2), h/2 + 10)
    }
}

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
        canvas.addEventListener("click", this.mousePosition, false);
    }

    removeMouseListener() {
        canvas.removeEventListener("click", this.mousePosition, false);
    }
    
}
// REQUIRES: enum.js

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class DPController {
    constructor() {
        this.interval = 50
        this.maxPoints = 15
        this.instances = new Array()
        this.cool = 0
    }

    spawn(player) {
        if (this.instances.length < 5 && this.cool <= 0) {
            let dp = new DamagePoint(player)
            this.instances.push(dp)
            this.cool = 5
        }
    }

    controller(){
        if (this.cool > 0) --this.cool
        for (let i = 0; i < this.instances.length; i++) { 
            if (this.instances[i].life <= 0) {
                this.instances.splice(i, 1)
            }
            else {
                this.instances[i].live()
                this.instances[i].draw()
            }
        }
    }
}

class DamagePoint {

    constructor(player) {
        let w = player.w
        let h = player.h
        this.x = player.x
        this.y = player.y

        // Spawn
        let rand = Math.random()
        if (rand < 0.5) { // side
            this.x += rand < 0.5 ? -w/2 - 1 : w/2 + 1
            rand = Math.random()
            this.y += rand*(h+10) - 5
        } else { // top/bottom
            this.x += rand*(w+10) - 5
            rand = Math.random()
            this.y += rand < 0.5 ? -h/2 - 1 : h/2 + 1
        }
        this.life = 100
    }

    draw() {
        --this.life
        ctx.font = '18px Comic Sans MS'
        ctx.fillStyle = `rgba(225, 0, 0, ${this.life/100})`
        ctx.fillText("-1", this.x, this.y)
    }

    live() { if (this.life > 0) --this.life }
}

class Player {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.xdir = 1
        this.ydir = 0
        this.color = '#ffd6cc'

        this.maxSpeed = 5
        this.accel = 0.4
        this.xvel = 0
        this.yvel = 0

        this.maxCool = 50
        this.cool = 0
        this.maxPower = 50
        this.power = 0
        this.maxHealth = 500
        this.health = this.maxHealth

        this.action = en.act.norm
        this.pushRadius = 240
        this.pushR = 0
        this.timer = 0
        this.state = en.state.norm
    }

    title(x, y, w, h) {
        this.color = '#ffd6cc'
        this.wiggle(w/2, h/2)

        this.x = clamp(this.x, x + w*3/8, x + w*5/8) 
        this.y = clamp(this.y, y + w*3/8, y + h*5/8) 
    }

    shrink(dx, dy, w, h) {
        w = clamp(w/2, 55, 60 + w/2)
        this.wiggle(55, w)

        this.x += dx
        this.y += dy
    }

    draw() {
        // this.x is center while x 
        // is drawing origin (top left corner)
        let x = this.x - this.w/2
        let y = this.y - this.h/2

        //Draws body
        ctx.fillStyle = this.color //Set to #ffd6cc
        ctx.fillRect(x, y, this.w, this.h)

        ctx.lineWidth = 1

        //Draws Left Eye
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.arc(x + this.w / 6, y + this.h / 6, (this.w / 4 + this.h / 4) / 4, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        //Draws Right Eye
        ctx.beginPath()
        ctx.arc(x + this.w - this.w / 8, y + this.h / 6, (this.w / 4 + this.h / 4) / 6, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        //Draws Mouth
        ctx.beginPath()
        ctx.moveTo(x + this.w / 8, y + this.h - this.h / 3)
        ctx.bezierCurveTo(x + this.h / 8, y + this.h, x + this.w - this.h / 8, y + this.h, x + this.w - this.h / 8, y + this.h - this.h / 3)
        ctx.stroke()
        ctx.closePath()

        if (this.action == en.act.push) {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.pushR, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.closePath()
        }
    }

    controller(w, h, keys, enemies, damagePoints) {

        // Dead?
        if (this.state == en.state.dead) return

        // Action Controller
        if (this.cool <= 0) {
            this.cool = 0
            // Trigger Attack
            if (keys.attack) this.action = en.act.attack

            // Trigger Push
            if (this.power == this.maxPower) {
                if (keys.push) this.action = en.act.push
            }
        }

        switch (this.action) {
            case en.act.attack:
                this.color = '#adedff'
                this.attack(20, enemies)
                return // exit control loop
            case en.act.norm:
                this.move(w, h, keys)
                break
            case en.act.push:
                this.move(w, h, keys)
                this.color = '#adedff'
                this.pushField(600, enemies)
                break
            // case en.act.regen:
            //     break
        }

        // Update Position
        this.x += this.xvel
        this.y += this.yvel

        // Cooldown
        if (this.action != en.act.push) {
            if (this.cool > 0) {
                --this.cool;
                this.color = '#adedff'
            } else {
                this.color = '#ffd6cc'
            }
        }

        // Check for damage
        let damage = false
        enemies.forEach(enemy => {
            if (this.collides(enemy)) damage = true
        })
        if (damage) {
            this.color = '#ff6d6d'
            this.health--
            if (damagePoints != null) damagePoints.spawn(this)
        }

        // Check for death
        if (this.health <= 0) {
            this.state = en.state.dead
        }
    }

    move(w, h, dir) {
        // Increase speed if keydown
        if (dir.right) this.xvel += this.accel
        if (dir.left) this.xvel -= this.accel
        if (dir.down) this.yvel += this.accel
        if (dir.up) this.yvel -= this.accel

        // Decrease speed if keyup
        if (!dir.right && !dir.left){
            if (Math.abs(this.xvel) <= this.accel) this.xvel = 0
            else if (this.xvel > 0) this.xvel -= this.accel
            else if (this.xvel < 0) this.xvel += this.accel
        }
        if (!dir.down && !dir.up){
            if (Math.abs(this.yvel) <= this.accel) this.yvel = 0
            else if (this.yvel > 0) this.yvel -= this.accel
            else if (this.yvel < 0) this.yvel += this.accel
        }

        this.xvel = clamp(this.xvel, -this.maxSpeed, this.maxSpeed)
        this.yvel = clamp(this.yvel, -this.maxSpeed, this.maxSpeed)

        this.calculateDir() // Needed for Attack

        this.wiggle(50, 69)

        // Wrap Screen
        // if (this.x > w && this.xvel > 0) this.x = -this.w - 5
        // else if (this.x + this.w < 0 && this.xvel < 0) this.x = w + 5

        // if (this.y > h && this.yvel > 0) this.y = -5
        // else if (this.y + this.h < 0 && this.yvel < 0) this.y = h + 5

        this.x = clamp(this.x, this.w/2 + 5, w - this.w/2 - 5)
        this.y = clamp(this.y, this.h/2 + 5, h - this.h/2 - 5)
    }

    calculateDir() {
        let mag = Math.sqrt(this.xvel*this.xvel + this.yvel*this.yvel)
        if (mag > 0) {
            this.xdir = this.xvel/mag
            this.ydir = this.yvel/mag
        }
    }
        
    attack(duration, enemies) {
        ++this.timer
        this.cool += this.maxCool/duration

        if (this.timer < duration/2) {
            this.x += this.xdir*7
            this.y += this.ydir*7
        }
        if (this.timer > duration/2) {
            this.x -= this.xdir*7
            this.y -= this.ydir*7
        }

        // Check Collision
        if (this.timer > duration/4 && this.timer < duration*3/4) {
            enemies.forEach(enemy => {
                if (this.collides(enemy)) {
                    if (enemy.state != en.state.dying
                        && enemy.state != en.state.dead)
                        enemy.state = en.state.dying
                }
            })
        }

        // End attack
        if (this.timer >= duration) {
            this.xvel = 0
            this.yvel = 0
            this.timer = 0
            this.action = en.act.norm
        }
    }

    pushField(duration, enemies) {
        this.power -= this.maxPower/duration
        ++this.timer
        this.cool += this.maxCool/duration

        enemies.forEach(enemy => {
            if (enemy.state != en.state.dying
                && enemy.state != en.state.dead) {
                    this.pushR = Math.min(this.timer/(duration/4), 1) * this.pushRadius
                    enemy.pushField(this.pushR)
            }
        })


        if (this.timer >= duration) {
            this.timer = 0
            this.action = en.act.norm
            this.pushR = 0
            this.power = 0
        }
    }

    collides(target) {
        if (target == null)
            return false

        if (!(this.x + this.w/2 < target.x - target.w/2 ||  
            this.x - this.w/2 > target.x + target.w/2) &&

            !(this.y + this.h/2 < target.y - target.h/2 || 
            this.y - this.h/2 > target.y + target.w/2))
            return true

        return false
    }

    wiggle(min, max) {
        let rand = Math.random() > 0.5 ? 1 : -1;
        this.x = this.x + rand

        rand = Math.random() > 0.5 ? 1 : -1;
        this.y = this.y + rand

        rand = Math.random() > 0.5 ? 1 : -1;
        this.w = clamp(this.w + rand, min, max)

        rand = Math.random() > 0.5 ? 1 : -1;
        this.h = clamp(this.h + rand, min, max)
    }
}

function attack() {
    var time = 0
    at = effects.play('attack')
    var sessionA = setInterval(function() {
        
        pcolor = '#adedff'
        time++
        cool++
        ctx.clearRect(0, 0, w, h)

        drawStage()

        drawChar()

        stateDefinition()

        drawHealth()

        drawPower()

        drawCool()

        drawScore()

        if (time < 5 && recent == 'right') this.x += 10
        else if (time < 5 && recent == 'left') this.x -= 10
        else if (time > 5 && recent == 'left') this.x += 10
        else if (time > 5 && recent == 'right') this.x -= 10

        if (time < 5 && recent == 'down') this.y += 10
        else if (time < 5 && recent == 'up') this.y -= 10
        else if (time > 5 && recent == 'up') this.y += 10
        else if (time > 5 && recent == 'down') this.y -= 10

        enemies.forEach(function(item, index, arr){
            if (time == 5 && touch(item) && item.state != 'dead') arr[index].state = 'dying'
        })

        if (time >= 10) {
            effects.stop(ah)
            clearInterval(sessionA)
            attackb = false
            main()
        } else if (collide()) {
            effects.stop(ah)
            clearInterval(sessionA)
            shrink()
        }
    }, 50)
}


function attackZ() {
    var time = 0
    r = 3
    mainTheme.mute(true)
    effects.stop(ah)
    pu = effects.play('push')
    var sessionAZ = setInterval(function() {
        pcolor = '#adedff'
        time++
        ctx.clearRect(0, 0, w, h)

        if (7 >= time) {
            r--
            cool += 2
        } else if (time >= 8 && time < 20 && time % 2 === 0) {
            r -= 3
            cool += 2
        } else if (time >= 8 && time < 20 && Math.abs(time % 2) == 1) {
            r += 3
            cool += 3
        } else if (20 <= time && time < 30) {
            enemies.forEach(function(item, index, arr){
                arr[index].state = 'push'
            })
            
            power--
            r += 10
            cool += 0.5
        }
        
        drawStage()

        drawChar()

        stateDefinition()

        ctx.beginPath()
        ctx.strokeStyle = pcolor
        ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w + r, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
        ctx.strokeStyle = 'black'

        drawHealth()

        drawPower()

        drawCool()

        drawScore()
        
        if (time >= 50) {
            clearInterval(sessionAZ)
            attackz = false
            main()
               
            enemies.forEach(function(item, index, arr){
                arr[index].state = 'alive'
            })

            cool += 1
        } else if (collide()) {
            clearInterval(sessionAZ)
            attackz = false
            shrink()

            enemies.forEach(function(item, index, arr){
                arr[index].state = 'alive'
            })
        }
    }, 50)

}

function regenerate(){
    if(cool == 50){
        justRegen = true
        mainTheme.mute(true)
        if(effects.playing(he) !== true) he = effects.play('heal')
        effects.volume(1.0, he)
        
        if(power <= 0){
            regeneration = false
            attackx = false
        }
        if(Otime % 3 === 0 && power > 0) power-=1
        if(health < 100) health++
        if(Otime % 2 === 0){
            this.w+=5
            this.h+=5
            this.x-=2
            this.y-=2
        } else {
            this.w-=4
            this.h-=4
            this.x+=2
            this.y+=2
        }
    } else {
        // cool+= 10
    }
}

// REQUIRED: enum.js game.js

class EnemyController {

    constructor(){
        this.instances = new Array()
        this.cool = 0
        this.speed

        this.maxInst
        this.spawnWait
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
        this.xdir = 0
        this.ydir = 0

        this.pushMag = 17
        this.speed = speed
        this.target //target needs a width, height, x, and y position
        this.distance

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
// Button Definitions
// let b_options = new Button('20px Comic Sans MS', 'OPTIONS', 0, 0, '#ffd6cc', 'black')

function menu() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    if (G.frame == 1) {
        // Initalize Controll
        I.addKeyListeners()
        I.addMouseListener()

        // Center Player
        P.x = x + menuSize/2
        P.y = y + menuSize/2
    }

    Stage.draw(G.w, G.h)
    P.title(x, y, menuSize, menuSize) // update

    Menu.drawBorder(x, y, x + menuSize, y + menuSize)

    P.draw()

    Menu.title.draw(x, y, menuSize, menuSize)       
    Menu.title.buttons.draw(x, y, menuSize, menuSize)

    if (Menu.title.buttons.start.check(I)) {
        Menu.difficulty.buttons.generate(x, y, menuSize, menuSize)
        if (G.getTutorial()) {
            window.requestAnimationFrame(diffSelect)
        } else {
            G.updateDifficulty(P, Enemies, 3)
            window.requestAnimationFrame(MenuTrans)
        }
        mainTheme.play()
        return // end loop
    }
    loop(menu)
}

function diffSelect() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    Stage.draw(G.w, G.h)
    P.title(x, y, menuSize, menuSize) // update

    Menu.drawBorder(x, y, x + menuSize, y + menuSize)

    P.draw()

    Menu.difficulty.draw(x, y, menuSize, menuSize)       
    Menu.difficulty.buttons.draw(x, y, menuSize, menuSize)

    if (Menu.difficulty.buttons.check(I)) {
        window.requestAnimationFrame(MenuTrans)
        return
    }

    loop(diffSelect)

}

let transTimer = 0
let transDuration = 100
// let transDuration = 460
function MenuTrans() {
    ++G.frame
    G.resizeWindow()
    transTimer += 1

    // Calculate Menu Window
    menuSize = 500
    let x1 = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y1 = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
    let progress = ((transDuration - transTimer)/transDuration)

    // Update
    P.shrink(0, 0, menuSize*progress, menuSize*progress) // update

    // Draw
    Stage.draw(G.w, G.h)
    Stage.HUD(G.w, G.h, P)

    let x2 = x1 + menuSize
    let y2 = y1 + menuSize
    Menu.drawBorder(x1*progress, y1*progress,         // x1 and y1
        x2 + (G.w - x2)*(1 - progress),   // x2
        y2 + (G.h - y2)*(1 - progress))   // y1

    P.draw()

    if (transTimer >= transDuration) {
        transTimer = 0
        if (G.getTutorial()) {
            window.requestAnimationFrame(main)
        } else {
            window.requestAnimationFrame(tutorial)
        }


        return
    }

    loop(MenuTrans)
}

let Menu = {
    drawBorder(x1, y1, x2, y2) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, G.w, y1) // top
        ctx.fillRect(0, 0, x1, G.h) // left

        ctx.fillRect(0, y2, G.w, G.h) // bottom
        ctx.fillRect(x2, 0, G.w, G.h) // right
    },

    title: {
        draw(x, y, w, h) { 
            ctx.fillStyle = 'black'
            ctx.font = '30px Comic Sans MS'

            let text = 'BLOB MOB'
            let xt= x + w/2 - (ctx.measureText('BLOB MOB').width/2)
            let yt= y + (h*1/8)

            ctx.fillText(text, xt, yt)

            ctx.fillStyle = '#ffd6cc'
            xt -= 3
            yt -= 3
            ctx.fillText(text, xt, yt)
        },

        buttons: {
            start: new Button('25px Comic Sans MS', 'START', '#ffd6cc', 'black'),

            draw(x, y, w, h) {
                this.start.adjust(x + w/2, y + h*6/8 + 30)
                this.start.draw()
            }
        }

    },

    difficulty: {
        draw(x, y, w, h) {
            ctx.fillStyle = 'black'
            ctx.font = '30px Comic Sans MS'

            let text = 'DIFFICULTY'
            let xt = x + w/2 - (ctx.measureText('BLOB MOB').width/2)
            let yt = y + (h*1/8)

            ctx.fillText(text, xt, yt)

            ctx.fillStyle = '#ffd6cc'
            xt -= 3
            yt -= 3
            ctx.fillText(text, xt, yt)

        },

        buttons: {
            diffs: new Array(),

            generate(x, y, w, h) {
                Object.keys(difficultyTable).forEach(diff => {
                    let b = new Button('25px Comic Sans MS', diff, 'black', '#ffd6cc')
                    this.diffs.push(b)
                })
            },


            draw(x, y, w, h) {
                text = '0'
                let dnum = Object.keys(difficultyTable).length // Number of difficulties
                let xgap = (w - dnum*ctx.measureText(text).width)/dnum

                let yt = y + h*6/8 + 30
                let xt = x 

                this.diffs.forEach(b => {
                    xt += xgap
                    b.adjust(xt, yt)
                    b.draw()
                })
            },

            check(m) {
                let d = null
                this.diffs.forEach(b => {
                    if (b.check(m)) {
                        d = parseInt(b.text, 10)
                    }
                })

                if (d != null) {
                    G.updateDifficulty(P, Enemies, d)
                    return true
                }
            }

        }
    }

    // checkButtons() {
    //     if (b_start.check(I)) {
    //         window.requestAnimationFrame(diffSelect);
    //         mainTheme.play()
    //         return true
    //     }
}

// function intro() {
//     ++G.frame
//     G.resizeWindow()

//     menuSize = 500
//     let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
//     let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
//     IntroText.draw(x, y, menuSize, menuSize)

//     loop(intro)
// }


// let IntroText = {
//     draw(x, y, w, h) {
//         ctx.fillStyle = '#ffd6cc'
//         ctx.fillRect(x, y, w, h)
//         ctx.font = '30px Arial Bold'
//         let tw = ctx.measureText('monke').width
//         ctx.fillStyle = 'black'
//         ctx.fillText('monke', x + w/2 - tw/2, y + h/2)

//     }
// }
// REQUIRES: player.js io.js
const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const I = new IO()
const P = new Player(250, 250, 250, 250)
const DP = new DPController()
const Enemies = new EnemyController()

function main() {
    ++G.frame

    // Update
    if (!G.paused) update()
    G.pause(I.keyState.pause)

    // Draw
    draw()

    // Debug
    // G.debug()

    if (P.state == en.state.dead) {
        window.requestAnimationFrame(GameoverTrans)
        mainTheme.stop()
        G.setHighscore()
        return
    }

    loop(main)
}

function update() {
    G.resizeWindow()
    if (P.state != en.state.dead) Enemies.spawner(G.w, G.h, P)
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    Enemies.controller()
}

function draw() {
    ctx.clearRect(0, 0, G.w, G.h)
    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    DP.controller()    

    Stage.HUD(G.w, G.h, P)
    if (G.paused) pauseMenu.draw(G.w, G.h)
}
class Tutorial {
    constructor() {
        this.timer = 0
        this.order = ['move', 'enemy', 'push', 'bars', 'goodLuck', 'end']
        this.i = 0
        this.check = false

        // Move
        this.controlCheck = [0, 0, 0, 0]
    }

    get step() {
        return this.order[this.i]
    }

    debug() {
        ctx.font = "20px Arial Bold"
        ctx.color = "black"

        let x = 40
        let y = G.h*6/8 + 100

        ctx.fillText("Stage: " + this.step, x, y)
        y += 20
        ctx.fillText("Timer: " + this.timer, x, y)

        switch (this.step) {
            case 'enemy':
                y += 30
                ctx.fillText(`Enemy State: ${Enemies.instances[0].state}`, x, y)
                // y += 20
                // ctx.fillText(`Enemy Coords: (${Math.round(this.enemy1.x)}, ${Math.round(this.enemy1.y)})`, x, y)
                break
            case 'push':
                break
            case 'bars':
                break
            case 'goodLuck':
                break
        }
    }

    controller(w, h, keys) {
        ++this.timer

        if (this.check) {
            this.i++
            this.check = false
        }

        switch (this.step) {
            case 'move':
                // if every move direction hit &&
                // if timer > 200
                if (keys.right) this.controlCheck[0] = 1
                if (keys.up) this.controlCheck[1] = 1
                if (keys.left) this.controlCheck[2] = 1
                if (keys.down) this.controlCheck[3] = 1

                if (!this.controlCheck.includes(0) && this.timer > 200) {
                    this.timer = 0
                    this.check = true
                }

                break
            case 'enemy':
                if (Enemies.instances.length == 0) {
                    Enemies.spawn(w, h, P)
                }

                if (G.score == 1) {
                    this.timer = 0
                    this.check = true
                    P.power = P.maxPower
                }
                break
            case 'push':
                if (Enemies.instances.length <= 5) {
                    Enemies.spawn(w, h, P)
                }
                if (P.action == en.act.push) {
                    this.timer = 0
                    this.check = true
                }
                break
            case 'bars':
                if (Enemies.instances.length == 0) {
                    this.timer = 0
                    this.check = true
                }
                break
            case 'goodLuck':
                if (this.timer > 300) {
                    this.check = true
                }
                break
        }
    }

    draw(w, h) {
        let x = 0
        let y = 0
        let text = ''
        ctx.font = "30px Comic Sans MS"
        switch (this.step) {
            case 'move':
                text = 'Use WASD or Arrow Keys to Move'
                x = w/2 - ctx.measureText(text).width/2
                y = h*2/8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
                break
            case 'enemy':
                text = 'This is an enemy! Use space to kill him'
                x = w/2 - ctx.measureText(text).width/2
                y = h*2/8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
                break
            case 'push':
                text = 'More Homies! Push em away with Q'
                x = w/2 - ctx.measureText(text).width/2
                y = h*2/8

        ctx.fillStyle = 'black'
        ctx.fillText(text, x, y)
                break
            case 'bars':
                ctx.lineWidth = 3

                // COOLDOWN

                // Arrow stem
                ctx.beginPath();
                ctx.moveTo(w*5/8 - 20, 145)
                ctx.lineTo(w*5/8, 80)
                ctx.stroke()
                ctx.closePath()

                // Arrow left tip
                ctx.beginPath();
                ctx.moveTo(w*5/8, 80)
                ctx.lineTo(w*5/8 - 10, 85)
                ctx.stroke()
                ctx.closePath()

                // Arrow right tip
                ctx.beginPath();
                ctx.moveTo(w*5/8, 80)
                ctx.lineTo(w*5/8 + 5, 89)
                ctx.stroke()
                ctx.closePath()

                // POWER

                // Arrow stem
                ctx.beginPath();
                ctx.moveTo(w*7/8 - 20, 145)
                ctx.lineTo(w*7/8, 80)
                ctx.stroke()
                ctx.closePath()

                // Arrow left tip
                ctx.beginPath();
                ctx.moveTo(w*7/8, 80)
                ctx.lineTo(w*7/8 - 10, 85)
                ctx.stroke()
                ctx.closePath()

                // Arrow right tip
                ctx.beginPath();
                ctx.moveTo(w*7/8, 80)
                ctx.lineTo(w*7/8 + 5, 89)
                ctx.stroke()
                ctx.closePath()

                ctx.fillStyle = 'black'
                ctx.font = "25px Comic Sans MS"

                text = 'Cooldown'
                x = w*5/8 - 20 - ctx.measureText(text).width/2
                y = 170
                ctx.fillText(text, x, y)

                text = 'Power'
                x = w*7/8 - 20 - ctx.measureText(text).width/2
                y = 170
                ctx.fillText(text, x, y)


                ctx.font = "30px Comic Sans MS"
                text = 'Attacks and specials have a Cooldown,'
                x = w/2 - ctx.measureText(text).width/2
                y = h*2/8
                ctx.fillText(text, x, y)

                ctx.font = "30px Comic Sans MS"
                text = 'specials require full Power'
                x = w/2 - ctx.measureText(text).width/2
                y += 34
                ctx.fillText(text, x, y)

                break
            case 'goodLuck':
                text = 'Kill as many Blobs as you can,'
                x = w/2 - ctx.measureText(text).width/2
                y = h*2/8
                ctx.fillStyle = 'black'
                ctx.fillText(text, x, y)

                text = 'Good luck!'
                x = w/2 - ctx.measureText(text).width/2
                y += 34
                ctx.fillText(text, x, y)
                break
        }
        
    }

}

let T = new Tutorial()

function tutorial() {
    ++G.frame
    G.resizeWindow()

    // Update
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    if (P.health <= 50) P.health = 50
    T.controller(G.w, G.h, I.keyState)
    Enemies.controller()

    // Draw
    ctx.clearRect(0, 0, G.w, G.h)
    Stage.draw(G.w, G.h)
    P.draw()
    Enemies.draw()
    DP.controller()    
    T.draw(G.w, G.h)

    if (T.step == 'bars' || T.step == 'goodLuck' || T.step == 'end')
        Stage.HUD(G.w, G.h, P)

    // Debug
    // T.debug()

    if (T.step == 'end') {
        G.reset(P, Enemies, DP)
        G.setTutorial()
        window.requestAnimationFrame(main)
        return
    }

    loop(tutorial)
}

let trans_gameover = {
    timer: 0,
    duration: 200,
}


function GameoverTrans() {
    ++G.frame
    G.resizeWindow()
    trans_gameover.timer += 1

    // let progress = ((gtransDuration - gtransTimer)/gtransDuration)

    // Draw
    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    Enemies.controller()

    if (trans_gameover.timer >= trans_gameover.duration) {
        trans_gameover.timer = 0
        window.requestAnimationFrame(Gameover);
        return
    }

    loop(GameoverTrans)
}

function Gameover() {
    ++G.frame
    G.resizeWindow()

    gameover.draw()
    gameover.buttons.draw(0, 0, G.w, G.h)

    if (gameover.buttons.restart.check(I)) {
        G.reset(P, Enemies, DP)
        P.x = G.w/2
        P.y = G.h/2

        window.requestAnimationFrame(main)
        if (!mainTheme.playing()) mainTheme.play()
        return
    }

    if (gameover.buttons.change_diff.check(I)) {
        G.reset(P, Enemies, DP)

        window.requestAnimationFrame(diffSelect)
        if (!mainTheme.playing()) mainTheme.play()
        return
    }

    loop(Gameover)
}

let gameover = {

    draw() {
        let text = ''
        let x = 0
        let y = 0
        ctx.fillStyle = 'red'

        ctx.font = '30px Comic Sans MS'

        text = 'GAMEOVER'
        x = G.w/2 - ctx.measureText(text).width/2
        y = G.h*3/8
        ctx.fillText(text, x, y)

        ctx.font = '25px Comic Sans MS'

        text = `Score is ${G.score}`
        x = G.w/2 - ctx.measureText(text).width/2
        y += 60
        ctx.fillText(text, x, y)

        text = `Highscore is ${G.highscore}`
        x = G.w/2 - ctx.measureText(text).width/2
        y += 40
        ctx.fillText(text, x, y)
    },

    buttons: {
        restart: new Button('25px Comic Sans MS', 'RESTART', 'red', 'black'),
        change_diff: new Button('25px Comic Sans MS', 'CHANGE DIFFICULTY', 'red', 'black'),

        draw(x, y, w, h) {
            let xt = w/2
            let yt = h*6/8
            this.restart.adjust(xt, yt)
            this.restart.draw()

            yt += 30
            this.change_diff.adjust(xt, yt)
            this.change_diff.draw()
        },
    }
}
menu()
