// Using constructor
// Method 1
class Person4 {
    // Declare variable
    public fname: string;
    public lname: string;
    // Pass parameter value to variable
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}
// Method 2
class Person5 {
    // Declare variable inside constructor without passing parameter value
    // Khai báo biến trong constructor ko cần gán giá trị từ tham số qua biến
    constructor(public fname: string, public lname: string) {

    }
}
let p5 = new Person5("Tedu", "Online");
console.log(p5.fname + " " + p5.lname);
