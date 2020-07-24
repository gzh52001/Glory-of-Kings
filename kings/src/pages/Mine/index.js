import React, { Component } from 'react';
import { Grid ,List} from 'antd-mobile';
import Footer from '../Footer';

import './index.scss';
import Footer from '../Footer';
const Item = List.Item;

class Mine extends Component {


    state = {
        list: [
            {
                _val:<i className='iconfont icon-daifukuan' style={{
                    width: '28px',
                    height: '28px',
                    fontSize:'28px'
                    }}/>,
                i:'待付款'
            },
            {
                _val:<i className='iconfont icon-daifahuo' style={{
                    width: '28px',
                    height: '28px',
                    fontSize:'28px'
                    }}/>,
                i:'待发货'
            },
            {
                _val:<i className='iconfont icon-daishouhuo' style={{
                    width: '28px',
                    height: '28px',
                    fontSize:'28px'
                    }}/>,
                i:'待收获'
            },
            {
                _val:<i className='iconfont icon-daipingjia' style={{
                    width: '28px',
                    height: '28px',
                    fontSize:'28px'
                    }}/>,
                i:'待评价'
            },
            {
                _val:<i className='iconfont icon-xiaoshoutuihuanhuo' style={{
                    width: '28px',
                    height: '28px',
                    fontSize:'28px'
                    }}/>,
                i:'退换货'
            },
        ]
    }

    
    
    render() {
        const {list} = this.state;
        const data = list.map((item ,_val) => ({
            icon: item._val,
            text: item.i,
          }));
       
        return (
            <>              
                {
                    <div style={{background: "#fff"}}>
                        <div className='header'>
                            <a style={{display: 'block'}}>
                                <img src='https://shp.qlogo.cn/daoju/9999/9999_1/0'/>
                                <p>游客</p>
                            </a>                      
                        </div>                  
                        <a className='order-all' style={{display: 'block'}}>
                            <p>我的订单</p>
                            <p>全部订单</p>                       
                        </a>
                                         
                        <div>
                            <Grid data={data} activeStyle={false} 
                            columnNum={5}
                            hasLine={false}/>
                        </div>
                        <List>
                            <Item
                            thumb={<i className='iconfont icon-shoucang4'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >我的收藏</Item>
                            <Item
                            thumb={<i className='iconfont icon-youhuiqiaquan'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >优惠卡券</Item>
                            <Item
                            thumb={<i className='iconfont icon-dizhi'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >地址管理</Item>
                            <Item
                            thumb={<i className='iconfont icon-lingqu'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >领取中心</Item>
                            <Item
                            thumb={<i className='iconfont icon-20'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >订阅中心</Item>
                            <Item
                            thumb={<i className='iconfont icon-pingjia'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >我的评价</Item>
                            <Item
                            thumb={<i className='iconfont icon-wenti'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >常见问题</Item>
                            <Item
                            thumb={<i className='iconfont icon-erji'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >意见反馈</Item>
                            <Item
                            thumb={<i className='iconfont icon-gonggao'/>}
                            arrow="horizontal"
                            onClick={() => {}}
                            >商城公告</Item>                          
                        </List>
                        <Footer/>
                    </div> 
                }
                 {/* 底部导航路由 */}
                 <Footer />
            </>
        )
    }
}

export default Mine;