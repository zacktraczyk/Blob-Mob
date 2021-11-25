var attackb = false // -- attack normal (1)
var attackz = false // -- attack bubble (2)
let attackx = false // -- regeneration (3)

var at //Attack id
var ah //HealthLoss id
var de //Death id
var pu //Push id
var he //heal id

class Player {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = '#ffd6cc'

        this.dir = en.dir.right
        this.speed = 4

        this.cool = 0
        this.power = 50
        this.health = 100

        this.action = en.act.norm
        this.state = en.state.norm
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
    }

    move(dir) {
        if (this.action != en.act.norm) { // break if performing another action
            return 0
        }

        if (dir.right) {
            this.x += this.speed
            this.dir = en.dir.right
        }
        if (dir.up) {
            this.y -= this.speed
            this.dir = en.dir.up
        }
        if (dir.left) {
            this.x -= this.speed
            this.dir = en.dir.left
        }
        if (dir.down) {
            this.y += this.speed
            this.dir = en.dir.down
        }

        // this.x = srandom(this.x)
        // this.y = srandom(this.y)
        // this.w = random(this.w)
        // this.h = random(this.h)

        return 1

        /*
        if (attackb) {
            clearInterval(sessionM)
            attack()
        } else if (attackz) {
            clearInterval(sessionM)
            attackZ()
        } else if (attackx) {
            //clearInterval(sessionM)
            //attackX()
            regeneration = true
        } else if (attackx === false){
            regeneration = false
            if(justRegen){
                if(muted !== true) mainTheme.mute(false)
                justRegen = false
                effects.stop(he)
            }
        }
        */
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
        cool++
    }
}

//--------------------------------------//
//--------------CHARACTERS--------------//
function moveChar() {
}

function drawChar() {
//Pink Color Strobe 
    //randNum = Math.round(Math.random() * 2)
    //pcolor = colors[randNum]

}

