/**
 * Created by mac on 16/6/29.
 */

(function () {

    function Main(){
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");
        /**
         *
         * @type {HTMLVideoElement}
         * @private
         */
        this._video = document.createElement("video");
        this._video.id = "video";
        this._video.width = "600px";
        this._video.height = "400px";

        this._btnTakePhoto = document.getElementById("btn-takephoto");

        this.showCamera();
        this.render();
        this.takePhoto();
    };


    Main.prototype.takePhoto = function () {
        this._btnTakePhoto.onclick = function () {

            var url = this._canvas.toDataURL();
            console.log(url);
            this._newImg = document.createElement("img");
            this._newImg.style.width = "150px";
            this._newImg.style.height = "100px";
            this._newImg.src = url;
            this._container = document.getElementById("container")
            this._container.appendChild(this._newImg);
        }.bind(this);
    }

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video:true}, function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();

        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };

    Main.prototype.render = function () {
        this._context2d.drawImage(this._video,0,0);

        requestAnimationFrame(this.render.bind(this));
    };


    new Main();
})();
