var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//var testTile = new tile(0, 0)


var gameboard = new board()
gameboard.draw()

// FINAL GAME BOARD DRAWING
// for( i = 0; i < 10 ; i++) {
//     gameboard.drawRow("vert", i)
// }

//TEST DRAWS

gameboard.drawRow('horiz', 0)
gameboard.drawRow('horiz', 6)
gameboard.drawRow( "vert", 0)
gameboard.drawRow("vert", 1)
gameboard.drawRow("vert", 2)


console.log(gameboard.checkTile(0, 7))
console.log(gameboard.tiles)
console.log(gameboard.checkTileGrid(5))
