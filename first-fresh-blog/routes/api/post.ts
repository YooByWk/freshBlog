
import { createFetch } from "./image.ts";

const api = createFetch('http://localhost/api/');

export interface IPost {
  id?: number;
  slug: string;
  title: string;
  content: string;
  summary: string;
  createdAt?: string;
  updatedAt?: string;

}




class PostAPIClass {
  async createPost(post: Omit<IPost, 'id' | 'createdAt' | 'updatedAt'>, imgIds: (string | number)[]) {
    const payload = {
      post,
      imgIds
    };

    try {
      const res = await api('post', {
        headers: {},
        method: "POST",
        body: JSON.stringify(payload)
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error('createPost Error: ', err);
    }
  } // createPost ends

  async getAllPosts(search?: string) {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';

    try {
      const res = await api(`post${query}`, {
        method: "GET"
      });

      return res;

    } catch (err) {
      console.log(err);
      throw new Error(`Failed to fetch posts: ${err}`);
    }
  } // getAllposts ends 

  // 슬러그를 통한 포스트 가져오기
  async getPostBySlug(slug: string) {

  }
}

export const PostAPI = new PostAPIClass();