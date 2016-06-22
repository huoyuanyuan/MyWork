/**
 * Created by mac on 16/6/21.
 */

window.ucai = window.ucai || {};

(function () {

    function Human(name){
        this._name = name;
        this.sayHello = function(){
            console.log(this._name+"say hello");
        }
    }
    Human.prototype.sayHi = function(){
        console.log(this._name+"say hi");
    };

    Object.defineProperty(Human.prototype,"name",{
       get: function () {
           return this._name;
       }
    });

    ucai.Human = Human;
})();