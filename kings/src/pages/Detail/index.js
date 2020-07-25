import React from 'react';
// 引入样式
import "./detail.css"

// 引入http.js文件
import http, { request } from '../../utils/http';

// 插件组件
import { Carousel, WingBlank } from 'antd-mobile';

class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            // data: ['https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg', 'https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg', 'https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181059_59759.jpg','https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201901/20190111181056_84365.jpg'],
            imgHeight: 700,

            data: {

            },
        }
    }
    componentDidMount() {
        // 发起ajax请求
        // console.log('Goods.props',this.props.match.params);
        const { id } = this.props.match.params
        const request = http.get('/shop/shopsingleList/' + id)
        request.then(res => {
            this.setState({
                data: res.data[0]
            })
        }).catch(ree => {
            console.log(ree);
        })
        // const { list } = this.state
        // const a = list.filter(item => {
        //     return item.detail_id == id.id
        // })
        // const [b] = a
        // this.setState({
        //     data:b
        // })        
    }


    // 点击返回
    goBack = () => {
        window.history.back(-1)
    }
    render() {
        const { data } = this.state
        // console.log(data);
        return (
            <div className="page-wrap">

                {/* 头部 */}
                <div className="fixedbar">
                    <a className="back" onClick={this.goBack}>
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

                            <div className="v-item" >
                                <img src={data.shopPic} alt="" />
                            </div>

                        </Carousel>
                    </WingBlank>
                    <div className="good-info">
                        <div className="base">
                            <div className="title">{data.shopName}</div>
                            <p className="sub-tit"></p>
                            <div className="price">
                                <div className="pribox">
                                    <span>¥ {data.nowPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img"></div>
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
                        <a >
                            <div className="cell">
                                <span className="kf"></span>
                                <p>客服</p>
                            </div>
                        </a>
                        <a >
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
