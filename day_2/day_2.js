"use strict";
var fileUtils = require("../file_utils");
var solution  = require("./handler");

var total = fileUtils.readAndProcess(process.argv, solution.handler);

console.log(total);
