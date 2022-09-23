import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";

import "./mock/banner";
import "./api/banner";
// import "./api/test";

Vue.config.productionTip = false;

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
