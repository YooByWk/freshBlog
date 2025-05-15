import { AuthGuard, ExecutionContext, HttpException, Inject, Injectable, HttpContext } from '@danet/core';
import { AuthService } from './auth.service.ts';

@Injectable()
export class SimpleAuthGuard implements AuthGuard {
  constructor(@Inject() private readonly authService: AuthService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.req;
    const authHeader = request.header('Authorization');

    // 토큰 검증 로직
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new HttpException(401, "Authorization 헤더가 없거나 형식이 잘못되었습니다.");
    }



    const token = authHeader.substring(7);

    const user = await this.authService.validateToken(token);
    if (!user) {
      throw new HttpException(401, "유효하지 않은 토큰입니다.");
    }


    return true;
  }
}