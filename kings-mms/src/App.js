import React from 'react';
import {Route,withRouter,Switch,Redirect } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Switch>
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/notFound' component={NotFound} />
      <Redirect from='/' to='/home' exact />
      <Redirect to='/notFound'/>
      </Switch>
    </div>
  );
}
export default withRouter(App);
