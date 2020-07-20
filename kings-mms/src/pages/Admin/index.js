import React, { Component } from 'react';
import { Table,Button,Space,Form, Input, Radio,message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import http,{request} from '../../utils/http';
import './Admin.scss'
//import reqwest from 'reqwest'

class Admin extends Component {
    
        state = {
            
            columns: [
                {
                    title: '序号',
                    dataIndex: 'id',
                    width: 80,
                },
                {
                    title: '账号',
                    dataIndex: 'username',
                    width: 120,
                },
                {
                    title: '姓名',
                    dataIndex: 'name',
                    width: 130,
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    width: 80,
                },
                {
                    title: '电话',
                    dataIndex: 'phone',
                    width: 130,
                },
                {
                    title: '薪资',
                    dataIndex: 'pay',
                    width: 80,
                },
                {
                    title: '入职时间',
                    dataIndex: 'entryTime',
                    width: 120,
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    width: 120,
                },
                {
                    title: '操作',
                    dataIndex: '',
                    key: 'x',
                    render: (text,record,index) => <Space size="middle">
                    <a>编辑</a>
                    <a onClick={this.delItem.bind(null,record)}>删除</a>
                  </Space>,
                    width: 120,
                }              
            ],
            data: [],
            username:'',//账户受控
            name:'',//姓名受控
            visible: false
        }
    componentDidMount(){
        //包含搜索的ajax请求，数据列表渲染        
        this.search()   
    }
    search = async() =>{
        const {username,name } = this.state     
        const data = await http.get('/admin/adminlist',{
            username,
            name
        })
        if(data.flag){
            
        }else{
            message.warning('查无此数据!')
        }
        // console.log('参数'+username+name)
        // console.log(this.props)
        this.setState({
            data:data.data
        })
        // console.log('触发了')
    }
    //账户input受控
    changeUserName = (e) =>{
        this.setState({
            username:e.target.value
        })
    }
    //姓名input受控
    changeName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    //重置按钮功能
    onReset = () => {
        this.setState({
            username:'',
            name:''
        })
      }
    //功能：删除某条数据
    delItem=(record)=> {
        Modal.confirm({
          title: '提示!',
          icon: <ExclamationCircleOutlined />,
          content: '您确定要删除吗？',
          okText: '确认',
          cancelText: '取消',
          onOk:async() =>{
            let d = await http.remove('/admin/del/'+ record.id)
            if(d.flag){
                message.success('删除成功!')
                this.search()
            }else{
                message.error('删除失败!')
                } 
            }
        });
      }
    render() {
        const { columns,username,name } = this.state
        const { data } = this.state
        return (
            <div>
                {/* 搜索表单 */}
                <Form layout='inline' className='search'>
                    <Form.Item label="账号">
                        <Input ref={(ele) => { this.username = ele}} value={username} onChange={this.changeUserName} placeholder="请输入所需查询的账号" />
                    </Form.Item>
                    <Form.Item label="姓名">
                        <Input ref={(ele) => { this.name = ele}} value={name} onChange={this.changeName} placeholder="请输入所需查询的姓名" />
                    </Form.Item>
                    <Form.Item className='btn'>
                        <Button type="primary" onClick={this.search}>查询</Button>
                        <Button type="primary">新增</Button>
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
export default Admin