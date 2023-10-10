import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Price } from './schemas/price.schema';
import { CreateDto } from './dto/price.create.dto';

@Injectable()
export class PriceService {
  constructor(@InjectModel(Price.name) private PriceModel: Model<Price>) {}
  async getAll(): Promise<Price[] | null> {
    const price = await this.PriceModel.find().exec();
    return price;
  }

  async create(dto: CreateDto): Promise<Price> {
    const price = new this.PriceModel(dto);
    return price.save();
  }
}
