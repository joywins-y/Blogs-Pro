<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto; // 不可压缩 不能增长 保持宽度
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto; // 可压缩 可增长 宽度变化
    overflow: hidden;
    min-width: 200px;
  }
}
</style>