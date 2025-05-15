import { IS_BROWSER } from "$fresh/runtime.ts";
import { getAuthToken } from "./auth.ts";

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

type FetchFunction = (url: string, options?: RequestOptions) => Promise<any>;

export function createFetch(baseURL = "", defaultHeaders: Record<string, string> = {}): FetchFunction {
  return async function (url, options: RequestOptions = {}) {
    const fullURL = baseURL + url;
    let headers = { ...defaultHeaders, ...options.headers };
    const token = getAuthToken();
    if (token) {
      headers = {
        ...headers,
        'Authorization': `Bearer ${token}`
      };
    }

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


let apiBaseUrl: string; // API 기본 URL을 저장할 변수 선언

if (IS_BROWSER) {
  // 코드가 브라우저 환경에서 실행 중인 경우
  if (location.origin === "http://localhost:43000") {
    apiBaseUrl = 'http://localhost:3000/api/';
  } else {
    apiBaseUrl = "https://bangerdirect.site/api/";
  }
} else { // 서버에서 실행중인 경우 
  apiBaseUrl =  'http://localhost:3000/api/';
}

const API_BASE_URL = apiBaseUrl;

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