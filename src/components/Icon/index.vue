<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
  </template>
  
  <script>
  const classMaps = {
    home: "iconzhuye",
    success: "iconzhengque",
    error: "iconcuowu",
    close: "iconguanbi",
    warn: "iconjinggao",
    info: "iconxinxi",
    blog: "iconblog",
    code: "iconcode",
    about: "iconset_about_hov",
    weixin: "iconweixin",
    email: "iconemail",
    github: "icongithub",
    qq: "iconsign_qq",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    empty: "iconempty",
    chat: "iconliuyan",
  };
  export default {
    props: {
      type: { type: String, required: true },
    },
    computed: {
      fontClass() {
        return classMaps[this.type];
      },
    },
  };
  </script>
  
  <style scoped>
  @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
  .iconfont {
    color: inherit;
    font-size: inherit;
  }
  </style>