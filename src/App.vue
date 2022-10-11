<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <div class="main">
          <RouterView />
        </div>
      </template>
      <!-- <template #right>
        <div class="right">右边区域</div>
      </template> -->
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "./components/Layout";
import ToTop from "./components/ToTop/index.vue";

export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

#app {
  .self-fill(fixed);
  background: #f0f0f0;
}
.left {
  width: 200px;
  height: 100%;
  .aside {
    height: 100%;
  }
}
.main {
  width: 100%;
  height: 100%;
}
.right {
  width: 100px;
  height: 100%;
}
</style>
