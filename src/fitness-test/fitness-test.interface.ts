import * as mongoose from 'mongoose';

export interface IFitnessTest extends mongoose.Document {
  shoulderGirdle: number
  chestCircumference: number
  abdominalCircumference: number
  hipCircumference: number
  circumferenceRightArm: number
  circumferenceLeftArm: number
  rightForearmCircumference: number
  leftForearmCircumference: number
  leftThighCircumference: number
  rightThighCircumference: number
  leftCalfCircumference: number
  rightCalfCircumference: number
}