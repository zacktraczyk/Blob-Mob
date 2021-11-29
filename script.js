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
    }
}
const difficultyTable = {
    3: {
        player: {
            speed:      4,
            accel:      0.4,
            cool:       40,
            health:     500,
        },
        enemy: {
            speed:      1
        }
    },

    5: {
        player: {
            speed:      3,
            accel:      0.4,
            cool:       60,
            health:     300,
        },
        enemy: {
            speed:      2
        }
    },
}
// REQUIRES: difficulty.js
const background = new Image()
// background.src = 'http://www.photos-public-domain.com/wp-content/uploads/2011/02/crumpled-notebook-paper-texture.jpg'

class Game {

    constructor() {
        this.w = window.innerWidth
        this.h = window.innerHeight

        this.difficulty = 5 // 0 - 9

        this.score = 0
        this.highscore = localStorage.getItem("highscore")

        this.fps = 60
        this.frame = 0
        this.paused = false
        this.pauseKeyRelease = true
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
        console.log(player.maxSpeed)

        player.maxCool = pVals.cool
        player.maxHealth = pVals.health
        player.health = player.maxHealth

        // Enemy
        enemyController.speed = eVals.speed
    }

    get time() {
        return Math.floor(this.frame/this.fps * 100)/100
    }

    setHighScore() {
        if (this.highscore !== null) {
            if (this.score > this.highscore) {
                localStorage.setItem("highscore", this.score);
            }
        } else {
            this.highscore = 0;
            localStorage.setItem("highscore", this.score);
        }
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

}

function oldmenu() {
    G.setHighScore
    G.highscore = localStorage.getItem("highscore")
    titleTheme.play()
    var sessionME = setInterval(function() {
        ctx.clearRect(0, 0, w, h)
        
        let grd = ctx.createLinearGradient(0, 0, w, 0)
        grd.addColorStop(0, '#ffd6cc')
        grd.addColorStop(0.8, 'grey')
        grd.addColorStop(1, '#fffbf9')
        ctx.fillStyle = '#fffbf9'
        ctx.fillRect(0, 0, w, h)
        drawChar()
        ctx.fillStyle = grd
        ctx.font = '80px Arial Bold'
        ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100)
        ctx.font = '30px Arial Bold'
        ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400)
        var grd1 = ctx.createLinearGradient(0, 0, w*3, 0)
        grd1.addColorStop(0, 'grey')
        grd1.addColorStop(1, 'white')
        ctx.fillStyle = grd1
        ctx.font = '15px sans-serif'
        var bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
        ctx.fillText(bottommenu, w / 2 - (ctx.measureText(bottommenu).width/2), h - 10)
        ctx.fillRect(10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
        ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
        
        if(pause === false){
            sx = mxrandom(sx)
            sy = myrandom(sy)
            wx = srandom(wx)
            wy = srandom(wy)
        }
        
        pauseMenu()
        
        listen()

        if(HowTo) HowToPlay()

        canvas.addEventListener("mousedown", getPosition, false)
        //Start Click Area --> ctx.strokeRect(w / 2 - 40, 380, 80, 40)
        //Howto Click Area --> ctx.strokeRect(w / 2 - (ctx.measureText(bottommenu).width/4), h-30, (ctx.measureText(bottommenu).width/2), 30)
        //About Click Area --> ctx.strokeRect(w / 2 - (ctx.measureText(bottommenu).width/2) - 5, h - 30, 60, 30)
        
        if (x >= w / 2 - (ctx.measureText(bottommenu).width/2) - 5 && x <= w / 2 - (ctx.measureText(bottommenu).width/2) + 55 && y >= h - 30 && y <= h && pause === false){
            clearInterval(sessionME)
            canvas.removeEventListener("mousedown", getPosition, false)
            window.location.href = '/about.html'
        }
        
        if (x >= w / 2 - 40 && x <= w / 2 + 40 && y >= 380 && y <= 420 && pause === false) {
            clearInterval(sessionME)
            transition()
            canvas.removeEventListener("mousedown", getPosition, false)
        } else if(x >= w / 2 - (ctx.measureText(bottommenu).width/4) && x <= w / 2 + (ctx.measureText(bottommenu).width/4) && y >= h - 30 && y <= h && HowTo === false && pause === false){
            effects.play('btn')
            HowTo = true
            x = 0
            y = 0
        } else if((x >= w / 2 - (ctx.measureText(bottommenu).width/4) && x <= w / 2 + (ctx.measureText(bottommenu).width/4) && y >= h - 30 && y <= h && HowTo) || (x >= w - 35 - ctx.measureText("X").width && x <=  h - 30 && y >= 30 && y <= 60) && pause === false){
            effects.play('btn')
            HowTo = false
            x = 0
            y = 0
        }
        document.body.style.backgroundColor = '#fffbf9'
    }, 50)
}

