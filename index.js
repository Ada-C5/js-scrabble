/*
  The convention with Node projects is to use `index.js` as the jumping-off
  point for the application. If we were building a larger, more integrated
  Scrabble application, we would bring the various modules/objects we made into
  this file and kick off whatever functions were necessary to run the app.

  We're focusing on learning the module pattern and unit testing right now, so
  we won't be bringing anything into this file. Next project, we'll make good
  use of this file.
*/
var Scrabble = require ('./scrabble.js');
// creating an instance starting at 0
var scrabble = new Scrabble();
// node_nodule that exists here
var prompt = require('prompt');

function getWord() {
  // collect data from user
  prompt.get(['word'], function(error, result) {
    console.log(scrabble.wordScore(result.word));
    ask_again(getWord);
  });
  // send data off to the callback when it's done
}

function getWords () {
  prompt.get(['input'], function(error, result) {
    var arrayOfWords = result.input.split(' ')
    console.log(scrabble.highestScoreFrom(arrayOfWords));
    ask_again(getWords);
  });
}

function ask_again(againCallback) {
  prompt.get(['again?'], function(error, result) {
    var answer = result["again?"];
    if (answer === "yes") {
    // do it again
    againCallback();
  } else {
  // exits
  console.log('bye!');
  process.exit;
  }
 })
}

prompt.start();

getWords();
