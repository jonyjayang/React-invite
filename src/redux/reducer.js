
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
import { combineReducers } from 'redux';
const InitState={
    msg:'',
	user:'',
    type:'',
    isAuth:false

}

//reducer
export function user(state={InitState},action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state,msg:"",isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false, msg:action.msg}
        default:
            return state
        
    }
}

export default combineReducers({user})