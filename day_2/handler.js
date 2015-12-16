var handler = function (data) {
    var totalPaper = 0;
    var totalRibbon = 0;
    var presents = lines(data);

    for (var i = 0, len = presents.length; i < len; i++) {
        // this is dumb hack because of how split handles
        // trailing new lines
        if (presents[i] != "") {
            var present = dimensions(presents[i]);
            totalPaper   += sqft(present);
            totalRibbon  += ribbon(present);
        }
    }

    return {sqft: totalPaper, ribbon: totalRibbon};
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

var ribbon = function(present) {
    var byValue = function ( a, b ) { return a - b };
    var sides = [ present.l, present.w, present.h ].sort(byValue);
    var bow = sides.reduce(function (a, b) {return a * b});
    var s1 = sides.shift();
    var s2 = sides.shift();

    return (s1 + s1 + s2 + s2 + bow)
}

exports.handler    = handler;
exports.lines      = lines;
exports.dimensions = dimensions;
exports.sqft       = sqft;
exports.ribbon     = ribbon;
