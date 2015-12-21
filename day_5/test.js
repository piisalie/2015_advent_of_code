"use strict";

var assert, String, string, naughtyString, String2, string2;

assert = require("assert");
String = require("./string");
String2 = require("./string2");

// Part 1 tests

string = new String("ugknbfddgicrmopn");
assert.equal(string.contents, "ugknbfddgicrmopn", "has original contents");

assert.equal(string._hasNoBadCombos(), true, "knows if it has bad letter combos");
assert.equal(string._hasThreeVowels(), true, "knows if it has three vowels");
assert.equal(string._hasLetterPair(), true, "knows if it has a pair of letters");
assert.equal(string.isNice(), true, "it knows when it's nice");

naughtyString = new String("jchzalrnumimnmhp");
assert.equal(naughtyString.isNice(), false, "it knows when it's naughty");


// Part 2 tests

string2 = new String2("xyxy");
assert.equal(string2._nonOverlapCharPair(), true, "two pairs of chars");
string2 = new String2("aaa");
assert.equal(string2._nonOverlapCharPair(), false, "a pair of chars cannot overlap");

string2 = new String2("xyx");
assert.equal(string2._splitLetterRepeat(), true, "contains a pair of letters divided by one char");
string2 = new String2("xxy");
assert.equal(string2._splitLetterRepeat(), false, "chars cannot be adjacent");
string2 = new String2("xyyx");
assert.equal(string2._splitLetterRepeat(), false, "chars cannot have more than one inbetween");


string2 = new String2("qjhvhtzxzqqjkmpb");
assert.equal(string2.isNice(), true, "knows when it's nice");
string2 = new String2("xxyxx");
assert.equal(string2.isNice(), true, "still knows when it's nice");

string2 = new String2("uurcxstgmygtbstg");
assert.equal(string2.isNice(), false, "knows when it's naughty");
