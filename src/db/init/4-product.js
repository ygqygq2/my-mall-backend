const Product = require('../../model/Product');

!(async () => {
    // 创建用户
    const product = await Product.create({
        shopId: "633259321fea5f9c28a0131f",  // 对应的商店 id
        name: '橙子250g/份',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
        sales: 110,
        price: 12.6,
        oldPrice: 22.6,
        tabs: ['all', 'fruit']
    });
})()