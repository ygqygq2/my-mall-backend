/*
 * @Author      : Chinge Yang
 * @Date        : 2022-09-27 17:11:29
 * @LastEditTime: 2022-09-27 17:13:39
 * @LastEditors : Chinge Yang
 * @Description : 错误返回的数据模型
 * @FilePath    : /my-mall-backend/src/res-model/ErrorModel.js
 */

class ErrorModel {
    constructor(errno = -1, message = 'error') {
        this.errno = errno
        if (message) {
            this.message = message
        }
    }
}

module.exports = ErrorModel

// new ErrorModel()  // { errno: 0 }
// new ErrorModel({...})  // { errno: 0, data: { ... } }
