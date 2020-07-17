import React,{Component} from 'react';
import {Route,withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import {withLogin} from '../../utils/userHoc'
import Headerr from '../Header'
import Siderr from '../Sider'
import Contentt from '../Content'
class Home extends Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <Layout style={{height:'780px'}}>      
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
                    <Contentt />
                </Layout>
                </Layout>
            </Layout>
            </div>
        )
    }
}
export default Home