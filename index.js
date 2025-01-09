var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

console.log("js loaded")

var testTile = new tile()

var gameboard = new board()
gameboard.draw()

//testTile.draw()
