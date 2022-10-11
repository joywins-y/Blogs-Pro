<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetails :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetails from "./components/BlogDetails.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";

export default {
  mixins: [fetchData(null)],
  props: {},
  components: {
    Layout,
    BlogDetails,
    BlogTOC,
    BlogComment,
  },
  created () {
     this.$bus.$on("setMainScroll", this.handleSetScroll);
  },
  mounted() {
    // this.$bus.$on("setMainScroll", this.handleSetScroll);
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit('mainScroll');
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetScroll);
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetScroll(scrollTop){
      this.$refs.mainContainer.scrollTop = scrollTop;
    }
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  box-sizing: border-box;
  padding: 24px;
}
</style>