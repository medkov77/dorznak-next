import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Signs } from './schemas/signs.schema';
import { SignDto } from './dto/signs.sreate.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class SignsService {
  constructor(
    @InjectModel(Signs.name) private SignsModel: Model<Signs>,
    private filesService: FilesService,
  ) {}
  async getAll(): Promise<Signs[] | null> {
    const Signs = await this.SignsModel.find().exec();
    return Signs;
  }

  async create(dto: SignDto): Promise<Signs> {
    const Signs = new this.SignsModel(dto);
    const fileName = await this.filesService.createFile(dto.imgSrc);
    const sign = await Signs.save();
    return sign;
  }
  async getById(_id: string): Promise<Signs | null> {
    return this.SignsModel.findById(_id);
  }
  async delete(id: string) {
    const res = await this.SignsModel.deleteOne({ _id: id });
    return res;
  }
}
