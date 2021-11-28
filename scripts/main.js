// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const I = new IO()
const P = new Player(250, 250, 250, 250)
const DP = new DPController()
const Enemies = new EnemyController()

function menu() {
    ++G.frame
    G.resizeWindow()

    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    // Center Player
    if (G.frame == 1) {
        I.addKeyListeners()
        I.addMouseListener()
        P.x = x + menuSize/2 - P.w/2
        P.y = y + menuSize/2 - P.h/2
    }

    // Check Start Click
    if (I.xmouse > 500) {
        window.requestAnimationFrame(main);
        G.updateDifficulty(P, Enemies, 3)
        return
    }

    P.title(x, y, menuSize, menuSize) // update

    Menu.draw(x, y, menuSize, menuSize)       
    P.draw()

    setTimeout(() => {
        window.requestAnimationFrame(menu);
    }, 1000 / G.fps);
}

function main() {
    if (G.frame == 0) Stage.init
    ++G.frame

    if (!G.paused) update()
    draw()

    G.pause(I.keyState.pause)

    setTimeout(() => {
        window.requestAnimationFrame(main);
    }, 1000 / G.fps);
}
function update() {
    Enemies.spawner(G.w, G.h, P)
    P.controller(G.w, G.h, I.keyState, Enemies.instances, DP)
    // DP.controller()    
    Enemies.controller()
}

function draw() {
    G.resizeWindow()
    ctx.clearRect(0, 0, G.w, G.h)

    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()

    if (G.paused) pauseMenu.draw(G.w, G.h)

    Stage.HUD(G.w, G.h, P)

}
