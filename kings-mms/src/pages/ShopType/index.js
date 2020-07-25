import React,{Component} from 'react';
import { Table,Button,Space,Form, Input, Radio,message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import http from '../../utils/http';
class ShopType extends Component{
    state = {
        columns: [
            {
                align:'center',
                title: '序号',
                dataIndex: 'id',
                width: 80,
            },
            {
                align:'center',
                title: '商品类型',
                dataIndex: 'username',
                width: 100,
            },
            {
                align:'center',
                title: '添加时间',
                dataIndex: 'pwd',
                width: 100,
            },
            {
                align:'center',
                title: '添加人',
                dataIndex: 'name',
                width: 130,
            },
            {
                align:'center',
                title: '备注',
                dataIndex: 'age',
                width: 80,
            },
            {
                align:'center',
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
        data:[],//类型表数据
        shopType:'',//类型名称input受控
        addUser:'',//添加人input受控

    }

    //类型名称input受控
    changeShopType = (e) =>{
        this.setState({
            shopType:e.target.value
        })
    }
    //添加人input受控
    changeAddUser = (e) =>{
        this.setState({
            addUser:e.target.value
        })
    }
    componentDidMount(){

    }
    //功能：搜索
    search = () =>{
        
    }

    //功能：新增而类型
    showModal = () =>{

    }
    //功能：重置搜索按钮
    onReset = () =>{
        this.setState({
            shopType:'',
            addUser:''
        })
    }
    render(){
        let { columns,shopType,addUser,data } = this.state
        return(
            <div>
                {/* 搜索表单 */}
                <Form layout='inline' className='search'>
                    <Form.Item label="账号">
                        <Input ref={(ele) => { this.shopType = ele}} value={shopType} onChange={this.changeShopType} placeholder="请输入所需查询的类型名称" />
                    </Form.Item>
                    <Form.Item label="姓名">
                        <Input ref={(ele) => { this.addUser = ele}} value={addUser} onChange={this.changeAddUser} placeholder="请输入所需查询的添加人" />
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
export default ShopType