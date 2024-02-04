import { Test, TestingModule } from '@nestjs/testing';
import { TuiteService } from './tuite.service';

describe('TuiteService', () => {
  let service: TuiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuiteService],
    }).compile();

    service = module.get<TuiteService>(TuiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
