import { HttpException, Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDto, SignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signup({ name, surname, email, phone, password }: SignupDto, role: Role) {
    const userExists = await this.validateUser(email);

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
        role: role,
      },
    });

    const token = await this.generateJWT(user.name, user.id);

    return token;
  }

  async signin({ email, password }: SigninDto) {
    const user = await this.validateUser(email);

    if (!user) throw new HttpException('Invalid email!', 400);

    const hashedPassword = user.password;

    const isValidPassword = bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) throw new HttpException('Invalid password!', 400);

    const token = await this.generateJWT(user.name, user.id);

    return token;
  }

  async validateUser(email) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  private generateJWT(name: string, id: string) {
    return jwt.sign(
      {
        name,
        id,
      },
      process.env.JSON_WEB_TOKEN_KEY,
      { expiresIn: 36000000 },
    );
  }
}
