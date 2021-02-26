// 1.有没有写过 Koa 中间件，说下中 间件原理，介绍下自己写过的中间件?
// 没写过
// 2.如何判断当前脚本运行在浏览器还是node环境中？
// 判断global对象是window是浏览器undefined是node
// 3.请描述一下 cookies sessionStorage和localstorage区别？
// cookies存储的数据比较少，会随请求发送到服务端 cookies长度根据浏览器区分大概4k
// sessionStorage只存在于当前页面,相同页面也不互通，关闭页面就销毁
// localStorage存在于整个浏览器中,只能手动销毁 容量5M左右
