import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail.vue";

export default [
  { name: "home", path: "/", component: Home, meta: { title: "首页" } },
  { name: "blog", path: "/blog", component: Blog, meta: { title: "博客" } },
  {
    name: "categoryBlog",
    path: "/blog/category/:categoryId",
    component: Blog,
  },
  {
    name: "blogDetail",
    path: "/blog/:id",
    component: BlogDetail,
  },
  {
    name: "about",
    path: "/about",
    component: About,
    meta: { title: "关于我" },
  },
  {
    name: "project",
    path: "/project",
    component: Project,
    meta: { title: "项目 & 效果" },
  },
  {
    name: "message",
    path: "/message",
    component: Message,
    meta: { title: "留言板" },
  },
];
