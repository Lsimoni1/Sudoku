class tile {
    constructor(x, y) {
        this.gridPosition = {
            x: x,
            y: y
        }
        this.value = 0
        this.color = "red"
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.gridPosition.x, this.gridPosition.y, 64, 64)
    }

    revealValue() {
        ctx.font = "30px Arial"
        ctx.fillText(this.value, this.gridPosition.x, this.gridPosition.y)
    }
}