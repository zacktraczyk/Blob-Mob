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
        // if (window.innerWidth != this.w && window.innerHeight != this.h) {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            let xchange = innerWidth - this.w
            let ychange = innerHeight - this.h
            this.w = innerWidth
            this.h = innerHeight

            if (b_start != null) b_start.update(xchange, ychange)
            if (b_options != null) b_options.update(xchange, ychange)
        // }
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
        enemyController.spawnRate = eVals.spawnRate
    }

    get time() {
        return Math.floor(this.frame/this.fps * 100)/100
    }

    setHighscore() {
        if (this.score > this.highscore)
            console.log("new highscore")
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
        ctx.fillText("Spawn Rate: " + eVals.spawnRate + "s", x, y)
        y += 20
        ctx.fillText("Max Number: " + eVals.maxInst, x, y)
        y += 40
        if (Enemies != null) ctx.fillText("Blobs: " + Enemies.instances.length, x, y)

    }

}

//function oldmenu() {
//    G.setHighScore
//    G.highscore = localStorage.getItem("highscore")
//    titleTheme.play()
//    var sessionME = setInterval(function() {
//        ctx.clearRect(0, 0, w, h)
        
//        let grd = ctx.createLinearGradient(0, 0, w, 0)
//        grd.addColorStop(0, '#ffd6cc')
//        grd.addColorStop(0.8, 'grey')
//        grd.addColorStop(1, '#fffbf9')
//        ctx.fillStyle = '#fffbf9'
//        ctx.fillRect(0, 0, w, h)
//        drawChar()
//        ctx.fillStyle = grd
//        ctx.font = '80px Arial Bold'
//        ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100)
//        ctx.font = '30px Arial Bold'
//        ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400)
//        var grd1 = ctx.createLinearGradient(0, 0, w*3, 0)
//        grd1.addColorStop(0, 'grey')
//        grd1.addColorStop(1, 'white')
//        ctx.fillStyle = grd1
//        ctx.font = '15px sans-serif'
//        var bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
//        ctx.fillText(bottommenu, w / 2 - (ctx.measureText(bottommenu).width/2), h - 10)
//        ctx.fillRect(10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
//        ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
        
//        if(pause === false){
//            sx = mxrandom(sx)
//            sy = myrandom(sy)
//            wx = srandom(wx)
//            wy = srandom(wy)
//        }
        
//        pauseMenu()
        
//        listen()

//        if(HowTo) HowToPlay()

//        canvas.addEventListener("mousedown", getPosition, false)
//        //Start Click Area --> ctx.strokeRect(w / 2 - 40, 380, 80, 40)
//        //Howto Click Area --> ctx.strokeRect(w / 2 - (ctx.measureText(bottommenu).width/4), h-30, (ctx.measureText(bottommenu).width/2), 30)
//        //About Click Area --> ctx.strokeRect(w / 2 - (ctx.measureText(bottommenu).width/2) - 5, h - 30, 60, 30)
        
//        if (x >= w / 2 - (ctx.measureText(bottommenu).width/2) - 5 && x <= w / 2 - (ctx.measureText(bottommenu).width/2) + 55 && y >= h - 30 && y <= h && pause === false){
//            clearInterval(sessionME)
//            canvas.removeEventListener("mousedown", getPosition, false)
//            window.location.href = '/about.html'
//        }
        
//        if (x >= w / 2 - 40 && x <= w / 2 + 40 && y >= 380 && y <= 420 && pause === false) {
//            clearInterval(sessionME)
//            transition()
//            canvas.removeEventListener("mousedown", getPosition, false)
//        } else if(x >= w / 2 - (ctx.measureText(bottommenu).width/4) && x <= w / 2 + (ctx.measureText(bottommenu).width/4) && y >= h - 30 && y <= h && HowTo === false && pause === false){
//            effects.play('btn')
//            HowTo = true
//            x = 0
//            y = 0
//        } else if((x >= w / 2 - (ctx.measureText(bottommenu).width/4) && x <= w / 2 + (ctx.measureText(bottommenu).width/4) && y >= h - 30 && y <= h && HowTo) || (x >= w - 35 - ctx.measureText("X").width && x <=  h - 30 && y >= 30 && y <= 60) && pause === false){
//            effects.play('btn')
//            HowTo = false
//            x = 0
//            y = 0
//        }
//        document.body.style.backgroundColor = '#fffbf9'
//    }, 50)
//}

