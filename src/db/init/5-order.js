const Order = require('../../model/Order');
const Address = require('../../model/Address');
const Product = require('../../model/Product');

!(async () => {
    // 创建订单
    const requestBody = {
        addressId: "63314bba76abd7e29902e7f7",  // 对应的地址 id
        shopId: "633259321fea5f9c28a0131f",  // 对应的商店 id
        shopName: "沃尔玛",
        isCanceled: false,
        products: [
            {
                id: "63326bcdbff7405373cbee62",  // 对应的商品 id
                num: 3
            }
        ]
    }

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
        username: "6328377995a23751647227e8",
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
        address,
        products: productWithSales
    });
})()
