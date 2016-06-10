var prompt = require('prompt');

var Scrabble = function() {};

Scrabble.prototype.helloWorld = function() {
  console.log('hello world!');
};

Scrabble.prototype.score = function(word) {
  this._word = word.toUpperCase();

  var num_array = [];

  var mapObj = {
     A:1,
     B:3,
     C:3,
     D:2,
     E:1,
     F:4,
     G:2,
     H:4,
     I:1,
     J:8,
     K:5,
     L:1,
     M:3,
     N:1,
     O:1,
     P:3,
     Q:10,
     R:1,
     S:1,
     T:1,
     U:1,
     V:4,
     W:4,
     X:8,
     Y:4,
     Z:10
  };

  var num_string = this._word.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/gi, function(matched){
    return mapObj[matched];
  });

  var i = num_string.length;

  while (i--) {
    num_array.push(Number(num_string[i]));
  }

  var score = num_array.reduce(function(a, b) { return a + b; }, 0);

  console.log(score);
};

module.exports = Scrabble;
