/**
 * Created by mac on 16/6/21.
 */

window.ucai = window.ucai || {};

(function(){

    function Man(name){
        return {
            __proto__:new ucai.Human(name),

            failInLoveWith:function (woman){
                console.log(this.name+" love "+woman.name);
            }

        };
    }

    ucai.Man = Man;
})()