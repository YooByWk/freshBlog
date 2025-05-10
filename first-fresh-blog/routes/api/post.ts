
import { createFetch } from "./image.ts";

const api = createFetch('http://localhost/api/');


class PostAPIClass {
  async createPost(post: any, imgIds: (string | number)[]) {
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
      return res;
    } catch (err) {
      console.error('createPost Error: ', err);
    }
  } // createPost ends
}

export const PostAPI = new PostAPIClass();