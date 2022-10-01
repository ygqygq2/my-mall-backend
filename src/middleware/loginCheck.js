/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-08 16:29:51
 * @LastEditTime: 2022-09-28 17:16:21
 * @LastEditors : Chinge Yang
 * @Description : 登录验证的中间件
 * @FilePath    : /my-mall-backend/src/middleware/loginCheck.js
 */

const errNo = require("../../config/errno.ts");
const { ErrorModel } = require("../res-model/index");

async function loginCheck(ctx, next) {
    const session = ctx.session;
    const userInfo = session.userInfo;
    if (userInfo && userInfo.username) {
        // 登录验证通过
        await next();
        return;
    }
    // 登录验证失败
    ctx.body = new ErrorModel(10003, errNo[10003]);
}

module.exports = loginCheck;
