# 数据模型设计
列举各个数据模型的示例，写明属性

## 用户

```js
{
    _id: "1",
    username: "13700000000",
    password: "123"
}
```

## 地址

```js
{
    _id: "1",
    username: "13700000000",  // 对应用户的id
    city: '北京',
    hourse: '北理工大学国防科技园',
    floor: '2号楼13层',
    consignee: '小慕',
    phone: 18911023277
}
```

## 商店

```js
{
    _id: "1",
    name: '沃尔玛',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享满89元减4元运费券'
}
```

## 商品

```js
{
    _id: "1",
    shopId: "1",  // 对应的商店 id
    name: '橙子250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
    sales: 110,
    price: 12.6,
    oldPrice: 22.6,
    tabs: ['all', 'fruit']
}
```

## 订单

```js
{
    _id: "1",
    username: "13700000000",  // 对应用户的id
    shopId: "1",  // 对应的商店 id
    shopName: '沃尔玛',
    isCancel: false,  // 订单是否被取消
    address: {
        username: "13700000000",  // 对应用户的id
        city: '北京',
        hourse: '北理工大学国防科技园',
        floor: '2号楼13层',
        consignee: '小慕',
        phone: 18911023277
    },
    products: [
        {
            shopId: "1",  // 对应的商店 id
            name: '橙子250g/份',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
            sales: 110,
            price: 12.6,
            oldPrice: 22.6,
            tabs: ['all', 'fruit']
        },
        {
            shopId: "1",  // 对应的商店 id
            name: '车厘子500g/份',
            imgUrl: 'http: //www.dell-lee.com/imgs/vue3/cherry.png',
            sales: 10,
            price: 99.6,
            oldPrice: 119.6,
            tabs: ['all', 'fruit']
        }
    ]
}
```
