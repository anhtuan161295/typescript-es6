// Destructing Object - bóc tách đối tượng object
let emp = {
    fname: "Technology",
    lname: "Education",
    level: 2
}

let {fname,lname,level} = emp;
console.log(fname);
console.log(lname);
console.log(level);
// Result: Technology Education 2
// Gắn từng thuộc tính vào biến theo thứ tự

let {fname:f,lname:l,level:lv} = emp;
console.log(f);
console.log(l);
console.log(lv);
// Result: Technology Education 2
// Gắn từng thuộc tính cụ thể vào từng biến bất kì