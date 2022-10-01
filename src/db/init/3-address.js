const Address = require('../../model/Address');

!(async () => {
    // 创建用户
    const address = await Address.create({
        username: 'jim',
        city: '北京',
        hourse: '北理工大学国防科技园',
        floor: '2号楼13层',
        consignee: '小慕',
        phone: 18911023277
    });
})()
