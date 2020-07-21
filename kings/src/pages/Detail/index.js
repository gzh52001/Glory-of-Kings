import React from 'react';
// 引入样式
import "./detail.css"

// 插件组件
import { Carousel, WingBlank } from 'antd-mobile';

class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            // data: ['https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg', 'https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg', 'https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg','https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181056_84365.jpg'],
            imgHeight: 700,
            data: {
                "checked": false,
                "detail_id": 13,
                "name": "云端筑梦师庄周印花T恤",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141216_17934.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141224_47100.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141231_80932.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141236_82834.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141303_17205.jpg"
                ],
                "pri": "138.00"
            },
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className="page-wrap">

                {/* 头部 */}
                <div className="fixedbar">
                    <a href="" className="back">
                        <i></i>
                    </a>
                    <div className="cate">
                        <div className="item item-cur">
                            <span>商品</span>
                        </div>
                        <div className="item">
                            <span>评价</span>
                        </div>
                        <div className="item">
                            <span>详情</span>
                        </div>
                        <div className="cate-right">
                            <a href="/Shopcart" className="cate-cart">
                                <i></i>
                            </a>
                            <a href="" className="cate-class">
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* main */}
                <div className="hasfixedbar">
                    <WingBlank>
                        <Carousel className="my-carousel"
                            dots={true}
                            dragging={true}
                            autoplay={true}
                            infinite={true}
                        >
                            {
                                data.img.map(item =>
                                    <div className="v-item" key={item}>
                                        <img src={item} alt="" />
                                    </div>
                                )
                            }

                        </Carousel>
                    </WingBlank>
                    <div className="good-info">
                        <div className="base">
                            <div className="title">{data.name}</div>
                            <p className="sub-tit"></p>
                            <div className="price">
                                <div className="pribox">
                                    <span>¥ {data.pri}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img"></div>
                    {/* 空白 */}
                    <div className="kb"></div>
                </div>

                {/* 底部 */}
                <div className="good-action">
                    <div className="left">
                        <a href="/Home">
                            <div className="cell">
                                <span></span>
                                <p>首页</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="cell">
                                <span className="kf"></span>
                                <p>客服</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="cell">
                                <span className="sc"></span>
                                <p>收藏</p>
                            </div>
                        </a>
                    </div>
                    <div className="right">
                        <div className="jrgwc">
                            <span>加入购物车</span>
                        </div>
                        <div className="ljgm">立即购买</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
