"use strict";

module.exports = function (line) {
    var string = {
        contents: line,

        isNice: function () {
            return this._nonOverlapCharPair() && this._splitLetterRepeat();
        },

        _nonOverlapCharPair: function () {
            var chars = this.contents.trim().split("");
            var pairs = [ ];

            for (var i = 1, len = chars.length; i < len; i++) {
                var pair = chars[i - 1] + chars[i];

                if (pairs.indexOf(pair) == -1) {
                    pairs.push(pair);
                    continue;
                } else if (pairs.indexOf(pair) != i - 2 ) {
                    return true;
                }
            };

            return false;
        },

        _splitLetterRepeat: function () {
            var chars = this.contents.trim().split("");
            var seen  = [ ];

            for (var i = 2, len = chars.length; i < len; i++) {
                var group = chars[i - 2] + chars[i-1] + chars[i];
                var split = group.split("");

                if (split[0] == split[split.length - 1]) {
                    return true
                }
            };
            return false;
        }
    };
    return string;
};
