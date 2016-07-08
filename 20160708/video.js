/**
 * Created by mac on 16/7/8.
 */

window.ucai = window.ucai || {};

(function () {

    function Video(url){

        var container = $("#container").addClass("videocontainer");

        this._video = document.createElement("video");
        this._video.style.width = "100%";
        this._video.style.height = "100%";
        this._video.src = url;
        this._video.autoplay = true;
        console.log(this._video);
        container.on("click", function () {
            $(this).find("video").remove();
            $(this).removeClass("videocontainer");

        });
    }

    ucai.Video = Video;
})();
