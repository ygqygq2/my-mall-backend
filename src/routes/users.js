const router = require("koa-router")();
const errNo = require("../../config/errno.ts");
const { login, register } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../res-model/index");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/api/user");

// 获取用户信息
router.get("/info", loginCheck, async (ctx, next) => {
    ctx.body = {
        errno: 0,
        data: ctx.session.userInfo
    };
});

// 登录
router.post("/login", async (ctx, next) => {
    // 获取请求参数
    const { username, password } = ctx.request.body;
    // 验证登录，获取到 uid
    const res = await login(username, password);
    // 登录成功，设置 session
    if (res) {
        // 设置 session
        const loginData = { uid: res, username };
        ctx.session.userInfo = loginData;

        // 返回
        ctx.body = new SuccessModel(loginData);
    } else {
        ctx.body = new ErrorModel(10002, errNo[10002]);
    }
});

// 用户注册
router.post("/register", async (ctx, next) => {
    // 获取请求中的用户信息
    const userInfo = ctx.request.body;
    // 调用注册方法
    try {
        const newUser = await register(userInfo);
        // 注册成功
        // ctx.body = {
        //     errno: 0,
        //     data: newUser
        // };
        ctx.body = new SuccessModel(newUser);
    } catch (ex) {
        // 注册失败
        // ctx.body = {
        //     errno: 10001,
        //     message: `${errNo[10001]} - ${ex.message}`
        // };
        ctx.body = new ErrorModel(10001, `${errNo[10001]} - ${ex.message}`);
        console.error(errNo[10001], ex);
    }
});

module.exports = router;
