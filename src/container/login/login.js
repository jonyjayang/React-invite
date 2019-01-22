import React, { Component } from 'react';
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { login } from "../../redux/action-creators";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:""
        }
        this.register=this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register(){
        this.props.history.push('/register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleLogin() {
            console.log(this.state)
            this.props.login(this.state)
    }
    render(){
          const {redirectTo}=this.props.user;
          if(redirectTo){
              return (<Redirect to={redirectTo}></Redirect>)
          }
        return (
        <div>
            <Logo></Logo>
            <WingBlank>
                <List>
                    <InputItem  onChange={(v)=>{this.handleChange('user',v)}}>账号</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem  type="password" onChange={(v)=>{this.handleChange('pwd',v)}}>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </List>
            </WingBlank>
        </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),
    {login}
)(Login);