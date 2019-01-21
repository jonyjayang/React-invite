
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
import { getRedirectTo } from '../utils/index'
import { combineReducers } from 'redux';
const InitState={
    msg:'',
	user:'',
    type:'',
    isAuth:false,
    redirectTo:""

}

//reducer
export function user(state={InitState},action){
    switch(action.type){
        case AUTH_SUCCESS:
            const { type, avatar } = action.payload
            return {...state,redirectTo:getRedirectTo(type,avatar),msg:"",isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false, msg:action.msg}
        default:
            return state
        
    }
}

export default combineReducers({user})