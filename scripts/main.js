// REQUIRES: player.js io.js

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const w = c.width
const h = c.height

const p = new Player(150, 150, 200, 200)
let progress
let lastRender = 0

function update(progress) {
    listen()
    p.move(keyState.pressed)
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    p.draw()
}

function main(timestamp) {
    progress = timestamp - lastRender 

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(main)
}
window.requestAnimationFrame(main)
