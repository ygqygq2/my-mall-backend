/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-28 16:14:05
 * @LastEditTime: 2022-09-29 15:48:05
 * @LastEditors : Chinge Yang
 * @Description : address controller
 * @FilePath    : /my-mall-backend/src/controller/address.js
 */
const Address = require("../model/Address");

/**
 * @description : 注册收货地址
 * @param        {string} username
 * @param        {object} data
 * @return       {object}
 */
async function createAddress(username, data) {
    const address = await Address.create({
        username,
        ...data
    });
    return address;
}

/**
 * @description : 获取收货地址列表
 * @param        {string} username
 * @return       {Array}
 */
async function getAddressList(username) {
    const list = await Address.find({ username }).sort({ updatedAt: -1 });
    return list;
}

/**
 * @description : 获取单个收货地址
 * @param        {string} id
 * @return       {object}
 */
async function getAddressById(id) {
    const address = await Address.findById(id);
    return address;
}

/**
 * @description : 更新收货地址
 * @param        {string} id
 * @param        {string} username
 * @param        {object} data
 * @return       {*}
 */
async function updateAddress(id, username, data) {
    const address = await Address.findOneAndUpdate(
        {_id: id, username},  // 查询条件
        {username, ...data},  // 更新内容
        {new: true}         // 返回更新后的数据
    );
    return address;
}

module.exports = { createAddress, getAddressList, getAddressById, updateAddress };
