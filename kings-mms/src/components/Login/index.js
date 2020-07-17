import React,{Component} from 'react';
import {Form, Input, Button} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {withRouter } from 'react-router-dom'

import './Login.scss'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            pwd:''
        }
    }
    //用户名受控
    changeName = (e) =>{
        this.setState({
            username:e.target.value
        })
    }
    //密码受控
    changePwd = (e) =>{
        this.setState({
            pwd:e.target.value
        })
    }

    //登录
    login = () =>{
        const {history} = this.props
        let {username} = this.state
        let {pwd} = this.state
        let userInfo = localStorage.getItem('userInfo')
        if(userInfo){
            userInfo = JSON.parse(userInfo)
            if(userInfo.username === username && userInfo.pwd === pwd){
                alert('登录成功')
                history.push('./home')
            }else{
                alert('用户名或密码错误!')
            }
        }else{
            alert('用户名不存在哦！请先注册')
        }
    }
    render(){
        const {username} = this.state
        const {pwd} = this.state
        const {history} = this.props
        return(
            <div className="login">
            <div className="login-header">
                
                <h1>聚诚品后台管理系统</h1>
            </div>
            <div className="login-content">
                <div></div>
                <h2>用户登录</h2>

                <Form name="normal_login" className="login-form" initialValues={{remember: true,}}
                      >
                    {/* initialValue 输入框默认值 */}
                    <Form.Item name="username" initialValue="admin" >
                        <Input ref={(ele) =>{
                        this.username = ele
                    }} value={username} onChange={this.changeName} prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="用户名"/>
                    </Form.Item>

                    <Form.Item name="password" initialValue="admin" >
                        <Input.Password ref={(ele) =>{
                        this.pwd = ele
                    }} value={pwd} onChange={this.changePwd} prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                        placeholder="密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        )
    }
}

export default withRouter(Login)



