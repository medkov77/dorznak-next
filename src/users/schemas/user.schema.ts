import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @ApiProperty({ example: 'mail@mail.ru', description: 'email пользователя' })
  @Prop()
  email: string;

  @ApiProperty({ example: 'kjhz!@#4', description: 'пароль' })
  @Prop()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
