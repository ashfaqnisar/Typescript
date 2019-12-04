"use strict";
var a = "1"; // this will provide us with the error
var b = 1;
var c = 3;
var addition = function (x, y) {
    return x + y;
};
addition(c, b);
