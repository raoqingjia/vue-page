// 模拟获取，用户数据，订单数据，商品数据
function getUsers() {
    setTimeout(() => {
        let data = '用户数据';
        iterator.next(data)
    }, 3000)
}
function getOrders(users) {
    setTimeout(() => {
        let data = users + '订单数据';
        iterator.next(data)
    }, 3000)
}
function getGoods(orders) {
    setTimeout(() => {
        let data = orders + '商品数据';
        iterator.next(data)
    }, 3000)
}
function* gen() {
    let users = yield getUsers()
    console.log(users) // '用户数据'
    let orders = yield getOrders(users)
    console.log(orders) // '用户数据订单数据'
    let goods = yield getGoods(orders)
    console.log(goods) // '用户数据订单数据商品数据'
}
let iterator = gen();
iterator.next();
