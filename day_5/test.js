"use strict";

var assert, String, string, naughtyString;

assert = require("assert");
String = require("./string");

string = new String("ugknbfddgicrmopn");
assert.equal(string.contents, "ugknbfddgicrmopn", "has original contents");

assert.equal(string._hasNoBadCombos(), true, "knows if it has bad letter combos");
assert.equal(string._hasThreeVowels(), true, "knows if it has three vowels");
assert.equal(string._hasLetterPair(), true, "knows if it has a pair of letters");
assert.equal(string.isNice(), true, "it knows when it's nice");

naughtyString = new String("jchzalrnumimnmhp");
assert.equal(naughtyString.isNice(), false, "it knows when it's naughty");
