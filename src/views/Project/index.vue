<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a
          class="github"
          target="_blank"
          :href="item.github"
          v-if="item.github"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </div>

    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll";
import { mapState } from "vuex";
import Empty from '@/components/Empty';

export default {
  mixins: [mainScroll("projectContainer")],
  props: {},
  components: { Empty },
  computed: mapState("project", {
    loading: "loading",
    data: "data",
  }),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.project-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 24px;
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;

  .project-item {
    display: flex;
    margin-bottom: 24px;
    padding: 24px;
    transition: 0.5s;
    &:hover {
      box-shadow: -1px 1px 5px #bbb;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }

    .thumb {
      width: 250px;
      min-height: 150px;
      flex: 0 0 auto;
      margin-right: 15px;
      border-radius: 5px;
      object-fit: cover;
    }

    .info {
      flex: 1 1 auto;
      line-height: 1.7;
      h2 {
        margin: 0;
      }
    }

    .github {
      font-size: 14px;
      color: @primary;
    }
  }
}
</style>