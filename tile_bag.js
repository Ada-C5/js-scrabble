var TileBag = function() {
  var tiles = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9,
    J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
    S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  };
  this.tile_bag = [];

  for (var letter in tiles) {
    for (var i = tiles[letter]; i > 0; i--) {
      this.tile_bag.push(letter);
    }
  }

  this.shuffle(this.tile_bag);
};

TileBag.prototype = {
  drawTiles: function(num) {
    var taken = [];
    for (var i = 0; i < num; i++) {
      taken.push(this.tile_bag.pop());
    }

    return taken;
  },
  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

module.exports = TileBag;
