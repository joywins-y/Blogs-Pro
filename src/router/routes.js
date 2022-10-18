import "nprogress/nprogress.css"; 
import { start, done, configure } from 'nprogress';
import NotFound from '@/views/NotFound';

configure({
  trickleSpeed: 20, // 修改加载速度
  showSpinner: false, // 不显示转动的小圈
});
// window.start = start;
// window.done = done;

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

function getPageComponent(pageComp) {
  return async () => {
    start();
    console.log("组件开始加载");
    if (process.env.NODE_ENV === 'development') {
      await delay(2000);
    }
    const comp = await pageComp();
    done();
    console.log("组件加载结束");
    return comp;
  };
}

export default [
  {
    name: 'home',
    path: '/',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'home' */ '@/views/Home')
    ),
    meta: { title: '首页' },
  },
  {
    name: 'blog',
    path: '/blog',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'blog' */ '@/views/Blog')
    ),
    meta: { title: '博客' },
  },
  {
    name: 'categoryBlog',
    path: '/blog/category/:categoryId',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'blog' */ '@/views/Blog')
    ),
  },
  {
    name: 'blogDetail',
    path: '/blog/:id',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'blogdetail' */ '@/views/Blog/Detail')
    ),
  },
  {
    name: 'about',
    path: '/about',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'about' */ '@/views/About')
    ),
    meta: { title: '关于我' },
  },
  {
    name: 'project',
    path: '/project',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'project' */ '@/views/Project')
    ),
    meta: { title: '项目 & 效果' },
  },
  {
    name: 'message',
    path: '/message',
    component: getPageComponent(() =>
      import(/* webpackChunkName：'message' */ '@/views/Message')
    ),
    meta: { title: '留言板' },
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
];
