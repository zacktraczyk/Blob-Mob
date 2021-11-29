function menu() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    if (G.frame == 1) {
        // let b_start = new Button(x + G.w/2, y,
        // Initalize Controll
        I.addKeyListeners()
        I.addMouseListener()

        // Center Player
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

    // BUTTON BORDER
    // ctx.strokeStyle = 'black'
    // ctx.strokeRect(x + menuSize/2, y + menuSize/2, 50, 50)

    setTimeout(() => {
        window.requestAnimationFrame(menu);
    }, 1000 / G.fps);
}

