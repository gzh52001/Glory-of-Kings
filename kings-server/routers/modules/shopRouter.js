const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { create, verify } = require('./token');

const router = express.Router();//router==app


//需求：查询商品列表(含条件查询)
router.get('/shoplist', async (req, res) => {
    let { shopType, shopName } = req.query
    console.log('进来1');
    shopType = shopType ? shopType : ''
    shopName = shopName ? shopName : ''
    console.log('参数'+ shopType,shopName);
    try {
        console.log('进来2');
        let sql
        if (!shopName && !shopType) {
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id`
        } else if(shopName && !shopType){
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopName="${shopName}"`
        } else if(!shopName && shopType){
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopType="${shopType}"`
        }else {
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopName="${shopName}" AND shopType="${shopType}"`;
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
                shopType,
                shopName,
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
        // console.log(77889);
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});
module.exports = router;