//function HowToPlay(){
//    ctx.fillStyle = '#ffd6cc'
//    ctx.fillRect(30,30,w - 60, h - 60)
//    ctx.fillStyle = 'black'
//    ctx.font = '20px monospace'
//    ctx.fillText("X",w - 35 - ctx.measureText("X").width, 50)
//    var grd = ctx.createLinearGradient(0, 0, w, 0)
//    grd.addColorStop(0, '#ffd6cc')
//    grd.addColorStop(0.5, 'grey')
//    grd.addColorStop(1, '#fffbf9')
//    ctx.fillStyle = grd
//    ctx.font = '50px Arial Bold'
//    ctx.fillText("HOW TO PLAY", w / 2 - (ctx.measureText("HOW TO PLAY").width/2), 80)
//    ctx.fillStyle = 'grey'
//    ctx.font = '15px monospace'
//    var instruction1 = "Use the Arrow keys to move,"
//    var instruction2 = "And press Space to attack."
//    var instruction3 = "You can only attack if your blue bar is full!"
//    var instruction4 = "Try to attack the enemies"
//    var instruction5 = "But use Z, your powerup, if you are swarmed."
//    var instruction6 = "You can also hold X to regenerate health."
//    var instruction7 = "Just remember, powerups and regeneration use power!"
//    var instruction8 = "Press M to mute and P to pause"
//    ctx.fillText(instruction1, w / 2 - (ctx.measureText(instruction1).width/2), 122)
//    ctx.fillText(instruction2, w / 2 - (ctx.measureText(instruction2).width/2), 154)
//    ctx.fillText(instruction3, w / 2 - (ctx.measureText(instruction3).width/2), 186)
//    ctx.fillText(instruction4, w / 2 - (ctx.measureText(instruction4).width/2), 218)
//    ctx.fillText(instruction5, w / 2 - (ctx.measureText(instruction5).width/2), 250)
//    ctx.fillText(instruction6, w / 2 - (ctx.measureText(instruction6).width/2), 282)
//    ctx.fillText(instruction7, w / 2 - (ctx.measureText(instruction7).width/2), 314)
//    ctx.fillStyle = 'red'
//    ctx.fillText(instruction8, w / 2 -40, 463)

//    var esx = 380
//    var esy = 390
//    var ewx = 20
//    var ewy = 40

//    ctx.lineWidth = 1

//    randNum = Math.round(Math.random() * 2)
//    var erandomColor = ecolors[randNum]
//    ctx.fillStyle = erandomColor

//    ctx.beginPath()

//    ctx.moveTo(esx - esx / 20, esy)
//    ctx.bezierCurveTo(esx - esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy)

//    ctx.bezierCurveTo(esx + ewx + esx / 10, esy, esx + ewx + esx / 10, esy + ewy, esx + ewx, esy + ewy)

//    ctx.bezierCurveTo(esx + ewx / 10, esy + esy / 4, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy + ewy / 2)

//    ctx.bezierCurveTo(esx - esx / 20, esy + ewy / 2, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy)
//    ctx.fill()
//    ctx.stroke()
//    ctx.closePath()

//    ctx.lineWidth = 1

//    ctx.beginPath()
//    ctx.fillStyle = 'black'
//    ctx.arc(esx + ewx / 6, esy + ewy / 6, (ewx / 4 + ewy / 4) / 4, 0, 2 * Math.PI)
//    ctx.stroke()
//    ctx.closePath()

//    ctx.beginPath()
//    ctx.arc(esx + ewx - ewx / 8, esy + ewy / 6, (ewx / 4 + ewy / 4) / 6, 0, 2 * Math.PI)
//    ctx.stroke()
//    ctx.closePath()

//    ctx.beginPath()
//    ctx.moveTo(esx + ewx / 8, esy + ewy - ewy / 3)
//    ctx.bezierCurveTo(esx + ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy - ewy / 3)
//    ctx.stroke()
//    ctx.closePath()

//    ctx.font = '15px monospace'

//    ctx.fillText("ENEMY", 390 - (ctx.measureText("ENEMY").width/2), 360)

//    ctx.fillStyle = 'black'
//    ctx.fillRect(w / 2 - 115 / 2 + 5, 395, 115, 20)
//    ctx.fillStyle = 'blue'
//    ctx.fillRect(w / 2 + 0.5 - 115 / 2 + 5, 396, 113 - (0 / 50) * 113, 18)

//    ctx.fillStyle = 'black'
//    ctx.fillText("COOL-DOWN BAR", w/2 - (ctx.measureText("COOL-DOWN BAR").width/2)+ 5, 360)

//    ctx.fillStyle = 'black'
//    ctx.fillRect((w-60) * (1 / 3)-90, 395, 115, 20)
//    ctx.fillStyle = '#33cc33'
//    ctx.font = "10px monospace"
//    ctx.fillText(20 + "/50", (w-60) * (1 / 3)-90 + 52, 409)
//    ctx.fillRect((w-60) * (1 / 3)-90 + 1, 396, (20 / 50) * 113, 18)

//    ctx.font = '15px monospace'
//    ctx.fillStyle = 'black'

//    ctx.fillText("POWER", 90, 360)
//}

