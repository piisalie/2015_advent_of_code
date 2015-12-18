"use strict";

var fileUtils, handler, String;
fileUtils = require("../file_utils");
String = require("./string")

handler = function (data) {
    var lines = data
        .trim()
        .split("\n")
        .map(String);

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
