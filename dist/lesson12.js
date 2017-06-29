"use strict";
var displayColorsSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var messageSpread = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorsSpread.apply(void 0, [messageSpread].concat(colors));
// Result: Red Green Blue
// Spread Operator: ngược lại với Rest parameter
// truyền 1 mảng, xuất ra từng phần tử
// thay vì phải xài vòng lặp lấy từng phần tử trong colors thì dùng dấu ...
// tăng hiệu năng và tối ưu code ngắn gọn 
//# sourceMappingURL=lesson12.js.map