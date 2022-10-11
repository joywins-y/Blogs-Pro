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

/** 获取博客 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/** 
 * 提交评论
 * blogId nickName content
 */
export async function postComment(params) {
  return await request.post(`/api/comment`, params);
}

/** 获取评论 分页 */
export async function getComments(blogId, page = 1, limit = 10) {
  return await request.get(`/api/comment`, {
    params: { blogId, page, limit },
  });
}
