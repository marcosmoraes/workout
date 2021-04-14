import { Test, TestingModule } from '@nestjs/testing';
import { FitnessTestController } from './fitness-test.controller';
import { FitnessTestService } from './fitness-test.service';

describe('FitnessTestController', () => {
  let controller: FitnessTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FitnessTestController],
      providers: [FitnessTestService],
    }).compile();

    controller = module.get<FitnessTestController>(FitnessTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
