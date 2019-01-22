//包含所有action creator函数的模块
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST,
    RECEIVE_MSG_LIST,
    RECEIVE_MSG,
    MSG_READ
} from './action-types';

import {
    reqLogin,
    reqRegister,
    reqUpdateUser,
    reqUser,
    reqUserList,
    reqChatMsgList,
    reqReadMag
} from '../api';

//注册登录成功
function registerSuccess(data) {
    return {
        type: AUTH_SUCCESS,
        payload: data
    }

}

function errorMsg(msg) {
    return {
        msg,
        type: ERROR_MSG
    }
}

export function loadData(userinfo) {
    return {
        type: RECEIVE_USER,
        payload: userinfo
    }
}

//注册
export const regisger = (data) => {
 
    const {user, pwd, repeatpwd, type} = data;
    if(!user) {
        return errorMsg('用户名不能为空')
    } else if (pwd !== repeatpwd){
        return errorMsg('两次密码不一致')
    } else if (pwd === '' ){
        return errorMsg('密码不能为空')
    }
    return async dispatch => {
    const response = await reqRegister({user, pwd,type});//不需要password2
        const result = response.data;
        console.log(result.code)
        if(result.code === 0) {//成功
            console.log(result)
            //获取消息列表
            // getMsgList(dispatch, result.data._id);
            //分发成功的action
            dispatch(registerSuccess(result.data))
        } else {//失败
            //分发失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}

//登录
export const login = (data) => {
 
    const {user, pwd} = data;
    if(!user) {
        return errorMsg('用户名不能为空')
    } else if (pwd === '' ){
        return errorMsg('密码不能为空')
    }
    return async dispatch => {
    const response = await reqLogin({user, pwd});//不需要password2
        const result = response.data;
        console.log(result.code)
        if(result.code === 0) {//成功
            console.log(result)
            //获取消息列表
            // getMsgList(dispatch, result.data._id);
            //分发成功的action
            dispatch(registerSuccess(result.data))
        } else {//失败
            //分发失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}