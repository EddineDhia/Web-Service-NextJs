import { Test, TestingModule } from '@nestjs/testing';
import { CarGroupService } from './car-group.service';

describe('CarGroupService', () => {
  let service: CarGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarGroupService],
    }).compile();

    service = module.get<CarGroupService>(CarGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
