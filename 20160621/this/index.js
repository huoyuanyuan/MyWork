/**
 * Created by mac on 16/6/21.
 */

(function () {

    //console.log(arguments.callee);
    //
    //function Human(name){
    //    this._name = name;
    //}
    //var h = new Human("吴多");
    //
    //var hello =function(){
    //    console.log("Hello"+this._name);
    //    console.log(arguments.callee);
    //}.bind(h);
    //
    //hello();


    //function Human(name){
    //    this._name = name;
    //    this.hello = function(){
    //        (function (self) {
    //            var count = 0;
    //            var id = setInterval(function(){
    //
    //                console.log(self._name+"say hello");
    //                count++;
    //                if(count>5){
    //                    clearInterval(id);
    //                }
    //            }.bind(this),1000);
    //        })(this)
    //
    //    };
    //}
    //
    //var h = new Human("吴多");
    //h.hello();


    var div = document.getElementById("div");
    div.onclick = function(){
        console.log(this);
    }
})();