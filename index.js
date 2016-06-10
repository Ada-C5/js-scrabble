/*
  The convention with Node projects is to use `index.js` as the jumping-off
  point for the application. If we were building a larger, more integrated
  Scrabble application, we would bring the various modules/objects we made into
  this file and kick off whatever functions were necessary to run the app.

  We're focusing on learning the module pattern and unit testing right now, so
  we won't be bringing anything into this file. Next project, we'll make good
  use of this file.
*/

var Scrabble = require('./scrabble.js');
var scrabble = new Scrabble;
var Player = require('./player.js');
var player = new Player("Bob");

// test config
console.log(scrabble.score('a'))
console.log(scrabble.helloWorld())

console.log(player.helloWorld())