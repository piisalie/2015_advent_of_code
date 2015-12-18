"use strict";

module.exports = function (line) {
    var string = {

        contents: line,

        isNice: function () {
            return this._hasNoBadCombos() &&
                this._hasThreeVowels()    &&
                this._hasLetterPair();
        },

        _hasNoBadCombos: function () {
            var badCombos = [ "ab", "cd", "pq", "xy"];
            for (var i = 0, len = badCombos.length; i < len; i++) {
                if (this.contents.indexOf(badCombos[i]) > -1) {
                    return false;
                };
                continue;
            };
            return true;
        },

        _hasThreeVowels: function () {
            var vowels = [ "a", "e", "i", "o", "u" ];
            var chars  = this.contents.split("");
            var count  = 0;

            for (var i = 0, len = chars.length; i < len; i++) {
                if (vowels.indexOf(chars[i]) > -1) {
                    count += 1;
                }
            }
            return (count >= 3);
        },

        _hasLetterPair: function () {
            var chars  = this.contents.split("");
            for (var i = 0, len = chars.length; i < len; i++) {
                if (chars[i] == chars[i - 1]) {
                    return true;
                };
                continue;
            };
            return false;
        }
    };

    return string;
};
