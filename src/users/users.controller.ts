import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/userCreate.dto';
import { Users } from './schemas/user.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('users')
export class UsersController {
  constructor(private readonly Userservice: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получить спсок пользователей' })
  @ApiResponse({ status: 200, type: [Users] })
  @Get()
  getAll() {
    return this.Userservice.getAll();
  }
  @ApiOperation({ summary: 'Создание пользавателя' })
  @ApiResponse({ status: 200, type: Users })
  @Post()
  create(@Body(new ValidationPipe()) dto: UserCreateDto) {
    return this.Userservice.create(dto);
  }
  @Get(':_id')
  async getById(@Param() _id: string): Promise<Users | null> {
    return this.Userservice.getById(_id);
  }
  @Delete(':_id')
  async delete(@Param() _id: string) {
    return this.Userservice.delete(_id);
  }
}
