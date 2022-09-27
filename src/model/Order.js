/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-14 10:41:16
 * @LastEditTime: 2022-09-27 11:32:28
 * @LastEditors : Chinge Yang
 * @Description : Order model
 * @FilePath    : /my-mall-backend/src/model/Order.js
 */

const mongoose = require("../db/db");

const OrderSchema = mongoose.Schema(
    {
        uid: {
            type: String,
            required: true, // 必需
        },
        shopId: String,
        shopName: String,
        isCanceled: {
            type: Boolean,
            default: false
        },
        address: {
            uid: String,
            city: String,
            hourse: String,
            floor: String,
            consignee: String,
            phone: Number
        },
        products: [
            {
                product: {
                    shopId: {type: String, required: true},
                    name: String,
                    imgUrl: String,
                    sales: Number,
                    price: Number,
                    oldPrice: {type: Number, default: 0},
                    tabs: [String]
                },
                orderSales: Number
            }
        ]
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
