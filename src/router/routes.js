import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail.vue";

export default [
  { name: "home", path: "/", component: Home },
  { name: "blog", path: "/blog", component: Blog },
  { name: "categoryBlog", path: "/blog/category/:categoryId", component: Blog },
  { name: "blogDetail", path: "/blog/:id", component: BlogDetail },
  { name: "about", path: "/about", component: About },
  { name: "project", path: "/project", component: Project },
  { name: "message", path: "/message", component: Message },
];
