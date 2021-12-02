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

        if (this.act == en.act.push) {
            ctx.beginPath()
            // ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.pushRadius, 0, 2 * Math.PI)
            ctx.arc(this.x, this.y, this.pushRadius, 0, 2 * Math.PI)
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

