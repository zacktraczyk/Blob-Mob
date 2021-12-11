let gtransTimer = 0
let gtransDuration = 200
function GameoverTrans() {
    ++G.frame
    G.resizeWindow()
    gtransTimer += 1

    let progress = ((gtransDuration - gtransTimer)/gtransDuration)

    // Draw
    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    Enemies.controller()

    if (gtransTimer >= gtransDuration) {
        window.requestAnimationFrame(Gameover);
        return
    }

    loop(GameoverTrans)
}

function Gameover() {
    ++G.frame
    G.resizeWindow()

    ctx.fillStyle = 'red'
    ctx.font = "30px Arial Bold"
    ctx.fillText(`Score is ${G.score}`, G.w/2 - 20, G.h/2 - 20)
    ctx.fillText(`Highscore is ${G.highscore}`, G.w/2 - 20, G.h/2 + 10)
    console.log(G.highscore)

    ctx.fillText("GAMEOVER", G.w - 250, G.h - 30)

    loop(Gameover)
}
