"use strict";
// For of loop
var colorNames = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
for (var index in colorNames) {
    console.log(colorNames[index]);
}
for (var item in colorNames) {
    console.log(colorNames[item]);
}
var nameTest = "TEDU";
for (var c_1 in nameTest) {
    console.log(c_1);
}
// result: 0 1 2 3
// for in thì phải là kiểu any, đối tượng hoặc kiểu dữ liệu tham số
for (var _i = 0, nameTest_1 = nameTest; _i < nameTest_1.length; _i++) {
    var c_2 = nameTest_1[_i];
    console.log(c_2);
}
// result : T E D U
// for of thì dùng cho string 
//# sourceMappingURL=lesson16.js.map