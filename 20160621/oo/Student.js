/**
 * Created by mac on 16/6/21.
 */

window.ucai = window.ucai || {};

(function () {
    function Student(name) {
        ucai.Human.call(this, name);
    }

    Student.prototype = new ucai.Human();

    Student.prototype.sayHi = function () {
        ucai.Human.prototype.sayHi.call(this);

        console.log(this.name + "和大家打招呼");
    };

    ucai.Student = Student;
})();