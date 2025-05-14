import { createFetch } from "./image.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface P {
  encoded: string;
}
// const URL = Deno.env.get("URL") || 'http://localhost:3000/api/';
// 아일랜드에서 실행될 때, 서버에서 실행될 때 로직이 다름. - 이미지도 마찬가지겠지.
const URL = 'http://localhost:3000/api/';

const API_BASE_URL = IS_BROWSER
  ? "https://bangerdirect.site/api/"
  : 'http://localhost:3000/api/';
const api = createFetch(API_BASE_URL);

console.log(URL);

class CommonAPIClass {
  async getP(isServer = true): Promise<P> {
    return api('banger');
  }
}

export const CommonAPI = new CommonAPIClass();