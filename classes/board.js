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
        this.tileCurrentlySelected = false
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, 584, 584)
        for(let i = 65; i <= 584; i += 65) {
            if( i % 195 === 0 ) {
                ctx.lineWidth = 5
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
            } else {
                ctx.lineWidth = 1
            }
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(584, i)
            ctx.stroke()
        }
    }

    redraw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, 584, 584)
        for(let i = 65; i <= 584; i += 65) {
            if( i % 195 === 0 ) {
                ctx.lineWidth = 5
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
            } else {
                ctx.lineWidth = 1
            }
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(584, i)
            ctx.stroke()
        }

        for(let i = 0; i < this.tiles.length; i++) {
            let tile = this.tiles[i]
            tile.revealValue()
        }
    }

    fillBoard() {
        // for(let y = 0; y <= this.dimensions.y; y ++) {
        //     for(let x = 0; x < this.dimensions.x; x ++) {
        //         var newTile = 
        //     }
        // }
    }

    // drawRow(dir, row) {
    //     if(row < 0 || row > 8) {
    //         console.log("invalid parameters provided for drawRow")
    //         return
    //     }

    //     // code below checks whether a value has already been used previously in the 
    //     // same direction as the row being drawn
    //     var currentTileVal
    //     var skips = []
    //     let numPool = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    //     for(let i = 8; i >= 0; i--) {
    //         if( dir === 'horiz') {
    //             currentTileVal = this.checkTile(i, row)
    //         } else {
    //             currentTileVal = this.checkTile(row, i)
    //         }

    //         if( currentTileVal != -1) {
    //             numPool.delete(currentTileVal)
    //             skips.push(i)
    //         }
    //     }

    //     let activeNums = Array.from(numPool)
    //     for(let i = 8; i >= 0; i--) {
    //         if(skips.includes(i)) {
    //             console.log('skipping tile: ' + i)
    //             continue
    //         }
    //         let randNum = getRandomInt(0, activeNums.length - 1)
    //         let numInserted = activeNums[randNum] 
    //         let existingNums = new Set()
    //         if(dir === 'horiz') {
    //             let newTile = new tile(i, row, numInserted)

    //             let tileGridGroup = newTile.gridGroup
    //             let usedNums = this.checkTileGrid(tileGridGroup)
    //             if(usedNums.length > 0) {
    //                 for(let i = 0; i < usedNums.length; i++) {
    //                     existingNums.add(usedNums[i])
    //                 }
    //                 existingNums = numPool.difference(existingNums)
    //                 activeNums = Array.from(existingNums)
    //                 randNum = getRandomInt(0, activeNums.length - 1)
    //                 console.log((activeNums[randNum]) + " random: " + randNum)
    //             }

    //             newTile.revealValue()
    //             this.tiles.push(newTile)
    //         } else {
    //             let newTile = new tile(row, i, numInserted)
    //             newTile.revealValue()
    //             this.tiles.push(newTile)    
    //         }      
    //         numPool.delete(numInserted)
    //         activeNums = Array.from(numPool)
    //     } 
    // }

    drawRow(row) {
        if(row < 0 || row > 8) {
            console.log("invalid parameters provided for drawRow")
            return
        }

        // initialize sets to be used later
        let numPool = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
        let skips = new Set([])
        let gridGroup = new Set([])

        for(let i = 8; i >= 0; i--) {
            //console.log([...numPool] + " i : " + i)
            skips.clear()

            // check numbers currently used in opposite direction of the 
            // row being drawn
            for(let j = 8; j >= 0; j--) {
                let currentTileVal = this.checkTile(i, j)
    
                if( currentTileVal != -1) {
                    skips.add(currentTileVal)
                }
            }

            // choose random number from active numbers
            let activeNums = Array.from(numPool.difference(skips))
            let randNum = getRandomInt(0, activeNums.length - 1)
            let numInserted = activeNums[randNum]
            
            let newTile = new tile(i, row, numInserted)

            // check the tilegroup of the new tile, if numInserted has already
            // been used, choose a new numInserted
            gridGroup = this.checkTileGrid(newTile.gridGroup)
            if(gridGroup.includes(numInserted)) {
                for (let val of gridGroup) {
                    skips.add(val)
                }
                activeNums = Array.from(numPool.difference(skips))
                if(i == 8) console.log([...activeNums])
                randNum = getRandomInt(0, activeNums.length - 1)
                numInserted = activeNums[randNum]
                newTile.setValue(numInserted)
            }


            newTile.revealValue()
            this.tiles.push(newTile)

            numPool.delete(numInserted)
        }

        // let activeNums = Array.from(numPool)
        // for(let i = 8; i >= 0; i--) {
        //     let randNum = getRandomInt(0, activeNums.length - 1)
        //     let numInserted = activeNums[randNum] 

        //     if(skips.includes(numInserted)) {
        //         console.log("skipping tile value: " + numInserted)
        //         continue
        //     }

            //let existingNums = new Set()
            //let newTile = new tile(i, row, numInserted)
            //let tileGridGroup = newTile.gridGroup
            // let usedNums = this.checkTileGrid(tileGridGroup)
            // console.log(usedNums)
            // // if(usedNums.length > 0) {
            // //     for(let i = 0; i < usedNums.length; i++) {
            // //         existingNums.add(usedNums[i])
            // //     }
            // //     existingNums = numPool.difference(existingNums)
            // //     if(existingNums.size != 0) {
            // //         activeNums = Array.from(existingNums)
            // //         randNum = getRandomInt(0, activeNums.length - 1)
            // //         numInserted = activeNums[randNum]
            // //         newTile.setValue(numInserted)
            // //     }
                
            // //     if(numInserted == undefined) {
            // //         console.log("why " + randNum + "  " + activeNums)
            // //     }
            // //     //console.log((activeNums[randNum]) + " random: " + randNum)
            // }

        //     newTile.revealValue()
        //     this.tiles.push(newTile)
   
        //     numPool.delete(numInserted)
        //     activeNums = Array.from(numPool)
        // } 
    }
    
    checkTile(x, y) {
        let posX = x * 64
        let posY = y * 64
        for( let i = 0; i < this.tiles.length; i++) {
            let tempTile = this.tiles[i]
            if( tempTile.gridPosition.x === posX && tempTile.gridPosition.y === posY) {
                return tempTile.value
            }
        }
        return -1
    }

    // PREVIOUS ITERATION OF FUNCTION, ROW IS NOT NECESSARY
    // checkTileGrid(gridGroup, row) {
    //     let existingTiles = []
    //     for(let i = 0; i < this.tiles.length; i++) {
    //         let tempTile = this.tiles[i]
    //         if(tempTile.gridGroup == gridGroup && tempTile.gridPosition.x != row)
    //             existingTiles.push(tempTile.value)
    //     }
    //     return existingTiles
    // }

    checkTileGrid(gridGroup) {
        let existingTiles = []
        for(let i = 0; i < this.tiles.length; i++) {
            let tempTile = this.tiles[i]
            if(tempTile.gridGroup == gridGroup)
                existingTiles.push(tempTile.value)
        }
        return existingTiles
    }

    getSelectedTile() {
        for(let i = 0; i < this.tiles.length; i++) {
            let tempTile = this.tiles[i]
            if(tempTile.isSelected) {
                return tempTile
            }
        }
        return null
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}