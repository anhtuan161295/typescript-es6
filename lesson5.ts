for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// Result: 6

for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// Result: 12345

for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 1000);
    })(i)
}
// Result: 12345 
// sử dụng immediately invoked function expression 
// còn gọi là phương thức nặc danh (phương thức ko có tên)
// setTimeout là 1 hàm chạy sau 1 khoảng thời gian, ở đây là chạy sau 1 giây