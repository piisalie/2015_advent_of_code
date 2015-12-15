// 280;1797

"use strict";
var fs = require("fs");

var countFloors, readFile, sumMovements, findBasementMovement;

countFloors = function (args, handler) {
    if (args[2]) {
        readFile(args[2], handler);
    } else {
        console.log("Usage: `node day_1.js INPUT_FILE_PATH`");
    }
};

readFile = function (path, handler) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            handler(data);
        }
    });
};

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

countFloors(process.argv, sumMovements);
countFloors(process.argv, findBasementMovement);
