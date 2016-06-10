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

describe('Scrabble', function(){
  var scrabble = new Scrabble();

  it("is present", function(){
    expect(scrabble !== undefined).toEqual(true);
  });

  for(var word in test_score){
    it("should return proper score for each word", function(){
      expect(scrabble.score(word)).toEqual(test_score[word]);
      console.log(test_score[word]);
    });
  };

});

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});
