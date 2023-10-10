import { Controller, Get, Post, Body } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreateDto } from './dto/price.create.dto';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}
  @Get()
  async getPrice() {
    return this.priceService.getAll();
  }

  @Post()
  async create(@Body() dto: CreateDto) {
    this.priceService.create(dto);
  }
}
