"use strict";
// Decleare a Class
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is running");
    };
    return Person;
}());
// hoisting
// person()
// function person() {
// }
var pl = new Person();
// console.log(pl.run()=== Person.prototype.run());
// console.log(pl.run=== Person.prototype.run); // so sánh Prototype 
// console.log(pl.run());
// console.log(typeof Person);
//# sourceMappingURL=lesson17.js.map