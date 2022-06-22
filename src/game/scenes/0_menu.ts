import { Game } from "../game";
import { Player } from "../entities/player";
import { Stage } from "./2_battle";

export function menu(game: Game, player: Player) {
    ++game.frame
    game.resizeWindow()

    // Calculate Menu Window
    let menuSize = 500;
    let x = game.screen.w > menuSize ? game.screen.w/2 - (menuSize/2) : 0;
    let y = game.screen.h > menuSize ? game.screen.h/2 - (menuSize/2) : 0;

    if (game.frame == 1) {
        player.x = x + menuSize/2;
        player.y = y + menuSize/2;
    }

    Stage.draw(game.ctx, game.screen);
    player.title(x, y, menuSize, menuSize);

    Menu.drawBorder(x, y, x + menuSize, y + menuSize);

    player.draw(game.ctx);

    Menu.title.draw(x, y, menuSize, menuSize)       
    Menu.title.buttons.draw(x, y, menuSize, menuSize)

    if (Menu.title.buttons.start.check(I)) {
        Menu.difficulty.buttons.generate(x, y, menuSize, menuSize)
        if (game.getTutorial()) {
            window.requestAnimationFrame(diffSelect)
        } else {
            game.updateDifficulty(P, Enemies, 3)
            window.requestAnimationFrame(MenuTrans)
        }
        mainTheme.play()
        return // end loop
    }
    window.requestAnimationFrame(menu);
}

function diffSelect() {
    ++G.frame
    G.resizeWindow()

    // Calculate Menu Window
    let menuSize = 500
    let x = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y = G.h > menuSize ? G.h/2 - (menuSize/2) : 0

    Stage.draw(G.w, G.h)
    P.title(x, y, menuSize, menuSize) // update

    Menu.drawBorder(x, y, x + menuSize, y + menuSize)

    P.draw()

    Menu.difficulty.draw(x, y, menuSize, menuSize)       
    Menu.difficulty.buttons.draw(x, y, menuSize, menuSize)

    if (Menu.difficulty.buttons.check(I)) {
        window.requestAnimationFrame(MenuTrans)
        return
    }

    loop(diffSelect)

}

let transTimer = 0
let transDuration = 100
// let transDuration = 460
function MenuTrans() {
    ++G.frame
    G.resizeWindow()
    transTimer += 1

    // Calculate Menu Window
    let menuSize = 500
    let x1 = G.w > menuSize ? G.w/2 - (menuSize/2) : 0
    let y1 = G.h > menuSize ? G.h/2 - (menuSize/2) : 0
    let progress = ((transDuration - transTimer)/transDuration)

    // Update
    P.shrink(0, 0, menuSize*progress, menuSize*progress) // update

    // Draw
    Stage.draw(G.w, G.h)

    let x2 = x1 + menuSize
    let y2 = y1 + menuSize
    Menu.drawBorder(x1*progress, y1*progress,         // x1 and y1
        x2 + (G.w - x2)*(1 - progress),   // x2
        y2 + (G.h - y2)*(1 - progress))   // y1

    P.draw()

    if (transTimer >= transDuration) {
        transTimer = 0
        if (G.getTutorial()) {
            window.requestAnimationFrame(main)
        } else {
            window.requestAnimationFrame(tutorial)
        }


        return
    }

    loop(MenuTrans)
}

const Menu = {
    drawBorder(x1, y1, x2, y2) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, G.w, y1) // top
        ctx.fillRect(0, 0, x1, G.h) // left

        ctx.fillRect(0, y2, G.w, G.h) // bottom
        ctx.fillRect(x2, 0, G.w, G.h) // right
    },

    title: {
        draw(x, y, w, h) { 
            ctx.fillStyle = 'black'
            ctx.font = '30px Comic Sans MS'

            let text = 'BLOB MOB'
            let xt= x + w/2 - (ctx.measureText('BLOB MOB').width/2)
            let yt= y + (h*1/8)

            ctx.fillText(text, xt, yt)

            ctx.fillStyle = '#ffd6cc'
            xt -= 3
            yt -= 3
            ctx.fillText(text, xt, yt)
        },

        buttons: {
            start: new Button('25px Comic Sans MS', 'START', '#ffd6cc', 'black'),

            draw(x, y, w, h) {
                this.start.adjust(x + w/2, y + h*6/8 + 30)
                this.start.draw()
            }
        }

    },

    difficulty: {
        draw(x, y, w, h) {
            ctx.fillStyle = 'black'
            ctx.font = '30px Comic Sans MS'

            let text = 'DIFFICULTY'
            let xt = x + w/2 - (ctx.measureText('BLOB MOB').width/2)
            let yt = y + (h*1/8)

            ctx.fillText(text, xt, yt)

            ctx.fillStyle = '#ffd6cc'
            xt -= 3
            yt -= 3
            ctx.fillText(text, xt, yt)

        },

        buttons: {
            diffs: new Array(),

            generate(x, y, w, h) {
                Object.keys(difficultyTable).forEach(diff => {
                    let b = new Button('25px Comic Sans MS', diff, 'black', '#ffd6cc')
                    this.diffs.push(b)
                })
            },


            draw(x, y, w, h) {
                let text = '0'
                let dnum = Object.keys(difficultyTable).length // Number of difficulties
                let xgap = (w - dnum*ctx.measureText(text).width)/dnum

                let yt = y + h*6/8 + 30
                let xt = x 

                this.diffs.forEach(b => {
                    xt += xgap
                    b.adjust(xt, yt)
                    b.draw()
                })
            },

            check(m) {
                let d = null
                this.diffs.forEach(b => {
                    if (b.check(m)) {
                        d = parseInt(b.text, 10)
                    }
                })

                if (d != null) {
                    G.updateDifficulty(P, Enemies, d)
                    return true
                }
            }

        }
    }
}
