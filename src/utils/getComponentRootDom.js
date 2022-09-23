import Vue from "vue";

/**
 * 获取某个组件渲染的 DOM 元素
 * @param {*} comp
 * @param {*} props
 * @returns
 */
export default function (comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  return vm.$el;
}
