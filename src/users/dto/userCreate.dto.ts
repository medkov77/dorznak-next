import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ example: 'mail@mail.ru', description: 'email пользователя' })
  @IsString({ message: 'Поле должно бытьстрокой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: 'kjhz!@#4', description: 'пароль' })
  @IsString({ message: 'Поле должно бытьстрокой' })
  @Length(4, 16, { message: 'от 4 до 16 символов' })
  readonly password: string;
}
