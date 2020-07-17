import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import { withLogin } from '../../utils/userHoc'
import Headerr from '../Header'
import Siderr from '../Sider'
import Admin from '../../pages/Admin'
import User from '../../pages/User'
import Shop from '../../pages/Shop'
import ShopType from '../../pages/ShopType'
import Welcome from '../../pages/Welcome'
class Home extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Layout style={{ height: '780px' }}>
                    {/* 头部 */}
                    <Headerr />
                    <Layout>
                        {/* 侧边导航 */}
                        <Siderr />
                        <Layout style={{ padding: '0 24px 24px' }}>

                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            {/* content内容 */}
                            {/* <Contentt /> */}
                            <Switch>
                                <Route path="/home/admin" exact={true} component={Admin}></Route>
                                <Route path='/home/user' component={User} />
                                <Route path='/home/shop' component={Shop} />
                                <Route path='/home/shoptype' component={ShopType} />
                                <Route path='/home/welcome' component={Welcome} />
                                <Redirect from='/' to='/home/welcome' exact />
                                <Redirect to='/home/welcome'/>
                            </Switch>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default withLogin(Home)