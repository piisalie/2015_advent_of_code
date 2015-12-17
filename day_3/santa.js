"use strict";

exports.Santa = function () {
    var startingLocation    = { x: 0, y: 0 };
    this.location           = startingLocation;
    this._previousLocations = [ ];

    this.visitedLocations = function () {
        var a = this._previousLocations.slice();
        a.push(this.location);
        return a
    };

    this.move = function (directionToken) {
        switch(directionToken) {
            case ">":
                this._previousLocations.push(this.location);
                this.location = { x: this.location.x + 1, y: this.location.y};
                break;
            case "^":
                this._previousLocations.push(this.location);
                this.location = { x: this.location.x, y: this.location.y + 1};
                break;
            case "<":
                this._previousLocations.push(this.location);
                this.location = { x: this.location.x - 1, y: this.location.y };
                break;
            case "v":
                this._previousLocations.push(this.location);
                this.location = { x: this.location.x, y: this.location.y - 1};
                break;
            default:
                throw "Error: dont know how to handle direction: " + directionToken;
                break;
        }
    };

    this.uniqueDeliveries = function () {
        var locations = this.visitedLocations();
        var unique    = [ ];

        var alreadyExists = function ( array, object) {
            for (var i = 0, len = array.length; i < len; i++) {
                if ((array[i].x == object.x) && (array[i].y == object.y)) {
                    return true
                }
            };

            return false;
        };

        for (var i = 0, len = locations.length; i < len; i++) {
            if (alreadyExists(unique, locations[i])) {
                continue;
            };

            unique.push(locations[i]);
        };

        return unique;
    };
}
