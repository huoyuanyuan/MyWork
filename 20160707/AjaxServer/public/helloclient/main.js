/**
 * Created by mac on 16/7/7.
 */

(function () {

    var form,nameInput,SERER_URL = "/helloserver";
    var resultField;

    function init(){

        nameInput = $("#nameinput");
        resultField = $("#resultfield");
        form = $("#form");

        form.on("submit", function (e) {

            e.preventDefault();
            resultField.html("loading.....");

            $.post(SERER_URL,{name:nameInput.val()}, function (data) {
                resultField.html(data);
            });


        });
    }

    init();
})();
