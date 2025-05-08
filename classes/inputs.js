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

window.addEventListener("keydown", (event) => {
    var key = event.key
    if(key == "1" || key == "2" || key == "3" || key == "4" || key == "5"
        || key == "6" || key == "7" || key == "8" || key == "9"
    ){
        if(!gameboard.tileCurrentlySelected) { console.log("no tile selected") }
        else{
            let tile = gameboard.getSelectedTile()
            if(tile.value == key) {
                console.log("woo")
                //tile.revealValue()
            } else{
                console.log("nice guess loser")
                //decrement score, incorrect guess animation
            }
        }
    }
})