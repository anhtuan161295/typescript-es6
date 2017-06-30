// Array
let arr1: string[]=['Hello','World'];
let arr2: number[]=[1,3,5,6,7];
let arrAny:any[]=[10,'Hello',true];
let arr3: Array<string> = ['Tedu','Online'];
console.log(arr1[0]);

// Tuple: mảng đặc biệt, giới hạn kiểu dữ liệu trong []
let student: [string, number, boolean];
student = ['Nguyen Van A',20, true];
student[2]= true;
student[3]= true;