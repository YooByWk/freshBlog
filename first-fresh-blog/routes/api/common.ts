import { createFetch } from "./image.ts";

interface P {
  encoded: string;
}

const api = createFetch('http://localhost/api/');

class CommonAPIClass {
  async getP(): Promise<P> {
    return api('banger');
  }
}

export const CommonAPI = new CommonAPIClass();