function HowToPlay(){
    ctx.fillStyle = '#ffd6cc'
    ctx.fillRect(30,30,w - 60, h - 60)
    ctx.fillStyle = 'black'
    ctx.font = '20px monospace'
    ctx.fillText("X",w - 35 - ctx.measureText("X").width, 50)
    var grd = ctx.createLinearGradient(0, 0, w, 0)
    grd.addColorStop(0, '#ffd6cc')
    grd.addColorStop(0.5, 'grey')
    grd.addColorStop(1, '#fffbf9')
    ctx.fillStyle = grd
    ctx.font = '50px Arial Bold'
    ctx.fillText("HOW TO PLAY", w / 2 - (ctx.measureText("HOW TO PLAY").width/2), 80)
    ctx.fillStyle = 'grey'
    ctx.font = '15px monospace'
    var instruction1 = "Use the Arrow keys to move,"
    var instruction2 = "And press Space to attack."
    var instruction3 = "You can only attack if your blue bar is full!"
    var instruction4 = "Try to attack the enemies"
    var instruction5 = "But use Z, your powerup, if you are swarmed."
    var instruction6 = "You can also hold X to regenerate health."
    var instruction7 = "Just remember, powerups and regeneration use power!"
    var instruction8 = "Press M to mute and P to pause"
    ctx.fillText(instruction1, w / 2 - (ctx.measureText(instruction1).width/2), 122)
    ctx.fillText(instruction2, w / 2 - (ctx.measureText(instruction2).width/2), 154)
    ctx.fillText(instruction3, w / 2 - (ctx.measureText(instruction3).width/2), 186)
    ctx.fillText(instruction4, w / 2 - (ctx.measureText(instruction4).width/2), 218)
    ctx.fillText(instruction5, w / 2 - (ctx.measureText(instruction5).width/2), 250)
    ctx.fillText(instruction6, w / 2 - (ctx.measureText(instruction6).width/2), 282)
    ctx.fillText(instruction7, w / 2 - (ctx.measureText(instruction7).width/2), 314)
    ctx.fillStyle = 'red'
    ctx.fillText(instruction8, w / 2 -40, 463)

    var esx = 380
    var esy = 390
    var ewx = 20
    var ewy = 40

    ctx.lineWidth = 1

    randNum = Math.round(Math.random() * 2)
    var erandomColor = ecolors[randNum]
    ctx.fillStyle = erandomColor

    ctx.beginPath()

    ctx.moveTo(esx - esx / 20, esy)
    ctx.bezierCurveTo(esx - esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy)

    ctx.bezierCurveTo(esx + ewx + esx / 10, esy, esx + ewx + esx / 10, esy + ewy, esx + ewx, esy + ewy)

    ctx.bezierCurveTo(esx + ewx / 10, esy + esy / 4, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy + ewy / 2)

    ctx.bezierCurveTo(esx - esx / 20, esy + ewy / 2, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

    ctx.lineWidth = 1

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(esx + ewx / 6, esy + ewy / 6, (ewx / 4 + ewy / 4) / 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(esx + ewx - ewx / 8, esy + ewy / 6, (ewx / 4 + ewy / 4) / 6, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(esx + ewx / 8, esy + ewy - ewy / 3)
    ctx.bezierCurveTo(esx + ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy - ewy / 3)
    ctx.stroke()
    ctx.closePath()

    ctx.font = '15px monospace'

    ctx.fillText("ENEMY", 390 - (ctx.measureText("ENEMY").width/2), 360)

    ctx.fillStyle = 'black'
    ctx.fillRect(w / 2 - 115 / 2 + 5, 395, 115, 20)
    ctx.fillStyle = 'blue'
    ctx.fillRect(w / 2 + 0.5 - 115 / 2 + 5, 396, 113 - (0 / 50) * 113, 18)

    ctx.fillStyle = 'black'
    ctx.fillText("COOL-DOWN BAR", w/2 - (ctx.measureText("COOL-DOWN BAR").width/2)+ 5, 360)

    ctx.fillStyle = 'black'
    ctx.fillRect((w-60) * (1 / 3)-90, 395, 115, 20)
    ctx.fillStyle = '#33cc33'
    ctx.font = "10px monospace"
    ctx.fillText(20 + "/50", (w-60) * (1 / 3)-90 + 52, 409)
    ctx.fillRect((w-60) * (1 / 3)-90 + 1, 396, (20 / 50) * 113, 18)

    ctx.font = '15px monospace'
    ctx.fillStyle = 'black'

    ctx.fillText("POWER", 90, 360)
}

function transition() {
    var gw = 0
    var time = 0
    titleTheme.fade(1.0, 0.0, 7000)
    titleTheme.on('fade', function(){
        titleTheme.stop()
    })
    var sessionT = setInterval(function() {
        time++
        ctx.clearRect(0, 0, w, h)
        var grd = ctx.createLinearGradient(0, 0, w - gw, 0)
        grd.addColorStop(0, '#ffd6cc')
        grd.addColorStop(0.8, 'grey')
        grd.addColorStop(1, '#fffbf9')
        ctx.fillStyle = '#fffbf9'
        ctx.fillRect(0, 0, w, h)
        drawChar()
        ctx.fillStyle = grd
        ctx.font = '80px Arial Bold'
        ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100)
        ctx.font = '30px Arial Bold'
        ctx.fillStyle = grd
        ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400)
        var grd1 = ctx.createLinearGradient(0, 0, w*3 - gw*3, 0)
        grd1.addColorStop(0, 'grey')
        grd1.addColorStop(1, 'white')
        ctx.fillStyle = grd1
        ctx.font = '15px sans-serif'
        var bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
        ctx.fillText(bottommenu, w / 2 - (ctx.measureText(bottommenu).width/2), h - 10)
        ctx.fillRect(10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
        ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
        if (time < 40) {
            titleTheme.rate(1.5)
            if (time % 2 === 0) {
                wx -= 4
                wy -= 4
                sx += 2
                sy += 2
            } else if (Math.abs(time % 2) == 1) {
                wx += 4
                wy += 4
                sx -= 2
                sy -= 2
            }
        } else if (time >= 40) {
            titleTheme.rate(0.75)
            if (gw <= w - 50) gw += 25
            sx += 2
            sy += 2
            sx = srandom(sx)
            sy = srandom(sy)
            wx -= 4
            wy -= 4
        }
        if (wx <= 50 || wy <= 10) {
            mainTheme.play()
            background.src = 'http://www.photos-public-domain.com/wp-content/uploads/2011/02/crumpled-notebook-paper-texture.jpg'
            ctx.drawImage(background, 0, 0, w, h)
            clearInterval(sessionT)
            main()
        }
    }, 50)
}
function shrink() {
    var shrinksx = sx
    var shrinksy = sy
    var shrinkwx = wx
    var shrinkwy = wy
    var sessionS = setInterval(function() {
        de = effects.play('death')
        ctx.clearRect(0, 0, w, h)
        drawStage()
        shrinksx += 4
        shrinksy += 4
        shrinkwx -= 8
        shrinkwy -= 8
        ctx.fillStyle = pcolor
        ctx.fillRect(shrinksx, shrinksy, shrinkwx, shrinkwy)
        stateDefinition()
        drawHealth()
        drawPower()
        drawCool()
        drawScore()
        if (shrinkwx <= 0 || shrinkwy <= 0 || shrinksx > w || shrinksy > h) {
            clearInterval(sessionS)
            end()
        }

    }, 150)
}

function end() {
    var gx = -w
    var gx2 = -0.5*w
    effects.stop(ah)
    mainTheme.stop()
    endTheme.play()
    var sessionE = setInterval(function() {
        if (gx !== 0) gx += 4
        if (gx2 !== 0 + 200) gx2 += 14
        setHighScore()
        pcolor = '#ffd6cc'
        ctx.clearRect(0, 0, w, 0)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, h, w)
        var grd = ctx.createLinearGradient(0, 0, w + gx, 0)
        grd.addColorStop(0, pcolor)
        grd.addColorStop(1, 'black')
        ctx.font = '70px Comic Sans MS'
        ctx.fillStyle = grd
        ctx.fillText("GAME OVER", w / 2 - (ctx.measureText("GAME OVER").width/2), h / 2 - 5)
        ctx.font = '12px monospace'
        if(highscore < score){
            ctx.fillText("The high score was " + highscore, w / 2 - (ctx.measureText("The high score was " + highscore).width/2), h * 8.5 / 16)
            ctx.fillText("Your score is " + score, w / 2 - (ctx.measureText("Your score is " + score).width/2), h * 9 / 16)
        }
        else {
            ctx.fillText("The high score is " + highscore, w / 2 - (ctx.measureText("The high score is " + highscore).width/2), h * 8.5 / 16)
            ctx.fillText("Your score was " + score, w / 2 - (ctx.measureText("Your score was " + score).width/2), h * 9 / 16)
        }
        ctx.font = '20px monospace'
        var grd2 = ctx.createLinearGradient(0, 0, w + gx2, 0)
        grd2.addColorStop(0, pcolor)
        grd2.addColorStop(1, 'black')
        ctx.fillStyle = grd2
        ctx.fillText("TITLE >>",w - (ctx.measureText("TITLE >>").width), h - 10)
        canvas.addEventListener("mousedown", getPosition, false)
        if (x >= w - (ctx.measureText("TITLE >>").width)-10 && x <= w && y >= h - 20 && y <= h) {
            clearInterval(sessionE)
            location.reload()
        }
    }, 50)
}
class Button {

    constructor(x, y, w, h, click){
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.click = trigger
    }

    check(m) {
        if (m.x > this.x && m.x < this.x + this.w &&
            m.y > this.y && m.y < this.y + this.h) {
            this.click
        }
    }

}

let Menu = {
    draw(x, y, w, h) {
        ctx.lineWidth = 10
        ctx.strokeRect(x, y, w, h)
        ctx.fillStyle = '#fffbf9'
        ctx.fillRect(x, y, w, h)
        ctx.fillStyle = '#ffd6cc'
        ctx.font = '80px Arial Bold'
        ctx.fillText("BLOB MOB",
            x + w/2 - (ctx.measureText("BLOB MOB").width/2),
            y + (h*1/8))

        ctx.font = '30px Arial Bold'
        ctx.fillText("START",
            x + w/2 - (ctx.measureText("START").width/2),
            y + (h*7/8))
        // ctx.fillStyle = '#ffd6cc'
        // ctx.font = '15px sans-serif'
        // const bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
        // ctx.fillText(bottommenu,
        //     w / 2 - (ctx.measureText(bottommenu).width/2),
        //     h - 10)
        // ctx.fillRect(10,
        //     h - 13,
        //     w / 2 - (ctx.measureText(bottommenu).width/2) - 10,
        //     1)
        // ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10,
        //     h - 13,
        //     w / 2 - (ctx.measureText(bottommenu).width/2) - 10,
        //     1)
    },



}

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
        // ctx.font = "10px monospace"
        // ctx.fillText(player.health + "/100", w / 2 + 100, 23)
        ctx.fillRect(w / 2 + 1, 11, Math.max(0, (player.health / player.maxHealth) * (w/2 - 10) - 2), 18)

        // Power
        ctx.fillStyle = 'black'
        ctx.fillRect(w*3/4 + 5, 40, w/4 - 15, 20)
        ctx.fillStyle = '#33cc33'
        // ctx.font = "10px monospace"
        // ctx.fillText(player.power + "/50", w - w/4 + 52, 53)
        ctx.fillRect(w*3/4 + 6, 41, (player.power / 50) * (w/4 - 15) - 2, 18)

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
// REQUIRES: enum.js

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
// Normalize a vector

class DPController {
    constructor() {
        this.interval = 50
        this.maxPoints = 15
        this.instances = new Array()
    }

    spawn(player) {
        let dp = new DamagePoint(player)
        this.instances.push(dp)
    }

    controller(){
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
        // Spawn
        this.x = player.x + player.w/2 + (Math.random() - 0.5)*player.w/2
        this.y = player.y + player.h/2 + (Math.random() - 0.5)*player.h/2
        this.life = 100
    }

    draw() {
        console.log(this.x + ", " + this.y)
        --this.life
        ctx.font = '70px Comic Sans MS'
        ctx.fillStyle = '#000000' //Set to #ffd6cc
        ctx.fillRect(0, 0, 100, 100)
        // ctx.fillText("GAME OVER", this.x, this.y)
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
        this.power = 50
        this.maxHealth = 500
        this.health = this.maxHealth

        this.action = en.act.norm
        this.pushRadius = 140
        this.timer = 0
        this.state = en.state.norm
    }

    title(x, y, w, h) {
        this.wiggle(230, 280)

        this.x = clamp(this.x, x + 10, x + w - this.w - 10) 
        this.y = clamp(this.y, y + 10, y + h - this.h - 10) 
    }

    draw() {
        //Draws body
        ctx.fillStyle = this.color //Set to #ffd6cc
        ctx.fillRect(this.x, this.y, this.w, this.h)

        ctx.lineWidth = 1

        //Draws Left Eye
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.arc(this.x + this.w / 6, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 4, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        //Draws Right Eye
        ctx.beginPath()
        ctx.arc(this.x + this.w - this.w / 8, this.y + this.h / 6, (this.w / 4 + this.h / 4) / 6, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        //Draws Mouth
        ctx.beginPath()
        ctx.moveTo(this.x + this.w / 8, this.y + this.h - this.h / 3)
        ctx.bezierCurveTo(this.x + this.h / 8, this.y + this.h, this.x + this.w - this.h / 8, this.y + this.h, this.x + this.w - this.h / 8, this.y + this.h - this.h / 3)
        ctx.stroke()
        ctx.closePath()

        if (this.act == en.act.push) {
            ctx.beginPath()
            ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.pushRadius, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.closePath()
        }
    }

    controller(w, h, keys, enemies, damagePoints) {

        // Dead?
        if (this.state == en.state.dead) {
            this.death()
            return
        }

        // Trigger Attack
        if (this.cool <= 0) {
            if (keys.attack) this.action = en.act.attack
        }

        // Action Controller
        switch (this.action) {
            case en.act.attack:
                this.color = '#adedff'
                this.attack(20, enemies)
                return
            case en.act.norm:
                this.move(w, h, keys)
                break
            // case en.act.push:
            //     break
            // case en.act.regen:
            //     break
        }

        // Update Position
        this.x += this.xvel
        this.y += this.yvel

        // Cooldown
        if (this.cool > 0) {
            --this.cool;
            this.color = '#adedff'
        } else {
            this.color = '#ffd6cc'
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
        if (this.x > w && this.xvel > 0) this.x = -this.w - 5
        else if (this.x + this.w < 0 && this.xvel < 0) this.x = w + 5

        if (this.y > h && this.yvel > 0) this.y = -5
        else if (this.y + this.h < 0 && this.yvel < 0) this.y = h + 5

        return 1
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
            this.x += this.xdir*5
            this.y += this.ydir*5
        }
        if (this.timer > duration/2) {
            this.x -= this.xdir*5
            this.y -= this.ydir*5
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

        if (this.timer >= duration) {
            this.xvel = 0
            this.yvel = 0
            this.timer = 0
            this.action = en.act.norm
        }
    }

    death() {
    }

    collides(target) {
        if (target == null)
            return false

        if (this.x < target.x + target.w &&
            this.x + this.w > target.x &&
            this.y < target.y + target.h &&
            this.h + this.y > target.y)
            return true

        return false
    }

    wiggle(min, max) {
        // if (frameNumber % 20 == 0) {
            let rand = Math.random() > 0.5 ? 1 : -1;
            this.x = this.x + rand

            rand = Math.random() > 0.5 ? 1 : -1;
            this.y = this.y + rand

            rand = Math.random() > 0.5 ? 1 : -1;
            this.w = clamp(this.w + rand, min, max)

            rand = Math.random() > 0.5 ? 1 : -1;
            this.h = clamp(this.h + rand, min, max)
        // }
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
    }

    spawner(w, h, p) {
        // if (Enemies.instances.length < 1) {
        //     let e = new Enemy(this.speed)
        //     e.spawn(w, h, p)
        //     this.instances.push(e)
        //     this.cool = 50
        // }
        if (this.cool > 0) --this.cool
        if (G.time % 1.00 && Enemies.instances.length < 30 && this.cool <= 0) {
            let e = new Enemy(this.speed)
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
        if (this.target != null && this.state == en.state.norm) {
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

    push(player) {
        let xdiff = this.x - player.x
        let ydiff = this.y - player.y
        let distance = Math.sqrt(xdiff*xdiff + ydiff*ydiff)
        if (distance < player.pushRadius) {
            // Normalize push vector
            let xdir = xdiff/distance
            let ydir = ydiff/distance

            this.x += 6*xdir
            this.y += 6*ydir

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

function menu() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    if (G.frame == 1) {
        // let b_start = new Button(x + G.w/2, y,
        // Initalize Controll
        I.addKeyListeners()
        I.addMouseListener()

        // Center Player
        P.x = x + menuSize/2 - P.w/2
        P.y = y + menuSize/2 - P.h/2
    }

    // Check Start Click
    if (I.xmouse > 500) {
        window.requestAnimationFrame(main);
        G.updateDifficulty(P, Enemies, 3)
        return
    }

    P.title(x, y, menuSize, menuSize) // update

    Menu.draw(x, y, menuSize, menuSize)       
    P.draw()

    // BUTTON BORDER
    // ctx.strokeStyle = 'black'
    // ctx.strokeRect(x + menuSize/2, y + menuSize/2, 50, 50)

    setTimeout(() => {
        window.requestAnimationFrame(menu);
    }, 1000 / G.fps);
}

// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const I = new IO()
const P = new Player(250, 250, 250, 250)
const DP = new DPController()
const Enemies = new EnemyController()

function main() {
    if (G.frame == 0) Stage.init
    ++G.frame

    if (!G.paused) update()
    draw()

    G.pause(I.keyState.pause)

    setTimeout(() => {
        window.requestAnimationFrame(main);
    }, 1000 / G.fps);
}
function update() {
    Enemies.spawner(G.w, G.h, P)
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    // DP.controller()    
    Enemies.controller()
}

function draw() {
    G.resizeWindow()
    ctx.clearRect(0, 0, G.w, G.h)

    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()

    if (G.paused) pauseMenu.draw(G.w, G.h)

    Stage.HUD(G.w, G.h, P)

}
