import React from 'react';

import { Layout,Row, Col, Menu,Dropdown,Avatar,message,Modal } from 'antd'
import { UserOutlined,ExclamationCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import storage from '../../utils/storage';
import './Header.scss'


const { Header } = Layout
function Headerr(props){

  //功能：弹出退出登陆提示界面
  const loginOutYes = () => {
    Modal.confirm({
      title: '提示!',
      icon: <ExclamationCircleOutlined />,
      content: '您确定要退出吗？',
      okText: '确认',
      cancelText: '取消',
      onOk:async() =>{
          await storage.removeUser()
          const key = storage.getUser()
          if(key){
            message.success('退出成功！')
            props.history.push('/login')
          }else{
            message.warning('退出失败！')
          }
        }        
    });
  }

  //功能：退出登陆
  const loginOut = async () =>{
    
  }
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="#">
              信息修改
            </a>
          </Menu.Item>
          <Menu.Item>
            <a onClick={loginOutYes}>
              退出
            </a>
          </Menu.Item>
        </Menu>
      )
    return(
        <Header className="header">
            <Row>
                <Col span='18'>
                    <div className='logo'>
                        <img src={require('../../img/ico-comm5.png')} />
                        <img src={require('../../img/logo-yxzj.png')} />
                    </div>
                </Col>
                <Col span='6' className='userInfo'>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Avatar size={64} icon={<UserOutlined />} />
                </Dropdown>
                </Col>
            </Row>
        
        </Header>
    )
}
export default Headerr