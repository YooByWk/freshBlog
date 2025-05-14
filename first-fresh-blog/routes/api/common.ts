import { createFetch } from "./image.ts";

interface P {
  encoded: string;
}
// const URL = Deno.env.get("URL") || 'http://localhost:3000/api/';
const URL = 'http://localhost:3000/api/';
const api = createFetch(URL);
console.log(URL);

class CommonAPIClass {
  async getP(): Promise<P> {
    return api('banger');
  }
}

export const CommonAPI = new CommonAPIClass();