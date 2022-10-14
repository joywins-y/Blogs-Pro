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
import mainScroll from "@/mixins/mainScroll";
import { titleControl } from "@/utils";

export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  props: {},
  components: {
    Layout,
    BlogDetails,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      titleControl.setRouteTitle(resp.title);
      return resp;
    },
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