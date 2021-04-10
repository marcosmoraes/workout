import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string
  age: number
  email: string
  password: string
  salt: string
}