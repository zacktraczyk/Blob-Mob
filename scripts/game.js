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
