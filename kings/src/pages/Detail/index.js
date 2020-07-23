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
            list: [{
                "checked": false,
                "detail_id": 1,
                "name": "GSC野区小霸王迷你手办套装",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183858_94324.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183901_72511.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183905_64240.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183909_44268.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183912_75204.jpg"
                ],
                "pri": "188.00"
            },
            {
                "checked": false,
                "detail_id": 2,
                "name": "传说之刃花木兰Q版手办",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163212_26244.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163217_87719.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163221_51300.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612164516_37746.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612164522_52851.jpg"
                ],
                "pri": "168.00"
            },
            {
                "checked": false,
                "detail_id": 3,
                "name": "Myethos 游园惊梦甄姬手办",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144646_22807.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144652_26288.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144655_37800.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144708_18449.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144713_11013.jpg"
                ],
                "pri": "798.00"
            },
            {
                "checked": false,
                "detail_id": 4,
                "name": "千年之狐李白Q版手办",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135827_95564.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135830_51349.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135848_63799.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135851_45758.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135853_52254.jpg"
                ],
                "pri": "258.00"
            },
            {
                "checked": false,
                "detail_id": 5,
                "name": "黑白系列双层手机壳",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115842_15722.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115905_67107.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115910_92726.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115914_93166.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115920_48977.jpg"
                ],
                "pri": "69.00"
            },
            {
                "checked": false,
                "detail_id": 6,
                "name": "小英雄生活系列绕线器",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135617_40999.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135621_52782.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135626_38366.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135631_16300.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135636_59974.jpg"
                ],
                "pri": "19.00"
            },
            {
                "checked": false,
                "detail_id": 7,
                "name": "梦奇/庄周便携充电宝",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202003/20200326190255_89334.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201906/20190617090929_42807.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201906/20190617090931_97281.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201906/20190617090933_89398.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201906/20190617090935_47156.jpg"
                ],
                "pri": "139.00"
            },
            {
                "checked": false,
                "detail_id": 8,
                "name": "青莲剑仙双色充电宝李白款",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020112_57654.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020117_74481.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020121_33483.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020126_32601.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020131_71161.jpg"
                ],
                "pri": "159.00"
            },
            {
                "checked": false,
                "detail_id": 9,
                "name": "王者荣耀X不二生活 峡谷女神套装",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184340_55993.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184350_24981.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184356_60514.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184402_72322.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184406_43116.jpg"
                ],
                "pri": "198.00"
            },
            {
                "checked": false,
                "detail_id": 10,
                "name": "王者荣耀X不二生活 金属书签",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617163212_21384.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609182222_24647.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609182229_93381.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609182234_79565.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609182240_52544.jpg"
                ],
                "pri": "39.00"
            },
            {
                "checked": false,
                "detail_id": 11,
                "name": "王者荣耀不二生活 青莲剑仙-李白拼图",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617164315_33365.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612165408_53805.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612165415_75576.jpg"
                ],
                "pri": "39.00"
            },
            {
                "checked": false,
                "detail_id": 12,
                "name": "王者荣耀X不二生活 绝代智谋-诸葛亮笔记本套装",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617163438_54700.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617170727_94651.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617170737_27990.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617170742_78151.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617170747_66225.jpg"
                ],
                "pri": "138.00"
            },
            {
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
            {
                "checked": false,
                "detail_id": 14,
                "name": "缤纷独角兽小乔印花T恤",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200606220826_51296.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200606220831_61110.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200606200152_38850.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200606200155_40733.jpg"
                ],
                "pri": "138.00"
            },
            {
                "checked": false,
                "detail_id": 15,
                "name": "最强打野韩信印花T恤",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161425_55407.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161443_80210.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161455_59062.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161503_70611.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161512_50318.jpg"
                ],
                "pri": "138.00"
            },
            {
                "checked": false,
                "detail_id": 16,
                "name": "王者态度系列T恤-无坚不摧",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160909_32425.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160918_82368.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160927_22501.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160941_29865.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160950_40178.jpg"
                ],
                "pri": "138.00"
            }
            ],
            data: {
                "checked": false,
                "detail_id": 2,
                "name": "传说之刃花木兰Q版手办",
                "img": [
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163212_26244.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163217_87719.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163221_51300.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612164516_37746.jpg",
                    "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612164522_52851.jpg"
                ],
                "pri": "168.00"
            },
        }
    }
    componentDidMount() {
        // 发起ajax请求
        // console.log('Goods.props',this.props.match.params);
        const id = this.props.match.params
        const { list } = this.state
        const a = list.filter(item => {
            return item.detail_id == id.id
        })
        const [b] = a
        this.setState({
            data:b
        })        
    }


    // 点击返回
    goBack = () => {
        window.history.back(-1)
    }
    render() {
        const { data } = this.state
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
