import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<CreateUserDto | null> {
    const user = await this.userModel.findOne({ _id: Object(id) });
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate({ _id: Object(id) }, updateUserDto, { new: true, useFindAndModify: false });
    if (!updatedUser) {
      throw new NotFoundException('User not found')
    }
    return updatedUser
  }

  async remove(id: string) {
    const removedUser = await this.userModel.findByIdAndRemove({ _id: Object(id) }, { new: true, useFindAndModify: false });
    if (!removedUser) {
      throw new NotFoundException('User not found')
    }
    return removedUser
  }
}
