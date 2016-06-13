var Scrabble = require("../scrabble.js");

var test_score = {
  jogged:16,
  zebra:16,
  xylophone:0,
  develop:63,
  pigsty:12,
  doggies:60,
  zenith:18,
  cramps:12,
  naysays:63,
  mixup:16
};

var wordcollection = {
  jogged:["jogged"],
  mixup:["mixup", "jogged", "pigsty", "zebra", "cramps"],
  zebra:["jogged", "zebra", "pigsty", "mixup", "cramps"],
  zenith:["jogged", "zebra", "pigsty", "mixup", "cramps", "zenith"],
  develop:["jogged", "zebra", "develop", "pigsty", "doggies", "naysays", "mixup", "cramps", "zenith"]
};

describe('Scrabble', function(){
  var scrabble = new Scrabble();

  it("is present", function(){
    expect(scrabble !== undefined).toEqual(true);
  });

  // tests for score function
  it("should return proper score for each word. 10 iterations", function(){
    for(var word in test_score){
      expect(scrabble.score(word)).toEqual(test_score[word]);
    };
  });

  it("should give 50 point bonus for any 7 letter word. 2 iterations"), function(){
    expect(scrabble.score("jacuzzi")).toEqual(84);
    expect(scrabble.score("quizzed")).toEqual(85);
  };

  it("should return 0 if no tiles are entered"), function(){
    expect(scrabble.score("")).toEqual(0);
  };

  // tests for arrayofwords
  it("should return proper winning word. 5 iterations", function(){
    for(var word in wordcollection){
      expect(scrabble.highestScoreFrom(wordcollection[word])).toEqual(word);
    };
  });

  it("lets first occuring tie to win", function(){
    expect(scrabble.highestScoreFrom(["jogged", "zebra", "develop", "pigsty", "doggies", "naysays", "mixup", "cramps", "zenith"])).toEqual("develop");
  });

});
