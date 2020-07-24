const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { create, verify } = require('./token');

const router = express.Router();//router==app


//需求：验证用户是否存在 /user/checkname
router.get('/checkname', async (req, res) => {
    let { username } = req.query;
    try {
        let sql = `SELECT * FROM user WHERE username='${username}'`;
        let p = await query(sql);
        let inf = {}
        if (p.length) {
            inf = {
                code: 3000,
                flag: false,
                message: '用户名已存在，不能注册'
            }
        } else {
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

//需求：用户新增  /user/reg
router.post('/reg', async (req, res) => {
    let { username, pwd,name,birthday,phone,balance,integral,payType,address } = req.query;
    //console.log(''+username, pwd,name,phone,address);
    try {
        let sql = `INSERT INTO user(username,pwd,name,birthday,phone,balance,integral,payType,address) VALUES('${username}','${pwd}','${name}','${birthday}','${phone}','${balance}','${integral}','${payType}','${address}')`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        console.log('p'+p);
        if (p.affectedRows) {
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

//需要：用户登陆 /user/login
router.post('/login', async (req, res) => {
    let { username, pwd } = req.query;
    console.log('参数'+username, pwd);
    try {
        let sql = `SELECT * FROM user WHERE username='${username}' and pwd='${pwd}'`;
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

module.exports = router

















