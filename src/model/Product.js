/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-16 17:59:10
 * @LastEditTime: 2022-09-19 10:45:29
 * @LastEditors : Chinge Yang
 * @Description : Product model
 * @FilePath    : /my-mall-backend/src/model/Product.js
 */

const mongoose = require("../db/db");

const ProductSchema = mongoose.Schema(
    {
        shopId: {type: String, required: true},
        name: String,
        imgUrl: String,
        sales: Number,
        oldPrice: {type: Number, default: 0},
        price: Number,
        slogan: String,
        tabs: [String]  // 示例：["all", "fruit"]
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
