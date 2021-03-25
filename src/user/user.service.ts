import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: Object(id) });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: Object(id) }, updateUserDto);
  }

  async remove(id: string) {
    return this.userModel.findOneAndRemove({ _id: Object(id) }, {new: true, useFindAndModify: false});
  }
}
