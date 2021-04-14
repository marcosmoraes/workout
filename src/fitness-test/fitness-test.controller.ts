import { Controller, Get, Post, Body, Patch, Param, Delete, ClassSerializerInterceptor, UseInterceptors, Query } from '@nestjs/common';
import { FitnessTestService } from './fitness-test.service';
import { CreateFitnessTestDto } from './dto/create-fitness-test.dto';
import { UpdateFitnessTestDto } from './dto/update-fitness-test.dto';
import { FitnessTest } from './schema/fitness-test.schema';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('fitness-test')
export class FitnessTestController {
  constructor(private readonly fitnessTestService: FitnessTestService) { }

  @Post()
  async create(@Body() createFitnessTestDto: CreateFitnessTestDto): Promise<FitnessTest> {
    return this.fitnessTestService.create(createFitnessTestDto);
  }

  @Get('users')
  async getByUserEmail(@Query('email') email: string): Promise<FitnessTest> {
    return this.fitnessTestService.findByUserEmail(email)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fitnessTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFitnessTestDto: UpdateFitnessTestDto) {
    return this.fitnessTestService.update(+id, updateFitnessTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fitnessTestService.remove(+id);
  }
}
