function intro() {
    ++G.frame
    G.resizeWindow()

    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
    IntroText.draw(x, y, menuSize, menuSize)

    setTimeout(() => 
        window.requestAnimationFrame(intro),
    1000 / G.fps);
}

// Button Definitions
let b_start = null

function menu() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0


    if (G.frame == 1) {
        titleTheme.play()
        b_start = new Button("30px Arial Bold", "START", x + menuSize/2, y + menuSize*7/8)

        // let b_start = new Button(x + G.w/2, y,
        // Initalize Controll
        I.addKeyListeners()
        I.addMouseListener()

        // Center Player
        P.x = x + menuSize/2
        P.y = y + menuSize/2
    }

    // Check Start Click
    // if (I.xmouse > 500) {
    //     window.requestAnimationFrame(main);
    //     G.updateDifficulty(P, Enemies, 3)
    //     return
    // }

    P.title(x, y, menuSize, menuSize) // update
    // Menu.checkButtons(mouse)

    Menu.draw(x, y, menuSize, menuSize, 0, 1)       
    P.draw()

    if (b_start != null) {
        ctx.fillStyle = 'red'
        b_start.draw()
        if (b_start.check(I)) {
            window.requestAnimationFrame(MenuTrans);
            return
        }
    }
    // BUTTON BORDER
    // ctx.strokeStyle = 'black'
    // ctx.strokeRect(x + menuSize/2, y + menuSize/2, 50, 50)

    setTimeout(() => 
        window.requestAnimationFrame(menu),
    1000 / G.fps);
}

let transTimer = 0
let transDuration = 100
function MenuTrans() {
    ++G.frame
    G.resizeWindow()
    transTimer += 1

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    Stage.draw(G.w, G.h)
    Menu.draw(x, y, menuSize, menuSize, transTimer, transDuration)
    P.title(x, y, menuSize, menuSize) // update
    P.draw()

    if (transTimer >= transDuration) {
            G.updateDifficulty(P, Enemies, 5)
            window.requestAnimationFrame(main);
            return
    }

    setTimeout(() => 
        window.requestAnimationFrame(MenuTrans),
    1000 / G.fps);
    
}

let Menu = {
    draw(x, y, w, h, timer, duration) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, G.w, y - timer) // top
        ctx.fillRect(0, 0, x - timer, G.h) // left
        ctx.fillRect(0, y + h + timer, G.w, G.h - (y + h)) // bottom
        ctx.fillRect(x + w + timer, 0, G.w - (x + w), G.h) // right
        ctx.fillStyle = `rgba(255, 255, 255, ${(duration - timer)/duration})`
        ctx.fillRect(x, y, w, h)
        ctx.fillStyle = '#ffd6cc'
        ctx.font = '80px Arial Bold'
        ctx.fillText("BLOB MOB",
            x + w/2 - (ctx.measureText("BLOB MOB").width/2),
            y + (h*1/8))

        // ctx.fillStyle = '#ffd6cc'
        // ctx.font = '15px sans-serif'
        // const bottommenu = "  About   -   HOW TO PLAY   -   Traczyk"
        // ctx.fillText(bottommenu,
        //     w / 2 - (ctx.measureText(bottommenu).width/2),
        //     h - 10)
        // ctx.fillRect(10,
        //     h - 13,
        //     w / 2 - (ctx.measureText(bottommenu).width/2) - 10,
        //     1)
        // ctx.fillRect(w / 2 + (ctx.measureText(bottommenu).width/2) + 10,
        //     h - 13,
        //     w / 2 - (ctx.measureText(bottommenu).width/2) - 10,
        //     1)
    },

    drawStartButton() {
        b_start.check(mouse)
    }


}

let IntroText = {
    draw(x, y, w, h) {
        ctx.fillStyle = '#ffd6cc'
        ctx.fillRect(x, y, w, h)
        ctx.font = '30px Arial Bold'
        let tw = ctx.measureText("monke").width
        ctx.fillStyle = 'black'
        ctx.fillText("monke", x + w/2 - tw/2, y + h/2)

    }
}
