class tile {
    constructor(x, y, value) {
        this.gridPosition = {
            x: x * 64,
            y: y * 64
        }
        this.value = value
        this.color = "red"
        this.determineGridVal(x, y)
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

    determineGridVal(x, y) {
        if(y < 3) {
            if(x < 3) {
                this.gridGroup = 1
            }
            else if(x >= 3 && x < 6) {
                this.gridGroup = 2
            }
            else if(x >= 6 && x < 9) {
                this.gridGroup = 3
                console.log("hello")
            }
        } 
        else if(y >= 3 && y < 6) {
            if(x < 3) {
                this.gridGroup = 4
            }
            else if(x >= 3 && x < 6) {
                this.gridGroup = 5
            }
            else if(x >= 6 && x < 9) {
                this.gridGroup = 6
            }
        }
        else if(y >= 6 && y < 9) {
            if(x < 3) {
                this.gridGroup = 7
            }
            else if(x >= 3 && x < 6) {
                this.gridGroup = 8
            }
            else if(x >= 6 && x < 9) {
                this.gridGroup = 9
            }
        }
    }


}