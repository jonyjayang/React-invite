var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5');
//连接数据库
const {UserModel} = require('../db/models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册
router.post('/register', function (req, res, next) {
      const {user,pwd,type}=req.body;
      UserModel.findOne({user},function (err,doc) {
        if(doc){
          res.json({
            code:1,
            msg:"用户名已存在"
          })
        }else{
          new UserModel({user, type, pwd:md5(pwd)}).save(function (err, doc) {
              res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7});
              res.send({code: 0, data: {_id: user._id, user, type}});
          })
        }
    })
});
//获取用户信息
router.get('/info', function (req, res, next) {
  res.send('info');
});
//登录
router.post('/login',function (req,res,next) {
  const {user,pwd}=req.body;
  UserModel.findOne({user,pwd: md5(pwd)},function (err,doc) {
    if(!doc){
      res.json({
        code:1,
        msg:"账号或密码错误"
      })
    }else if(err){
      res.json({
        code:1,
        msg:"后端出错"
      })
    }else{
      res.cookie('userid', user._id, {
        maxAge: 1000 * 60 * 60 * 24 * 7
      });
      res.json({
        code:0,
        data:doc
      })
    }

    
  })
  
})


module.exports = router;
