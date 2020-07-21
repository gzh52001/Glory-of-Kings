import React, { Component } from 'react';
import Footer from '../Footer';

// 插件组件
import { Carousel, WingBlank } from 'antd-mobile';

class Shopcart extends Component {
    render() {
        return (
            <div>
                {/* 底部导航路由 */}
                <Footer />
            </div>
        )
    }
}

export default Shopcart;