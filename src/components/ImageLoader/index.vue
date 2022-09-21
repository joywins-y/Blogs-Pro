<template>
  <div class="image-loader-container">
    <img v-if="!isDone" class="placeholder" :src="placeholder" alt="" />
    <img
      :src="src"
      @load="handleLoaded"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    placeholder: { type: String, required: true },
    duration: { type: Number, default: 500 },
  },
  data() {
    return {
      originLoading: false,
      isDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoading ? 1 : 0;
    },
  },
  methods: {
    handleLoaded() {
      this.originLoading = true;
      setTimeout(() => {
        this.isDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2px);
  }
}
</style>