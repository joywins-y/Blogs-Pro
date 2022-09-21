<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: { type: String, default: "无数据" },
  },
  components: { Icon },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.empty-container {
  .self-center();

  .icon-container {
    color: #ccc;
    font-size: 60px;
  }
  p {
    margin-top: 8px;
  }
}
</style>