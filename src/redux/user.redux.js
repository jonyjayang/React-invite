
import Axios from "axios";

const REGISTERSUCCESS='REGISTERSUCCESS';
const REGISTERFAILED='REGISTERFAILED';

const InitState={
    msg:'',
	user:'',
    type:'',
    isAuth:false

}

//reducer
export function user(state={InitState},action){
    switch(action.type){
        case REGISTERSUCCESS:
            return {...state,msg:"",isAuth:true,...action.payload}
        case REGISTERSUCCESS:
            return
        default:
            return state
        

    }
}

function registerSuccess(data){
    return{
        type:REGISTERSUCCESS,
        payload:data
    }

}
function errorMsg(msg){
	return { msg, type:REGISTERFAILED }
}

export function register(user,pwd,repeatpwd,type){
    if(!user||!pwd||!repeatpwd||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!=repeatpwd){
        return errorMsg('与原密码不一致')
    }
    return dispatch=>{
        Axios.post('/user/register',{user,pwd,type}).then((res)=>{
            if(res.status===200&&res.data.code===0){
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }

        })
    }
    

}