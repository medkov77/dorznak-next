import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserCreateDto } from 'src/users/dto/userCreate.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userServis: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(dto: UserCreateDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }
  async createUser(dto: UserCreateDto) {
    const candidat = await this.userServis.getUserByEmail(dto.email);
    console.log(candidat);
    if (candidat) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userServis.create({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }
  private async generateToken(user) {
    const payload = { email: user.email, id: user._id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
  private async validateUser(userDto) {
    const user = await this.userServis.getUserByEmail(userDto.email);
    const passwordEqual = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEqual) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }
}
