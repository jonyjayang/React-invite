import React, { Component } from 'react';
import Logo from '../../components/logo/logo'
import {List, InputItem, WhiteSpace, Button,Radio} from 'antd-mobile'
import { connect } from "react-redux";
import {regisger} from '../../redux/action-creators'

class Register extends Component{
    constructor(props){
        super(props);
        this.handleRegister=this.handleRegister.bind(this);
        this.state={
            user:"",
            pwd:'',
            repeatpwd:'',
            type:'boss'
        }
    }
    handleRegister(){
        console.log(this.state)
       this.props.regisger(this.state)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const RadioItem=Radio.RadioItem
        return (
          <div>
                <Logo></Logo>
                <List>
                        <InputItem onChange={(v)=>{this.handleChange('user',v)}}>姓名</InputItem>
                        <InputItem onChange={(v)=>{this.handleChange('pwd',v)}} type="password">密码</InputItem>
                        <InputItem onChange={(v)=>{this.handleChange('repeatpwd',v)}} type="password">确认密码</InputItem>
                        <RadioItem 	onChange={()=>this.handleChange('type','boss')}  checked={this.state.type==='boss'}>BOSS</RadioItem>
                        <RadioItem 	onChange={()=>this.handleChange('type','genius')} checked={this.state.type==='genius'}>牛人</RadioItem>
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <Button type='primary' onClick={this.handleRegister}>注册 </Button>
                </List>
          </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),
    {regisger}
)(Register);