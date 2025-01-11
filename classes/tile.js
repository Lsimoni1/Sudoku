class tile {
    constructor(x, y, value) {
        this.gridPosition = {
            x: x * 64,
            y: y * 64
        }
        this.value = value
        this.color = "red"
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.gridPosition.x, this.gridPosition.y, 64, 64)
    }

    revealValue() {
        ctx.fillStyle = 'black'
        ctx.font = '30px Arial'
        ctx.fillText(this.value, this.gridPosition.x + 32, this.gridPosition.y + 32)
    }

    getValue(x, y) {
        if( this.gridPosition.x === x && this.gridPosition.y === y) {
            return this.value
        }
    }
}