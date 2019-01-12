import React, { Component } from 'react';
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
class Login extends Component{
    constructor(props){
        super(props);
        this.register=this.register.bind(this);
    }
    register(){
        this.props.history.push('/register')
    }
    
    render(){
        return (
        <div>
            <Logo></Logo>
            <WingBlank>
                <List>
                    <InputItem>账号</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </List>
            </WingBlank>
        </div>
        )
    }
}
export default Login