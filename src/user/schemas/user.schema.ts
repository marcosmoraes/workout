import { Exclude } from 'class-transformer';
import { BaseDBObject } from '../../common/model/base-db-object.model';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

//https://stackoverflow.com/questions/59547243/create-dtos-bos-and-daos-for-nestjs-rest-api?newreg=05d22af89e8246248da7472e8ae141b0

export const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    salt: String
});

export class User extends BaseDBObject {

    name!: string;

    age!: number;

    email!: string

    @Exclude()
    password!: string

    constructor(partial: Partial<User> = {}) {
        super();
        Object.assign(this, partial);
    }

    async createHashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

}