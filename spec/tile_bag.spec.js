var TileBag = require('../tile_bag.js')

describe('TileBag', function() {
  var bag = new TileBag();

  it('should start with 98 tiles', function() {
    expect(bag.tile_bag.length).toEqual(98);
  });
});