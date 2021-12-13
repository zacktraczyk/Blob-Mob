// REQUIRES: player.js io.js
const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const I = new IO()
const P = new Player(250, 250, 250, 250)
const DP = new DPController()
const Enemies = new EnemyController()

function main() {
    ++G.frame

    // Update
    if (!G.paused) update()
    G.pause(I.keyState.pause)

    // Draw
    draw()

    // Debug
    // G.debug()

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
    Enemies.controller()
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
