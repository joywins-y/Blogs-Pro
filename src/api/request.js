import { showMessage } from "@/utils";
import axios from "axios";

// 创建一个 axios 的实例
const ins = axios.create({});
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
