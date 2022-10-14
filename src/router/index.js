import store from "@/store";
import { titleControl } from "@/utils";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history", // 路由模式（hash、history、abstract）
});

router.afterEach((to, form) => {
  if (to.meta.title) {
    titleControl.setRouteTitle(to.meta.title)
  }
});

export default router;
