<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <Directory :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>
  
<script>
import Directory from "./Directory.vue";
import { debounce } from "@/utils";

export default {
  props: {
    toc: { type: Array },
  },
  components: { Directory },
  data() {
    return {
      activeAnchor: "",
    };
  },
  created() {
    this.setDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setDebounce);
  },
  computed: {
    /** 根据 toc 属性以及 activeAnchor 得到带有 isSelect 属性的 toc 数组 */
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    /** 根据 toc 得到它们对应的元素数组 */
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    /** 设置 activeAnchor 为正确的值 */
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        // 判断当前 dom 元素是否被选中
        if (!dom) {
          continue;
        }
        // 获取元素距离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>
  
<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>