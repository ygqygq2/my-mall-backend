/*
 * @Author      : Chinge Yang
 * @Date        : 2022-10-11 10:31:06
 * @LastEditTime: 2022-10-11 17:22:14
 * @LastEditors : Chinge Yang
 * @Description : 商店路由
 * @FilePath    : /my-mall-backend/src/routes/order.js
 */
const router = require("koa-router")();
const errNo = require("../../config/errno.ts");
const { createOrder, getOrder } = require("../controller/order");
const { SuccessModel, ErrorModel } = require("../res-model/index");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/api/order");

// 创建订单
router.post("/", loginCheck, async function (ctx, next) {
    // 获取用户信息
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;

    // 获取订单数据
    const data = ctx.request.body;

    try {
        const newOrder = await createOrder(username, data);
        ctx.body = new SuccessModel(newOrder);
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10007, errNo[10007]);
    }
});

// 获取订单
router.get("/", loginCheck, async function (ctx, next) {
    // 获取用户信息
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    const orderList = await getOrder(username);
    ctx.body = new SuccessModel(orderList);
});

module.exports = router;
