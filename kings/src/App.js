import React from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import './icon/icon/iconfont.css'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';


import Home from './pages/Home';
import Fenlei from './pages/Fenlei';
import Shopcart from './pages/Shopcart';
import Mine from './pages/Mine';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      selectedTab: '/Home',
      hidden: false,
      fullScreen: false,
    };
  }
  
  componentDidMount() {
    //console.log(this.props)
    const {location:{pathname}} = this.props;
     this.setState({
      selectedTab:pathname
     })
  }

  render() {
    return (    
      <div>
        
          <Switch>
              <Route path={'/Home'} component={Home}/>
              <Route path={'/Fenlei'} component={Fenlei}/>           
              <Route path={'/Shopcart'} component={Shopcart}/>
              <Route path={'/Mine'} component={Mine}/>
              <Redirect from={'/'} to={'/Home'} exact/>
          </Switch>
          <div 
            style={this.state.fullScreen = { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#333"
              barTintColor="white"
              // hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="/Home"
                icon={
                <div 
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize:'22px'
                }}
                className={'iconfont icon-icon4'}
                />
                }
                selected={this.state.selectedTab === '/Home'}
                selectedIcon={
                  <div 
                  style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'22px'
                  }}
                  className={'iconfont icon-icon4'}
                  />
                }
                onPress={() => {
                  this.setState({
                    selectedTab: '/Home',
                  });
                  this.props.history.push('/Home')
                }}
                >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                     }}
                     className={'iconfont icon-fenlei'}
                  />
                }   
                selected={this.state.selectedTab === '/Fenlei'}
                onPress={() => {
                  this.setState({
                    selectedTab: '/Fenlei',
                  });
                  this.props.history.push('/Fenlei')
                }}   
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                     }}
                     className={'iconfont icon-fenlei'}
                  />
                }                   
                title="分类"
                key="/Fenlei">
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                   }}
                   className={'iconfont icon-gouwuchekong'}
                  />
                } 
                selected={this.state.selectedTab === '/Shopcart'} 
                onPress={() => {
                  this.setState({
                    selectedTab: '/Shopcart',
                  });
                  this.props.history.push('/Shopcart')
                }} 
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                   }}
                   className={'iconfont icon-gouwuchekong'}
                  />
                }   
                title="购物车"
                key="/Shopcart">
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                   }}
                   className={'iconfont icon-robot'}
                   />
                }  
                selected={this.state.selectedTab === '/Mine'} 
                onPress={() => {
                  this.setState({
                    selectedTab: '/Mine',
                  });
                  this.props.history.push('/Mine')
                }}  
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'24px'
                   }}
                   className={'iconfont icon-robot'}
                   />
                }  
                title="我"
                key="/Mine">
              </TabBar.Item>
            </TabBar>
            </div>
      </div>
      
    );
  }
}
App = withRouter(App);
export default App;
