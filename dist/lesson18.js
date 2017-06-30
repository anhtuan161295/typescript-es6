"use strict";
var Person1 = (function () {
    // Constructor
    function Person1(name) {
        this.name = name;
        console.log(this.name + " constructor.");
    }
    // Static method
    Person1.talk = function () {
        console.log("This static method is talk");
    };
    // Normal method
    Person1.prototype.run = function () {
        console.log("Person is running...");
    };
    return Person1;
}());
var p = new Person1("Tedu");
// Person1.talk();
// p.run();
console.log(p.name);
//# sourceMappingURL=lesson18.js.map