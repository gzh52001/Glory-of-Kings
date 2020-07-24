const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { create, verify } = require('./token');

const router = express.Router();//router==app


/*
    * 管理员管理 adminRouter.js
            * 验证用户名是否存在
            * 注册
            * 登陆
            * 验证token
            * 修改信息
            * 删除用户
            * 删除多个用户
            * 查询用户列表(分页)
            * 查询uid为xx的用户信息
            * 上传用户头像
*/

//需要：验证管理员是否存在 /admin/checkname  一个请求里面只能有一个send否则会报错
router.get('/checkname', async (req, res) => {
    // console.log(6666);
    let { username2 } = req.query;
    // console.log('参数'+username2);
    try {
        let sql = `SELECT * FROM admin WHERE username='${username2}'`;
        // console.log(sql);
        let p = await query(sql);//[{},{}]
        // console.log(p)
        let inf = {}
        if (p.length) {
            //查到数据：不能注册
            inf = {
                code: 3000,
                flag: false,
                message: '用户名已存在，不能注册'
            }
        } else {
            //查不到数据:允许注册
            inf = {
                code: 2000,
                flag: true,
                message: '可以注册'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：管理员新增  /admin/reg
router.post('/reg', async (req, res) => {
    // console.log(6666);
    // console.log(req.body);
    let { username2, pwd,name2,age,phone,pay,address } = req.query;
    // console.log(req.query)
    // pwd == '' ? null : pwd
    // name2 == '' ? null : name2
    // age == '' ? null : age
    // phone == '' ? null : phone
    // pay == '' ? null : pay
    // address == '' ? null : address
    // if(age == ''){
    //     age = null
    // }
    // if(pay == ''){
    //     pay = null
    // }
    // if(address == ''){
    //     address = null
    // }
    // console.log(name, psw);
    try {
        let sql = `INSERT INTO admin(username, pwd,name,age,phone,pay,address) VALUES('${username2}','${pwd}','${name2}','${age}','${phone}','${pay}','${address}')`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        console.log('p'+p);
        if (p.affectedRows) { //受影响多少行 > 0 就是成功
            inf = {
                code: 2000,
                flag: true,
                message: '注册成功'
            }
        } else {
            inf = {
                code: 3000,
                flag: false,
                message: '注册失败'
            }
        }
        res.send(inf);//响应数据给前端 
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需要：管理员登陆 /admin/login
router.post('/login', async (req, res) => {
    let { username, pwd } = req.query;
    try {
        let sql = `SELECT * FROM admin WHERE username='${username}' and pwd='${pwd}'`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        if (p.length) {
            inf = {
                code: 2000,
                flag: true,
                message: '登录成功',
            }
        } else {
            inf = {
                code: 3000,
                flag: false,
                message: '登录失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求:验证token
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNDU2IiwiaWF0IjoxNTkzNTg1MDE5LCJleHAiOjE1OTQxODk4MTl9.TZ8s0Fs3eZYcWln-IsmQlRQcXfl7WTrGON5eJu-IgYo
router.get('/verify', (req, res) => {
    // console.log(6666);
    let { token } = req.query;
    let result = verify(token);
    let inf = {};
    if (result) {
        //校验成功
        inf = {
            code: 2000,
            flag: true,
            message: '校验成功'
        }
    } else {
        inf = {
            code: 3000,
            flag: false,
            message: '校验失败'
        }
    }
    res.send(inf);
});

//需求：管理员修改信息 UPDATE admin SET ? WHERE id=?
router.put('/edit', async (req, res) => {

    let {id,username2,pwd,name2,age,phone,pay,address} = req.query;
    // console.log('参数id'+id)
    console.log('参数列表'+id,username2,pwd,name2,age,phone,pay,address)
    try {
        // console.log(9999);
        let sql = `UPDATE admin SET username='${username2}',pwd='${pwd}',name='${name2}',age='${age}',phone='${phone}',pay='${pay}',address='${address}' WHERE id='${id}'`;
        let p = await query(sql);//[{},{}]
        console.log('这是sql'+sql);
        console.log('这是p'+p);
        let inf = {};
        if (p.affectedRows) {
            //修改成功
            inf = {
                code: 2000,
                flag: true,
                message: '修改成功'
            }
        } else {
            //修改失败
            inf = {
                code: 3000,
                flag: false,
                message: '修改失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：删除管理员 DELETE FROM admin WHERE id=
router.delete('/del/:id', async (req, res) => {
    let id = req.params.id;//获取uid
    try {
        // console.log(9999);
        let sql = `DELETE FROM admin WHERE id="${id}"`;
        console.log(sql)
        let p = await query(sql);//[{},{}]
        // console.log(p);
        let inf = {};
        if (p.affectedRows) {
            //删除成功
            inf = {
                code: 2000,
                flag: true,
                message: '删除成功'
            }
        } else {
            //删除失败
            inf = {
                code: 3000,
                flag: false,
                message: '删除失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：删除多个管理员 DELETE FROM userinf WHERE uid in(21,26,27)
router.delete('/delall/', async (req, res) => {
    let idstr = req.body.ids; // ids 是前端拼接好的uid的字符串，必须要拼接成 21,26,27
    try {
        // console.log(9999);
        let sql = `DELETE FROM admin WHERE id in(${idstr})`;
        let p = await query(sql);//[{},{}]
        // console.log(p);
        let inf = {};
        if (p.affectedRows) {
            //删除成功
            inf = {
                code: 2000,
                flag: true,
                message: '删除成功'
            }
        } else {
            //删除失败
            inf = {
                code: 3000,
                flag: false,
                message: '删除失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：查询管理员列表(含条件查询)
router.get('/adminlist', async (req, res) => {
    // console.log(req.query);
    let { username, name } = req.query
    // console.log('参数' + username, name)
    username = username ? username : ''
    name = name ? name : ''
    try {
        // console.log(666);
        let sql
        if (!username && !name) {
            sql = `SELECT * FROM admin`
        } else if(username && !name){
            sql = `SELECT * FROM admin WHERE username like "%${username}%"`
        } else if(!username && name){
            sql = `SELECT * FROM admin WHERE name like "%${name}%"`
        }else {
            sql = `SELECT * FROM admin WHERE username like "%${username}%" AND name like "%${name}%"`;
        }
        console.log(sql);
        let p = await query(sql);
        // console.log('sql' + sql)
        // console.log(p)
        //let sql2 = `SELECT * FROM admin`;
        //let arr = await query(sql2);//所有的数据 []
        let inf = {};
        if (p.length) {
            inf = {
                code: 2000,
                flag: true,
                message: '查询成功',
                username,
                name,
                data: p
            }
        } else {
            inf = {
                code: 3000,
                flag: false,
                message: '查询失败'
            }
        }

        res.send(inf);
    } catch (err) {
        console.log(77889);
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：查询id为xx的用户信息  SELECT * FROM userinf WHERE uid=31
//  /user/user/
router.get('/admin/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let sql = `SELECT * FROM admin WHERE id=${id}`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        if (p.length) {
            //查到数据：查询成功
            inf = {
                code: 2000,
                flag: true,
                message: '查询成功',
                data: {
                    p
                }
            }
        } else {
            //查不到数据:不能登录
            inf = {
                code: 3000,
                flag: false,
                message: '查询成功'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

module.exports = router;