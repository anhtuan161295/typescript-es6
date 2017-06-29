let displayColorsSpread = function (message, ...colors:string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}
let messageSpread = "Hello";
let colors=['Red','Green','Blue'];
displayColorsSpread(messageSpread, ...colors);
// Result: Red Green Blue
// Spread Operator: ngược lại với Rest parameter
// truyền 1 mảng, xuất ra từng phần tử
// thay vì phải xài vòng lặp lấy từng phần tử trong colors thì dùng dấu ...
// tăng hiệu năng và tối ưu code ngắn gọn