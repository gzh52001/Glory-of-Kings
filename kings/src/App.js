import React from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';


import './icon/icon/iconfont.css'
import './App.css';

import Home from './pages/Home';
import Fenlei from './pages/Fenlei';
import Shopcart from './pages/Shopcart';
import Mine from './pages/Mine';
import Footer from './pages/Footer';

class App extends React.Component{
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
         <Footer/>
      </div>
      
    );
  }
}
App = withRouter(App);
export default App;
