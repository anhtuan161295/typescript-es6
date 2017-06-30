"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = (function () {
    function Person3(name) {
        console.log(name + " Person constructor");
    }
    Person3.prototype.getId = function () {
        return 10;
    };
    return Person3;
}());
var Employee3 = (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee constructor");
        return _this;
    }
    Employee3.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee3;
}(Person3));
var empp3 = new Employee3("Tedu");
console.log(empp3.getId());
//# sourceMappingURL=lesson19.js.map