import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Footer from '../Footer';
// 引入样式
import "./home.css"

// 引入http.js文件
import http, { request } from '../../utils/http';
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            img: [
                "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094735_232852.jpg",
                "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094741_322028.jpg",
                "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094853_137630.jpg",
                "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094747_872520.jpg",
                "https://game.gtimg.cn/images/daojushop/zb/ad/202004/20200422094939_704763.png",
            ],

            data: [],
        }
    }

    // 发送请求拿数据
    componentWillMount() {
        const request = http.get('/shop/shoplistAll')
        request.then(res => {
            if (res.flag) {
                this.setState({
                    data: res.data,
                })
            }
        }).catch(ree => {
            console.log(ree);
        })
    }

    goto = () => {
        const { history } = this.props;
        history.push({
            pathname: '/Fenlei',
        });
    }

    // 跳转详情 传参
    toXq = (id) => {
        const { history } = this.props;
        history.push({
            pathname: '/Detail/' + id,
            // search: '?id=' + id,
        });
    }
    render() {
        const { img } = this.state
        const { data } = this.state
        return (
            <div className="box">
                {/* main */}
                <div className="main">
                    {/* 头部 */}
                    <header>
                        <div className="ico-mall">
                            <img src={require("../../assets/header-left_03.jpg")} />
                        </div>
                        <div className="noticebox">
                            <WingBlank>
                                <Carousel className="my-carousel"
                                    dots={false}
                                    dragging={false}
                                    swiping={false}
                                    autoplay
                                    infinite
                                    autoplayInterval={1500}
                                >
                                    <div className="v-item">王者荣耀周边商城手办热销中！白玉神驹合金车模</div>
                                    <div className="v-item">白玉神驹合金车模限量编号版名单公示与说明</div>
                                </Carousel>
                            </WingBlank>
                        </div>
                        <div className="ico-arrow">
                            <img src={require("../../assets/header-right_06.jpg")} />
                        </div>
                    </header>

                    {/* 轮播图 */}
                    <div className="slideshow">
                        <WingBlank>
                            <Carousel className="my-carousel"
                                dots={false}
                                dragging={false}
                                swiping={false}
                                autoplay
                                infinite
                                autoplayInterval={3000}
                                swipeSpeed={12}
                                dots
                            >
                                {
                                    img.map(item => <div key={item} className="v-item">
                                        <img src={item} />
                                    </div>)
                                }
                            </Carousel>
                        </WingBlank>
                    </div>

                    {/* tab */}
                    <div className="index-tab">
                        <li>
                            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418190939_668278.png" />
                            <span>全部周边</span>
                        </li>
                        <li>
                            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418190952_334384.png" />
                            <span>新品尝鲜</span>
                        </li>
                        <li>
                            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418191003_538284.png" />
                            <span>人气爆款</span>
                        </li>
                        <li>
                            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418191015_868942.png" />
                            <span>生活用品</span>
                        </li>
                    </div>

                    {/* 列表数据 */}
                    {
                        data.map((item, index) =>
                            <div className="listbox" key={index}>
                                <div className="list-tit">
                                    <h3>
                                        {item[index].shopType}
                                    </h3>
                                </div>
                                <ul className="goods-list">
                                    {
                                        item.map(ite =>
                                            <li key={ite.id} onClick={this.toXq.bind(null,ite.id)}>
                                                <div className="list-link">
                                                    <div className="list-img">
                                                        <img src={ite.shopPic} />
                                                    </div>
                                                    <div className="list-bd">
                                                        <div className="name">
                                                            <span>{ite.shopName}</span>
                                                        </div>
                                                        <div className="price">
                                                            <p className="new-pri">￥{ite.nowPrice}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }

                    {/* 底部 */}
                    <div className="ach-more">
                        <div className="bt" onClick={this.goto}>
                            <span>查看全部商品</span>
                            <img src={require("../../assets/bottom_11.jpg")} />
                        </div>
                    </div>
                </div>
                {/* 底部导航 */}
                <div className="bt">
                    <Footer />
                </div>

            </div>
        )
    }
}

export default Home;