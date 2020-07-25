import React from 'react';
import './Welcome.scss'

function Welcome(){
    return(
        <div className='welcome'>
            <h1 className='title'>欢迎使用聚诚品后台管理系统__王者荣耀</h1>
            <img className='bgimg' src={require('../../img/bgGirl.jpg')}></img>
        </div>
    )
}
export default Welcome