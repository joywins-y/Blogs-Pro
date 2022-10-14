import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png",
    siteTitle: "我的个人空间",
    qq: "1519105541",
    qqQrCode: "/assets/qq_.pic.jpg",
    weixin: "故里逢春",
    weixinQrCode: "/assets/wx_.pic.jpg",
    mail: "1519105541@qq.com",
    icp: "粤 ICP 备 20221013 号",
    githubName: "joywins-y",
    github: "https://github.com/joywins-y",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
