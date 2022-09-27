/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-14 10:41:16
 * @LastEditTime: 2022-09-16 18:02:28
 * @LastEditors : Chinge Yang
 * @Description : User model
 * @FilePath    : /my-mall-backend/src/model/User.js
 */

const mongoose = require("../db/db");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true, // 必需
            unique: true // 唯一
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // 自动添加创建时间和更新时间
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
