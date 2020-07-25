import React, { Component } from 'react';
// 弹窗组件

// 引入http.js文件
import http, { request } from '../../utils/http';

// 引入样式文件
import './reg.css'

class Reg extends Component {
    // 点击返回上一页
    onchange() {
        window.history.back(-1)
    }
   
    // 点击注册
    search = () => {
        console.log(123);
        const pwd = this.password.value;
        const username = this.username.value;
        console.log('账号' + username, '密码' + pwd);

        const request = http.post('/user/reg', {
            username: username,
            pwd: pwd
        })

        // 注册成功跳转到登入页
        request.then(res => {
            if (res.flag) {
                // localStorage.setItem("username", username)
                // 跳转
                const { history } = this.props;
                history.push({
                    pathname: '/Login',
                });
            }
        }).catch(ree => {
            console.log(ree);
        })
    }

    render() {
        return (
            <div>
                {/* 点击返回 */}
                <div className="head_lable">
                    <span className="span">注册</span>
                    <div className="returnBtn" onClick={this.onchange}></div>
                </div>

                {/* 账号和密码 */}
                <div className="loginForm">
                    <div className="usname">
                        <span className="titl"></span>
                        <input className='inp' type="text" placeholder="用户名" ref={username => this.username = username} />
                    </div>

                    <div className="psw">
                        <span className="title"></span>
                        <input className="inpu" type="password" placeholder="请输入密码" ref={password => this.password = password} />
                    </div>


                    {/* 注册按钮 */}
                    <div className="log" onClick={this.search.bind(null)}>注册</div>
                </div>
            </div>
        )
    }
}
export default Reg;