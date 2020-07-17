import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserAddOutlined, ShopOutlined, ShoppingOutlined,UsergroupAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
function Siderr(){
    return(
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserAddOutlined />} title="管理员信息管理">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ShopOutlined />} title="商品类型管理">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<ShoppingOutlined />} title="商品数据管理">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<UsergroupAddOutlined />} title="用户信息管理">
            <Menu.Item key="9">option13</Menu.Item>
            <Menu.Item key="10">option14</Menu.Item>
            <Menu.Item key="11">option15</Menu.Item>
            <Menu.Item key="12">option16</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
}
export default Siderr