/**
 * Created by mac on 16/7/7.
 */


(function () {

    //$.get("data.txt").done(function (data) {
    //    console.log(data);
    //});

    $.ajax(
        "data.txt",
        {
        error: function () {
            console.log("加载数据时出错");
        },
        complete: function (xhr) {
            console.log(arguments);
            console.log(xhr.responseText);

        }
    });
})();
