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