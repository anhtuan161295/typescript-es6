let calculateSalary = function name() {
    return 1000000;
}
// Arrow function : dùng cho các hàm tính toán đơn giản, code ngắn gọn
let calculateSalaryArrow = (bonus:number,tax:number) => 2000000+bonus-tax;

console.log(calculateSalary());
console.log(calculateSalaryArrow(100000,10000));

