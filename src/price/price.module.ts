import { Price, PriceSchema } from './schemas/price.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]),
  ],
  controllers: [PriceController],
  providers: [PriceService, PrismaService],
})
export class PriceModule {}
