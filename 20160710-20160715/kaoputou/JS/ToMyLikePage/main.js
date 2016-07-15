/**
 * Created by mac on 16/7/14.
 */

(function () {

    function disabled(){
        var disableds = $(".disabled");
        disableds.on("click", function () {
            return false;
        });
        disableds.on("mouseover", function (e) {
            $(this).append("<div class='adddiv'>即将开通,敬请期待</div>");
            var div = $(".adddiv");
            console.log(e.clientY);
            div.css({
                left: e.clientX-70,
                right: e.clientY,
            });
        });
        disableds.on("mouseout", function () {
            $(this).find(".adddiv").hide();
        });
    }

    function btnMore(){
        var btnMore = $("#btn-more");

        var hidenElement = $(".province li:gt(9)");
        hidenElement.hide();
        console.log(hidenElement);
        btnMore.on("click", function () {
            if(hidenElement.is(":visible")){
                hidenElement.hide();
                btnMore.text("更多")
            }else{
                hidenElement.show(); //显示全部品牌
                btnMore.text("收起");
            }
        });
    }

    function init(){
        disabled();
        btnMore();
    }

    init();
})();
