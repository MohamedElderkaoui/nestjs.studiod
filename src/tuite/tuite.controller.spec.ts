import { Test, TestingModule } from '@nestjs/testing';
import { TuiteController } from './tuite.controller';

describe('TuiteController', () => {
  let controller: TuiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuiteController],
    }).compile();

    controller = module.get<TuiteController>(TuiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
