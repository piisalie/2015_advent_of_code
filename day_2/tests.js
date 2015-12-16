var assert  = require("assert");
var handler = require("./handler");

assert.equal(handler.lines("lol\nwat").length, 2, "Splits strings on newline");

var dimensions = handler.dimensions("2x3x4");
assert.equal(dimensions.l,   2, "build object with length");
assert.equal(dimensions.w,   3, "build object with width");
assert.equal(dimensions.h,   4, "build object with height");

var present = { l: 2, w: 3, h: 4 };
assert.equal(handler.sqft(present), 58, "calculates square footage of a single present");

assert.equal(handler.handler("2x3x4\n1x1x10\n"), 101, "calculates square footage for multiple presents")
