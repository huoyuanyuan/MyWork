/**
 * Created by mac on 16/6/22.
 */

(function(){
    function Prompt(arr){
        this._arr = arr;

        this._prompt = document.getElementById("promptBox");

        this._inputs = document.getElementsByTagName("input");

        (function(self){
            for(var k =0;k<self._inputs.length;k++){
                self._inputs[k].addEventListener("click",function(){

                    if(this.value == self._arr[i]["right"]){
                        self._prompt.innerHTML = "恭喜你回答正确  正确答案为:  "+self._arr[i]["right"].toUpperCase();
                    }else{
                        self._prompt.innerHTML = "很遗憾回答错误  正确答案为:  "+self._arr[i]["right"].toUpperCase();
                    }
                });
            }

        })(this)
    }

    window.Prompt = Prompt;
})()