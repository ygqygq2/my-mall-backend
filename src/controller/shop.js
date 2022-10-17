/*
 * @Author      : Chinge Yang
 * @Date        : 2022-10-09 15:52:05
 * @LastEditTime: 2022-10-11 10:24:21
 * @LastEditors : Chinge Yang
 * @Description : shop controller
 * @FilePath    : /my-mall-backend/src/controller/shop.js
 */

const Shop = require("../model/Shop");
const Product = require("../model/Product");

/**
 * @description : 获取热门商店列表
 * @return       {array}
 */
async function getHotList() {
    const list = await Shop.find().sort({ _id: -1 });
    return list;
}

/**
 * @description : 获取商店信息
 * @param        {string} id
 * @return       {object} 商店信息
 */
async function getShopInfo(id) {
    const shop = await Shop.findById(id);
    return shop;
}

async function getProductsByShopId(shopId, tab = "all") {
    const list = await Product.find({
        shopId,
        tabs: {
            $in: tab
        }
    });
    return list;
}

module.exports = { getHotList, getShopInfo, getProductsByShopId };
