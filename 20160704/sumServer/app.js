/**
 * Created by mac on 16/7/4.
 */

var http = require("http");
var fs = require("fs");

http.createServer(function (request,response) {
    if(request.url == "/index.html"){
        response.end(fs.readFileSync("index.html"));
    }else if(request.url.match(/\/server/)){
        var pKv = /(\?|\&)([^=]+)=([^&]+)/g;
        var keyValue = {};

        while (true){
            var result = pKv.exec(request.url);
            if(result){
                keyValue[result[2]] = result[3];
            }else {
                break;
            }
        }
        var sum = Number(keyValue["value1"]) + Number(keyValue["value2"]);
        response.end("<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>sum "+decodeURI(sum)+"</body></html>");
    }
}).listen(8000);
