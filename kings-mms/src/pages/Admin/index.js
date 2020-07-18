import React, { Component } from 'react';
import { Table,Button } from 'antd';
import http,{request} from '../../utils/http';
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
                    dataIndex: <Button>2</Button>,
                    width: 120,
                }
            ],
            data: []
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
    
    render() {
        const { columns } = this.state
        const { data } = this.state
        return (
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
                scroll={{ y: 'calc(100vh - 37vh)' }}

            />
        )
    }
}
export default Admin