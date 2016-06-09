var Scrabble = function() {
// 	var points = {
// 			1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
// 		  2: ["D", "G"],
// 		  3: ["B", "C", "M", "P"],
// 		  4: ["F", "H", "V", "W", "Y"],
// 		  5: ["K"],
// 		  8: ["J", "X"],
// 		  10: ["Q", "Z"]
// 		};
	this.point = {
		'a' : 1
	}
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// test vars
Scrabble.prototype.score = function(word) {
	var score;
	for (var i = 0; i < word.length; i++) {
		// search word[i], get point at to score
		score = this.point[word[i]]
	}
  return score;
};

module.exports = Scrabble;


// if ('Hello, World!'.indexOf(chars) !== -1)
//     alert("The string 'Hello World' contains the substring 'orl'!");
// else
//     alert("The string 'Hello World' does not contain the substring 'orl'!");