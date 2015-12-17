"use strict";
var assert, helpers, santa, currentLocation;

assert  = require("assert");
helpers = require("./santa");

santa = new helpers.Santa;
assert.equal(santa.location.x, 0, "Starts at x: 0");
assert.equal(santa.location.y, 0, "Starts at y: 0");

assert.equal(santa.visitedLocations().length, 1, "Has initial location");

santa.move(">");
assert.equal(santa.location.x, 1, "moves East");
assert.equal(santa.location.y, 0, "without affecting y");
assert.equal(santa.visitedLocations().length, 2, "Adds new locations");

currentLocation = santa.visitedLocations()[santa.visitedLocations().length - 1];
assert.equal(currentLocation.x, 1, "has correct current location x in previouslocs");
assert.equal(currentLocation.y, 0, "has correct current location y in previouslocs");

santa.move("^");
assert.equal(santa.location.y, 1, "moves North");
assert.equal(santa.location.x, 1, "without affecting x");
assert.equal(santa.visitedLocations().length, 3, "Adds new locations");

currentLocation = santa.visitedLocations()[santa.visitedLocations().length - 1];
assert.equal(currentLocation.x, 1, "has correct current location x in previouslocs");
assert.equal(currentLocation.y, 1, "has correct current location y in previouslocs");

santa.move("<");
assert.equal(santa.location.x, 0, "moves West");
assert.equal(santa.location.y, 1, "without affecting y");
assert.equal(santa.visitedLocations().length, 4, "Adds new locations");

currentLocation = santa.visitedLocations()[santa.visitedLocations().length - 1];
assert.equal(currentLocation.x, 0, "has correct current location x in previouslocs");
assert.equal(currentLocation.y, 1, "has correct current location y in previouslocs");

santa.move("v");
assert.equal(santa.location.y, 0, "moves South");
assert.equal(santa.location.x, 0, "without affecting x");
assert.equal(santa.visitedLocations().length, 5, "Adds new locations");

currentLocation = santa.visitedLocations()[santa.visitedLocations().length - 1];
assert.equal(currentLocation.x, 0, "has correct current location x in previouslocs");
assert.equal(currentLocation.y, 0, "has correct current location y in previouslocs");

assert.equal(santa.uniqueDeliveries().length, 4, "tracks how many unique houses visited");

santa = new helpers.Santa
santa.move("^");
santa.move("v");
santa.move("^");
santa.move("v");
santa.move("^");
santa.move("v");
assert.equal(santa.uniqueDeliveries().length, 2, "tracks how many unique houses visited");
