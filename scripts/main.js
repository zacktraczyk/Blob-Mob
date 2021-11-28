// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const I = new IO()
const P = new Player(250, 250, 250, 250)
const Enemies = new EnemyController()

function update() {
    Enemies.spawner(G.w, G.h, P, 2)
    P.controller(G.w, G.h, I.keyState, Enemies.instances)
    Enemies.controller()
}

function draw() {
    G.resizeWindow()
    ctx.clearRect(0, 0, G.w, G.h)

    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()

    Stage.HUD(G.w, G.h, P)

}

function menu() {
    ++G.frame
    G.resizeWindow()

    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    // Center Player
    if (G.frame == 1) {
        I.addKeyListeners()
        P.x = x + menuSize/2 - P.w/2
        P.y = y + menuSize/2 - P.h/2
    }

    I.addMouseListener()
    ctx.fillText(I.xmouse + ", " + I.ymouse, 40, 40)
    if (I.xmouse > 500) {
        window.requestAnimationFrame(main);
        return
    }
    // } else if (G.frame == 10) {
    //     G.fps = 60
    //     window.requestAnimationFrame(main);
    //     return
    // }

    Menu.draw(x, y, menuSize, menuSize)       

    P.title(x, y, menuSize, menuSize)
    P.draw()

    setTimeout(() => {
        window.requestAnimationFrame(menu);
    }, 1000 / G.fps);
}

function main() {
    if (G.frame == 0) Stage.init
    ++G.frame

    update()
    draw()

    setTimeout(() => {
        window.requestAnimationFrame(main);
    }, 1000 / G.fps);
}
