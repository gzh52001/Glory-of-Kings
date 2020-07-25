import React,{Component} from 'react';
import {Route,withRouter} from 'react-router-dom'
import { Layout, Menu} from 'antd'
import { UserAddOutlined, ShopOutlined, ShoppingOutlined,UsergroupAddOutlined,UnorderedListOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import Admin from '../../pages/Admin'
import User from '../../pages/User'
import Shop from '../../pages/Shop'
import ShopType from '../../pages/ShopType'
import Welcome from '../../pages/Welcome'
const {Sider } = Layout
class Siderr extends Component{
  constructor(){
    super()
    this.state = {
      siderList:[
        {
          key:'1',
          icon:<UnorderedListOutlined />,
          text:'欢迎光临',
          path:'/home/welcome'
        },
        {
          key:'2',
          icon:<UserAddOutlined />,
          text:'管理员信息管理',
          path:'/home/admin'
        },
        {
          key:'3',
          icon:<ShopOutlined />,
          text:'商品类型管理',
          path:'/home/shoptype'
        },
        {
          key:'4',
          icon:<ShoppingOutlined />,
          text:'商品数据管理',
          path:'/home/shop'
        },
        {
          key:'5',
          icon:<UsergroupAddOutlined />,
          text:'用户信息管理',
          path:'/home/user'
        }
      ]
    }
  }
  Jump = (path) =>{
    // console.log(path)
    const {history} = this.props
    // console.log(this.props);
    history.push(path)
  }
  render(){
    const {siderList} = this.state
    return(
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            siderList.map(item =>
            <Menu.Item key={item.key} icon={item.icon} onClick={this.Jump.bind(null,item.path)}>{item.text}</Menu.Item>
              )
          }
        </Menu>
        <Route path='/welcome' component={Welcome} />
        <Route path='/admin' component={Admin} />
        <Route path='/user' component={User} />
        <Route path='/shop' component={Shop} />
        <Route path='/shoptype' component={ShopType} />
      </Sider>
    )
    }
}
export default withRouter(Siderr)