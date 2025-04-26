const TILE_WIDTH = 64

class tile {
    constructor(x, y, value) {
        this.gridPosition = {
            x: x * TILE_WIDTH,
            y: y * TILE_WIDTH
        }

        this.posX = this.gridPosition.x
        this.posY = this.gridPosition.y

        this.value = value
        this.color = "red"
        this.determineGridVal(x, y)
        this.isSelected = false
    } 

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.gridPosition.x, this.gridPosition.y, TILE_WIDTH, TILE_WIDTH)
    }

    revealValue() {
        ctx.fillStyle = 'black'
        ctx.font = '30px Arial'
        ctx.fillText(this.value, this.gridPosition.x + TILE_WIDTH/2, this.gridPosition.y + TILE_WIDTH/2)
    }

    getValue(x, y) {
        if( this.gridPosition.x === x && this.gridPosition.y === y) {
            return this.value
        }
    }

    setValue(value) {
        this.value = value
    }
    
    toggleIsSelected() {
        if(this.isSelected) {
            this.isSelected = false
            console.log("tile at " + this.gridPosition + " unselected")
            gameboard.tileCurrentlySelected = false
            gameboard.redraw()
        } else if (gameboard.tileCurrentlySelected) {
            var tempTile = gameboard.getSelectedTile()
            if(tempTile == null) {
                console.log("u suck")
            }
            tempTile.isSelected = false
            gameboard.redraw()
            console.log("tile at " + tempTile.gridPosition + " unselected")
            this.isSelected = true
            ctx.fillStyle = "rgba(0, 255, 0, 0.25)"
            ctx.fillRect(this.gridPosition.x + 1, this.gridPosition.y + 1, TILE_WIDTH - 2, TILE_WIDTH - 2)
            console.log("tile at " + this.gridPosition + " selected")


            //NEED TO "UNDRAW" TILE SELECTION BOXES, WILL NEED TO REDRAW WHOLE BOARD
            //MAYBE WRITE A FUNCTION INSIDE OF BOARD CLASS??
            // ctx.fillStyle = "white"
            // ctx.fillRect(tempTile.gridPosition.x + 1, tempTile.gridPosition.y + 1, TILE_WIDTH - 2, TILE_WIDTH - 2)
            // gameboard.draw()
            // for(let i = 0; i < gameboard.tiles.length; i++ {
            //     var tempTile = gameboard.tiles[i]
            //     tempTile.revealValue
            // })
            // console.log("tile at " + tempTile.gridPosition + " selected")
        } else {
            this.isSelected = true
            ctx.fillStyle = "rgba(0, 255, 0, 0.25)"
            ctx.fillRect(this.gridPosition.x + 1, this.gridPosition.y + 1, TILE_WIDTH - 2, TILE_WIDTH - 2)
            console.log("tile at " + this.gridPosition + " selected")
            gameboard.tileCurrentlySelected = true
        }

        // if(this.isSelected) {
        //     this.isSelected = false
        //     console.log("tile at " + this.gridPosition + " unselected")
        //     gameboard.tileCurrentlySelected = false
        // } else {
        //     this.isSelected = true
        //     ctx.fillStyle = "green"
        //     ctx.fillRect(this.gridPosition.x + 1, this.gridPosition.y + 1, TILE_WIDTH - 2, TILE_WIDTH - 2)
        //     console.log("tile at " + this.gridPosition + " selected")
        //     gameboard.tileCurrentlySelected = true
        // }
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