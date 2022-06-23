import { Entity } from './entity';

class Button extends Entity {

    private font: string;
    private text: string;

    private color2: string;

    constructor(font: string, text: string, c1: string, c2: string) {
        super(0, 0, 100, 100);
        this.font = font;
        this.text = text;
        this.color = c1;
        this.color2 = c2;

        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.font = this.font;
        ctx.fillStyle = this.color2;
        ctx.fillText(this.text, this.x - this.w/2 - 3, this.y + this.h/2 - 3);
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x - this.w/2, this.y + this.h/2);
    }

    public check(m: {xmouse: number, ymouse: number, mouseDown: boolean}): boolean {
        let x = this.x - this.w/2;
        let y = this.y - this.h/2;
        if (m.xmouse > x && m.xmouse < x + this.w &&
            m.ymouse > y && m.ymouse < y + this.h && m.mouseDown){
            if (!effects.playing('btn')){
                effects.play('btn');
            }
            m.mouseDown = false;
            return true;
        }
        return false;
    }

    public adjust(ctx: CanvasRenderingContext2D,x: number, y: number){
        ctx.font = this.font;
        this.w = ctx.measureText(this.text).width;
        this.h = parseInt(this.font.split(" ")[0], 10);
        this.x = x;
        this.y = y;
    }

    // debug() {
    //     ctx.strokeStyle = 'black';
    //     ctx.strokeRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    // }

}
