/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-16 17:59:10
 * @LastEditTime: 2022-09-19 10:32:01
 * @LastEditors : Chinge Yang
 * @Description : Shop model
 * @FilePath    : /my-mall-backend/src/model/Shop.js
 */

const mongoose = require("../db/db");

const ShopSchema = mongoose.Schema(
    {
        name: String,
        imgUrl: String,
        sales: Number,
        expressLimit: {type: Number, default: 0},
        expressPrice: Number,
        slogan: String
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
