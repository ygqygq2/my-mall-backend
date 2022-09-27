/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-16 17:59:10
 * @LastEditTime: 2022-09-19 10:45:24
 * @LastEditors : Chinge Yang
 * @Description : Address model
 * @FilePath    : /my-mall-backend/src/model/Address.js
 */

const mongoose = require("../db/db");

const AddressSchema = mongoose.Schema(
    {
        uid: {
            type: String,
            required: true, // 必需
        },
        city: String,
        hourse: String,
        floor: String,
        consignee: String,
        phone: Number
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
