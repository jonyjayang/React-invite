import React, { Component } from 'react';
import Axios from 'axios';

class authroute extends Component {
    componentDidMount(){
        const publicList=['/login','/register'];
        const pathname=this.props.location.pathname;
        if(publicList.indexOf(pathname)>-1){
            return null;
        }

        Axios.get('/user/info').then((res)=>{
            if(res.status==200){
                // console.log(res.data)
                if(res.data.code==0){
                    
                }else{
                   this.props.history.push('/login')
                }
                console.log(res.data)         
            }
        })
        
        	// 是否登录
		// 现在的url地址  login是不需要跳转的

		// 用户的type 身份是boss还是牛人
		// 用户是否完善信息（选择头像 个人简介）
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default authroute;