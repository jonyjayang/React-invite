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

import { axios } from "axios";
import {
    reqLogin,
    reqRegister,
    reqUpdateUser,
    reqUser,
    reqUserList,
    reqChatMsgList,
    reqReadMag
} from '../api';


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
    const response = await reqRegister({user, pwd, type});//不需要password2
        const result = response.data;
        console.log(result.code)
        if(result.code === 0) {//成功
            console.log(result.data)
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

