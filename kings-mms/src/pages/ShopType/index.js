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
                dataIndex: 'shopType',
                width: 100,
            },
            {
                align:'center',
                title: '添加时间',
                dataIndex: 'addTime',
                width: 100,
            },
            {
                align:'center',
                title: '添加人',
                dataIndex: 'addUser',
                width: 130,
            },
            {
                align:'center',
                title: '备注',
                dataIndex: 'commit',
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
        this.search()
    }
    //功能：搜索
    search = async() =>{
        const {shopType,addUser} = this.state
        const data = await http.get('/shopType/shopTypelist',{
            shopType,
            addUser
        })
        if(!data.flag){
            message.warning('查无此数据!')
        }
        this.setState({
            data:data.data
        })
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
    //功能：编辑数据
    editItem = () =>{

    }
    //功能：删除数据
    delItem = (record) =>{
        Modal.confirm({
            title: '提示!',
            icon: <ExclamationCircleOutlined />,
            content: '确定商品数据中无此类型才能删除哦！！！！不然打屁股',
            okText: '确认',
            cancelText: '取消',
            onOk:async() =>{
              let d = await http.remove('/shopType/shopTypeDel/'+ record.id)
              if(d.flag){
                  message.success('删除成功!')
                  this.search()
              }else{
                  message.error('删除失败!')
                  } 
              }
          });
    }
    render(){
        let { columns,shopType,addUser,data } = this.state
        return(
            <div>
                {/* 搜索表单 */}
                <Form layout='inline' className='search'>
                    <Form.Item label="账号">
                        <Input ref={(ele) => { this.shopType = ele}} value={shopType} onChange={this.changeShopType} placeholder="请输入所需查询的商品类型名称" />
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