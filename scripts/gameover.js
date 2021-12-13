
let trans_gameover = {
    timer: 0,
    duration: 200,
}


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
        trans_gameover.timer = 0
        window.requestAnimationFrame(Gameover);
        return
    }

    loop(GameoverTrans)
}

function Gameover() {
    ++G.frame
    G.resizeWindow()

    gameover.draw()
    gameover.buttons.draw(0, 0, G.w, G.h)

    if (gameover.buttons.restart.check(I)) {
        G.reset(P, Enemies, DP)

        window.requestAnimationFrame(main)
        if (!mainTheme.playing()) mainTheme.play()
        return
    }

    if (gameover.buttons.change_diff.check(I)) {
        G.reset(P, Enemies, DP)

        window.requestAnimationFrame(diffSelect)
        if (!mainTheme.playing()) mainTheme.play()
        return
    }

    loop(Gameover)
}

let gameover = {

    draw() {
        let text = ''
        let x = 0
        let y = 0
        ctx.fillStyle = 'red'

        ctx.font = '30px Comic Sans MS'

        text = 'GAMEOVER'
        x = G.w/2 - ctx.measureText(text).width/2
        y = G.h*3/8
        ctx.fillText(text, x, y)

        ctx.font = '25px Comic Sans MS'

        text = `Score is ${G.score}`
        x = G.w/2 - ctx.measureText(text).width/2
        y += 60
        ctx.fillText(text, x, y)

        text = `Highscore is ${G.highscore}`
        x = G.w/2 - ctx.measureText(text).width/2
        y += 40
        ctx.fillText(text, x, y)
    },

    buttons: {
        restart: new Button('25px Comic Sans MS', 'RESTART', 'red', 'black'),
        change_diff: new Button('25px Comic Sans MS', 'CHANGE DIFFICULTY', 'red', 'black'),

        draw(x, y, w, h) {
            let xt = w/2
            let yt = h*6/8
            this.restart.adjust(xt, yt)
            this.restart.draw()

            yt += 30
            this.change_diff.adjust(xt, yt)
            this.change_diff.draw()
        },
    }
}
