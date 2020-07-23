import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Footer from '../Footer';
import './index.scss';

class Shopcart extends Component {
    constructor(){
        super()
    }

    goto = (path) =>{
        //console.log(this.props);
        this.props.history.push(path);
    }


    render() {
        return (
            <div>
                <div className='com-msgbox'>
                    <i className='iconfont icon-gouwuchekong'/>
                    <p>购物车好空呀，快去选购吧~</p>
                    <div onClick={this.goto.bind(this, '/Fenlei')}>去逛逛</div>
                </div>
                <Footer/>
            </div>
        )
    }
}

Shopcart = withRouter(Shopcart);
export default Shopcart;