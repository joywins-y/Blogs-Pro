<template>
  <ul class="contact-container">
    <li v-for="item in list" :key="item.value">
      <a :href="item.link">
        <div class="icon" v-if="item.icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.label }}</span>
      </a>
      <div class="pop" v-if="item.img">
        <!-- <img :src="item.img" alt="img" /> -->
        <img src="@/assets/Wechat.jpeg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  props: {},
  components: { Icon },
  computed: mapState("setting", ["data"]),
  data() {
    return {
      list: [
        {
          label: "1519105541",
          value: "qq",
          icon: "qq",
          link: "",
          img: "./assets/logo.png",
        },
        {
          label: "joywins-y",
          value: "github",
          icon: "github",
          link: "https://github.com/joywins-y",
          img: "",
        },
        {
          label: "1519105541@qq.com",
          value: "email",
          icon: "email",
          link: "",
          img: "@/assets/Wechat.jpeg",
        },
        {
          label: "1519105541",
          value: "wx",
          icon: "chat",
          link: "",
          img: "@/assets/Wechat.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.contact-container {
  list-style: none;
  margin: 0;
  padding: 16px;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 16px 0;
    text-align: start;
    position: relative;

    &:hover {
      a {
        color: #fff;
      }
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;
      align-content: center;
    }

    .icon {
      font-size: 26px;
      margin-right: 8px;
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 8px;
      padding: 10px 8px 0;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 100px;
        height: 100px;
      }
      &::after {
        content: "";
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        bottom: -4px;
        position: absolute;
        background: #fff;
      }
    }
  }
}
</style>