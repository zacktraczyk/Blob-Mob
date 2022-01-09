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

