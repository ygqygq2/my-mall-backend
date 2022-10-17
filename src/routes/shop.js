/*
 * @Author      : Chinge Yang
 * @Date        : 2022-10-09 15:51:16
 * @LastEditTime: 2022-10-11 10:19:24
 * @LastEditors : Chinge Yang
 * @Description : 商店路由
 * @FilePath    : /my-mall-backend/src/routes/shop.js
 */
const router = require("koa-router")();
const errNo = require("../../config/errno.ts");
const { getHotList, getShopInfo, getProductsByShopId } = require("../controller/shop");
const { SuccessModel, ErrorModel } = require("../res-model/index");

router.prefix("/api/shop");

// 获取热门商店列表
router.get("/hot-list", async (ctx, next) => {
    const list = await getHotList();
    ctx.body = new SuccessModel(list);
});

// 单个商店信息
router.get("/:id", async function (ctx, next) {
    const id = ctx.params.id;
    const shop = await getShopInfo(id);
    ctx.body = new SuccessModel(shop);
});

// 获取商店商品列表
router.get("/:id/products", async (ctx, next) => {
    const shopId = ctx.params.id;
    const tab = ctx.query.tab || "all";
    const products = await getProductsByShopId(shopId, tab);
    ctx.body = new SuccessModel(products);
});

module.exports = router;
