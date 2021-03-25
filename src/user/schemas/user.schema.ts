import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//require('mongoose').set('debug', true)

@Schema()
export class User extends Document{

    @Prop()
    name: string;

    @Prop()
    age: number;

}

export const UserSchema = SchemaFactory.createForClass(User);