"use strict";
// Destructing Array - bóc tách mảng
var employees = ['A', 'B', 'C'];
var emp1 = employees[0], emp2 = employees[1], emp3 = employees[2];
console.log(emp1);
console.log(emp2);
console.log(emp3);
// Result: A B C
// Tách mảng ra 3 biến ABC
var employees2 = ['A', 'B'];
var emp11 = employees2[0], emp22 = employees2[1], emp33 = employees2[2];
console.log(emp11);
console.log(emp22);
console.log(emp33);
// Result: A B undefined , tự động gắn undefined nếu mảng ko có giá trị
var emp333 = employees[2];
// console.log(emp1);
// console.log(emp2);
console.log(emp333);
// Result: C
var emp14 = employees[0], emp24 = employees.slice(1);
console.log(emp14);
console.log(emp24);
// Result: A và 1 mảng ['B','C'] 
//# sourceMappingURL=lesson13.js.map