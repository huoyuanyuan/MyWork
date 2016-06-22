/**
 * Created by mac on 16/6/20.
 */
(function(){
    var audio;
    var btnGetTime;
    var lrcBox;
    var j=0;
    function main(){
        /**
         +     * @type {HTMLMediaElement}
         +     */
        audio = document.getElementById("audio");

        lrcBox = document.getElementById("box");




        $.get("song.lrc").done(function (data) {
            var line = data.split("\n");
            var checkTime = [];
            var lrc = [];
            var lrcFinal = [];

            for(var i=0;i<line.length;i++){
                var playTime = line[i].split("");
                checkTime[i] = playTime[1]+playTime[2]+playTime[4]+playTime[5];
                for(var k=10;k<playTime.length;k++){
                    lrc[k-10] = playTime[k];
                }
                var strLrc = lrc.join("");
                lrc = [];
                lrcFinal.push(strLrc);
            }


            function getTime(){
                var sec = audio.currentTime;
                var min = (sec-(sec%60))/60;
                sec = sec-min*60;
                if(min<10){
                    min = "0"+min;
                }
                sec = sec - sec%1;
                if(sec<10){
                    sec = "0"+sec;
                }
                var relTime = min+sec;


                if(checkTime[j] == relTime && j<checkTime.length){
                    lrcBox.innerHTML = lrcFinal[j];
                    j++
                }
                setTimeout(getTime,100);
            }
            getTime();
        }).fail(function () {
            console.error("加载失败");
        });



    }


    main();
})()