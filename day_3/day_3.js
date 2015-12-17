"use strict";
var fileUtils, handler, houses, unique, helpers, combineAndUnique;
fileUtils = require("../file_utils");
helpers   = require("./santa");

handler = function (data) {
    var chars = data.trim().split("");
    var santa = new helpers.Santa;

    for (var i = 0, len = chars.length; i < len; i++) {
        santa.move(chars[i]);
    }

    console.log("Classic Santa: " + santa.uniqueDeliveries().length);

    var santa     = new helpers.Santa;
    var roboSanta = new helpers.Santa;
    var isOdd     = function (num) { return !!(num % 2);};

    for (var i = 0, len = chars.length; i < len; i++) {
        if (isOdd(i)) {
            roboSanta.move(chars[i]);
        } else {
            santa.move(chars[i]);
        }
    }
    console.log("Robo Powers Combined: " + combineAndUnique(roboSanta,santa));
};

combineAndUnique = function (roboSanta, santa) {
    var all = roboSanta.uniqueDeliveries().concat(santa.uniqueDeliveries());
    var unique = [ ];

    var alreadyExists = function ( array, object) {
        for (var i = 0, len = array.length; i < len; i++) {
            if ((array[i].x == object.x) && (array[i].y == object.y)) {
                return true
            }
        };

        return false;
    };

    for (var i = 0, len = all.length; i < len; i++) {
        if (alreadyExists(unique, all[i])) {
            continue;
        };

        unique.push(all[i]);
    };

    return unique.length;
};


fileUtils.readAndProcess(process.argv, handler);
