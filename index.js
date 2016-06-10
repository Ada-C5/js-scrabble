/*
  The convention with Node projects is to use `index.js` as the jumping-off
  point for the application. If we were building a larger, more integrated
  Scrabble application, we would bring the various modules/objects we made into
  this file and kick off whatever functions were necessary to run the app.

  We're focusing on learning the module pattern and unit testing right now, so
  we won't be bringing anything into this file. Next project, we'll make good
  use of this file.
*/

var Scrabble = require('./scrabble'),
    game = new Scrabble(),
    prompt = require('prompt');

function collect () {
  // collect some data thte user
  prompt.get(['word'], function(error, result) {
    if(/\s/.test(result.word)){
       var value = multiple(result)
       console.log(value);
    } else {
      var value = final(result);
      console.log(value);
    };
    ask_again()
  });
}
function ask_again() {
  prompt.get(["again?"], function(error, result) {
    var answer = result["again?"];
    if (answer === "yes") {
      collect();
    } else {
      console.log("bye!");
      process.exit;
    };
  });
}

function final(result) {
  var word = result.word;
  return game.score(word);
};

function multiple(result) {
  var words = result.word;
  return game.highestScoreFrom(words);
}

prompt.start();
collect();
