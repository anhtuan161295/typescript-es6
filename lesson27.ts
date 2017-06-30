// Interface
interface Person {
    fname: string,
    lname: string,
    age?: number
}
// Hybrid type
// variable + object
var p6: Person = <Person>{
    fname: "Tedu",
    lname: "Online",
    age: 2
}
var p7: Person = <Person>{
    fname: "Tedu 2",
    lname: "Online 2"
}
console.log(p6.fname + " " + p7.age);

interface LabelledValue {
    readonly label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);