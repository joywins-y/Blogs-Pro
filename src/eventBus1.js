const listeners = {};

/**
 * 事件总线
 */
export default {
  /**
   * 监听某一个事件
   * @param {*} eventName 事件名
   * @param {*} handler 处理函数
   */
  $on(eventName, handler) {
    if (listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);
  },

  /**
   * 取消某个事件的监听
   * @param {*} eventName 事件名
   * @param {*} handler 处理函数
   */
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].delete(handler);
  },

  /**
   * 触发事件
   * @param {*} eventName 事件名
   * @param {*} args 剩余参数
   */
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const handler of listeners[eventName]) {
      handler(...args);
    }
  },
};

// import Vue from "vue";
// export default new Vue({});
