import React, { Component } from 'react';
import Footer from '../Footer';

// 引入样式文件
import './shopcart.css'

// 插件组件
import { Carousel, WingBlank } from 'antd-mobile';

class Shopcart extends Component {
    state = {
        data:{
            "cart_id": "1",
            "checked": false,
            "name": "GSC野区小霸王迷你手办套装",
            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183858_94324.jpg",
            "new_pri": "188.00",
            "buy_num": "1"
        }
    }
    render() {
        return (
            <div>
                <div className="cart-item">

                    {/* 供应商 */}
                    <div className="item-hd">
                        <a className="btn-check">
                            <i className="i-check i-checked"></i>
                        </a>
                        <div className="item-hdimg">
                            <img src="https://game.gtimg.cn/images/daoju/base/logo/biz/yxzj.png" alt=""/>
                        </div>
                        <p className="item-hdname">王者荣耀供应商：官方商城</p>
                    </div>

                    {/* 购物车商品详情 */}
                    <div className="item-order"></div>

                    {/* 结算 */}
                    <div className="cart-btnbox"></div>
                </div>


                {/* 底部导航路由 */}
                <Footer />
            </div>
        )
    }
}

export default Shopcart;