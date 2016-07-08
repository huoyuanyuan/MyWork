/**
 * Created by mac on 16/7/7.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.post("/", function (req, res, next) {
//    switch (req.method) {
//        case "GET":
//            res.send('Hello ' + req.query.name);
//            break;
//        case "POST":
//            res.send("Hello " + req.body.name);
//            break;
//    }
//})

router.post('/', function (req, res, next) {
    res.send('Hello ' + req.body.name);
});

module.exports = router;