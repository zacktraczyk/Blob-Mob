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
