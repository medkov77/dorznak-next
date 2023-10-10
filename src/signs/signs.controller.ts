import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SignsService } from './signs.service';
import { SignDto } from './dto/signs.sreate.dto';
import { Signs } from './schemas/signs.schema';
@Controller('/signs')
export class SignsController {
  constructor(private readonly signService: SignsService) {}
  @Get()
  getAll() {
    return this.signService.getAll();
  }
  @Post()
  create(@Body() dto: SignDto) {
    return this.signService.create(dto);
  }
  @Get(':_id')
  async getById(@Param() _id: string): Promise<Signs | null> {
    return this.signService.getById(_id);
  }
  @Delete(':_id')
  async delete(@Param() _id: string) {
    return this.signService.delete(_id);
  }
}
