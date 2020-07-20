import React from 'react';
// 引入样式
import "./fenlei.css"
import Footer from '../Footer';

class List extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
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
                            <a href="###" className="tab-filter">默认</a>
                        </li>
                        <li className="two">
                            <a href="###" className="tab-filter">
                                <span>分类</span>
                                <i></i>
                            </a>
                        </li>
                        <li className="three">
                            <a href="###" className="tab-filter">
                                <span>默认排序</span>
                                <i></i>
                            </a>
                        </li>
                        <li className="four">
                            <a href="###" className="tab-filter">
                                <span>全部</span>
                                <i></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 商品列表 */}
                <div className="goods-listbox"></div>

                {/* 底部导航路由 */}
                <Footer/>
            </div>
        )
    }
}

export default List;
