// Button Definitions
let b_start = new Button("25px Comic Sans MS", "START", '#ffd6cc', 'black')
// let b_options = new Button("20px Comic Sans MS", "OPTIONS", 0, 0, '#ffd6cc', 'black')

let Menu = {
    draw(x1, y1, x2, y2) { 
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, G.w, y1) // top
        ctx.fillRect(0, 0, x1, G.h) // left

        ctx.fillRect(0, y2, G.w, G.h) // bottom
        ctx.fillRect(x2, 0, G.w, G.h) // right

        let w = x2 - x1
        let h = y2 - y1

        // ctx.fillStyle = `rgba(255, 255, 255, ${(duration - timer)/duration})`
        // ctx.fillRect(x, y, w, h)
        ctx.fillStyle = 'black'
        ctx.font = '30px Comic Sans MS'

        ctx.fillText("BLOB MOB",
            x1 + w/2 - (ctx.measureText("BLOB MOB").width/2) - 3,
            y1 + (h*1/8) - 3)

        ctx.fillStyle = '#ffd6cc'
        ctx.fillText("BLOB MOB",
            x1 + w/2 - (ctx.measureText("BLOB MOB").width/2),
            y1 + (h*1/8))

        // Big text = BLOB MOB
        // Small text = Line 1-30px oninvalid
        //     1, Start game -----> you start the game fke
        //     2. How to play ----> tutorial or whatever fke
        //     3. Options -----> take you to options fke
    },

    drawButtons(x, y, w, h) {
        b_start.adjust(x + w/2, y + h*7/8)
        b_start.draw()

        // b_options.x = x + w*7/8
        // b_options.y = y + h - 20
        //     b_options.draw()
    },

    checkButtons() {
        if (b_start.check(I)) {
            window.requestAnimationFrame(MenuTrans);
            mainTheme.play()
            return true
        }

        //     if (b_options.check(I)) {
        //         console.log("MONKE")
        //     }
    }


}
function menu() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0


    if (G.frame == 1) {
        titleTheme.play()

        // Set coords of Buttons

        // Initalize Controll
        I.addKeyListeners()
        I.addMouseListener()

        // Center Player
        P.x = x + menuSize/2
        P.y = y + menuSize/2
    }

    Stage.draw(G.w, G.h)
    P.title(x, y, menuSize, menuSize) // update

    Menu.draw(x, y, x + menuSize, y + menuSize)       
    Menu.drawButtons(x, y, menuSize, menuSize)
    P.draw()

    if (Menu.checkButtons()) return // end loop
    loop(menu)
}

let transTimer = 0
let transDuration = 100
// let transDuration = 460
function MenuTrans() {
    ++G.frame
    G.resizeWindow()
    transTimer += 1

    // Calculate Menu Window
    menuSize = 500
    let x1 = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y1 = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
    let progress = ((transDuration - transTimer)/transDuration)

    // Update
    P.shrink(0, 0, menuSize*progress, menuSize*progress) // update
    b_start.adjust(x1 + menuSize/2, y1 + menuSize*7/8 + (G.h/4)*(1-progress))

    // Draw
    Stage.draw(G.w, G.h)

    let x2 = x1 + menuSize
    let y2 = y1 + menuSize
    Menu.draw(x1*progress, y1*progress,         // x1 and y1
        x2 + (G.w - x2)*(1 - progress),   // x2
        y2 + (G.h - y2)*(1 - progress))   // y1

    b_start.draw()

    P.draw()

    if (transTimer >= transDuration) {
        // G.updateDifficulty(P, Enemies, 6)
        window.requestAnimationFrame(main)
        G.updateDifficulty(P, Enemies, 6)
        // window.requestAnimationFrame(tutorial)

        return
    }

    loop(MenuTrans)
}


// function intro() {
//     ++G.frame
//     G.resizeWindow()

//     menuSize = 500
//     let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
//     let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
//     IntroText.draw(x, y, menuSize, menuSize)

//     loop(intro)
// }


// let IntroText = {
//     draw(x, y, w, h) {
//         ctx.fillStyle = '#ffd6cc'
//         ctx.fillRect(x, y, w, h)
//         ctx.font = '30px Arial Bold'
//         let tw = ctx.measureText("monke").width
//         ctx.fillStyle = 'black'
//         ctx.fillText("monke", x + w/2 - tw/2, y + h/2)

//     }
// }
