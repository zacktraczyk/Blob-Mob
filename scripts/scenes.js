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

