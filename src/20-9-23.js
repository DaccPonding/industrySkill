/**
 * 模拟实现 new 操作符
 */

const myNew = function (fn, ...args) {
  let obj = {}
  obj.__proto__ = Object.prototype
  const res = fn.call(obj, ...args);
  return typeof res === 'object' ? res : obj;
}

console.log([].shift.call([myNew,2,3,4]))
