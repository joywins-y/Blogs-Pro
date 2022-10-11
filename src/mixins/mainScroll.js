/**
 * 混合 监听按钮 触发回到顶部事件
 * @param {*} refVal 
 * @returns 
 */
export default function (refVal) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleMixinsSetScroll);
      this.$refs[refVal].addEventListener("scroll", this.handleMixinsScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$refs[refVal].removeEventListener("scroll", this.handleMixinsScroll);
      this.$bus.$off("setMainScroll", this.handleMixinsSetScroll);
    },
    methods: {
      handleMixinsScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refVal]);
      },
      handleMixinsSetScroll(scrollTop) {
        this.$refs[refVal].scrollTop = scrollTop;
      },
    },
  };
}
