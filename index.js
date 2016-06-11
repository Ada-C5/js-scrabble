var Scrabble = require('./scrabble.js');
var scrabble = new Scrabble;
var Player = require('./player.js');
var player = new Player("Bob");

var prompt = require('prompt');

function get_word() {
	prompt.get(['word'], function(error, word) {
		var score = play_word(word);
		console.log(score);

		further_options();
	});
}

function further_options() {
	prompt.get(['again?'], function(error, result) {
		var answer = result['again?'];
		if (answer === 'yes') {
			get_word();
		} else {
			console.log('bye!');
			process.exit;
		}
	})
}

function play_word(word) {
	return player.play(word);
}

prompt.start();
get_word();
