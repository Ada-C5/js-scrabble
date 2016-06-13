var shuffle = require('shuffle-array');
var repeat = require('repeat-string');

var Tilebag = function() {

  this.tiles = { 
    "A": 9, "N": 6, "B": 2, "O": 8, "C": 2, "P": 2, "D": 4, "Q": 1,
    "E": 12,"R": 6, "F": 2, "S": 4, "G": 3, "T": 6, "H": 2, "U": 4, "I": 9,
    "V": 2, "J": 1, "W": 2, "K": 1, "X": 1, "L": 4, "Y": 2, "M": 2, "Z": 1
  };

};

Tilebag.prototype = {

  drawTiles: function(num) {

    if (num > 7) {
      throw "You can't draw more than 7 tiles at a time!";
    };

    var newTilebag = [];

    for (var letter in this.tiles) {
      if (this.tiles[letter] !== 0) {
        // repeat adds the letter to the newTilebag var * the quantity of that letter
        var letters = (repeat(letter, this.tiles[letter]));
        for (letter of letters) {
          newTilebag.push(letter);
        };
      };
    };

    // shuffles tiles in newTilebag and picks num of tiles passed in by player
    var tilesDrawn = shuffle.pick(newTilebag, { 'picks': num });

      for (var letter of tilesDrawn) {
        this.tiles[letter]--;
      };

    return tilesDrawn;
  },

  tilesRemaining: function() {

    var quantities = [];
    for (var letter in this.tiles) {
      quantities.push(this.tiles[letter]);
    };
    
    return quantities.reduce(function(a, b) { return a + b; }, 0);
  }
  
};
 
 module.exports = Tilebag;
 