<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="100" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  props: {},
  components: { Avatar, Menu, Contact },
  computed: mapState("setting", ["data"]),
  data () {
    return {
      data: {}
    }
  }
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
  position: relative;
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
  position: absolute;
  text-align: center;
  font-size: 12px;
  color: #999;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 30px;
}
</style>