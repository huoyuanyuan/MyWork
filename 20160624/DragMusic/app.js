/**
 * Created by mac on 16/6/24.
 */


(function () {

    var currentMusic;

    document.ondragover = function (e) {
        e.preventDefault();
    };

    document.ondrop = function (e) {
        e.preventDefault();

        var files = e.dataTransfer.files;
        if (files && files.length) {
            for(var i=0;i<files.length;i++){
                var file = files[i];

                if (file.type == "audio/mp3") {

                    var reader = new FileReader();
                    reader.onload = function () {
                        if (currentMusic) {
                            currentMusic.parentNode.removeChild(currentMusic);
                        }

                        currentMusic = document.createElement("audio");
                        currentMusic.src = reader.result;
                        console.log(reader.result);
                        currentMusic.controls="controls";
                        document.body.appendChild(currentMusic);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    }
})();