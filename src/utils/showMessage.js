import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 消息提示
 * @param {String} content 消息内容
 * @param {String} type 消息类型 success warn error info 默认 info
 * @param {Number} duration 显示时长 0-不消失 默认 1s
 * @param {HTMLElement} container 消息容器
 */
export default function (options = {}) {
  const {
    content = "",
    type = "info",
    duration = 1000,
    container = document.body,
    callback = () => {},
  } = options;

  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

  // 设置样式
  div.className = `${styles.message} ${styles["message-" + type]}`;

  // 容器的 position 是否改动过
  if (container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }

  // 将 div 加入到容器中
  container.appendChild(div);

  // 浏览器强行渲染
  div.clientHeight; // 导致 reflow

  // 回到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 等一段时间（duration）消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-50px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        callback();
      },
      { once: true }
    );
  }, duration);
}
