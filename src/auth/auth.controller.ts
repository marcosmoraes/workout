import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { GoogleAuthGuard } from './guard/google-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    console.log(req.user);
    return req.user;
  }

  @UseGuards(GoogleAuthGuard)
  @Get()
  async googleAuth(@Req() req: any) { }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req: any) {
    return this.authService.googleLogin(req)
  }
}
