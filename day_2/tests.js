var assert  = require("assert");
var handler = require("./handler");

assert.equal(handler.lines("lol\nwat").length, 2, "Splits strings on newline");

var dimensions = handler.dimensions("2x3x4");
assert.equal(dimensions.l,   2, "build object with length");
assert.equal(dimensions.w,   3, "build object with width");
assert.equal(dimensions.h,   4, "build object with height");

var present = { l: 2, w: 3, h: 4 };
assert.equal(handler.sqft(present), 58, "calculates square footage of a single present");

var present2 = { l: 1, w: 1, h: 10};
assert.equal(handler.ribbon(present2), 14, "calculates ribbon length");

assert.equal(handler.handler("2x3x4\n1x1x10\n").sqft,   101, "calculates square footage for multiple presents")
assert.equal(handler.handler("2x3x4\n1x1x10\n").ribbon, 48,  "calculates ribbon for multiple presents")
