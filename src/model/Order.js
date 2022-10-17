/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-14 10:41:16
 * @LastEditTime: 2022-10-14 16:20:56
 * @LastEditors : Chinge Yang
 * @Description : Order model
 * @FilePath    : /my-mall-backend/src/model/Order.js
 */

const mongoose = require("../db/db");

const OrderSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true // 必需
        },
        shopId: {
            type: String,
            required: true // 必需
        },
        shopName: {
            type: String,
            required: true // 必需
        },
        isCanceled: {
            type: Boolean,
            default: false
        },
        address: {
            username: { type: String, required: true },
            city: String,
            hourse: String,
            floor: String,
            consignee: String,
            phone: Number
        },
        products: [
            {
                product: {
                    shopId: { type: String, required: true },
                    name: String,
                    imgUrl: String,
                    sales: Number,
                    price: Number,
                    oldPrice: { type: Number, default: 0 },
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
