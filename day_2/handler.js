var handler = function (data) {
    var total = 0;
    var presents = lines(data);

    for (var i = 0, len = presents.length; i < len; i++) {
        // this is dumb hack because of how split handles
        // trailing new lines
        if (presents[i] != "") {
            total += sqft(dimensions(presents[i]));
        }
    }

    return total;
};

var lines = function (data) {
    return data.split("\n");
};

var dimensions = function (string) {
    var split = string.split("x").map(Number);
    return { l: split[0],
             w: split[1],
             h: split[2],
           };
}

var sqft = function (present) {
    var s1 = present.l * present.w;
    var s2 = present.w * present.h;
    var s3 = present.h * present.l;
    var min = Math.min.apply(null, [ s1, s2, s3 ]);

    return ((s1 * 2) + (s2 * 2) + (s3 *2) + min)
};

exports.handler    = handler;
exports.lines      = lines;
exports.dimensions = dimensions;
exports.sqft       = sqft;
