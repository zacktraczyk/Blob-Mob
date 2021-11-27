// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

const G = new Game()
const P = new Player(250, 250, 50, 50)
const Enemies = new EnemyController()

let espawncool = 0

function update() {
    listen()
    P.controller(keyState, Enemies.instances)
    Enemies.controller()
    

    // TEMP SPAWNING --------------------
    if (espawncool > 0) --espawncool
    if (G.time % 1.00 && Enemies.instances.length < 30 && espawncool <= 0) {
        Enemies.spawn(G.w, G.h, P, 0.6)
        espawncool=50
    }
    //----------------------------------- 
}

function draw() {
    G.resizeWindow()
    ctx.clearRect(0, 0, G.w, G.h)

    Stage.draw(G.w, G.h)

    P.draw()
    Enemies.draw()

    Stage.HUD(G.w, G.h, P)

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
// window.requestAnimationFrame(main)
