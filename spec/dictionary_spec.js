var Dictionary = require("../dictionary.js");

describe('Dictionary', function() {
  var dictionaty = new Dictionary();

  it('#list_valid_words should not be undefined or null', function() {
    expect(dictionaty.list_valid_words).not.toBeUndefined();
    expect(dictionaty.list_valid_words).not.toBeNull();
    expect(typeof dictionaty.list_valid_words).toEqual("object");
  });

  it('#list_valid_words recognize the invalid words', function() {
    expect(dictionaty.valid("melissa")).toEqual(false);
    expect(dictionaty.valid("quinte")).toEqual(false);
    expect(dictionaty.valid("david")).toEqual(false);
    expect(dictionaty.valid("dos")).toEqual(false);
  });

  it('#list_valid_words recognize the valid words', function() {
    expect(dictionaty.valid("wrong")).toEqual(true);
    expect(dictionaty.valid("current")).toEqual(true);
    expect(dictionaty.valid("short")).toEqual(true);
    expect(dictionaty.valid("medical")).toEqual(true);
  });

});
