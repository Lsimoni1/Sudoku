//handling inputs and tile selection

window.addEventListener("click", (event) => {
    //var rect = canvas.getBoundingClientRect
    var posX = event.clientX 
    var posY = event.clientY 
    console.log("click registered")

    for(let i = 0; i < gameboard.tiles.length; i ++) {
        let tile = gameboard.tiles[i]

        if( posX >= tile.posX && posX < tile.posX + TILE_WIDTH &&
            posY >= tile.posY && posY < tile.posY + TILE_WIDTH
        ) {
            tile.toggleIsSelected()
            console.log("yethir")
            break
        }
    }

})