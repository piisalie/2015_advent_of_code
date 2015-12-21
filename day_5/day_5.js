"use strict";

var fileUtils, handler, String, String2;
fileUtils = require("../file_utils");
String = require("./string");
String2 = require("./string2");

handler = function (data) {
    var lines = data
        .trim()
        .split("\n")
        .map(String2);

    var count = 0;

    for (var i = 0, len = lines.length; i < len; i++) {
        if (lines[i].isNice()) {
            count +=1;
        };
        continue;
    };

    console.log(count);
};

fileUtils.readAndProcess(process.argv, handler);
