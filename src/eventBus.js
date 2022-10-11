import Vue from "vue";

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 *  - 滚动的 dom 元素，如果是 undefined，则表示 dom 元素已经不存在
 *
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 *  - 滚动高度
 */

const app = new Vue({});

Vue.prototype.$bus = app;

// export default new Vue({});

export default app;
