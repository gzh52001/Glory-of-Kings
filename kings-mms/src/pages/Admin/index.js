import React, { Component } from 'react';
import { Table,Button,Space,Form, Input, Radio } from 'antd';
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
                    render: () => <Space size="middle">
                    <a>编辑</a>
                    <a>删除</a>
                  </Space>,
                    width: 120,
                }
                
            ],
            data: [],
            username:'',//账户受控
            name:''//姓名受控
        }
        async componentDidMount(){
            const {data} = await http.get('/admin/adminlist')
            console.log(data)
            
            // console.log(data[0].username)
            this.setState({
                data
            })
        }

    //ajax请求数据渲染列表
    //
    
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
    render() {
        const { columns,username,name } = this.state
        const { data } = this.state
        const { Column, ColumnGroup } = Table
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
                        <Button type="primary">查询</Button>
                        <Button type="primary">新增</Button>
                        <Button type="primary" onClick={this.onReset}>重置</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        pageSize: 20,
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