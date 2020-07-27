import React from 'react';
// 引入样式
import "./fenlei.css"
import Footer from '../Footer';

// 引入http.js文件
import http, { request } from '../../utils/http';

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{
                "id": 2,
                "shopName": "Myethos 游园惊梦甄姬手办",
                "shopCard": "s00220200724",
                "nowPrice": "258",
                "rePrice": "278",
                "purPrice": "218",
                "num": "99",
                "shopType": "精美手办",
                "shopPic": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201910/20191017152303_40971.jpg"
            }]
        }
    }

    // 点击跳转
    goto = (shop_id) => {
        const { history } = this.props;
        history.push({
            pathname: '/Detail/' + shop_id,
            // search: '?id=' + id,
        });
    }

    // 发送请求拿数据
    componentWillMount() {
        const request = http.get('/shop/shoplist')
        request.then(res => {
            if (res.flag) {
                this.setState({
                    data: res.data,
                })
            }
            // console.log(res.data);
        }).catch(ree => {
            console.log(ree);
        })
    }

    render() {
        const { data } = this.state
        return (
            <div className="list">
                {/* 头部搜索框 */}
                <div className="search-bar">
                    <a className="btn-search" title="搜索"></a>
                </div>

                {/* 下拉菜单 */}
                <div className="class-tab">
                    <ul>
                        <li className="one">
                            <a className="tab-filter">默认</a>
                        </li>
                        <li className="two">
                            <a className="tab-filter">
                                <span>分类</span>
                                <i></i>
                            </a>
                        </li>
                        <li className="three">
                            <a className="tab-filter">
                                <span>默认排序</span>
                                <i></i>
                            </a>
                        </li>
                        <li className="four">
                            <a className="tab-filter">
                                <span>全部</span>
                                <i></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 商品列表 */}
                <div className="goods-listbox">
                    <ul className="goods-list">
                        {
                            data.map(item =>
                                <li key={item.id} onClick={this.goto.bind(null, item.id)}>
                                    <div className="list-link">
                                        <div className="list-img">
                                            <img src={item.shopPic} />
                                        </div>
                                        <div className="list-bd">
                                            <div className="name">
                                                <span>{item.shopName}</span>
                                            </div>
                                            <div className="price">
                                                <p className="new-pri">¥ {item.nowPrice}</p>
                                                <p className="old-pri">¥ {item.rePrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>)
                        }
                    </ul>
                </div>

                {/* 底部导航路由 */}
                <div className="bt">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default List;
