import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
// 引入样式
import "./home.css"
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
            home: [
                {
                    "home_id": "1",
                    "title": "精美手办",
                    "commodity": [
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201910/20191017152303_40971.jpg",
                            "name": "游园惊梦甄姬Q版手办",
                            "price": "258.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201811/20181113204748_63984.jpg",
                            "name": "恋之微风小乔Q版手办",
                            "price": "168.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201908/20190823100830_32945.jpg",
                            "name": "王都密探李元芳Q版手办",
                            "price": "168.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201902/20190219140910_60645.jpg",
                            "name": "诸葛亮可换表情可动粘土人手办",
                            "price": "278.00"
                        }
                    ]
                },
                {
                    "home_id": "2",
                    "title": "数码3C",
                    "commodity": [
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201911/20191106143506_64281.jpg",
                            "name": "小英雄3C系列Airpods透明保护套",
                            "price": "45.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201911/20191107150131_91871.jpg",
                            "name": "开黑系列手机数据线T型款-苹果",
                            "price": "49.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020112_57654.jpg",
                            "name": "青莲剑仙双色充电宝李白款",
                            "price": "159.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114140222_70882.jpg",
                            "name": "Q萌英雄双层手机壳",
                            "price": "68.00"
                        }
                    ]
                },
                {
                    "home_id": "3",
                    "title": "生活周边",
                    "commodity": [
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190916135819_58379.jpg",
                            "name": "绝代智谋 诸葛亮 骨瓷马克杯",
                            "price": "68.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201903/20190329215527_28359.jpg",
                            "name": "凤求凰李白竹语伞",
                            "price": "299.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114173759_57488.jpg",
                            "name": "Q萌金属钥匙扣",
                            "price": "29.90"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200103162515_61172.jpg",
                            "name": "王者招福开运礼盒",
                            "price": "88.00"
                        }
                    ]
                },
                {
                    "home_id": "4",
                    "title": "服装服饰",
                    "commodity": [
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719111011_65803.jpg",
                            "name": "Q萌表情三连拍印花T恤",
                            "price": "88.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201910/20191021133304_11066.jpg",
                            "name": "凤凰于飞王昭君华服",
                            "price": "549.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202004/20200417173559_54080.jpg",
                            "name": "Carry全场印花T恤",
                            "price": "138.00"
                        },
                        {
                            "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202004/20200417173204_39961.jpg",
                            "name": "王者态度系列T恤",
                            "price": "138.00"
                        }
                    ]
                }
            ]
        }
    }
    render() {
        const { img } = this.state
        const { home } = this.state
        return (
            <div className="box">

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

                {/* 列表 */}
                {
                    home.map(item => <div key={item.home_id} className="listbox">
                        <div className="list-tit">
                            <h3>
                                {item.title}
                            </h3>
                        </div>
                        <ul className="goods-list">
                            {
                                item.commodity.map(
                                    ite =>
                                        <li key={ite.name}>
                                            <div  className="list-link">
                                                <div className="list-img">
                                                    <img src={ite.img} />
                                                </div>
                                                <div className="list-bd">
                                                    <div className="name">
                                                        <span>{ite.name}</span>
                                                    </div>
                                                    <div className="price">
                                                        <p className="new-pri">￥{ite.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                )
                            }
                        </ul>
                    </div>)
                }

                {/* 底部 */}
                <div className="ach-more">
                    <div className="bt">
                        <span>查看全部商品</span>
                        <img src={require("../../assets/bottom_11.jpg")} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;