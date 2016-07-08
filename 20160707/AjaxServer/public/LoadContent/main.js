/**
 * Created by mac on 16/7/7.
 */

(function () {

    var container = $("#container");

    container.html("Loading")
    container.load("content.htm", function (data,status,object) {

        if(status == "error"){
            container.html("加载内容失败");
        }

        console.log(object);
    });

})();
