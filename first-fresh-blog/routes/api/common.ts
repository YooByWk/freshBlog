import { createFetch } from "./image.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface P {
  encoded: string;
}
// const URL = Deno.env.get("URL") || 'http://localhost:3000/api/';
// 아일랜드에서 실행될 때, 서버에서 실행될 때 로직이 다름. - 이미지도 마찬가지겠지.
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

console.log(URL);

class CommonAPIClass {
  async getP(isServer = true): Promise<P> {
    return api('banger');
  }
  async login(username: string, password: string) {
    const payload = {
      username,
      password
    }
    return api('auth/login', {
      method: "POST",
      body: JSON.stringify(payload)
    })
  }
}

export const CommonAPI = new CommonAPIClass();