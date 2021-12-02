class Button {

    constructor(font, text, x, y, click){
        this.font = font
        this.text = text

        this.x = x
        this.y = y
        this.w = 100 // value fixed on draw
        this.h = 100 // value fixed on draw

        this.click = click
    }

    draw() {
        ctx.font = this.font
        ctx.fillText(this.text, this.x - this.w/2, this.y + this.h/2)
    }

    check(m) {
        let x = this.x - this.w/2
        let y = this.y - this.h/2
        if (m.xmouse > x && m.xmouse < x + this.w &&
            m.ymouse > y && m.ymouse < y + this.h) {
            return true
            // this.click()
        }
    }

    update(xchange, ychange) {
        this.x += xchange/2
        this.y += ychange/2
        ctx.font = this.font
        this.w = ctx.measureText(this.text).width
        this.h = parseInt(this.font.split(" ")[0], 10)
    }

    adjust(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    debug() {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h)
    }

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

