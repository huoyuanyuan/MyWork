/**
 * Created by mac on 16/6/27.
 */

window.ucai = window.ucai || {};

(function () {

    function Blackboard(){
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas = document.getElementById("canvas");
        this._canvas.style.backgroundColor = "#000000";
        this._blackboard = this._canvas.getContext("2d");
    };
    Blackboard.prototype.drawLinerStartPoint = function (x,y) {
        this._blackboard.strokeStyle = "#ffffff";
        this._blackboard.moveTo(x,y);
    };
    Blackboard.prototype.drawLines = function(x,y){
        //this._blackboard.beginPath();
        this._blackboard.strokeStyle = "#ffffff";
        this._blackboard.lineTo(x,y);
        this._blackboard.stroke();
        //this._blackboard.closePath();
    }

    ucai.Blackboard = Blackboard;
})()
