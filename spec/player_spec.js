var Player = require("../player.js");

describe('Player', function() {
  var player = new Player("Anna");

  it('instantiates with the given name', function() {
    expect(player.name).toEqual("Anna");
  });

  it('instantiates with an empty array called plays', function() {
    expect(player.plays).toEqual([]);
  });

});


describe('Play(word)', function() {
  var player = new Player("Anna");
  player.play("test")

  it('will store one word in plays array', function() {
    expect(player.plays).toEqual(["test"]);
  });

  var player2 = new Player("Paddy");
  player2.play("test")
  player2.play("cupcake")
  player2.play("hi")

  it('will store multiple words in plays array', function() {
    expect(player2.plays).toEqual(["test","cupcake","hi"]);
  });

  var player3 = new Player("Bryan");
  player3.play("cupcake")
  player3.play("cupcake")
  player3.play("cupcake")

  it('will return false if user has won', function() {
    expect(player3.play("word")).toEqual(false);
  });
});

describe('total_score()', function() {
  var player = new Player("Anna");
  player.play("cupcake")

  it('returns total score of plays array of one item', function() {
    expect(player.total_score()).toEqual(67);
  });

  var player2 = new Player("Bryan");

  it('returns returns 0 if there are no words played', function() {
    expect(player2.total_score()).toEqual(0);
  });

  var player3 = new Player("Kyle");
  player3.play("anna")
  player3.play("hello")
  player3.play("bee")

  it('returns total score with multiple words played', function() {
    expect(player3.total_score()).toEqual(17);
  });
});

describe('hasWon()', function() {
  var player = new Player("Anna");
  player.play("cupcake")
  player.play("cupcake")

  it('returns true if player has won', function() {
    expect(player.hasWon()).toEqual(true);
  });

  var player2 = new Player("Mitch");
  player2.play("test")

  it('returns false if player has not won', function() {
    expect(player2.hasWon()).toEqual(false);
  });

  var player3 = new Player("Mitch");

  it('returns false if player has not played any words', function() {
    expect(player3.hasWon()).toEqual(false);
  });

});

// describe('highestScoringWord()', function() {
//   var player = new Player("Anna");
//
//   it('instantiates with the given name', function() {
//     expect(player.name).toEqual("Anna");
//   });
//
// });

// describe('highestWordScore()', function() {
//   var player = new Player("Anna");
//
//   it('instantiates with the given name', function() {
//     expect(player.name).toEqual("Anna");
//   });
//
// });
