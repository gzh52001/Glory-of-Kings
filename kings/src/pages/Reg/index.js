import React, { Component } from 'react';
// 引入样式文件
import './reg.css'

class Reg extends Component {
    onchange() {
        window.history.back(-1)
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
                        <input className='inp' type="text" placeholder="用户名" />
                    </div>

                    <div className="psw">
                        <span className="title"></span>
                        <input className="inpu" type="text" placeholder="请输入密码" />
                    </div>

                    {/* 登入按钮 */}
                    <div className="log">注册</div>

                    {/* 忘记密码 新用户注册
                    <div className="mm">
                        <span className="wjmm">忘记密码</span>
                        <span className="dr">新用户注册</span>
                    </div> */}
                </div>


            </div>
        )
    }
}

export default Reg;