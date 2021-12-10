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
    G.debug()

    if (P.state == en.state.dead) {
        window.requestAnimationFrame(GameoverTrans)
        return
    }

    loop(main)
}

function update() {
    if (P.state != en.state.dead) Enemies.spawner(G.w, G.h, P)
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    Enemies.controller()
}

function draw() {
    G.resizeWindow()
    ctx.clearRect(0, 0, G.w, G.h)

    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()
    DP.controller()    

    if (G.paused) pauseMenu.draw(G.w, G.h)

    Stage.HUD(G.w, G.h, P)
}
