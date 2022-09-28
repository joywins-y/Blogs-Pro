<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="imgContainer" :style="imgPosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.minImg"
        @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.desc }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";
export default {
  props: {
    carousel: { type: Object, required: true },
  },
  components: { ImageLoader },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器尺寸
      innerSize: null, // 内部图片尺寸
      mouseX: 0, // 鼠标横坐标
      mouseY: 0, // 鼠标纵坐标
    };
  },
  computed: {
    // 得到图片位置信息
    imgPosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出来的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; // 多出来的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return { transform: `translate(${left}px, ${top}px)` };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    /** 显示文字 */
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientHeight; // 强制渲染
      this.$refs.title.style.transition = "2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientHeight; // 强制渲染
      this.$refs.desc.style.transition = "3s 2s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },

    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      this.innerSize = {
        width: this.$refs.imgContainer.clientWidth,
        height: this.$refs.imgContainer.clientHeight,
      };
    },

    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },

    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.carousel-item-container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 0.3s;
    left: 0;
    top: 0;
  }

  .title,
  .desc {
    position: absolute;
    left: 30px;
    color: #fff;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5); // 描边 四条边
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    // transition: 3s;
  }

  .title {
    top: calc(50% - 40px);
    font-size: 1.7em;
  }

  .desc {
    top: calc(50% + 20px);
    font-size: 1.1em;
    color: lighten(@gray, 20%);
  }
}
</style>