import { IS_BROWSER } from "$fresh/runtime.ts";

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

type FetchFunction = (url: string, options?: RequestOptions) => Promise<any>;

export function createFetch(baseURL = "", defaultHeaders: Record<string, string> = {}): FetchFunction {
  return async function (url, options: RequestOptions = {}) {
    const fullURL = baseURL + url;
    const headers = { ...defaultHeaders, ...options.headers };
    const config: RequestOptions = { ...options, headers };

    try {
      const res = await fetch(fullURL, config);
      if (!res.ok) { throw new Error(`Error: ${res.status} ${res.statusText}`); }
      const data: any = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      throw new Error(`Failed to fetch ${fullURL}: ${err}`);
    }

  };
}
const URL = 'http://localhost:3000/api/';
const API_BASE_URL = IS_BROWSER
  ? "http://bangerdirect.site/api/"
  : 'http://localhost:3000/api/';
// env 로 수정
const apiFetch: FetchFunction = createFetch(API_BASE_URL, {
  // "Content-Type": "application/json",
});


class ImageAPIClass {

  async uploadImage(file: File, title?: string, slug?: string): Promise<any> {
    const formData = new FormData();
    if (title) {
      formData.append('title', title);
    }
    if (slug) {
      formData.append('slug', slug);

    }
    formData.append('image', file);

    try {
      const res = await apiFetch('image', {
        headers: {},
        method: "POST",
        body: formData
      });
      console.log(res, "이미지 업로드 성공");
      return res;
    } catch (err) {
      console.error('uploadImage Error: ', err);
    }
  }
}

// 싱글톤 패턴으로 ImageAPIClass 인스턴스 생성
export const ImageAPI = new ImageAPIClass();