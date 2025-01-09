class tile {
    constructor() {
        this.gridPosition = {
            x: 0,
            y: 0
        }
        this.value = 0
        this.color = "red"
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, 64, 64)
    }
}