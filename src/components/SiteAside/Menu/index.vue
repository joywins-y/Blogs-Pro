<template>
  <ul class="menu-container">
    <li
      v-for="item in menus"
      :key="item.link"
      :class="{ selected: isSelected(item) }"
    >
      <a :href="item.link">
        <Icon v-if="item.icon" :type="item.icon" />
        <span>{{ item.label }}</span>
      </a>
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
        { label: "首页", link: "/", icon: "home" },
        { label: "文章", link: "/blog", icon: "blog" },
        { label: "留言板", link: "/message", icon: "chat" },
        { label: "项目 & 效果", link: "/project", icon: "code" },
        { label: "关于我", link: "/about", icon: "about" },
      ],
    };
  },
  methods: {
    isSelected(item) {
      let link = item.link.toLowerCase();
      let curPathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
  },
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
    margin: 4px 0;
    padding: 4px 16px;
    a {
      display: block;
      &:hover {
        color: #fff;
      }

      .icon-container {
        margin-right: 8px;
      }
    }
    &.selected {
      background: #2d2d2d;
    }
  }
}
</style>