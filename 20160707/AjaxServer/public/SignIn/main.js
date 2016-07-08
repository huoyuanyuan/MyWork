/**
 * Created by mac on 16/7/7.
 */

(function () {

    var form,nameInput,passwordInput,msgContainer,SERVER_URL = "/signinserver";
    function init(){

        form = $("#form");
        nameInput = $("#nameinput");
        passwordInput = $("#passwordinput");
        msgContainer = $("#msgcontainer");

        form.on("submit", function (e) {
            e.preventDefault();

            $.post(SERVER_URL,{name:nameInput.val(),password:passwordInput.val()}, function (data) {
                msgContainer.html(data);
            });
        });

    }

    init();
})();
