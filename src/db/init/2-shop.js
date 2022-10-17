const Shop = require("../../model/Shop");

!(async () => {
    // 创建用户
    const shop = await Shop.create(
        {
            name: "沃尔玛",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
            sales: 10000,
            expressLimit: 0,
            expressPrice: 5,
            slogan: "VIP尊享满89元减4元运费券"
        },
        {
            name: "山姆会员商店",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
            sales: 2000,
            expressLimit: 0,
            expressPrice: 5,
            slogan: "联合利华洗护满10减5"
        }
    );
})();
