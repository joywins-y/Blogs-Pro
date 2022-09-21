<template>
  <div class="site-aside-container">
    <Avatar
      url="https://mmbiz.qpic.cn/sz_mmbiz_jpg/IhB6Hhm1o7fqEWXUPvudN0FxFVEg2kOicrNTrJth4dPgJ4TR8niccamz2oI7l8uDSfiaDrsJWpov0KuDJHSVIHPVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1"
      :size="100"
    />
    <h1 class="title">Windy</h1>
    <Menu />
    <Contact />
    <p class="footer">备案号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  props: {},
  components: { Avatar, Menu, Contact },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.avatar-container {
  margin: 0 auto;
  text-align: center;
}

.title {
  text-align: center;
  color: #eee;
}

.footer {
  text-align: center;
  font-size: 12px;
  color: #999;
}
</style>