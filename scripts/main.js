// REQUIRES: player.js io.js
"use strict"

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const p = new Player(250, 250, 50, 50)
const fps = 60

let wgame, hgame
let frameNumber = 0
let gtime = 0
let enemies = new Array()
let e = new Enemy(5)
let espawncool = 0

function resizeWindow() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    wgame = window.innerWidth
    hgame = window.innerHeight
}

function update() {
    listen()
    p.controller(keyState)

    // TEMP SPAWNING --------------------
    enemies.forEach(enemy => enemy.move())
    if (espawncool > 0) --espawncool
    if (gtime % 5.00 && enemies.length < 15 && espawncool <= 0) {
        e = new Enemy(4)
        e.spawn(wgame, hgame, p)
        enemies.push(e)
        espawncool=500
        // e = new Enemy(5)
        // e.spawn()
        // enemies.push(e)
    }
    //----------------------------------- 
}

function draw() {
    resizeWindow()
    ctx.clearRect(0, 0, wgame, hgame)
    Scene.drawStage(wgame, hgame)
    p.draw()
    Scene.drawHUD(wgame, hgame, p)

    // ENEMY
    enemies.forEach(enemy => enemy.draw())
}

function main() {
    if (frameNumber == 0) { 
        Scene.init
    }
    ++frameNumber

    gtime = Math.floor(frameNumber/fps * 100)/100

    update(frameNumber)
    draw()

    setTimeout(() => {
        window.requestAnimationFrame(main);
    }, 1000 / fps);
}
window.requestAnimationFrame(main)
