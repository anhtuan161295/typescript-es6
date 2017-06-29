var employee = {
    id: 1,
    greet: function () { // sử dụng từ khóa this lấy id của đối tượng
        setTimeout(() => console.log(this.id), 1000);
    }
}
employee.greet();
