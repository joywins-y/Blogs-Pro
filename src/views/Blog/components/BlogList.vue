<template>
  <div class="blog-list-conatiner" ref="conatiner" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{ name: 'blogDetail', params: { id: item.id } }">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{ name: 'blogDetail', params: { id: item.id } }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'categoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              class=""
            >
              {{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog";
import Pager from "@/components/Pager/index.vue";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { formatDate } from "@/utils";

export default {
  mixins: [fetchData({}), mainScroll("conatiner")],
  props: {},
  components: { Pager },
  computed: {
    /** 路由信息 */
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      const params = {
        categoryId: this.routeInfo.categoryId,
        page: this.routeInfo.page,
        limit: this.routeInfo.limit,
      };
      return await getBlogs(params);
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({ name: "blog", query });
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: { categoryId: this.routeInfo.categoryId },
        });
      }
    },
  },
  watch: {
    // $route(newVal, oldVal){
    //   console.log('change');
    // }
    // 完整写法：
    // $route: {
    //   handler(newVal, oldVal) {
    //     console.log("change");
    //   },
    //   deep: false, // 是否监听该数据内部属性的变化，默认 false
    //   immediate: false, // 是否立即执行一次 handler，默认 false
    // },

    async $route() {
      this.isLoading = true;
      // 滚动高度为 0
      this.$refs.conatiner.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-conatiner {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 1.7;
  padding: 24px;
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 auto;
        margin-right: 16px;
        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
      }
      .aside {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 16px;
        }
      }
      .desc {
        margin: 16px 0;
        font-size: 14px;
      }
    }
  }
}
</style>