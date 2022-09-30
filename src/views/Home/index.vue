<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="isLoading"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        v-for="(item, idx) in data"
        :key="item.id"
        :class="{ active: idx === index }"
        @click="switchTo(idx)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon/index.vue";
import Loading from "@/components/Loading/index.vue";
import fetchData from "@/mixins/fetchData.js";

export default {
  props: {},
  mixins: [fetchData([])],
  components: { CarouselItem, Icon, Loading },
  data() {
    return {
      // banners: [],
      index: 0, // 当前显示的轮播图索引
      containerHeight: 0, // 容器高度
      switching: false, // 是否正在翻页中
      // isLoading: true,
    };
  },
  // async created() {
  //   this.banners = await getBanners();
  //   this.isLoading = false;
  // },
  updated() {
    // console.log("update");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    // 滚轮事件 根据滚动幅度来判断是否触发
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.index--;
        this.switching = true;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanners();
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // width: 400px;
  // height: 300px;
  // overflow: visible;
  // border: 2px solid #008c8c;
  // margin: 100px auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    position: absolute;
    font-size: 40px;
    color: @gray;
    transform: translateX(-50%);
    cursor: pointer;

    &.icon-up {
      top: 20px;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: 20px;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 10px);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 10px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -10px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, -10px);
      }
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 8px;
      height: 8px;
      margin-bottom: 10px;
      background: @words;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
      // transition: 0.5s;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>