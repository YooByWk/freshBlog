import { Controller, Get } from '@danet/core';
import { encodeHex } from 'jsr:@std/encoding@~0.220.1/hex';


@Controller('')
export class AppController {
  constructor() {
  }

  @Get()
  helloWorld() {
    return 'Hello World';
  }

  @Get('banger')
  async banger() {
    const p = Deno.env.get("BANGER_PW");
    const hashP = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p));
    const encoded = encodeHex(hashP);
    return { encoded };
  }
}
