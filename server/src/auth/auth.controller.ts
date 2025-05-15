import { Body, Controller, Get, Logger, Post, Res, UseGuard } from '@danet/core';
import { AuthService } from './auth.service.ts';
import { SimpleAuthGuard } from './SimpleAuthGuard.guard.ts';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  private logger = new Logger("AuthController");

  // login 
  @Post('login')
  async login(@Body() loginDto: { username: string, password: string; }, @Res() res: Response) {
    const { username, password } = loginDto;
    this.logger.log(`login ${username}`);
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new Error("Invalid username or password");
    }
    const token = await this.authService.generateToken(user);
    const cookieName = 'authToken';
    const cookieValue = token;
    const expirationDate = new Date(Date.now() + (1000 * 60 * 60 * 2)); // 2시간 후 만료
    const cookieOptions = `HttpOnly; Secure; SameSite=Strict; Path=/; Expires=${expirationDate.toUTCString()}`;

    res.headers.set('Set-Cookie', `${cookieName}=${cookieValue}; ${cookieOptions}`);

    return { token };
  }

  @Get()
  @UseGuard(SimpleAuthGuard)
  async verify() {
    return ({ status: 200 });
  }
}