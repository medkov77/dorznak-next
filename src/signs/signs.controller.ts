import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SignsService } from './signs.service';
import { SignDto } from './dto/signs.sreate.dto';
import { Signs } from './schemas/signs.schema';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('/signs')
export class SignsController {
  constructor(private readonly signService: SignsService) {}
  @Get()
  getAll() {
    return this.signService.getAll();
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() dto: SignDto, @UploadedFile() file: Express.Multer.File) {
    return this.signService.create(dto, file);
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
