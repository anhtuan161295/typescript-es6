class Person3 {
    constructor(name) {
        console.log(name + " Person constructor");
    }
    getId() {
        return 10;
    }
}
class Employee3 extends Person3 {
    constructor(name) {
        super(name);
        console.log(name + " Employee constructor");
    }
    getId() {
        return super.getId();
    }
}
var empp3 = new Employee3("Tedu");
console.log(empp3.getId());

