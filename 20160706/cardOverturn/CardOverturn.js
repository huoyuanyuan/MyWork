/**
 * Created by mac on 16/7/6.
 */

(function () {

    $.fn.cardOverturn = function () {
        var target = $(this);
        target.css({
            width:"200px",
            height:"100px",
            backgroundColor:"rgb(255,0,0)",
            margin:"0 auto"
        });
        target.on("click", function () {
            target.animate({width:"0px"},2000, function () {

                if(target.css("backgroundColor") == "rgb(0, 128, 0)"){
                    console.log("1");
                    target.css({backgroundColor:"rgb(255,0,0)"});
                }else {
                    console.log("2");
                    target.css({backgroundColor:"rgb(0,128,0)"});
                }

                target.animate({width:"200px"},2000);
            });
        });

    };

})();