import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FitnessTest } from './schema/fitness-test.schema';
import { IFitnessTest } from './fitness-test.interface';
import { CreateFitnessTestDto } from './dto/create-fitness-test.dto';
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { UserRepository } from '../user/user.repository';

@Injectable()
export class FitnessTestRepository {

    constructor(
        @InjectModel(FitnessTest.name) private readonly fitnessTestModel: Model<IFitnessTest>,
        private readonly userRepository: UserRepository
    ) { }

    async create(createFitnessTestDto: CreateFitnessTestDto): Promise<FitnessTest> {
        const userFound = this.userRepository.findByEmail(createFitnessTestDto.user.email)
        createFitnessTestDto.user.name = (await userFound).name
        createFitnessTestDto.user.age = (await userFound).age
        createFitnessTestDto.user.email = (await userFound).email
        const createdFitnessTest = await this.fitnessTestModel.create(createFitnessTestDto);
        console.log(createdFitnessTest);
        if (!createdFitnessTest) {
            throw new InternalServerErrorException
        }
        return new FitnessTest(createdFitnessTest.toJSON());
    }

    async findByUserEmail(email: string): Promise<FitnessTest> {
        const fitnessTestFound = await this.fitnessTestModel.findOne({ 'user.email': email }).exec()

        if (!fitnessTestFound) {
            throw new NotFoundException('User not found')
        }
        return new FitnessTest(fitnessTestFound.toJSON())
    }
}