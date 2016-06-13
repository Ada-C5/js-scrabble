var Scrabble = require("../scrabble.js");

describe('Scrabble#score', function() {
  var scrabble = new Scrabble();
  var points = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  };

  it('return score of each letter', function() {
    for(letter in points){
      expect(scrabble.score(letter)).toEqual(points[letter]);
    }
  });

  it('return score of 5 for the word cat', function() {
      expect(scrabble.score('cat')).toEqual(5);

  });

  it('return score of 57 for the word aaaaaaa', function() {
      expect(scrabble.score('aaaaaaa')).toEqual(57);

  });

  it('return score of 0 if no word is given', function() {
      expect(scrabble.score('')).toEqual(0);

  });

});


describe('Scrabble#highestScoreFrom(array_of_words)', function() {
  var scrabble = new Scrabble();

  // build of array of words and return the highest value word

  it("should return the word 'hello' for the word_array = ['hello']", function(){
    var arrrayOfWords = ["hello"];
    expect(scrabble.highestScoreFrom(arrrayOfWords)).toEqual("hello");
  });

  it("should return the word 'hello' as the highest score from the word_array = ['hello', 'cat']", function(){
    var arrrayOfWords = ["hello", "cat"];
    expect(scrabble.highestScoreFrom(arrrayOfWords)).toEqual("hello");
  });

  // # for tiebreaker, the word with less tiles used is returned
  it("should return the word 'fee' from the word_array = ['cats', 'fee', 'no']", function(){
    var arrrayOfWords = ["cats", "fee", "no"];
    expect(scrabble.highestScoreFrom(arrrayOfWords)).toEqual("fee");
  });

  //  if top score is tied between multiple words but one used all seven letters, that one wins
  it ("should return the word 'aaaaaaa' from the word_array = ['feet', 'aaaaaad', 'no', 'qqqqqj']", function(){
    // chose the following words because aaaaaad's score is 58 including the 7-letter bonus,
    // and qqqqqj's score is also 58 just because of the rare letters
    var arrayOfWords = ["feet", "aaaaaad", "no", "qqqqqj"];
    expect(scrabble.highestScoreFrom(arrayOfWords)).toEqual("aaaaaad");
  });

  it ("should return the word 'aaaaaaa' from the word_array = ['feet', 'qqqqqj, 'no', 'aaaaaad']! BACKWARDS MODE!", function(){
    // # chose the following words because aaaaaad's score is 58 including the 7-letter bonus,
    // # and qqqqqj's score is also 58 just because of the rare letters
    var arrayOfWords = ["feet", "qqqqqj", "no", "aaaaaad"];
    expect(scrabble.highestScoreFrom(arrayOfWords)).toEqual("qqqqqj");
  });

  // # testing multiple words with same score and same length
  it ("should return 'aaaaaaa' from the word_array = ['aaaaaaa', 'eeeeeee', 'frog']", function(){
    var arrayOfWords = ["aaaaaaa", "eeeeeee", "frog"];
    expect(scrabble.highestScoreFrom(arrayOfWords)).toEqual("aaaaaaa");
  });

  it ("should return 'aaaaaad' from the word_array = [''nose'', ''aaaaaad'', ''eeeeeed'', ''frog'', ''rrrrrrr'', ''qqqqqj'']", function(){
    var arrayOfWords = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"];
    expect(scrabble.highestScoreFrom(arrayOfWords)).toEqual("aaaaaad");
  });
});


//PLAYER spec
// describe ("Scrabble#Player", function(){
//   it ("should be an object we have access to", function(){
//     Scrabble::Player.wont_be_nil
//   end
// }):

describe ("Scrabble::Player#name", function(){
  //  returns the value of the @name instance variable
  it ("should return the value 'Joe' when player instance is named Joe", function(){
    var joe = new Player('Joe');
    // var scrabble = new Scrabble();

    expect(joe.name).toEqual("Joe");
  });
});

