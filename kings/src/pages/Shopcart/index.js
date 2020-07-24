import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
// 弹窗组件
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';


import Footer from '../Footer';
import './shopcart.css';

class Shopcart extends Component {
    state = {
        data: [{
            "cart_id": "3",
            "checked": false,
            "name": "Myethos 游园惊梦甄姬手办",
            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144646_22807.jpg",
            "new_pri": "798.00",
            "buy_num": "1"
        },
        {
            "cart_id": "4",
            "checked": false,
            "name": "千年之狐李白Q版手办",
            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135827_95564.jpg",
            "new_pri": "258.00",
            "buy_num": "1"
        },
        {
            "cart_id": "5",
            "checked": false,
            "name": "黑白系列双层手机壳",
            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115842_15722.jpg",
            "new_pri": "69.00",
            "buy_num": "1"
        },
        {
            "cart_id": "6",
            "checked": false,
            "name": "小英雄生活系列绕线器",
            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135617_40999.jpg",
            "new_pri": "19.90",
            "buy_num": "1"
        }],
        che: true,
        redirect: false,
    }
    onCheck = () => {
        const { che } = this.state
        this.setState({
            che: !che
        })
    }
    // 阶段判断localStorage中是否已经存在用户信息
    componentWillMount() {
        if (localStorage.getItem("username")) {
            console.log("已经登陆过了");
            this.setState({ redirect: true });
        } else {
            console.log("没有登录跳转到登入页")
            const { history } = this.props;
            alert("没有登录跳转到登入页")
            history.push({
                pathname: '/Login',
            });
        }
    }


    // showAlert = () => {
    //     const alertInstance = alert('Delete', 'Are you sure???', [
    //         { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    //         { text: 'OK', onPress: () => console.log('ok') },
    //     ]);
    //     setTimeout(() => {
    //         // 可以调用close方法以在外部close

    //         alertInstance.close();
    //     }, 500000);
    // };
    render() {
        const { che } = this.state
        const { data } = this.state
        return (
            <div>
                <div className="cart-item">

                    {/* 供应商 */}
                    <div className="item-hd">
                        <a className="btn-check" onClick={this.onCheck}>
                            <i className={che ? 'i-checked' : 'i-check'}></i>
                        </a>
                        <div className="item-hdimg">
                            <img src="https://game.gtimg.cn/images/daoju/base/logo/biz/yxzj.png" alt="" />
                        </div>
                        <p className="item-hdname">王者荣耀供应商：官方商城</p>
                    </div>

                    {/* 购物车商品详情 */}
                    {
                        data.map(item =>
                            <div className="item-order" key={item.cart_id}>
                                <div className="good-item">
                                    <a className="btn-check" onClick={this.onCheck}>
                                        <i className={che ? 'i-checked' : 'i-check'}></i>
                                    </a>
                                    <div className="good-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="good-info">
                                        <a className="info-name">{item.name}</a>
                                        <span className="info-size">款式：现货 </span>
                                        <p className="info-tip"></p>
                                        <div className="info-bd">
                                            <div className='info-price'>
                                                <h4>¥ {item.new_pri}</h4>
                                            </div>
                                            <div className='amount-counter'>
                                                <a className="amount-minus">-</a>
                                                <input className="amount-text" type="number" defaultValue={item.buy_num} />
                                                <a className="amount-plus">+</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* <div className="item-order">
                        <div className="good-item">
                            <a className="btn-check" onClick={this.onCheck}>
                                <i className={che ? 'i-checked' : 'i-check'}></i>
                            </a>
                            <div className="good-img">
                                <img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114163344_50333.jpg" alt="" />
                            </div>
                            <div className="good-info">
                                <a class="info-name">天美官方艺术典藏（修订版）</a>
                                <span className="info-size">类型：修订版 </span>
                                <p class="info-tip"></p>
                                <div className="info-bd">
                                    <div className='info-price'>
                                        <h4>¥ 158.00</h4>
                                    </div>
                                    <div className='amount-counter'>
                                        <a className="amount-minus">-</a>
                                        <input className="amount-text" type="number" />
                                        <a className="amount-plus">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* 结算 */}
                    <div className="cart-btnbox"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

Shopcart = withRouter(Shopcart);
export default Shopcart;