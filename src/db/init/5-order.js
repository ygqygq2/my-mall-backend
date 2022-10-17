const Order = require('../../model/Order');
const Address = require('../../model/Address');
const Product = require('../../model/Product');

!(async () => {
    // 创建订单
    const requestBody = {
        addressId: "63314bba76abd7e29902e7f7", // 对应的地址 id
        shopId: "63468b8f3abeea941a407e34", // 对应的商店 id
        shopName: "沃尔玛",
        isCanceled: false,
        products: [
            {
                id: "6347708698f646b6293999c1", // 对应的商品 id
                num: 3
            }
        ]
    };

    // 获取地址信息
    const address = await Address.findById(requestBody.addressId);
    // 获取商品 id，为数组
    const pIds = requestBody.products.map(item => item.id);
    // 获取商品列表
    const productList = await Product.find({
        shopId: requestBody.shopId,
        _id: {
            $in: pIds
        }
    });

    // 整合订单数量
    const productWithSales = productList.map(p => {
        // 商品 id
        const id = p._id.toString();

        // 获取商品数量
        const filterProducts = requestBody.products.filter(item => item.id === id);
        if (filterProducts.length === 0) {
            throw new Error('未找到匹配的商品销量数据');
        }

        return {
            product: p,
            orderSales: filterProducts[0].num
        }

    });

    const order = await Order.create({
        username: "jim",
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
        address,
        products: productWithSales
    });
})()
