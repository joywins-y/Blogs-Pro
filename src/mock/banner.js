import Mock from "mockjs";

Mock.mock("/api/banner", "GET", {
  code: 0,
  msg: "",
  data: [
    {
      id: 1,
      minImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "凛冬将至",
      desc: "人唯有恐惧的时候方能勇敢",
    },
  ],
});
