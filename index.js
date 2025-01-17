var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

console.log("js loaded")

var testTile = new tile(0, 0)


var gameboard = new board()
gameboard.draw()
gameboard.drawRow( "vert", 0)
gameboard.drawRow('horiz', 0)
console.log(gameboard.checkTile(0, 7))
console.log(gameboard.tiles)
//gameboard.drawRow("horiz", 0)

// testTile.draw()
// testTile.revealValue()
