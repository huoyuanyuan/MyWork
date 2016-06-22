/**
 * Created by mac on 16/6/22.
 */


(function(){

    function ShowQuestion(arr){
        this._arr = arr;

        this._title = document.getElementById("title");
        this._a = document.getElementById("a");
        this._b = document.getElementById("b");
        this._c = document.getElementById("c");
        this._d = document.getElementById("d");

        this._title.innerHTML = this._arr[i].title;
        this._a.innerHTML = this._arr[i].a;
        this._b.innerHTML = this._arr[i].b;
        this._c.innerHTML = this._arr[i].c;
        this._d.innerHTML = this._arr[i].d;

    };


    window.ShowQuestion = ShowQuestion;
})()