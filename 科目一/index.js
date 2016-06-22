/**
 * Created by mac on 16/6/22.
 */

var i = 0;

(function () {

    function init() {
        $.get("questions.json").done(function(data){
            new Question(data);
        })
    }
    init();
})();