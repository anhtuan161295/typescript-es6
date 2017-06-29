function greetPerson(name) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }

    console.log(greet);

}
greetPerson("Chandler");

var a = 1;
let b = 2;
if (a == 1) {
    b = 10;
    var a = 20;
}
console.log(a);
console.log(b);

// Biến có chữ let thì có thể kiểm soát theo scope
// có 2 kiểu: biến toàn cục và cục bộ như C Sharp