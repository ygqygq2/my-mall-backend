const Product = require("../../model/Product");

!(async () => {
    // 创建用户
    const product = await Product.create(
        {
            shopId: "63468b8f3abeea941a407e34", // 对应的商店 id
            name: "橙子250g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/orange.png",
            sales: 110,
            price: 12.6,
            oldPrice: 22.6,
            tabs: ["all", "fruit"]
        },
        {
            shopId: "63468b8f3abeea941a407e34",
            name: "番茄250g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
            sales: 10,
            price: 33.6,
            oldPrice: 39.6,
            tabs: ["all", "seckill"]
        },
        {
            shopId: "63468b8f3abeea941a407e35",
            name: "车厘子500g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/cherry.png",
            sales: 10,
            price: 99.6,
            oldPrice: 119.6,
            tabs: ["all", "fruit"]
        },
        {
            shopId: "63468b8f3abeea941a407e35",
            name: "橙子250g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/orange.png",
            sales: 110,
            price: 12.6,
            oldPrice: 22.6,
            tabs: ["all", "seckill", "fruit"]
        },
        {
            shopId: "63468b8f3abeea941a407e35",
            name: "帝王蟹250g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/crab.png",
            sales: 10,
            price: 199.9,
            oldPrice: 299.9,
            tabs: ["all"]
        }
    );
})();
