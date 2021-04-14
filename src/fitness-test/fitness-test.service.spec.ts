import { Test, TestingModule } from '@nestjs/testing';
import { FitnessTestService } from './fitness-test.service';

describe('FitnessTestService', () => {
  let service: FitnessTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FitnessTestService],
    }).compile();

    service = module.get<FitnessTestService>(FitnessTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
