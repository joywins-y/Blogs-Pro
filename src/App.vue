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
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import ImageLoader from "@/components/ImageLoader";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
import SiteAside from "@/components/SiteAside";
import Layout from "./components/Layout";

export default {
  name: "App",
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    Contact,
    Menu,
    SiteAside,
    Layout,
    SiteAside,
  },
  data() {
    return { current: 1 };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
    handleLoaded() {},
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
