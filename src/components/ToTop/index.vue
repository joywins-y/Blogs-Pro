<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: true,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    /** 回到顶部 */
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
</style>