import { User } from './schemas/user.schema';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user-interface';

@Injectable()
export class UserRepository {

    constructor(@InjectModel(User.name) private readonly userModel: Model<IUser>) { }

    async findByEmail(email: string): Promise<User> {
        const foundUser = await this.userModel.findOne({ email: email }).exec();
        if (!foundUser) {
            throw new NotFoundException('User not found')
        }
        return new User(foundUser.toJSON())
    }

}