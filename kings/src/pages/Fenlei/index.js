import React from 'react';
// 引入样式
import "./fenlei.css"
import Footer from '../Footer';

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [{
                "shop_id": "1",
                "type": "model",
                "name": "GSC野区小霸王迷你手办套装",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201912/20191220183858_94324.jpg",
                "new_pri": "188.00"
            },
            {
                "shop_id": "2",
                "type": "model",
                "name": "传说之刃花木兰Q版手办",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200612163212_26244.jpg",
                "new_pri": "168.00"
            },
            {
                "shop_id": "3",
                "type": "model",
                "name": "Myethos 游园惊梦甄姬手办",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190718144646_22807.jpg",
                "new_pri": "798.00"
            },
            {
                "shop_id": "4",
                "type": "model",
                "name": "千年之狐李白Q版手办",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135827_95564.jpg",
                "new_pri": "258.00"
            },
            {
                "shop_id": "5",
                "type": "digital",
                "name": "黑白系列双层手机壳",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114115842_15722.jpg",
                "new_pri": "69.00"
            },
            {
                "shop_id": "6",
                "type": "digital",
                "name": "小英雄生活系列绕线器",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202005/20200509135617_40999.jpg",
                "new_pri": "19.90"
            },
            {
                "shop_id": "7",
                "type": "digital",
                "name": "梦奇/庄周便携充电宝",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202003/20200326190255_89334.jpg",
                "new_pri": "139.00"
            },
            {
                "shop_id": "8",
                "type": "digital",
                "name": "青莲剑仙双色充电宝李白款",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201907/20190719020112_57654.jpg",
                "new_pri": "159.00"
            },
            {
                "shop_id": "9",
                "type": "periphery",
                "name": "王者荣耀X不二生活 峡谷女神套装",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200609184340_55993.jpg",
                "new_pri": "198.00"
            },
            {
                "shop_id": "10",
                "type": "periphery",
                "name": "王者荣耀X不二生活 金属书签",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617163212_21384.jpg",
                "new_pri": "39.00"
            },
            {
                "shop_id": "11",
                "type": "periphery",
                "name": "王者荣耀不二生活 青莲剑仙-李白拼图",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617164315_33365.jpg",
                "new_pri": "39.00"
            },
            {
                "shop_id": "12",
                "type": "periphery",
                "name": "王者荣耀X不二生活 绝代智谋-诸葛亮笔记本套装",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200617163438_54700.jpg",
                "new_pri": "138.00"
            },
            {
                "shop_id": "13",
                "type": "clothes",
                "name": "云端筑梦师庄周印花T恤",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200608141216_17934.jpg",
                "new_pri": "138.00"
            },
            {
                "shop_id": "14",
                "type": "clothes",
                "name": "缤纷独角兽小乔印花T恤",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200606220826_51296.jpg",
                "new_pri": "138.00"
            },
            {
                "shop_id": "15",
                "type": "clothes",
                "name": "最强打野韩信印花T恤",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605161425_55407.jpg",
                "new_pri": "138.00"
            },
            {
                "shop_id": "16",
                "type": "clothes",
                "name": "王者态度系列T恤-无坚不摧",
                "img": "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202006/20200605160909_32425.jpg",
                "new_pri": "138.00"
            }
            ]
        }
    }
    render() {
        const { list } = this.state
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
                            <a  className="tab-filter">默认</a>
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
                        <li>
                            <div className="list-link">
                                <div className="list-img">
                                    <img src='https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202001/20200114163344_50333.jpg' />
                                </div>
                                <div className="list-bd">
                                    <div className="name">
                                        <span>天美官方艺术典藏（修订版）</span>
                                    </div>
                                    <div className="price">
                                        <p className="new-pri">¥ 158.00</p>
                                        {/* <p className="old-pri">¥ 158.00</p> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        {
                            list.map(item=>
                                <li key={item.shop_id}>
                                    <div className="list-link">
                                        <div className="list-img">
                                            <img src={item.img} />
                                        </div>
                                        <div className="list-bd">
                                            <div className="name">
                                            <span>{item.name}</span>
                                            </div>
                                            <div className="price">
                                                <p className="new-pri">{item.new_pri}</p>
                                                {/* <p className="old-pri">¥ 158.00</p> */}
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
