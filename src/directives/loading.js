import Loading from "@/components/Loading";
import { getComponentRootDom } from "@/utils";

// 导出指令的配置对象
// export default {
//   // 只执行一次
//   bind(el, binding) {
//     console.log("bind", el, binding);
//     // 创建一个 dom 元素，放到 el 元素内部
//   },
//   inserted(el, binding) {
//     console.log("inserted", el, binding);
//   },
//   update(el, binding) {
//     console.log("update", el, binding);
//     // 根据 binding.value 的值，决定创建或删除 dom 元素
//   },
// };

/** 判断 el 中是否存在 loading 效果的 dom 元素 */
function getLoadingDom(el) {
  return el.querySelector("div[data-role=loading]");
}

function createLoadingDom() {
  const dom = document.createElement("div");
  dom.dataset.role = "loading";
  const loadingDom = getComponentRootDom(Loading);
  dom.appendChild(loadingDom);
  return dom;
}

export default function (el, binding) {
  // 根据 binding.value 的值，决定创建或删除 dom 元素
  const curDom = getLoadingDom(el);
  if (binding.value) {
    // 创建
    if (!curDom) {
      const dom = createLoadingDom();
      el.appendChild(dom);
    }
  } else {
    // 删除
    if (curDom) {
      curDom.remove();
    }
  }
}
