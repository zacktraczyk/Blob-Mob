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
                this.attack(w, h, 10, enemies)
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
            if (this.collides(enemy) && enemy.state == en.state.norm) damage = true
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

        this.keepOnScreen(w, h)

    }

    calculateDir() {
        let mag = Math.sqrt(this.xvel*this.xvel + this.yvel*this.yvel)
        if (mag > 0) {
            this.xdir = this.xvel/mag
            this.ydir = this.yvel/mag
        }
    }

    attack(w, h, duration, enemies) {
        ++this.timer
        this.cool += this.maxCool/duration

        const xspeed = Math.max(9, Math.abs(this.xvel)*2)
        const yspeed = Math.max(9, Math.abs(this.yvel)*2)
        this.x += this.xdir*xspeed
        this.y += this.ydir*yspeed

        // Collision test
        enemies.forEach(enemy => {
            if (this.collides(enemy)) {
                if (enemy.state != en.state.dying
                    && enemy.state != en.state.dead)
                    enemy.state = en.state.dying
            }
        })

        this.keepOnScreen(w, h)

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

    keepOnScreen(w, h) {
        this.x = clamp(this.x, this.w/2 + 5, w - this.w/2 - 5)
        this.y = clamp(this.y, this.h/2 + 5, h - this.h/2 - 5)
    }
}
