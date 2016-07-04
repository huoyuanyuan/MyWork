/**
 * Created by engikeer on 16/7/3.
 */

(function () {

    window.Config = {DB_NAME:"MyDB",DB_VERSION:1};

    function Main(){
        this.getElements();
        this.addListeners();
        this.connectDB(function () {
            this.readData();
        }.bind(this));


    };

    Main.prototype.readData = function () {
        var trans = this._db.transaction("users");
        var os = trans.objectStore("users");

        var keyRange = IDBKeyRange.lowerBound(0);
        var req = os.index("name").openCursor(keyRange);

        var arr = [];
        req.onsuccess = function (event) {
            var result = event.target.result;
            if(result != null){
                arr.push(result.value);
                result.continue();
            }
            this._userContainer.innerHTML = this.createTableHTMLByData(arr);
        }.bind(this);
        req.onerror = function () {
            this._msgDiv.innerHTML = "获取数据失败"
        }.bind(this);
    };

    Main.prototype.createTableHTMLByData = function (data) {
        var html = "<table border='1' cellspacing='0'><tr><th>姓名</th><th>日期</th><th>欠钱数额</th><th>是否还清</th></tr>";
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html += "<tr><td>" + item.name + "</td><td>" + item.date + "</td><td>"+ item.number + "</td><td>" + item.cleared + "</td></tr>";
        }
        html += "</table>";
        return html;
    };

    Main.prototype.getElements = function () {
        this._userContainer = document.getElementById("userscontainer");
        this._form = document.getElementById("form");
        this._msgDiv = document.getElementById("msg");
    };

    Main.prototype.addListeners = function () {

        this._form.onsubmit = function (event) {

            var trans = this._db.transaction("users", "readwrite");
            var os = trans.objectStore("users");
            var req = os.put({name: this._form["name"].value, date: this._form["date"].value,number:this._form["number"].value,cleared:this._form["cleared"].value});
            req.onerror = function () {
                this._msgDiv.innerHTML = "保存数据失败";
            }.bind(this);
            req.onsuccess = function () {
                this._msgDiv.innerHTML = "保存数据成功";

                this._form["name"].value = "";
                this._form["date"].value = "";
                this._form["number"].value = "";
                this._form["cleared"].value = "";
            }.bind(this);

            event.preventDefault();
        }.bind(this);
    };

    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME,Config.DB_VERSION);
        req.onsuccess = function () {
            this._db = req.result;

            console.log("数据库连接成功");

            if(sucCallback){
                sucCallback();
            }
        }.bind(this);
        req.onerror = function (event) {
            console.error(event);
        };
        req.onupgradeneeded = function () {
            var db = req.result;

            var os = db.createObjectStore("users",{keyPath:"ID",autoIncrement:true});

            os.createIndex("name","name");
            os.createIndex("date","date");
            os.createIndex("number","number");
            os.createIndex("cleared","cleared");
        };
    };
    new Main();
})();
