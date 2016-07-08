/**
 * Created by mac on 16/7/7.
 */
var express = require('express');
var router = express.Router();

var users = [
    {name:"ucai",password:123},
    {name:"liuchang",password:123},
    {name:"hyy",password:123},
    {name:"yg",password:123},
];


function isExit(name,password){
    var flg;
    for(var k in users){
        if(users[k].name == name && users[k].password == password){
            flg = true;
            break;
        }else{
            flg = false;
        }
    }
    return flg;
};

function judgePlayC(name,password){
    var flg;
    if(!isExit(name,password)){
        for(var k in users){
            if(users[k].name == name){
                flg = 2;
                break;
            }else{
                flg = 1;
            }
        }
    }else {
        return 0;
    }
    return flg;
}


function judgePlayA(name,password){
    var state = {name:0,password:0}
    for(var k in users){
        if(users[k].name == name){
            state.name = 1;
        }
        if(users[k].password == password){
            state.password = 1;
        }
    }
    if(state.name == 1){
        if(state.password == 1){
            return 0;
        }else{
            return 2
        }
    }else {
        return 1;
    }
}
function judgePlanB(name,password){
    var sum = 0;
    for (var k in users){
        if(users[k].name == name){
            if(users[k].password == password){
                return 0;
            }else{
                return 2;
            }
            sum++;
        }
    }
    if(sum == 0){
        return 1;
    }
}
router.post('/', function (req, res, next) {
    var name = req.body.name;
    var password = req.body.password;


    switch (judgePlanB(name,password)){
        case 0:
            res.send("登陆成功");
            break;
        case 1:
            res.send("用户不存在");
            break;
        case 2:
            res.send("密码错误");
    }

});

module.exports = router;