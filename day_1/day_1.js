// 280;1797

"use strict";
var fileUtils = require("../file_utils");

var sumMovements, findBasementMovement;

sumMovements = function (data) {
    var ups, downs;

    ups   = data.match(/\(/g).length;
    downs = data.match(/\)/g).length;
    console.log(ups - downs);
};

findBasementMovement = function (data) {
    var currentFloor = 0;

    for (var i = 0, len = data.length; i < len; i++) {
        if (currentFloor >= 0) {
            if (data[i] === "(") {
                currentFloor += 1;
            } else if (data[i] === ")") {
                currentFloor -= 1;
            } else {
                return console.log("Unhandled Input: " + data[i]);
            }
        } else {
            return console.log(i);
        }
    }
};

fileUtils.readAndProcess(process.argv, sumMovements);
fileUtils.readAndProcess(process.argv, findBasementMovement);
