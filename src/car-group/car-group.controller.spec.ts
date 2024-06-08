import { Test, TestingModule } from '@nestjs/testing';
import { CarGroupController } from './car-group.controller';
import { CarGroupService } from './car-group.service';

describe('CarGroupController', () => {
  let controller: CarGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarGroupController],
      providers: [CarGroupService],
    }).compile();

    controller = module.get<CarGroupController>(CarGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
