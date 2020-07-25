const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { create, verify } = require('./token');

const router = express.Router();//router==app



//需求：查询商品类型列表(含条件查询)
router.get('/shopTypelist', async (req, res) => {
    let { shopType, addUser } = req.query
    shopType = shopType ? shopType : ''
    addUser = addUser ? addUser : ''
    try {
        // console.log(666);
        let sql
        if (!shopType && !addUser) {
            sql = `SELECT * FROM shoptype`
        } else if(shopType && !addUser){
            sql = `SELECT * FROM shoptype WHERE shopType like "%${shopType}%"`
        } else if(!shopType && addUser){
            sql = `SELECT * FROM shoptype WHERE addUser like "%${addUser}%"`
        }else {
            sql = `SELECT * FROM shoptype WHERE shopType like "%${shopType}%" AND addUser like "%${addUser}%"`;
        }
        console.log(sql);
        let p = await query(sql);
        let inf = {};
        if (p.length) {
            inf = {
                code: 2000,
                flag: true,
                message: '查询成功',
                shopType,
                addUser,
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

//需求：删除某条商品类型 DELETE FROM shoptype WHERE id=
router.delete('/shopTypeDel/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let sql = `DELETE FROM shoptype WHERE id="${id}"`;
        console.log(sql)
        let p = await query(sql);
        let inf = {};
        if (p.affectedRows) {
            inf = {
                code: 2000,
                flag: true,
                message: '删除成功'
            }
        } else {
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

module.exports = router;
































