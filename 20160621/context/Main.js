/**
 * Created by mac on 16/6/21.
 */

(function () {

    function Main() {
        this._div1 = document.getElementById("div1");
        this._div1.useCustomContextMenu = true;

        var menu = new ucai.CustomContextMenu();
        menu.addItem(new ucai.CustomContextMenuItem("去优才", function () {
            window.location.href = "http://ucai.cn";
        }));
        menu.addItem(new ucai.CustomContextMenuItem("输出信息", function () {
            console.log("JavaScript是世界上最强大的编程语言,没有之一");
        }));
        this._div1.customContextMenu = menu;
    }


    new Main();
})();