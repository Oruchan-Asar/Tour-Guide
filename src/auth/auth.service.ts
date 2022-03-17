import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { UsersService } from '../users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDto, SignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async signup({ name, surname, email, phone, password }: SignupDto) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new HttpException('User already exist!', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        name,
        surname,
        email,
        phone,
        password: hashedPassword,
        role: Role.Traveler,
      },
    });

    const token = await jwt.sign(
      {
        name,
        id: user.id,
      },
      process.env.JSON_WEB_TOKEN_KEY,
      { expiresIn: 3600000 },
    );

    return token;
  }

  async signin({ email, password }: SigninDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new HttpException('Invalid email!', 400);

    const hashedPassword = user.password;

    const isValidPassword = bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) throw new HttpException('Invalid password!', 400);

    const token = await jwt.sign(
      {
        name: user.name,
        id: user.id,
      },
      process.env.JSON_WEB_TOKEN_KEY,
      { expiresIn: 3600000 },
    );
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
