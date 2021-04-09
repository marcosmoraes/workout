import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { IUser } from './user-interface';


@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<IUser>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    if (!createdUser) {
      throw new InternalServerErrorException
    }
    return new User(createdUser.toJSON());
  }

  async findOne(id: string): Promise<User> {
    const foundUser = await this.userModel.findOne({ _id: Object(id) }).exec();
    if (!foundUser) {
      throw new NotFoundException('User not found')
    }
    return new User(foundUser.toJSON())
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
