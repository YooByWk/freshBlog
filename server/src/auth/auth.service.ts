import { Injectable, Logger } from '@danet/core';
import { KeyLike } from 'node:crypto';
import { JWTPayload, jwtVerify, SignJWT } from "npm:jose@6.0.11";

const ADMIN_USERNAME = Deno.env.get("ADMIN_USERNAME");
const ADMIN_PASSWORD = Deno.env.get("ADMIN_PASSWORD");
const JWT_SECRET = Deno.env.get("JWT_SECRET");


@Injectable()
export class AuthService {
  private secret: Uint8Array<ArrayBufferLike>
  constructor() {
    this.secret = new TextEncoder().encode(JWT_SECRET);
   }
  private logger = new Logger("AuthService");
  validateUser(username: string, password: string) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return { id: "ADMIN", username: username };
    }
    return null;
  }

  async generateToken(user: { id: string; username: string; }) {

    const payload = {
      sub: user.id,
      username: user.username,
      iss: "BangerDirect"
    };

    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(this.secret);

    return jwt;
  }

  async validateToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, this.secret);
      this.logger.log(`JWT 검증 성공, ${payload}`);
      return payload as JWTPayload;
    } catch (error) {
      this.logger.error(`JWT 검증 실패, ${error}`);
      return null;
    }
  }

}