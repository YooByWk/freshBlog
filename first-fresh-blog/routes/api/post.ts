
import { IS_BROWSER } from "$fresh/runtime.ts";
import { createFetch } from "./image.ts";



let apiBaseUrl: string; // API 기본 URL을 저장할 변수 선언

if (IS_BROWSER) {
  // 코드가 브라우저 환경에서 실행 중인 경우
  if (location.origin === "http://localhost:43000") {
    apiBaseUrl = 'http://localhost:3000/api/';
  } else {
    apiBaseUrl = Deno.env.get("DOMAIN") || "https://bangerdirect.site/api/";
  }
} else { // 서버에서 실행중인 경우 
  apiBaseUrl = Deno.env.get("URL") || 'http://localhost:3000/api/';
}

const API_BASE_URL = apiBaseUrl;
const api = createFetch(API_BASE_URL);

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
    try {
      const post = await api(`post/detail/${slug}`, {
        method: "GET"
      });
      console.log(post);
      return post;
    } catch (error) {
      console.error('getPostBySlug Error: ', error);
      throw new Error(`Failed to fetch post by slug: ${error}`);
    }
  }

  async deletePostBySlug(slug: string) {
    try {
      await api(`post/detail/${slug}`, { method: "DELETE" });
    } catch (err) { console.log(err); }
  }
}

export const PostAPI = new PostAPIClass();