/**
 * Created by mac on 16/6/21.
 */

(function () {

    function max(){
        var arr = [];
        for(var i=0;i<arguments.length;i++){
            arr.push(arguments[i]);
        }
        arr.sort(function(a,b){
            if(a<b){
                return 1;
            }
            if(a>b){
                return -1;
            }
            return 0;
        });
        return arr[0];
    }

    console.log(max(1,2,3,4,6,-2,23));
})();