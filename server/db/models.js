 const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/invite", {
    useNewUrlParser: true
}, function (err) {
    if (err) { console.log('Connection Error:' + err)} 
    else {console.log('Connection success!')}

})

const userSchema=mongoose.Schema({
    user:{type: String, required: true}, // 用户名
    pwd:{type:String,required:true},//密码
    type:{type:String,required:true},//类型
    avatar:{type:String},//头像
    info:{type:String},
    company:{type:String},
    salary:{type:String}
});

const UserModel = mongoose.model('user', userSchema);
exports.UserModel = UserModel;