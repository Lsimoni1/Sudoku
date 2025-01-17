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
        this.tiles = []
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, 584, 584)
        for(let i = 65; i <= 584; i += 65) {
            if( i % 195 === 0 ) {
                ctx.lineWidth = 5
                console.log("hi")
            } else {
                ctx.lineWidth = 1
            }
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, 584)
            ctx.stroke()
        }
        for(let i = 65; i <= 584; i += 65) {
            if( i % 195 === 0 ) {
                ctx.lineWidth = 5
                console.log("hi")
            } else {
                ctx.lineWidth = 1
            }
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(584, i)
            ctx.stroke()
        }
    }

    fillBoard() {
        // for(let y = 0; y <= this.dimensions.y; y ++) {
        //     for(let x = 0; x < this.dimensions.x; x ++) {
        //         var newTile = 
        //     }
        // }
    }

    drawRow(dir, row) {
        if(row < 0 || row > 8) {
            console.log("invalid parameters provided for drawRow")
            return
        }

        var currentTileVal
        var skips = []
        let numPool = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
        for(let i = 8; i >= 0; i--) {
            if( dir === 'horiz') {
                currentTileVal = this.checkTile(i, row)
            } else {
                currentTileVal = this.checkTile(row, i)
            }

            if( currentTileVal != -1) {
                numPool.delete(currentTileVal)
                skips.push(i)
            }
        }

        let activeNums = Array.from(numPool)
        for(let i = 8; i >= 0; i--) {
            if(skips.includes(i)) {
                console.log('skipping tile: ' + i)
                continue
            }
            const randNum = getRandomInt(0, activeNums.length - 1)
            let numInserted = activeNums[randNum] 
            if(dir === 'horiz') {
                let newTile = new tile(i, row, numInserted)
                newTile.revealValue()
                this.tiles.push(newTile)
            } else {
                let newTile = new tile(row, i, numInserted)
                newTile.revealValue()
                this.tiles.push(newTile)    
            }      
            numPool.delete(numInserted)
            activeNums = Array.from(numPool)
        } 
    }
    
    checkTile(x, y) {
        let posX = x * 64
        let posY = y * 64
        for( let i = 0; i < this.tiles.length; i++) {
            let tempTile = this.tiles[i]
            if( tempTile.gridPosition.x === posX && tempTile.gridPosition.y === posY) {
                console.log("poop")
                return tempTile.value
            }
        }
        return -1
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}