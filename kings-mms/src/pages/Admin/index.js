import React, { Component } from 'react';
import { Table,Button,Space,Form, Input, Radio,message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import http,{request} from '../../utils/http';
import './Admin.scss'
//import reqwest from 'reqwest'

//表单验证
const validateMessages = {
    required: "'${username2}' 是必选字段",
    // ...
  }
class Admin extends Component {
    
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
                    title: '账号',
                    dataIndex: 'username',
                    width: 100,
                },
                {
                    align:'center',
                    title: '密码',
                    dataIndex: 'pwd',
                    width: 100,
                },
                {
                    align:'center',
                    title: '姓名',
                    dataIndex: 'name',
                    width: 130,
                },
                {
                    align:'center',
                    title: '年龄',
                    dataIndex: 'age',
                    width: 80,
                },
                {
                    align:'center',
                    title: '电话',
                    dataIndex: 'phone',
                    width: 130,
                },
                {
                    align:'center',
                    title: '薪资',
                    dataIndex: 'pay',
                    width: 80,
                },
                {
                    align:'center',
                    title: '入职时间',
                    dataIndex: 'entryTime',
                    width: 120,
                },
                {
                    align:'center',
                    title: '地址',
                    dataIndex: 'address',
                    width: 120,
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
            data: [],
            username:'',//账户受控
            name:'',//姓名受控
            visible: false,//控制新增弹框
            destroyOnClose:false,//控制Modal数据销毁
            adminList:{//新增管理员数据受控
                id:'',
                username2:'',
                pwd:'',
                name2:'',
                age:'',
                phone:'',
                pay:'',
                address:''             
            },
            isAdd:false,//判断为增加或编辑模态框开关,false为增加，true为编辑
            //record:'',//点击编辑时，存取列数据
            
        }
    componentDidMount(){
        //包含搜索的ajax请求，数据列表渲染        
        this.search()   
    }
    search = async() =>{
        const {username,name} = this.state
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

    //功能：新增管理员弹框
    showModal = () => {
        this.setState({
          visible: true,
          destroyOnClose:false,
          isAdd:false
        });
      };
    //功能：账户input失去焦点，检测用户名是否存在
    checkName =async () =>{
        let {adminList} = this.state
        let {username2} = adminList
        // console.log('参数'+username2);
        try{
            let d = await http.get('/admin/checkname',{username2})
            // console.log(d)
            if(!d.flag){
                message.warning('亲！已有相同账号哦，请重新填写')
                this.setState({
                    adminList:{
                        username2:''
                    }
                })
            }
        }catch(err){
            console.log(err);
        }
    }
    //功能：提交新增表单，插入数据
    handleOk = async e => {
        // console.log(this.state);
        let {username2,pwd,name2,age,phone,pay,address} = this.state.adminList
        // console.log('参数列表'+username2,pwd,name2,age,phone,pay,address)
        // console.log('这是新增按钮')
        try{
            let d = await http.post('/admin/reg',{
                username2,
                pwd,
                name2,
                age,
                phone,
                pay,
                address
            })
            console.log(d);       
            if(d.flag){

                message.success('新增管理员成功哦！')
                this.search()
            }else{
                console.log(d.flag)
                message.warning('新增失败!')
            }
        }catch(err){
            console.log(err)
        }
        this.setState({
            visible: false,
            destroyOnClose:false,
            isAdd:false,
          });
      };
    
    handleCancel = e => {
        // console.log(e);
        this.setState({
          visible: false,
          destroyOnClose:true,
          isAdd:false,
          adminList:{//取消时令其为空，防止新增时存在
            username2:'',
            pwd:'',
            name2:'',
            age:'',
            phone:'',
            pay:'',
            address:''
        }
        });
      };
    //新增弹框列表受控
    changAdminList = (e) =>{
        e.persist()
        // console.log(e);
        // console.log(e.target.attributes);id
        // console.log(e.target.attributes.value);
        // console.log(e.target.attributes.id);
        // console.log(e);
        // this.setState({
        //     adminList[e.target.attributes.id]: e.target.attributes.value
        //     }          
        // })
        this.setState(data=>{
            // console.log(data.adminList);
            // console.log(e.target.id);
            // console.log(e.target.value);
            // console.log(e);
            // console.log(adminList[e.target.id]);
            data.adminList[e.target.id] = e.target.value
        })
        // console.log(this.state);

        
    }
    
    //功能：编辑弹框
    editItem = async (record) =>{
        let {id,username,pwd,name,age,phone,pay,address} = record
        // console.log(username);
        // console.log(record);
        //setState为异步
        await this.setState({           
            adminList:{
                id,
                username2:username,
                pwd,
                name2:name,
                age,
                phone,
                pay,
                address
            },
            visible: true,
            destroyOnClose:false,
            isAdd:true,
          });
        //   console.log(this.state.adminList)
        //   console.log(e);
    }
    //功能：编辑修改列表数据
    okEdit = async() =>{
        // console.log('编辑按钮')
        let {id,username2,pwd,name2,age,phone,pay,address} = this.state.adminList
        console.log('账号'+username2)
        try{
            let data = await http.put('/admin/edit',{
                id,
                username2,
                pwd,
                name2,
                age,
                phone,
                pay,
                address
            })
            console.log(data)
            if(data.flag){
                message.success('修改成功')
                this.search()
            }else{
                message.warning('修改失败')
            }
        }catch(err){
            console.log(err)
        }      
        this.setState({
            visible: false,
            destroyOnClose:false,
            isAdd:false,
            adminList:{//点击修改按钮时令其为空，防止新增时存在 
                id:'',
                username2:'',
                pwd:'',
                name2:'',
                age:'',
                phone:'',
                pay:'',
                address:''
            }
        });
    }
    render() {
        let { columns,username,name,data,adminList } = this.state
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
                        <Button type="primary" onClick={this.showModal}>新增</Button>
                        <Button type="primary" onClick={this.onReset}>重置</Button>
                    </Form.Item>
                </Form>
                {/* 管理员新增弹框 */}
                <Modal
                    destroyOnClose={this.state.destroyOnClose}
                    className='mod'
                    title={this.state.isAdd == true ? '编辑管理员' : '新增管理员'}
                    width={400}
                    visible={this.state.visible}
                    onOk={this.state.isAdd == true ? this.okEdit : this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText='取消'
                    okText={this.state.isAdd == true ? '修改' : '新增'}
                    >
                    <Form className='adminInput'>
                        <Form.Item label="账号" required='true' name='username2'>
                        <Input allowClear='true' defaultValue={adminList.username2} value={adminList.username2}  onChange={this.changAdminList.bind(this)} onBlur={this.checkName} name = 'username2' className='zh' placeholder='请输入账号' />
                        </Form.Item>
                        <Form.Item label="密码" required='true' name='pwd'>
                        <Input allowClear='true' defaultValue={adminList.pwd} value={adminList.pwd} onChange={this.changAdminList.bind(this)} name = 'pwd' type='password' className='pwd' placeholder='请输入密码' />
                        </Form.Item>
                        <Form.Item label="姓名" required='true' name='name2'>
                        <Input allowClear='true' defaultValue={adminList.name2} value={adminList.name2} onChange={this.changAdminList.bind(this)} name = 'name2' className='xm' placeholder='请输入姓名' />
                        </Form.Item>
                        <Form.Item label="年龄" style={{marginLeft:11}} name='age'>
                        <Input allowClear='true' defaultValue={adminList.age} value={adminList.age} onChange={this.changAdminList.bind(this)} name = 'age' className='nl' placeholder='请输入年龄' />
                        </Form.Item>
                        <Form.Item label="电话" required='true' name='phone'>
                        <Input allowClear='true' defaultValue={adminList.phone} value={adminList.phone} onChange={this.changAdminList.bind(this)} name = 'phone' className='dh' placeholder='请输入电话' />
                        </Form.Item>
                        <Form.Item label="薪资" style={{marginLeft:11}} name='pay'>
                        <Input allowClear='true' defaultValue={adminList.pay} value={adminList.pay} onChange={this.changAdminList.bind(this)} name = 'pay' className='xz' placeholder='请输入薪资' />
                        </Form.Item>
                        <Form.Item label="地址" style={{marginLeft:11}} name='address'>
                        <Input allowClear='true' defaultValue={adminList.address} value={adminList.address} onChange={this.changAdminList.bind(this)} name = 'address' className='dz' placeholder='请输入地址' />
                        </Form.Item>
                    </Form>
                </Modal>
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