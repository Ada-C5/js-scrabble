var Player = require("../index.js");


describe("Player Object exists", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });

describe('Calculator', function() {
  var calc = new Calculator(0);

  // Test if everything is set up
  it('is present', function() {
    expect(calc !== undefined).toEqual(true);
  });
})
