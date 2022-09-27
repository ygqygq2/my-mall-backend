/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-27 17:08:34
 * @LastEditTime: 2022-09-27 17:11:14
 * @LastEditors : Chinge Yang
 * @Description : 成功返回的数据模型
 * @FilePath    : /my-mall-backend/src/res-model/SuccessModel.js
 */

class SuccessModel {
    constructor(data) {
        this.errno = 0  // 成功返回的标志
        if (data) {
            this.data = data
        }
    }
}

module.exports = SuccessModel

// new SuccessModel()  // { errno: 0 }
// new SuccessModel({ ... })  // { errno: 0, data: { ... } }