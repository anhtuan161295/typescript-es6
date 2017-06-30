// For of loop
var colorNames = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

for (let index in colorNames) {
    console.log(colorNames[index]);
}

for (var item in colorNames) {
    console.log(colorNames[item]);
}

let nameTest:any = "TEDU";
for (let c in nameTest) {
    console.log(c);
}
// result: 0 1 2 3
// for in thì phải là kiểu any, đối tượng hoặc kiểu dữ liệu tham số
for (let c of nameTest) {
    console.log(c);
}
// result : T E D U
// for of thì dùng cho string