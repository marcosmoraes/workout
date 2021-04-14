import * as mongoose from 'mongoose';
import { BaseDBObject } from '../../common/model/base-db-object.model';
import { User, UserSchema } from '../../user/schema/user.schema';
import { Type } from 'class-transformer';

export const FitnessTestSchema = new mongoose.Schema({
    user: UserSchema,
    shoulderGirdle: Number,
    chestCircumference: Number,
    abdominalCircumference: Number,
    hipCircumference: Number,
    circumferenceRightArm: Number,
    circumferenceLeftArm: Number,
    rightForearmCircumference: Number,
    leftForearmCircumference: Number,
    leftThighCircumference: Number,
    rightThighCircumference: Number,
    leftCalfCircumference: Number,
    rightCalfCircumference: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
export class FitnessTest extends BaseDBObject {

    @Type(() => User)
    user!: User

    //cintura Escapular
    shoulderGirdle!: number

    //Circunferencia Torax
    chestCircumference!: number

    //Cir.Abdominal
    abdominalCircumference!: number

    //Cir.Quadril
    hipCircumference!: number

    //Cir.Braço direito
    circumferenceRightArm!: number

    //Cir.Braço esquerdo
    circumferenceLeftArm!: number

    //Cir.antebraço direito
    rightForearmCircumference!: number

    //Cir.antebraço esquerdo
    leftForearmCircumference!: number

    //Cir.coxa esquerda
    leftThighCircumference!: number

    //Cir.coxa direita
    rightThighCircumference!: number

    //Cir panturrilha esquerda
    leftCalfCircumference!: number

    //Cir.panturrilha direita
    rightCalfCircumference!: number


    constructor(partial: Partial<FitnessTest> = {}) {
        super();
        Object.assign(this, partial);
    }
}

