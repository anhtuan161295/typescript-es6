"use strict";
// Using constructor
// Method 1
var Person4 = (function () {
    // Pass parameter value to variable
    function Person4(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person4;
}());
// Method 2
var Person5 = (function () {
    // Declare variable inside constructor without passing parameter value
    // Khai báo biến trong constructor ko cần gán giá trị từ tham số qua biến
    function Person5(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person5;
}());
var p5 = new Person5("Tedu", "Online");
console.log(p5.fname + " " + p5.lname);
//# sourceMappingURL=lesson26.js.map