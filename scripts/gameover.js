let b_gameover = new Button("30px Comic Sans MS", "RESTART", 'red', 'black')

function GameoverTrans() {
    ++G.frame
    G.resizeWindow()
    trans_gameover.timer += 1

    // let progress = ((gtransDuration - gtransTimer)/gtransDuration)

    // Draw
    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    Enemies.controller()

    if (trans_gameover.timer >= trans_gameover.duration) {
        window.requestAnimationFrame(Gameover);
        return
    }

    loop(GameoverTrans)
}

function Gameover() {
    ++G.frame
    G.resizeWindow()

    gameover.draw()
    gameover.drawButtons(0, 0, G.w, G.h)

    if (gameover.checkButtons()) {
        G.restart(P)
        return
    }

    loop(Gameover)
}

let gameover = {

    draw() {
        ctx.fillStyle = 'red'
        ctx.font = "30px Arial Bold"
        ctx.fillText(`Score is ${G.score}`, G.w/2 - 20, G.h/2 - 20)
        ctx.fillText(`Highscore is ${G.highscore}`, G.w/2 - 20, G.h/2 + 10)

        ctx.fillText("GAMEOVER", G.w - 250, G.h - 30)
    },

    drawButtons(x, y, w, h) {
        b_gameover.adjust(w/2, h/4)
        b_gameover.draw()
    },

    checkButtons() {
        if (b_gameover.check(I)) {
            return true
        }
    }

}
