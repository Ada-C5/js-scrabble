var Dictionary = function() {
  thus = this;
};
// YOUR CODE HERE

Dictionary.prototype.list_valid_words = ["jezebel", "squeeze", "jukebox", "quickly", "cazique", "schmalz", "quetza", "zymurgy", "quartzy", "muzjiks", "syzygy", "za", "qintars", "qindars", "aquiver", "qiviuts", "equated",  "taeniae", "epinaoi",  "aeolian", "exuviae", "equines", "aeonian", "zoarial", "outvied", "roilier", "equates", "eugenia", "vauntie", "requins", "novenae", "feijoas", "auditee", "quoined", "quinoas", "volante", "quantal", "liquors", "zouaves", "unitive", "aviator", "inutile", "inwoven", "alienee", "aeneous", "footier", "emotive", "dejecta", "avenged", "rainout", "quinols", "toquets", "time", "issue", "year", "side", "people", "kind", "way", "head", "day", "house", "man", "service", "thing", "friend", "woman", "father", "life", "power", "child", "hour", "world", "game", "school", "line", "state", "end", "family", "member", "student", "law", "group", "car", "country", "city", "problem", "hand", "name", "part", "place", "team", "case", "minute", "week", "idea", "company", "kid", "system", "body", "program", "back", "work", "parent", "face", "number", "others", "night", "level", "office", "point", "door", "home", "health", "water", "person", "room", "art", "mother", "war", "area", "history", "money", "party", "storey", "result", "fact", "change", "month", "morning", "lot", "reason", "right", "study", "girl", "book", "guy", "eye", "food", "job", "moment", "word", "air", "100", "teacher", "other", "new", "good", "high", "old", "great", "big", "small", "large", "young", "black", "long", "little", "bad", "white", "real", "best", "right", "social", "only", "public", "sure", "low", "early", "able", "human", "local", "late", "hard", "major", "better", "strong", "whole", "free", "true", "federal", "full", "special", "easy", "clear", "recent", "certain", "open", "red", "likely", "short", "single", "medical", "current", "wrong", "private", "past", "foreign", "fine", "common", "poor", "natural", "similar", "hot", "dead", "central", "happy", "serious", "ready", "simple", "left", "general", "blue", "dark", "various", "entire", "close", "legal", "cold", "final", "main", "green", "nice", "huge", "popular"];

 Dictionary.prototype.valid = function(word) {
  //  Create a Dictionary object that includes a function for searching a list of words to determine if a given word is a valid word.

  return thus.list_valid_words.includes(word)
 };

module.exports = Dictionary;
