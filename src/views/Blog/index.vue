<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>
  
  <script>
import Directory from "./components/Directory.vue";
import Layout from "@/components/Layout/index.vue";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  props: {},
  components: { Directory, Layout, BlogList, BlogCategory },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "1",
          children: [
            { id: 21, name: "dasda" },
            { id: 321, name: "dasda" },
            { id: 31, name: "dasda", isSelect: true },
          ],
        },
        {
          id: 2,
          name: "2",
          children: [{ id: 21, name: "dasda" }],
        },
        { id: 3, name: "3", children: [{ id: 21, name: "dasda" }] },
      ],
    };
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    handleSelect(item) {
      // console.log(item);
    },
  },
};
</script>
  
  <style scoped lang="less">
.blog-container {
}
</style>