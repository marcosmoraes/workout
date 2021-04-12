import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    private userService: UserService, private jwtService: JwtService) { }


  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await this.isMatchPassword(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async isMatchPassword(pass: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(pass, hash)
  }

  async googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google'
    }
    return {
      message: 'User Info from Google',
      user: req.user
    }
  }


}
