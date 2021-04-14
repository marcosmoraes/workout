import { Module } from '@nestjs/common';
import { FitnessTestService } from './fitness-test.service';
import { FitnessTestController } from './fitness-test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FitnessTest, FitnessTestSchema } from './schema/fitness-test.schema';
import { UserSchema } from 'src/user/schema/user.schema';
import { User } from '../user/schema/user.schema';
import { FitnessTestRepository } from './fitness-test.repository';
import { UserRepository } from '../user/user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: FitnessTest.name, schema: FitnessTestSchema }, { name: User.name, schema:  UserSchema }])],
  controllers: [FitnessTestController],
  providers: [FitnessTestService, FitnessTestRepository, UserRepository]
})
export class FitnessTestModule { }