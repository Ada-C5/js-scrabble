var Player = require("./player.js");

var TileBag = function (){
  this.tiles = [
    {A: 9}, {B: 2}, {C: 2}, {D: 4}, {E: 12}, {F: 2}, {G: 3},
    {H: 2}, {I: 9}, {J: 1}, {K: 1}, {L: 4}, {M: 2}, {N: 6},
    {O: 8}, {P: 2}, {Q: 1}, {R: 6}, {S: 4}, {T: 6}, {U: 4},
    {V: 2}, {W: 2}, {X: 1}, {Y: 2}, {Z: 1}
]
}

TileBag.prototype.remainingTiles = function () {
  return this.tiles;
}

TileBag.prototype.shuffle = function () {
  var o = this.tiles;
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}

TileBag.prototype.drawTiles = function () {
  var chosen = [];
  for (var i = 0; i < 7; i++) {
    var shuffled = this.shuffle();
    var key = Object.keys(shuffled[0])[0];
    var remaining = shuffled[0][key];
    remaining--;
    shuffled[0][key] = remaining;
    chosen.push(key);
    if (remaining === 0) {
      shuffled.shift();
    }
    this.tiles = shuffled
  }
  return chosen;
}

var tilebag = new TileBag()
// console.log(tilebag.remainingTiles());
console.log(tilebag.shuffle());
console.log(tilebag.drawTiles());
console.log(tilebag.tiles);
// console.log(tilebag.remainingTiles());

module.exports = TileBag;
