// 1.React 的组件间通信都有哪些形式？
// props
// redux
// 2.React 中如何实现路由懒加载？
// 路由配置里 index = () => import(...)
// 3.React 的生命周期函数都有哪些，分别有什么作用？
// 用于初始化 state
// constructor() {}
// 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
// 因为该函数是静态函数，所以取不到 `this`
// 如果需要对比 `prevProps` 需要单独在 `state` 中维护
// static getDerivedStateFromProps(nextProps, prevState) {}
// 判断是否需要更新组件，多用于组件性能优化
// shouldComponentUpdate(nextProps, nextState) {}
// 组件挂载后调用
// 可以在该函数中进行请求或者订阅
// componentDidMount() {}
// 用于获得最新的 DOM 数据
// getSnapshotBeforeUpdate() {}
// 组件即将销毁
// 可以在此处移除订阅，定时器等等
// componentWillUnmount() {}
// 组件销毁后调用
// componentDidUnMount() {}
// 组件更新后调用
// componentDidUpdate() {}
// 渲染组件函数
// render() {}

// 1. 说一下React Hooks在平时开发中需要注意的问题和原因?

// 2. React 的 setState 方法是异步还是同步？
