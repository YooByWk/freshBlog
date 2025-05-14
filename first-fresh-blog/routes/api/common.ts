import { createFetch } from "./image.ts";

interface P {
  encoded: string;
}
const URL = Deno.env.get("URL") || 'http://localhost/api/';
const api = createFetch(URL);

class CommonAPIClass {
  async getP(): Promise<P> {
    return api('banger');
  }
}

export const CommonAPI = new CommonAPIClass();