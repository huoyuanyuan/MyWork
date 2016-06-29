/**
 * Created by mac on 16/6/29.
 */

(function () {

    function Main(){

        this._MAX_VALUE = 150;
        this._start = 10;
        this._context2d = document.getElementById("canvas").getContext("2d");



        $.get("data.json").done(function (data) {
            this.drawData(data);
        }.bind(this));

        this.title("浏览器渲染效果对比",25);

        this.expression();
    };
    Main.prototype.drawData = function (data) {
        this.drawSection(data.html,this._start);
        this.drawSection(data.css,this._start+40);
        this.drawSection(data.js,this._start+40);
    };

    Main.prototype.drawSection = function (arr,x) {
        var x = x;
        var y1 = 400 * (1 - arr.chrome/this._MAX_VALUE);
        this._context2d.fillStyle = "#ff0000";
        this._context2d.fillRect(x,y1,20,400-y1);
        x+=20;
        var y2 = 400 * (1 - arr.firefox/this._MAX_VALUE);
        this._context2d.fillStyle = "#00ff00";
        this._context2d.fillRect(x,y2,20,400-y2);
        x+=20;
        var y3 = 400 * (1 - arr.ie/this._MAX_VALUE);
        this._context2d.fillStyle = "#0000ff";
        this._context2d.fillRect(x,y3,20,400-y3);
        x+=20;
        this._start = x;
    };

    Main.prototype.title = function (text,fontsize) {
        this._context2d.font = fontsize + "px Courier";
        this._context2d.fillText(text,70,70);
    };

    Main.prototype.expression = function () {
        this._context2d.fillStyle = "#ff0000";
        this._context2d.fillRect(320,200,15,15);
        this._context2d.fillStyle = "#00ff00";
        this._context2d.fillRect(320,220,15,15);
        this._context2d.fillStyle = "#0000ff";
        this._context2d.fillRect(320,240,15,15);

        this._context2d.fillStyle = "#000000";
        this._context2d.font = "17px Courier"
        this._context2d.fillText("chrome",340,212);
        this._context2d.fillText("firefox",340,232);
        this._context2d.fillText("ie",340,252);
    }
    new Main();
})();
