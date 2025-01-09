class board {
    constructor () {
        this.position = {
            x: 0,
            y: 0
        }
        this.dimensions = {
            x: 9,
            y: 9
        }
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, 584, 584)
        for(let i = 65; i <= 584; i += 65) {
            ctx.moveTo(i, 0)
            ctx.lineTo(i, 584)
            ctx.stroke()
        }
        for(let i = 65; i <= 584; i += 65) {
            ctx.moveTo(0, i)
            ctx.lineTo(584, i)
            ctx.stroke()
        }
    }
}