import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/users/dto/userCreate.dto';
import { AuthService } from './auth.service';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from 'src/pipes/validation.pipe';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  login(@Body() dto: UserCreateDto) {
    return this.authService.login(dto);
  }
  @Post('/registred')
  @UsePipes(ValidationPipe)
  registred(@Body() dto: UserCreateDto) {
    return this.authService.createUser(dto);
  }
}
