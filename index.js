var Scrabble = require('./scrabble.js');
var scrabble = new Scrabble;
var Player = require('./player.js');
var player = new Player("Bob");

var prompt = require('prompt');

function get_word() {
	prompt.get(['word'], function(error, word) {
		var score = play_word(word);
		console.log(score);
	});
}

function play_word(word) {
	return player.play(word);
}

prompt.start();
get_word();
