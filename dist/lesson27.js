"use strict";
// Hybrid type
// variable + object
var p6 = {
    fname: "Tedu",
    lname: "Online",
    age: 2
};
var p7 = {
    fname: "Tedu 2",
    lname: "Online 2"
};
console.log(p6.fname + " " + p7.age);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//# sourceMappingURL=lesson27.js.map