<template>
  <ul class="menu-container">
    <li v-for="item in menus" :key="item.name">
      <RouterLink :to="{ name: item.name }" :exact="item.exact">
        <Icon v-if="item.icon" :type="item.icon" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  props: {},
  components: { Icon },
  data() {
    return {
      menus: [
        { label: "首页", name: "home", icon: "home", exact: true },
        { label: "文章", name: "blog", icon: "blog", exact: false },
        { label: "留言板", name: "message", icon: "chat", exact: true },
        { label: "项目 & 效果", name: "project", icon: "code", exact: true },
        { label: "关于我", name: "about", icon: "about", exact: true },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.menu-container {
  color: @gray;
  text-align: start;
  margin: 0;
  padding: 16px 0;
  list-style: none;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 16px 0;
    a {
      display: block;
      padding: 4px 16px;
      &:hover {
        color: #fff;
      }

      &.router-link-active {
        // background: #2d2d2d;
        background: darken(@words, 1%);
      }

      .icon-container {
        margin-right: 8px;
      }
    }
  }
}
</style>