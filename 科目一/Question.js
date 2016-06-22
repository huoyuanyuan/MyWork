/**
 * Created by mac on 16/6/22.
 */

(function () {


    function Question(arr) {

        this._arr = arr;

        this.findElements();
        this.addListeners();
        this.addText();
        this.addPrompt();
    }

    Question.prototype.findElements = function () {
        this._btnLast = document.getElementById("btnLast");
        this._btnNext = document.getElementById("btnNext");
        this._btnExplain = document.getElementById("btnExplain");
    };


    Question.prototype.addListeners = function () {
        (function(self){
            self._btnLast.addEventListener("click", function (event) {
                if(i>0){
                    i--;
                }
                ShowQuestion(self._arr);

                check();
            });
            self._btnNext.addEventListener("click", function (event) {
                if(i<self._arr.length-1){
                    i++;
                }
                ShowQuestion(self._arr);

                check();

            });
            self._btnExplain.addEventListener("click", function (event) {
                alert(self._arr[i]["desc"]);
            });
        })(this);
    };

    Question.prototype.addText = function(){
        if(i>=0 && i<this._arr.length){
            ShowQuestion(this._arr);
        }

    };

    Question.prototype.addPrompt = function(){
        Prompt(this._arr);
    };

    function check(){
        if(!document.getElementById("promptBox").innerHTML == ""){
            document.getElementById("promptBox").innerHTML = "";
        };

        this._inputs = document.getElementsByTagName("input");
        for(var m=0;m<this._inputs.length;m++){
            this._inputs[m].checked = "";
        }

    }



    window.Question = Question;
})();