// 1.如何中断ajax请求？
// 设置超时时间
// 手动阻止，abort方法

// 2.什么是同步？什么是异步？
// 同步 就是在发出一个*调用*时，在没有得到结果之前，该*调用*就不返回。但是一旦调用返回，就得到返回值了。
// 异步 则相反，发出一个调用时，这个调用直接就返回了，不携带返回结果。被调用者通过状态、通知来通知调用者/或回调处理这个调用

// 3.什么是宏任务？什么是微任务？
// 两者都是异步任务，而宏任务是由宿主发起的，而微任务由JavaScript自身发起。
// 在ES3以及以前的版本中，JavaScript本身没有发起异步请求的能力，也就没有微任务的存在。
// 在ES5之后，JavaScript引入了Promise，这样，不需要浏览器，JavaScript引擎自身也能够发起异步任务了。

// 4.什么是回调?回调使用中存在什么问题?
// 回调函数是一种异步任务的解决方案,当异步任务获取到结果之后，会通过回调来返回结果并进行一些处理操作
// 当一个异步任务依赖上一个异步任务的结果时,会出现回调嵌套回调的情况,多层之后代码就变得冗余丑陋,难以理解
//
// 5.Promise.allSettled 了解吗？动手实现一下 Promise.allSettled?
Promise.all_Settled = function (promises) {
    return new Promise(resolve => {
        const data = [], len = promises.length;
        let count = len;
        for (let i = 0; i < len; i += 1) {
            const promise = promises[i];
            promise.then(res => {
                data[i] = {status: 'fulfilled', value: res};
            }, error => {
                data[i] = {status: 'rejected', reason: error};
            }).finally(() => { // promise has been settled
                if (!--count) {
                    resolve(data);
                }
            });
        }
    });
}