describe ("Scrabble::Player#plays(word)", function(){
  var jane = new Player("Jane");
  jane.play("cat");
  it ("should return the score '5' for the word 'cat'", function(){
    expect(jane.plays).toEqual(['cat']);
  });
});

describe ("Scrabble::Player#play(word)", function (){
  var joe = new Player("Joe");
  var mary = new Player("Mary");

  it ("should return the score '5' for the word 'cat'", function(){
    expect(joe.play("cat")).toEqual(5);
  });


  it ("should return false if player has already won", function(){
    // # starts mary off with a bunch of words already played, then adds "cat"
    var arrayOfWords = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"];

    // # create an each method that will play the words in the array one by one
    for(wordPlayed of arrayOfWords){
      // console.log(wordPlayed);
      //
      // console.log(mary.play(wordPlayed));
      mary.play(wordPlayed);

    };
    expect(mary.play("cat")).toEqual(false)
  });
});

describe( "Scrabble::Player#total_score", function (){
  var jane = new Player("Jane");
  it ("should return '243' for array_of_words = ['nose', 'aaaaaad', 'eeeeeed', 'frog', 'rrrrrrr', 'qqqqqj']", function (){
    var arrayOfWords = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"];

    // create an each method that will play the words in the array one by one
    for(var wordPlayed of arrayOfWords){
      jane.play(wordPlayed);
    };

    expect(jane.totalScore).toEqual(243);
  });
});

describe ("Scrabble::Player#highestScoringWord", function(){
  var april = new Player("April");

  // it should return the highest scoring played WORD
  it ("should return 'frog' for the words played 'frog' and 'nose'", function(){
    april.play("frog");
    april.play("nose");
    expect(april.highestScoringWord()).toEqual("frog");
  });

  it("should return 'aaaaaad' for array_of_words = ['nose', 'aaaaaad', 'eeeeeed', 'frog', 'rrrrrrr', 'qqqqqj']", function(){
    var fox = new Player("Fox");
    var arrayOfWords = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"];
    // create an each method that will play the words in the array one by one
    for(wordPlayed of arrayOfWords){
      console.log("wordPlayed:", wordPlayed)
      fox.play(wordPlayed);
    };

    expect(fox.highestScoringWord()).toEqual("aaaaaad");
  });


});
//
// describe "Scrabble::Player#highest_word_score" do
//   jody = Scrabble::Player.new(name: "Jody")
//
//   # it should return the highest scoring played WORD
//   it %!should return "8" for the words played "frog" and "nose"! do
//     jody.play("frog")
//     jody.play("nose")
//     jody.highest_word_score.must_equal 8
//   end
//
//   it %!should return '58' for array_of_words = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"]! do
//     fox = Scrabble::Player.new(name: "Fox")
//     array_of_words = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"]
//     # create an each method that will play the words in the array one by one
//     array_of_words.each do |word_played|
//       fox.play(word_played)
//     end
//
//     fox.highest_word_score.must_equal 58
//   end
//
// end
//
// describe "Scrabble::Player#won?" do
//
//   it %!should return 'true' for array_of_words = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"]! do
//     fox = Scrabble::Player.new(name: "Fox")
//     array_of_words = ["nose", "aaaaaad", "eeeeeed", "frog", "rrrrrrr", "qqqqqj"]
//     # create an each method that will play the words in the array one by one
//     array_of_words.each do |word_played|
//       fox.play(word_played)
//     end
//
//     fox.won?.must_equal true
//   end
//
//   it %!should return "false" for the words played "frog" and "nose"! do
//     jody = Scrabble::Player.new(name: "Jody")
//     jody.play("frog")
//     jody.play("nose")
//     jody.won?.must_equal false
//   end
// end
//
// describe "Scrabble::Player#tiles" do
//   bill = Scrabble::Player.new(name: "Bill")
//   # should return a collection of letters that the player can play (max 7) -- that's their own personal little tray of letters
//   it "should return 7 letters" do
//     bill.tiles.length.must_equal 7
//   end
// end
