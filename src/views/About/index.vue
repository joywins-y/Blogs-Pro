<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="data"
      class="about-content"
      :src="data"
      frameborder="0"
      @load="srcLoaded = true"
    >
    </iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {},
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", ["data", "loading"]),
  // computed: mapState("about", { src: "data", loading: "loading" }), // 修改 data 字段的名字
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>