import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignsController } from './signs.controller';
import { SignsService } from './signs.service';
import { SignsSchema, Signs } from './schemas/signs.schema';
import { FilesModule } from 'src/files/files.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Signs.name, schema: SignsSchema }]),
    FilesModule,
  ],
  controllers: [SignsController],
  providers: [SignsService],
})
export class SignsModule {}
