<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
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