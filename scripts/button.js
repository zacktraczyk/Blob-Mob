class Button {

    constructor(font, text, c1, c2){
        this.font = font
        this.text = text
        this.c1 = c1
        this.c2 = c2

        this.x = 0
        this.y = 0
        this.w = 100
        this.h = 100
    }

    draw() {
        ctx.font = this.font
        ctx.fillStyle = this.c2
        ctx.fillText(this.text, this.x - this.w/2 - 3, this.y + this.h/2 - 3)
        ctx.fillStyle = this.c1
        ctx.fillText(this.text, this.x - this.w/2, this.y + this.h/2)
    }

    check(m) {
        let x = this.x - this.w/2
        let y = this.y - this.h/2
        if (m.xmouse > x && m.xmouse < x + this.w &&
            m.ymouse > y && m.ymouse < y + this.h && m.mouseDown){
            if (!effects.playing('btn'))
                effects.play('btn')
            m.mouseDown = false
            return true
        }
    }

    adjust(x, y){
        ctx.font = this.font
        this.w = ctx.measureText(this.text).width
        this.h = parseInt(this.font.split(" ")[0], 10)
        this.x = x
        this.y = y
    }

    debug() {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h)
    }

}
