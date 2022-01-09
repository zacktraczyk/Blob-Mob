// REQUIRES: player.js io.js
let c, ctx, G, I, P, DP, Enemies

function Init() {
    c = document.getElementById('canvas')
    ctx = c.getContext('2d')

    G = new Game()
    I = new IO()
    P = new Player(250, 250, 250, 250)
    DP = new DPController()
    Enemies = new EnemyController()

    menu()

}

function main() {
    ++G.frame

    // Update
    if (!G.paused) update()
    G.pause(I.keyState.pause)

    // Draw
    draw()

    // Debug
    G.debug(P, Enemies)

    if (P.state == en.state.dead) {
        window.requestAnimationFrame(GameoverTrans)
        mainTheme.stop()
        G.setHighscore()
        return
    }

    loop(main)
}

function update() {
    G.resizeWindow()

    if (P.state != en.state.dead) Enemies.spawner(G.w, G.h, P)
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    Enemies.controller(P)
}

function draw() {
    ctx.clearRect(0, 0, G.w, G.h)
    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    DP.controller()    

    Stage.HUD(G.w, G.h, P)
    if (G.paused) pauseMenu.draw(G.w, G.h)
}

window.addEventListener('DOMContentLoaded', () => {
    Init()
})

