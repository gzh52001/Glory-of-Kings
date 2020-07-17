import React from 'react'


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
            // this.state = {
            //     login:false, 
            // }
            // console.log(super(props));
        }
        componentDidMount(){
            let userInfo = localStorage.getItem('userInfo')
            // console.log(userInfo)
            if(userInfo){
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
            const {login} = this.state
            const {history} = this.props
            // console.log(login)
            if(login){
                // console.log(999)
                return super.render()
            }
            return <div>
                {
                    console.log('先登陆')
                }        
                先登陆先登陆先登陆先登陆先登陆先登
                陆先登陆先登陆先登陆先登陆先登陆先
                登陆先登陆先登陆先登陆先登陆                      
            </div>
        }
    }
}