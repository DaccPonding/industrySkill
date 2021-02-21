//1. 编写一个方法，该方法接收两个参数，分别为 k 和 一个无序的纯数字数组。
// 该方法在执行后，会返回数组中第 k 大的数字。特别注意，如果数组中，有两位数值一样的数字，同数值数字排名并列。
// 如 [3,1,3,2,5,4,5] 中，第 1 大的数字为 5，第2大的数字为 4，第5大的数字为 1。
function proOne(k, nums){
    return Array.from(new Set(nums.sort((a,b) => a - b)))[k-1]
}
//2. __proto__ 和 prototype 之前有什么关系？
// 每个对象都拥有__proto__,而prototype是构造函数对象才拥有的属性对象
// 每个对象的__proto__都会指向构造他的构造函数的prototype(原型)属性，其中包含了这个对象类共有的属性和方法
// 大部分未经修改的构造函数prototype，它的__proto__会指向Function的prototype,然后Function的prototype的__proto__指向Object的prototype(为null，指向到此停止)
// 而Object也是一种构造函数,所以Object的__proto__还会指向Function的prototype,但是最终还是会指向回Object的prototype(null)
// ES6提供class extends语法糖用起来会修改class的__proto__原型
// 会导致子类的__proto__被指向父类构造函数本身,一一向上寻找最后找至Object的prototype

//3. .call(), .apply() .bind() 的区别和作用？bind 方法如何来实现？
// call和apply,bind都是用于重新绑定函数运行时this的
// call和apply绑定完后会立即执行,bind不会,它会返回一个绑定后的函数
// call和apply的区别就是参数的传递方式,apply可以以数组的形式传递多个参数
// bind的实现方式
Function.prototype.my_bind = function (arg, ...args){
    return () => this.my_apply(arg, ...args)
}
Function.prototype.my_apply = function (arg, ...args){
    arg.fn = this
    let value = args.length?arg.fn(...args):args.fn()
    delete arg.fn
    return value
}
