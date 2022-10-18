<template>
  <div class="not-found-container">
    <div class="img-box">
      <img src="@/assets/notfound.png" alt="" />
    </div>
    <div class="text-content">
      <h2>404</h2>
      <p class="text">Sorry, the page you visited does not exist.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.not-found-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  .text-content {
    margin-top: 24px;
    text-align: center;
  }
}
</style>