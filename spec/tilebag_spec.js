var Tilebag = require("../tilebag.js");

describe("tilebag object", function() {
  var tilebag = new Tilebag();

  it("has hash of tiles that is defined", function() {
    expect(tilebag.tiles).toBeDefined();
  });

  it("starts out with 98 tiles", function() {
    expect(tilebag.tilesRemaining()).toEqual(98);
  });

  it("throws an error if > 7 tiles are drawn", function() {
    expect(function(){ tilebag.drawTiles(10); }).toThrow(new Error("You can't draw more than 7 tiles at a time!"));
  });

  it("draws correct number of tiles when given num", function() {
    expect(tilebag.drawTiles(3).length).toEqual(3);
  });

  it("won't draw incorrect number of tiles", function() {
    expect(tilebag.drawTiles(2).length).toNotEqual(5);
  });

  it("subtracts quantity of tiles once letters are drawn", function() {
    tilebag.drawTiles(4);
    // also drew 5 tiles total in above tests; total of 9 tiles should be subtracted
    expect(tilebag.tilesRemaining()).toEqual(89);
  });

});