var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, nationality) {
        var female;
        this.name = name;
        this.age = age;
        this.gender = female;
        this.nationality;
    }
    Student.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    return Student;
}());
var Undergraduates = /** @class */ (function (_super) {
    __extends(Undergraduates, _super);
    function Undergraduates(name, age, nationality, batch) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.batch = batch;
        return _this;
    }
    return Undergraduates;
}(Student));
var Undergraduate = /** @class */ (function () {
    function Undergraduate(name, age, gender, nationality, GPA) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.GPA = GPA;
    }
    Undergraduate.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    ;
    return Undergraduate;
}());
var myUndergraduate = new Undergraduate("Simon", 34, "female", "french", 4);
myUndergraduate.getNationality();
