class Person1 {
    name:string; // Variable
    // Constructor
    constructor(name) {
        this.name = name;
        console.log(this.name + " constructor.");
    }
    // Static method
    static talk() {
        console.log("This static method is talk");
    }
    // Normal method
    run() {
        console.log("Person is running...");
    }
}
let p = new Person1("Tedu");
// Person1.talk();
// p.run();
console.log(p.name);

