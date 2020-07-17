import React from 'react'
import { message } from 'antd'
import {withRouter} from 'react-router-dom'
import Login from '../components/Login'
//反向继承实现拦截，登录方可访问
export function withLogin (InnerComponent) {
    return class OuterComponent extends InnerComponent{
        constructor(){
            super()
            //用户状态开关
            if(!this.state){
                this.state = {}
            }
            this.state.login = false
        }
        componentDidMount(){
            let userInfo = localStorage.getItem('userInfo')
            console.log(userInfo)
            if(userInfo){
                //用户已登录，打开开关
                console.log(666)
                this.setState({
                    
                    login:true
                })
            }
            //固定写法
            super.componentDidMount()
        }
        info = () => {
            message.info('请先登陆哦');
            const {history} = this.props
            history.push('/login')
            // console.log(history)
            //this.props.history.push('/login')
          }
        render(){
            const {login} = this.state
            console.log(login)
            if(login){
                return super.render()
            }
            return <div>
                {
                    this.info()
                }
            </div>
        }
    }
}