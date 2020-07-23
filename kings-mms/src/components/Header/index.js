import React from 'react';

import { Layout,Row, Col, Menu,Dropdown,Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './Header.scss'


const { Header } = Layout
function Headerr(){

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="#">
              信息修改
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="#">
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