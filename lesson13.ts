// Destructing Array - bóc tách mảng
var employees = ['A','B','C'];

let [emp1,emp2,emp3] = employees;

console.log(emp1);
console.log(emp2);
console.log(emp3);
// Result: A B C
// Tách mảng ra 3 biến ABC

var employees2 = ['A','B'];
let [emp11,emp22,emp33] = employees2;

console.log(emp11);
console.log(emp22);
console.log(emp33);
// Result: A B undefined , tự động gắn undefined nếu mảng ko có giá trị

let [,,emp333] = employees;

// console.log(emp1);
// console.log(emp2);
console.log(emp333);
// Result: C

let [emp14,...emp24] = employees;
console.log(emp14);
console.log(emp24);
// Result: A và 1 mảng ['B','C']