import React,{Component} from 'react';
import { Table,Button,Space,Form, Input, Radio,message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import http,{request} from '../../utils/http';

class Shop extends Component{
    state = {
        columns: [
            {
                title: '序号',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '商品名称',
                dataIndex: 'shopName',
                width: 100,
            },
            {
                title: '商品编码',
                dataIndex: 'shopCard',
                width: 100,
            },
            {
                title: '当前价格',
                dataIndex: 'nowPrice',
                width: 130,
            },
            {
                title: '零售价',
                dataIndex: 'rePrice',
                width: 80,
            },
            {
                title: '进货价',
                dataIndex: 'purPrice',
                width: 130,
            },
            {
                title: '库存',
                dataIndex: 'num',
                width: 80,
            },
            {
                title: '商品类型',
                dataIndex: 'entryTime',
                width: 120,
            },
            {
                title:'商品图片',
                dataIndex:'',
                width:150,
                key:'shopPic',
                render:(record)=>{
                    return <img src={record.shopPic} alt="" style={{width:'5    0px',height:'50px',borderRadius:'50%'}}/>
                }
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render: (text,record,index) => <Space size="middle">
                <a onClick={this.editItem.bind(this,record)}>编辑</a>
                <a onClick={this.delItem.bind(this,record)}>删除</a>
              </Space>,
                width: 120,
            }              
        ],
        data: [],//商品列表数据
        shopName:'',//商品名称搜索受控
        shopType:'',//商品类型搜索受控
    }

    //功能：商品名称受控
    changeShopName = () =>{

    }
    //功能：商品类型受控
    changeShopType = () =>{
        
    }

    //功能：查询商品列表
    search = () =>{

    }
    //功能：新增商品
    showModal = () =>{

    }
    //功能：重置搜索按钮
    onReset = () =>{
        
    }
    render(){
        let { columns,shopName,shopType,data } = this.state
        return(
            <div>
                {/* 搜索表单 */}
                <Form layout='inline' className='search'>
                    <Form.Item label="商品名称">
                        <Input ref={(ele) => { this.shopName = ele}} value={shopName} onChange={this.changeShopName} placeholder="请输入所需查询的账号" />
                    </Form.Item>
                    <Form.Item label="商品类型">
                        <Input ref={(ele) => { this.shopType = ele}} value={shopType} onChange={this.changeShopType} placeholder="请输入所需查询的姓名" />
                    </Form.Item>
                    <Form.Item className='btn'>
                        <Button type="primary" onClick={this.search}>查询</Button>
                        <Button type="primary" onClick={this.showModal}>新增</Button>
                        <Button type="primary" onClick={this.onReset}>重置</Button>
                    </Form.Item>
                </Form>


                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        pageSize: 10,
                        position: ['bottomCenter'],
                        style: {
                            marginBottom: 0,

                        }
                    }}
                    scroll={{ y: 240 }}
                    bordered={true}
                    scroll={{ y: 'calc(100vh - 40vh)' }}
                />
            </div>
        )
    }
}
export default Shop