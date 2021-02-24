// 1.vue 中组件间有哪些通信方式?
// props-emit
// event-emit-on
// vuex
//
// 2.vue 中 v-show 和 v-if 的区别是什么？
// v-if直接通过移除对应的标签(元素)控制元素的显示/隐藏
// v-show通过display属性的值控制元素的显示/隐藏
//
// 3.keep-alive 组件有什么作用？
// 缓存被keep-alive包裹的组件状态,不需要重复渲染，大幅度提高性能

// 4.说下vue生命周期钩子函数?
// beforeCreate
// created
// beforeMount
// mounted
// beforeUpdate
// updated
// beforeDestroy
// destroyed
// errorCaptured
//
// 5.vue中computed和watch区别?
// computed惰性监听,只有computed属性内使用到的响应式数据产生了变化computed的才会触发
// computed一般适用于多数据影响一处的场景
// watch主动监听,当watch监听的数据产生了变化,会直接触发
// watch适用于一处数据影响多处的场景
