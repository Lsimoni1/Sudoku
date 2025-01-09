var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

console.log("js loaded")

var testTile = new tile(0, 0)
testTile.draw()
testTile.revealValue()

var gameboard = new board()
gameboard.draw()

function reveal (tile) {
    tile.revealValue()
}
