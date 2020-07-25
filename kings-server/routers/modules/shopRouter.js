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

//需求：删除某条商品数据 DELETE FROM shop WHERE id=
router.delete('/del/:id', async (req, res) => {
    let id = req.params.id;//获取uid
    try {
        let sql = `DELETE FROM shop WHERE id="${id}"`;
        let p = await query(sql);//[{},{}]
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


//需求：前台app首页分类数据渲染
    //精品手办 数码  生活  服饰
    router.get('/shoplistAll', async (req, res) => {
        try {
            //手办
            const gk = await query("SELECT s1.id,shopType,shopName,nowPrice,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND t1.id=1").catch(err =>{
                console.log(err);
                throw Error(err);
            })
            //数码
            const dig = await query("SELECT s1.id,shopType,shopName,nowPrice,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND t1.id=2").catch(err =>{
                console.log(err);
                throw Error(err);
            })
            //生活
            const life = await query("SELECT s1.id,shopType,shopName,nowPrice,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND t1.id=3").catch(err =>{
                console.log(err);
                throw Error(err);
            })
            //服饰
            const clo = await query("SELECT s1.id,shopType,shopName,nowPrice,shopPic FROM shop s1,shoptype t1 WHERE s1.tid=t1.id AND t1.id=4").catch(err =>{
                console.log(err);
                throw Error(err);
            })
            let inf = {};
            if (gk.length && dig.length && life.length && clo.length) {
                inf = {
                    code: 2000,
                    flag: true,
                    message: '查询成功',
                    data: {
                        gk,
                        dig,
                        life,
                        clo
                    }
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

//需求：查询id为xx的商品信息
    //    /shop/shopSingleList
    router.get('/shopSingleList/:id', async (req, res) => {
        let id = req.params.id;
        try {
            let sql = `SELECT * FROM shop WHERE id=${id}`;
            let data = await query(sql);//[{},{}]
            let inf = {}
            if (data.length) {
                //查到数据：查询成功
                inf = {
                    code: 2000,
                    flag: true,
                    message: '查询成功',
                    data:data
                    
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
































module.exports = router;

