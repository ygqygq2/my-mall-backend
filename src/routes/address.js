/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-28 16:13:20
 * @LastEditTime: 2022-09-29 16:28:33
 * @LastEditors : Chinge Yang
 * @Description : address router
 * @FilePath    : /my-mall-backend/src/routes/address.js
 */

const router = require("koa-router")();
const errNo = require("../../config/errno.ts");
const loginCheck = require("../middleware/loginCheck");
const { SuccessModel, ErrorModel } = require("../res-model/index");
const { createAddress, getAddressList, getAddressById, updateAddress } = require("../controller/address");

router.prefix("/api/user/address");

// 在session中获取用户名
const getUserInfo = (ctx, next) => {
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    return username;
};

// 注册收货地址
router.post("/", loginCheck, async function (ctx, next) {
    const username = getUserInfo(ctx, next);
    const data = ctx.request.body;

    try {
        const newAddress = await createAddress(username, data);
        ctx.body = new SuccessModel(newAddress);
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10004, errNo[10004]);
    }
});

// 获取收货地址列表
router.get("/", loginCheck, async function (ctx, next) {
    const username = getUserInfo(ctx, next);

    const list = await getAddressList(username);
    console.log(list);
    ctx.body = new SuccessModel(list);
});

// 获取单个收货地址
router.get("/:id", loginCheck, async function (ctx, next) {
    const id = ctx.params.id;
    const address = await getAddressById(id);
    ctx.body = new SuccessModel(address);
});

// 更新收货地址
router.patch("/:id", loginCheck, async function (ctx, next) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    const username = getUserInfo(ctx, next);
    try {
        const newAddress = await updateAddress(id, username, data);
        ctx.body = new SuccessModel(newAddress);
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10005, errNo[10005]);
    }
});

module.exports = router;
