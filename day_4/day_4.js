"use strict";

var md5  = require('md5');
var i    = 0;
var seed = "yzbqklnj";
var hash = md5(seed + i);

var checkZeros = function (hash, count) {
    var sum = hash.substring(0,6)
        .split("")
        .map(Number)
        .reduce( function ( a, b ) { return a + b; });

    return (sum == 0);
};

while (true) {
    if (checkZeros(md5(seed + i))) { break };
    i +=1;
}

console.log(i);

exports.checkZeros = checkZeros;
