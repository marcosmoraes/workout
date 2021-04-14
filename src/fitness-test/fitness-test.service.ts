import { Injectable } from '@nestjs/common';
import { CreateFitnessTestDto } from './dto/create-fitness-test.dto';
import { UpdateFitnessTestDto } from './dto/update-fitness-test.dto';
import { FitnessTest } from './schema/fitness-test.schema';
import { FitnessTestRepository } from './fitness-test.repository';

@Injectable()
export class FitnessTestService {

  constructor(private readonly fitnessTestRepository: FitnessTestRepository) { }

  async create(createFitnessTestDto: CreateFitnessTestDto): Promise<FitnessTest> {
    try {
      return this.fitnessTestRepository.create(createFitnessTestDto)
    } catch (error) {
      return error
    }
  }

  async findByUserEmail(email: string): Promise<FitnessTest> {
    try {
      return this.fitnessTestRepository.findByUserEmail(email)
    } catch (error) {
      return error
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} fitnessTest`;
  }

  update(id: number, updateFitnessTestDto: UpdateFitnessTestDto) {
    return `This action updates a #${id} fitnessTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} fitnessTest`;
  }
}