//function transition() {
//    var gw = 0
//    var time = 0
//    titleTheme.fade(1.0, 0.0, 7000)
//    titleTheme.on('fade', function(){
//        titleTheme.stop()
//    })
//    var sessionT = setInterval(function() {
//        time++
//        ctx.clearRect(0, 0, w, h)
//        var grd = ctx.createLinearGradient(0, 0, w - gw, 0)
//        grd.addColorStop(0, '#ffd6cc')
//        grd.addColorStop(0.8, 'grey')
//        grd.addColorStop(1, '#fffbf9')
//        ctx.fillStyle = '#fffbf9'
//        ctx.fillRect(0, 0, w, h)
//        drawChar()
//        ctx.fillStyle = grd
//        ctx.font = '80px Arial Bold'
//        ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100)
//        ctx.font = '30px Arial Bold'
//        ctx.fillStyle = grd
//        ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400)
//        var grd1 = ctx.createLinearGradient(0, 0, w*3 - gw*3, 0)
//        grd1.addColorStop(0, 'grey')
//        grd1.addColorStop(1, 'white')
//        ctx.fillStyle = grd1
//        ctx.font = '15px sans-serif'
//        var bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
//        ctx.fillText(bottommenu, w / 2 - (ctx.measureText(bottommenu).width/2), h - 10)
//        ctx.fillRect(10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
//        ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10, h - 13, w / 2 - (ctx.measureText(bottommenu).width/2) - 10, 1)
//        if (time < 40) {
//            titleTheme.rate(1.5)
//            if (time % 2 === 0) {
//                wx -= 4
//                wy -= 4
//                sx += 2
//                sy += 2
//            } else if (Math.abs(time % 2) == 1) {
//                wx += 4
//                wy += 4
//                sx -= 2
//                sy -= 2
//            }
//        } else if (time >= 40) {
//            titleTheme.rate(0.75)
//            if (gw <= w - 50) gw += 25
//            sx += 2
//            sy += 2
//            sx = srandom(sx)
//            sy = srandom(sy)
//            wx -= 4
//            wy -= 4
//        }
//        if (wx <= 50 || wy <= 10) {
//            mainTheme.play()
//            background.src = 'http://www.photos-public-domain.com/wp-content/uploads/2011/02/crumpled-notebook-paper-texture.jpg'
//            ctx.drawImage(background, 0, 0, w, h)
//            clearInterval(sessionT)
//            main()
//        }
//    }, 50)
//}
//function shrink() {
//    var shrinksx = sx
//    var shrinksy = sy
//    var shrinkwx = wx
//    var shrinkwy = wy
//    var sessionS = setInterval(function() {
//        de = effects.play('death')
//        ctx.clearRect(0, 0, w, h)
//        drawStage()
//        shrinksx += 4
//        shrinksy += 4
//        shrinkwx -= 8
//        shrinkwy -= 8
//        ctx.fillStyle = pcolor
//        ctx.fillRect(shrinksx, shrinksy, shrinkwx, shrinkwy)
//        stateDefinition()
//        drawHealth()
//        drawPower()
//        drawCool()
//        drawScore()
//        if (shrinkwx <= 0 || shrinkwy <= 0 || shrinksx > w || shrinksy > h) {
//            clearInterval(sessionS)
//            end()
//        }

//    }, 150)
//}

//function end() {
//    var gx = -w
//    var gx2 = -0.5*w
//    effects.stop(ah)
//    mainTheme.stop()
//    endTheme.play()
//    var sessionE = setInterval(function() {
//        if (gx !== 0) gx += 4
//        if (gx2 !== 0 + 200) gx2 += 14
//        setHighScore()
//        pcolor = '#ffd6cc'
//        ctx.clearRect(0, 0, w, 0)
//        ctx.fillStyle = 'black'
//        ctx.fillRect(0, 0, h, w)
//        var grd = ctx.createLinearGradient(0, 0, w + gx, 0)
//        grd.addColorStop(0, pcolor)
//        grd.addColorStop(1, 'black')
//        ctx.font = '70px Comic Sans MS'
//        ctx.fillStyle = grd
//        ctx.fillText("GAME OVER", w / 2 - (ctx.measureText("GAME OVER").width/2), h / 2 - 5)
//        ctx.font = '12px monospace'
//        if(highscore < score){
//            ctx.fillText("The high score was " + highscore, w / 2 - (ctx.measureText("The high score was " + highscore).width/2), h * 8.5 / 16)
//            ctx.fillText("Your score is " + score, w / 2 - (ctx.measureText("Your score is " + score).width/2), h * 9 / 16)
//        }
//        else {
//            ctx.fillText("The high score is " + highscore, w / 2 - (ctx.measureText("The high score is " + highscore).width/2), h * 8.5 / 16)
//            ctx.fillText("Your score was " + score, w / 2 - (ctx.measureText("Your score was " + score).width/2), h * 9 / 16)
//        }
//        ctx.font = '20px monospace'
//        var grd2 = ctx.createLinearGradient(0, 0, w + gx2, 0)
//        grd2.addColorStop(0, pcolor)
//        grd2.addColorStop(1, 'black')
//        ctx.fillStyle = grd2
//        ctx.fillText("TITLE >>",w - (ctx.measureText("TITLE >>").width), h - 10)
//        canvas.addEventListener("mousedown", getPosition, false)
//        if (x >= w - (ctx.measureText("TITLE >>").width)-10 && x <= w && y >= h - 20 && y <= h) {
//            clearInterval(sessionE)
//            location.reload()
//        }
//    }, 50)
//}
