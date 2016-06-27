/**
 * Created by mac on 16/6/27.
 */

window.ucai = window.ucai || {};

(function () {

    function Pen(){
        this.getElements();
        this.addListens();
    };
    Pen.prototype.getElements = function () {
        this._canvas = document.getElementById("canvas");
    };
    Pen.prototype.addListens = function () {

        (function (self) {
            self._canvas.onmousedown = function(event){
                var blackboard = new ucai.Blackboard();
                blackboard.drawLinerStartPoint(event.clientX,event.clientY);
                this.onmousemove = function (event) {
                    blackboard.drawLines(event.clientX,event.clientY);
                };
            };
            self._canvas.onmouseup = function () {
                this.onmousemove = null;
            };
        })(this);
    };

    ucai.Pen = Pen;

})()
