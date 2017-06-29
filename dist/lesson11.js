"use strict";
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    // for (let i in arguments) {
    //     console.log(arguments[i]);
    // }
    // console.log(message);
    console.log(colors);
    // arguments là 1 mảng các tham số trong hàm
    console.log(arguments.length);
};
var message = "Hello";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');
// Result: 1 mảng ['Hello','Red','Green','Blue']
// Rest parameter , thêm dấu 3 chấm trước tên tham số nếu ko biết số lượng
// Truyền từng phần tử , xuẩt ra mảng 
//# sourceMappingURL=lesson11.js.map