const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { create, verify } = require('./token');

const router = express.Router();//router==app


//需求：查询商品列表(含条件查询)
router.get('/shoplist', async (req, res) => {
    let { shopType, shopName } = req.query
    shopType = shopType ? shopType : ''
    shopName = shopName ? shopName : ''
    try {
        let sql
        if (!shopName && !shopType) {
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id`
        } else if(shopName && !shopType){
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopName like "%${shopName}%"`
        } else if(!shopName && shopType){
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopType like "%${shopType}%"`
        }else {
            sql = `SELECT s1.id,shopName,shopCard,nowPrice,rePrice,purPrice,num,shopType,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND shopName like "%${shopName}%" AND shopType like "%${shopType}%"`;
        }
        let p = await query(sql);
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
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});
module.exports = router;

