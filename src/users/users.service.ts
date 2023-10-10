import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/user.schema';
import { UserCreateDto } from './dto/userCreate.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private UsersModel: Model<Users>) {}
  async getAll(): Promise<Users[] | null> {
    const Users = await this.UsersModel.find().exec();
    return Users;
  }
  async create(dto: UserCreateDto): Promise<Users> {
    const Signs = new this.UsersModel(dto);
    const sign = await Signs.save();
    return sign;
  }
  async getById(_id: string): Promise<Users | null> {
    return this.UsersModel.findById(_id);
  }
  async delete(id: string) {
    const res = await this.UsersModel.deleteOne({ _id: id });
    return res;
  }
  async getUserByEmail(userEmail: string) {
    const user = await this.UsersModel.findOne({ email: userEmail });
    return user;
  }
}
