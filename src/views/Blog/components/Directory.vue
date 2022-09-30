<template>
  <ul class="directory-container">
    <li v-for="item in list" :key="item.id">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span v-if="item.aside" class="aside" @click="handleClick(item)">
        {{ item.aside }}
      </span>
      <!-- 显示当前组件 -->
      <Directory :list="item.children" @select="handleSelect" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Directory",
  props: {
    list: { type: Array, default: () => [] },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
    handleSelect(item) {
      // console.log(item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.directory-container {
  list-style: none;
  padding: 0;
  .directory-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;

    span {
      display: inline-block;
      cursor: pointer;
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }

    .aside {
      font-size: 12px;
      margin-left: 1.5em;
      color: @gray;
    }
  }
}
</style>