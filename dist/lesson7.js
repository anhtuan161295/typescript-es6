"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = "blue";
console.log(color);
var fullName = "TEDU";
var age = 10;
var sentence = "\nHello Hello, my name is " + fullName + ". Age is " + age + "\n";
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var colorName = Color[2];
console.log(colorName);
// Các kiểu dữ liệu cơ bản
//# sourceMappingURL=lesson7.js.map