import { Body, Controller, Param, ParseEnumPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup/:role')
  signup(@Body() body: SignupDto, @Param('role', new ParseEnumPipe(Role)) role: Role) {
    return this.authService.signup(body, role);
  }

  @Post('signin')
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }
}
