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
import { Axios } from "axios";


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

export function regisger(data) {
    const {
        user,
        pwd,
        repeatpwd,
        type
    } = data;
    if (!user || !pwd || !repeatpwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('与原密码不一致')
    }
    return dispatch => {
        Axios.post('/users/register', {
            user,
            pwd,
            type
        }).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(registerSuccess({
                    user,
                    pwd,
                    type
                }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }

        })
    }


}