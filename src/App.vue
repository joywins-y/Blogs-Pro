<template>
  <div id="app">
    <h1>App 组件</h1>
    <Avatar
      url="https://mmbiz.qpic.cn/sz_mmbiz_jpg/IhB6Hhm1o7fqEWXUPvudN0FxFVEg2kOicrNTrJth4dPgJ4TR8niccamz2oI7l8uDSfiaDrsJWpov0KuDJHSVIHPVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1"
      :size="100"
    />
    <Icon type="home" />
    <Pager :current="current" :total="505" :visibleNumber="7" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";
import Pager from "./components/Pager.vue";

export default {
  name: "App",
  components: {
    Avatar,
    Icon,
    Pager,
  },
  data(){
    return { current: 1 };
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage;
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
