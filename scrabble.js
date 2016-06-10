var Scrabble = function() {
	this.point = {
		'a' : 1,
		'e' : 1,
		'i' : 1,
		'o' : 1,
		'u' : 1,
		'l' : 1,
		'n' : 1,
		'r' : 1,
		's' : 1,
		't' : 1,
		'd' : 2,
		'g' : 2,
		'b' : 3,
		'c' : 3,
		'm' : 3,
		'p' : 3,
		'f' : 4,
		'h' : 4,
		'v' : 4,
		'w' : 4,
		'y' : 4,
		'k' : 5,
		'j' : 8,
		'x' : 8,
		'q' : 10,
		'z' : 10
	};
}

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// test vars
Scrabble.prototype.score = function(word) {
	word = word.toString().toLowerCase();
	var score = 0;
	for (var i = 0; i < word.length; i++) {
		// search word[i], get point at to score
		score += this.point[word[i]]
		if (word.length == 7) {
			score += 50;
		}
	}
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
	// var score = 0;
	var winner = '';
	// keep score/word to deduct winner
	var winner_object = {};

	// sort array in desc order, so smallest wins
	// arrayOfWords.sort(function(a, b){
 //  	return b.length - a.length;
	// });

	for (var word of arrayOfWords) {
		// var temp_score = ;
		winner_object[this.score(word)] = word;
		console.log(winner_object);



		// word = word.toString().toLowerCase();
		// var word_score = 0;
		// for (var i = 0; i < word.length; i++) {
		// 	word_score += this.point[word[i]];
		// }




		// check if player used 7 tiles
		if (word.length == 7) {
			word_score += 50;
		}

		// assign winning word
		if (word_score >= score) {
			score = word_score;
			winner = word;
		}  
	}
	return winner;
}

module.exports = Scrabble;


// if ('Hello, World!'.indexOf(chars) !== -1)
//     alert("The string 'Hello World' contains the substring 'orl'!");
// else
//     alert("The string 'Hello World' does not contain the substring 'orl'!");