import Vue from "vue";
import App from "./App.vue";
import "./mock";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import vLoading from "./directives/loading";
import './eventBus';

Vue.config.productionTip = false;

Vue.prototype.$showMessage = showMessage;

Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
