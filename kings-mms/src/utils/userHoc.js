import React from 'react'
import Login from '../components/Login'

//反向继承实现拦截，登录方可访问
export function withLogin(InnerComponent) {
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
            let user_key = localStorage.getItem('user_key')
            // console.log(user_key)
            if(user_key){
                //用户已登录，打开开关
                // console.log(666)
                this.setState({    
                    login:true
                })
            }
            //固定写法
            super.componentDidMount()
            // console.log(super())
        }
        render(){
            let {login} = this.state
            let {history} = this.props
            console.log(login)
            // console.log(login)
            if(login){
                // console.log(999)
                return super.render()
                history.push('/home')
                
            }
            return <div>
                先登录
                先登录
                先登录
                先登录
                先登录
            </div>
        }
    }
}