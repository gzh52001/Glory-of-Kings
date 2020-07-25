import React,{lazy,Suspense} from 'react';
import {Route,withRouter,Switch,Redirect } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
// import Login from './components/Login'
// import Home from './components/Home'
// import NotFound from './components/NotFound'

const Home = lazy(() => import("./components/Home"))
const Login = lazy(() => import("./components/Home"))
const NotFound = lazy(() => import("./components/Home"))

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/notFound' component={NotFound} />
      <Redirect from='/' to='/login' exact />
      <Redirect to='/notFound'/>
      </Switch>
      </Suspense>
    </div>
  );
}
export default withRouter(App);
