/*
 * @Author      : Chinge Yang
 * @Date        : 2022-10-11 10:36:11
 * @LastEditTime: 2022-10-14 17:22:53
 * @LastEditors : Chinge Yang
 * @Description : order controller
 * @FilePath    : /my-mall-backend/src/controller/order.js
 */

const errNo = require("../../config/errno.ts");
const Order = require("../model/Order");
const Product = require("../model/Product");
const Address = require("../model/Address");

/**
 * @description : 创建订单
 * @param        {string} username 用户名
 * @param        {object} data 订单数据
 * @return       {object} 订单
 */
async function createOrder(username, data) {
    const { addressId, shopId, shopName, isCanceled = false, products = {} } = data;

    // 根据 addressId 获取地址信息
    const address = await Address.findById(addressId);
    console.log(address);

    // 获取商品列表
    const pIds = products.map((item) => item.id); // 格式如 ['商品1 id', '商品2 id']
    const productList = await Product.find({ shopId, _id: { $in: pIds } });

    // 拼接上购买数量
    const productListWithSales = productList.map((item) => {
        // 商品 id
        const id = item._id.toString();
        // 商品数量
        const filterProducts = products.filter((product) => product.id === id);
        if (filterProducts.length === 0) {
            throw new Error(errNo[10008]);
        }

        return {
            product: item,
            orderSales: filterProducts[0].num
        };
    });

    // 创建订单
    const newOrder = await Order.create({
        username,
        shopId,
        shopName,
        address,
        isCanceled,
        products: productListWithSales
    });

    return newOrder;
}

async function getOrder(username) {
    const orderList = await Order.find({ username }).sort({ createdAt: -1 });
    return orderList;
}

module.exports = { createOrder, getOrder };
