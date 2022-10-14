<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <Directory :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";
import { titleControl } from "@/utils";

export default {
  mixins: [fetchData([])],
  props: {},
  components: { Directory },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { name: "全部", id: -1, articleCount: totalCount },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = { page: 1, limit: this.limit };
      if (item.id === -1) {
        this.$router.push({ name: "blog", query });
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: { categoryId: item.id },
        });
        titleControl.setRouteTitle(item.name);
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>