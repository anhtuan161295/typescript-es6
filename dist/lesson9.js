"use strict";
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=lesson9.js.map