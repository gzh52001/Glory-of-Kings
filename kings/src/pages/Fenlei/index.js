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
                        <li></li>
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
