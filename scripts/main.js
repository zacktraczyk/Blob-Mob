// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const w = c.width
const h = c.height

const p = new Player(250, 250, 50, 50)
let frameNumber = 0


function update() {
    listen()
    p.controller(keyState)
}

function draw() {
    ctx.clearRect(0, 0, w, h)
    Scene.drawStage()
    p.draw()
    Scene.drawHUD(p)
    ctx.fillText('xdir: ' + Math.round(p.xdir*100)/100 + ', ydir: ' + Math.round(p.ydir*100)/100, 100, 100)
}

function main() {
    if (frameNumber == 0) Scene.init
    ++frameNumber

    update()
    draw()

    window.requestAnimationFrame(main)
}
window.requestAnimationFrame(main)
