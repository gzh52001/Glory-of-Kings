import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

import './Content.scss'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
function Contentt(){
    return(
        <div className='content_t'>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            Content
            </Content>
        </div>
    )
}
export default Contentt