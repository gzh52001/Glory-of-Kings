import React, { Component } from 'react';
// 引入样式
import './login.css'

// 引入http.js文件
import http, { request } from '../../utils/http';

class Login extends Component {
    // 数据
    constructor() {
        super()
        this.state = {
            xs: false,
        }
    }
    // 返回到列表页
    onchange = () => {
        const { history } = this.props;
        history.push({
            pathname: '/Fenlei',
        });
    }

    // 跳转到注册页面
    gotoReg = () => {
        const { history } = this.props;
        history.push({
            pathname: '/Reg',
        });
    }

    // 失去焦点发送请求:验证用户是否存在
    inputOnBlur = () => {
        const username = this.username.value;
        const pwd = this.password.value;
        const request = http.get('/user/checkname', {
            username: username,
        })
        request.then(res => {
            console.log(res);
        }).catch(ree => {
            console.log(ree);
        })
    }

    // 点击登入： 验证登入信息
    onReg = () => {
        const username = this.username.value;
        const pwd = this.password.value;

        const request = http.post('/user/login', {
            username: username,
            pwd: pwd
        })
        request.then(res => {
            // 验证成功跳转到首页 把用户信息存储到本地
            if (res.flag) {
                localStorage.setItem("username", username)
                // 跳转
                const { history } = this.props;
                history.push({
                    pathname: '/Home',
                });
            }
        }).catch(ree => {
            console.log(ree);
        })
    }
    render() {
        return (
            <div>
                <div>
                    {/* 点击返回 */}
                    <div className="head_lable">
                        <span className="span">登入</span>
                        <div className="returnBtn" onClick={this.onchange}></div>
                    </div>

                    {/* 账号和密码 */}
                    <div className="loginForm">
                        <div className="usname">
                            <span className="titl"></span>
                            <input className='inp' type="text" placeholder="用户名" ref={username => this.username = username} onBlur={this.inputOnBlur} />
                        </div>
                        {/* 提示 */}
                        <p className={this.state.xs ? "p" : "d"}>没有这个用户</p>
                        <div className="psw">
                            <span className="title"></span>
                            <input className="inpu" type="password" ref={password => this.password = password} placeholder="请输入密码" />
                        </div>

                        {/* 登入按钮 */}
                        <div className="log" onClick={this.onReg}>登录</div>

                        {/* 忘记密码 新用户注册 */}
                        <div className="mm">
                            <span className="wjmm">忘记密码</span>
                            <span className="dr" onClick={this.gotoReg}>新用户注册</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
