exports.readAndProcess = function (args, handler) {
    var readFile = function (path, handler) {
        var fs   = require("fs");
        var data = fs.readFileSync(path, "utf-8");

        return handler(data);
    };

    if (args[2]) {
        return readFile(args[2], handler);
    } else {
        console.log("Usage: `node JS_FILE INPUT_FILE_PATH`");
    }
};
