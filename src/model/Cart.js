/*
 * @Author      : Chinge Yang
 * @Date        : 2022-10-13 10:20:52
 * @LastEditTime: 2022-10-13 10:26:10
 * @LastEditors : Chinge Yang
 * @Description : 购物车
 * @FilePath    : /my-mall-backend/src/model/Cart.js
 */

const mongoose = require("../db/db");

const CartSchema = mongoose.Schema(
    {
        shopName: { type: String, required: true },
        product: [
            {
                _id: { type: String, required: true },
                name: { type: String, required: true },
                imgUrl: String,
                price: Number,
                count: Number
            }
        ]
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
