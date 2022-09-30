import request from "./request";

/**
 * 获取博客列表数据
 * @param {*} params page = 1, limit = 10, categoryId = -1
 * @returns
 */
export async function getBlogs({ page = 1, limit = 10, categoryId = -1 }) {
  return await request.get("/api/blog", {
    params: { page, limit, categoryId },
  });
}

/** 获取博客分类 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}
