/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-08 14:53:07
 * @LastEditTime: 2022-09-27 16:34:35
 * @LastEditors : Chinge Yang
 * @Description : user contoller
 * @FilePath    : /my-mall-backend/src/controller/user.js
 */

const User = require("../model/User");

/** 登录
 * @description : 
 * @param        {*} username
 * @param        {*} password
 * @return       {boolean}
 */
async function login(username, password) {
    // 查询用户是否存在
    const user = await User.findOne({username});
    if (!user) {
        // 用户不存在
        throw new Error("用户不存在");
    }
    // 用户存在，验证密码是否正确
    if (password !== user.password) {
        // 密码错误
        throw new Error("密码错误");
    }
    // 登录成功
    return true;
}

/**
 * @description : 注册
 * @param        {{username, password}} userInfo
 * @return       {*}
 */
async function register(userInfo = {}) {
    // 插入数据库
    const newUser = await User.create(userInfo);
    // 返回注册的用户信息
    return newUser;
}

module.exports = {login, register};
